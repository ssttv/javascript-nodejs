var tutorial = webpackJsonp_name_([ 4 ], [ function(e, t, n) {
"use strict";
function r() {
function e() {
var e = document.getElementsByClassName("sidebar__navigation-link_active");
e[0] && e[0].classList.remove("sidebar__navigation-link_active");
for (var t = document.getElementsByTagName("h2"), n = 0; n < t.length; n++) {
var r = t[n];
if (r.getBoundingClientRect().top > 0) break;
}
if (n--, n >= 0) {
var i = t[n].firstElementChild && t[n].firstElementChild.getAttribute("href"), o = document.querySelector('.sidebar__navigation-link a[href="' + i + '"]');
i && o && o.classList.add("sidebar__navigation-link_active");
}
}
document.addEventListener("DOMContentLoaded", function() {
e(), window.addEventListener("scroll", e);
});
}
function i() {
a(document, ".task__solution", "click", function(e) {
e.target.closest(".task").classList.toggle("task__answer_open");
}), a(document, ".task__answer-close", "click", function(e) {
e.target.closest(".task").classList.toggle("task__answer_open");
}), a(document, ".task__step-show", "click", function(e) {
e.target.closest(".task__step").classList.toggle("task__step_open");
});
}
function o() {
a(document, ".lessons-list__lesson_level_1 > .lessons-list__link", "click", function(e) {
var t = e.delegateTarget, n = t.closest(".lessons-list").querySelector(".lessons-list__lesson_open");
n && n != t.parentNode && n.classList.remove("lessons-list__lesson_open"), t.parentNode.classList.toggle("lessons-list__lesson_open"), 
e.preventDefault();
});
}
var a = n(27), s = n(36), u = (n(28), n(24));
t.init = function() {
i(), o(), r(), a(document, '[data-action="tutorial-map"]', "click", function(e) {
new u(), e.preventDefault();
}), s.init(), window.isEbook && n.e(1, function() {
n(26).init();
});
}, t.TutorialMap = n(25);
}, , , , , , , , , , , , , , , , , , , , , function(e) {
"use strict";
function t() {
for (var e = document.querySelectorAll("[data-sticky]"), t = 0; t < e.length; t++) {
var r = e[t], i = r.dataset.sticky ? document.querySelector(r.dataset.sticky) : document.body;
if (r.getBoundingClientRect().top < 0) {
if (r.style.cssText) return;
var o = r.getBoundingClientRect().left, a = n(r);
r.parentNode.insertBefore(a, r), i.appendChild(r), r.classList.add("sticky"), r.style.position = "fixed", 
r.style.top = 0, r.style.left = o + "px", r.style.zIndex = 101, r.style.background = "white", 
r.style.margin = 0, r.style.width = a.offsetWidth + "px", r.placeholder = a;
} else r.placeholder && r.placeholder.getBoundingClientRect().top > 0 && (r.style.cssText = "", 
r.classList.remove("sticky"), r.placeholder.parentNode.insertBefore(r, r.placeholder), 
r.placeholder.remove(), r.placeholder = null);
}
}
function n(e) {
var t = document.createElement("div"), n = getComputedStyle(e);
return t.style.width = e.offsetWidth + "px", t.style.marginLeft = n.marginLeft, 
t.style.marginRight = n.marginRight, t.style.height = e.offsetHeight + "px", t.style.marginBottom = n.marginBottom, 
t.style.marginTop = n.marginTop, t;
}
e.exports = t;
}, , , function(e, t, n) {
"use strict";
function r() {
a.apply(this, arguments);
var e = new s();
this.setContent(e.elem), e.start();
var t = this.request({
url: "/tutorial/map"
}), n = this;
t.addEventListener("success", function(e) {
var t = document.createElement("div");
t.className = "tutorial-map-overlay", t.innerHTML = e.result + '<button class="close-button tutorial-map-overlay__close"></button>', 
document.body.classList.add("tutorial-map_on"), n.setContent(t), t.addEventListener("scroll", c), 
new u(n.contentElem.firstElementChild);
}), t.addEventListener("fail", function() {
n.remove();
});
}
var i = n(28), o = n(27), a = n(9), s = n(37), u = n(25), c = n(21);
r.prototype = Object.create(a.prototype), o.delegateMixin(r.prototype), r.prototype.remove = function() {
a.prototype.remove.apply(this, arguments), document.body.classList.remove("tutorial-map_on");
}, r.prototype.request = function(e) {
var t = i(e);
return t;
}, e.exports = r;
}, function(e, t, n) {
"use strict";
function r(e) {
var t = this;
this.elem = e, this.showTasksCheckbox = e.querySelector("[data-tutorial-map-show-tasks]"), 
this.showTasksCheckbox.checked = +localStorage.showTasksCheckbox, this.updateShowTasks(), 
this.showTasksCheckbox.onchange = this.updateShowTasks.bind(this), this.filterInput = this.elem.querySelector("[data-tutorial-map-filter]"), 
this.textInputBlock = this.elem.querySelector(".tutorial-map__filter .text-input"), 
this.layoutSwitch = this.elem.querySelector("[data-tutorial-map-layout-switch]");
var n = +localStorage.isMapSingleColumn;
this.layoutSwitch.querySelector('[value="0"]').checked = !n, this.layoutSwitch.querySelector('[value="1"]').checked = n, 
this.updateLayout(), this.layoutSwitch.onchange = this.onLayoutSwitchChange.bind(this), 
this.filterInput.oninput = this.onFilterInput.bind(this), this.filterInput.onkeydown = this.onFilterKeydown.bind(this), 
this.elem.querySelector(".close-button").onclick = function() {
t.filterInput.value = "", t.showClearButton(!1), t.filter("");
}, this.chaptersCollapsed = JSON.parse(localStorage.tutorialMapChapters || "{}"), 
this.showChaptersCollapsed(), this.delegate(".tutorial-map__item > .tutorial-map__link", "click", function(e) {
e.preventDefault();
var t = e.delegateTarget.getAttribute("href");
this.chaptersCollapsed[t] ? delete this.chaptersCollapsed[t] : this.chaptersCollapsed[t] = 1, 
localStorage.tutorialMapChapters = JSON.stringify(this.chaptersCollapsed), this.showChaptersCollapsed();
});
var r = this.elem.querySelector('[href="' + location.pathname + '"]');
r && r.classList.add("tutorial-map__link_active"), this.focus();
}
function i(e, t) {
for (var n = 0, r = 0; n < e.length && r < t.length; ) e[n] == t[r] ? (n++, r++) : n++;
return r == t.length;
}
var o = n(51), a = n(27);
r.prototype.showChaptersCollapsed = function() {
for (var e = this.elem.querySelectorAll(".tutorial-map__item > .tutorial-map__link"), t = 0; t < e.length; t++) {
var n = e[t];
this.chaptersCollapsed[n.getAttribute("href")] ? n.parentNode.classList.add("tutorial-map__item_collapsed") : n.parentNode.classList.remove("tutorial-map__item_collapsed");
}
}, r.prototype.onLayoutSwitchChange = function() {
this.updateLayout();
}, r.prototype.updateLayout = function() {
var e = +this.elem.querySelector('[name="map-layout"]:checked').value;
e ? this.elem.classList.add("tutorial-map_singlecol") : this.elem.classList.remove("tutorial-map_singlecol"), 
localStorage.isMapSingleColumn = e ? "1" : "0";
}, r.prototype.updateShowTasks = function() {
this.showTasksCheckbox.checked ? this.elem.classList.add("tutorial-map_show-tasks") : this.elem.classList.remove("tutorial-map_show-tasks"), 
localStorage.showTasksCheckbox = this.showTasksCheckbox.checked ? "1" : "0";
}, r.prototype.onFilterInput = function(e) {
this.showClearButton(e.target.value), this.throttleFilter(e.target.value);
}, r.prototype.onFilterKeydown = function(e) {
27 == e.keyCode && (this.filterInput.value = "", this.showClearButton(!1), this.filter(""));
}, r.prototype.showClearButton = function(e) {
e ? this.textInputBlock.classList.add("text-input_clear-button") : this.textInputBlock.classList.remove("text-input_clear-button");
}, r.prototype.focus = function() {
this.elem.tabIndex = -1, this.elem.focus();
}, r.prototype.filter = function(e) {
function t(t) {
return i(t.querySelector("a").innerHTML.toLowerCase(), e.replace(/\s/g, ""));
}
e = e.toLowerCase();
for (var n = this.showTasksCheckbox.checked, r = (this.elem.querySelectorAll(".tutorial-map-link"), 
this.elem.querySelectorAll(".tutorial-map__item")), o = 0; o < r.length; o++) {
var a = r[o], s = a.querySelectorAll(".tutorial-map__sub-item"), u = Array.prototype.reduce.call(s, function(e, r) {
var i = !1;
if (n) {
var o = r.querySelectorAll(".tutorial-map__sub-sub-item");
i = Array.prototype.reduce.call(o, function(e, n) {
var r = t(n);
return n.hidden = !r, e || r;
}, !1);
}
var a = i || t(r);
return r.hidden = !a, e || a;
}, !1);
a.hidden = !(u || t(a));
}
}, r.prototype.throttleFilter = o(r.prototype.filter, 200), a.delegateMixin(r.prototype), 
e.exports = r;
}, , , function(e, t, n) {
"use strict";
function r(e) {
function t(e) {
window.metrika.reachGoal("XHR-" + e.toUpperCase(), {
time: Date.now() - a.timeStart,
method: a.method,
url: a.url,
status: a.status + ""
});
}
function n(e, t) {
var n = new CustomEvent(e);
return n.originalEvent = t, n;
}
function r(e, t) {
var r = n("fail", t);
r.reason = e, a.dispatchEvent(r);
}
function i(e, t) {
var r = n("success", t);
r.result = e, a.dispatchEvent(r);
}
var a = new XMLHttpRequest(), s = e.method || "GET", u = e.body, c = e.url;
a.open(s, c, e.sync ? !1 : !0), a.method = s;
var l = o();
l && !e.skipCsrf && a.setRequestHeader("X-XSRF-TOKEN", l), "[object Object]" == {}.toString.call(u) && (a.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
u = JSON.stringify(u)), a.addEventListener("loadstart", function(e) {
a.timeStart = Date.now(), t(e.type);
var r = n("xhrstart", e);
document.dispatchEvent(r);
}), a.addEventListener("loadend", function(e) {
t(e.type);
var r = n("xhrend", e);
document.dispatchEvent(r);
}), a.addEventListener("success", function(e) {
t(e.type);
var r = n("xhrsuccess", e);
r.result = e.result, document.dispatchEvent(r);
}), a.addEventListener("fail", function(e) {
t(e.type);
var r = n("xhrfail", e);
r.reason = e.reason, document.dispatchEvent(r);
}), e.raw || a.setRequestHeader("Accept", "application/json"), a.setRequestHeader("X-Requested-With", "XMLHttpRequest");
var f = e.normalStatuses || [ 200 ];
return a.addEventListener("error", function(e) {
r("Ошибка связи с сервером.", e);
}), a.addEventListener("timeout", function(e) {
r("Превышено максимально допустимое время ожидания ответа от сервера.", e);
}), a.addEventListener("abort", function(e) {
r("Запрос был прерван.", e);
}), a.addEventListener("load", function(t) {
if (!a.status) return void r("Не получен ответ от сервера.", t);
if (-1 == f.indexOf(a.status)) return void r("Ошибка на стороне сервера (код " + a.status + "), попытайтесь позднее", t);
var n = a.responseText, o = a.getResponseHeader("Content-Type");
if (o.match(/^application\/json/) || e.json) try {
n = JSON.parse(n);
} catch (t) {
return void r("Некорректный формат ответа от сервера", t);
}
i(n, t);
}), setTimeout(function() {
a.send(u);
}, 0), a;
}
var i = n(23), o = n(38);
document.addEventListener("xhrfail", function(e) {
new i.Error(e.reason);
}), e.exports = r;
}, , , , , , , , function(e, t, n) {
"use strict";
function r(e) {
for (var t = e.querySelectorAll(".code-example:not([data-prism-done])"), n = 0; n < t.length; n++) {
var r = t[n];
new a(r), r.setAttribute("data-prism-done", "1");
}
}
function i(e) {
for (var t = e.querySelectorAll("div.code-tabs:not([data-prism-done])"), n = 0; n < t.length; n++) new s(t[n]), 
t[n].setAttribute("data-prism-done", "1");
}
function o(e) {
r(e), i(e);
}
n(59), n(60), n(61), n(62), n(63), n(64), n(65), n(66), n(67), n(68), n(69), n(70), 
n(71), n(72), n(73), Prism.tokenTag = "code";
var a = n(53), s = n(54);
t.init = function() {
document.removeEventListener("DOMContentLoaded", Prism.highlightAll), document.addEventListener("DOMContentLoaded", function() {
o(document);
});
}, t.highlight = o;
}, , function(e) {
"use strict";
e.exports = function() {
var e = document.cookie.match(/XSRF-TOKEN=([\w-]+)/);
return e ? e[1] : null;
};
}, , , , , , , , , , , , , , , function(e, t, n) {
"use strict";
function r(e) {
function t() {
var e = m[0].contentWindow;
return "function" != typeof e.postMessage ? void alert("Извините, запуск кода требует более современный браузер") : void e.postMessage(p, "//ru.lookatcode.com/showjs");
}
function n() {
var t;
if ($ && e.dataset.refresh && ($.remove(), $ = null), $ || ($ = e.querySelector(".code-result")), 
$) t = $.querySelector("iframe"); else {
if ($ = document.createElement("div"), $.className = "code-result code-example__result", 
t = document.createElement("iframe"), t.name = "frame-" + Math.random(), t.className = "code-result__iframe", 
"0" === e.dataset.demoHeight) t.style.display = "none"; else if (e.dataset.demoHeight) {
var n = +e.dataset.demoHeight;
t.style.height = n + "px";
}
$.appendChild(t), e.appendChild($);
}
if (y) {
var r = t.contentDocument || t.contentWindow.document;
r.open(), r.write(l(p)), r.close(), void 0 === e.dataset.demoHeight && a.iframe(t), 
w && void 0 !== e.dataset.autorun || s($) || $.scrollIntoView(!1);
} else {
var i = document.createElement("form");
i.style.display = "none", i.method = "POST", i.enctype = "multipart/form-data", 
i.action = "//ru.lookatcode.com/showhtml", i.target = t.name;
var o = document.createElement("textarea");
o.name = "code", o.value = l(p), i.appendChild(o), t.parentNode.insertBefore(i, t.nextSibling), 
i.submit(), i.remove(), w && void 0 !== e.dataset.autorun || (t.onload = function() {
void 0 === e.dataset.demoHeight && a.iframe(t), s($) || $.scrollIntoView(!1);
});
}
}
function r() {
if (y) try {
window.eval.call(window, p);
} catch (n) {
alert("Ошибка: " + n.message);
} else e.dataset.refresh && m && (m.remove(), m = null), m ? t() : (m = document.createElement("iframe"), 
m.className = "js-frame", m.src = "//ru.lookatcode.com/showjs", m.style.width = 0, 
m.style.height = 0, m.style.border = "none", m.onload = function() {
t();
}, document.body.appendChild(m));
}
function c() {
var e;
if (g) e = l(p); else {
var t = p.replace(/^/gim, "    ");
e = "<!DOCTYPE html>\n<html>\n\n<body>\n  <script>\n" + t + "\n  </script>\n</body>\n\n</html>";
}
var n = document.createElement("form");
n.action = "http://plnkr.co/edit/?p=preview", n.method = "POST", n.target = "_blank", 
document.body.appendChild(n);
var r = document.createElement("textarea");
r.name = "files[index.html]", r.value = e, n.appendChild(r);
var i = document.createElement("input");
i.name = "description", i.value = "Fork from " + window.location, n.appendChild(i), 
n.submit(), n.remove();
}
function l() {
var e = p.toLowerCase(), t = e.match("<body>"), n = e.match("</body>"), r = e.match("<html>"), i = e.match("</html>"), o = e.match(/^\s*<!doctype/);
if (o) return p;
var a = p;
return r || (a = "<html>\n" + a), i || (a += "\n</html>"), t || (a = a.replace("<html>", '<html>\n<head>\n  <meta charset="utf-8">\n</head><body>\n')), 
n || (a = a.replace("</html>", "\n</body>\n</html>")), a = "<!DOCTYPE HTML>\n" + a;
}
function f() {
v ? r() : n(), w = !1;
}
var h = e.querySelector("pre"), d = h.querySelector("code"), p = d.textContent;
Prism.highlightElement(d), u(h), i(h, e.dataset.highlightBlock), o(h, e.dataset.highlightInline);
var m, $, v = h.classList.contains("language-javascript"), g = h.classList.contains("language-markup"), y = e.dataset.trusted, w = !0;
if (v || g) {
var b = e.querySelector('[data-action="run"]');
b && (b.onclick = function() {
return this.blur(), f(), !1;
});
var E = e.querySelector('[data-action="edit"]');
E && (E.onclick = function() {
return this.blur(), c(), !1;
}), void 0 !== e.dataset.autorun && ("epub" == window.ebookFormat && "no-epub" == e.dataset.autorun ? e.querySelector("iframe").remove() : setTimeout(f, 1e3));
}
}
function i(e, t) {
if (t) for (var n, r = t.replace(/\s+/g, "").split(","), i = 0; n = r[i++]; ) {
n = n.split("-");
var o = +n[0], a = +n[1] || o, s = '<code class="block-highlight" data-start="' + o + '" data-end="' + a + '">' + Array(o + 1).join("\n") + '<code class="mask">' + Array(a - o + 2).join("\n") + "</code></code>";
e.insertAdjacentHTML("afterBegin", s);
}
}
function o(e, t) {
var n = e.querySelector('code[class*="language-"]');
t = t ? t.split(",") : [];
for (var r = 0; r < t.length; r++) {
var i = t[r].split(":"), o = +i[0], a = i[1].split("-"), s = +a[0], u = +a[1], c = '<code class="inline-highlight">' + Array(o + 1).join("\n") + Array(s + 1).join(" ") + '<code class="mask">' + Array(u - s + 1).join(" ") + "</code></code>";
n.insertAdjacentHTML("afterBegin", c);
}
}
var a = n(18), s = n(80), u = n(79);
e.exports = r;
}, function(e, t, n) {
"use strict";
function r(e) {
window.isEbook || (this.elem = e, this.translateX = 0, this.switchesElem = e.querySelector("[data-code-tabs-switches]"), 
this.switchesElemItems = this.switchesElem.firstElementChild, this.arrowLeft = e.querySelector("[data-code-tabs-left]"), 
this.arrowRight = e.querySelector("[data-code-tabs-right]"), this.arrowLeft.onclick = function(e) {
e.preventDefault(), this.translateX = Math.max(0, this.translateX - this.switchesElem.offsetWidth), 
this.renderTranslate();
}.bind(this), this.arrowRight.onclick = function(e) {
e.preventDefault(), this.translateX = Math.min(this.translateX + this.switchesElem.offsetWidth, this.switchesElemItems.offsetWidth - this.switchesElem.offsetWidth), 
this.renderTranslate();
}.bind(this), this.delegate(".code-tabs__switch", "click", this.onSwitchClick));
}
var i = n(27), o = n(79);
r.prototype.onSwitchClick = function(e) {
e.preventDefault();
for (var t, n = e.delegateTarget.parentNode.children, r = this.elem.querySelector("[data-code-tabs-content]").children, i = 0; i < n.length; i++) {
var o = n[i], a = r[i];
o == e.delegateTarget ? (t = i, a.classList.add("code-tabs__section_current"), o.classList.add("code-tabs__switch_current")) : (a.classList.remove("code-tabs__section_current"), 
o.classList.remove("code-tabs__switch_current"));
}
0 === t ? this.elem.classList.add("code-tabs_result_on") : (this.elem.classList.remove("code-tabs_result_on"), 
this.highlightTab(r[t]));
}, r.prototype.highlightTab = function(e) {
if (!e.highlighted) {
var t = e.querySelector("pre"), n = t.querySelector("code");
Prism.highlightElement(n), o(t), e.highlighted = !0;
}
}, r.prototype.renderTranslate = function() {
this.switchesElemItems.style.transform = "translateX(-" + this.translateX + "px)", 
0 === this.translateX ? this.arrowLeft.setAttribute("disabled", "") : this.arrowLeft.removeAttribute("disabled"), 
this.translateX === this.switchesElemItems.offsetWidth - this.switchesElem.offsetWidth ? this.arrowRight.setAttribute("disabled", "") : this.arrowRight.removeAttribute("disabled");
}, i.delegateMixin(r.prototype), e.exports = r;
}, , , , , function(e) {
self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {};
var t = function() {
var e = /\blang(?:uage)?-(?!\*)(\w+)\b/i, n = self.Prism = {
util: {
encode: function(e) {
return e instanceof r ? new r(e.type, n.util.encode(e.content), e.alias) : "Array" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
},
type: function(e) {
return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1];
},
clone: function(e) {
var t = n.util.type(e);
switch (t) {
case "Object":
var r = {};
for (var i in e) e.hasOwnProperty(i) && (r[i] = n.util.clone(e[i]));
return r;

case "Array":
return e.slice();
}
return e;
}
},
languages: {
extend: function(e, t) {
var r = n.util.clone(n.languages[e]);
for (var i in t) r[i] = t[i];
return r;
},
insertBefore: function(e, t, r, i) {
i = i || n.languages;
var o = i[e];
if (2 == arguments.length) {
r = arguments[1];
for (var a in r) r.hasOwnProperty(a) && (o[a] = r[a]);
return o;
}
var s = {};
for (var u in o) if (o.hasOwnProperty(u)) {
if (u == t) for (var a in r) r.hasOwnProperty(a) && (s[a] = r[a]);
s[u] = o[u];
}
return n.languages.DFS(n.languages, function(t, n) {
n === i[e] && t != e && (this[t] = s);
}), i[e] = s;
},
DFS: function(e, t, r) {
for (var i in e) e.hasOwnProperty(i) && (t.call(e, i, e[i], r || i), "Object" === n.util.type(e[i]) ? n.languages.DFS(e[i], t) : "Array" === n.util.type(e[i]) && n.languages.DFS(e[i], t, i));
}
},
highlightAll: function(e, t) {
for (var r, i = document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'), o = 0; r = i[o++]; ) n.highlightElement(r, e === !0, t);
},
highlightElement: function(t, i, o) {
for (var a, s, u = t; u && !e.test(u.className); ) u = u.parentNode;
if (u && (a = (u.className.match(e) || [ , "" ])[1], s = n.languages[a]), s) {
t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + a, 
u = t.parentNode, /pre/i.test(u.nodeName) && (u.className = u.className.replace(e, "").replace(/\s+/g, " ") + " language-" + a);
var c = t.textContent;
if (c) {
var l = {
element: t,
language: a,
grammar: s,
code: c
};
if (n.hooks.run("before-highlight", l), i && self.Worker) {
var f = new Worker(n.filename);
f.onmessage = function(e) {
l.highlightedCode = r.stringify(JSON.parse(e.data), a), n.hooks.run("before-insert", l), 
l.element.innerHTML = l.highlightedCode, o && o.call(l.element), n.hooks.run("after-highlight", l);
}, f.postMessage(JSON.stringify({
language: l.language,
code: l.code
}));
} else l.highlightedCode = n.highlight(l.code, l.grammar, l.language), n.hooks.run("before-insert", l), 
l.element.innerHTML = l.highlightedCode, o && o.call(t), n.hooks.run("after-highlight", l);
}
}
},
highlight: function(e, t, i) {
var o = n.tokenize(e, t);
return r.stringify(n.util.encode(o), i);
},
tokenize: function(e, t) {
var r = n.Token, i = [ e ], o = t.rest;
if (o) {
for (var a in o) t[a] = o[a];
delete t.rest;
}
e: for (var a in t) if (t.hasOwnProperty(a) && t[a]) {
var s = t[a];
s = "Array" === n.util.type(s) ? s : [ s ];
for (var u = 0; u < s.length; ++u) {
var c = s[u], l = c.inside, f = !!c.lookbehind, h = 0, d = c.alias;
c = c.pattern || c;
for (var p = 0; p < i.length; p++) {
var m = i[p];
if (i.length > e.length) break e;
if (!(m instanceof r)) {
c.lastIndex = 0;
var $ = c.exec(m);
if ($) {
f && (h = $[1].length);
var v = $.index - 1 + h, $ = $[0].slice(h), g = $.length, y = v + g, w = m.slice(0, v + 1), b = m.slice(y + 1), E = [ p, 1 ];
w && E.push(w);
var S = new r(a, l ? n.tokenize($, l) : $, d);
E.push(S), b && E.push(b), Array.prototype.splice.apply(i, E);
}
}
}
}
}
return i;
},
hooks: {
all: {},
add: function(e, t) {
var r = n.hooks.all;
r[e] = r[e] || [], r[e].push(t);
},
run: function(e, t) {
var r = n.hooks.all[e];
if (r && r.length) for (var i, o = 0; i = r[o++]; ) i(t);
}
}
}, r = n.Token = function(e, t, n) {
this.type = e, this.content = t, this.alias = n;
};
if (r.stringify = function(e, i, o) {
if ("string" == typeof e) return e;
if ("[object Array]" == Object.prototype.toString.call(e)) return e.map(function(t) {
return r.stringify(t, i, e);
}).join("");
var a = {
type: e.type,
content: r.stringify(e.content, i, o),
tag: t.tokenTag || "span",
classes: [ "token", e.type ],
attributes: {},
language: i,
parent: o
};
if ("comment" == a.type && (a.attributes.spellcheck = "true"), e.alias) {
var s = "Array" === n.util.type(e.alias) ? e.alias : [ e.alias ];
Array.prototype.push.apply(a.classes, s);
}
n.hooks.run("wrap", a);
var u = "";
for (var c in a.attributes) u += c + '="' + (a.attributes[c] || "") + '"';
return "<" + a.tag + ' class="' + a.classes.join(" ") + '" ' + u + ">" + a.content + "</" + a.tag + ">";
}, !self.document) return self.addEventListener ? (self.addEventListener("message", function(e) {
var t = JSON.parse(e.data), r = t.language, i = t.code;
self.postMessage(JSON.stringify(n.util.encode(n.tokenize(i, n.languages[r])))), 
self.close();
}, !1), self.Prism) : self.Prism;
var i = document.getElementsByTagName("script");
return i = i[i.length - 1], i && (n.filename = i.src, document.addEventListener && !i.hasAttribute("data-manual") && document.addEventListener("DOMContentLoaded", n.highlightAll)), 
self.Prism;
}();
void 0 !== e && e.exports && (e.exports = t);
}, function() {
Prism.languages.markup = {
comment: /<!--[\w\W]*?-->/g,
prolog: /<\?.+?\?>/,
doctype: /<!DOCTYPE.+?>/,
cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
tag: {
pattern: /<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/gi,
inside: {
tag: {
pattern: /^<\/?[\w:-]+/i,
inside: {
punctuation: /^<\/?/,
namespace: /^[\w-]+?:/
}
},
"attr-value": {
pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,
inside: {
punctuation: /=|>|"/g
}
},
punctuation: /\/?>/g,
"attr-name": {
pattern: /[\w:-]+/g,
inside: {
namespace: /^[\w-]+?:/
}
}
}
},
entity: /\&#?[\da-z]{1,8};/gi
}, Prism.hooks.add("wrap", function(e) {
"entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
});
}, function() {
Prism.languages.css = {
comment: /\/\*[\w\W]*?\*\//g,
atrule: {
pattern: /@[\w-]+?.*?(;|(?=\s*{))/gi,
inside: {
punctuation: /[;:]/g
}
},
url: /url\((["']?).*?\1\)/gi,
selector: /[^\{\}\s][^\{\};]*(?=\s*\{)/g,
property: /(\b|\B)[\w-]+(?=\s*:)/gi,
string: /("|')(\\?.)*?\1/g,
important: /\B!important\b/gi,
punctuation: /[\{\};:]/g,
"function": /[-a-z0-9]+(?=\()/gi
}, Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
style: {
pattern: /<style[\w\W]*?>[\w\W]*?<\/style>/gi,
inside: {
tag: {
pattern: /<style[\w\W]*?>|<\/style>/gi,
inside: Prism.languages.markup.tag.inside
},
rest: Prism.languages.css
},
alias: "language-css"
}
}), Prism.languages.insertBefore("inside", "attr-value", {
"style-attr": {
pattern: /\s*style=("|').+?\1/gi,
inside: {
"attr-name": {
pattern: /^\s*style/gi,
inside: Prism.languages.markup.tag.inside
},
punctuation: /^\s*=\s*['"]|['"]\s*$/,
"attr-value": {
pattern: /.+/gi,
inside: Prism.languages.css
}
},
alias: "language-css"
}
}, Prism.languages.markup.tag));
}, function() {
Prism.languages.css.selector = {
pattern: /[^\{\}\s][^\{\}]*(?=\s*\{)/g,
inside: {
"pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/g,
"pseudo-class": /:[-\w]+(?:\(.*\))?/g,
"class": /\.[-:\.\w]+/g,
id: /#[-:\.\w]+/g
}
}, Prism.languages.insertBefore("css", "function", {
hexcode: /#[\da-f]{3,6}/gi,
entity: /\\[\da-f]{1,8}/gi,
number: /[\d%\.]+/g
});
}, function() {
Prism.languages.clike = {
comment: [ {
pattern: /(^|[^\\])\/\*[\w\W]*?\*\//g,
lookbehind: !0
}, {
pattern: /(^|[^\\:])\/\/.*?(\r?\n|$)/g,
lookbehind: !0
} ],
string: /("|')(\\?.)*?\1/g,
"class-name": {
pattern: /((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/gi,
lookbehind: !0,
inside: {
punctuation: /(\.|\\)/
}
},
keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/g,
"boolean": /\b(true|false)\b/g,
"function": {
pattern: /[a-z0-9_]+\(/gi,
inside: {
punctuation: /\(/
}
},
number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,
operator: /[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,
ignore: /&(lt|gt|amp);/gi,
punctuation: /[{}[\];(),.:]/g
};
}, function() {
Prism.languages.javascript = Prism.languages.extend("clike", {
keyword: /\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/g,
number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|-?Infinity)\b/g,
"function": /(?!\d)[a-z0-9_$]+(?=\()/gi
}), Prism.languages.insertBefore("javascript", "keyword", {
regex: {
pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,
lookbehind: !0
}
}), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
script: {
pattern: /<script[\w\W]*?>[\w\W]*?<\/script>/gi,
inside: {
tag: {
pattern: /<script[\w\W]*?>|<\/script>/gi,
inside: Prism.languages.markup.tag.inside
},
rest: Prism.languages.javascript
},
alias: "language-javascript"
}
});
}, function() {
!function(e) {
var t = /#(?!\{).+/g, n = {
pattern: /#\{[^}]+\}/g,
alias: "variable"
};
e.languages.coffeescript = e.languages.extend("javascript", {
comment: t,
string: [ /'(?:\\?[\s\S])*?'/g, {
pattern: /"(?:\\?[\s\S])*?"/g,
inside: {
interpolation: n
}
} ],
keyword: /\b(and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/g,
"class-member": {
pattern: /@(?!\d)\w+/,
alias: "variable"
}
}), e.languages.insertBefore("coffeescript", "comment", {
"multiline-comment": {
pattern: /###[\s\S]+?###/g,
alias: "comment"
},
"block-regex": {
pattern: /\/{3}[\s\S]*?\/{3}/,
alias: "regex",
inside: {
comment: t,
interpolation: n
}
}
}), e.languages.insertBefore("coffeescript", "string", {
"inline-javascript": {
pattern: /`(?:\\?[\s\S])*?`/g,
inside: {
delimiter: {
pattern: /^`|`$/g,
alias: "punctuation"
},
rest: e.languages.javascript
}
},
"multiline-string": [ {
pattern: /'''[\s\S]*?'''/,
alias: "string"
}, {
pattern: /"""[\s\S]*?"""/,
alias: "string",
inside: {
interpolation: n
}
} ]
}), e.languages.insertBefore("coffeescript", "keyword", {
property: /(?!\d)\w+(?=\s*:(?!:))/g
});
}(Prism);
}, function() {
Prism.languages.http = {
"request-line": {
pattern: /^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b\shttps?:\/\/\S+\sHTTP\/[0-9.]+/g,
inside: {
property: /^\b(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/g,
"attr-name": /:\w+/g
}
},
"response-status": {
pattern: /^HTTP\/1.[01] [0-9]+.*/g,
inside: {
property: /[0-9]+[A-Z\s-]+$/gi
}
},
keyword: /^[\w-]+:(?=.+)/gm
};
var e = {
"application/json": Prism.languages.javascript,
"application/xml": Prism.languages.markup,
"text/xml": Prism.languages.markup,
"text/html": Prism.languages.markup
};
for (var t in e) if (e[t]) {
var n = {};
n[t] = {
pattern: RegExp("(content-type:\\s*" + t + "[\\w\\W]*?)\\n\\n[\\w\\W]*", "gi"),
lookbehind: !0,
inside: {
rest: e[t]
}
}, Prism.languages.insertBefore("http", "keyword", n);
}
}, function() {
Prism.languages.scss = Prism.languages.extend("css", {
comment: {
pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,
lookbehind: !0
},
atrule: /@[\w-]+(?=\s+(\(|\{|;))/gi,
url: /([-a-z]+-)*url(?=\()/gi,
selector: /([^@;\{\}\(\)]?([^@;\{\}\(\)]|&|\#\{\$[-_\w]+\})+)(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/gm
}), Prism.languages.insertBefore("scss", "atrule", {
keyword: /@(if|else if|else|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)|(?=@for\s+\$[-_\w]+\s)+from/i
}), Prism.languages.insertBefore("scss", "property", {
variable: /((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i
}), Prism.languages.insertBefore("scss", "function", {
placeholder: /%[-_\w]+/i,
statement: /\B!(default|optional)\b/gi,
"boolean": /\b(true|false)\b/g,
"null": /\b(null)\b/g,
operator: /\s+([-+]{1,2}|={1,2}|!=|\|?\||\?|\*|\/|\%)\s+/g
});
}, function() {
Prism.languages.sql = {
comment: {
pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|((--)|(\/\/)|#).*?(\r?\n|$))/g,
lookbehind: !0
},
string: {
pattern: /(^|[^@])("|')(\\?[\s\S])*?\2/g,
lookbehind: !0
},
variable: /@[\w.$]+|@("|'|`)(\\?[\s\S])+?\1/g,
"function": /\b(?:COUNT|SUM|AVG|MIN|MAX|FIRST|LAST|UCASE|LCASE|MID|LEN|ROUND|NOW|FORMAT)(?=\s*\()/gi,
keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALTER|ANALYZE|APPLY|AS|ASC|AUTHORIZATION|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADE|CASCADED|CASE|CHAIN|CHAR VARYING|CHARACTER VARYING|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLUMN|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT|CURRENT_DATE|CURRENT_TIME|CURRENT_TIMESTAMP|CURRENT_USER|CURSOR|DATA|DATABASE|DATABASES|DATETIME|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DOUBLE PRECISION|DROP|DUMMY|DUMP|DUMPFILE|DUPLICATE KEY|ELSE|ENABLE|ENCLOSED BY|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPE|ESCAPED BY|EXCEPT|EXEC|EXECUTE|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR|FOR EACH ROW|FORCE|FOREIGN|FREETEXT|FREETEXTTABLE|FROM|FULL|FUNCTION|GEOMETRY|GEOMETRYCOLLECTION|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|IDENTITY|IDENTITY_INSERT|IDENTITYCOL|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTO|INVOKER|ISOLATION LEVEL|JOIN|KEY|KEYS|KILL|LANGUAGE SQL|LAST|LEFT|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONGBLOB|LONGTEXT|MATCH|MATCHED|MEDIUMBLOB|MEDIUMINT|MEDIUMTEXT|MERGE|MIDDLEINT|MODIFIES SQL DATA|MODIFY|MULTILINESTRING|MULTIPOINT|MULTIPOLYGON|NATIONAL|NATIONAL CHAR VARYING|NATIONAL CHARACTER|NATIONAL CHARACTER VARYING|NATIONAL VARCHAR|NATURAL|NCHAR|NCHAR VARCHAR|NEXT|NO|NO SQL|NOCHECK|NOCYCLE|NONCLUSTERED|NULLIF|NUMERIC|OF|OFF|OFFSETS|ON|OPEN|OPENDATASOURCE|OPENQUERY|OPENROWSET|OPTIMIZE|OPTION|OPTIONALLY|ORDER|OUT|OUTER|OUTFILE|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREV|PRIMARY|PRINT|PRIVILEGES|PROC|PROCEDURE|PUBLIC|PURGE|QUICK|RAISERROR|READ|READS SQL DATA|READTEXT|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEATABLE|REPLICATION|REQUIRE|RESTORE|RESTRICT|RETURN|RETURNS|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROWCOUNT|ROWGUIDCOL|ROWS?|RTREE|RULE|SAVE|SAVEPOINT|SCHEMA|SELECT|SERIAL|SERIALIZABLE|SESSION|SESSION_USER|SET|SETUSER|SHARE MODE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|START|STARTING BY|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLE|TABLES|TABLESPACE|TEMP(?:ORARY)?|TEMPTABLE|TERMINATED BY|TEXT|TEXTSIZE|THEN|TIMESTAMP|TINYBLOB|TINYINT|TINYTEXT|TO|TOP|TRAN|TRANSACTION|TRANSACTIONS|TRIGGER|TRUNCATE|TSEQUAL|TYPE|TYPES|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNPIVOT|UPDATE|UPDATETEXT|USAGE|USE|USER|USING|VALUE|VALUES|VARBINARY|VARCHAR|VARCHARACTER|VARYING|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH|WITH ROLLUP|WITHIN|WORK|WRITE|WRITETEXT)\b/gi,
"boolean": /\b(?:TRUE|FALSE|NULL)\b/gi,
number: /\b-?(0x)?\d*\.?[\da-f]+\b/g,
operator: /\b(?:ALL|AND|ANY|BETWEEN|EXISTS|IN|LIKE|NOT|OR|IS|UNIQUE|CHARACTER SET|COLLATE|DIV|OFFSET|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b|[-+]{1}|!|[=<>]{1,2}|(&){1,2}|\|?\||\?|\*|\//gi,
punctuation: /[;[\]()`,.]/g
};
}, function() {
Prism.languages.php = Prism.languages.extend("clike", {
keyword: /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/gi,
constant: /\b[A-Z0-9_]{2,}\b/g,
comment: {
pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])(\/\/|#).*?(\r?\n|$))/g,
lookbehind: !0
}
}), Prism.languages.insertBefore("php", "keyword", {
delimiter: /(\?>|<\?php|<\?)/gi,
variable: /(\$\w+)\b/gi,
"package": {
pattern: /(\\|namespace\s+|use\s+)[\w\\]+/g,
lookbehind: !0,
inside: {
punctuation: /\\/
}
}
}), Prism.languages.insertBefore("php", "operator", {
property: {
pattern: /(->)[\w]+/g,
lookbehind: !0
}
}), Prism.languages.markup && (Prism.hooks.add("before-highlight", function(e) {
"php" === e.language && (e.tokenStack = [], e.backupCode = e.code, e.code = e.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi, function(t) {
return e.tokenStack.push(t), "{{{PHP" + e.tokenStack.length + "}}}";
}));
}), Prism.hooks.add("before-insert", function(e) {
"php" === e.language && (e.code = e.backupCode, delete e.backupCode);
}), Prism.hooks.add("after-highlight", function(e) {
if ("php" === e.language) {
for (var t, n = 0; t = e.tokenStack[n]; n++) e.highlightedCode = e.highlightedCode.replace("{{{PHP" + (n + 1) + "}}}", Prism.highlight(t, e.grammar, "php"));
e.element.innerHTML = e.highlightedCode;
}
}), Prism.hooks.add("wrap", function(e) {
"php" === e.language && "markup" === e.type && (e.content = e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g, '<span class="token php">$1</span>'));
}), Prism.languages.insertBefore("php", "comment", {
markup: {
pattern: /<[^?]\/?(.*?)>/g,
inside: Prism.languages.markup
},
php: /\{\{\{PHP[0-9]+\}\}\}/g
}));
}, function() {
Prism.languages.insertBefore("php", "variable", {
"this": /\$this/g,
global: /\$_?(GLOBALS|SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)/g,
scope: {
pattern: /\b[\w\\]+::/g,
inside: {
keyword: /(static|self|parent)/,
punctuation: /(::|\\)/
}
}
});
}, function() {
Prism.languages.python = {
comment: {
pattern: /(^|[^\\])#.*?(\r?\n|$)/g,
lookbehind: !0
},
string: /"""[\s\S]+?"""|'''[\s\S]+?'''|("|')(\\?.)*?\1/g,
keyword: /\b(as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/g,
"boolean": /\b(True|False)\b/g,
number: /\b-?(0[box])?(?:[\da-f]+\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/gi,
operator: /[-+]{1,2}|=?&lt;|=?&gt;|!|={1,2}|(&){1,2}|(&amp;){1,2}|\|?\||\?|\*|\/|~|\^|%|\b(or|and|not)\b/g,
ignore: /&(lt|gt|amp);/gi,
punctuation: /[{}[\];(),.:]/g
};
}, function() {
Prism.languages.ruby = Prism.languages.extend("clike", {
comment: /#[^\r\n]*(\r?\n|$)/g,
keyword: /\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/g,
builtin: /\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Fload|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
constant: /\b[A-Z][a-zA-Z_0-9]*[?!]?\b/g
}), Prism.languages.insertBefore("ruby", "keyword", {
regex: {
pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,
lookbehind: !0
},
variable: /[@$]+\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/g,
symbol: /:\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/g
});
}, function() {
Prism.languages.java = Prism.languages.extend("clike", {
keyword: /\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/g,
number: /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+[e]?[\d]*[df]\b|\b\d*\.?\d+\b/gi,
operator: {
pattern: /(^|[^\.])(?:\+=|\+\+?|-=|--?|!=?|<{1,2}=?|>{1,3}=?|==?|&=|&&?|\|=|\|\|?|\?|\*=?|\/=?|%=?|\^=?|:|~)/gm,
lookbehind: !0
}
});
}, , , , , , function(e) {
"use strict";
function t(e) {
var t, n = 1 + e.innerHTML.split("\n").length, r = Array(n);
r = r.join("<span></span>"), t = document.createElement("span"), t.className = "line-numbers-rows", 
t.innerHTML = r, e.hasAttribute("data-start") && (e.style.counterReset = "linenumber " + +e.dataset.start - 1), 
e.appendChild(t);
}
e.exports = t;
}, function(e) {
"use strict";
function t(e) {
var t = e.getBoundingClientRect(), n = 0;
if (t.top < 0) n = t.bottom; else {
if (!(t.bottom > window.innerHeight)) return !0;
n = window.innerHeight - top;
}
return n > 10;
}
e.exports = t;
} ]);
//# sourceMappingURL=tutorial.a20337eb47c2fcdeeb80.js.map