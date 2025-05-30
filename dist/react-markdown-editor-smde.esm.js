import React, { createRef, Component, useRef, useEffect } from 'react';
import EasyMDE from 'easymde';

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: true
          } : {
            done: false,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = true,
    u = false;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = true, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t, "prototype", {
    writable: false
  }), e && _setPrototypeOf(t, e);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return r;
  };
  var t,
    r = {},
    e = Object.prototype,
    n = e.hasOwnProperty,
    o = "function" == typeof Symbol ? Symbol : {},
    i = o.iterator || "@@iterator",
    a = o.asyncIterator || "@@asyncIterator",
    u = o.toStringTag || "@@toStringTag";
  function c(t, r, e, n) {
    Object.defineProperty(t, r, {
      value: e,
      enumerable: !n,
      configurable: !n,
      writable: !n
    });
  }
  try {
    c({}, "");
  } catch (t) {
    c = function (t, r, e) {
      return t[r] = e;
    };
  }
  function h(r, e, n, o) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype);
    return c(a, "_invoke", function (r, e, n) {
      var o = 1;
      return function (i, a) {
        if (3 === o) throw Error("Generator is already running");
        if (4 === o) {
          if ("throw" === i) throw a;
          return {
            value: t,
            done: true
          };
        }
        for (n.method = i, n.arg = a;;) {
          var u = n.delegate;
          if (u) {
            var c = d(u, n);
            if (c) {
              if (c === f) continue;
              return c;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (1 === o) throw o = 4, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = 3;
          var h = s(r, e, n);
          if ("normal" === h.type) {
            if (o = n.done ? 4 : 2, h.arg === f) continue;
            return {
              value: h.arg,
              done: n.done
            };
          }
          "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg);
        }
      };
    }(r, n, new Context(o || [])), true), a;
  }
  function s(t, r, e) {
    try {
      return {
        type: "normal",
        arg: t.call(r, e)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  r.wrap = h;
  var f = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var l = {};
  c(l, i, function () {
    return this;
  });
  var p = Object.getPrototypeOf,
    y = p && p(p(x([])));
  y && y !== e && n.call(y, i) && (l = y);
  var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l);
  function g(t) {
    ["next", "throw", "return"].forEach(function (r) {
      c(t, r, function (t) {
        return this._invoke(r, t);
      });
    });
  }
  function AsyncIterator(t, r) {
    function e(o, i, a, u) {
      var c = s(t[o], t, i);
      if ("throw" !== c.type) {
        var h = c.arg,
          f = h.value;
        return f && "object" == typeof f && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) {
          e("next", t, a, u);
        }, function (t) {
          e("throw", t, a, u);
        }) : r.resolve(f).then(function (t) {
          h.value = t, a(h);
        }, function (t) {
          return e("throw", t, a, u);
        });
      }
      u(c.arg);
    }
    var o;
    c(this, "_invoke", function (t, n) {
      function i() {
        return new r(function (r, o) {
          e(t, n, r, o);
        });
      }
      return o = o ? o.then(i, i) : i();
    }, true);
  }
  function d(r, e) {
    var n = e.method,
      o = r.i[n];
    if (o === t) return e.delegate = null, "throw" === n && r.i.return && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f;
    var i = s(o, r.i, e.arg);
    if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f;
    var a = i.arg;
    return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f);
  }
  function w(t) {
    this.tryEntries.push(t);
  }
  function m(r) {
    var e = r[4] || {};
    e.type = "normal", e.arg = t, r[4] = e;
  }
  function Context(t) {
    this.tryEntries = [[-1]], t.forEach(w, this), this.reset(true);
  }
  function x(r) {
    if (null != r) {
      var e = r[i];
      if (e) return e.call(r);
      if ("function" == typeof r.next) return r;
      if (!isNaN(r.length)) {
        var o = -1,
          a = function e() {
            for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = false, e;
            return e.value = t, e.done = true, e;
          };
        return a.next = a;
      }
    }
    throw new TypeError(typeof r + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) {
    var r = "function" == typeof t && t.constructor;
    return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name));
  }, r.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t;
  }, r.awrap = function (t) {
    return {
      __await: t
    };
  }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () {
    return this;
  }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(h(t, e, n, o), i);
    return r.isGeneratorFunction(e) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, g(v), c(v, u, "Generator"), c(v, i, function () {
    return this;
  }), c(v, "toString", function () {
    return "[object Generator]";
  }), r.keys = function (t) {
    var r = Object(t),
      e = [];
    for (var n in r) e.unshift(n);
    return function t() {
      for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = false, t;
      return t.done = true, t;
    };
  }, r.values = x, Context.prototype = {
    constructor: Context,
    reset: function (r) {
      if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t);
    },
    stop: function () {
      this.done = true;
      var t = this.tryEntries[0][4];
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (r) {
      if (this.done) throw r;
      var e = this;
      function n(t) {
        a.type = "throw", a.arg = r, e.next = t;
      }
      for (var o = e.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i[4],
          u = this.prev,
          c = i[1],
          h = i[2];
        if (-1 === i[0]) return n("end"), false;
        if (!c && !h) throw Error("try statement without catch or finally");
        if (null != i[0] && i[0] <= u) {
          if (u < c) return this.method = "next", this.arg = t, n(c), true;
          if (u < h) return n(h), false;
        }
      }
    },
    abrupt: function (t, r) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var n = this.tryEntries[e];
        if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) {
          var o = n;
          break;
        }
      }
      o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null);
      var i = o ? o[4] : {};
      return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i);
    },
    complete: function (t, r) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f;
    },
    finish: function (t) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var e = this.tryEntries[r];
        if (e[2] === t) return this.complete(e[4], e[3]), m(e), f;
      }
    },
    catch: function (t) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var e = this.tryEntries[r];
        if (e[0] === t) {
          var n = e[4];
          if ("throw" === n.type) {
            var o = n.arg;
            m(e);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (r, e, n) {
      return this.delegate = {
        i: x(r),
        r: e,
        n: n
      }, "next" === this.method && (this.arg = t), f;
    }
  }, r;
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".md-editor {\n  text-align: left;\n  font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;\n  font-size: 16px;\n  color: #1a1a1a;\n}\n.md-editor .editor-toolbar {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 50px;\n  overflow-x: auto;\n  background-color: white;\n  opacity: 1;\n}\n.md-editor .editor-toolbar a {\n  opacity: 0.6;\n}\n.md-editor .editor-toolbar a:hover {\n  opacity: 0.8;\n}\n.md-icon {\n  font-style: normal;\n  font-variant-ligatures: normal;\n  font-variant-caps: normal;\n  font-variant-numeric: normal;\n  font-variant-east-asian: normal;\n  font-weight: normal;\n  font-stretch: normal;\n  font-size: inherit;\n  line-height: 1;\n  margin-right: 2px;\n}\n.md-icon:before {\n  content: '';\n  width: 30px;\n  height: 30px;\n  display: inline-block;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  background-position: center;\n}\n.editor-preview img {\n  max-width: 100%;\n  \n}\n.editor-preview em {\n  font-style: italic!important;\n}\n.editor-preview b, \n.editor-preview strong {\n  font-weight: bolder!important;\n}\n\n.md-icon-bold:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTEwLjUgOGMxIDAgMi0xLjUzIDItMi41MkEzLjUgMy41IDAgMCAwIDkgMkgzLjV2MTJoNS41N2EzLjQzIDMuNDMgMCAwIDAgMy40My0zLjQzYzAtMS0xLTIuNTctMi0yLjU3em0tNS00SDlhMS41IDEuNSAwIDAgMSAwIDNINS41em0zLjU3IDhINS41VjloMy40M2ExLjU3IDEuNTcgMCAwIDEgMS41NyAxLjU3QTEuNDMgMS40MyAwIDAgMSA5LjA3IDEyeiIgZmlsbD0iIzY2NiIgLz48L3N2Zz4=);\n}\n.md-icon-bold:hover::before,\n.md-icon-bold.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTEwLjUgOGMxIDAgMi0xLjUzIDItMi41MkEzLjUgMy41IDAgMCAwIDkgMkgzLjV2MTJoNS41N2EzLjQzIDMuNDMgMCAwIDAgMy40My0zLjQzYzAtMS0xLTIuNTctMi0yLjU3em0tNS00SDlhMS41IDEuNSAwIDAgMSAwIDNINS41em0zLjU3IDhINS41VjloMy40M2ExLjU3IDEuNTcgMCAwIDEgMS41NyAxLjU3QTEuNDMgMS40MyAwIDAgMSA5LjA3IDEyeiIgZmlsbD0iIzAwYTRmZiIgLz48L3N2Zz4=);\n}\n\n.md-icon-italic:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTkuNjcgNGwtMS4zNCA4SDEwdjJINHYtMmgyLjMzbDEuMzQtOEg2VjJoNnYyeiIgZmlsbD0iIzY2NiIgZmlsbC1ydWxlPSJldmVub2RkIiAvPjwvc3ZnPg==);\n}\n.md-icon-italic:hover::before,\n.md-icon-italic.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTkuNjcgNGwtMS4zNCA4SDEwdjJINHYtMmgyLjMzbDEuMzQtOEg2VjJoNnYyeiIgZmlsbD0iIzAwYTRmZiIgZmlsbC1ydWxlPSJldmVub2RkIiAvPjwvc3ZnPg==);\n}\n\n.md-icon-strikethrough:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+PHBhdGggZmlsbD0iIzY2NiIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzE4LjczIDEwOS4zN2wtMS40MiAxLjQxLTUuMDctNS4wNyA1LjA3LTUuMDcgMS40MiAxLjQxLTMuNjYgMy42NiAzLjY2IDMuNjZ6IiAvPjwvY2xpcFBhdGg+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTExLjMgOGE0IDQgMCAwIDAtMi4yMy0uODlsLTEuMzEtLjJhMi40MiAyLjQyIDAgMCAxLTEuMjItLjUgMS4yMiAxLjIyIDAgMCAxLS4zOS0xYzAtMSAuNzctMS42NCAyLTEuNjRhMy4yMiAzLjIyIDAgMCAxIDIuNC44NWwuMS4xIDEuMzMtMS4zMS0uMTEtLjExQTQuOTQgNC45NCAwIDAgMCA4LjE2IDJjLTIuNDMgMC00IDEuMzgtNCAzLjUzYTMgMyAwIDAgMCAuODkgMi4zMSA0LjEgNC4xIDAgMCAwIDIuMjYgMUw4LjY3IDlhMS44NyAxLjg3IDAgMCAxIDEuMTguNDUgMS40MSAxLjQxIDAgMCAxIC40IDEuMDhjMCAxLS44MSAxLjYxLTIuMjMgMS42MWEzLjYxIDMuNjEgMCAwIDEtMi44Mi0xLjA2TDUuMDkgMTFsLTEuMzggMS4zMy4xLjExQTUuMzUgNS4zNSAwIDAgMCA4IDE0YzIuNiAwIDQuMjktMS4zOCA0LjI5LTMuNTNBMy4xNiAzLjE2IDAgMCAwIDExLjMgOHoiIGZpbGw9IiM2NjYiIC8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMiA3aDEydjFIMnoiIGZpbGw9IiM2NjYiIC8+PC9zdmc+);\n}\n.md-icon-strikethrough:hover::before,\n.md-icon-strikethrough.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+PHBhdGggZmlsbD0iIzAwYTRmZiIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzE4LjczIDEwOS4zN2wtMS40MiAxLjQxLTUuMDctNS4wNyA1LjA3LTUuMDcgMS40MiAxLjQxLTMuNjYgMy42NiAzLjY2IDMuNjZ6IiAvPjwvY2xpcFBhdGg+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTExLjMgOGE0IDQgMCAwIDAtMi4yMy0uODlsLTEuMzEtLjJhMi40MiAyLjQyIDAgMCAxLTEuMjItLjUgMS4yMiAxLjIyIDAgMCAxLS4zOS0xYzAtMSAuNzctMS42NCAyLTEuNjRhMy4yMiAzLjIyIDAgMCAxIDIuNC44NWwuMS4xIDEuMzMtMS4zMS0uMTEtLjExQTQuOTQgNC45NCAwIDAgMCA4LjE2IDJjLTIuNDMgMC00IDEuMzgtNCAzLjUzYTMgMyAwIDAgMCAuODkgMi4zMSA0LjEgNC4xIDAgMCAwIDIuMjYgMUw4LjY3IDlhMS44NyAxLjg3IDAgMCAxIDEuMTguNDUgMS40MSAxLjQxIDAgMCAxIC40IDEuMDhjMCAxLS44MSAxLjYxLTIuMjMgMS42MWEzLjYxIDMuNjEgMCAwIDEtMi44Mi0xLjA2TDUuMDkgMTFsLTEuMzggMS4zMy4xLjExQTUuMzUgNS4zNSAwIDAgMCA4IDE0YzIuNiAwIDQuMjktMS4zOCA0LjI5LTMuNTNBMy4xNiAzLjE2IDAgMCAwIDExLjMgOHoiIGZpbGw9IiMwMGE0ZmYiIC8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMiA3aDEydjFIMnoiIGZpbGw9IiMwMGE0ZmYiIC8+PC9zdmc+);\n}\n\n.md-icon-heading:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iIzY2NiIgZD0iTTEwLjUgMnY1aC01VjJoLTJ2MTJoMlY5aDV2NWgyVjJoLTJ6IiAvPjwvc3ZnPg==);\n}\n.md-icon-heading:hover::before,\n.md-icon-heading.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iIzAwYTRmZiIgZD0iTTEwLjUgMnY1aC01VjJoLTJ2MTJoMlY5aDV2NWgyVjJoLTJ6IiAvPjwvc3ZnPg==);\n}\n\n.md-icon-heading-smaller:before {\n  background-size: 14px;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iIzY2NiIgZD0iTTEwLjUgMnY1aC01VjJoLTJ2MTJoMlY5aDV2NWgyVjJoLTJ6IiAvPjwvc3ZnPg==);\n}\n.md-icon-heading-smaller:hover::before,\n.md-icon-heading-smaller.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iIzAwYTRmZiIgZD0iTTEwLjUgMnY1aC01VjJoLTJ2MTJoMlY5aDV2NWgyVjJoLTJ6IiAvPjwvc3ZnPg==);\n}\n\n.md-icon-heading-bigger:before {\n  background-size: 18px;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iIzY2NiIgZD0iTTEwLjUgMnY1aC01VjJoLTJ2MTJoMlY5aDV2NWgyVjJoLTJ6IiAvPjwvc3ZnPg==);\n}\n.md-icon-heading-bigger:hover::before,\n.md-icon-heading-bigger.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iIzAwYTRmZiIgZD0iTTEwLjUgMnY1aC01VjJoLTJ2MTJoMlY5aDV2NWgyVjJoLTJ6IiAvPjwvc3ZnPg==);\n}\n\n\n.md-icon-heading-1:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iLTMgMSAxNiAxNiI+PHBhdGggZD0iTTEwLjMgMTV2LTIuNGgtLjh2LS41aC41Yy4xIDAgLjMtLjEuMy0uMi4xLS4xLjEtLjEuMS0uM3YtLjFoLjZWMTVoLS43ek02IDNoMnYxMkg2di01SDF2NWgtMlYzaDJ2NWg1VjN6IiBmaWxsPSIjNjY2IiAvPjwvc3ZnPg==);\n}\n.md-icon-heading-1:hover::before,\n.md-icon-heading-1.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iLTMgMSAxNiAxNiI+PHBhdGggZD0iTTEwLjMgMTV2LTIuNGgtLjh2LS41aC41Yy4xIDAgLjMtLjEuMy0uMi4xLS4xLjEtLjEuMS0uM3YtLjFoLjZWMTVoLS43ek02IDNoMnYxMkg2di01SDF2NWgtMlYzaDJ2NWg1VjN6IiBmaWxsPSIjMDBhNGZmIiAvPjwvc3ZnPg==);\n}\n\n.md-icon-heading-2:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iLTMgMiAxNiAxNiI+PHBhdGggZD0iTTEwLjQgMTQuNmMuMy0uMi41LS40LjYtLjUuMS0uMi4yLS4zLjItLjUgMC0uMSAwLS4zLS4xLS40LS4xLS4xLS4yLS4xLS40LS4xcy0uNC4xLS40LjItLjEuMi0uMS40aC0uN2MwLS4zLjEtLjUuMi0uNy4yLS40LjUtLjUgMS0uNS40IDAgLjcuMS45LjMuMi4yLjMuNS4zLjggMCAuMy0uMS41LS4yLjdsLS41LjUtLjMuMmMtLjIuMS0uMy4yLS40LjNsLS4yLjJoMS41di42SDkuNGMwLS4zLjEtLjUuMi0uNy4yLS4zLjUtLjYuOC0uOHpNNiA0aDJ2MTJINnYtNUgxdjVoLTJWNGgydjVoNVY0eiIgZmlsbD0iIzY2NiIgLz48L3N2Zz4=);\n}\n.md-icon-heading-2:hover::before,\n.md-icon-heading-2.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iLTMgMiAxNiAxNiI+PHBhdGggZD0iTTEwLjQgMTQuNmMuMy0uMi41LS40LjYtLjUuMS0uMi4yLS4zLjItLjUgMC0uMSAwLS4zLS4xLS40LS4xLS4xLS4yLS4xLS40LS4xcy0uNC4xLS40LjItLjEuMi0uMS40aC0uN2MwLS4zLjEtLjUuMi0uNy4yLS40LjUtLjUgMS0uNS40IDAgLjcuMS45LjMuMi4yLjMuNS4zLjggMCAuMy0uMS41LS4yLjdsLS41LjUtLjMuMmMtLjIuMS0uMy4yLS40LjNsLS4yLjJoMS41di42SDkuNGMwLS4zLjEtLjUuMi0uNy4yLS4zLjUtLjYuOC0uOHpNNiA0aDJ2MTJINnYtNUgxdjVoLTJWNGgydjVoNVY0eiIgZmlsbD0iIzAwYTRmZiIgLz48L3N2Zz4=);\n}\n\n.md-icon-heading-3:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iLTIgMSAxNiAxNiI+PHBhdGggZD0iTTEyLjUgMTNjLjEgMCAuMi4xLjMuMi4yLjIuMy40LjMuNyAwIC4zLS4xLjYtLjMuOC0uMi4yLS41LjMtLjkuMy0uNSAwLS44LS4yLTEtLjUtLjEtLjItLjItLjQtLjItLjdoLjdjMCAuMSAwIC4zLjEuNC4xLjIuMi4zLjUuMy4xIDAgLjMgMCAuNC0uMS4xLS4xLjItLjIuMi0uNHMtLjEtLjQtLjMtLjVjLS4xIDAtLjMtLjEtLjUtLjF2LS41Yy4yIDAgLjQgMCAuNS0uMS4yLS4xLjItLjIuMi0uNCAwLS4xIDAtLjItLjEtLjMtLjEtLjEtLjItLjEtLjMtLjEtLjIgMC0uMy4xLS40LjItLjEuMS0uMS4yLS4xLjRIMTFjMC0uMiAwLS4zLjEtLjUuMS0uMS4xLS4zLjMtLjQuMS0uMS4yLS4xLjMtLjIuMSAwIC4zLS4xLjUtLjEuMyAwIC42LjEuOC4zLjIuMi4zLjQuMy43IDAgLjItLjEuNC0uMi41LS41IDAtLjUuMS0uNi4xek03IDNoMnYxMkg3di01SDJ2NUgwVjNoMnY1aDVWM3oiIGZpbGw9IiM2NjYiIC8+PC9zdmc+);\n}\n.md-icon-heading-3:hover::before,\n.md-icon-heading-3.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iLTIgMSAxNiAxNiI+PHBhdGggZD0iTTEyLjUgMTNjLjEgMCAuMi4xLjMuMi4yLjIuMy40LjMuNyAwIC4zLS4xLjYtLjMuOC0uMi4yLS41LjMtLjkuMy0uNSAwLS44LS4yLTEtLjUtLjEtLjItLjItLjQtLjItLjdoLjdjMCAuMSAwIC4zLjEuNC4xLjIuMi4zLjUuMy4xIDAgLjMgMCAuNC0uMS4xLS4xLjItLjIuMi0uNHMtLjEtLjQtLjMtLjVjLS4xIDAtLjMtLjEtLjUtLjF2LS41Yy4yIDAgLjQgMCAuNS0uMS4yLS4xLjItLjIuMi0uNCAwLS4xIDAtLjItLjEtLjMtLjEtLjEtLjItLjEtLjMtLjEtLjIgMC0uMy4xLS40LjItLjEuMS0uMS4yLS4xLjRIMTFjMC0uMiAwLS4zLjEtLjUuMS0uMS4xLS4zLjMtLjQuMS0uMS4yLS4xLjMtLjIuMSAwIC4zLS4xLjUtLjEuMyAwIC42LjEuOC4zLjIuMi4zLjQuMy43IDAgLjItLjEuNC0uMi41LS41IDAtLjUuMS0uNi4xek03IDNoMnYxMkg3di01SDJ2NUgwVjNoMnY1aDVWM3oiIGZpbGw9IiMwMGE0ZmYiIC8+PC9zdmc+);\n}\n\n\n.md-icon-code:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE2Ij48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNLTE5IDFoMTR2MTRoLTE0em02IDEyVjloLTR2NHptMiAwaDRWOWgtNHptLTItMTBoLTR2NGg0em0yIDB2NGg0VjN6IiBmaWxsPSIjNjY2IiAvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgtMiI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjk4LjczIDEwOS4zN2wtMS40MiAxLjQxLTUuMDctNS4wNyA1LjA3LTUuMDcgMS40MiAxLjQxLTMuNjYgMy42NiAzLjY2IDMuNjZ6IiBmaWxsPSIjNjY2IiAvPjwvY2xpcFBhdGg+PC9kZWZzPjxwYXRoIGQ9Ik0xMi4zNCA1LjE3bDEuNDEtMS40MSAyLjgzIDIuODNMMTggOGwtMS40MSAxLjQxLTIuODMgMi44My0xLjQxLTEuNDFMMTUuMTcgOHpNOS4yNCAyaDJsLTMgMTJoLTJ6TTEuNDEgNi41OWwyLjgzLTIuODMgMS40MiAxLjQxTDIuODMgOGwyLjgzIDIuODMtMS40MiAxLjQxLTIuODMtMi44M0wwIDh6IiBmaWxsPSIjNjY2IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIC8+PC9zdmc+);\n}\n.md-icon-code:hover::before,\n.md-icon-code.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE2Ij48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNLTE5IDFoMTR2MTRoLTE0em02IDEyVjloLTR2NHptMiAwaDRWOWgtNHptLTItMTBoLTR2NGg0em0yIDB2NGg0VjN6IiBmaWxsPSIjMDBhNGZmIiAvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgtMiI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjk4LjczIDEwOS4zN2wtMS40MiAxLjQxLTUuMDctNS4wNyA1LjA3LTUuMDcgMS40MiAxLjQxLTMuNjYgMy42NiAzLjY2IDMuNjZ6IiBmaWxsPSIjMDBhNGZmIiAvPjwvY2xpcFBhdGg+PC9kZWZzPjxwYXRoIGQ9Ik0xMi4zNCA1LjE3bDEuNDEtMS40MSAyLjgzIDIuODNMMTggOGwtMS40MSAxLjQxLTIuODMgMi44My0xLjQxLTEuNDFMMTUuMTcgOHpNOS4yNCAyaDJsLTMgMTJoLTJ6TTEuNDEgNi41OWwyLjgzLTIuODMgMS40MiAxLjQxTDIuODMgOGwyLjgzIDIuODMtMS40MiAxLjQxLTIuODMtMi44M0wwIDh6IiBmaWxsPSIjMDBhNGZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIC8+PC9zdmc+);\n}\n\n.md-icon-quote:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTEzIDVWM0M5IDMgOSA4IDkgOHY1aDRWOGgtMmMwLTEgMC0zIDItM3pNMyA4djVoNFY4SDVjMC0xIDAtMyAyLTNWM0MzIDMgMyA4IDMgOHoiIGZpbGw9IiM2NjYiIC8+PC9zdmc+);\n}\n.md-icon-quote:hover::before,\n.md-icon-quote.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTEzIDVWM0M5IDMgOSA4IDkgOHY1aDRWOGgtMmMwLTEgMC0zIDItM3pNMyA4djVoNFY4SDVjMC0xIDAtMyAyLTNWM0MzIDMgMyA4IDMgOHoiIGZpbGw9IiMwMGE0ZmYiIC8+PC9zdmc+);\n}\n\n.md-icon-unordered-list:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMSAzaDJ2Mkgxek01IDNoMTB2Mkg1ek01IDdoMTB2Mkg1ek01IDExaDEwdjJINXpNMSA3aDJ2Mkgxek0xIDExaDJ2MkgxeiIgZmlsbD0iIzY2NiIgLz48L3N2Zz4=);\n}\n.md-icon-unordered-list:hover::before,\n.md-icon-unordered-list.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMSAzaDJ2Mkgxek01IDNoMTB2Mkg1ek01IDdoMTB2Mkg1ek01IDExaDEwdjJINXpNMSA3aDJ2Mkgxek0xIDExaDJ2MkgxeiIgZmlsbD0iIzAwYTRmZiIgLz48L3N2Zz4=);\n}\n\n.md-icon-ordered-list:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMiA1aC43VjEuNDZoLS41OGEuNTguNTggMCAwIDEgMCAuMTQuNjEuNjEgMCAwIDEtLjEyLjI2LjY1LjY1IDAgMCAxLS4zOC4xNCAzLjA3IDMuMDcgMCAwIDEtLjQ2IDB2LjQ3SDJ6TTEuODggOC4zM2EyIDIgMCAwIDAtLjcuNzUgMS42NiAxLjY2IDAgMCAwLS4xNi43aDIuNDJ2LS42MUgxLjg5QS43OS43OSAwIDAgMSAyLjA1IDlsLjM2LS4yNy4yOC0uMmEyLjMzIDIuMzMgMCAwIDAgLjUxLS40NSAxLjExIDEuMTEgMCAwIDAgLjIzLS43IDEuMDggMS4wOCAwIDAgMC0uMzMtLjgyIDEuMjYgMS4yNiAwIDAgMC0uODktLjMxIDEgMSAwIDAgMC0xIC41MyAxLjcxIDEuNzEgMCAwIDAtLjE2LjczaC42OEExLjE4IDEuMTggMCAwIDEgMS44IDdhLjQ0LjQ0IDAgMCAxIC40My0uMjQuNDQuNDQgMCAwIDEgLjM2LjI0LjU2LjU2IDAgMCAxIC4xMi4zNy43My43MyAwIDAgMS0uMjIuNTEgNS4xNSA1LjE1IDAgMCAxLS42MS40NXpNMi45MSAxMi42OGEuNjQuNjQgMCAwIDAgLjI0LS4xOC43OC43OCAwIDAgMCAuMTktLjUuODguODggMCAwIDAtLjMxLS43IDEuMjMgMS4yMyAwIDAgMC0uODItLjMgMS40MSAxLjQxIDAgMCAwLS40Ni4wNy45NC45NCAwIDAgMC0uMzIuMTkgMS4xMiAxLjEyIDAgMCAwLS4yNy4zOCAxLjc0IDEuNzQgMCAwIDAtLjA5LjVoLjY1YS42Ni42NiAwIDAgMSAuMTEtLjQyLjQyLjQyIDAgMCAxIC4zNi0uMTYuNDMuNDMgMCAwIDEgLjMzLjEzLjQ2LjQ2IDAgMCAxIC4xMi4zMy40MS40MSAwIDAgMS0uMjMuNDIgMS4zMiAxLjMyIDAgMCAxLS40Ny4wN1YxM2ExLjQzIDEuNDMgMCAwIDEgLjUxLjA3LjQ2LjQ2IDAgMCAxIC4yOC40Ny41Mi41MiAwIDAgMS0uMTUuNC41MS41MSAwIDAgMS0uMzYuMTQuNDcuNDcgMCAwIDEtLjQ2LS4yNi44LjggMCAwIDEtLjA3LS4zNUgxYTEuNDUgMS40NSAwIDAgMCAuMTcuNjggMS4xMSAxLjExIDAgMCAwIDEgLjQ5IDEuMTggMS4xOCAwIDAgMCAuOTItLjM0IDEuMTMgMS4xMyAwIDAgMCAuMzEtLjc5Ljg3Ljg3IDAgMCAwLS4yNy0uNjcuNS41IDAgMCAwLS4yMi0uMTZ6TTQuOTkgM0gxNXYySDQuOTl6TTQuOTkgN0gxNXYySDQuOTl6TTQuOTkgMTFIMTV2Mkg0Ljk5eiIgZmlsbD0iIzY2NiIgLz48L3N2Zz4=);\n\n}\n.md-icon-ordered-list:hover::before,\n.md-icon-ordered-list.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMiA1aC43VjEuNDZoLS41OGEuNTguNTggMCAwIDEgMCAuMTQuNjEuNjEgMCAwIDEtLjEyLjI2LjY1LjY1IDAgMCAxLS4zOC4xNCAzLjA3IDMuMDcgMCAwIDEtLjQ2IDB2LjQ3SDJ6TTEuODggOC4zM2EyIDIgMCAwIDAtLjcuNzUgMS42NiAxLjY2IDAgMCAwLS4xNi43aDIuNDJ2LS42MUgxLjg5QS43OS43OSAwIDAgMSAyLjA1IDlsLjM2LS4yNy4yOC0uMmEyLjMzIDIuMzMgMCAwIDAgLjUxLS40NSAxLjExIDEuMTEgMCAwIDAgLjIzLS43IDEuMDggMS4wOCAwIDAgMC0uMzMtLjgyIDEuMjYgMS4yNiAwIDAgMC0uODktLjMxIDEgMSAwIDAgMC0xIC41MyAxLjcxIDEuNzEgMCAwIDAtLjE2LjczaC42OEExLjE4IDEuMTggMCAwIDEgMS44IDdhLjQ0LjQ0IDAgMCAxIC40My0uMjQuNDQuNDQgMCAwIDEgLjM2LjI0LjU2LjU2IDAgMCAxIC4xMi4zNy43My43MyAwIDAgMS0uMjIuNTEgNS4xNSA1LjE1IDAgMCAxLS42MS40NXpNMi45MSAxMi42OGEuNjQuNjQgMCAwIDAgLjI0LS4xOC43OC43OCAwIDAgMCAuMTktLjUuODguODggMCAwIDAtLjMxLS43IDEuMjMgMS4yMyAwIDAgMC0uODItLjMgMS40MSAxLjQxIDAgMCAwLS40Ni4wNy45NC45NCAwIDAgMC0uMzIuMTkgMS4xMiAxLjEyIDAgMCAwLS4yNy4zOCAxLjc0IDEuNzQgMCAwIDAtLjA5LjVoLjY1YS42Ni42NiAwIDAgMSAuMTEtLjQyLjQyLjQyIDAgMCAxIC4zNi0uMTYuNDMuNDMgMCAwIDEgLjMzLjEzLjQ2LjQ2IDAgMCAxIC4xMi4zMy40MS40MSAwIDAgMS0uMjMuNDIgMS4zMiAxLjMyIDAgMCAxLS40Ny4wN1YxM2ExLjQzIDEuNDMgMCAwIDEgLjUxLjA3LjQ2LjQ2IDAgMCAxIC4yOC40Ny41Mi41MiAwIDAgMS0uMTUuNC41MS41MSAwIDAgMS0uMzYuMTQuNDcuNDcgMCAwIDEtLjQ2LS4yNi44LjggMCAwIDEtLjA3LS4zNUgxYTEuNDUgMS40NSAwIDAgMCAuMTcuNjggMS4xMSAxLjExIDAgMCAwIDEgLjQ5IDEuMTggMS4xOCAwIDAgMCAuOTItLjM0IDEuMTMgMS4xMyAwIDAgMCAuMzEtLjc5Ljg3Ljg3IDAgMCAwLS4yNy0uNjcuNS41IDAgMCAwLS4yMi0uMTZ6TTQuOTkgM0gxNXYySDQuOTl6TTQuOTkgN0gxNXYySDQuOTl6TTQuOTkgMTFIMTV2Mkg0Ljk5eiIgZmlsbD0iIzAwYTRmZiIgLz48L3N2Zz4=);\n}\n\n.md-icon-link:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNy44MyAxMWwtMS40MiAxLjQxYTIgMiAwIDAgMS0yLjgyLTIuODJMNSA4LjE3bC43MS0uNzEtMS40Mi0xLjQxLTIuMTIgMi4xMmE0IDQgMCAwIDAgNS42NiA1LjY2bDIuMTItMi4xMi0xLjQxLTEuNDJ6TTEzLjgzIDIuMTdhNCA0IDAgMCAwLTUuNjYgMEw2LjA1IDQuMjlsMS40MSAxLjQyIDEuNDItMS40Mi43MS0uNzFhMiAyIDAgMSAxIDIuODMgMi44M2wtLjcxLjcxLTEuNDIgMS40MiAxLjQxIDEuNDEgMi4xMi0yLjEyYTQgNCAwIDAgMCAuMDEtNS42NnoiIGZpbGw9IiM2NjYiIC8+PHBhdGggY2xhc3M9ImNscy0xIiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUgOC4wMDIgNy45OTYpIiBkPSJNNSA3aDZ2Mkg1eiIgZmlsbD0iIzY2NiIgLz48L3N2Zz4=);\n}\n.md-icon-link:hover::before,\n.md-icon-link.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNy44MyAxMWwtMS40MiAxLjQxYTIgMiAwIDAgMS0yLjgyLTIuODJMNSA4LjE3bC43MS0uNzEtMS40Mi0xLjQxLTIuMTIgMi4xMmE0IDQgMCAwIDAgNS42NiA1LjY2bDIuMTItMi4xMi0xLjQxLTEuNDJ6TTEzLjgzIDIuMTdhNCA0IDAgMCAwLTUuNjYgMEw2LjA1IDQuMjlsMS40MSAxLjQyIDEuNDItMS40Mi43MS0uNzFhMiAyIDAgMSAxIDIuODMgMi44M2wtLjcxLjcxLTEuNDIgMS40MiAxLjQxIDEuNDEgMi4xMi0yLjEyYTQgNCAwIDAgMCAuMDEtNS42NnoiIGZpbGw9IiMwMGE0ZmYiIC8+PHBhdGggY2xhc3M9ImNscy0xIiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUgOC4wMDIgNy45OTYpIiBkPSJNNSA3aDZ2Mkg1eiIgZmlsbD0iIzAwYTRmZiIgLz48L3N2Zz4=);\n}\n\n.md-icon-image:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMCAxdjE0aDE2VjF6bTE0IDJ2Mi41Mkw5Ljc2IDguOTEgNS45MyA4IDIgOS41MlYzek0yIDEzdi0xLjMyTDYuMDcgMTBsNC4xNyAxTDE0IDh2NXoiIGZpbGw9IiM2NjYiIC8+PGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSI1LjUiIGN5PSI1LjUiIHI9IjEuNSIgZmlsbD0iIzY2NiIgLz48L3N2Zz4=);\n}\n.md-icon-image:hover::before,\n.md-icon-image.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMCAxdjE0aDE2VjF6bTE0IDJ2Mi41Mkw5Ljc2IDguOTEgNS45MyA4IDIgOS41MlYzek0yIDEzdi0xLjMyTDYuMDcgMTBsNC4xNyAxTDE0IDh2NXoiIGZpbGw9IiMwMGE0ZmYiIC8+PGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSI1LjUiIGN5PSI1LjUiIHI9IjEuNSIgZmlsbD0iIzAwYTRmZiIgLz48L3N2Zz4=);\n}\n\n.md-icon-choose-image:before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyNDE0Mzc5OTUyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwNzM3IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQwMS4wNjY2NjcgNDQ4bDIwNC44LTM1NC4xMzMzMzNjLTI5Ljg2NjY2Ny00LjI2NjY2Ny02NC04LjUzMzMzMy05My44NjY2NjctOC41MzMzMzQtMTAyLjQgMC0xOTYuMjY2NjY3IDM0LjEzMzMzMy0yNjguOCA5OC4xMzMzMzRsMTU3Ljg2NjY2NyAyNjguOHYtNC4yNjY2Njd6TTkxNy4zMzMzMzMgMzg0Yy0zOC40LTEyMy43MzMzMzMtMTMyLjI2NjY2Ny0yMjYuMTMzMzMzLTI1Ni0yNjguOEw1MDcuNzMzMzMzIDM4NGg0MDkuNnogbTEyLjggNDIuNjY2NjY3aC0zMjBsMTIuOCAyMS4zMzMzMzMgMjA0LjggMzU0LjEzMzMzM0M4OTYgNzI1LjMzMzMzMyA5MzguNjY2NjY3IDYyMi45MzMzMzMgOTM4LjY2NjY2NyA1MTJjMC0yOS44NjY2NjctNC4yNjY2NjctNTkuNzMzMzMzLTguNTMzMzM0LTg1LjMzMzMzM3pNMzYyLjY2NjY2NyA1MTJMMTk2LjI2NjY2NyAyMjEuODY2NjY3QzEyOCAyOTguNjY2NjY3IDg1LjMzMzMzMyA0MDEuMDY2NjY3IDg1LjMzMzMzMyA1MTJjMCAyOS44NjY2NjcgNC4yNjY2NjcgNTkuNzMzMzMzIDguNTMzMzM0IDg1LjMzMzMzM2gzMjBsLTUxLjItODUuMzMzMzMzeiBtLTI1NiAxMjhjMzguNCAxMjMuNzMzMzMzIDEzMi4yNjY2NjcgMjI2LjEzMzMzMyAyNTYgMjY4LjhsMTU3Ljg2NjY2Ni0yNjguOEgxMDYuNjY2NjY3eiBtNDc3Ljg2NjY2NiAwbC0xNjYuNCAyOTAuMTMzMzMzYzI5Ljg2NjY2NyA4LjUzMzMzMyA1OS43MzMzMzMgOC41MzMzMzMgOTMuODY2NjY3IDguNTMzMzM0IDEwMi40IDAgMTk2LjI2NjY2Ny0zNC4xMzMzMzMgMjY4LjgtOTguMTMzMzM0bC0xNTcuODY2NjY3LTI2OC44LTM4LjQgNjguMjY2NjY3eiIgcC1pZD0iMTA3MzgiIGZpbGw9IiM1NTU1NTUiPjwvcGF0aD48L3N2Zz4=\")\n}\n.md-icon-choose-image:hover::before,\n.md-icon-choose-image.active::before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyNDE0Mzc5OTUyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwNzM3IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQwMS4wNjY2NjcgNDQ4bDIwNC44LTM1NC4xMzMzMzNjLTI5Ljg2NjY2Ny00LjI2NjY2Ny02NC04LjUzMzMzMy05My44NjY2NjctOC41MzMzMzQtMTAyLjQgMC0xOTYuMjY2NjY3IDM0LjEzMzMzMy0yNjguOCA5OC4xMzMzMzRsMTU3Ljg2NjY2NyAyNjguOHYtNC4yNjY2Njd6TTkxNy4zMzMzMzMgMzg0Yy0zOC40LTEyMy43MzMzMzMtMTMyLjI2NjY2Ny0yMjYuMTMzMzMzLTI1Ni0yNjguOEw1MDcuNzMzMzMzIDM4NGg0MDkuNnogbTEyLjggNDIuNjY2NjY3aC0zMjBsMTIuOCAyMS4zMzMzMzMgMjA0LjggMzU0LjEzMzMzM0M4OTYgNzI1LjMzMzMzMyA5MzguNjY2NjY3IDYyMi45MzMzMzMgOTM4LjY2NjY2NyA1MTJjMC0yOS44NjY2NjctNC4yNjY2NjctNTkuNzMzMzMzLTguNTMzMzM0LTg1LjMzMzMzM3pNMzYyLjY2NjY2NyA1MTJMMTk2LjI2NjY2NyAyMjEuODY2NjY3QzEyOCAyOTguNjY2NjY3IDg1LjMzMzMzMyA0MDEuMDY2NjY3IDg1LjMzMzMzMyA1MTJjMCAyOS44NjY2NjcgNC4yNjY2NjcgNTkuNzMzMzMzIDguNTMzMzM0IDg1LjMzMzMzM2gzMjBsLTUxLjItODUuMzMzMzMzeiBtLTI1NiAxMjhjMzguNCAxMjMuNzMzMzMzIDEzMi4yNjY2NjcgMjI2LjEzMzMzMyAyNTYgMjY4LjhsMTU3Ljg2NjY2Ni0yNjguOEgxMDYuNjY2NjY3eiBtNDc3Ljg2NjY2NiAwbC0xNjYuNCAyOTAuMTMzMzMzYzI5Ljg2NjY2NyA4LjUzMzMzMyA1OS43MzMzMzMgOC41MzMzMzMgOTMuODY2NjY3IDguNTMzMzM0IDEwMi40IDAgMTk2LjI2NjY2Ny0zNC4xMzMzMzMgMjY4LjgtOTguMTMzMzM0bC0xNTcuODY2NjY3LTI2OC44LTM4LjQgNjguMjY2NjY3eiIgcC1pZD0iMTA3MzgiIGZpbGw9IiMwMGE0ZmYiPjwvcGF0aD48L3N2Zz4=\")\n}\n\n.md-icon-table:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTTEgMWgxNHYxNEgxVjF6bTYgMTJWOUgzdjRoNHptMiAwaDRWOUg5djR6TTcgM0gzdjRoNFYzem0yIDB2NGg0VjNIOXoiIGZpbGw9IiM2NjYiIC8+PC9zdmc+);\n}\n.md-icon-table:hover::before,\n.md-icon-table.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTTEgMWgxNHYxNEgxVjF6bTYgMTJWOUgzdjRoNHptMiAwaDRWOUg5djR6TTcgM0gzdjRoNFYzem0yIDB2NGg0VjNIOXoiIGZpbGw9IiMwMGE0ZmYiIC8+PC9zdmc+);\n}\n\n.md-icon-preview:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTIgMTcuMDVoOC45NVYyNkg1MnoiIGZpbGw9IiM2NjYiIC8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aC0yIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01Ny4wNSAxMkg2NnY4Ljk1aC04Ljk1eiIgZmlsbD0iIzY2NiIgLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoLTMiPjxwYXRoIGNsYXNzPSJjbHMtMSIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1IDU4Ljk5NyAxOC45OTMpIiBkPSJNNTYgMThoNnYyaC02eiIgZmlsbD0iIzY2NiIgLz48L2NsaXBQYXRoPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik04IDRhNi41MiA2LjUyIDAgMCAxIDUuODQgNEE2LjUyIDYuNTIgMCAwIDEgOCAxMmE2LjUyIDYuNTIgMCAwIDEtNS44NC00QTYuNTIgNi41MiAwIDAgMSA4IDRtMC0yYTguNjYgOC42NiAwIDAgMC04IDYgOC42NiA4LjY2IDAgMCAwIDggNiA4LjY2IDguNjYgMCAwIDAgOC02IDguNjYgOC42NiAwIDAgMC04LTZ6IiBmaWxsPSIjNjY2IiAvPjxjaXJjbGUgY2xhc3M9ImNscy01IiBjeD0iOCIgY3k9IjgiIHI9IjIiIGZpbGw9IiM2NjYiIC8+PC9zdmc+);\n}\n.md-icon-preview:hover::before,\n.md-icon-preview.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTIgMTcuMDVoOC45NVYyNkg1MnoiIGZpbGw9IiMwMGE0ZmYiIC8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aC0yIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01Ny4wNSAxMkg2NnY4Ljk1aC04Ljk1eiIgZmlsbD0iIzAwYTRmZiIgLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoLTMiPjxwYXRoIGNsYXNzPSJjbHMtMSIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1IDU4Ljk5NyAxOC45OTMpIiBkPSJNNTYgMThoNnYyaC02eiIgZmlsbD0iIzAwYTRmZiIgLz48L2NsaXBQYXRoPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik04IDRhNi41MiA2LjUyIDAgMCAxIDUuODQgNEE2LjUyIDYuNTIgMCAwIDEgOCAxMmE2LjUyIDYuNTIgMCAwIDEtNS44NC00QTYuNTIgNi41MiAwIDAgMSA4IDRtMC0yYTguNjYgOC42NiAwIDAgMC04IDYgOC42NiA4LjY2IDAgMCAwIDggNiA4LjY2IDguNjYgMCAwIDAgOC02IDguNjYgOC42NiAwIDAgMC04LTZ6IiBmaWxsPSIjMDBhNGZmIiAvPjxjaXJjbGUgY2xhc3M9ImNscy01IiBjeD0iOCIgY3k9IjgiIHI9IjIiIGZpbGw9IiMwMGE0ZmYiIC8+PC9zdmc+);\n}\n\n.md-icon-side-by-side:before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzYwMDE2MjE4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEyNTEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNOTI4IDY0SDk2QzQyLjk4IDY0IDAgMTA2Ljk4IDAgMTYwdjcwNGMwIDUzLjAyIDQyLjk4IDk2IDk2IDk2aDgzMmM1My4wMiAwIDk2LTQyLjk4IDk2LTk2VjE2MGMwLTUzLjAyLTQyLjk4LTk2LTk2LTk2ek00NDggODMySDEyOFYzMjBoMzIwdjUxMnogbTQ0OCAwSDU3NlYzMjBoMzIwdjUxMnoiIHAtaWQ9IjEyNTIiIGZpbGw9IiM1NTU1NTUiPjwvcGF0aD48L3N2Zz4=\")\n}\n.md-icon-side-by-side:hover::before,\n.md-icon-side-by-side.active::before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzYwMDE2MjE4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEyNTEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNOTI4IDY0SDk2QzQyLjk4IDY0IDAgMTA2Ljk4IDAgMTYwdjcwNGMwIDUzLjAyIDQyLjk4IDk2IDk2IDk2aDgzMmM1My4wMiAwIDk2LTQyLjk4IDk2LTk2VjE2MGMwLTUzLjAyLTQyLjk4LTk2LTk2LTk2ek00NDggODMySDEyOFYzMjBoMzIwdjUxMnogbTQ0OCAwSDU3NlYzMjBoMzIwdjUxMnoiIHAtaWQ9IjEyNTIiIGZpbGw9IiMwMGE0ZmYiPjwvcGF0aD48L3N2Zz4=\")\n}\n\n.md-icon-clean-block:before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk3OTg2MTYyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwOTggMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE3MjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjE0LjQ1MzEyNSIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMS45NjcyMzIgODA0LjU4NTQ3MmwxOTEuOTg3NzEyLTIxOS40MTQ1MjgtNDM4LjgyOTA1NiAwLTE5MS45ODc3MTIgMjE5LjQxNDUyOCA0MzguODI5MDU2IDB6bTU3OC44MjAwOTYtNjE1LjM4OTE4NHE4LjU3MDg4IDE5LjQyNzMyOCA1LjQyODIyNCA0MC44NTQ1Mjh0LTE3LjQyNzQ1NiAzNy40MjYxNzZsLTUxMS45NjcyMzIgNTg1LjEwNTQwOHEtMjEuNzEyODk2IDI1LjE0MTI0OC01NC44NTM2MzIgMjUuMTQxMjQ4bC00MzguODI5MDU2IDBxLTIxLjcxMjg5NiAwLTM5LjcxMTc0NC0xMS43MTM1MzZ0LTI3LjE0MTEyLTMxLjE0MDg2NHEtOC41NzA4OC0xOS40MjczMjgtNS40MjgyMjQtNDAuODU0NTI4dDE3LjQyNzQ1Ni0zNy40MjYxNzZsNTExLjk2NzIzMi01ODUuMTA1NDA4cTIxLjcxMjg5Ni0yNS4xNDEyNDggNTQuODUzNjMyLTI1LjE0MTI0OGw0MzguODI5MDU2IDBxMjEuNzEyODk2IDAgMzkuNzExNzQ0IDExLjcxMzUzNnQyNy4xNDExMiAzMS4xNDA4NjR6IiBwLWlkPSIxNzIyIiBmaWxsPSIjNTU1NTU1Ij48L3BhdGg+PC9zdmc+\")\n}\n.md-icon-clean-block:hover::before,\n.md-icon-clean-block.active::before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk3OTg2MTYyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwOTggMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE3MjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjE0LjQ1MzEyNSIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMS45NjcyMzIgODA0LjU4NTQ3MmwxOTEuOTg3NzEyLTIxOS40MTQ1MjgtNDM4LjgyOTA1NiAwLTE5MS45ODc3MTIgMjE5LjQxNDUyOCA0MzguODI5MDU2IDB6bTU3OC44MjAwOTYtNjE1LjM4OTE4NHE4LjU3MDg4IDE5LjQyNzMyOCA1LjQyODIyNCA0MC44NTQ1Mjh0LTE3LjQyNzQ1NiAzNy40MjYxNzZsLTUxMS45NjcyMzIgNTg1LjEwNTQwOHEtMjEuNzEyODk2IDI1LjE0MTI0OC01NC44NTM2MzIgMjUuMTQxMjQ4bC00MzguODI5MDU2IDBxLTIxLjcxMjg5NiAwLTM5LjcxMTc0NC0xMS43MTM1MzZ0LTI3LjE0MTEyLTMxLjE0MDg2NHEtOC41NzA4OC0xOS40MjczMjgtNS40MjgyMjQtNDAuODU0NTI4dDE3LjQyNzQ1Ni0zNy40MjYxNzZsNTExLjk2NzIzMi01ODUuMTA1NDA4cTIxLjcxMjg5Ni0yNS4xNDEyNDggNTQuODUzNjMyLTI1LjE0MTI0OGw0MzguODI5MDU2IDBxMjEuNzEyODk2IDAgMzkuNzExNzQ0IDExLjcxMzUzNnQyNy4xNDExMiAzMS4xNDA4NjR6IiBwLWlkPSIxNzIyIiBmaWxsPSIjMDBhNGZmIj48L3BhdGg+PC9zdmc+\")\n}\n\n.md-icon-horizontal-rule:before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk4MTc2MjYwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI2MzQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMCA0MTZ2MTkyYzAgMTcuNjcyIDE0LjMyOCAzMiAzMiAzMmg5NjBjMTcuNjcyIDAgMzItMTQuMzI4IDMyLTMydi0xOTJjMC0xNy42NzItMTQuMzI4LTMyLTMyLTMySDMyYy0xNy42NzIgMC0zMiAxNC4zMjgtMzIgMzJ6IiBwLWlkPSIyNjM1IiBmaWxsPSIjNTU1NTU1Ij48L3BhdGg+PC9zdmc+\")\n}\n.md-icon-horizontal-rule:hover::before,\n.md-icon-horizontal-rule.active::before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk4MTc2MjYwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI2MzQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMCA0MTZ2MTkyYzAgMTcuNjcyIDE0LjMyOCAzMiAzMiAzMmg5NjBjMTcuNjcyIDAgMzItMTQuMzI4IDMyLTMydi0xOTJjMC0xNy42NzItMTQuMzI4LTMyLTMyLTMySDMyYy0xNy42NzIgMC0zMiAxNC4zMjgtMzIgMzJ6IiBwLWlkPSIyNjM1IiBmaWxsPSIjMDBhNGZmIj48L3BhdGg+PC9zdmc+\")\n}\n\n.md-icon-fullscreen:before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk4NjY3MzAyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM1NjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODA2LjI1MzcyNiAzMDkuMTc0ODU3bC0yMDIuODI1MTQzIDIwMi44MjUxNDMgMjAyLjgyNTE0MyAyMDIuODI1MTQzIDgyLjI4NTcxNC04Mi4yODU3MTRxMTYuNjAzNDI5LTE3LjcwMDU3MSA0MC4wMDkxNDMtNy45NzI1NzEgMjIuMzA4NTcxIDkuNzI4IDIyLjMwODU3MSAzMy43MTg4NTdsMCAyNTZxMCAxNC44NDgtMTAuODI1MTQzIDI1Ljc0NjI4NnQtMjUuNzQ2Mjg2IDEwLjgyNTE0M2wtMjU2IDBxLTIzLjk5MDg1NyAwLTMzLjcxODg1Ny0yMi44MjA1NzEtOS43MjgtMjIuMzA4NTcxIDcuOTcyNTcxLTM5LjQyNGw4Mi4yODU3MTQtODIuMjg1NzE0LTIwMi44MjUxNDMtMjAyLjgyNTE0My0yMDIuODI1MTQzIDIwMi44MjUxNDMgODIuMjg1NzE0IDgyLjI4NTcxNHExNy43MDA1NzEgMTcuMTE1NDI5IDcuOTcyNTcxIDM5LjQyNC05LjcyOCAyMi44MjA1NzEtMzMuNzE4ODU3IDIyLjgyMDU3MWwtMjU2IDBxLTE0Ljg0OCAwLTI1Ljc0NjI4Ni0xMC44MjUxNDN0LTEwLjgyNTE0My0yNS43NDYyODZsMC0yNTZxMC0yMy45OTA4NTcgMjIuODIwNTcxLTMzLjcxODg1NyAyMi4zMDg1NzEtOS43MjggMzkuNDI0IDcuOTcyNTcxbDgyLjI4NTcxNCA4Mi4yODU3MTQgMjAyLjgyNTE0My0yMDIuODI1MTQzLTIwMi44MjUxNDMtMjAyLjgyNTE0My04Mi4yODU3MTQgODIuMjg1NzE0cS0xMC44MjUxNDMgMTAuODI1MTQzLTI1Ljc0NjI4NiAxMC44MjUxNDMtNi44NzU0MjkgMC0xMy42Nzc3MTQtMi44NTI1NzEtMjIuODIwNTcxLTkuNzI4LTIyLjgyMDU3MS0zMy43MTg4NTdsMC0yNTZxMC0xNC44NDggMTAuODI1MTQzLTI1Ljc0NjI4NnQyNS43NDYyODYtMTAuODI1MTQzbDI1NiAwcTIzLjk5MDg1NyAwIDMzLjcxODg1NyAyMi44MjA1NzEgOS43MjggMjIuMzA4NTcxLTcuOTcyNTcxIDM5LjQyNGwtODIuMjg1NzE0IDgyLjI4NTcxNCAyMDIuODI1MTQzIDIwMi44MjUxNDMgMjAyLjgyNTE0My0yMDIuODI1MTQzLTgyLjI4NTcxNC04Mi4yODU3MTRxLTE3LjcwMDU3MS0xNy4xMTU0MjktNy45NzI1NzEtMzkuNDI0IDkuNzI4LTIyLjgyMDU3MSAzMy43MTg4NTctMjIuODIwNTcxbDI1NiAwcTE0Ljg0OCAwIDI1Ljc0NjI4NiAxMC44MjUxNDN0MTAuODI1MTQzIDI1Ljc0NjI4NmwwIDI1NnEwIDIzLjk5MDg1Ny0yMi4zMDg1NzEgMzMuNzE4ODU3LTcuNDYwNTcxIDIuODUyNTcxLTE0LjI2Mjg1NyAyLjg1MjU3MS0xNC44NDggMC0yNS43NDYyODYtMTAuODI1MTQzeiIgcC1pZD0iMzU2MiIgZmlsbD0iIzU1NTU1NSI+PC9wYXRoPjwvc3ZnPg==\")\n}\n.md-icon-fullscreen:hover::before,\n.md-icon-fullscreen.active::before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk4NjY3MzAyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM1NjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODA2LjI1MzcyNiAzMDkuMTc0ODU3bC0yMDIuODI1MTQzIDIwMi44MjUxNDMgMjAyLjgyNTE0MyAyMDIuODI1MTQzIDgyLjI4NTcxNC04Mi4yODU3MTRxMTYuNjAzNDI5LTE3LjcwMDU3MSA0MC4wMDkxNDMtNy45NzI1NzEgMjIuMzA4NTcxIDkuNzI4IDIyLjMwODU3MSAzMy43MTg4NTdsMCAyNTZxMCAxNC44NDgtMTAuODI1MTQzIDI1Ljc0NjI4NnQtMjUuNzQ2Mjg2IDEwLjgyNTE0M2wtMjU2IDBxLTIzLjk5MDg1NyAwLTMzLjcxODg1Ny0yMi44MjA1NzEtOS43MjgtMjIuMzA4NTcxIDcuOTcyNTcxLTM5LjQyNGw4Mi4yODU3MTQtODIuMjg1NzE0LTIwMi44MjUxNDMtMjAyLjgyNTE0My0yMDIuODI1MTQzIDIwMi44MjUxNDMgODIuMjg1NzE0IDgyLjI4NTcxNHExNy43MDA1NzEgMTcuMTE1NDI5IDcuOTcyNTcxIDM5LjQyNC05LjcyOCAyMi44MjA1NzEtMzMuNzE4ODU3IDIyLjgyMDU3MWwtMjU2IDBxLTE0Ljg0OCAwLTI1Ljc0NjI4Ni0xMC44MjUxNDN0LTEwLjgyNTE0My0yNS43NDYyODZsMC0yNTZxMC0yMy45OTA4NTcgMjIuODIwNTcxLTMzLjcxODg1NyAyMi4zMDg1NzEtOS43MjggMzkuNDI0IDcuOTcyNTcxbDgyLjI4NTcxNCA4Mi4yODU3MTQgMjAyLjgyNTE0My0yMDIuODI1MTQzLTIwMi44MjUxNDMtMjAyLjgyNTE0My04Mi4yODU3MTQgODIuMjg1NzE0cS0xMC44MjUxNDMgMTAuODI1MTQzLTI1Ljc0NjI4NiAxMC44MjUxNDMtNi44NzU0MjkgMC0xMy42Nzc3MTQtMi44NTI1NzEtMjIuODIwNTcxLTkuNzI4LTIyLjgyMDU3MS0zMy43MTg4NTdsMC0yNTZxMC0xNC44NDggMTAuODI1MTQzLTI1Ljc0NjI4NnQyNS43NDYyODYtMTAuODI1MTQzbDI1NiAwcTIzLjk5MDg1NyAwIDMzLjcxODg1NyAyMi44MjA1NzEgOS43MjggMjIuMzA4NTcxLTcuOTcyNTcxIDM5LjQyNGwtODIuMjg1NzE0IDgyLjI4NTcxNCAyMDIuODI1MTQzIDIwMi44MjUxNDMgMjAyLjgyNTE0My0yMDIuODI1MTQzLTgyLjI4NTcxNC04Mi4yODU3MTRxLTE3LjcwMDU3MS0xNy4xMTU0MjktNy45NzI1NzEtMzkuNDI0IDkuNzI4LTIyLjgyMDU3MSAzMy43MTg4NTctMjIuODIwNTcxbDI1NiAwcTE0Ljg0OCAwIDI1Ljc0NjI4NiAxMC44MjUxNDN0MTAuODI1MTQzIDI1Ljc0NjI4NmwwIDI1NnEwIDIzLjk5MDg1Ny0yMi4zMDg1NzEgMzMuNzE4ODU3LTcuNDYwNTcxIDIuODUyNTcxLTE0LjI2Mjg1NyAyLjg1MjU3MS0xNC44NDggMC0yNS43NDYyODYtMTAuODI1MTQzeiIgcC1pZD0iMzU2MiIgZmlsbD0iIzAwYTRmZiI+PC9wYXRoPjwvc3ZnPg==\")\n}\n\n.md-icon-guide:before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk4ODE2MTI3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ0ODEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDAuNUMyMjkuNSAwLjUgMC41IDIyOS41IDAuNSA1MTJzMjI5IDUxMS41IDUxMS41IDUxMS41YzI4Mi41IDAgNTExLjUtMjI5IDUxMS41LTUxMS41Uzc5NC41IDAuNSA1MTIgMC41ek01MTIgODA0LjNjLTI1LjIgMC00NS43LTIwLjQtNDUuNy00NS43czIwLjQtNDUuNyA0NS43LTQ1LjdjMjUuMiAwIDQ1LjcgMjAuNCA0NS43IDQ1LjdTNTM3LjIgODA0LjMgNTEyIDgwNC4zek01ODEuOCA1MzAuNmMtNDQuOCAyNi42LTQzLjIgNjEuNS00My4yIDYzLjJsMCA1My4zYzAgMTYuNi0xMS41IDI5LjMtMzAuNCAyOS4zLTE5IDAtMzAuNi0xMi43LTMwLjYtMjkuM2wwLTUxLjdjLTEuNy0yNi42IDEwLTc4LjEgNjkuOC0xMTQuNyAyOS45LTE4LjMgNjMuNi00OS45IDYzLjYtOTYuNCAwLTU2LjUtNDQuMi05OC41LTEwMC43LTk4LjUtNTYuNSAwLTEwMC43IDQyLTEwMC43IDk4LjUgMCAxNi42LTE0LjQgMjkuOS0zMSAyOS45LTE2LjYgMC0zMS0xMy4zLTMxLTI5LjkgMC05MS40IDczLjEtMTY0LjYgMTY0LjQtMTY0LjZzMTY0LjQgNzEuNSAxNjQuNCAxNjIuOUM2NzYuNCA0NDAuOCA2NDMuMiA0OTQgNTgxLjggNTMwLjZ6IiBwLWlkPSI0NDgyIiBmaWxsPSIjNTU1NTU1Ij48L3BhdGg+PC9zdmc+\")\n}\n.md-icon-guide:hover::before,\n.md-icon-guide.active::before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk4ODE2MTI3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ0ODEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDAuNUMyMjkuNSAwLjUgMC41IDIyOS41IDAuNSA1MTJzMjI5IDUxMS41IDUxMS41IDUxMS41YzI4Mi41IDAgNTExLjUtMjI5IDUxMS41LTUxMS41Uzc5NC41IDAuNSA1MTIgMC41ek01MTIgODA0LjNjLTI1LjIgMC00NS43LTIwLjQtNDUuNy00NS43czIwLjQtNDUuNyA0NS43LTQ1LjdjMjUuMiAwIDQ1LjcgMjAuNCA0NS43IDQ1LjdTNTM3LjIgODA0LjMgNTEyIDgwNC4zek01ODEuOCA1MzAuNmMtNDQuOCAyNi42LTQzLjIgNjEuNS00My4yIDYzLjJsMCA1My4zYzAgMTYuNi0xMS41IDI5LjMtMzAuNCAyOS4zLTE5IDAtMzAuNi0xMi43LTMwLjYtMjkuM2wwLTUxLjdjLTEuNy0yNi42IDEwLTc4LjEgNjkuOC0xMTQuNyAyOS45LTE4LjMgNjMuNi00OS45IDYzLjYtOTYuNCAwLTU2LjUtNDQuMi05OC41LTEwMC43LTk4LjUtNTYuNSAwLTEwMC43IDQyLTEwMC43IDk4LjUgMCAxNi42LTE0LjQgMjkuOS0zMSAyOS45LTE2LjYgMC0zMS0xMy4zLTMxLTI5LjkgMC05MS40IDczLjEtMTY0LjYgMTY0LjQtMTY0LjZzMTY0LjQgNzEuNSAxNjQuNCAxNjIuOUM2NzYuNCA0NDAuOCA2NDMuMiA0OTQgNTgxLjggNTMwLjZ6IiBwLWlkPSI0NDgyIiBmaWxsPSIjMDBhNGZmIj48L3BhdGg+PC9zdmc+\")\n}\n\n.md-icon-undo:before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk5MDQ4MDkwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUzOTUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNDI0LjY2NiA0NDguNjY2SDI0Yy0xMy4yNTQgMC0yNC0xMC43NDYtMjQtMjRWMjRDMCAxMC43NDYgMTAuNzQ2IDAgMjQgMGg5NmMxMy4yNTQgMCAyNCAxMC43NDYgMjQgMjR2MTU2LjIyNEMyMzUuNTQ2IDc4LjU1OCAzNjguNTIgMTQuOTQgNTE2LjM1IDE2LjAxNGMyNzMuODEyIDEuOTg4IDQ5Mi44OTYgMjIzLjI0NiA0OTIuMzE0IDQ5Ny4wNjRDMTAwOC4wODIgNzg2LjUxNiA3ODYuMjQgMTAwOCA1MTIuNjY2IDEwMDhjLTEyOC4xNzggMC0yNDQuOTkyLTQ4LjYyNi0zMzMuMDItMTI4LjQzLTEwLjE5OC05LjI0NC0xMC42NjgtMjUuMTA4LTAuOTM0LTM0Ljg0bDY3LjkzNC02Ny45MzRjOC45NDgtOC45NDggMjMuMzI0LTkuNDM0IDMyLjgwMi0xLjA1QzM0MS41MiA4MzAuNjcyIDQyMy4xNiA4NjQgNTEyLjY2NiA4NjRjMTk0LjUzNiAwIDM1Mi0xNTcuNDMyIDM1Mi0zNTIgMC0xOTQuNTM0LTE1Ny40MzItMzUyLTM1Mi0zNTItMTE2Ljk5MiAwLTIyMC41NiA1Ni45NTItMjg0LjU0OCAxNDQuNjY2aDE5Ni41NDhjMTMuMjU0IDAgMjQgMTAuNzQ2IDI0IDI0djk2YzAgMTMuMjU0LTEwLjc0NiAyNC0yNCAyNHoiIHAtaWQ9IjUzOTYiIGZpbGw9IiM1NTU1NTUiPjwvcGF0aD48L3N2Zz4=\")\n}\n.md-icon-undo:hover::before,\n.md-icon-undo.active::before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk5MDQ4MDkwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUzOTUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNDI0LjY2NiA0NDguNjY2SDI0Yy0xMy4yNTQgMC0yNC0xMC43NDYtMjQtMjRWMjRDMCAxMC43NDYgMTAuNzQ2IDAgMjQgMGg5NmMxMy4yNTQgMCAyNCAxMC43NDYgMjQgMjR2MTU2LjIyNEMyMzUuNTQ2IDc4LjU1OCAzNjguNTIgMTQuOTQgNTE2LjM1IDE2LjAxNGMyNzMuODEyIDEuOTg4IDQ5Mi44OTYgMjIzLjI0NiA0OTIuMzE0IDQ5Ny4wNjRDMTAwOC4wODIgNzg2LjUxNiA3ODYuMjQgMTAwOCA1MTIuNjY2IDEwMDhjLTEyOC4xNzggMC0yNDQuOTkyLTQ4LjYyNi0zMzMuMDItMTI4LjQzLTEwLjE5OC05LjI0NC0xMC42NjgtMjUuMTA4LTAuOTM0LTM0Ljg0bDY3LjkzNC02Ny45MzRjOC45NDgtOC45NDggMjMuMzI0LTkuNDM0IDMyLjgwMi0xLjA1QzM0MS41MiA4MzAuNjcyIDQyMy4xNiA4NjQgNTEyLjY2NiA4NjRjMTk0LjUzNiAwIDM1Mi0xNTcuNDMyIDM1Mi0zNTIgMC0xOTQuNTM0LTE1Ny40MzItMzUyLTM1Mi0zNTItMTE2Ljk5MiAwLTIyMC41NiA1Ni45NTItMjg0LjU0OCAxNDQuNjY2aDE5Ni41NDhjMTMuMjU0IDAgMjQgMTAuNzQ2IDI0IDI0djk2YzAgMTMuMjU0LTEwLjc0NiAyNC0yNCAyNHoiIHAtaWQ9IjUzOTYiIGZpbGw9IiMwMGE0ZmYiPjwvcGF0aD48L3N2Zz4=\")\n}\n\n.md-icon-redo:before {\n  background-size: 19px;\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk5MjY0NTc1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjY1NDUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODc3LjcyOCAxNDYuMjcydjI1NnEwIDE0Ljg0OC0xMC44NDggMjUuNzI4dC0yNS43MjggMTAuODQ4aC0yNTZxLTI0IDAtMzMuNzI4LTIyLjg0OC05LjcyOC0yMi4yNzIgOC0zOS40MjRsNzguODQ4LTc4Ljg0OHEtODQuNTc2LTc4LjI3Mi0xOTkuNDI0LTc4LjI3Mi01OS40MjQgMC0xMTMuNDQgMjMuMTM2dC05My40NCA2Mi41Ni02Mi41NiA5My40NC0yMy4xMzYgMTEzLjQ0IDIzLjEzNiAxMTMuNDQgNjIuNTYgOTMuNDQgOTMuNDQgNjIuNTYgMTEzLjQ0IDIzLjEzNnE2OCAwIDEyOC41NzYtMjkuNzI4dDEwMi4yNzItODRxNC01LjcyOCAxMy4xNTItNi44NDggOC41NzYgMCAxNC4yNzIgNS4xNTJsNzguMjcyIDc4Ljg0OHE1LjE1MiA0LjU3NiA1LjQ0IDExLjcxMnQtNC4yODggMTIuODY0cS02Mi4yNzIgNzUuNDI0LTE1MC44NDggMTE2Ljg2NHQtMTg2Ljg0OCA0MS40NHEtODkuMTUyIDAtMTcwLjI3Mi0zNC44NDh0LTE0MC05My43MjgtOTMuNzI4LTE0MFQwIDUxMi4wNjR0MzQuODQ4LTE3MC4yNzIgOTMuNzI4LTE0MCAxNDAtOTMuNzI4IDE3MC4yNzItMzQuODQ4cTg0IDAgMTYyLjU2IDMxLjcxMnQxMzkuNzEyIDg5LjQ0bDc0LjI3Mi03My43MjhxMTYuNTc2LTE3LjcyOCA0MC04IDIyLjI3MiA5LjcyOCAyMi4yNzIgMzMuNzI4eiIgZmlsbD0iIzU1NTU1NSIgcC1pZD0iNjU0NiI+PC9wYXRoPjwvc3ZnPg==\")\n}\n.md-icon-redo:hover::before,\n.md-icon-redo.active::before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk5MzUzMDAwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjY3NjgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODc3LjcyOCAxNDYuMjcydjI1NnEwIDE0Ljg0OC0xMC44NDggMjUuNzI4dC0yNS43MjggMTAuODQ4aC0yNTZxLTI0IDAtMzMuNzI4LTIyLjg0OC05LjcyOC0yMi4yNzIgOC0zOS40MjRsNzguODQ4LTc4Ljg0OHEtODQuNTc2LTc4LjI3Mi0xOTkuNDI0LTc4LjI3Mi01OS40MjQgMC0xMTMuNDQgMjMuMTM2dC05My40NCA2Mi41Ni02Mi41NiA5My40NC0yMy4xMzYgMTEzLjQ0IDIzLjEzNiAxMTMuNDQgNjIuNTYgOTMuNDQgOTMuNDQgNjIuNTYgMTEzLjQ0IDIzLjEzNnE2OCAwIDEyOC41NzYtMjkuNzI4dDEwMi4yNzItODRxNC01LjcyOCAxMy4xNTItNi44NDggOC41NzYgMCAxNC4yNzIgNS4xNTJsNzguMjcyIDc4Ljg0OHE1LjE1MiA0LjU3NiA1LjQ0IDExLjcxMnQtNC4yODggMTIuODY0cS02Mi4yNzIgNzUuNDI0LTE1MC44NDggMTE2Ljg2NHQtMTg2Ljg0OCA0MS40NHEtODkuMTUyIDAtMTcwLjI3Mi0zNC44NDh0LTE0MC05My43MjgtOTMuNzI4LTE0MFQwIDUxMi4wNjR0MzQuODQ4LTE3MC4yNzIgOTMuNzI4LTE0MCAxNDAtOTMuNzI4IDE3MC4yNzItMzQuODQ4cTg0IDAgMTYyLjU2IDMxLjcxMnQxMzkuNzEyIDg5LjQ0bDc0LjI3Mi03My43MjhxMTYuNTc2LTE3LjcyOCA0MC04IDIyLjI3MiA5LjcyOCAyMi4yNzIgMzMuNzI4eiIgZmlsbD0iIzAwYTRmZiIgcC1pZD0iNjc2OSI+PC9wYXRoPjwvc3ZnPg==\")\n}\n\n.md-icon-file:before {\n  background-size: 19px;\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyNDE2NTI2OTUxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEyNzA1IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUyMS44OTg2NjcgNjE4LjM5MzZhNTUuMDIyOTMzIDU1LjAyMjkzMyAwIDAgMCA3Ny42MTkyIDBsMTc0LjYyNjEzMy0xNzQuNTU3ODY3YTEzNy4zODY2NjcgMTM3LjM4NjY2NyAwIDAgMCAwLTE5My45Nzk3MzMgMTM3LjM1MjUzMyAxMzcuMzUyNTMzIDAgMCAwLTE5My45Nzk3MzMgMGwtMzI5Ljc2MjEzNCAzMjkuNzk2MjY3YTEzNy4yMTYgMTM3LjIxNiAwIDAgMCAwIDE5My45Nzk3MzMgMTM3LjIxNiAxMzcuMjE2IDAgMCAwIDE5My45Nzk3MzQgMGw5LjY1OTczMy05Ljc2MjEzM2E0MS4xNjQ4IDQxLjE2NDggMCAwIDEgNTguMTk3MzMzIDU4LjE5NzMzM2wtOS42NTk3MzMgOS43NjIxMzNjLTg2LjA1MDEzMyA4NS42MDY0LTIyNC44NzA0IDg1LjUwNC0zMTAuMzc0NCAwLTg1LjUzODEzMy04NS41MzgxMzMtODUuNjc0NjY3LTIyNC4yOTAxMzMgMC0zMTAuMzc0NGwzMjkuNzk2MjY3LTMyOS43NjIxMzNhMjE5LjU0NTYgMjE5LjU0NTYgMCAwIDEgMzA5Ljc5NDEzMyAwLjU0NjEzMyAyMTkuNTExNDY3IDIxOS41MTE0NjcgMCAwIDEgMC41MTIgMzA5Ljc2bC0xNzQuNTkyIDE3NC41OTJhMTM3LjMxODQgMTM3LjMxODQgMCAwIDEtMTkzLjk3OTczMyAwIDEzNy4zMTg0IDEzNy4zMTg0IDAgMCAxIDAtMTkzLjk3OTczM2wxNjQuODY0LTE2NC44NjRhNDEuMTY0OCA0MS4xNjQ4IDAgMCAxIDU4LjIzMTQ2NiA1OC4xNjMybC0xNjQuODk4MTMzIDE2NC44NjRhNTQuOTU0NjY3IDU0Ljk1NDY2NyAwIDAgMCAwIDc3LjYxOTJ6IiBwLWlkPSIxMjcwNiIgZmlsbD0iIzU1NTU1NSI+PC9wYXRoPjwvc3ZnPg==\")\n}\n.md-icon-file:hover::before,\n.md-icon-file.active::before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyNDE2NTI2OTUxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEyNzA1IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUyMS44OTg2NjcgNjE4LjM5MzZhNTUuMDIyOTMzIDU1LjAyMjkzMyAwIDAgMCA3Ny42MTkyIDBsMTc0LjYyNjEzMy0xNzQuNTU3ODY3YTEzNy4zODY2NjcgMTM3LjM4NjY2NyAwIDAgMCAwLTE5My45Nzk3MzMgMTM3LjM1MjUzMyAxMzcuMzUyNTMzIDAgMCAwLTE5My45Nzk3MzMgMGwtMzI5Ljc2MjEzNCAzMjkuNzk2MjY3YTEzNy4yMTYgMTM3LjIxNiAwIDAgMCAwIDE5My45Nzk3MzMgMTM3LjIxNiAxMzcuMjE2IDAgMCAwIDE5My45Nzk3MzQgMGw5LjY1OTczMy05Ljc2MjEzM2E0MS4xNjQ4IDQxLjE2NDggMCAwIDEgNTguMTk3MzMzIDU4LjE5NzMzM2wtOS42NTk3MzMgOS43NjIxMzNjLTg2LjA1MDEzMyA4NS42MDY0LTIyNC44NzA0IDg1LjUwNC0zMTAuMzc0NCAwLTg1LjUzODEzMy04NS41MzgxMzMtODUuNjc0NjY3LTIyNC4yOTAxMzMgMC0zMTAuMzc0NGwzMjkuNzk2MjY3LTMyOS43NjIxMzNhMjE5LjU0NTYgMjE5LjU0NTYgMCAwIDEgMzA5Ljc5NDEzMyAwLjU0NjEzMyAyMTkuNTExNDY3IDIxOS41MTE0NjcgMCAwIDEgMC41MTIgMzA5Ljc2bC0xNzQuNTkyIDE3NC41OTJhMTM3LjMxODQgMTM3LjMxODQgMCAwIDEtMTkzLjk3OTczMyAwIDEzNy4zMTg0IDEzNy4zMTg0IDAgMCAxIDAtMTkzLjk3OTczM2wxNjQuODY0LTE2NC44NjRhNDEuMTY0OCA0MS4xNjQ4IDAgMCAxIDU4LjIzMTQ2NiA1OC4xNjMybC0xNjQuODk4MTMzIDE2NC44NjRhNTQuOTU0NjY3IDU0Ljk1NDY2NyAwIDAgMCAwIDc3LjYxOTJ6IiBwLWlkPSIxMjcwNiIgZmlsbD0iIzAwYTRmZiI+PC9wYXRoPjwvc3ZnPg==\")\n}\n\n\n.md-icon-heading-1::after,\n.md-icon-heading-2::after,\n.md-icon-heading-3::after {\n  display: none;\n}";
styleInject(css_248z);

var _Class3;
/**
 * marked v15.0.12 - a markdown parser
 * Copyright (c) 2011-2025, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */

// src/defaults.ts
function _getDefaults() {
  return {
    async: false,
    breaks: false,
    extensions: null,
    gfm: true,
    hooks: null,
    pedantic: false,
    renderer: null,
    silent: false,
    tokenizer: null,
    walkTokens: null
  };
}
var _defaults = _getDefaults();
function changeDefaults(newDefaults) {
  _defaults = newDefaults;
}

// src/rules.ts
var noopTest = {
  exec: function exec() {
    return null;
  }
};
function edit(regex) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var source = typeof regex === "string" ? regex : regex.source;
  var obj = {
    replace: function replace(name, val) {
      var valSource = typeof val === "string" ? val : val.source;
      valSource = valSource.replace(other.caret, "$1");
      source = source.replace(name, valSource);
      return obj;
    },
    getRegex: function getRegex() {
      return new RegExp(source, opt);
    }
  };
  return obj;
}
var other = {
  codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
  outputLinkReplace: /\\([\[\]])/g,
  indentCodeCompensation: /^(\s+)(?:```)/,
  beginningSpace: /^\s+/,
  endingHash: /#$/,
  startingSpaceChar: /^ /,
  endingSpaceChar: / $/,
  nonSpaceChar: /[^ ]/,
  newLineCharGlobal: /\n/g,
  tabCharGlobal: /\t/g,
  multipleSpaceGlobal: /\s+/g,
  blankLine: /^[ \t]*$/,
  doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
  blockquoteStart: /^ {0,3}>/,
  blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
  blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
  listReplaceTabs: /^\t+/,
  listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
  listIsTask: /^\[[ xX]\] /,
  listReplaceTask: /^\[[ xX]\] +/,
  anyLine: /\n.*\n/,
  hrefBrackets: /^<(.*)>$/,
  tableDelimiter: /[:|]/,
  tableAlignChars: /^\||\| *$/g,
  tableRowBlankLine: /\n[ \t]*$/,
  tableAlignRight: /^ *-+: *$/,
  tableAlignCenter: /^ *:-+: *$/,
  tableAlignLeft: /^ *:-+ *$/,
  startATag: /^<a /i,
  endATag: /^<\/a>/i,
  startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
  endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
  startAngleBracket: /^</,
  endAngleBracket: />$/,
  pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
  unicodeAlphaNumeric: /(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDD40-\uDD65\uDD6F-\uDD85\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDED0-\uDEE3\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0\uDFF0-\uDFF9]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D\uDD30-\uDD39]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDD70-\uDD79\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD833[\uDCF0-\uDCF9]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDDD0-\uDDED\uDDF0-\uDDFA\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])/,
  escapeTest: /[&<>"']/,
  escapeReplace: /[&<>"']/g,
  escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
  unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
  caret: /(^|[^\[])\^/g,
  percentDecode: /%25/g,
  findPipe: /\|/g,
  splitPipe: / \|/,
  slashPipe: /\\\|/g,
  carriageReturn: /\r\n|\r/g,
  spaceLine: /^ +$/gm,
  notSpaceStart: /^\S*/,
  endingNewline: /\n$/,
  listItemRegex: function listItemRegex(bull) {
    return new RegExp("^( {0,3}".concat(bull, ")((?:[\t ][^\\n]*)?(?:\\n|$))"));
  },
  nextBulletRegex: function nextBulletRegex(indent) {
    return new RegExp("^ {0,".concat(Math.min(3, indent - 1), "}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))"));
  },
  hrRegex: function hrRegex(indent) {
    return new RegExp("^ {0,".concat(Math.min(3, indent - 1), "}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)"));
  },
  fencesBeginRegex: function fencesBeginRegex(indent) {
    return new RegExp("^ {0,".concat(Math.min(3, indent - 1), "}(?:```|~~~)"));
  },
  headingBeginRegex: function headingBeginRegex(indent) {
    return new RegExp("^ {0,".concat(Math.min(3, indent - 1), "}#"));
  },
  htmlBeginRegex: function htmlBeginRegex(indent) {
    return new RegExp("^ {0,".concat(Math.min(3, indent - 1), "}<(?:[a-z].*>|!--)"), "i");
  }
};
var newline = /^(?:[ \t]*(?:\n|$))+/;
var blockCode = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
var fences = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var bullet = /(?:[*+-]|\d{1,9}[.)])/;
var lheadingCore = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
var lheading = edit(lheadingCore).replace(/bull/g, bullet).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
var lheadingGfm = edit(lheadingCore).replace(/bull/g, bullet).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
var _paragraph = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
var blockText = /^[^\n]+/;
var _blockLabel = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
var def = edit(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", _blockLabel).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var list = edit(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, bullet).getRegex();
var _tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var _comment = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var html = edit("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", _comment).replace("tag", _tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var paragraph = edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
var blockquote = edit(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", paragraph).getRegex();
var blockNormal = {
  blockquote: blockquote,
  code: blockCode,
  def: def,
  fences: fences,
  heading: heading,
  hr: hr,
  html: html,
  lheading: lheading,
  list: list,
  newline: newline,
  paragraph: paragraph,
  table: noopTest,
  text: blockText
};
var gfmTable = edit("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
var blockGfm = _objectSpread2(_objectSpread2({}, blockNormal), {}, {
  lheading: lheadingGfm,
  table: gfmTable,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", gfmTable).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex()
});
var blockPedantic = _objectSpread2(_objectSpread2({}, blockNormal), {}, {
  html: edit("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", _comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", lheading).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
});
var escape$1 = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var inlineCode = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var br = /^( {2,}|\\)\n(?!\s*$)/;
var inlineText = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
var _punctuation = /(?:[!-\/:-@\[-`\{-~\xA1-\xA9\xAB\xAC\xAE-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u037E\u0384\u0385\u0387\u03F6\u0482\u055A-\u055F\u0589\u058A\u058D-\u058F\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0606-\u060F\u061B\u061D-\u061F\u066A-\u066D\u06D4\u06DE\u06E9\u06FD\u06FE\u0700-\u070D\u07F6-\u07F9\u07FE\u07FF\u0830-\u083E\u085E\u0888\u0964\u0965\u0970\u09F2\u09F3\u09FA\u09FB\u09FD\u0A76\u0AF0\u0AF1\u0B70\u0BF3-\u0BFA\u0C77\u0C7F\u0C84\u0D4F\u0D79\u0DF4\u0E3F\u0E4F\u0E5A\u0E5B\u0F01-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F85\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FDA\u104A-\u104F\u109E\u109F\u10FB\u1360-\u1368\u1390-\u1399\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DB\u1800-\u180A\u1940\u1944\u1945\u19DE-\u19FF\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B4E\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2010-\u2027\u2030-\u205E\u207A-\u207E\u208A-\u208E\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2429\u2440-\u244A\u249C-\u24E9\u2500-\u2775\u2794-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E5D\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3001-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u303F\u309B\u309C\u30A0\u30FB\u3190\u3191\u3196-\u319F\u31C0-\u31E5\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAA77-\uAA79\uAADE\uAADF\uAAF0\uAAF1\uAB5B\uAB6A\uAB6B\uABEB\uFB29\uFBB2-\uFBC2\uFD3E-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD00-\uDD02\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDC77\uDC78\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEC8\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDD6E\uDD8E\uDD8F\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9\uDFD4\uDFD5\uDFD7\uDFD8]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3F]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09\uDFE1]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFD5-\uDFF1\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3F\uDF44\uDF45]|\uD81B[\uDD6D-\uDD6F\uDE97-\uDE9A\uDFE2]|\uD82F[\uDC9C\uDC9F]|\uD833[\uDC00-\uDCEF\uDD00-\uDEB3\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE8B]|\uD838[\uDD4F\uDEFF]|\uD839\uDDFF|\uD83A[\uDD5E\uDD5F]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0-\uDCBB\uDCC0\uDCC1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFEF])/;
var _punctuationOrSpace = /(?:[\t-\r -\/:-@\[-`\{-~\xA0-\xA9\xAB\xAC\xAE-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u037E\u0384\u0385\u0387\u03F6\u0482\u055A-\u055F\u0589\u058A\u058D-\u058F\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0606-\u060F\u061B\u061D-\u061F\u066A-\u066D\u06D4\u06DE\u06E9\u06FD\u06FE\u0700-\u070D\u07F6-\u07F9\u07FE\u07FF\u0830-\u083E\u085E\u0888\u0964\u0965\u0970\u09F2\u09F3\u09FA\u09FB\u09FD\u0A76\u0AF0\u0AF1\u0B70\u0BF3-\u0BFA\u0C77\u0C7F\u0C84\u0D4F\u0D79\u0DF4\u0E3F\u0E4F\u0E5A\u0E5B\u0F01-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F85\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FDA\u104A-\u104F\u109E\u109F\u10FB\u1360-\u1368\u1390-\u1399\u1400\u166D\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DB\u1800-\u180A\u1940\u1944\u1945\u19DE-\u19FF\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B4E\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2000-\u200A\u2010-\u2029\u202F-\u205F\u207A-\u207E\u208A-\u208E\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2429\u2440-\u244A\u249C-\u24E9\u2500-\u2775\u2794-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E5D\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u303F\u309B\u309C\u30A0\u30FB\u3190\u3191\u3196-\u319F\u31C0-\u31E5\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAA77-\uAA79\uAADE\uAADF\uAAF0\uAAF1\uAB5B\uAB6A\uAB6B\uABEB\uFB29\uFBB2-\uFBC2\uFD3E-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFEFF\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD00-\uDD02\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDC77\uDC78\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEC8\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDD6E\uDD8E\uDD8F\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9\uDFD4\uDFD5\uDFD7\uDFD8]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3F]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09\uDFE1]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFD5-\uDFF1\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3F\uDF44\uDF45]|\uD81B[\uDD6D-\uDD6F\uDE97-\uDE9A\uDFE2]|\uD82F[\uDC9C\uDC9F]|\uD833[\uDC00-\uDCEF\uDD00-\uDEB3\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE8B]|\uD838[\uDD4F\uDEFF]|\uD839\uDDFF|\uD83A[\uDD5E\uDD5F]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0-\uDCBB\uDCC0\uDCC1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFEF])/;
var _notPunctuationOrSpace = /(?:[\0-\x08\x0E-\x1F0-9A-Za-z\x7F-\x9F\xAA\xAD\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376-\u037D\u037F-\u0383\u0386\u0388-\u03F5\u03F7-\u0481\u0483-\u0559\u0560-\u0588\u058B\u058C\u0590-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7-\u05F2\u05F5-\u0605\u0610-\u061A\u061C\u0620-\u0669\u066E-\u06D3\u06D5-\u06DD\u06DF-\u06E8\u06EA-\u06FC\u06FF\u070E-\u07F5\u07FA-\u07FD\u0800-\u082F\u083F-\u085D\u085F-\u0887\u0889-\u0963\u0966-\u096F\u0971-\u09F1\u09F4-\u09F9\u09FC\u09FE-\u0A75\u0A77-\u0AEF\u0AF2-\u0B6F\u0B71-\u0BF2\u0BFB-\u0C76\u0C78-\u0C7E\u0C80-\u0C83\u0C85-\u0D4E\u0D50-\u0D78\u0D7A-\u0DF3\u0DF5-\u0E3E\u0E40-\u0E4E\u0E50-\u0E59\u0E5C-\u0F00\u0F18\u0F19\u0F20-\u0F33\u0F35\u0F37\u0F39\u0F3E-\u0F84\u0F86-\u0FBD\u0FC6\u0FCD\u0FDB-\u1049\u1050-\u109D\u10A0-\u10FA\u10FC-\u135F\u1369-\u138F\u139A-\u13FF\u1401-\u166C\u166F-\u167F\u1681-\u169A\u169D-\u16EA\u16EE-\u1734\u1737-\u17D3\u17D7\u17DC-\u17FF\u180B-\u193F\u1941-\u1943\u1946-\u19DD\u1A00-\u1A1D\u1A20-\u1A9F\u1AA7\u1AAE-\u1B4D\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BFB\u1C00-\u1C3A\u1C40-\u1C7D\u1C80-\u1CBF\u1CC8-\u1CD2\u1CD4-\u1FBC\u1FBE\u1FC2-\u1FCC\u1FD0-\u1FDC\u1FE0-\u1FEC\u1FF0-\u1FFC\u1FFF\u200B-\u200F\u202A-\u202E\u2060-\u2079\u207F-\u2089\u208F-\u209F\u20C1-\u20FF\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u218C-\u218F\u242A-\u243F\u244B-\u249B\u24EA-\u24FF\u2776-\u2793\u2B74\u2B75\u2B96\u2C00-\u2CE4\u2CEB-\u2CF8\u2CFD\u2D00-\u2D6F\u2D71-\u2DFF\u2E2F\u2E5E-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3040-\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u318F\u3192-\u3195\u31A0-\u31BF\u31E6-\u31EE\u31F0-\u31FF\u321F-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48F\uA4C7-\uA4FD\uA500-\uA60C\uA610-\uA672\uA674-\uA67D\uA67F-\uA6F1\uA6F8-\uA6FF\uA717-\uA71F\uA722-\uA788\uA78B-\uA827\uA82C-\uA835\uA83A-\uA873\uA878-\uA8CD\uA8D0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA95E\uA960-\uA9C0\uA9CE-\uA9DD\uA9E0-\uAA5B\uAA60-\uAA76\uAA7A-\uAADD\uAAE0-\uAAEF\uAAF2-\uAB5A\uAB5C-\uAB69\uAB6C-\uABEA\uABEC-\uD7FF\uE000-\uFB28\uFB2A-\uFBB1\uFBC3-\uFD3D\uFD50-\uFDCE\uFDD0-\uFDFB\uFE00-\uFE0F\uFE1A-\uFE2F\uFE53\uFE67\uFE6C-\uFEFE\uFF00\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF]|\uD800[\uDC00-\uDCFF\uDD03-\uDD36\uDD40-\uDD78\uDD8A\uDD8B\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFD-\uDF9E\uDFA0-\uDFCF\uDFD1-\uDFFF]|\uD801[\uDC00-\uDD6E\uDD70-\uDFFF]|\uD802[\uDC00-\uDC56\uDC58-\uDC76\uDC79-\uDD1E\uDD20-\uDD3E\uDD40-\uDE4F\uDE59-\uDE7E\uDE80-\uDEC7\uDEC9-\uDEEF\uDEF7-\uDF38\uDF40-\uDF98\uDF9D-\uDFFF]|\uD803[\uDC00-\uDD6D\uDD6F-\uDD8D\uDD90-\uDEAC\uDEAE-\uDF54\uDF5A-\uDF85\uDF8A-\uDFFF]|\uD804[\uDC00-\uDC46\uDC4E-\uDCBA\uDCBD\uDCC2-\uDD3F\uDD44-\uDD73\uDD76-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDDE0-\uDE37\uDE3E-\uDEA8\uDEAA-\uDFD3\uDFD6\uDFD9-\uDFFF]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5C\uDC5E-\uDCC5\uDCC7-\uDDC0\uDDD8-\uDE40\uDE44-\uDE5F\uDE6D-\uDEB8\uDEBA-\uDF3B\uDF40-\uDFFF]|\uD806[\uDC00-\uDC3A\uDC3C-\uDD43\uDD47-\uDDE1\uDDE3-\uDE3E\uDE47-\uDE99\uDE9D\uDEA3-\uDEFF\uDF0A-\uDFE0\uDFE2-\uDFFF]|\uD807[\uDC00-\uDC40\uDC46-\uDC6F\uDC72-\uDEF6\uDEF9-\uDF42\uDF50-\uDFD4\uDFF2-\uDFFE]|[\uD808\uD80A\uD80C-\uD819\uD81C-\uD82E\uD830-\uD832\uD837\uD83F-\uDBFF][\uDC00-\uDFFF]|\uD809[\uDC00-\uDC6F\uDC75-\uDFFF]|\uD80B[\uDC00-\uDFF0\uDFF3-\uDFFF]|\uD81A[\uDC00-\uDE6D\uDE70-\uDEF4\uDEF6-\uDF36\uDF40-\uDF43\uDF46-\uDFFF]|\uD81B[\uDC00-\uDD6C\uDD70-\uDE96\uDE9B-\uDFE1\uDFE3-\uDFFF]|\uD82F[\uDC00-\uDC9B\uDC9D\uDC9E\uDCA0-\uDFFF]|\uD833[\uDCF0-\uDCFF\uDEB4-\uDF4F\uDFC4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD65-\uDD69\uDD6D-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDDEB-\uDDFF\uDE42-\uDE44\uDE46-\uDEFF\uDF57-\uDFFF]|\uD835[\uDC00-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE8C-\uDFFF]|\uD838[\uDC00-\uDD4E\uDD50-\uDEFE\uDF00-\uDFFF]|\uD839[\uDC00-\uDDFE\uDE00-\uDFFF]|\uD83A[\uDC00-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDD2D\uDD2F-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDD0C\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDB\uDEED-\uDEEF\uDEFD-\uDEFF\uDF77-\uDF7A\uDFDA-\uDFDF\uDFEC-\uDFEF\uDFF1-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCBC-\uDCBF\uDCC2-\uDCFF\uDE54-\uDE5F\uDE6E\uDE6F\uDE7D-\uDE7F\uDE8A-\uDE8E\uDEC7-\uDECD\uDEDD\uDEDE\uDEEA-\uDEEF\uDEF9-\uDEFF\uDF93\uDFF0-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/;
var punctuation = edit(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, _punctuationOrSpace).getRegex();
var _punctuationGfmStrongEm = /(?!~)(?:[!-\/:-@\[-`\{-~\xA1-\xA9\xAB\xAC\xAE-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u037E\u0384\u0385\u0387\u03F6\u0482\u055A-\u055F\u0589\u058A\u058D-\u058F\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0606-\u060F\u061B\u061D-\u061F\u066A-\u066D\u06D4\u06DE\u06E9\u06FD\u06FE\u0700-\u070D\u07F6-\u07F9\u07FE\u07FF\u0830-\u083E\u085E\u0888\u0964\u0965\u0970\u09F2\u09F3\u09FA\u09FB\u09FD\u0A76\u0AF0\u0AF1\u0B70\u0BF3-\u0BFA\u0C77\u0C7F\u0C84\u0D4F\u0D79\u0DF4\u0E3F\u0E4F\u0E5A\u0E5B\u0F01-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F85\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FDA\u104A-\u104F\u109E\u109F\u10FB\u1360-\u1368\u1390-\u1399\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DB\u1800-\u180A\u1940\u1944\u1945\u19DE-\u19FF\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B4E\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2010-\u2027\u2030-\u205E\u207A-\u207E\u208A-\u208E\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2429\u2440-\u244A\u249C-\u24E9\u2500-\u2775\u2794-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E5D\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3001-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u303F\u309B\u309C\u30A0\u30FB\u3190\u3191\u3196-\u319F\u31C0-\u31E5\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAA77-\uAA79\uAADE\uAADF\uAAF0\uAAF1\uAB5B\uAB6A\uAB6B\uABEB\uFB29\uFBB2-\uFBC2\uFD3E-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD00-\uDD02\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDC77\uDC78\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEC8\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDD6E\uDD8E\uDD8F\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9\uDFD4\uDFD5\uDFD7\uDFD8]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3F]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09\uDFE1]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFD5-\uDFF1\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3F\uDF44\uDF45]|\uD81B[\uDD6D-\uDD6F\uDE97-\uDE9A\uDFE2]|\uD82F[\uDC9C\uDC9F]|\uD833[\uDC00-\uDCEF\uDD00-\uDEB3\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE8B]|\uD838[\uDD4F\uDEFF]|\uD839\uDDFF|\uD83A[\uDD5E\uDD5F]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0-\uDCBB\uDCC0\uDCC1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFEF])/;
var _punctuationOrSpaceGfmStrongEm = /(?!~)(?:[\t-\r -\/:-@\[-`\{-~\xA0-\xA9\xAB\xAC\xAE-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u037E\u0384\u0385\u0387\u03F6\u0482\u055A-\u055F\u0589\u058A\u058D-\u058F\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0606-\u060F\u061B\u061D-\u061F\u066A-\u066D\u06D4\u06DE\u06E9\u06FD\u06FE\u0700-\u070D\u07F6-\u07F9\u07FE\u07FF\u0830-\u083E\u085E\u0888\u0964\u0965\u0970\u09F2\u09F3\u09FA\u09FB\u09FD\u0A76\u0AF0\u0AF1\u0B70\u0BF3-\u0BFA\u0C77\u0C7F\u0C84\u0D4F\u0D79\u0DF4\u0E3F\u0E4F\u0E5A\u0E5B\u0F01-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F85\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FDA\u104A-\u104F\u109E\u109F\u10FB\u1360-\u1368\u1390-\u1399\u1400\u166D\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DB\u1800-\u180A\u1940\u1944\u1945\u19DE-\u19FF\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B4E\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2000-\u200A\u2010-\u2029\u202F-\u205F\u207A-\u207E\u208A-\u208E\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2429\u2440-\u244A\u249C-\u24E9\u2500-\u2775\u2794-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E5D\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u303F\u309B\u309C\u30A0\u30FB\u3190\u3191\u3196-\u319F\u31C0-\u31E5\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAA77-\uAA79\uAADE\uAADF\uAAF0\uAAF1\uAB5B\uAB6A\uAB6B\uABEB\uFB29\uFBB2-\uFBC2\uFD3E-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFEFF\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD00-\uDD02\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDC77\uDC78\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEC8\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDD6E\uDD8E\uDD8F\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9\uDFD4\uDFD5\uDFD7\uDFD8]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3F]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09\uDFE1]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFD5-\uDFF1\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3F\uDF44\uDF45]|\uD81B[\uDD6D-\uDD6F\uDE97-\uDE9A\uDFE2]|\uD82F[\uDC9C\uDC9F]|\uD833[\uDC00-\uDCEF\uDD00-\uDEB3\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE8B]|\uD838[\uDD4F\uDEFF]|\uD839\uDDFF|\uD83A[\uDD5E\uDD5F]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0-\uDCBB\uDCC0\uDCC1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFEF])/;
var _notPunctuationOrSpaceGfmStrongEm = /(?:(?:[\0-\x08\x0E-\x1F0-9A-Za-z\x7F-\x9F\xAA\xAD\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376-\u037D\u037F-\u0383\u0386\u0388-\u03F5\u03F7-\u0481\u0483-\u0559\u0560-\u0588\u058B\u058C\u0590-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7-\u05F2\u05F5-\u0605\u0610-\u061A\u061C\u0620-\u0669\u066E-\u06D3\u06D5-\u06DD\u06DF-\u06E8\u06EA-\u06FC\u06FF\u070E-\u07F5\u07FA-\u07FD\u0800-\u082F\u083F-\u085D\u085F-\u0887\u0889-\u0963\u0966-\u096F\u0971-\u09F1\u09F4-\u09F9\u09FC\u09FE-\u0A75\u0A77-\u0AEF\u0AF2-\u0B6F\u0B71-\u0BF2\u0BFB-\u0C76\u0C78-\u0C7E\u0C80-\u0C83\u0C85-\u0D4E\u0D50-\u0D78\u0D7A-\u0DF3\u0DF5-\u0E3E\u0E40-\u0E4E\u0E50-\u0E59\u0E5C-\u0F00\u0F18\u0F19\u0F20-\u0F33\u0F35\u0F37\u0F39\u0F3E-\u0F84\u0F86-\u0FBD\u0FC6\u0FCD\u0FDB-\u1049\u1050-\u109D\u10A0-\u10FA\u10FC-\u135F\u1369-\u138F\u139A-\u13FF\u1401-\u166C\u166F-\u167F\u1681-\u169A\u169D-\u16EA\u16EE-\u1734\u1737-\u17D3\u17D7\u17DC-\u17FF\u180B-\u193F\u1941-\u1943\u1946-\u19DD\u1A00-\u1A1D\u1A20-\u1A9F\u1AA7\u1AAE-\u1B4D\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BFB\u1C00-\u1C3A\u1C40-\u1C7D\u1C80-\u1CBF\u1CC8-\u1CD2\u1CD4-\u1FBC\u1FBE\u1FC2-\u1FCC\u1FD0-\u1FDC\u1FE0-\u1FEC\u1FF0-\u1FFC\u1FFF\u200B-\u200F\u202A-\u202E\u2060-\u2079\u207F-\u2089\u208F-\u209F\u20C1-\u20FF\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u218C-\u218F\u242A-\u243F\u244B-\u249B\u24EA-\u24FF\u2776-\u2793\u2B74\u2B75\u2B96\u2C00-\u2CE4\u2CEB-\u2CF8\u2CFD\u2D00-\u2D6F\u2D71-\u2DFF\u2E2F\u2E5E-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3040-\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u318F\u3192-\u3195\u31A0-\u31BF\u31E6-\u31EE\u31F0-\u31FF\u321F-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48F\uA4C7-\uA4FD\uA500-\uA60C\uA610-\uA672\uA674-\uA67D\uA67F-\uA6F1\uA6F8-\uA6FF\uA717-\uA71F\uA722-\uA788\uA78B-\uA827\uA82C-\uA835\uA83A-\uA873\uA878-\uA8CD\uA8D0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA95E\uA960-\uA9C0\uA9CE-\uA9DD\uA9E0-\uAA5B\uAA60-\uAA76\uAA7A-\uAADD\uAAE0-\uAAEF\uAAF2-\uAB5A\uAB5C-\uAB69\uAB6C-\uABEA\uABEC-\uD7FF\uE000-\uFB28\uFB2A-\uFBB1\uFBC3-\uFD3D\uFD50-\uFDCE\uFDD0-\uFDFB\uFE00-\uFE0F\uFE1A-\uFE2F\uFE53\uFE67\uFE6C-\uFEFE\uFF00\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF]|\uD800[\uDC00-\uDCFF\uDD03-\uDD36\uDD40-\uDD78\uDD8A\uDD8B\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFD-\uDF9E\uDFA0-\uDFCF\uDFD1-\uDFFF]|\uD801[\uDC00-\uDD6E\uDD70-\uDFFF]|\uD802[\uDC00-\uDC56\uDC58-\uDC76\uDC79-\uDD1E\uDD20-\uDD3E\uDD40-\uDE4F\uDE59-\uDE7E\uDE80-\uDEC7\uDEC9-\uDEEF\uDEF7-\uDF38\uDF40-\uDF98\uDF9D-\uDFFF]|\uD803[\uDC00-\uDD6D\uDD6F-\uDD8D\uDD90-\uDEAC\uDEAE-\uDF54\uDF5A-\uDF85\uDF8A-\uDFFF]|\uD804[\uDC00-\uDC46\uDC4E-\uDCBA\uDCBD\uDCC2-\uDD3F\uDD44-\uDD73\uDD76-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDDE0-\uDE37\uDE3E-\uDEA8\uDEAA-\uDFD3\uDFD6\uDFD9-\uDFFF]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5C\uDC5E-\uDCC5\uDCC7-\uDDC0\uDDD8-\uDE40\uDE44-\uDE5F\uDE6D-\uDEB8\uDEBA-\uDF3B\uDF40-\uDFFF]|\uD806[\uDC00-\uDC3A\uDC3C-\uDD43\uDD47-\uDDE1\uDDE3-\uDE3E\uDE47-\uDE99\uDE9D\uDEA3-\uDEFF\uDF0A-\uDFE0\uDFE2-\uDFFF]|\uD807[\uDC00-\uDC40\uDC46-\uDC6F\uDC72-\uDEF6\uDEF9-\uDF42\uDF50-\uDFD4\uDFF2-\uDFFE]|[\uD808\uD80A\uD80C-\uD819\uD81C-\uD82E\uD830-\uD832\uD837\uD83F-\uDBFF][\uDC00-\uDFFF]|\uD809[\uDC00-\uDC6F\uDC75-\uDFFF]|\uD80B[\uDC00-\uDFF0\uDFF3-\uDFFF]|\uD81A[\uDC00-\uDE6D\uDE70-\uDEF4\uDEF6-\uDF36\uDF40-\uDF43\uDF46-\uDFFF]|\uD81B[\uDC00-\uDD6C\uDD70-\uDE96\uDE9B-\uDFE1\uDFE3-\uDFFF]|\uD82F[\uDC00-\uDC9B\uDC9D\uDC9E\uDCA0-\uDFFF]|\uD833[\uDCF0-\uDCFF\uDEB4-\uDF4F\uDFC4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD65-\uDD69\uDD6D-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDDEB-\uDDFF\uDE42-\uDE44\uDE46-\uDEFF\uDF57-\uDFFF]|\uD835[\uDC00-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE8C-\uDFFF]|\uD838[\uDC00-\uDD4E\uDD50-\uDEFE\uDF00-\uDFFF]|\uD839[\uDC00-\uDDFE\uDE00-\uDFFF]|\uD83A[\uDC00-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDD2D\uDD2F-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDD0C\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDB\uDEED-\uDEEF\uDEFD-\uDEFF\uDF77-\uDF7A\uDFDA-\uDFDF\uDFEC-\uDFEF\uDFF1-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCBC-\uDCBF\uDCC2-\uDCFF\uDE54-\uDE5F\uDE6E\uDE6F\uDE7D-\uDE7F\uDE8A-\uDE8E\uDEC7-\uDECD\uDEDD\uDEDE\uDEEA-\uDEEF\uDEF9-\uDEFF\uDF93\uDFF0-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])|~)/;
var blockSkip = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g;
var emStrongLDelimCore = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/;
var emStrongLDelim = edit(emStrongLDelimCore, "u").replace(/punct/g, _punctuation).getRegex();
var emStrongLDelimGfm = edit(emStrongLDelimCore, "u").replace(/punct/g, _punctuationGfmStrongEm).getRegex();
var emStrongRDelimAstCore = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
var emStrongRDelimAst = edit(emStrongRDelimAstCore, "gu").replace(/notPunctSpace/g, _notPunctuationOrSpace).replace(/punctSpace/g, _punctuationOrSpace).replace(/punct/g, _punctuation).getRegex();
var emStrongRDelimAstGfm = edit(emStrongRDelimAstCore, "gu").replace(/notPunctSpace/g, _notPunctuationOrSpaceGfmStrongEm).replace(/punctSpace/g, _punctuationOrSpaceGfmStrongEm).replace(/punct/g, _punctuationGfmStrongEm).getRegex();
var emStrongRDelimUnd = edit("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, _notPunctuationOrSpace).replace(/punctSpace/g, _punctuationOrSpace).replace(/punct/g, _punctuation).getRegex();
var anyPunctuation = edit(/\\(punct)/, "gu").replace(/punct/g, _punctuation).getRegex();
var autolink = edit(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var _inlineComment = edit(_comment).replace("(?:-->|$)", "-->").getRegex();
var tag = edit("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", _inlineComment).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var _inlineLabel = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
var link = edit(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", _inlineLabel).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var reflink = edit(/^!?\[(label)\]\[(ref)\]/).replace("label", _inlineLabel).replace("ref", _blockLabel).getRegex();
var nolink = edit(/^!?\[(ref)\](?:\[\])?/).replace("ref", _blockLabel).getRegex();
var reflinkSearch = edit("reflink|nolink(?!\\()", "g").replace("reflink", reflink).replace("nolink", nolink).getRegex();
var inlineNormal = {
  _backpedal: noopTest,
  // only used for GFM url
  anyPunctuation: anyPunctuation,
  autolink: autolink,
  blockSkip: blockSkip,
  br: br,
  code: inlineCode,
  del: noopTest,
  emStrongLDelim: emStrongLDelim,
  emStrongRDelimAst: emStrongRDelimAst,
  emStrongRDelimUnd: emStrongRDelimUnd,
  escape: escape$1,
  link: link,
  nolink: nolink,
  punctuation: punctuation,
  reflink: reflink,
  reflinkSearch: reflinkSearch,
  tag: tag,
  text: inlineText,
  url: noopTest
};
var inlinePedantic = _objectSpread2(_objectSpread2({}, inlineNormal), {}, {
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", _inlineLabel).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", _inlineLabel).getRegex()
});
var inlineGfm = _objectSpread2(_objectSpread2({}, inlineNormal), {}, {
  emStrongRDelimAst: emStrongRDelimAstGfm,
  emStrongLDelim: emStrongLDelimGfm,
  url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});
var inlineBreaks = _objectSpread2(_objectSpread2({}, inlineGfm), {}, {
  br: edit(br).replace("{2,}", "*").getRegex(),
  text: edit(inlineGfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
});
var block = {
  normal: blockNormal,
  gfm: blockGfm,
  pedantic: blockPedantic
};
var inline = {
  normal: inlineNormal,
  gfm: inlineGfm,
  breaks: inlineBreaks,
  pedantic: inlinePedantic
};

// src/helpers.ts
var escapeReplacements$1 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var getEscapeReplacement$1 = function getEscapeReplacement(ch) {
  return escapeReplacements$1[ch];
};
function escape2(html2, encode) {
  if (encode) {
    if (other.escapeTest.test(html2)) {
      return html2.replace(other.escapeReplace, getEscapeReplacement$1);
    }
  } else {
    if (other.escapeTestNoEncode.test(html2)) {
      return html2.replace(other.escapeReplaceNoEncode, getEscapeReplacement$1);
    }
  }
  return html2;
}
function cleanUrl(href) {
  try {
    href = encodeURI(href).replace(other.percentDecode, "%");
  } catch (_unused) {
    return null;
  }
  return href;
}
function splitCells(tableRow, count) {
  var _cells$at;
  var row = tableRow.replace(other.findPipe, function (match, offset, str) {
      var escaped = false;
      var curr = offset;
      while (--curr >= 0 && str[curr] === "\\") escaped = !escaped;
      if (escaped) {
        return "|";
      } else {
        return " |";
      }
    }),
    cells = row.split(other.splitPipe);
  var i = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !((_cells$at = cells.at(-1)) !== null && _cells$at !== void 0 && _cells$at.trim())) {
    cells.pop();
  }
  if (count) {
    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count) cells.push("");
    }
  }
  for (; i < cells.length; i++) {
    cells[i] = cells[i].trim().replace(other.slashPipe, "|");
  }
  return cells;
}
function rtrim(str, c, invert) {
  var l = str.length;
  if (l === 0) {
    return "";
  }
  var suffLen = 0;
  while (suffLen < l) {
    var currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && true) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  var level = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "\\") {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  if (level > 0) {
    return -2;
  }
  return -1;
}

// src/Tokenizer.ts
function outputLink(cap, link2, raw, lexer2, rules) {
  var href = link2.href;
  var title = link2.title || null;
  var text = cap[1].replace(rules.other.outputLinkReplace, "$1");
  lexer2.state.inLink = true;
  var token = {
    type: cap[0].charAt(0) === "!" ? "image" : "link",
    raw: raw,
    href: href,
    title: title,
    text: text,
    tokens: lexer2.inlineTokens(text)
  };
  lexer2.state.inLink = false;
  return token;
}
function indentCodeCompensation(raw, text, rules) {
  var matchIndentToCode = raw.match(rules.other.indentCodeCompensation);
  if (matchIndentToCode === null) {
    return text;
  }
  var indentToCode = matchIndentToCode[1];
  return text.split("\n").map(function (node) {
    var matchIndentInNode = node.match(rules.other.beginningSpace);
    if (matchIndentInNode === null) {
      return node;
    }
    var _matchIndentInNode = _slicedToArray(matchIndentInNode, 1),
      indentInNode = _matchIndentInNode[0];
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join("\n");
}
var _Tokenizer = /*#__PURE__*/function () {
  // set by the lexer
  function _Tokenizer(options2) {
    _classCallCheck(this, _Tokenizer);
    _defineProperty(this, "options", void 0);
    _defineProperty(this, "rules", void 0);
    // set by the lexer
    _defineProperty(this, "lexer", void 0);
    this.options = options2 || _defaults;
  }
  return _createClass(_Tokenizer, [{
    key: "space",
    value: function space(src) {
      var cap = this.rules.block.newline.exec(src);
      if (cap && cap[0].length > 0) {
        return {
          type: "space",
          raw: cap[0]
        };
      }
    }
  }, {
    key: "code",
    value: function code(src) {
      var cap = this.rules.block.code.exec(src);
      if (cap) {
        var text = cap[0].replace(this.rules.other.codeRemoveIndent, "");
        return {
          type: "code",
          raw: cap[0],
          codeBlockStyle: "indented",
          text: !this.options.pedantic ? rtrim(text, "\n") : text
        };
      }
    }
  }, {
    key: "fences",
    value: function fences(src) {
      var cap = this.rules.block.fences.exec(src);
      if (cap) {
        var raw = cap[0];
        var text = indentCodeCompensation(raw, cap[3] || "", this.rules);
        return {
          type: "code",
          raw: raw,
          lang: cap[2] ? cap[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : cap[2],
          text: text
        };
      }
    }
  }, {
    key: "heading",
    value: function heading(src) {
      var cap = this.rules.block.heading.exec(src);
      if (cap) {
        var text = cap[2].trim();
        if (this.rules.other.endingHash.test(text)) {
          var trimmed = rtrim(text, "#");
          if (this.options.pedantic) {
            text = trimmed.trim();
          } else if (!trimmed || this.rules.other.endingSpaceChar.test(trimmed)) {
            text = trimmed.trim();
          }
        }
        return {
          type: "heading",
          raw: cap[0],
          depth: cap[1].length,
          text: text,
          tokens: this.lexer.inline(text)
        };
      }
    }
  }, {
    key: "hr",
    value: function hr(src) {
      var cap = this.rules.block.hr.exec(src);
      if (cap) {
        return {
          type: "hr",
          raw: rtrim(cap[0], "\n")
        };
      }
    }
  }, {
    key: "blockquote",
    value: function blockquote(src) {
      var cap = this.rules.block.blockquote.exec(src);
      if (cap) {
        var lines = rtrim(cap[0], "\n").split("\n");
        var raw = "";
        var text = "";
        var tokens = [];
        while (lines.length > 0) {
          var inBlockquote = false;
          var currentLines = [];
          var i = void 0;
          for (i = 0; i < lines.length; i++) {
            if (this.rules.other.blockquoteStart.test(lines[i])) {
              currentLines.push(lines[i]);
              inBlockquote = true;
            } else if (!inBlockquote) {
              currentLines.push(lines[i]);
            } else {
              break;
            }
          }
          lines = lines.slice(i);
          var currentRaw = currentLines.join("\n");
          var currentText = currentRaw.replace(this.rules.other.blockquoteSetextReplace, "\n    $1").replace(this.rules.other.blockquoteSetextReplace2, "");
          raw = raw ? "".concat(raw, "\n").concat(currentRaw) : currentRaw;
          text = text ? "".concat(text, "\n").concat(currentText) : currentText;
          var top = this.lexer.state.top;
          this.lexer.state.top = true;
          this.lexer.blockTokens(currentText, tokens, true);
          this.lexer.state.top = top;
          if (lines.length === 0) {
            break;
          }
          var lastToken = tokens.at(-1);
          if ((lastToken === null || lastToken === void 0 ? void 0 : lastToken.type) === "code") {
            break;
          } else if ((lastToken === null || lastToken === void 0 ? void 0 : lastToken.type) === "blockquote") {
            var oldToken = lastToken;
            var newText = oldToken.raw + "\n" + lines.join("\n");
            var newToken = this.blockquote(newText);
            tokens[tokens.length - 1] = newToken;
            raw = raw.substring(0, raw.length - oldToken.raw.length) + newToken.raw;
            text = text.substring(0, text.length - oldToken.text.length) + newToken.text;
            break;
          } else if ((lastToken === null || lastToken === void 0 ? void 0 : lastToken.type) === "list") {
            var _oldToken = lastToken;
            var _newText = _oldToken.raw + "\n" + lines.join("\n");
            var _newToken = this.list(_newText);
            tokens[tokens.length - 1] = _newToken;
            raw = raw.substring(0, raw.length - lastToken.raw.length) + _newToken.raw;
            text = text.substring(0, text.length - _oldToken.raw.length) + _newToken.raw;
            lines = _newText.substring(tokens.at(-1).raw.length).split("\n");
            continue;
          }
        }
        return {
          type: "blockquote",
          raw: raw,
          tokens: tokens,
          text: text
        };
      }
    }
  }, {
    key: "list",
    value: function list(src) {
      var _this = this;
      var cap = this.rules.block.list.exec(src);
      if (cap) {
        var bull = cap[1].trim();
        var isordered = bull.length > 1;
        var list2 = {
          type: "list",
          raw: "",
          ordered: isordered,
          start: isordered ? +bull.slice(0, -1) : "",
          loose: false,
          items: []
        };
        bull = isordered ? "\\d{1,9}\\".concat(bull.slice(-1)) : "\\".concat(bull);
        if (this.options.pedantic) {
          bull = isordered ? bull : "[*+-]";
        }
        var itemRegex = this.rules.other.listItemRegex(bull);
        var endsWithBlankLine = false;
        while (src) {
          var endEarly = false;
          var raw = "";
          var itemContents = "";
          if (!(cap = itemRegex.exec(src))) {
            break;
          }
          if (this.rules.block.hr.test(src)) {
            break;
          }
          raw = cap[0];
          src = src.substring(raw.length);
          var line = cap[2].split("\n", 1)[0].replace(this.rules.other.listReplaceTabs, function (t) {
            return " ".repeat(3 * t.length);
          });
          var nextLine = src.split("\n", 1)[0];
          var blankLine = !line.trim();
          var indent = 0;
          if (this.options.pedantic) {
            indent = 2;
            itemContents = line.trimStart();
          } else if (blankLine) {
            indent = cap[1].length + 1;
          } else {
            indent = cap[2].search(this.rules.other.nonSpaceChar);
            indent = indent > 4 ? 1 : indent;
            itemContents = line.slice(indent);
            indent += cap[1].length;
          }
          if (blankLine && this.rules.other.blankLine.test(nextLine)) {
            raw += nextLine + "\n";
            src = src.substring(nextLine.length + 1);
            endEarly = true;
          }
          if (!endEarly) {
            var nextBulletRegex = this.rules.other.nextBulletRegex(indent);
            var hrRegex = this.rules.other.hrRegex(indent);
            var fencesBeginRegex = this.rules.other.fencesBeginRegex(indent);
            var headingBeginRegex = this.rules.other.headingBeginRegex(indent);
            var htmlBeginRegex = this.rules.other.htmlBeginRegex(indent);
            while (src) {
              var rawLine = src.split("\n", 1)[0];
              var nextLineWithoutTabs = void 0;
              nextLine = rawLine;
              if (this.options.pedantic) {
                nextLine = nextLine.replace(this.rules.other.listReplaceNesting, "  ");
                nextLineWithoutTabs = nextLine;
              } else {
                nextLineWithoutTabs = nextLine.replace(this.rules.other.tabCharGlobal, "    ");
              }
              if (fencesBeginRegex.test(nextLine)) {
                break;
              }
              if (headingBeginRegex.test(nextLine)) {
                break;
              }
              if (htmlBeginRegex.test(nextLine)) {
                break;
              }
              if (nextBulletRegex.test(nextLine)) {
                break;
              }
              if (hrRegex.test(nextLine)) {
                break;
              }
              if (nextLineWithoutTabs.search(this.rules.other.nonSpaceChar) >= indent || !nextLine.trim()) {
                itemContents += "\n" + nextLineWithoutTabs.slice(indent);
              } else {
                if (blankLine) {
                  break;
                }
                if (line.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4) {
                  break;
                }
                if (fencesBeginRegex.test(line)) {
                  break;
                }
                if (headingBeginRegex.test(line)) {
                  break;
                }
                if (hrRegex.test(line)) {
                  break;
                }
                itemContents += "\n" + nextLine;
              }
              if (!blankLine && !nextLine.trim()) {
                blankLine = true;
              }
              raw += rawLine + "\n";
              src = src.substring(rawLine.length + 1);
              line = nextLineWithoutTabs.slice(indent);
            }
          }
          if (!list2.loose) {
            if (endsWithBlankLine) {
              list2.loose = true;
            } else if (this.rules.other.doubleBlankLine.test(raw)) {
              endsWithBlankLine = true;
            }
          }
          var istask = null;
          var ischecked = void 0;
          if (this.options.gfm) {
            istask = this.rules.other.listIsTask.exec(itemContents);
            if (istask) {
              ischecked = istask[0] !== "[ ] ";
              itemContents = itemContents.replace(this.rules.other.listReplaceTask, "");
            }
          }
          list2.items.push({
            type: "list_item",
            raw: raw,
            task: !!istask,
            checked: ischecked,
            loose: false,
            text: itemContents,
            tokens: []
          });
          list2.raw += raw;
        }
        var lastItem = list2.items.at(-1);
        if (lastItem) {
          lastItem.raw = lastItem.raw.trimEnd();
          lastItem.text = lastItem.text.trimEnd();
        } else {
          return;
        }
        list2.raw = list2.raw.trimEnd();
        for (var i = 0; i < list2.items.length; i++) {
          this.lexer.state.top = false;
          list2.items[i].tokens = this.lexer.blockTokens(list2.items[i].text, []);
          if (!list2.loose) {
            var spacers = list2.items[i].tokens.filter(function (t) {
              return t.type === "space";
            });
            var hasMultipleLineBreaks = spacers.length > 0 && spacers.some(function (t) {
              return _this.rules.other.anyLine.test(t.raw);
            });
            list2.loose = hasMultipleLineBreaks;
          }
        }
        if (list2.loose) {
          for (var _i = 0; _i < list2.items.length; _i++) {
            list2.items[_i].loose = true;
          }
        }
        return list2;
      }
    }
  }, {
    key: "html",
    value: function html(src) {
      var cap = this.rules.block.html.exec(src);
      if (cap) {
        var token = {
          type: "html",
          block: true,
          raw: cap[0],
          pre: cap[1] === "pre" || cap[1] === "script" || cap[1] === "style",
          text: cap[0]
        };
        return token;
      }
    }
  }, {
    key: "def",
    value: function def(src) {
      var cap = this.rules.block.def.exec(src);
      if (cap) {
        var tag2 = cap[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " ");
        var href = cap[2] ? cap[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "";
        var title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : cap[3];
        return {
          type: "def",
          tag: tag2,
          raw: cap[0],
          href: href,
          title: title
        };
      }
    }
  }, {
    key: "table",
    value: function table(src) {
      var _cap$,
        _this2 = this;
      var cap = this.rules.block.table.exec(src);
      if (!cap) {
        return;
      }
      if (!this.rules.other.tableDelimiter.test(cap[2])) {
        return;
      }
      var headers = splitCells(cap[1]);
      var aligns = cap[2].replace(this.rules.other.tableAlignChars, "").split("|");
      var rows = (_cap$ = cap[3]) !== null && _cap$ !== void 0 && _cap$.trim() ? cap[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [];
      var item = {
        type: "table",
        raw: cap[0],
        header: [],
        align: [],
        rows: []
      };
      if (headers.length !== aligns.length) {
        return;
      }
      var _iterator = _createForOfIteratorHelper(aligns),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var align = _step.value;
          if (this.rules.other.tableAlignRight.test(align)) {
            item.align.push("right");
          } else if (this.rules.other.tableAlignCenter.test(align)) {
            item.align.push("center");
          } else if (this.rules.other.tableAlignLeft.test(align)) {
            item.align.push("left");
          } else {
            item.align.push(null);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      for (var i = 0; i < headers.length; i++) {
        item.header.push({
          text: headers[i],
          tokens: this.lexer.inline(headers[i]),
          header: true,
          align: item.align[i]
        });
      }
      var _iterator2 = _createForOfIteratorHelper(rows),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var row = _step2.value;
          item.rows.push(splitCells(row, item.header.length).map(function (cell, i) {
            return {
              text: cell,
              tokens: _this2.lexer.inline(cell),
              header: false,
              align: item.align[i]
            };
          }));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return item;
    }
  }, {
    key: "lheading",
    value: function lheading(src) {
      var cap = this.rules.block.lheading.exec(src);
      if (cap) {
        return {
          type: "heading",
          raw: cap[0],
          depth: cap[2].charAt(0) === "=" ? 1 : 2,
          text: cap[1],
          tokens: this.lexer.inline(cap[1])
        };
      }
    }
  }, {
    key: "paragraph",
    value: function paragraph(src) {
      var cap = this.rules.block.paragraph.exec(src);
      if (cap) {
        var text = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
        return {
          type: "paragraph",
          raw: cap[0],
          text: text,
          tokens: this.lexer.inline(text)
        };
      }
    }
  }, {
    key: "text",
    value: function text(src) {
      var cap = this.rules.block.text.exec(src);
      if (cap) {
        return {
          type: "text",
          raw: cap[0],
          text: cap[0],
          tokens: this.lexer.inline(cap[0])
        };
      }
    }
  }, {
    key: "escape",
    value: function escape(src) {
      var cap = this.rules.inline.escape.exec(src);
      if (cap) {
        return {
          type: "escape",
          raw: cap[0],
          text: cap[1]
        };
      }
    }
  }, {
    key: "tag",
    value: function tag(src) {
      var cap = this.rules.inline.tag.exec(src);
      if (cap) {
        if (!this.lexer.state.inLink && this.rules.other.startATag.test(cap[0])) {
          this.lexer.state.inLink = true;
        } else if (this.lexer.state.inLink && this.rules.other.endATag.test(cap[0])) {
          this.lexer.state.inLink = false;
        }
        if (!this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(cap[0])) {
          this.lexer.state.inRawBlock = true;
        } else if (this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(cap[0])) {
          this.lexer.state.inRawBlock = false;
        }
        return {
          type: "html",
          raw: cap[0],
          inLink: this.lexer.state.inLink,
          inRawBlock: this.lexer.state.inRawBlock,
          block: false,
          text: cap[0]
        };
      }
    }
  }, {
    key: "link",
    value: function link(src) {
      var cap = this.rules.inline.link.exec(src);
      if (cap) {
        var trimmedUrl = cap[2].trim();
        if (!this.options.pedantic && this.rules.other.startAngleBracket.test(trimmedUrl)) {
          if (!this.rules.other.endAngleBracket.test(trimmedUrl)) {
            return;
          }
          var rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
          if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
            return;
          }
        } else {
          var lastParenIndex = findClosingBracket(cap[2], "()");
          if (lastParenIndex === -2) {
            return;
          }
          if (lastParenIndex > -1) {
            var start = cap[0].indexOf("!") === 0 ? 5 : 4;
            var linkLen = start + cap[1].length + lastParenIndex;
            cap[2] = cap[2].substring(0, lastParenIndex);
            cap[0] = cap[0].substring(0, linkLen).trim();
            cap[3] = "";
          }
        }
        var href = cap[2];
        var title = "";
        if (this.options.pedantic) {
          var link2 = this.rules.other.pedanticHrefTitle.exec(href);
          if (link2) {
            href = link2[1];
            title = link2[3];
          }
        } else {
          title = cap[3] ? cap[3].slice(1, -1) : "";
        }
        href = href.trim();
        if (this.rules.other.startAngleBracket.test(href)) {
          if (this.options.pedantic && !this.rules.other.endAngleBracket.test(trimmedUrl)) {
            href = href.slice(1);
          } else {
            href = href.slice(1, -1);
          }
        }
        return outputLink(cap, {
          href: href ? href.replace(this.rules.inline.anyPunctuation, "$1") : href,
          title: title ? title.replace(this.rules.inline.anyPunctuation, "$1") : title
        }, cap[0], this.lexer, this.rules);
      }
    }
  }, {
    key: "reflink",
    value: function reflink(src, links) {
      var cap;
      if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
        var linkString = (cap[2] || cap[1]).replace(this.rules.other.multipleSpaceGlobal, " ");
        var link2 = links[linkString.toLowerCase()];
        if (!link2) {
          var text = cap[0].charAt(0);
          return {
            type: "text",
            raw: text,
            text: text
          };
        }
        return outputLink(cap, link2, cap[0], this.lexer, this.rules);
      }
    }
  }, {
    key: "emStrong",
    value: function emStrong(src, maskedSrc) {
      var prevChar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var match = this.rules.inline.emStrongLDelim.exec(src);
      if (!match) return;
      if (match[3] && prevChar.match(this.rules.other.unicodeAlphaNumeric)) return;
      var nextChar = match[1] || match[2] || "";
      if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
        var lLength = _toConsumableArray(match[0]).length - 1;
        var rDelim,
          rLength,
          delimTotal = lLength,
          midDelimTotal = 0;
        var endReg = match[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
        endReg.lastIndex = 0;
        maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
        while ((match = endReg.exec(maskedSrc)) != null) {
          rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
          if (!rDelim) continue;
          rLength = _toConsumableArray(rDelim).length;
          if (match[3] || match[4]) {
            delimTotal += rLength;
            continue;
          } else if (match[5] || match[6]) {
            if (lLength % 3 && !((lLength + rLength) % 3)) {
              midDelimTotal += rLength;
              continue;
            }
          }
          delimTotal -= rLength;
          if (delimTotal > 0) continue;
          rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
          var lastCharLength = _toConsumableArray(match[0])[0].length;
          var raw = src.slice(0, lLength + match.index + lastCharLength + rLength);
          if (Math.min(lLength, rLength) % 2) {
            var text2 = raw.slice(1, -1);
            return {
              type: "em",
              raw: raw,
              text: text2,
              tokens: this.lexer.inlineTokens(text2)
            };
          }
          var text = raw.slice(2, -2);
          return {
            type: "strong",
            raw: raw,
            text: text,
            tokens: this.lexer.inlineTokens(text)
          };
        }
      }
    }
  }, {
    key: "codespan",
    value: function codespan(src) {
      var cap = this.rules.inline.code.exec(src);
      if (cap) {
        var text = cap[2].replace(this.rules.other.newLineCharGlobal, " ");
        var hasNonSpaceChars = this.rules.other.nonSpaceChar.test(text);
        var hasSpaceCharsOnBothEnds = this.rules.other.startingSpaceChar.test(text) && this.rules.other.endingSpaceChar.test(text);
        if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
          text = text.substring(1, text.length - 1);
        }
        return {
          type: "codespan",
          raw: cap[0],
          text: text
        };
      }
    }
  }, {
    key: "br",
    value: function br(src) {
      var cap = this.rules.inline.br.exec(src);
      if (cap) {
        return {
          type: "br",
          raw: cap[0]
        };
      }
    }
  }, {
    key: "del",
    value: function del(src) {
      var cap = this.rules.inline.del.exec(src);
      if (cap) {
        return {
          type: "del",
          raw: cap[0],
          text: cap[2],
          tokens: this.lexer.inlineTokens(cap[2])
        };
      }
    }
  }, {
    key: "autolink",
    value: function autolink(src) {
      var cap = this.rules.inline.autolink.exec(src);
      if (cap) {
        var text, href;
        if (cap[2] === "@") {
          text = cap[1];
          href = "mailto:" + text;
        } else {
          text = cap[1];
          href = text;
        }
        return {
          type: "link",
          raw: cap[0],
          text: text,
          href: href,
          tokens: [{
            type: "text",
            raw: text,
            text: text
          }]
        };
      }
    }
  }, {
    key: "url",
    value: function url(src) {
      var cap;
      if (cap = this.rules.inline.url.exec(src)) {
        var text, href;
        if (cap[2] === "@") {
          text = cap[0];
          href = "mailto:" + text;
        } else {
          var prevCapZero;
          do {
            var _this$rules$inline$_b, _this$rules$inline$_b2;
            prevCapZero = cap[0];
            cap[0] = (_this$rules$inline$_b = (_this$rules$inline$_b2 = this.rules.inline._backpedal.exec(cap[0])) === null || _this$rules$inline$_b2 === void 0 ? void 0 : _this$rules$inline$_b2[0]) !== null && _this$rules$inline$_b !== void 0 ? _this$rules$inline$_b : "";
          } while (prevCapZero !== cap[0]);
          text = cap[0];
          if (cap[1] === "www.") {
            href = "http://" + cap[0];
          } else {
            href = cap[0];
          }
        }
        return {
          type: "link",
          raw: cap[0],
          text: text,
          href: href,
          tokens: [{
            type: "text",
            raw: text,
            text: text
          }]
        };
      }
    }
  }, {
    key: "inlineText",
    value: function inlineText(src) {
      var cap = this.rules.inline.text.exec(src);
      if (cap) {
        var escaped = this.lexer.state.inRawBlock;
        return {
          type: "text",
          raw: cap[0],
          text: cap[0],
          escaped: escaped
        };
      }
    }
  }]);
}();

// src/Lexer.ts
var _Lexer = /*#__PURE__*/function () {
  function __Lexer(options2) {
    _classCallCheck(this, __Lexer);
    _defineProperty(this, "tokens", void 0);
    _defineProperty(this, "options", void 0);
    _defineProperty(this, "state", void 0);
    _defineProperty(this, "tokenizer", void 0);
    _defineProperty(this, "inlineQueue", void 0);
    this.tokens = [];
    this.tokens.links = /* @__PURE__ */Object.create(null);
    this.options = options2 || _defaults;
    this.options.tokenizer = this.options.tokenizer || new _Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    var rules = {
      other: other,
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }
  /**
   * Expose Rules
   */
  return _createClass(__Lexer, [{
    key: "lex",
    value:
    /**
     * Preprocessing
     */
    function lex(src) {
      src = src.replace(other.carriageReturn, "\n");
      this.blockTokens(src, this.tokens);
      for (var i = 0; i < this.inlineQueue.length; i++) {
        var next = this.inlineQueue[i];
        this.inlineTokens(next.src, next.tokens);
      }
      this.inlineQueue = [];
      return this.tokens;
    }
  }, {
    key: "blockTokens",
    value: function blockTokens(src) {
      var _this3 = this;
      var tokens = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var lastParagraphClipped = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (this.options.pedantic) {
        src = src.replace(other.tabCharGlobal, "    ").replace(other.spaceLine, "");
      }
      var _loop = function _loop() {
          var _this3$options$extens, _this3$options$extens2;
          var token;
          if ((_this3$options$extens = _this3.options.extensions) !== null && _this3$options$extens !== void 0 && (_this3$options$extens = _this3$options$extens.block) !== null && _this3$options$extens !== void 0 && _this3$options$extens.some(function (extTokenizer) {
            if (token = extTokenizer.call({
              lexer: _this3
            }, src, tokens)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              return true;
            }
            return false;
          })) {
            return 0; // continue
          }
          if (token = _this3.tokenizer.space(src)) {
            src = src.substring(token.raw.length);
            var lastToken = tokens.at(-1);
            if (token.raw.length === 1 && lastToken !== void 0) {
              lastToken.raw += "\n";
            } else {
              tokens.push(token);
            }
            return 0; // continue
          }
          if (token = _this3.tokenizer.code(src)) {
            src = src.substring(token.raw.length);
            var _lastToken = tokens.at(-1);
            if ((_lastToken === null || _lastToken === void 0 ? void 0 : _lastToken.type) === "paragraph" || (_lastToken === null || _lastToken === void 0 ? void 0 : _lastToken.type) === "text") {
              _lastToken.raw += "\n" + token.raw;
              _lastToken.text += "\n" + token.text;
              _this3.inlineQueue.at(-1).src = _lastToken.text;
            } else {
              tokens.push(token);
            }
            return 0; // continue
          }
          if (token = _this3.tokenizer.fences(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          if (token = _this3.tokenizer.heading(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          if (token = _this3.tokenizer.hr(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          if (token = _this3.tokenizer.blockquote(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          if (token = _this3.tokenizer.list(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          if (token = _this3.tokenizer.html(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          if (token = _this3.tokenizer.def(src)) {
            src = src.substring(token.raw.length);
            var _lastToken2 = tokens.at(-1);
            if ((_lastToken2 === null || _lastToken2 === void 0 ? void 0 : _lastToken2.type) === "paragraph" || (_lastToken2 === null || _lastToken2 === void 0 ? void 0 : _lastToken2.type) === "text") {
              _lastToken2.raw += "\n" + token.raw;
              _lastToken2.text += "\n" + token.raw;
              _this3.inlineQueue.at(-1).src = _lastToken2.text;
            } else if (!_this3.tokens.links[token.tag]) {
              _this3.tokens.links[token.tag] = {
                href: token.href,
                title: token.title
              };
            }
            return 0; // continue
          }
          if (token = _this3.tokenizer.table(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          if (token = _this3.tokenizer.lheading(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          var cutSrc = src;
          if ((_this3$options$extens2 = _this3.options.extensions) !== null && _this3$options$extens2 !== void 0 && _this3$options$extens2.startBlock) {
            var startIndex = Infinity;
            var tempSrc = src.slice(1);
            var tempStart;
            _this3.options.extensions.startBlock.forEach(function (getStartIndex) {
              tempStart = getStartIndex.call({
                lexer: _this3
              }, tempSrc);
              if (typeof tempStart === "number" && tempStart >= 0) {
                startIndex = Math.min(startIndex, tempStart);
              }
            });
            if (startIndex < Infinity && startIndex >= 0) {
              cutSrc = src.substring(0, startIndex + 1);
            }
          }
          if (_this3.state.top && (token = _this3.tokenizer.paragraph(cutSrc))) {
            var _lastToken3 = tokens.at(-1);
            if (lastParagraphClipped && (_lastToken3 === null || _lastToken3 === void 0 ? void 0 : _lastToken3.type) === "paragraph") {
              _lastToken3.raw += "\n" + token.raw;
              _lastToken3.text += "\n" + token.text;
              _this3.inlineQueue.pop();
              _this3.inlineQueue.at(-1).src = _lastToken3.text;
            } else {
              tokens.push(token);
            }
            lastParagraphClipped = cutSrc.length !== src.length;
            src = src.substring(token.raw.length);
            return 0; // continue
          }
          if (token = _this3.tokenizer.text(src)) {
            src = src.substring(token.raw.length);
            var _lastToken4 = tokens.at(-1);
            if ((_lastToken4 === null || _lastToken4 === void 0 ? void 0 : _lastToken4.type) === "text") {
              _lastToken4.raw += "\n" + token.raw;
              _lastToken4.text += "\n" + token.text;
              _this3.inlineQueue.pop();
              _this3.inlineQueue.at(-1).src = _lastToken4.text;
            } else {
              tokens.push(token);
            }
            return 0; // continue
          }
          if (src) {
            var errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
            if (_this3.options.silent) {
              console.error(errMsg);
              return 1; // break
            } else {
              throw new Error(errMsg);
            }
          }
        },
        _ret;
      while (src) {
        _ret = _loop();
        if (_ret === 0) continue;
        if (_ret === 1) break;
      }
      this.state.top = true;
      return tokens;
    }
  }, {
    key: "inline",
    value: function inline(src) {
      var tokens = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.inlineQueue.push({
        src: src,
        tokens: tokens
      });
      return tokens;
    }
    /**
     * Lexing/Compiling
     */
  }, {
    key: "inlineTokens",
    value: function inlineTokens(src) {
      var _this4 = this;
      var tokens = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var maskedSrc = src;
      var match = null;
      if (this.tokens.links) {
        var links = Object.keys(this.tokens.links);
        if (links.length > 0) {
          while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
            if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
              maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
            }
          }
        }
      }
      while ((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
      }
      while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      }
      var keepPrevChar = false;
      var prevChar = "";
      var _loop2 = function _loop2() {
          var _this4$options$extens, _this4$options$extens2;
          if (!keepPrevChar) {
            prevChar = "";
          }
          keepPrevChar = false;
          var token;
          if ((_this4$options$extens = _this4.options.extensions) !== null && _this4$options$extens !== void 0 && (_this4$options$extens = _this4$options$extens.inline) !== null && _this4$options$extens !== void 0 && _this4$options$extens.some(function (extTokenizer) {
            if (token = extTokenizer.call({
              lexer: _this4
            }, src, tokens)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              return true;
            }
            return false;
          })) {
            return 0; // continue
          }
          if (token = _this4.tokenizer.escape(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          if (token = _this4.tokenizer.tag(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          if (token = _this4.tokenizer.link(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          if (token = _this4.tokenizer.reflink(src, _this4.tokens.links)) {
            src = src.substring(token.raw.length);
            var lastToken = tokens.at(-1);
            if (token.type === "text" && (lastToken === null || lastToken === void 0 ? void 0 : lastToken.type) === "text") {
              lastToken.raw += token.raw;
              lastToken.text += token.text;
            } else {
              tokens.push(token);
            }
            return 0; // continue
          }
          if (token = _this4.tokenizer.emStrong(src, maskedSrc, prevChar)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          if (token = _this4.tokenizer.codespan(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          if (token = _this4.tokenizer.br(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          if (token = _this4.tokenizer.del(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          if (token = _this4.tokenizer.autolink(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          if (!_this4.state.inLink && (token = _this4.tokenizer.url(src))) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          var cutSrc = src;
          if ((_this4$options$extens2 = _this4.options.extensions) !== null && _this4$options$extens2 !== void 0 && _this4$options$extens2.startInline) {
            var startIndex = Infinity;
            var tempSrc = src.slice(1);
            var tempStart;
            _this4.options.extensions.startInline.forEach(function (getStartIndex) {
              tempStart = getStartIndex.call({
                lexer: _this4
              }, tempSrc);
              if (typeof tempStart === "number" && tempStart >= 0) {
                startIndex = Math.min(startIndex, tempStart);
              }
            });
            if (startIndex < Infinity && startIndex >= 0) {
              cutSrc = src.substring(0, startIndex + 1);
            }
          }
          if (token = _this4.tokenizer.inlineText(cutSrc)) {
            src = src.substring(token.raw.length);
            if (token.raw.slice(-1) !== "_") {
              prevChar = token.raw.slice(-1);
            }
            keepPrevChar = true;
            var _lastToken5 = tokens.at(-1);
            if ((_lastToken5 === null || _lastToken5 === void 0 ? void 0 : _lastToken5.type) === "text") {
              _lastToken5.raw += token.raw;
              _lastToken5.text += token.text;
            } else {
              tokens.push(token);
            }
            return 0; // continue
          }
          if (src) {
            var errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
            if (_this4.options.silent) {
              console.error(errMsg);
              return 1; // break
            } else {
              throw new Error(errMsg);
            }
          }
        },
        _ret2;
      while (src) {
        _ret2 = _loop2();
        if (_ret2 === 0) continue;
        if (_ret2 === 1) break;
      }
      return tokens;
    }
  }], [{
    key: "rules",
    get: function get() {
      return {
        block: block,
        inline: inline
      };
    }
    /**
     * Static Lex Method
     */
  }, {
    key: "lex",
    value: function lex(src, options2) {
      var lexer2 = new __Lexer(options2);
      return lexer2.lex(src);
    }
    /**
     * Static Lex Inline Method
     */
  }, {
    key: "lexInline",
    value: function lexInline(src, options2) {
      var lexer2 = new __Lexer(options2);
      return lexer2.inlineTokens(src);
    }
  }]);
}();

// src/Renderer.ts
var _Renderer = /*#__PURE__*/function () {
  // set by the parser
  function _Renderer(options2) {
    _classCallCheck(this, _Renderer);
    _defineProperty(this, "options", void 0);
    _defineProperty(this, "parser", void 0);
    this.options = options2 || _defaults;
  }
  return _createClass(_Renderer, [{
    key: "space",
    value: function space(token) {
      return "";
    }
  }, {
    key: "code",
    value: function code(_ref) {
      var _match;
      var text = _ref.text,
        lang = _ref.lang,
        escaped = _ref.escaped;
      var langString = (_match = (lang || "").match(other.notSpaceStart)) === null || _match === void 0 ? void 0 : _match[0];
      var code = text.replace(other.endingNewline, "") + "\n";
      if (!langString) {
        return "<pre><code>" + (escaped ? code : escape2(code, true)) + "</code></pre>\n";
      }
      return '<pre><code class="language-' + escape2(langString) + '">' + (escaped ? code : escape2(code, true)) + "</code></pre>\n";
    }
  }, {
    key: "blockquote",
    value: function blockquote(_ref2) {
      var tokens = _ref2.tokens;
      var body = this.parser.parse(tokens);
      return "<blockquote>\n".concat(body, "</blockquote>\n");
    }
  }, {
    key: "html",
    value: function html(_ref3) {
      var text = _ref3.text;
      return text;
    }
  }, {
    key: "heading",
    value: function heading(_ref4) {
      var tokens = _ref4.tokens,
        depth = _ref4.depth;
      return "<h".concat(depth, ">").concat(this.parser.parseInline(tokens), "</h").concat(depth, ">\n");
    }
  }, {
    key: "hr",
    value: function hr(token) {
      return "<hr>\n";
    }
  }, {
    key: "list",
    value: function list(token) {
      var ordered = token.ordered;
      var start = token.start;
      var body = "";
      for (var j = 0; j < token.items.length; j++) {
        var item = token.items[j];
        body += this.listitem(item);
      }
      var type = ordered ? "ol" : "ul";
      var startAttr = ordered && start !== 1 ? ' start="' + start + '"' : "";
      return "<" + type + startAttr + ">\n" + body + "</" + type + ">\n";
    }
  }, {
    key: "listitem",
    value: function listitem(item) {
      var itemBody = "";
      if (item.task) {
        var checkbox = this.checkbox({
          checked: !!item.checked
        });
        if (item.loose) {
          var _item$tokens$;
          if (((_item$tokens$ = item.tokens[0]) === null || _item$tokens$ === void 0 ? void 0 : _item$tokens$.type) === "paragraph") {
            item.tokens[0].text = checkbox + " " + item.tokens[0].text;
            if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
              item.tokens[0].tokens[0].text = checkbox + " " + escape2(item.tokens[0].tokens[0].text);
              item.tokens[0].tokens[0].escaped = true;
            }
          } else {
            item.tokens.unshift({
              type: "text",
              raw: checkbox + " ",
              text: checkbox + " ",
              escaped: true
            });
          }
        } else {
          itemBody += checkbox + " ";
        }
      }
      itemBody += this.parser.parse(item.tokens, !!item.loose);
      return "<li>".concat(itemBody, "</li>\n");
    }
  }, {
    key: "checkbox",
    value: function checkbox(_ref5) {
      var checked = _ref5.checked;
      return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
    }
  }, {
    key: "paragraph",
    value: function paragraph(_ref6) {
      var tokens = _ref6.tokens;
      return "<p>".concat(this.parser.parseInline(tokens), "</p>\n");
    }
  }, {
    key: "table",
    value: function table(token) {
      var header = "";
      var cell = "";
      for (var j = 0; j < token.header.length; j++) {
        cell += this.tablecell(token.header[j]);
      }
      header += this.tablerow({
        text: cell
      });
      var body = "";
      for (var _j = 0; _j < token.rows.length; _j++) {
        var row = token.rows[_j];
        cell = "";
        for (var k = 0; k < row.length; k++) {
          cell += this.tablecell(row[k]);
        }
        body += this.tablerow({
          text: cell
        });
      }
      if (body) body = "<tbody>".concat(body, "</tbody>");
      return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
    }
  }, {
    key: "tablerow",
    value: function tablerow(_ref7) {
      var text = _ref7.text;
      return "<tr>\n".concat(text, "</tr>\n");
    }
  }, {
    key: "tablecell",
    value: function tablecell(token) {
      var content = this.parser.parseInline(token.tokens);
      var type = token.header ? "th" : "td";
      var tag2 = token.align ? "<".concat(type, " align=\"").concat(token.align, "\">") : "<".concat(type, ">");
      return tag2 + content + "</".concat(type, ">\n");
    }
    /**
     * span level renderer
     */
  }, {
    key: "strong",
    value: function strong(_ref8) {
      var tokens = _ref8.tokens;
      return "<strong>".concat(this.parser.parseInline(tokens), "</strong>");
    }
  }, {
    key: "em",
    value: function em(_ref9) {
      var tokens = _ref9.tokens;
      return "<em>".concat(this.parser.parseInline(tokens), "</em>");
    }
  }, {
    key: "codespan",
    value: function codespan(_ref0) {
      var text = _ref0.text;
      return "<code>".concat(escape2(text, true), "</code>");
    }
  }, {
    key: "br",
    value: function br(token) {
      return "<br>";
    }
  }, {
    key: "del",
    value: function del(_ref1) {
      var tokens = _ref1.tokens;
      return "<del>".concat(this.parser.parseInline(tokens), "</del>");
    }
  }, {
    key: "link",
    value: function link(_ref10) {
      var href = _ref10.href,
        title = _ref10.title,
        tokens = _ref10.tokens;
      var text = this.parser.parseInline(tokens);
      var cleanHref = cleanUrl(href);
      if (cleanHref === null) {
        return text;
      }
      href = cleanHref;
      var out = '<a href="' + href + '"';
      if (title) {
        out += ' title="' + escape2(title) + '"';
      }
      out += ">" + text + "</a>";
      return out;
    }
  }, {
    key: "image",
    value: function image(_ref11) {
      var href = _ref11.href,
        title = _ref11.title,
        text = _ref11.text,
        tokens = _ref11.tokens;
      if (tokens) {
        text = this.parser.parseInline(tokens, this.parser.textRenderer);
      }
      var cleanHref = cleanUrl(href);
      if (cleanHref === null) {
        return escape2(text);
      }
      href = cleanHref;
      var out = "<img src=\"".concat(href, "\" alt=\"").concat(text, "\"");
      if (title) {
        out += " title=\"".concat(escape2(title), "\"");
      }
      out += ">";
      return out;
    }
  }, {
    key: "text",
    value: function text(token) {
      return "tokens" in token && token.tokens ? this.parser.parseInline(token.tokens) : "escaped" in token && token.escaped ? token.text : escape2(token.text);
    }
  }]);
}();

// src/TextRenderer.ts
var _TextRenderer = /*#__PURE__*/function () {
  function _TextRenderer() {
    _classCallCheck(this, _TextRenderer);
  }
  return _createClass(_TextRenderer, [{
    key: "strong",
    value:
    // no need for block level renderers
    function strong(_ref12) {
      var text = _ref12.text;
      return text;
    }
  }, {
    key: "em",
    value: function em(_ref13) {
      var text = _ref13.text;
      return text;
    }
  }, {
    key: "codespan",
    value: function codespan(_ref14) {
      var text = _ref14.text;
      return text;
    }
  }, {
    key: "del",
    value: function del(_ref15) {
      var text = _ref15.text;
      return text;
    }
  }, {
    key: "html",
    value: function html(_ref16) {
      var text = _ref16.text;
      return text;
    }
  }, {
    key: "text",
    value: function text(_ref17) {
      var _text = _ref17.text;
      return _text;
    }
  }, {
    key: "link",
    value: function link(_ref18) {
      var text = _ref18.text;
      return "" + text;
    }
  }, {
    key: "image",
    value: function image(_ref19) {
      var text = _ref19.text;
      return "" + text;
    }
  }, {
    key: "br",
    value: function br() {
      return "";
    }
  }]);
}();

// src/Parser.ts
var _Parser = /*#__PURE__*/function () {
  function __Parser(options2) {
    _classCallCheck(this, __Parser);
    _defineProperty(this, "options", void 0);
    _defineProperty(this, "renderer", void 0);
    _defineProperty(this, "textRenderer", void 0);
    this.options = options2 || _defaults;
    this.options.renderer = this.options.renderer || new _Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.renderer.parser = this;
    this.textRenderer = new _TextRenderer();
  }
  /**
   * Static Parse Method
   */
  return _createClass(__Parser, [{
    key: "parse",
    value:
    /**
     * Parse Loop
     */
    function parse(tokens) {
      var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var out = "";
      for (var i = 0; i < tokens.length; i++) {
        var _this$options$extensi;
        var anyToken = tokens[i];
        if ((_this$options$extensi = this.options.extensions) !== null && _this$options$extensi !== void 0 && (_this$options$extensi = _this$options$extensi.renderers) !== null && _this$options$extensi !== void 0 && _this$options$extensi[anyToken.type]) {
          var genericToken = anyToken;
          var ret = this.options.extensions.renderers[genericToken.type].call({
            parser: this
          }, genericToken);
          if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(genericToken.type)) {
            out += ret || "";
            continue;
          }
        }
        var token = anyToken;
        switch (token.type) {
          case "space":
            {
              out += this.renderer.space(token);
              continue;
            }
          case "hr":
            {
              out += this.renderer.hr(token);
              continue;
            }
          case "heading":
            {
              out += this.renderer.heading(token);
              continue;
            }
          case "code":
            {
              out += this.renderer.code(token);
              continue;
            }
          case "table":
            {
              out += this.renderer.table(token);
              continue;
            }
          case "blockquote":
            {
              out += this.renderer.blockquote(token);
              continue;
            }
          case "list":
            {
              out += this.renderer.list(token);
              continue;
            }
          case "html":
            {
              out += this.renderer.html(token);
              continue;
            }
          case "paragraph":
            {
              out += this.renderer.paragraph(token);
              continue;
            }
          case "text":
            {
              var textToken = token;
              var body = this.renderer.text(textToken);
              while (i + 1 < tokens.length && tokens[i + 1].type === "text") {
                textToken = tokens[++i];
                body += "\n" + this.renderer.text(textToken);
              }
              if (top) {
                out += this.renderer.paragraph({
                  type: "paragraph",
                  raw: body,
                  text: body,
                  tokens: [{
                    type: "text",
                    raw: body,
                    text: body,
                    escaped: true
                  }]
                });
              } else {
                out += body;
              }
              continue;
            }
          default:
            {
              var errMsg = 'Token with "' + token.type + '" type was not found.';
              if (this.options.silent) {
                console.error(errMsg);
                return "";
              } else {
                throw new Error(errMsg);
              }
            }
        }
      }
      return out;
    }
    /**
     * Parse Inline Tokens
     */
  }, {
    key: "parseInline",
    value: function parseInline(tokens) {
      var renderer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.renderer;
      var out = "";
      for (var i = 0; i < tokens.length; i++) {
        var _this$options$extensi2;
        var anyToken = tokens[i];
        if ((_this$options$extensi2 = this.options.extensions) !== null && _this$options$extensi2 !== void 0 && (_this$options$extensi2 = _this$options$extensi2.renderers) !== null && _this$options$extensi2 !== void 0 && _this$options$extensi2[anyToken.type]) {
          var ret = this.options.extensions.renderers[anyToken.type].call({
            parser: this
          }, anyToken);
          if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(anyToken.type)) {
            out += ret || "";
            continue;
          }
        }
        var token = anyToken;
        switch (token.type) {
          case "escape":
            {
              out += renderer.text(token);
              break;
            }
          case "html":
            {
              out += renderer.html(token);
              break;
            }
          case "link":
            {
              out += renderer.link(token);
              break;
            }
          case "image":
            {
              out += renderer.image(token);
              break;
            }
          case "strong":
            {
              out += renderer.strong(token);
              break;
            }
          case "em":
            {
              out += renderer.em(token);
              break;
            }
          case "codespan":
            {
              out += renderer.codespan(token);
              break;
            }
          case "br":
            {
              out += renderer.br(token);
              break;
            }
          case "del":
            {
              out += renderer.del(token);
              break;
            }
          case "text":
            {
              out += renderer.text(token);
              break;
            }
          default:
            {
              var errMsg = 'Token with "' + token.type + '" type was not found.';
              if (this.options.silent) {
                console.error(errMsg);
                return "";
              } else {
                throw new Error(errMsg);
              }
            }
        }
      }
      return out;
    }
  }], [{
    key: "parse",
    value: function parse(tokens, options2) {
      var parser2 = new __Parser(options2);
      return parser2.parse(tokens);
    }
    /**
     * Static Parse Inline Method
     */
  }, {
    key: "parseInline",
    value: function parseInline(tokens, options2) {
      var parser2 = new __Parser(options2);
      return parser2.parseInline(tokens);
    }
  }]);
}();

// src/Hooks.ts
var _Hooks = (_Class3 = /*#__PURE__*/function () {
  function _Hooks(options2) {
    _classCallCheck(this, _Hooks);
    _defineProperty(this, "options", void 0);
    _defineProperty(this, "block", void 0);
    this.options = options2 || _defaults;
  }
  return _createClass(_Hooks, [{
    key: "preprocess",
    value:
    /**
     * Process markdown before marked
     */
    function preprocess(markdown) {
      return markdown;
    }
    /**
     * Process HTML after marked is finished
     */
  }, {
    key: "postprocess",
    value: function postprocess(html2) {
      return html2;
    }
    /**
     * Process all tokens before walk tokens
     */
  }, {
    key: "processAllTokens",
    value: function processAllTokens(tokens) {
      return tokens;
    }
    /**
     * Provide function to tokenize markdown
     */
  }, {
    key: "provideLexer",
    value: function provideLexer() {
      return this.block ? _Lexer.lex : _Lexer.lexInline;
    }
    /**
     * Provide function to parse tokens
     */
  }, {
    key: "provideParser",
    value: function provideParser() {
      return this.block ? _Parser.parse : _Parser.parseInline;
    }
  }]);
}(), _defineProperty(_Class3, "passThroughHooks", /* @__PURE__ */new Set(["preprocess", "postprocess", "processAllTokens"])), _Class3);

// src/Instance.ts
var Marked = /*#__PURE__*/function () {
  function Marked() {
    _classCallCheck(this, Marked);
    _defineProperty(this, "defaults", _getDefaults());
    _defineProperty(this, "options", this.setOptions);
    _defineProperty(this, "parse", this.parseMarkdown(true));
    _defineProperty(this, "parseInline", this.parseMarkdown(false));
    _defineProperty(this, "Parser", _Parser);
    _defineProperty(this, "Renderer", _Renderer);
    _defineProperty(this, "TextRenderer", _TextRenderer);
    _defineProperty(this, "Lexer", _Lexer);
    _defineProperty(this, "Tokenizer", _Tokenizer);
    _defineProperty(this, "Hooks", _Hooks);
    this.use.apply(this, arguments);
  }
  /**
   * Run callback for every token
   */
  return _createClass(Marked, [{
    key: "walkTokens",
    value: function walkTokens(tokens, callback) {
      var _this5 = this;
      var values = [];
      var _iterator3 = _createForOfIteratorHelper(tokens),
        _step3;
      try {
        var _loop3 = function _loop3() {
          var token = _step3.value;
          values = values.concat(callback.call(_this5, token));
          switch (token.type) {
            case "table":
              {
                var tableToken = token;
                var _iterator4 = _createForOfIteratorHelper(tableToken.header),
                  _step4;
                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var cell = _step4.value;
                    values = values.concat(_this5.walkTokens(cell.tokens, callback));
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
                var _iterator5 = _createForOfIteratorHelper(tableToken.rows),
                  _step5;
                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var row = _step5.value;
                    var _iterator6 = _createForOfIteratorHelper(row),
                      _step6;
                    try {
                      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                        var _cell = _step6.value;
                        values = values.concat(_this5.walkTokens(_cell.tokens, callback));
                      }
                    } catch (err) {
                      _iterator6.e(err);
                    } finally {
                      _iterator6.f();
                    }
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }
                break;
              }
            case "list":
              {
                var listToken = token;
                values = values.concat(_this5.walkTokens(listToken.items, callback));
                break;
              }
            default:
              {
                var _this5$defaults$exten;
                var genericToken = token;
                if ((_this5$defaults$exten = _this5.defaults.extensions) !== null && _this5$defaults$exten !== void 0 && (_this5$defaults$exten = _this5$defaults$exten.childTokens) !== null && _this5$defaults$exten !== void 0 && _this5$defaults$exten[genericToken.type]) {
                  _this5.defaults.extensions.childTokens[genericToken.type].forEach(function (childTokens) {
                    var tokens2 = genericToken[childTokens].flat(Infinity);
                    values = values.concat(_this5.walkTokens(tokens2, callback));
                  });
                } else if (genericToken.tokens) {
                  values = values.concat(_this5.walkTokens(genericToken.tokens, callback));
                }
              }
          }
        };
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          _loop3();
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return values;
    }
  }, {
    key: "use",
    value: function use() {
      var _this6 = this;
      var extensions = this.defaults.extensions || {
        renderers: {},
        childTokens: {}
      };
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      args.forEach(function (pack) {
        var opts = _objectSpread2({}, pack);
        opts.async = _this6.defaults.async || opts.async || false;
        if (pack.extensions) {
          pack.extensions.forEach(function (ext) {
            if (!ext.name) {
              throw new Error("extension name required");
            }
            if ("renderer" in ext) {
              var prevRenderer = extensions.renderers[ext.name];
              if (prevRenderer) {
                extensions.renderers[ext.name] = function () {
                  for (var _len2 = arguments.length, args2 = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args2[_key2] = arguments[_key2];
                  }
                  var ret = ext.renderer.apply(this, args2);
                  if (ret === false) {
                    ret = prevRenderer.apply(this, args2);
                  }
                  return ret;
                };
              } else {
                extensions.renderers[ext.name] = ext.renderer;
              }
            }
            if ("tokenizer" in ext) {
              if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
                throw new Error("extension level must be 'block' or 'inline'");
              }
              var extLevel = extensions[ext.level];
              if (extLevel) {
                extLevel.unshift(ext.tokenizer);
              } else {
                extensions[ext.level] = [ext.tokenizer];
              }
              if (ext.start) {
                if (ext.level === "block") {
                  if (extensions.startBlock) {
                    extensions.startBlock.push(ext.start);
                  } else {
                    extensions.startBlock = [ext.start];
                  }
                } else if (ext.level === "inline") {
                  if (extensions.startInline) {
                    extensions.startInline.push(ext.start);
                  } else {
                    extensions.startInline = [ext.start];
                  }
                }
              }
            }
            if ("childTokens" in ext && ext.childTokens) {
              extensions.childTokens[ext.name] = ext.childTokens;
            }
          });
          opts.extensions = extensions;
        }
        if (pack.renderer) {
          var renderer = _this6.defaults.renderer || new _Renderer(_this6.defaults);
          var _loop4 = function _loop4() {
            if (!(prop in renderer)) {
              throw new Error("renderer '".concat(prop, "' does not exist"));
            }
            if (["options", "parser"].includes(prop)) {
              return 1; // continue
            }
            var rendererProp = prop;
            var rendererFunc = pack.renderer[rendererProp];
            var prevRenderer = renderer[rendererProp];
            renderer[rendererProp] = function () {
              for (var _len3 = arguments.length, args2 = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args2[_key3] = arguments[_key3];
              }
              var ret = rendererFunc.apply(renderer, args2);
              if (ret === false) {
                ret = prevRenderer.apply(renderer, args2);
              }
              return ret || "";
            };
          };
          for (var prop in pack.renderer) {
            if (_loop4()) continue;
          }
          opts.renderer = renderer;
        }
        if (pack.tokenizer) {
          var tokenizer = _this6.defaults.tokenizer || new _Tokenizer(_this6.defaults);
          var _loop5 = function _loop5() {
            if (!(_prop in tokenizer)) {
              throw new Error("tokenizer '".concat(_prop, "' does not exist"));
            }
            if (["options", "rules", "lexer"].includes(_prop)) {
              return 1; // continue
            }
            var tokenizerProp = _prop;
            var tokenizerFunc = pack.tokenizer[tokenizerProp];
            var prevTokenizer = tokenizer[tokenizerProp];
            tokenizer[tokenizerProp] = function () {
              for (var _len4 = arguments.length, args2 = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                args2[_key4] = arguments[_key4];
              }
              var ret = tokenizerFunc.apply(tokenizer, args2);
              if (ret === false) {
                ret = prevTokenizer.apply(tokenizer, args2);
              }
              return ret;
            };
          };
          for (var _prop in pack.tokenizer) {
            if (_loop5()) continue;
          }
          opts.tokenizer = tokenizer;
        }
        if (pack.hooks) {
          var hooks = _this6.defaults.hooks || new _Hooks();
          var _loop6 = function _loop6() {
            if (!(_prop2 in hooks)) {
              throw new Error("hook '".concat(_prop2, "' does not exist"));
            }
            if (["options", "block"].includes(_prop2)) {
              return 1; // continue
            }
            var hooksProp = _prop2;
            var hooksFunc = pack.hooks[hooksProp];
            var prevHook = hooks[hooksProp];
            if (_Hooks.passThroughHooks.has(_prop2)) {
              hooks[hooksProp] = function (arg) {
                if (_this6.defaults.async) {
                  return Promise.resolve(hooksFunc.call(hooks, arg)).then(function (ret2) {
                    return prevHook.call(hooks, ret2);
                  });
                }
                var ret = hooksFunc.call(hooks, arg);
                return prevHook.call(hooks, ret);
              };
            } else {
              hooks[hooksProp] = function () {
                for (var _len5 = arguments.length, args2 = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                  args2[_key5] = arguments[_key5];
                }
                var ret = hooksFunc.apply(hooks, args2);
                if (ret === false) {
                  ret = prevHook.apply(hooks, args2);
                }
                return ret;
              };
            }
          };
          for (var _prop2 in pack.hooks) {
            if (_loop6()) continue;
          }
          opts.hooks = hooks;
        }
        if (pack.walkTokens) {
          var walkTokens2 = _this6.defaults.walkTokens;
          var packWalktokens = pack.walkTokens;
          opts.walkTokens = function (token) {
            var values = [];
            values.push(packWalktokens.call(this, token));
            if (walkTokens2) {
              values = values.concat(walkTokens2.call(this, token));
            }
            return values;
          };
        }
        _this6.defaults = _objectSpread2(_objectSpread2({}, _this6.defaults), opts);
      });
      return this;
    }
  }, {
    key: "setOptions",
    value: function setOptions(opt) {
      this.defaults = _objectSpread2(_objectSpread2({}, this.defaults), opt);
      return this;
    }
  }, {
    key: "lexer",
    value: function lexer(src, options2) {
      return _Lexer.lex(src, options2 !== null && options2 !== void 0 ? options2 : this.defaults);
    }
  }, {
    key: "parser",
    value: function parser(tokens, options2) {
      return _Parser.parse(tokens, options2 !== null && options2 !== void 0 ? options2 : this.defaults);
    }
  }, {
    key: "parseMarkdown",
    value: function parseMarkdown(blockType) {
      var _this7 = this;
      var parse2 = function parse2(src, options2) {
        var origOpt = _objectSpread2({}, options2);
        var opt = _objectSpread2(_objectSpread2({}, _this7.defaults), origOpt);
        var throwError = _this7.onError(!!opt.silent, !!opt.async);
        if (_this7.defaults.async === true && origOpt.async === false) {
          return throwError(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
        }
        if (typeof src === "undefined" || src === null) {
          return throwError(new Error("marked(): input parameter is undefined or null"));
        }
        if (typeof src !== "string") {
          return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected"));
        }
        if (opt.hooks) {
          opt.hooks.options = opt;
          opt.hooks.block = blockType;
        }
        var lexer2 = opt.hooks ? opt.hooks.provideLexer() : blockType ? _Lexer.lex : _Lexer.lexInline;
        var parser2 = opt.hooks ? opt.hooks.provideParser() : blockType ? _Parser.parse : _Parser.parseInline;
        if (opt.async) {
          return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then(function (src2) {
            return lexer2(src2, opt);
          }).then(function (tokens) {
            return opt.hooks ? opt.hooks.processAllTokens(tokens) : tokens;
          }).then(function (tokens) {
            return opt.walkTokens ? Promise.all(_this7.walkTokens(tokens, opt.walkTokens)).then(function () {
              return tokens;
            }) : tokens;
          }).then(function (tokens) {
            return parser2(tokens, opt);
          }).then(function (html2) {
            return opt.hooks ? opt.hooks.postprocess(html2) : html2;
          }).catch(throwError);
        }
        try {
          if (opt.hooks) {
            src = opt.hooks.preprocess(src);
          }
          var tokens = lexer2(src, opt);
          if (opt.hooks) {
            tokens = opt.hooks.processAllTokens(tokens);
          }
          if (opt.walkTokens) {
            _this7.walkTokens(tokens, opt.walkTokens);
          }
          var html2 = parser2(tokens, opt);
          if (opt.hooks) {
            html2 = opt.hooks.postprocess(html2);
          }
          return html2;
        } catch (e) {
          return throwError(e);
        }
      };
      return parse2;
    }
  }, {
    key: "onError",
    value: function onError(silent, async) {
      return function (e) {
        e.message += "\nPlease report this to https://github.com/markedjs/marked.";
        if (silent) {
          var msg = "<p>An error occurred:</p><pre>" + escape2(e.message + "", true) + "</pre>";
          if (async) {
            return Promise.resolve(msg);
          }
          return msg;
        }
        if (async) {
          return Promise.reject(e);
        }
        throw e;
      };
    }
  }]);
}();

// src/marked.ts
var markedInstance = new Marked();
function marked(src, opt) {
  return markedInstance.parse(src, opt);
}
marked.options = marked.setOptions = function (options2) {
  markedInstance.setOptions(options2);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.getDefaults = _getDefaults;
marked.defaults = _defaults;
marked.use = function () {
  markedInstance.use.apply(markedInstance, arguments);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.walkTokens = function (tokens, callback) {
  return markedInstance.walkTokens(tokens, callback);
};
marked.parseInline = markedInstance.parseInline;
marked.Parser = _Parser;
marked.parser = _Parser.parse;
marked.Renderer = _Renderer;
marked.TextRenderer = _TextRenderer;
marked.Lexer = _Lexer;
marked.lexer = _Lexer.lex;
marked.Tokenizer = _Tokenizer;
marked.Hooks = _Hooks;
marked.parse = marked;
marked.options;
marked.setOptions;
marked.use;
marked.walkTokens;
marked.parseInline;
_Parser.parse;
_Lexer.lex;

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var purify$1 = {exports: {}};

/*! @license DOMPurify 2.5.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.6/LICENSE */
var purify = purify$1.exports;

var hasRequiredPurify;

function requirePurify () {
	if (hasRequiredPurify) return purify$1.exports;
	hasRequiredPurify = 1;
	(function (module, exports) {
		(function (global, factory) {
		  module.exports = factory() ;
		})(purify, (function () {
		  function _typeof(obj) {
		    "@babel/helpers - typeof";

		    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
		      return typeof obj;
		    } : function (obj) {
		      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
		    }, _typeof(obj);
		  }
		  function _setPrototypeOf(o, p) {
		    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
		      o.__proto__ = p;
		      return o;
		    };
		    return _setPrototypeOf(o, p);
		  }
		  function _isNativeReflectConstruct() {
		    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
		    if (Reflect.construct.sham) return false;
		    if (typeof Proxy === "function") return true;
		    try {
		      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
		      return true;
		    } catch (e) {
		      return false;
		    }
		  }
		  function _construct(Parent, args, Class) {
		    if (_isNativeReflectConstruct()) {
		      _construct = Reflect.construct;
		    } else {
		      _construct = function _construct(Parent, args, Class) {
		        var a = [null];
		        a.push.apply(a, args);
		        var Constructor = Function.bind.apply(Parent, a);
		        var instance = new Constructor();
		        if (Class) _setPrototypeOf(instance, Class.prototype);
		        return instance;
		      };
		    }
		    return _construct.apply(null, arguments);
		  }
		  function _toConsumableArray(arr) {
		    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
		  }
		  function _arrayWithoutHoles(arr) {
		    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
		  }
		  function _iterableToArray(iter) {
		    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
		  }
		  function _unsupportedIterableToArray(o, minLen) {
		    if (!o) return;
		    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
		    var n = Object.prototype.toString.call(o).slice(8, -1);
		    if (n === "Object" && o.constructor) n = o.constructor.name;
		    if (n === "Map" || n === "Set") return Array.from(o);
		    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
		  }
		  function _arrayLikeToArray(arr, len) {
		    if (len == null || len > arr.length) len = arr.length;
		    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
		    return arr2;
		  }
		  function _nonIterableSpread() {
		    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
		  }

		  var hasOwnProperty = Object.hasOwnProperty,
		    setPrototypeOf = Object.setPrototypeOf,
		    isFrozen = Object.isFrozen,
		    getPrototypeOf = Object.getPrototypeOf,
		    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
		  var freeze = Object.freeze,
		    seal = Object.seal,
		    create = Object.create; // eslint-disable-line import/no-mutable-exports
		  var _ref = typeof Reflect !== 'undefined' && Reflect,
		    apply = _ref.apply,
		    construct = _ref.construct;
		  if (!apply) {
		    apply = function apply(fun, thisValue, args) {
		      return fun.apply(thisValue, args);
		    };
		  }
		  if (!freeze) {
		    freeze = function freeze(x) {
		      return x;
		    };
		  }
		  if (!seal) {
		    seal = function seal(x) {
		      return x;
		    };
		  }
		  if (!construct) {
		    construct = function construct(Func, args) {
		      return _construct(Func, _toConsumableArray(args));
		    };
		  }
		  var arrayForEach = unapply(Array.prototype.forEach);
		  var arrayPop = unapply(Array.prototype.pop);
		  var arrayPush = unapply(Array.prototype.push);
		  var stringToLowerCase = unapply(String.prototype.toLowerCase);
		  var stringToString = unapply(String.prototype.toString);
		  var stringMatch = unapply(String.prototype.match);
		  var stringReplace = unapply(String.prototype.replace);
		  var stringIndexOf = unapply(String.prototype.indexOf);
		  var stringTrim = unapply(String.prototype.trim);
		  var regExpTest = unapply(RegExp.prototype.test);
		  var typeErrorCreate = unconstruct(TypeError);
		  function unapply(func) {
		    return function (thisArg) {
		      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		        args[_key - 1] = arguments[_key];
		      }
		      return apply(func, thisArg, args);
		    };
		  }
		  function unconstruct(func) {
		    return function () {
		      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		        args[_key2] = arguments[_key2];
		      }
		      return construct(func, args);
		    };
		  }

		  /* Add properties to a lookup table */
		  function addToSet(set, array, transformCaseFunc) {
		    var _transformCaseFunc;
		    transformCaseFunc = (_transformCaseFunc = transformCaseFunc) !== null && _transformCaseFunc !== void 0 ? _transformCaseFunc : stringToLowerCase;
		    if (setPrototypeOf) {
		      // Make 'in' and truthy checks like Boolean(set.constructor)
		      // independent of any properties defined on Object.prototype.
		      // Prevent prototype setters from intercepting set as a this value.
		      setPrototypeOf(set, null);
		    }
		    var l = array.length;
		    while (l--) {
		      var element = array[l];
		      if (typeof element === 'string') {
		        var lcElement = transformCaseFunc(element);
		        if (lcElement !== element) {
		          // Config presets (e.g. tags.js, attrs.js) are immutable.
		          if (!isFrozen(array)) {
		            array[l] = lcElement;
		          }
		          element = lcElement;
		        }
		      }
		      set[element] = true;
		    }
		    return set;
		  }

		  /* Shallow clone an object */
		  function clone(object) {
		    var newObject = create(null);
		    var property;
		    for (property in object) {
		      if (apply(hasOwnProperty, object, [property]) === true) {
		        newObject[property] = object[property];
		      }
		    }
		    return newObject;
		  }

		  /* IE10 doesn't support __lookupGetter__ so lets'
		   * simulate it. It also automatically checks
		   * if the prop is function or getter and behaves
		   * accordingly. */
		  function lookupGetter(object, prop) {
		    while (object !== null) {
		      var desc = getOwnPropertyDescriptor(object, prop);
		      if (desc) {
		        if (desc.get) {
		          return unapply(desc.get);
		        }
		        if (typeof desc.value === 'function') {
		          return unapply(desc.value);
		        }
		      }
		      object = getPrototypeOf(object);
		    }
		    function fallbackValue(element) {
		      console.warn('fallback value for', element);
		      return null;
		    }
		    return fallbackValue;
		  }

		  var html$1 = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']);

		  // SVG
		  var svg$1 = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'view', 'vkern']);
		  var svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']);

		  // List of SVG elements that are disallowed by default.
		  // We still need to know them so that we can do namespace
		  // checks properly in case one wants to add them to
		  // allow-list.
		  var svgDisallowed = freeze(['animate', 'color-profile', 'cursor', 'discard', 'fedropshadow', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignobject', 'hatch', 'hatchpath', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'missing-glyph', 'script', 'set', 'solidcolor', 'unknown', 'use']);
		  var mathMl$1 = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover']);

		  // Similarly to SVG, we want to know all MathML elements,
		  // even those that we disallow by default.
		  var mathMlDisallowed = freeze(['maction', 'maligngroup', 'malignmark', 'mlongdiv', 'mscarries', 'mscarry', 'msgroup', 'mstack', 'msline', 'msrow', 'semantics', 'annotation', 'annotation-xml', 'mprescripts', 'none']);
		  var text = freeze(['#text']);

		  var html = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'nonce', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns', 'slot']);
		  var svg = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clippathunits', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'systemlanguage', 'tabindex', 'targetx', 'targety', 'transform', 'transform-origin', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);
		  var mathMl = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);
		  var xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

		  // eslint-disable-next-line unicorn/better-regex
		  var MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode
		  var ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
		  var TMPLIT_EXPR = seal(/\${[\w\W]*}/gm);
		  var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape
		  var ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape
		  var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
		  );
		  var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
		  var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
		  );
		  var DOCTYPE_NAME = seal(/^html$/i);
		  var CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);

		  var getGlobal = function getGlobal() {
		    return typeof window === 'undefined' ? null : window;
		  };

		  /**
		   * Creates a no-op policy for internal use only.
		   * Don't export this function outside this module!
		   * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
		   * @param {Document} document The document object (to determine policy name suffix)
		   * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
		   * are not supported).
		   */
		  var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, document) {
		    if (_typeof(trustedTypes) !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
		      return null;
		    }

		    // Allow the callers to control the unique policy name
		    // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
		    // Policy creation with duplicate names throws in Trusted Types.
		    var suffix = null;
		    var ATTR_NAME = 'data-tt-policy-suffix';
		    if (document.currentScript && document.currentScript.hasAttribute(ATTR_NAME)) {
		      suffix = document.currentScript.getAttribute(ATTR_NAME);
		    }
		    var policyName = 'dompurify' + (suffix ? '#' + suffix : '');
		    try {
		      return trustedTypes.createPolicy(policyName, {
		        createHTML: function createHTML(html) {
		          return html;
		        },
		        createScriptURL: function createScriptURL(scriptUrl) {
		          return scriptUrl;
		        }
		      });
		    } catch (_) {
		      // Policy creation failed (most likely another DOMPurify script has
		      // already run). Skip creating the policy, as this will only cause errors
		      // if TT are enforced.
		      console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
		      return null;
		    }
		  };
		  function createDOMPurify() {
		    var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();
		    var DOMPurify = function DOMPurify(root) {
		      return createDOMPurify(root);
		    };

		    /**
		     * Version label, exposed for easier checks
		     * if DOMPurify is up to date or not
		     */
		    DOMPurify.version = '2.5.6';

		    /**
		     * Array of elements that DOMPurify removed during sanitation.
		     * Empty if nothing was removed.
		     */
		    DOMPurify.removed = [];
		    if (!window || !window.document || window.document.nodeType !== 9) {
		      // Not running in a browser, provide a factory function
		      // so that you can pass your own Window
		      DOMPurify.isSupported = false;
		      return DOMPurify;
		    }
		    var originalDocument = window.document;
		    var document = window.document;
		    var DocumentFragment = window.DocumentFragment,
		      HTMLTemplateElement = window.HTMLTemplateElement,
		      Node = window.Node,
		      Element = window.Element,
		      NodeFilter = window.NodeFilter,
		      _window$NamedNodeMap = window.NamedNodeMap,
		      NamedNodeMap = _window$NamedNodeMap === void 0 ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
		      HTMLFormElement = window.HTMLFormElement,
		      DOMParser = window.DOMParser,
		      trustedTypes = window.trustedTypes;
		    var ElementPrototype = Element.prototype;
		    var cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
		    var getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
		    var getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
		    var getParentNode = lookupGetter(ElementPrototype, 'parentNode');

		    // As per issue #47, the web-components registry is inherited by a
		    // new document created via createHTMLDocument. As per the spec
		    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
		    // a new empty registry is used when creating a template contents owner
		    // document, so we use that as our parent document to ensure nothing
		    // is inherited.
		    if (typeof HTMLTemplateElement === 'function') {
		      var template = document.createElement('template');
		      if (template.content && template.content.ownerDocument) {
		        document = template.content.ownerDocument;
		      }
		    }
		    var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);
		    var emptyHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML('') : '';
		    var _document = document,
		      implementation = _document.implementation,
		      createNodeIterator = _document.createNodeIterator,
		      createDocumentFragment = _document.createDocumentFragment,
		      getElementsByTagName = _document.getElementsByTagName;
		    var importNode = originalDocument.importNode;
		    var documentMode = {};
		    try {
		      documentMode = clone(document).documentMode ? document.documentMode : {};
		    } catch (_) {}
		    var hooks = {};

		    /**
		     * Expose whether this browser supports running the full DOMPurify.
		     */
		    DOMPurify.isSupported = typeof getParentNode === 'function' && implementation && implementation.createHTMLDocument !== undefined && documentMode !== 9;
		    var MUSTACHE_EXPR$1 = MUSTACHE_EXPR,
		      ERB_EXPR$1 = ERB_EXPR,
		      TMPLIT_EXPR$1 = TMPLIT_EXPR,
		      DATA_ATTR$1 = DATA_ATTR,
		      ARIA_ATTR$1 = ARIA_ATTR,
		      IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA,
		      ATTR_WHITESPACE$1 = ATTR_WHITESPACE,
		      CUSTOM_ELEMENT$1 = CUSTOM_ELEMENT;
		    var IS_ALLOWED_URI$1 = IS_ALLOWED_URI;

		    /**
		     * We consider the elements and attributes below to be safe. Ideally
		     * don't add any new ones but feel free to remove unwanted ones.
		     */

		    /* allowed element names */
		    var ALLOWED_TAGS = null;
		    var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(html$1), _toConsumableArray(svg$1), _toConsumableArray(svgFilters), _toConsumableArray(mathMl$1), _toConsumableArray(text)));

		    /* Allowed attribute names */
		    var ALLOWED_ATTR = null;
		    var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray(html), _toConsumableArray(svg), _toConsumableArray(mathMl), _toConsumableArray(xml)));

		    /*
		     * Configure how DOMPUrify should handle custom elements and their attributes as well as customized built-in elements.
		     * @property {RegExp|Function|null} tagNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any custom elements)
		     * @property {RegExp|Function|null} attributeNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any attributes not on the allow list)
		     * @property {boolean} allowCustomizedBuiltInElements allow custom elements derived from built-ins if they pass CUSTOM_ELEMENT_HANDLING.tagNameCheck. Default: `false`.
		     */
		    var CUSTOM_ELEMENT_HANDLING = Object.seal(Object.create(null, {
		      tagNameCheck: {
		        writable: true,
		        configurable: false,
		        enumerable: true,
		        value: null
		      },
		      attributeNameCheck: {
		        writable: true,
		        configurable: false,
		        enumerable: true,
		        value: null
		      },
		      allowCustomizedBuiltInElements: {
		        writable: true,
		        configurable: false,
		        enumerable: true,
		        value: false
		      }
		    }));

		    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */
		    var FORBID_TAGS = null;

		    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */
		    var FORBID_ATTR = null;

		    /* Decide if ARIA attributes are okay */
		    var ALLOW_ARIA_ATTR = true;

		    /* Decide if custom data attributes are okay */
		    var ALLOW_DATA_ATTR = true;

		    /* Decide if unknown protocols are okay */
		    var ALLOW_UNKNOWN_PROTOCOLS = false;

		    /* Decide if self-closing tags in attributes are allowed.
		     * Usually removed due to a mXSS issue in jQuery 3.0 */
		    var ALLOW_SELF_CLOSE_IN_ATTR = true;

		    /* Output should be safe for common template engines.
		     * This means, DOMPurify removes data attributes, mustaches and ERB
		     */
		    var SAFE_FOR_TEMPLATES = false;

		    /* Output should be safe even for XML used within HTML and alike.
		     * This means, DOMPurify removes comments when containing risky content.
		     */
		    var SAFE_FOR_XML = true;

		    /* Decide if document with <html>... should be returned */
		    var WHOLE_DOCUMENT = false;

		    /* Track whether config is already set on this instance of DOMPurify. */
		    var SET_CONFIG = false;

		    /* Decide if all elements (e.g. style, script) must be children of
		     * document.body. By default, browsers might move them to document.head */
		    var FORCE_BODY = false;

		    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
		     * string (or a TrustedHTML object if Trusted Types are supported).
		     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
		     */
		    var RETURN_DOM = false;

		    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
		     * string  (or a TrustedHTML object if Trusted Types are supported) */
		    var RETURN_DOM_FRAGMENT = false;

		    /* Try to return a Trusted Type object instead of a string, return a string in
		     * case Trusted Types are not supported  */
		    var RETURN_TRUSTED_TYPE = false;

		    /* Output should be free from DOM clobbering attacks?
		     * This sanitizes markups named with colliding, clobberable built-in DOM APIs.
		     */
		    var SANITIZE_DOM = true;

		    /* Achieve full DOM Clobbering protection by isolating the namespace of named
		     * properties and JS variables, mitigating attacks that abuse the HTML/DOM spec rules.
		     *
		     * HTML/DOM spec rules that enable DOM Clobbering:
		     *   - Named Access on Window (§7.3.3)
		     *   - DOM Tree Accessors (§3.1.5)
		     *   - Form Element Parent-Child Relations (§4.10.3)
		     *   - Iframe srcdoc / Nested WindowProxies (§4.8.5)
		     *   - HTMLCollection (§4.2.10.2)
		     *
		     * Namespace isolation is implemented by prefixing `id` and `name` attributes
		     * with a constant string, i.e., `user-content-`
		     */
		    var SANITIZE_NAMED_PROPS = false;
		    var SANITIZE_NAMED_PROPS_PREFIX = 'user-content-';

		    /* Keep element content when removing element? */
		    var KEEP_CONTENT = true;

		    /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
		     * of importing it into a new Document and returning a sanitized copy */
		    var IN_PLACE = false;

		    /* Allow usage of profiles like html, svg and mathMl */
		    var USE_PROFILES = {};

		    /* Tags to ignore content of when KEEP_CONTENT is true */
		    var FORBID_CONTENTS = null;
		    var DEFAULT_FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'noscript', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);

		    /* Tags that are safe for data: URIs */
		    var DATA_URI_TAGS = null;
		    var DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);

		    /* Attributes safe for values like "javascript:" */
		    var URI_SAFE_ATTRIBUTES = null;
		    var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'role', 'summary', 'title', 'value', 'style', 'xmlns']);
		    var MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
		    var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
		    var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
		    /* Document namespace */
		    var NAMESPACE = HTML_NAMESPACE;
		    var IS_EMPTY_INPUT = false;

		    /* Allowed XHTML+XML namespaces */
		    var ALLOWED_NAMESPACES = null;
		    var DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);

		    /* Parsing of strict XHTML documents */
		    var PARSER_MEDIA_TYPE;
		    var SUPPORTED_PARSER_MEDIA_TYPES = ['application/xhtml+xml', 'text/html'];
		    var DEFAULT_PARSER_MEDIA_TYPE = 'text/html';
		    var transformCaseFunc;

		    /* Keep a reference to config to pass to hooks */
		    var CONFIG = null;

		    /* Ideally, do not touch anything below this line */
		    /* ______________________________________________ */

		    var formElement = document.createElement('form');
		    var isRegexOrFunction = function isRegexOrFunction(testValue) {
		      return testValue instanceof RegExp || testValue instanceof Function;
		    };

		    /**
		     * _parseConfig
		     *
		     * @param  {Object} cfg optional config literal
		     */
		    // eslint-disable-next-line complexity
		    var _parseConfig = function _parseConfig(cfg) {
		      if (CONFIG && CONFIG === cfg) {
		        return;
		      }

		      /* Shield configuration object from tampering */
		      if (!cfg || _typeof(cfg) !== 'object') {
		        cfg = {};
		      }

		      /* Shield configuration object from prototype pollution */
		      cfg = clone(cfg);
		      PARSER_MEDIA_TYPE =
		      // eslint-disable-next-line unicorn/prefer-includes
		      SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE;

		      // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.
		      transformCaseFunc = PARSER_MEDIA_TYPE === 'application/xhtml+xml' ? stringToString : stringToLowerCase;

		      /* Set configuration parameters */
		      ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
		      ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
		      ALLOWED_NAMESPACES = 'ALLOWED_NAMESPACES' in cfg ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
		      URI_SAFE_ATTRIBUTES = 'ADD_URI_SAFE_ATTR' in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES),
		      // eslint-disable-line indent
		      cfg.ADD_URI_SAFE_ATTR,
		      // eslint-disable-line indent
		      transformCaseFunc // eslint-disable-line indent
		      ) // eslint-disable-line indent
		      : DEFAULT_URI_SAFE_ATTRIBUTES;
		      DATA_URI_TAGS = 'ADD_DATA_URI_TAGS' in cfg ? addToSet(clone(DEFAULT_DATA_URI_TAGS),
		      // eslint-disable-line indent
		      cfg.ADD_DATA_URI_TAGS,
		      // eslint-disable-line indent
		      transformCaseFunc // eslint-disable-line indent
		      ) // eslint-disable-line indent
		      : DEFAULT_DATA_URI_TAGS;
		      FORBID_CONTENTS = 'FORBID_CONTENTS' in cfg ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
		      FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
		      FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
		      USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
		      ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
		      ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
		      ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
		      ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false; // Default true
		      SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
		      SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false; // Default true
		      WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
		      RETURN_DOM = cfg.RETURN_DOM || false; // Default false
		      RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
		      RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false
		      FORCE_BODY = cfg.FORCE_BODY || false; // Default false
		      SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
		      SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false; // Default false
		      KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true
		      IN_PLACE = cfg.IN_PLACE || false; // Default false
		      IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$1;
		      NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
		      CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
		      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
		        CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
		      }
		      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
		        CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
		      }
		      if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === 'boolean') {
		        CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
		      }
		      if (SAFE_FOR_TEMPLATES) {
		        ALLOW_DATA_ATTR = false;
		      }
		      if (RETURN_DOM_FRAGMENT) {
		        RETURN_DOM = true;
		      }

		      /* Parse profile info */
		      if (USE_PROFILES) {
		        ALLOWED_TAGS = addToSet({}, _toConsumableArray(text));
		        ALLOWED_ATTR = [];
		        if (USE_PROFILES.html === true) {
		          addToSet(ALLOWED_TAGS, html$1);
		          addToSet(ALLOWED_ATTR, html);
		        }
		        if (USE_PROFILES.svg === true) {
		          addToSet(ALLOWED_TAGS, svg$1);
		          addToSet(ALLOWED_ATTR, svg);
		          addToSet(ALLOWED_ATTR, xml);
		        }
		        if (USE_PROFILES.svgFilters === true) {
		          addToSet(ALLOWED_TAGS, svgFilters);
		          addToSet(ALLOWED_ATTR, svg);
		          addToSet(ALLOWED_ATTR, xml);
		        }
		        if (USE_PROFILES.mathMl === true) {
		          addToSet(ALLOWED_TAGS, mathMl$1);
		          addToSet(ALLOWED_ATTR, mathMl);
		          addToSet(ALLOWED_ATTR, xml);
		        }
		      }

		      /* Merge configuration parameters */
		      if (cfg.ADD_TAGS) {
		        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
		          ALLOWED_TAGS = clone(ALLOWED_TAGS);
		        }
		        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
		      }
		      if (cfg.ADD_ATTR) {
		        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
		          ALLOWED_ATTR = clone(ALLOWED_ATTR);
		        }
		        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
		      }
		      if (cfg.ADD_URI_SAFE_ATTR) {
		        addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
		      }
		      if (cfg.FORBID_CONTENTS) {
		        if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
		          FORBID_CONTENTS = clone(FORBID_CONTENTS);
		        }
		        addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
		      }

		      /* Add #text in case KEEP_CONTENT is set to true */
		      if (KEEP_CONTENT) {
		        ALLOWED_TAGS['#text'] = true;
		      }

		      /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */
		      if (WHOLE_DOCUMENT) {
		        addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
		      }

		      /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */
		      if (ALLOWED_TAGS.table) {
		        addToSet(ALLOWED_TAGS, ['tbody']);
		        delete FORBID_TAGS.tbody;
		      }

		      // Prevent further manipulation of configuration.
		      // Not available in IE8, Safari 5, etc.
		      if (freeze) {
		        freeze(cfg);
		      }
		      CONFIG = cfg;
		    };
		    var MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ['mi', 'mo', 'mn', 'ms', 'mtext']);
		    var HTML_INTEGRATION_POINTS = addToSet({}, ['foreignobject', 'annotation-xml']);

		    // Certain elements are allowed in both SVG and HTML
		    // namespace. We need to specify them explicitly
		    // so that they don't get erroneously deleted from
		    // HTML namespace.
		    var COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ['title', 'style', 'font', 'a', 'script']);

		    /* Keep track of all possible SVG and MathML tags
		     * so that we can perform the namespace checks
		     * correctly. */
		    var ALL_SVG_TAGS = addToSet({}, svg$1);
		    addToSet(ALL_SVG_TAGS, svgFilters);
		    addToSet(ALL_SVG_TAGS, svgDisallowed);
		    var ALL_MATHML_TAGS = addToSet({}, mathMl$1);
		    addToSet(ALL_MATHML_TAGS, mathMlDisallowed);

		    /**
		     *
		     *
		     * @param  {Element} element a DOM element whose namespace is being checked
		     * @returns {boolean} Return false if the element has a
		     *  namespace that a spec-compliant parser would never
		     *  return. Return true otherwise.
		     */
		    var _checkValidNamespace = function _checkValidNamespace(element) {
		      var parent = getParentNode(element);

		      // In JSDOM, if we're inside shadow DOM, then parentNode
		      // can be null. We just simulate parent in this case.
		      if (!parent || !parent.tagName) {
		        parent = {
		          namespaceURI: NAMESPACE,
		          tagName: 'template'
		        };
		      }
		      var tagName = stringToLowerCase(element.tagName);
		      var parentTagName = stringToLowerCase(parent.tagName);
		      if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
		        return false;
		      }
		      if (element.namespaceURI === SVG_NAMESPACE) {
		        // The only way to switch from HTML namespace to SVG
		        // is via <svg>. If it happens via any other tag, then
		        // it should be killed.
		        if (parent.namespaceURI === HTML_NAMESPACE) {
		          return tagName === 'svg';
		        }

		        // The only way to switch from MathML to SVG is via`
		        // svg if parent is either <annotation-xml> or MathML
		        // text integration points.
		        if (parent.namespaceURI === MATHML_NAMESPACE) {
		          return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
		        }

		        // We only allow elements that are defined in SVG
		        // spec. All others are disallowed in SVG namespace.
		        return Boolean(ALL_SVG_TAGS[tagName]);
		      }
		      if (element.namespaceURI === MATHML_NAMESPACE) {
		        // The only way to switch from HTML namespace to MathML
		        // is via <math>. If it happens via any other tag, then
		        // it should be killed.
		        if (parent.namespaceURI === HTML_NAMESPACE) {
		          return tagName === 'math';
		        }

		        // The only way to switch from SVG to MathML is via
		        // <math> and HTML integration points
		        if (parent.namespaceURI === SVG_NAMESPACE) {
		          return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
		        }

		        // We only allow elements that are defined in MathML
		        // spec. All others are disallowed in MathML namespace.
		        return Boolean(ALL_MATHML_TAGS[tagName]);
		      }
		      if (element.namespaceURI === HTML_NAMESPACE) {
		        // The only way to switch from SVG to HTML is via
		        // HTML integration points, and from MathML to HTML
		        // is via MathML text integration points
		        if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
		          return false;
		        }
		        if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
		          return false;
		        }

		        // We disallow tags that are specific for MathML
		        // or SVG and should never appear in HTML namespace
		        return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
		      }

		      // For XHTML and XML documents that support custom namespaces
		      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && ALLOWED_NAMESPACES[element.namespaceURI]) {
		        return true;
		      }

		      // The code should never reach this place (this means
		      // that the element somehow got namespace that is not
		      // HTML, SVG, MathML or allowed via ALLOWED_NAMESPACES).
		      // Return false just in case.
		      return false;
		    };

		    /**
		     * _forceRemove
		     *
		     * @param  {Node} node a DOM node
		     */
		    var _forceRemove = function _forceRemove(node) {
		      arrayPush(DOMPurify.removed, {
		        element: node
		      });
		      try {
		        // eslint-disable-next-line unicorn/prefer-dom-node-remove
		        node.parentNode.removeChild(node);
		      } catch (_) {
		        try {
		          node.outerHTML = emptyHTML;
		        } catch (_) {
		          node.remove();
		        }
		      }
		    };

		    /**
		     * _removeAttribute
		     *
		     * @param  {String} name an Attribute name
		     * @param  {Node} node a DOM node
		     */
		    var _removeAttribute = function _removeAttribute(name, node) {
		      try {
		        arrayPush(DOMPurify.removed, {
		          attribute: node.getAttributeNode(name),
		          from: node
		        });
		      } catch (_) {
		        arrayPush(DOMPurify.removed, {
		          attribute: null,
		          from: node
		        });
		      }
		      node.removeAttribute(name);

		      // We void attribute values for unremovable "is"" attributes
		      if (name === 'is' && !ALLOWED_ATTR[name]) {
		        if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
		          try {
		            _forceRemove(node);
		          } catch (_) {}
		        } else {
		          try {
		            node.setAttribute(name, '');
		          } catch (_) {}
		        }
		      }
		    };

		    /**
		     * _initDocument
		     *
		     * @param  {String} dirty a string of dirty markup
		     * @return {Document} a DOM, filled with the dirty markup
		     */
		    var _initDocument = function _initDocument(dirty) {
		      /* Create a HTML document */
		      var doc;
		      var leadingWhitespace;
		      if (FORCE_BODY) {
		        dirty = '<remove></remove>' + dirty;
		      } else {
		        /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
		        var matches = stringMatch(dirty, /^[\r\n\t ]+/);
		        leadingWhitespace = matches && matches[0];
		      }
		      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && NAMESPACE === HTML_NAMESPACE) {
		        // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
		        dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + '</body></html>';
		      }
		      var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
		      /*
		       * Use the DOMParser API by default, fallback later if needs be
		       * DOMParser not work for svg when has multiple root element.
		       */
		      if (NAMESPACE === HTML_NAMESPACE) {
		        try {
		          doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
		        } catch (_) {}
		      }

		      /* Use createHTMLDocument in case DOMParser is not available */
		      if (!doc || !doc.documentElement) {
		        doc = implementation.createDocument(NAMESPACE, 'template', null);
		        try {
		          doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
		        } catch (_) {
		          // Syntax error if dirtyPayload is invalid xml
		        }
		      }
		      var body = doc.body || doc.documentElement;
		      if (dirty && leadingWhitespace) {
		        body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
		      }

		      /* Work on whole document or just its body */
		      if (NAMESPACE === HTML_NAMESPACE) {
		        return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
		      }
		      return WHOLE_DOCUMENT ? doc.documentElement : body;
		    };

		    /**
		     * _createIterator
		     *
		     * @param  {Document} root document/fragment to create iterator for
		     * @return {Iterator} iterator instance
		     */
		    var _createIterator = function _createIterator(root) {
		      return createNodeIterator.call(root.ownerDocument || root, root,
		      // eslint-disable-next-line no-bitwise
		      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION, null, false);
		    };

		    /**
		     * _isClobbered
		     *
		     * @param  {Node} elm element to check for clobbering attacks
		     * @return {Boolean} true if clobbered, false if safe
		     */
		    var _isClobbered = function _isClobbered(elm) {
		      return elm instanceof HTMLFormElement && (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string' || typeof elm.insertBefore !== 'function' || typeof elm.hasChildNodes !== 'function');
		    };

		    /**
		     * _isNode
		     *
		     * @param  {Node} obj object to check whether it's a DOM node
		     * @return {Boolean} true is object is a DOM node
		     */
		    var _isNode = function _isNode(object) {
		      return _typeof(Node) === 'object' ? object instanceof Node : object && _typeof(object) === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string';
		    };

		    /**
		     * _executeHook
		     * Execute user configurable hooks
		     *
		     * @param  {String} entryPoint  Name of the hook's entry point
		     * @param  {Node} currentNode node to work on with the hook
		     * @param  {Object} data additional hook parameters
		     */
		    var _executeHook = function _executeHook(entryPoint, currentNode, data) {
		      if (!hooks[entryPoint]) {
		        return;
		      }
		      arrayForEach(hooks[entryPoint], function (hook) {
		        hook.call(DOMPurify, currentNode, data, CONFIG);
		      });
		    };

		    /**
		     * _sanitizeElements
		     *
		     * @protect nodeName
		     * @protect textContent
		     * @protect removeChild
		     *
		     * @param   {Node} currentNode to check for permission to exist
		     * @return  {Boolean} true if node was killed, false if left alive
		     */
		    var _sanitizeElements = function _sanitizeElements(currentNode) {
		      var content;

		      /* Execute a hook if present */
		      _executeHook('beforeSanitizeElements', currentNode, null);

		      /* Check if element is clobbered or can clobber */
		      if (_isClobbered(currentNode)) {
		        _forceRemove(currentNode);
		        return true;
		      }

		      /* Check if tagname contains Unicode */
		      if (regExpTest(/[\u0080-\uFFFF]/, currentNode.nodeName)) {
		        _forceRemove(currentNode);
		        return true;
		      }

		      /* Now let's check the element's type and name */
		      var tagName = transformCaseFunc(currentNode.nodeName);

		      /* Execute a hook if present */
		      _executeHook('uponSanitizeElement', currentNode, {
		        tagName: tagName,
		        allowedTags: ALLOWED_TAGS
		      });

		      /* Detect mXSS attempts abusing namespace confusion */
		      if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
		        _forceRemove(currentNode);
		        return true;
		      }

		      /* Mitigate a problem with templates inside select */
		      if (tagName === 'select' && regExpTest(/<template/i, currentNode.innerHTML)) {
		        _forceRemove(currentNode);
		        return true;
		      }

		      /* Remove any ocurrence of processing instructions */
		      if (currentNode.nodeType === 7) {
		        _forceRemove(currentNode);
		        return true;
		      }

		      /* Remove any kind of possibly harmful comments */
		      if (SAFE_FOR_XML && currentNode.nodeType === 8 && regExpTest(/<[/\w]/g, currentNode.data)) {
		        _forceRemove(currentNode);
		        return true;
		      }

		      /* Remove element if anything forbids its presence */
		      if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
		        /* Check if we have a custom element to handle */
		        if (!FORBID_TAGS[tagName] && _basicCustomElementTest(tagName)) {
		          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
		          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) return false;
		        }

		        /* Keep content except for bad-listed elements */
		        if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
		          var parentNode = getParentNode(currentNode) || currentNode.parentNode;
		          var childNodes = getChildNodes(currentNode) || currentNode.childNodes;
		          if (childNodes && parentNode) {
		            var childCount = childNodes.length;
		            for (var i = childCount - 1; i >= 0; --i) {
		              var childClone = cloneNode(childNodes[i], true);
		              childClone.__removalCount = (currentNode.__removalCount || 0) + 1;
		              parentNode.insertBefore(childClone, getNextSibling(currentNode));
		            }
		          }
		        }
		        _forceRemove(currentNode);
		        return true;
		      }

		      /* Check whether element has a valid namespace */
		      if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
		        _forceRemove(currentNode);
		        return true;
		      }

		      /* Make sure that older browsers don't get fallback-tag mXSS */
		      if ((tagName === 'noscript' || tagName === 'noembed' || tagName === 'noframes') && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
		        _forceRemove(currentNode);
		        return true;
		      }

		      /* Sanitize element content to be template-safe */
		      if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
		        /* Get the element's text content */
		        content = currentNode.textContent;
		        content = stringReplace(content, MUSTACHE_EXPR$1, ' ');
		        content = stringReplace(content, ERB_EXPR$1, ' ');
		        content = stringReplace(content, TMPLIT_EXPR$1, ' ');
		        if (currentNode.textContent !== content) {
		          arrayPush(DOMPurify.removed, {
		            element: currentNode.cloneNode()
		          });
		          currentNode.textContent = content;
		        }
		      }

		      /* Execute a hook if present */
		      _executeHook('afterSanitizeElements', currentNode, null);
		      return false;
		    };

		    /**
		     * _isValidAttribute
		     *
		     * @param  {string} lcTag Lowercase tag name of containing element.
		     * @param  {string} lcName Lowercase attribute name.
		     * @param  {string} value Attribute value.
		     * @return {Boolean} Returns true if `value` is valid, otherwise false.
		     */
		    // eslint-disable-next-line complexity
		    var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
		      /* Make sure attribute cannot clobber */
		      if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
		        return false;
		      }

		      /* Allow valid data-* attributes: At least one character after "-"
		          (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
		          XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
		          We don't need to check the value; it's always URI safe. */
		      if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR$1, lcName)) ; else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName)) ; else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
		        if (
		        // First condition does a very basic check if a) it's basically a valid custom element tagname AND
		        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
		        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
		        _basicCustomElementTest(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) ||
		        // Alternative, second condition checks if it's an `is`-attribute, AND
		        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
		        lcName === 'is' && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))) ; else {
		          return false;
		        }
		        /* Check value is safe. First, is attr inert? If so, is safe */
		      } else if (URI_SAFE_ATTRIBUTES[lcName]) ; else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, ''))) ; else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ; else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, ''))) ; else if (value) {
		        return false;
		      } else ;
		      return true;
		    };

		    /**
		     * _basicCustomElementCheck
		     * checks if at least one dash is included in tagName, and it's not the first char
		     * for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
		     * @param {string} tagName name of the tag of the node to sanitize
		     */
		    var _basicCustomElementTest = function _basicCustomElementTest(tagName) {
		      return tagName !== 'annotation-xml' && stringMatch(tagName, CUSTOM_ELEMENT$1);
		    };

		    /**
		     * _sanitizeAttributes
		     *
		     * @protect attributes
		     * @protect nodeName
		     * @protect removeAttribute
		     * @protect setAttribute
		     *
		     * @param  {Node} currentNode to sanitize
		     */
		    var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
		      var attr;
		      var value;
		      var lcName;
		      var l;
		      /* Execute a hook if present */
		      _executeHook('beforeSanitizeAttributes', currentNode, null);
		      var attributes = currentNode.attributes;

		      /* Check if we have attributes; if not we might have a text node */
		      if (!attributes) {
		        return;
		      }
		      var hookEvent = {
		        attrName: '',
		        attrValue: '',
		        keepAttr: true,
		        allowedAttributes: ALLOWED_ATTR
		      };
		      l = attributes.length;

		      /* Go backwards over all attributes; safely remove bad ones */
		      while (l--) {
		        attr = attributes[l];
		        var _attr = attr,
		          name = _attr.name,
		          namespaceURI = _attr.namespaceURI;
		        value = name === 'value' ? attr.value : stringTrim(attr.value);
		        lcName = transformCaseFunc(name);

		        /* Execute a hook if present */
		        hookEvent.attrName = lcName;
		        hookEvent.attrValue = value;
		        hookEvent.keepAttr = true;
		        hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set
		        _executeHook('uponSanitizeAttribute', currentNode, hookEvent);
		        value = hookEvent.attrValue;

		        /* Work around a security issue with comments inside attributes */
		        if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|title)/i, value)) {
		          _removeAttribute(name, currentNode);
		          continue;
		        }

		        /* Did the hooks approve of the attribute? */
		        if (hookEvent.forceKeepAttr) {
		          continue;
		        }

		        /* Remove attribute */
		        _removeAttribute(name, currentNode);

		        /* Did the hooks approve of the attribute? */
		        if (!hookEvent.keepAttr) {
		          continue;
		        }

		        /* Work around a security issue in jQuery 3.0 */
		        if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
		          _removeAttribute(name, currentNode);
		          continue;
		        }

		        /* Sanitize attribute content to be template-safe */
		        if (SAFE_FOR_TEMPLATES) {
		          value = stringReplace(value, MUSTACHE_EXPR$1, ' ');
		          value = stringReplace(value, ERB_EXPR$1, ' ');
		          value = stringReplace(value, TMPLIT_EXPR$1, ' ');
		        }

		        /* Is `value` valid for this attribute? */
		        var lcTag = transformCaseFunc(currentNode.nodeName);
		        if (!_isValidAttribute(lcTag, lcName, value)) {
		          continue;
		        }

		        /* Full DOM Clobbering protection via namespace isolation,
		         * Prefix id and name attributes with `user-content-`
		         */
		        if (SANITIZE_NAMED_PROPS && (lcName === 'id' || lcName === 'name')) {
		          // Remove the attribute with this value
		          _removeAttribute(name, currentNode);

		          // Prefix the value and later re-create the attribute with the sanitized value
		          value = SANITIZE_NAMED_PROPS_PREFIX + value;
		        }

		        /* Handle attributes that require Trusted Types */
		        if (trustedTypesPolicy && _typeof(trustedTypes) === 'object' && typeof trustedTypes.getAttributeType === 'function') {
		          if (namespaceURI) ; else {
		            switch (trustedTypes.getAttributeType(lcTag, lcName)) {
		              case 'TrustedHTML':
		                {
		                  value = trustedTypesPolicy.createHTML(value);
		                  break;
		                }
		              case 'TrustedScriptURL':
		                {
		                  value = trustedTypesPolicy.createScriptURL(value);
		                  break;
		                }
		            }
		          }
		        }

		        /* Handle invalid data-* attribute set by try-catching it */
		        try {
		          if (namespaceURI) {
		            currentNode.setAttributeNS(namespaceURI, name, value);
		          } else {
		            /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
		            currentNode.setAttribute(name, value);
		          }
		          if (_isClobbered(currentNode)) {
		            _forceRemove(currentNode);
		          } else {
		            arrayPop(DOMPurify.removed);
		          }
		        } catch (_) {}
		      }

		      /* Execute a hook if present */
		      _executeHook('afterSanitizeAttributes', currentNode, null);
		    };

		    /**
		     * _sanitizeShadowDOM
		     *
		     * @param  {DocumentFragment} fragment to iterate over recursively
		     */
		    var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
		      var shadowNode;
		      var shadowIterator = _createIterator(fragment);

		      /* Execute a hook if present */
		      _executeHook('beforeSanitizeShadowDOM', fragment, null);
		      while (shadowNode = shadowIterator.nextNode()) {
		        /* Execute a hook if present */
		        _executeHook('uponSanitizeShadowNode', shadowNode, null);

		        /* Sanitize tags and elements */
		        if (_sanitizeElements(shadowNode)) {
		          continue;
		        }

		        /* Deep shadow DOM detected */
		        if (shadowNode.content instanceof DocumentFragment) {
		          _sanitizeShadowDOM(shadowNode.content);
		        }

		        /* Check attributes, sanitize if necessary */
		        _sanitizeAttributes(shadowNode);
		      }

		      /* Execute a hook if present */
		      _executeHook('afterSanitizeShadowDOM', fragment, null);
		    };

		    /**
		     * Sanitize
		     * Public method providing core sanitation functionality
		     *
		     * @param {String|Node} dirty string or DOM node
		     * @param {Object} configuration object
		     */
		    // eslint-disable-next-line complexity
		    DOMPurify.sanitize = function (dirty) {
		      var cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		      var body;
		      var importedNode;
		      var currentNode;
		      var oldNode;
		      var returnNode;
		      /* Make sure we have a string to sanitize.
		        DO NOT return early, as this will return the wrong type if
		        the user has requested a DOM object rather than a string */
		      IS_EMPTY_INPUT = !dirty;
		      if (IS_EMPTY_INPUT) {
		        dirty = '<!-->';
		      }

		      /* Stringify, in case dirty is an object */
		      if (typeof dirty !== 'string' && !_isNode(dirty)) {
		        if (typeof dirty.toString === 'function') {
		          dirty = dirty.toString();
		          if (typeof dirty !== 'string') {
		            throw typeErrorCreate('dirty is not a string, aborting');
		          }
		        } else {
		          throw typeErrorCreate('toString is not a function');
		        }
		      }

		      /* Check we can run. Otherwise fall back or ignore */
		      if (!DOMPurify.isSupported) {
		        if (_typeof(window.toStaticHTML) === 'object' || typeof window.toStaticHTML === 'function') {
		          if (typeof dirty === 'string') {
		            return window.toStaticHTML(dirty);
		          }
		          if (_isNode(dirty)) {
		            return window.toStaticHTML(dirty.outerHTML);
		          }
		        }
		        return dirty;
		      }

		      /* Assign config vars */
		      if (!SET_CONFIG) {
		        _parseConfig(cfg);
		      }

		      /* Clean up removed elements */
		      DOMPurify.removed = [];

		      /* Check if dirty is correctly typed for IN_PLACE */
		      if (typeof dirty === 'string') {
		        IN_PLACE = false;
		      }
		      if (IN_PLACE) {
		        /* Do some early pre-sanitization to avoid unsafe root nodes */
		        if (dirty.nodeName) {
		          var tagName = transformCaseFunc(dirty.nodeName);
		          if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
		            throw typeErrorCreate('root node is forbidden and cannot be sanitized in-place');
		          }
		        }
		      } else if (dirty instanceof Node) {
		        /* If dirty is a DOM element, append to an empty document to avoid
		           elements being stripped by the parser */
		        body = _initDocument('<!---->');
		        importedNode = body.ownerDocument.importNode(dirty, true);
		        if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
		          /* Node is already a body, use as is */
		          body = importedNode;
		        } else if (importedNode.nodeName === 'HTML') {
		          body = importedNode;
		        } else {
		          // eslint-disable-next-line unicorn/prefer-dom-node-append
		          body.appendChild(importedNode);
		        }
		      } else {
		        /* Exit directly if we have nothing to do */
		        if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT &&
		        // eslint-disable-next-line unicorn/prefer-includes
		        dirty.indexOf('<') === -1) {
		          return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
		        }

		        /* Initialize the document to work on */
		        body = _initDocument(dirty);

		        /* Check we have a DOM node from the data */
		        if (!body) {
		          return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : '';
		        }
		      }

		      /* Remove first element node (ours) if FORCE_BODY is set */
		      if (body && FORCE_BODY) {
		        _forceRemove(body.firstChild);
		      }

		      /* Get node iterator */
		      var nodeIterator = _createIterator(IN_PLACE ? dirty : body);

		      /* Now start iterating over the created document */
		      while (currentNode = nodeIterator.nextNode()) {
		        /* Fix IE's strange behavior with manipulated textNodes #89 */
		        if (currentNode.nodeType === 3 && currentNode === oldNode) {
		          continue;
		        }

		        /* Sanitize tags and elements */
		        if (_sanitizeElements(currentNode)) {
		          continue;
		        }

		        /* Shadow DOM detected, sanitize it */
		        if (currentNode.content instanceof DocumentFragment) {
		          _sanitizeShadowDOM(currentNode.content);
		        }

		        /* Check attributes, sanitize if necessary */
		        _sanitizeAttributes(currentNode);
		        oldNode = currentNode;
		      }
		      oldNode = null;

		      /* If we sanitized `dirty` in-place, return it. */
		      if (IN_PLACE) {
		        return dirty;
		      }

		      /* Return sanitized string or DOM */
		      if (RETURN_DOM) {
		        if (RETURN_DOM_FRAGMENT) {
		          returnNode = createDocumentFragment.call(body.ownerDocument);
		          while (body.firstChild) {
		            // eslint-disable-next-line unicorn/prefer-dom-node-append
		            returnNode.appendChild(body.firstChild);
		          }
		        } else {
		          returnNode = body;
		        }
		        if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmod) {
		          /*
		            AdoptNode() is not used because internal state is not reset
		            (e.g. the past names map of a HTMLFormElement), this is safe
		            in theory but we would rather not risk another attack vector.
		            The state that is cloned by importNode() is explicitly defined
		            by the specs.
		          */
		          returnNode = importNode.call(originalDocument, returnNode, true);
		        }
		        return returnNode;
		      }
		      var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;

		      /* Serialize doctype if allowed */
		      if (WHOLE_DOCUMENT && ALLOWED_TAGS['!doctype'] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
		        serializedHTML = '<!DOCTYPE ' + body.ownerDocument.doctype.name + '>\n' + serializedHTML;
		      }

		      /* Sanitize final string template-safe */
		      if (SAFE_FOR_TEMPLATES) {
		        serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$1, ' ');
		        serializedHTML = stringReplace(serializedHTML, ERB_EXPR$1, ' ');
		        serializedHTML = stringReplace(serializedHTML, TMPLIT_EXPR$1, ' ');
		      }
		      return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
		    };

		    /**
		     * Public method to set the configuration once
		     * setConfig
		     *
		     * @param {Object} cfg configuration object
		     */
		    DOMPurify.setConfig = function (cfg) {
		      _parseConfig(cfg);
		      SET_CONFIG = true;
		    };

		    /**
		     * Public method to remove the configuration
		     * clearConfig
		     *
		     */
		    DOMPurify.clearConfig = function () {
		      CONFIG = null;
		      SET_CONFIG = false;
		    };

		    /**
		     * Public method to check if an attribute value is valid.
		     * Uses last set config, if any. Otherwise, uses config defaults.
		     * isValidAttribute
		     *
		     * @param  {string} tag Tag name of containing element.
		     * @param  {string} attr Attribute name.
		     * @param  {string} value Attribute value.
		     * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
		     */
		    DOMPurify.isValidAttribute = function (tag, attr, value) {
		      /* Initialize shared config vars if necessary. */
		      if (!CONFIG) {
		        _parseConfig({});
		      }
		      var lcTag = transformCaseFunc(tag);
		      var lcName = transformCaseFunc(attr);
		      return _isValidAttribute(lcTag, lcName, value);
		    };

		    /**
		     * AddHook
		     * Public method to add DOMPurify hooks
		     *
		     * @param {String} entryPoint entry point for the hook to add
		     * @param {Function} hookFunction function to execute
		     */
		    DOMPurify.addHook = function (entryPoint, hookFunction) {
		      if (typeof hookFunction !== 'function') {
		        return;
		      }
		      hooks[entryPoint] = hooks[entryPoint] || [];
		      arrayPush(hooks[entryPoint], hookFunction);
		    };

		    /**
		     * RemoveHook
		     * Public method to remove a DOMPurify hook at a given entryPoint
		     * (pops it from the stack of hooks if more are present)
		     *
		     * @param {String} entryPoint entry point for the hook to remove
		     * @return {Function} removed(popped) hook
		     */
		    DOMPurify.removeHook = function (entryPoint) {
		      if (hooks[entryPoint]) {
		        return arrayPop(hooks[entryPoint]);
		      }
		    };

		    /**
		     * RemoveHooks
		     * Public method to remove all DOMPurify hooks at a given entryPoint
		     *
		     * @param  {String} entryPoint entry point for the hooks to remove
		     */
		    DOMPurify.removeHooks = function (entryPoint) {
		      if (hooks[entryPoint]) {
		        hooks[entryPoint] = [];
		      }
		    };

		    /**
		     * RemoveAllHooks
		     * Public method to remove all DOMPurify hooks
		     *
		     */
		    DOMPurify.removeAllHooks = function () {
		      hooks = {};
		    };
		    return DOMPurify;
		  }
		  var purify = createDOMPurify();

		  return purify;

		}));
		
	} (purify$1));
	return purify$1.exports;
}

var purifyExports = requirePurify();
var DOMPurify = /*@__PURE__*/getDefaultExportFromCjs(purifyExports);

var mdToHTML = function mdToHTML(md) {
  var markedOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  try {
    var _md = typeof md === 'string' ? md : '';
    if (_typeof(markedOptions) === 'object' && Object.keys(markedOptions).length > 0) {
      for (var _len = arguments.length, others = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        others[_key - 2] = arguments[_key];
      }
      // Set options
      marked.use.apply(marked, [markedOptions].concat(others));
    }
    return marked.parse(_md);
  } catch (error) {
    return '';
  }
};
var htmlDomSanitize = function htmlDomSanitize(html) {
  try {
    var _html = typeof html === 'string' ? html : '';
    return DOMPurify.sanitize(_html);
  } catch (error) {
    return '';
  }
};

function markedHighlight(options) {
  if (typeof options === 'function') {
    options = {
      highlight: options
    };
  }
  if (!options || typeof options.highlight !== 'function') {
    throw new Error('Must provide highlight function');
  }
  if (typeof options.langPrefix !== 'string') {
    options.langPrefix = 'language-';
  }
  if (typeof options.emptyLangClass !== 'string') {
    options.emptyLangClass = '';
  }
  return {
    async: !!options.async,
    walkTokens: function walkTokens(token) {
      if (token.type !== 'code') {
        return;
      }
      var lang = getLang(token.lang);
      if (options.async) {
        return Promise.resolve(options.highlight(token.text, lang, token.lang || '')).then(updateToken(token));
      }
      var code = options.highlight(token.text, lang, token.lang || '');
      if (code instanceof Promise) {
        throw new Error('markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.');
      }
      updateToken(token)(code);
    },
    useNewRenderer: true,
    renderer: {
      code: function code(_code, infoString, escaped) {
        // istanbul ignore next
        if (_typeof(_code) === 'object') {
          escaped = _code.escaped;
          infoString = _code.lang;
          _code = _code.text;
        }
        var lang = getLang(infoString);
        var classValue = lang ? options.langPrefix + escape(lang) : options.emptyLangClass;
        var classAttr = classValue ? " class=\"".concat(classValue, "\"") : '';
        _code = _code.replace(/\n$/, '');
        return "<pre><code".concat(classAttr, ">").concat(escaped ? _code : escape(_code, true), "\n</code></pre>");
      }
    }
  };
}
function getLang(lang) {
  return (lang || '').match(/\S*/)[0];
}
function updateToken(token) {
  return function (code) {
    if (typeof code === 'string' && code !== token.text) {
      token.escaped = true;
      token.text = code;
    }
  };
}

// copied from marked helpers
var escapeTest = /[&<>"']/;
var escapeReplace = new RegExp(escapeTest.source, 'g');
var escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
var escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, 'g');
var escapeReplacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};
var getEscapeReplacement = function getEscapeReplacement(ch) {
  return escapeReplacements[ch];
};
function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html;
}

var ToolBarFuncs = ['toggleBold', 'toggleItalic', 'toggleStrikethrough', 'toggleBlockquote', 'toggleHeadingSmaller', 'toggleHeadingBigger', 'toggleHeading1', 'toggleHeading2', 'toggleHeading3', 'toggleCodeBlock', 'toggleUnorderedList', 'toggleOrderedList', 'cleanBlock', 'drawLink', 'drawImage', 'drawTable', 'drawHorizontalRule', 'undo', 'redo', 'togglePreview', 'toggleSideBySide', 'toggleFullScreen'].reduce(function (pre, cur) {
  pre[cur] = EasyMDE[cur]; // as ((editor: Types.SimpleMarkdownEditor) => void);
  return pre;
}, {});
var fullToolBar = {
  'bold': {
    name: 'bold',
    action: ToolBarFuncs.toggleBold,
    className: 'fa fa-bold',
    title: 'Bold'
  },
  'italic': {
    name: 'italic',
    action: ToolBarFuncs.toggleItalic,
    className: 'fa fa-italic',
    title: 'Bold'
  },
  'strikethrough': {
    name: 'strikethrough',
    action: ToolBarFuncs.toggleStrikethrough,
    className: 'fa fa-strikethrough',
    title: 'Strikethrough'
  },
  'heading': {
    name: 'heading',
    action: ToolBarFuncs.toggleHeadingSmaller,
    className: 'fa fa-header',
    title: 'Heading'
  },
  'heading-smaller': {
    name: 'heading-smaller',
    action: ToolBarFuncs.toggleHeadingSmaller,
    className: 'fa fa-header fa-header-x fa-header-smaller',
    title: 'Smaller Heading'
  },
  'heading-bigger': {
    name: 'heading-bigger',
    action: ToolBarFuncs.toggleHeadingBigger,
    className: 'fa fa-header fa-header-x fa-header-bigger',
    title: 'Bigger Heading'
  },
  'heading-1': {
    name: 'heading-1',
    action: ToolBarFuncs.toggleHeading1,
    className: 'fa fa-header fa-header-x fa-header-1',
    title: 'Big Heading'
  },
  'heading-2': {
    name: 'heading-2',
    action: ToolBarFuncs.toggleHeading2,
    className: 'fa fa-header fa-header-x fa-header-2',
    title: 'Medium Heading'
  },
  'heading-3': {
    name: 'heading-3',
    action: ToolBarFuncs.toggleHeading3,
    className: 'fa fa-header fa-header-x fa-header-3',
    title: 'Small Heading'
  },
  // 'separator-1': {
  //   name: 'separator-1'
  // },
  'code': {
    name: 'code',
    action: ToolBarFuncs.toggleCodeBlock,
    className: 'fa fa-code',
    title: 'Code'
  },
  'quote': {
    name: 'quote',
    action: ToolBarFuncs.toggleBlockquote,
    className: 'fa fa-quote-left',
    title: 'Quote'
  },
  'unordered-list': {
    name: 'unordered-list',
    action: ToolBarFuncs.toggleUnorderedList,
    className: 'fa fa-list-ul',
    title: 'Generic List'
  },
  'ordered-list': {
    name: 'ordered-list',
    action: ToolBarFuncs.toggleOrderedList,
    className: 'fa fa-list-ol',
    title: 'Numbered List'
  },
  'clean-block': {
    name: 'clean-block',
    action: ToolBarFuncs.cleanBlock,
    className: 'fa fa-eraser fa-clean-block',
    title: 'Clean block'
  },
  // 'separator-2': {
  //   name: 'separator-2'
  // },
  'link': {
    name: 'link',
    action: ToolBarFuncs.drawLink,
    className: 'fa fa-link',
    title: 'Create Link'
  },
  'image': {
    name: 'image',
    action: ToolBarFuncs.drawImage,
    className: 'fa fa-picture-o',
    title: 'Insert Image'
  },
  'choose-image': {
    name: 'choose-image',
    action: function action(editor) {
      if (!editor._fileInputEl) {
        return false;
      }
      var el = editor._fileInputEl;
      el.addEventListener('change', onChange);
      el.click();
      function onChange(_x) {
        return _onChange.apply(this, arguments);
      }
      function _onChange() {
        _onChange = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
          var target, files, file, url, cm, stat;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                el.removeEventListener('change', onChange);
                _context.prev = 1;
                target = e.target;
                files = target.files;
                if (!(files && files.length > 0)) {
                  _context.next = 12;
                  break;
                }
                file = files[0];
                _context.next = 8;
                return editor._fileUploadFun(file);
              case 8:
                url = _context.sent;
                cm = editor.codemirror;
                stat = editor.getState();
                editor._replaceSelection(cm, stat.image, ['![](', '#url#)'], url);
              case 12:
                _context.next = 17;
                break;
              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](1);
                console.log('---', _context.t0);
              case 17:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[1, 14]]);
        }));
        return _onChange.apply(this, arguments);
      }
    },
    className: 'fa fa-picture-o',
    title: 'Choose Local Image'
  },
  'table': {
    name: 'table',
    action: ToolBarFuncs.drawTable,
    className: 'fa fa-table',
    title: 'Insert Table'
  },
  'horizontal-rule': {
    name: 'horizontal-rule',
    action: ToolBarFuncs.drawHorizontalRule,
    className: 'fa fa-minus',
    title: 'Insert Horizontal Line'
  },
  // 'separator-3': {
  //   name: 'separator-3'
  // },
  'preview': {
    name: 'preview',
    action: ToolBarFuncs.togglePreview,
    className: 'fa fa-eye no-disable',
    title: 'Toggle Preview'
  },
  'side-by-side': {
    name: 'side-by-side',
    action: ToolBarFuncs.toggleSideBySide,
    className: 'fa fa-columns no-disable no-mobile',
    title: 'Toggle Side by Side'
  },
  'fullscreen': {
    name: 'fullscreen',
    action: ToolBarFuncs.toggleFullScreen,
    className: 'fa fa-arrows-alt no-disable no-mobile',
    title: 'Toggle Fullscreen'
  },
  // 'separator-4': {
  //   name: 'separator-4'
  // },
  'guide': {
    name: 'guide',
    action: 'https://simplemde.com/markdown-guide',
    className: 'fa fa-question-circle',
    title: 'Markdown Guide'
  },
  // 'separator-5': {
  //   name: 'separator-5'
  // },
  'undo': {
    name: 'undo',
    action: ToolBarFuncs.undo,
    className: 'fa fa-undo no-disable',
    title: 'Undo'
  },
  'redo': {
    name: 'redo',
    action: ToolBarFuncs.redo,
    className: 'fa fa-repeat no-disable',
    title: 'Redo'
  }
};
var fullToolBarKey = new Map();
Object.entries(fullToolBar).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    key = _ref2[0],
    value = _ref2[1];
  var _className = "md-icon md-icon-".concat(key);
  if (value.className && value.className.includes('no-disable')) {
    _className += ' no-disable';
  }
  if (value.className && value.className.includes('no-mobile')) {
    _className += ' no-mobile';
  }
  value.className = _className;
  fullToolBarKey.set(key, value);
});
var separator = '|';
var defaultUploadFun = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(file) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onload = function (e) {
              var url = e.target.result;
              if (url) {
                resolve(url);
              } else {
                // eslint-disable-next-line prefer-promise-reject-errors
                reject('upload failed');
              }
            };
            reader.readAsDataURL(file);
          }));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function defaultUploadFun(_x2) {
    return _ref3.apply(this, arguments);
  };
}();
var MarkdownEditor = /*#__PURE__*/function (_Component) {
  function MarkdownEditor() {
    var _this;
    _classCallCheck(this, MarkdownEditor);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, MarkdownEditor, [].concat(args));
    _defineProperty(_this, "_boxEl", /*#__PURE__*/createRef());
    _defineProperty(_this, "_editorEl", /*#__PURE__*/createRef());
    _defineProperty(_this, "_fileInputEl", /*#__PURE__*/createRef());
    _defineProperty(_this, "$editor", null);
    _defineProperty(_this, "_defaultMinH", 300);
    return _this;
  }
  _inherits(MarkdownEditor, _Component);
  return _createClass(MarkdownEditor, [{
    key: "_inertTexts",
    get: function get() {
      var _this$props$editorCon = this.props.editorConfig,
        editorConfig = _this$props$editorCon === void 0 ? {} : _this$props$editorCon;
      var _ref4 = editorConfig,
        _ref4$insertTexts = _ref4.insertTexts,
        insertTexts = _ref4$insertTexts === void 0 ? {} : _ref4$insertTexts;
      var config = _objectSpread2({
        link: ['[', '](#url#)'],
        image: ['![](', '#url#)'],
        table: ['', '\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text     | Text     |\n\n'],
        horizontalRule: ['', '\n\n-----\n\n']
      }, insertTexts);
      return config;
    }
  }, {
    key: "_editorConfig",
    get: function get() {
      var _this$props$toolbar = this.props.toolbar,
        toolBarConfig = _this$props$toolbar === void 0 ? true : _this$props$toolbar;
      var _toolbar = !toolBarConfig ? [] : Array.isArray(toolBarConfig) ? toolBarConfig : MarkdownEditor.defaultToolBar;
      var toolBar = _toolbar.map(function (item) {
        if (typeof item === 'string') {
          if (item === separator) {
            return item;
          } else {
            if (fullToolBarKey.get(item)) {
              var config = fullToolBarKey.get(item);
              return config;
            } else {
              return null;
            }
          }
        } else if (_typeof(item) === 'object') {
          var name = item.name,
            action = item.action,
            className = item.className;
          var _item = fullToolBarKey.get(name);
          var _className = _item ? _item.className : '';
          if (!name || typeof name !== 'string') {
            console.warn("toolbar config error\uFF0C".concat(item, " name not  string"));
            return null;
          }
          if (_item) {
            // tool Name rewrite
            if (name === 'guide') {
              if (!action || typeof action !== 'string') {
                item.action = _item.action;
              }
            } else if (!action || typeof action !== 'function') {
              item.action = _item.action;
            }
          } else {
            // custom toolbar
            if (typeof className !== 'string' || !className && !_className) {
              console.warn("toolbar config error\uFF0C".concat(item, " className not exist"));
              return null;
            }
            if (!action || typeof action !== 'function') {
              console.warn("toolbar config error\uFF0C".concat(item, " action not a function"));
              return null;
            }
          }
          item.className = item.className ? item.className : _className;
          return item;
        }
        return null;
      }).filter(function (item) {
        return item;
      });
      return _objectSpread2(_objectSpread2(_objectSpread2({}, typeof this.props.initialValue === 'string' ? {
        initialValue: this.props.initialValue
      } : {}), _typeof(this.props.editorConfig) === 'object' ? this.props.editorConfig : {}), {}, {
        toolbar: toolBar.length > 0 ? toolBar : false,
        autoDownloadFontAwesome: false
      });
    }
  }, {
    key: "_hideToolbar",
    get: function get() {
      var toolbar = this.props.toolbar;
      return !toolbar || Array.isArray(toolbar) && toolbar.length === 0;
    }
  }, {
    key: "_hideStatusBar",
    get: function get() {
      var editorConfig = this.props.editorConfig;
      return !!(editorConfig && (editorConfig.status === false || Array.isArray(editorConfig.status) && editorConfig.status.length === 0));
    }
  }, {
    key: "_getEditorH",
    value: function _getEditorH(height) {
      var _height = height;
      _height -= this._hideStatusBar ? 0 : 35;
      _height -= this._hideToolbar ? 0 : 51;
      _height -= 2; // border 
      return Math.max(_height, 160);
    }
  }, {
    key: "_editorH",
    get: function get() {
      var height = this.props.height;
      if (height && Number.isInteger(height)) {
        return this._getEditorH(height);
      }
      return 'auto';
    }
  }, {
    key: "_editorMinH",
    get:
    // SimpleMDE default minH
    function get() {
      var height = this.props.minHeight;
      if (height && Number.isInteger(height)) {
        return this._getEditorH(height);
      }
      return this._defaultMinH;
    }
  }, {
    key: "_setHeightToEl",
    value: function _setHeightToEl(height, className) {
      var isMin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (isMin && this._defaultMinH === height) {
        return;
      }
      if (this._boxEl.current) {
        var boxEl = this._boxEl.current;
        if (height !== 'auto') {
          var el = boxEl.querySelector(className);
          if (el) {
            el.style[isMin ? 'minHeight' : 'height'] = height + 'px';
          }
        }
      }
    }
  }, {
    key: "_outputDOMPurify",
    value: function _outputDOMPurify() {
      if ('outputDOMPurify' in this.props) {
        return !!this.props.outputDOMPurify;
      }
      return true;
    }
  }, {
    key: "_previewDOMPurify",
    value: function _previewDOMPurify() {
      if ('previewDOMPurify' in this.props) {
        return !!this.props.previewDOMPurify;
      }
      return true;
    }
  }, {
    key: "_getMdToHtml",
    value: function _getMdToHtml(md) {
      // Initialize
      var editorConfig = this.props.editorConfig;
      var markedOptions = {
        breaks: true
      };
      // Update options
      var others = [];
      if (editorConfig && editorConfig.renderingConfig && editorConfig.renderingConfig.singleLineBreaks === false) {
        markedOptions.breaks = false;
      } else {
        markedOptions.breaks = true;
        if (editorConfig && editorConfig.renderingConfig && editorConfig.renderingConfig.codeSyntaxHighlighting === true && window.hljs) {
          // markedOptions.highlight = function(code: any) {
          //   return (window as any).hljs.highlightAuto(code).value;
          // };
          others.push(markedHighlight({
            langPrefix: 'hljs language-',
            highlight: function highlight(code, lang, info) {
              var language = window.hljs.getLanguage(lang) ? lang : 'plaintext';
              return window.hljs.highlight(code, {
                language: language
              }).value;
            }
          }));
        }
        return mdToHTML.apply(void 0, [md, markedOptions].concat(others));
      }
    }
  }, {
    key: "_getDomHtml",
    value: function _getDomHtml(html) {
      return htmlDomSanitize(html);
    }
  }, {
    key: "mdValue",
    get: function get() {
      if (!this.$editor) {
        return '';
      }
      return this.$editor.value();
    },
    set: function set(content) {
      if (this.$editor) {
        this.$editor.value(content || '');
      }
    }
  }, {
    key: "_unDOMPurifyHtml",
    get: function get() {
      var _md = this.mdValue;
      if (!_md) {
        return '';
      }
      try {
        var _html = this._getMdToHtml(_md);
        return _html;
      } catch (error) {
        console.warn('---get MarkdownEditor HTML Error ---', error);
        return '';
      }
    }
  }, {
    key: "html",
    get: function get() {
      if (!this._outputDOMPurify) {
        return this._unDOMPurifyHtml;
      }
      return this._getDomHtml(this._unDOMPurifyHtml || '');
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      if (!this._editorEl.current) {
        return;
      }
      if (this._previewDOMPurify) {
        // rewirte SimpleMDE prototype method
        EasyMDE.prototype.markdown = function (text) {
          return _this2._getDomHtml(_this2._getMdToHtml(text) || '');
        };
      }
      EasyMDE.prototype._fileInputEl = this._fileInputEl.current;
      EasyMDE.prototype._fileUploadFun = typeof this.props.imageUploadFun === 'function' ? this.props.imageUploadFun : defaultUploadFun;
      // SimpleMDE don't export codemirror method
      EasyMDE.prototype._replaceSelection = function (cm, active, startEnd, url) {
        if (/editor-preview-active/.test(cm.getWrapperElement().lastChild.className)) {
          return;
        }
        var text;
        var start = startEnd[0];
        var end = startEnd[1];
        var startPoint = cm.getCursor('start');
        var endPoint = cm.getCursor('end');
        if (url) {
          end = end.replace('#url#', url);
        }
        if (active) {
          text = cm.getLine(startPoint.line);
          start = text.slice(0, startPoint.ch);
          end = text.slice(startPoint.ch);
          cm.replaceRange(start + end, {
            line: startPoint.line,
            ch: 0
          });
        } else {
          text = cm.getSelection();
          cm.replaceSelection(start + text + end);
          startPoint.ch += start.length;
          if (startPoint !== endPoint) {
            endPoint.ch += start.length;
          }
        }
        cm.setSelection(startPoint, endPoint);
        cm.focus();
      };
      this.$editor = new EasyMDE(_objectSpread2({
        element: this._editorEl.current
      }, this._editorConfig));

      // handle height
      this._setHeightToEl(this._editorH, '.CodeMirror');
      this._setHeightToEl(this._editorMinH, '.CodeMirror', true);
      this._setHeightToEl(this._editorMinH, '.CodeMirror-scroll', true);
      if (this.props.moreExtraKeys && _typeof(this.props.moreExtraKeys) === 'object') {
        for (var _i = 0, _Object$keys = Object.keys(this.props.moreExtraKeys); _i < _Object$keys.length; _i++) {
          var key = _Object$keys[_i];
          if (typeof this.props.moreExtraKeys[key] === 'function') {
            this.$editor.codemirror.addKeyMap(_defineProperty({}, key, this.props.moreExtraKeys[key]));
          }
        }
      }
      this.$editor.codemirror.on("paste", /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(cm, e) {
          var i, len, item, pasteFile, url, stat;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (e.clipboardData && e.clipboardData.items) {
                  _context3.next = 3;
                  break;
                }
                alert("该浏览器不支持操作");
                return _context3.abrupt("return");
              case 3:
                i = 0, len = e.clipboardData.items.length;
              case 4:
                if (!(i < len)) {
                  _context3.next = 20;
                  break;
                }
                item = e.clipboardData.items[i]; // console.log(item.kind+":"+item.type);
                if (!(item.kind === "string")) {
                  _context3.next = 10;
                  break;
                }
                item.getAsString(function (str) {
                  // str 是获取到的字符串
                });
                _context3.next = 17;
                break;
              case 10:
                if (!(item.kind === "file")) {
                  _context3.next = 17;
                  break;
                }
                pasteFile = item.getAsFile(); // pasteFile就是获取到的文件
                // console.log(pasteFile);
                // fileUpload(pasteFile);
                _context3.next = 14;
                return _this2.$editor._fileUploadFun(pasteFile);
              case 14:
                url = _context3.sent;
                stat = _this2.$editor.getState();
                _this2.$editor._replaceSelection(cm, stat.image, ['![](', '#url#)'], url);
              case 17:
                i++;
                _context3.next = 4;
                break;
              case 20:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }));
        return function (_x3, _x4) {
          return _ref5.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.$editor) {
        this.$editor.toTextArea();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        ref: this._boxEl,
        className: "md-editor"
      }, /*#__PURE__*/React.createElement("textarea", {
        ref: this._editorEl
      })), /*#__PURE__*/React.createElement("input", {
        type: "file",
        ref: this._fileInputEl,
        accept: "image/x-png,image/gif,image/jpeg",
        hidden: true
      }));
    }
  }]);
}(Component);
_defineProperty(MarkdownEditor, "ToolBarFunc", ToolBarFuncs);
_defineProperty(MarkdownEditor, "fullToolBar", fullToolBar);
_defineProperty(MarkdownEditor, "defaultToolBar", ['bold', 'italic', 'strikethrough', separator, 'heading-1', 'heading-2', 'heading-3', separator, 'quote', 'unordered-list', 'ordered-list', separator, 'link', 'table', separator, 'image', 'choose-image', separator, 'preview']);

var MarkdownEditorField = function MarkdownEditorField(props) {
  var _el = useRef(null);
  useEffect(function () {
    if (_el.current && _el.current.$editor) {
      _el.current.$editor.codemirror.on('change', _onChange);
      _el.current.$editor.codemirror.on('update', _onUpdate);
    }
    return function () {
      // console.log('---MarkdownEditorField unMount---');
      if (_el.current && _el.current.$editor) {
        _el.current.$editor.codemirror.off('change', _onChange);
        _el.current.$editor.codemirror.off('update', _onUpdate);
      }
    };
  }, []);
  function _onUpdate(e) {
    if (_el.current && typeof props.onUpdate === 'function') {
      props.onUpdate(_el.current.$editor, e);
    }
  }
  function _onChange(doc, e) {
    // console.log('---MarkdownEditorField---', doc, el);
    if (_el.current && typeof props.onChange === 'function') {
      props.onChange(_el.current.mdValue, _el.current.html || '');
    }
  }
  useEffect(function () {
    if (_el.current) {
      if (props.value !== _el.current.mdValue) {
        _el.current.mdValue = props.value || '';
      }
    }
  }, [props.value]);
  return /*#__PURE__*/React.createElement(MarkdownEditor, _extends({
    ref: _el
  }, props));
};

export { MarkdownEditorField, MarkdownEditor as default, htmlDomSanitize, mdToHTML };
