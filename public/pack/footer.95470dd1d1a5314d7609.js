var footer = webpackJsonp_name_([ 3 ], {
0: function(t, e, n) {
"use strict";
function o() {
r(), window.devicePixelRatio > 1 && i(), window.addEventListener("scroll", a), a();
for (var t = document.querySelectorAll(".auto-currency"), e = 0; e < t.length; e++) {
var n = t[e], o = Math.round(parseInt(n.innerHTML) / window.rateUsdRub);
n.insertAdjacentHTML("beforeEnd", '<span class="auto-currency__usd">(≈' + o + "$)</span>");
}
}
var r = n(182), i = n(184), a = n(185);
o();
},
182: function(t, e, n) {
"use strict";
var o = n(183);
t.exports = function() {
function t(t) {
var e = t.clientX + i;
e + r.offsetWidth > document.documentElement.clientWidth && (e = Math.max(0, t.clientX - i - r.offsetWidth)), 
r.style.left = e + "px";
var n = t.clientY + a;
n + r.offsetHeight > document.documentElement.clientHeight && (n = Math.max(0, t.clientY - a - r.offsetHeight)), 
r.style.top = n + "px";
}
function e(e) {
if (e.target.closest) {
var n = e.target.closest("a, [data-tooltip]");
n && ("A" == n.tagName && n.closest(".toolbar") || (r = document.createElement("span"), 
r.className = "link__type", n.getAttribute("data-tooltip") ? r.setAttribute("data-tooltip", n.getAttribute("data-tooltip")) : r.setAttribute("data-url", n.getAttribute("href")), 
document.body.appendChild(r), t(e), document.addEventListener("mousemove", t)));
}
}
function n() {
r && (document.removeEventListener("mousemove", t), r.remove(), r = null);
}
var r = null, i = 8, a = 10;
o("a,[data-tooltip]", e, n);
};
},
183: function(t, e) {
"use strict";
function n(t, e, n) {
d[t] = {
over: e,
out: n
};
}
function o(t) {
if (!a) {
var e = Math.sqrt(Math.pow(t.pageX - l, 2) + Math.pow(t.pageY - s, 2)), n = e / (Date.now() - c);
if (u > n) {
var o = document.elementFromPoint(t.clientX, t.clientY);
if (!o) return;
if (o != i) {
for (var r in d) {
var f = o.closest(r);
f && (a = {
elem: f,
out: d[r].out
}, d[r].over(t));
}
i = o;
}
}
l = t.pageX, s = t.pageY, c = Date.now();
}
}
function r(t) {
if (a) {
for (var e = t.relatedTarget; e; ) {
if (e == a.elem) return;
e = e.parentElement;
}
var n = a.out;
a = null, n(t);
}
}
var i, a, l = 1 / 0, s = 1 / 0, c = Date.now(), u = .2, d = {};
document.addEventListener("mousemove", o), document.addEventListener("mouseout", r), 
t.exports = n;
},
184: function(t, e) {
"use strict";
t.exports = function() {
for (var t = document.querySelectorAll('figure img[src$=".png"]'), e = function() {
var e = t[n];
e.onload = function() {
if (this.onload = null, !this.src.match(/@2x.png$/)) {
var t = new Image();
t.onload = function() {
this.width && this.height && (e.src = this.src);
}, t.src = this.src.replace(".png", "@2x.png");
}
}, e.complete && e.onload();
}, n = 0; n < t.length; n++) e();
};
},
185: function(t, e) {
"use strict";
function n() {
for (var t = document.querySelectorAll("[data-sticky]"), e = 0; e < t.length; e++) {
var n = t[e], r = n.dataset.sticky ? document.querySelector(n.dataset.sticky) : document.body;
if (n.getBoundingClientRect().top < 0) {
if (n.style.cssText) return;
var i = n.getBoundingClientRect().left, a = o(n);
n.parentNode.insertBefore(a, n), r.appendChild(n), n.classList.add("sticky"), n.style.position = "fixed", 
n.style.top = 0, n.style.left = i + "px", n.style.zIndex = 101, n.style.background = "white", 
n.style.margin = 0, n.style.width = a.offsetWidth + "px", n.placeholder = a;
} else n.placeholder && n.placeholder.getBoundingClientRect().top > 0 && (n.style.cssText = "", 
n.classList.remove("sticky"), n.placeholder.parentNode.insertBefore(n, n.placeholder), 
n.placeholder.remove(), n.placeholder = null);
}
}
function o(t) {
var e = document.createElement("div"), n = getComputedStyle(t);
return e.style.width = t.offsetWidth + "px", e.style.marginLeft = n.marginLeft, 
e.style.marginRight = n.marginRight, e.style.height = t.offsetHeight + "px", e.style.marginBottom = n.marginBottom, 
e.style.marginTop = n.marginTop, e;
}
t.exports = n;
}
});
//# sourceMappingURL=footer.95470dd1d1a5314d7609.js.map