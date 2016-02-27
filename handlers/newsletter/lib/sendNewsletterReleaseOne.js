'use strict';

const path = require('path');
const Newsletter = require('../models/newsletter');
const NewsletterRelease = require('../models/newsletterRelease');
const Subscription = require('../models/subscription');
const MailListEmail = require('../models/mailListEmail');
const CourseParticipant = require('courses').CourseParticipant;
const mailer = require('mailer');
const Letter = require('mailer').Letter;
const config = require('config');
const log = require('log')();
const jade = require('lib/serverJade');
const BasicParser = require('markit').BasicParser;
const logoBase64 = require('fs').readFileSync(path.join(config.projectRoot, 'assets/img/logo.png')).toString('base64');
const assert = require('assert');
const template = require('lodash/template');

// options.noLabel means send one letter w/o labelId, doesn't count as a newsletter
function* sendNewsletterReleaseOne(newsletterRelease, recipient, options) {
  options = options || {};

  let message = {
    subject:      newsletterRelease.title,
    headers:      {
      Precedence: 'bulk'
    }
  };

  let locals = Object.assign({
    lang:       config.lang,
    domain:     config.domain,
    logoBase64: logoBase64
  }, config.jade);


  // from = informer
  if (recipient instanceof Subscription) {
    locals.unsubscribeUrl = config.server.siteHost + '/newsletter/subscriptions/' + recipient.accessKey;
    let sender = config.mailer.senders.informer;

    message.from = {
      name: sender.fromName,
      address: sender.fromEmail
    };

    message.to = {address: recipient.email};
    message.headers['List-ID'] = '<from.javascript.ru>';
    message.headers['List-Unsubscribe'] = `<${locals.unsubscribeUrl}>`;
    locals.signagure = sender.signature;

  } else if (recipient instanceof CourseParticipant) {
    // from release author
    assert(recipient.user.email);
    message.to = {
      address: recipient.user.email,
      name:  recipient.fullName
    };


    if (newsletterRelease.user.teacherEmail) {
      message.from = {
        name: newsletterRelease.user.displayName + ' (JavaScript.ru)',
        address: newsletterRelease.user.teacherEmail
      };

    } else {
      let sender = config.mailer.senders.informer;
      message.from = {
        name: sender.fromName,
        address: sender.fromEmail
      };
    }

    locals.signature = newsletterRelease.user.emailSignature ?
      new BasicParser().render(newsletterRelease.user.emailSignature) :
      `<em>Успешной разработки!<br>${newsletterRelease.user.displayName}</em>`;

  } else if (recipient instanceof MailListEmail) {

    let sender = config.mailer.senders.informer;

    message.from = {
      name: sender.fromName,
      address: sender.fromEmail
    };

    message.to = {address: recipient.email};
    locals.signagure = sender.signature;

  } else if (typeof recipient == 'string') {
    // "test letter" to string email

    message.to = {address: recipient};
    if (newsletterRelease.user.teacherEmail) {
      message.from = {
        name: newsletterRelease.user.displayName + ' (JavaScript.ru)' ,
        address: newsletterRelease.user.teacherEmail
      };
    } else {
      let sender = config.mailer.senders.informer;

      message.from = {
        name: sender.fromName,
        address: sender.fromEmail
      };
    }
    locals.signature = newsletterRelease.user.emailSignature ?
      new BasicParser().render(newsletterRelease.user.emailSignature) :
      `<em>Успешной разработки!<br>${newsletterRelease.user.displayName}</em>`;

  } else {
    log.error("Unknown recipient", recipient);
    throw new Error("Unknown recipient type: " + recipient);
  }

  // no content templating yet
  let parser = new BasicParser();

  let content = newsletterRelease.content.replace(/PROFILE_URL/g,
    recipient.user ? ('https://' + config.domain.main + recipient.user.getProfileUrl()) : '/profile'
  );

  locals.messageBody = parser.render(content);

  log.debug("Created letter to " + message.to.address, message, locals);

  let letterHtml = jade.renderFile(__dirname + '/../templates/admin/email.jade', Object.assign({}, locals, message));
  letterHtml = yield mailer.inlineCss(letterHtml);

  message.html = letterHtml;

  let letter = new Letter({
    message: message,
    labelId: options.noLabel ? undefined : newsletterRelease._id
  });

  yield* mailer.sendLetter(letter);

  log.debug("Sent letter to " + message.to.address);
}


module.exports = sendNewsletterReleaseOne;
