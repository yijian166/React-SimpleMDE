(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('easymde')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'easymde'], factory) :
    (global = global || self, factory(global['react-markdown-editor-smde'] = {}, global.React, global.EasyMDE));
}(this, (function (exports, React, EasyMDE) { 'use strict';

    var React__default = 'default' in React ? React['default'] : React;
    EasyMDE = EasyMDE && Object.prototype.hasOwnProperty.call(EasyMDE, 'default') ? EasyMDE['default'] : EasyMDE;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    function styleInject(css, ref) {
      if ( ref === void 0 ) ref = {};
      var insertAt = ref.insertAt;

      if (!css || typeof document === 'undefined') { return; }

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

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var marked_umd = createCommonjsModule(function (module, exports) {
    /**
     * marked v4.3.0 - a markdown parser
     * Copyright (c) 2011-2023, Christopher Jeffrey. (MIT Licensed)
     * https://github.com/markedjs/marked
     */

    /**
     * DO NOT EDIT THIS FILE
     * The code in this file is generated from files in ./src/
     */

    (function (global, factory) {
       factory(exports) ;
    })(commonjsGlobal, (function (exports) {
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }
      function _extends() {
        _extends = Object.assign ? Object.assign.bind() : function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        return _extends.apply(this, arguments);
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
      function _createForOfIteratorHelperLoose(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (it) return (it = it.call(o)).next.bind(it);
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it) o = it;
          var i = 0;
          return function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }

      function getDefaults() {
        return {
          async: false,
          baseUrl: null,
          breaks: false,
          extensions: null,
          gfm: true,
          headerIds: true,
          headerPrefix: '',
          highlight: null,
          hooks: null,
          langPrefix: 'language-',
          mangle: true,
          pedantic: false,
          renderer: null,
          sanitize: false,
          sanitizer: null,
          silent: false,
          smartypants: false,
          tokenizer: null,
          walkTokens: null,
          xhtml: false
        };
      }
      exports.defaults = getDefaults();
      function changeDefaults(newDefaults) {
        exports.defaults = newDefaults;
      }

      /**
       * Helpers
       */
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
      var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;

      /**
       * @param {string} html
       */
      function unescape(html) {
        // explicitly match decimal, hex, and named HTML entities
        return html.replace(unescapeTest, function (_, n) {
          n = n.toLowerCase();
          if (n === 'colon') return ':';
          if (n.charAt(0) === '#') {
            return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
          }
          return '';
        });
      }
      var caret = /(^|[^\[])\^/g;

      /**
       * @param {string | RegExp} regex
       * @param {string} opt
       */
      function edit(regex, opt) {
        regex = typeof regex === 'string' ? regex : regex.source;
        opt = opt || '';
        var obj = {
          replace: function replace(name, val) {
            val = val.source || val;
            val = val.replace(caret, '$1');
            regex = regex.replace(name, val);
            return obj;
          },
          getRegex: function getRegex() {
            return new RegExp(regex, opt);
          }
        };
        return obj;
      }
      var nonWordAndColonTest = /[^\w:]/g;
      var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

      /**
       * @param {boolean} sanitize
       * @param {string} base
       * @param {string} href
       */
      function cleanUrl(sanitize, base, href) {
        if (sanitize) {
          var prot;
          try {
            prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, '').toLowerCase();
          } catch (e) {
            return null;
          }
          if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
            return null;
          }
        }
        if (base && !originIndependentUrl.test(href)) {
          href = resolveUrl(base, href);
        }
        try {
          href = encodeURI(href).replace(/%25/g, '%');
        } catch (e) {
          return null;
        }
        return href;
      }
      var baseUrls = {};
      var justDomain = /^[^:]+:\/*[^/]*$/;
      var protocol = /^([^:]+:)[\s\S]*$/;
      var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;

      /**
       * @param {string} base
       * @param {string} href
       */
      function resolveUrl(base, href) {
        if (!baseUrls[' ' + base]) {
          // we can ignore everything in base after the last slash of its path component,
          // but we might need to add _that_
          // https://tools.ietf.org/html/rfc3986#section-3
          if (justDomain.test(base)) {
            baseUrls[' ' + base] = base + '/';
          } else {
            baseUrls[' ' + base] = rtrim(base, '/', true);
          }
        }
        base = baseUrls[' ' + base];
        var relativeBase = base.indexOf(':') === -1;
        if (href.substring(0, 2) === '//') {
          if (relativeBase) {
            return href;
          }
          return base.replace(protocol, '$1') + href;
        } else if (href.charAt(0) === '/') {
          if (relativeBase) {
            return href;
          }
          return base.replace(domain, '$1') + href;
        } else {
          return base + href;
        }
      }
      var noopTest = {
        exec: function noopTest() {}
      };
      function splitCells(tableRow, count) {
        // ensure that every cell-delimiting pipe has a space
        // before it to distinguish it from an escaped pipe
        var row = tableRow.replace(/\|/g, function (match, offset, str) {
            var escaped = false,
              curr = offset;
            while (--curr >= 0 && str[curr] === '\\') {
              escaped = !escaped;
            }
            if (escaped) {
              // odd number of slashes means | is escaped
              // so we leave it alone
              return '|';
            } else {
              // add space before unescaped |
              return ' |';
            }
          }),
          cells = row.split(/ \|/);
        var i = 0;

        // First/last cell in a row cannot be empty if it has no leading/trailing pipe
        if (!cells[0].trim()) {
          cells.shift();
        }
        if (cells.length > 0 && !cells[cells.length - 1].trim()) {
          cells.pop();
        }
        if (cells.length > count) {
          cells.splice(count);
        } else {
          while (cells.length < count) {
            cells.push('');
          }
        }
        for (; i < cells.length; i++) {
          // leading or trailing whitespace is ignored per the gfm spec
          cells[i] = cells[i].trim().replace(/\\\|/g, '|');
        }
        return cells;
      }

      /**
       * Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
       * /c*$/ is vulnerable to REDOS.
       *
       * @param {string} str
       * @param {string} c
       * @param {boolean} invert Remove suffix of non-c chars instead. Default falsey.
       */
      function rtrim(str, c, invert) {
        var l = str.length;
        if (l === 0) {
          return '';
        }

        // Length of suffix matching the invert condition.
        var suffLen = 0;

        // Step left until we fail to match the invert condition.
        while (suffLen < l) {
          var currChar = str.charAt(l - suffLen - 1);
          if (currChar === c && !invert) {
            suffLen++;
          } else if (currChar !== c && invert) {
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
        var l = str.length;
        var level = 0,
          i = 0;
        for (; i < l; i++) {
          if (str[i] === '\\') {
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
        return -1;
      }
      function checkSanitizeDeprecation(opt) {
        if (opt && opt.sanitize && !opt.silent) {
          console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
        }
      }

      // copied from https://stackoverflow.com/a/5450113/806777
      /**
       * @param {string} pattern
       * @param {number} count
       */
      function repeatString(pattern, count) {
        if (count < 1) {
          return '';
        }
        var result = '';
        while (count > 1) {
          if (count & 1) {
            result += pattern;
          }
          count >>= 1;
          pattern += pattern;
        }
        return result + pattern;
      }

      function outputLink(cap, link, raw, lexer) {
        var href = link.href;
        var title = link.title ? escape(link.title) : null;
        var text = cap[1].replace(/\\([\[\]])/g, '$1');
        if (cap[0].charAt(0) !== '!') {
          lexer.state.inLink = true;
          var token = {
            type: 'link',
            raw: raw,
            href: href,
            title: title,
            text: text,
            tokens: lexer.inlineTokens(text)
          };
          lexer.state.inLink = false;
          return token;
        }
        return {
          type: 'image',
          raw: raw,
          href: href,
          title: title,
          text: escape(text)
        };
      }
      function indentCodeCompensation(raw, text) {
        var matchIndentToCode = raw.match(/^(\s+)(?:```)/);
        if (matchIndentToCode === null) {
          return text;
        }
        var indentToCode = matchIndentToCode[1];
        return text.split('\n').map(function (node) {
          var matchIndentInNode = node.match(/^\s+/);
          if (matchIndentInNode === null) {
            return node;
          }
          var indentInNode = matchIndentInNode[0];
          if (indentInNode.length >= indentToCode.length) {
            return node.slice(indentToCode.length);
          }
          return node;
        }).join('\n');
      }

      /**
       * Tokenizer
       */
      var Tokenizer = /*#__PURE__*/function () {
        function Tokenizer(options) {
          this.options = options || exports.defaults;
        }
        var _proto = Tokenizer.prototype;
        _proto.space = function space(src) {
          var cap = this.rules.block.newline.exec(src);
          if (cap && cap[0].length > 0) {
            return {
              type: 'space',
              raw: cap[0]
            };
          }
        };
        _proto.code = function code(src) {
          var cap = this.rules.block.code.exec(src);
          if (cap) {
            var text = cap[0].replace(/^ {1,4}/gm, '');
            return {
              type: 'code',
              raw: cap[0],
              codeBlockStyle: 'indented',
              text: !this.options.pedantic ? rtrim(text, '\n') : text
            };
          }
        };
        _proto.fences = function fences(src) {
          var cap = this.rules.block.fences.exec(src);
          if (cap) {
            var raw = cap[0];
            var text = indentCodeCompensation(raw, cap[3] || '');
            return {
              type: 'code',
              raw: raw,
              lang: cap[2] ? cap[2].trim().replace(this.rules.inline._escapes, '$1') : cap[2],
              text: text
            };
          }
        };
        _proto.heading = function heading(src) {
          var cap = this.rules.block.heading.exec(src);
          if (cap) {
            var text = cap[2].trim();

            // remove trailing #s
            if (/#$/.test(text)) {
              var trimmed = rtrim(text, '#');
              if (this.options.pedantic) {
                text = trimmed.trim();
              } else if (!trimmed || / $/.test(trimmed)) {
                // CommonMark requires space before trailing #s
                text = trimmed.trim();
              }
            }
            return {
              type: 'heading',
              raw: cap[0],
              depth: cap[1].length,
              text: text,
              tokens: this.lexer.inline(text)
            };
          }
        };
        _proto.hr = function hr(src) {
          var cap = this.rules.block.hr.exec(src);
          if (cap) {
            return {
              type: 'hr',
              raw: cap[0]
            };
          }
        };
        _proto.blockquote = function blockquote(src) {
          var cap = this.rules.block.blockquote.exec(src);
          if (cap) {
            var text = cap[0].replace(/^ *>[ \t]?/gm, '');
            var top = this.lexer.state.top;
            this.lexer.state.top = true;
            var tokens = this.lexer.blockTokens(text);
            this.lexer.state.top = top;
            return {
              type: 'blockquote',
              raw: cap[0],
              tokens: tokens,
              text: text
            };
          }
        };
        _proto.list = function list(src) {
          var cap = this.rules.block.list.exec(src);
          if (cap) {
            var raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly;
            var bull = cap[1].trim();
            var isordered = bull.length > 1;
            var list = {
              type: 'list',
              raw: '',
              ordered: isordered,
              start: isordered ? +bull.slice(0, -1) : '',
              loose: false,
              items: []
            };
            bull = isordered ? "\\d{1,9}\\" + bull.slice(-1) : "\\" + bull;
            if (this.options.pedantic) {
              bull = isordered ? bull : '[*+-]';
            }

            // Get next list item
            var itemRegex = new RegExp("^( {0,3}" + bull + ")((?:[\t ][^\\n]*)?(?:\\n|$))");

            // Check if current bullet point can start a new List Item
            while (src) {
              endEarly = false;
              if (!(cap = itemRegex.exec(src))) {
                break;
              }
              if (this.rules.block.hr.test(src)) {
                // End list if bullet was actually HR (possibly move into itemRegex?)
                break;
              }
              raw = cap[0];
              src = src.substring(raw.length);
              line = cap[2].split('\n', 1)[0].replace(/^\t+/, function (t) {
                return ' '.repeat(3 * t.length);
              });
              nextLine = src.split('\n', 1)[0];
              if (this.options.pedantic) {
                indent = 2;
                itemContents = line.trimLeft();
              } else {
                indent = cap[2].search(/[^ ]/); // Find first non-space char
                indent = indent > 4 ? 1 : indent; // Treat indented code blocks (> 4 spaces) as having only 1 indent
                itemContents = line.slice(indent);
                indent += cap[1].length;
              }
              blankLine = false;
              if (!line && /^ *$/.test(nextLine)) {
                // Items begin with at most one blank line
                raw += nextLine + '\n';
                src = src.substring(nextLine.length + 1);
                endEarly = true;
              }
              if (!endEarly) {
                var nextBulletRegex = new RegExp("^ {0," + Math.min(3, indent - 1) + "}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))");
                var hrRegex = new RegExp("^ {0," + Math.min(3, indent - 1) + "}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)");
                var fencesBeginRegex = new RegExp("^ {0," + Math.min(3, indent - 1) + "}(?:```|~~~)");
                var headingBeginRegex = new RegExp("^ {0," + Math.min(3, indent - 1) + "}#");

                // Check if following lines should be included in List Item
                while (src) {
                  rawLine = src.split('\n', 1)[0];
                  nextLine = rawLine;

                  // Re-align to follow commonmark nesting rules
                  if (this.options.pedantic) {
                    nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ');
                  }

                  // End list item if found code fences
                  if (fencesBeginRegex.test(nextLine)) {
                    break;
                  }

                  // End list item if found start of new heading
                  if (headingBeginRegex.test(nextLine)) {
                    break;
                  }

                  // End list item if found start of new bullet
                  if (nextBulletRegex.test(nextLine)) {
                    break;
                  }

                  // Horizontal rule found
                  if (hrRegex.test(src)) {
                    break;
                  }
                  if (nextLine.search(/[^ ]/) >= indent || !nextLine.trim()) {
                    // Dedent if possible
                    itemContents += '\n' + nextLine.slice(indent);
                  } else {
                    // not enough indentation
                    if (blankLine) {
                      break;
                    }

                    // paragraph continuation unless last line was a different block level element
                    if (line.search(/[^ ]/) >= 4) {
                      // indented code block
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
                    itemContents += '\n' + nextLine;
                  }
                  if (!blankLine && !nextLine.trim()) {
                    // Check if current line is blank
                    blankLine = true;
                  }
                  raw += rawLine + '\n';
                  src = src.substring(rawLine.length + 1);
                  line = nextLine.slice(indent);
                }
              }
              if (!list.loose) {
                // If the previous item ended with a blank line, the list is loose
                if (endsWithBlankLine) {
                  list.loose = true;
                } else if (/\n *\n *$/.test(raw)) {
                  endsWithBlankLine = true;
                }
              }

              // Check for task list items
              if (this.options.gfm) {
                istask = /^\[[ xX]\] /.exec(itemContents);
                if (istask) {
                  ischecked = istask[0] !== '[ ] ';
                  itemContents = itemContents.replace(/^\[[ xX]\] +/, '');
                }
              }
              list.items.push({
                type: 'list_item',
                raw: raw,
                task: !!istask,
                checked: ischecked,
                loose: false,
                text: itemContents
              });
              list.raw += raw;
            }

            // Do not consume newlines at end of final item. Alternatively, make itemRegex *start* with any newlines to simplify/speed up endsWithBlankLine logic
            list.items[list.items.length - 1].raw = raw.trimRight();
            list.items[list.items.length - 1].text = itemContents.trimRight();
            list.raw = list.raw.trimRight();
            var l = list.items.length;

            // Item child tokens handled here at end because we needed to have the final item to trim it first
            for (i = 0; i < l; i++) {
              this.lexer.state.top = false;
              list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
              if (!list.loose) {
                // Check if list should be loose
                var spacers = list.items[i].tokens.filter(function (t) {
                  return t.type === 'space';
                });
                var hasMultipleLineBreaks = spacers.length > 0 && spacers.some(function (t) {
                  return /\n.*\n/.test(t.raw);
                });
                list.loose = hasMultipleLineBreaks;
              }
            }

            // Set all items to loose if list is loose
            if (list.loose) {
              for (i = 0; i < l; i++) {
                list.items[i].loose = true;
              }
            }
            return list;
          }
        };
        _proto.html = function html(src) {
          var cap = this.rules.block.html.exec(src);
          if (cap) {
            var token = {
              type: 'html',
              raw: cap[0],
              pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
              text: cap[0]
            };
            if (this.options.sanitize) {
              var text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]);
              token.type = 'paragraph';
              token.text = text;
              token.tokens = this.lexer.inline(text);
            }
            return token;
          }
        };
        _proto.def = function def(src) {
          var cap = this.rules.block.def.exec(src);
          if (cap) {
            var tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
            var href = cap[2] ? cap[2].replace(/^<(.*)>$/, '$1').replace(this.rules.inline._escapes, '$1') : '';
            var title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline._escapes, '$1') : cap[3];
            return {
              type: 'def',
              tag: tag,
              raw: cap[0],
              href: href,
              title: title
            };
          }
        };
        _proto.table = function table(src) {
          var cap = this.rules.block.table.exec(src);
          if (cap) {
            var item = {
              type: 'table',
              header: splitCells(cap[1]).map(function (c) {
                return {
                  text: c
                };
              }),
              align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
              rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, '').split('\n') : []
            };
            if (item.header.length === item.align.length) {
              item.raw = cap[0];
              var l = item.align.length;
              var i, j, k, row;
              for (i = 0; i < l; i++) {
                if (/^ *-+: *$/.test(item.align[i])) {
                  item.align[i] = 'right';
                } else if (/^ *:-+: *$/.test(item.align[i])) {
                  item.align[i] = 'center';
                } else if (/^ *:-+ *$/.test(item.align[i])) {
                  item.align[i] = 'left';
                } else {
                  item.align[i] = null;
                }
              }
              l = item.rows.length;
              for (i = 0; i < l; i++) {
                item.rows[i] = splitCells(item.rows[i], item.header.length).map(function (c) {
                  return {
                    text: c
                  };
                });
              }

              // parse child tokens inside headers and cells

              // header child tokens
              l = item.header.length;
              for (j = 0; j < l; j++) {
                item.header[j].tokens = this.lexer.inline(item.header[j].text);
              }

              // cell child tokens
              l = item.rows.length;
              for (j = 0; j < l; j++) {
                row = item.rows[j];
                for (k = 0; k < row.length; k++) {
                  row[k].tokens = this.lexer.inline(row[k].text);
                }
              }
              return item;
            }
          }
        };
        _proto.lheading = function lheading(src) {
          var cap = this.rules.block.lheading.exec(src);
          if (cap) {
            return {
              type: 'heading',
              raw: cap[0],
              depth: cap[2].charAt(0) === '=' ? 1 : 2,
              text: cap[1],
              tokens: this.lexer.inline(cap[1])
            };
          }
        };
        _proto.paragraph = function paragraph(src) {
          var cap = this.rules.block.paragraph.exec(src);
          if (cap) {
            var text = cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1];
            return {
              type: 'paragraph',
              raw: cap[0],
              text: text,
              tokens: this.lexer.inline(text)
            };
          }
        };
        _proto.text = function text(src) {
          var cap = this.rules.block.text.exec(src);
          if (cap) {
            return {
              type: 'text',
              raw: cap[0],
              text: cap[0],
              tokens: this.lexer.inline(cap[0])
            };
          }
        };
        _proto.escape = function escape$1(src) {
          var cap = this.rules.inline.escape.exec(src);
          if (cap) {
            return {
              type: 'escape',
              raw: cap[0],
              text: escape(cap[1])
            };
          }
        };
        _proto.tag = function tag(src) {
          var cap = this.rules.inline.tag.exec(src);
          if (cap) {
            if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
              this.lexer.state.inLink = true;
            } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
              this.lexer.state.inLink = false;
            }
            if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
              this.lexer.state.inRawBlock = true;
            } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
              this.lexer.state.inRawBlock = false;
            }
            return {
              type: this.options.sanitize ? 'text' : 'html',
              raw: cap[0],
              inLink: this.lexer.state.inLink,
              inRawBlock: this.lexer.state.inRawBlock,
              text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0]
            };
          }
        };
        _proto.link = function link(src) {
          var cap = this.rules.inline.link.exec(src);
          if (cap) {
            var trimmedUrl = cap[2].trim();
            if (!this.options.pedantic && /^</.test(trimmedUrl)) {
              // commonmark requires matching angle brackets
              if (!/>$/.test(trimmedUrl)) {
                return;
              }

              // ending angle bracket cannot be escaped
              var rtrimSlash = rtrim(trimmedUrl.slice(0, -1), '\\');
              if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
                return;
              }
            } else {
              // find closing parenthesis
              var lastParenIndex = findClosingBracket(cap[2], '()');
              if (lastParenIndex > -1) {
                var start = cap[0].indexOf('!') === 0 ? 5 : 4;
                var linkLen = start + cap[1].length + lastParenIndex;
                cap[2] = cap[2].substring(0, lastParenIndex);
                cap[0] = cap[0].substring(0, linkLen).trim();
                cap[3] = '';
              }
            }
            var href = cap[2];
            var title = '';
            if (this.options.pedantic) {
              // split pedantic href and title
              var link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
              if (link) {
                href = link[1];
                title = link[3];
              }
            } else {
              title = cap[3] ? cap[3].slice(1, -1) : '';
            }
            href = href.trim();
            if (/^</.test(href)) {
              if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
                // pedantic allows starting angle bracket without ending angle bracket
                href = href.slice(1);
              } else {
                href = href.slice(1, -1);
              }
            }
            return outputLink(cap, {
              href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
              title: title ? title.replace(this.rules.inline._escapes, '$1') : title
            }, cap[0], this.lexer);
          }
        };
        _proto.reflink = function reflink(src, links) {
          var cap;
          if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
            var link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
            link = links[link.toLowerCase()];
            if (!link) {
              var text = cap[0].charAt(0);
              return {
                type: 'text',
                raw: text,
                text: text
              };
            }
            return outputLink(cap, link, cap[0], this.lexer);
          }
        };
        _proto.emStrong = function emStrong(src, maskedSrc, prevChar) {
          if (prevChar === void 0) {
            prevChar = '';
          }
          var match = this.rules.inline.emStrong.lDelim.exec(src);
          if (!match) return;

          // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well
          if (match[3] && prevChar.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/)) return;
          var nextChar = match[1] || match[2] || '';
          if (!nextChar || nextChar && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar))) {
            var lLength = match[0].length - 1;
            var rDelim,
              rLength,
              delimTotal = lLength,
              midDelimTotal = 0;
            var endReg = match[0][0] === '*' ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
            endReg.lastIndex = 0;

            // Clip maskedSrc to same section of string as src (move to lexer?)
            maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
            while ((match = endReg.exec(maskedSrc)) != null) {
              rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
              if (!rDelim) continue; // skip single * in __abc*abc__

              rLength = rDelim.length;
              if (match[3] || match[4]) {
                // found another Left Delim
                delimTotal += rLength;
                continue;
              } else if (match[5] || match[6]) {
                // either Left or Right Delim
                if (lLength % 3 && !((lLength + rLength) % 3)) {
                  midDelimTotal += rLength;
                  continue; // CommonMark Emphasis Rules 9-10
                }
              }

              delimTotal -= rLength;
              if (delimTotal > 0) continue; // Haven't found enough closing delimiters

              // Remove extra characters. *a*** -> *a*
              rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
              var raw = src.slice(0, lLength + match.index + (match[0].length - rDelim.length) + rLength);

              // Create `em` if smallest delimiter has odd char count. *a***
              if (Math.min(lLength, rLength) % 2) {
                var _text = raw.slice(1, -1);
                return {
                  type: 'em',
                  raw: raw,
                  text: _text,
                  tokens: this.lexer.inlineTokens(_text)
                };
              }

              // Create 'strong' if smallest delimiter has even char count. **a***
              var text = raw.slice(2, -2);
              return {
                type: 'strong',
                raw: raw,
                text: text,
                tokens: this.lexer.inlineTokens(text)
              };
            }
          }
        };
        _proto.codespan = function codespan(src) {
          var cap = this.rules.inline.code.exec(src);
          if (cap) {
            var text = cap[2].replace(/\n/g, ' ');
            var hasNonSpaceChars = /[^ ]/.test(text);
            var hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
            if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
              text = text.substring(1, text.length - 1);
            }
            text = escape(text, true);
            return {
              type: 'codespan',
              raw: cap[0],
              text: text
            };
          }
        };
        _proto.br = function br(src) {
          var cap = this.rules.inline.br.exec(src);
          if (cap) {
            return {
              type: 'br',
              raw: cap[0]
            };
          }
        };
        _proto.del = function del(src) {
          var cap = this.rules.inline.del.exec(src);
          if (cap) {
            return {
              type: 'del',
              raw: cap[0],
              text: cap[2],
              tokens: this.lexer.inlineTokens(cap[2])
            };
          }
        };
        _proto.autolink = function autolink(src, mangle) {
          var cap = this.rules.inline.autolink.exec(src);
          if (cap) {
            var text, href;
            if (cap[2] === '@') {
              text = escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
              href = 'mailto:' + text;
            } else {
              text = escape(cap[1]);
              href = text;
            }
            return {
              type: 'link',
              raw: cap[0],
              text: text,
              href: href,
              tokens: [{
                type: 'text',
                raw: text,
                text: text
              }]
            };
          }
        };
        _proto.url = function url(src, mangle) {
          var cap;
          if (cap = this.rules.inline.url.exec(src)) {
            var text, href;
            if (cap[2] === '@') {
              text = escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
              href = 'mailto:' + text;
            } else {
              // do extended autolink path validation
              var prevCapZero;
              do {
                prevCapZero = cap[0];
                cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
              } while (prevCapZero !== cap[0]);
              text = escape(cap[0]);
              if (cap[1] === 'www.') {
                href = 'http://' + cap[0];
              } else {
                href = cap[0];
              }
            }
            return {
              type: 'link',
              raw: cap[0],
              text: text,
              href: href,
              tokens: [{
                type: 'text',
                raw: text,
                text: text
              }]
            };
          }
        };
        _proto.inlineText = function inlineText(src, smartypants) {
          var cap = this.rules.inline.text.exec(src);
          if (cap) {
            var text;
            if (this.lexer.state.inRawBlock) {
              text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
            } else {
              text = escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
            }
            return {
              type: 'text',
              raw: cap[0],
              text: text
            };
          }
        };
        return Tokenizer;
      }();

      /**
       * Block-Level Grammar
       */
      var block = {
        newline: /^(?: *(?:\n|$))+/,
        code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
        fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
        hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
        heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
        blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
        list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
        html: '^ {0,3}(?:' // optional indentation
        + '<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
        + '|comment[^\\n]*(\\n+|$)' // (2)
        + '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' // (3)
        + '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' // (4)
        + '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' // (5)
        + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (6)
        + '|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) open tag
        + '|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) closing tag
        + ')',
        def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
        table: noopTest,
        lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
        // regex template, placeholders will be replaced according to different paragraph
        // interruption rules of commonmark and the original markdown spec:
        _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
        text: /^[^\n]+/
      };
      block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
      block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
      block.def = edit(block.def).replace('label', block._label).replace('title', block._title).getRegex();
      block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
      block.listItemStart = edit(/^( *)(bull) */).replace('bull', block.bullet).getRegex();
      block.list = edit(block.list).replace(/bull/g, block.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block.def.source + ')').getRegex();
      block._tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
      block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
      block.html = edit(block.html, 'i').replace('comment', block._comment).replace('tag', block._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
      block.paragraph = edit(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
      .replace('|table', '').replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
      .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
      .getRegex();
      block.blockquote = edit(block.blockquote).replace('paragraph', block.paragraph).getRegex();

      /**
       * Normal Block Grammar
       */

      block.normal = _extends({}, block);

      /**
       * GFM Block Grammar
       */

      block.gfm = _extends({}, block.normal, {
        table: '^ *([^\\n ].*\\|.*)\\n' // Header
        + ' {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?' // Align
        + '(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells
      });

      block.gfm.table = edit(block.gfm.table).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
      .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
      .getRegex();
      block.gfm.paragraph = edit(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
      .replace('table', block.gfm.table) // interrupt paragraphs with table
      .replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
      .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
      .getRegex();
      /**
       * Pedantic grammar (original John Gruber's loose markdown specification)
       */

      block.pedantic = _extends({}, block.normal, {
        html: edit('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
        + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', block._comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^(#{1,6})(.*)(?:\n+|$)/,
        fences: noopTest,
        // fences not supported
        lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
        paragraph: edit(block.normal._paragraph).replace('hr', block.hr).replace('heading', ' *#{1,6} *[^\n]').replace('lheading', block.lheading).replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').getRegex()
      });

      /**
       * Inline-Level Grammar
       */
      var inline = {
        escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
        autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
        url: noopTest,
        tag: '^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
        + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
        + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
        + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
        + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
        // CDATA section
        link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
        reflink: /^!?\[(label)\]\[(ref)\]/,
        nolink: /^!?\[(ref)\](?:\[\])?/,
        reflinkSearch: 'reflink|nolink(?!\\()',
        emStrong: {
          lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
          //        (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
          //          () Skip orphan inside strong                                      () Consume to delim     (1) #***                (2) a***#, a***                             (3) #***a, ***a                 (4) ***#              (5) #***#                 (6) a***a
          rDelimAst: /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
          rDelimUnd: /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ // ^- Not allowed for _
        },

        code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
        br: /^( {2,}|\\)\n(?!\s*$)/,
        del: noopTest,
        text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
        punctuation: /^([\spunctuation])/
      };

      // list of punctuation marks from CommonMark spec
      // without * and _ to handle the different emphasis markers * and _
      inline._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
      inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex();

      // sequences em should skip over [title](link), `code`, <html>
      inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
      // lookbehind is not available on Safari as of version 16
      // inline.escapedEmSt = /(?<=(?:^|[^\\)(?:\\[^])*)\\[*_]/g;
      inline.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g;
      inline._comment = edit(block._comment).replace('(?:-->|$)', '-->').getRegex();
      inline.emStrong.lDelim = edit(inline.emStrong.lDelim).replace(/punct/g, inline._punctuation).getRegex();
      inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, 'g').replace(/punct/g, inline._punctuation).getRegex();
      inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, 'g').replace(/punct/g, inline._punctuation).getRegex();
      inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
      inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
      inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
      inline.autolink = edit(inline.autolink).replace('scheme', inline._scheme).replace('email', inline._email).getRegex();
      inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
      inline.tag = edit(inline.tag).replace('comment', inline._comment).replace('attribute', inline._attribute).getRegex();
      inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
      inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
      inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
      inline.link = edit(inline.link).replace('label', inline._label).replace('href', inline._href).replace('title', inline._title).getRegex();
      inline.reflink = edit(inline.reflink).replace('label', inline._label).replace('ref', block._label).getRegex();
      inline.nolink = edit(inline.nolink).replace('ref', block._label).getRegex();
      inline.reflinkSearch = edit(inline.reflinkSearch, 'g').replace('reflink', inline.reflink).replace('nolink', inline.nolink).getRegex();

      /**
       * Normal Inline Grammar
       */

      inline.normal = _extends({}, inline);

      /**
       * Pedantic Inline Grammar
       */

      inline.pedantic = _extends({}, inline.normal, {
        strong: {
          start: /^__|\*\*/,
          middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
          endAst: /\*\*(?!\*)/g,
          endUnd: /__(?!_)/g
        },
        em: {
          start: /^_|\*/,
          middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
          endAst: /\*(?!\*)/g,
          endUnd: /_(?!_)/g
        },
        link: edit(/^!?\[(label)\]\((.*?)\)/).replace('label', inline._label).getRegex(),
        reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline._label).getRegex()
      });

      /**
       * GFM Inline Grammar
       */

      inline.gfm = _extends({}, inline.normal, {
        escape: edit(inline.escape).replace('])', '~|])').getRegex(),
        _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
        url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
        _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
        text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
      });
      inline.gfm.url = edit(inline.gfm.url, 'i').replace('email', inline.gfm._extended_email).getRegex();
      /**
       * GFM + Line Breaks Inline Grammar
       */

      inline.breaks = _extends({}, inline.gfm, {
        br: edit(inline.br).replace('{2,}', '*').getRegex(),
        text: edit(inline.gfm.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex()
      });

      /**
       * smartypants text replacement
       * @param {string} text
       */
      function smartypants(text) {
        return text
        // em-dashes
        .replace(/---/g, "\u2014")
        // en-dashes
        .replace(/--/g, "\u2013")
        // opening singles
        .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018")
        // closing singles & apostrophes
        .replace(/'/g, "\u2019")
        // opening doubles
        .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C")
        // closing doubles
        .replace(/"/g, "\u201D")
        // ellipses
        .replace(/\.{3}/g, "\u2026");
      }

      /**
       * mangle email addresses
       * @param {string} text
       */
      function mangle(text) {
        var out = '',
          i,
          ch;
        var l = text.length;
        for (i = 0; i < l; i++) {
          ch = text.charCodeAt(i);
          if (Math.random() > 0.5) {
            ch = 'x' + ch.toString(16);
          }
          out += '&#' + ch + ';';
        }
        return out;
      }

      /**
       * Block Lexer
       */
      var Lexer = /*#__PURE__*/function () {
        function Lexer(options) {
          this.tokens = [];
          this.tokens.links = Object.create(null);
          this.options = options || exports.defaults;
          this.options.tokenizer = this.options.tokenizer || new Tokenizer();
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
        /**
         * Static Lex Method
         */
        Lexer.lex = function lex(src, options) {
          var lexer = new Lexer(options);
          return lexer.lex(src);
        }

        /**
         * Static Lex Inline Method
         */;
        Lexer.lexInline = function lexInline(src, options) {
          var lexer = new Lexer(options);
          return lexer.inlineTokens(src);
        }

        /**
         * Preprocessing
         */;
        var _proto = Lexer.prototype;
        _proto.lex = function lex(src) {
          src = src.replace(/\r\n|\r/g, '\n');
          this.blockTokens(src, this.tokens);
          var next;
          while (next = this.inlineQueue.shift()) {
            this.inlineTokens(next.src, next.tokens);
          }
          return this.tokens;
        }

        /**
         * Lexing
         */;
        _proto.blockTokens = function blockTokens(src, tokens) {
          var _this = this;
          if (tokens === void 0) {
            tokens = [];
          }
          if (this.options.pedantic) {
            src = src.replace(/\t/g, '    ').replace(/^ +$/gm, '');
          } else {
            src = src.replace(/^( *)(\t+)/gm, function (_, leading, tabs) {
              return leading + '    '.repeat(tabs.length);
            });
          }
          var token, lastToken, cutSrc, lastParagraphClipped;
          while (src) {
            if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(function (extTokenizer) {
              if (token = extTokenizer.call({
                lexer: _this
              }, src, tokens)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                return true;
              }
              return false;
            })) {
              continue;
            }

            // newline
            if (token = this.tokenizer.space(src)) {
              src = src.substring(token.raw.length);
              if (token.raw.length === 1 && tokens.length > 0) {
                // if there's a single \n as a spacer, it's terminating the last line,
                // so move it there so that we don't get unecessary paragraph tags
                tokens[tokens.length - 1].raw += '\n';
              } else {
                tokens.push(token);
              }
              continue;
            }

            // code
            if (token = this.tokenizer.code(src)) {
              src = src.substring(token.raw.length);
              lastToken = tokens[tokens.length - 1];
              // An indented code block cannot interrupt a paragraph.
              if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
                lastToken.raw += '\n' + token.raw;
                lastToken.text += '\n' + token.text;
                this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
              } else {
                tokens.push(token);
              }
              continue;
            }

            // fences
            if (token = this.tokenizer.fences(src)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              continue;
            }

            // heading
            if (token = this.tokenizer.heading(src)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              continue;
            }

            // hr
            if (token = this.tokenizer.hr(src)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              continue;
            }

            // blockquote
            if (token = this.tokenizer.blockquote(src)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              continue;
            }

            // list
            if (token = this.tokenizer.list(src)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              continue;
            }

            // html
            if (token = this.tokenizer.html(src)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              continue;
            }

            // def
            if (token = this.tokenizer.def(src)) {
              src = src.substring(token.raw.length);
              lastToken = tokens[tokens.length - 1];
              if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
                lastToken.raw += '\n' + token.raw;
                lastToken.text += '\n' + token.raw;
                this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
              } else if (!this.tokens.links[token.tag]) {
                this.tokens.links[token.tag] = {
                  href: token.href,
                  title: token.title
                };
              }
              continue;
            }

            // table (gfm)
            if (token = this.tokenizer.table(src)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              continue;
            }

            // lheading
            if (token = this.tokenizer.lheading(src)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              continue;
            }

            // top-level paragraph
            // prevent paragraph consuming extensions by clipping 'src' to extension start
            cutSrc = src;
            if (this.options.extensions && this.options.extensions.startBlock) {
              (function () {
                var startIndex = Infinity;
                var tempSrc = src.slice(1);
                var tempStart = void 0;
                _this.options.extensions.startBlock.forEach(function (getStartIndex) {
                  tempStart = getStartIndex.call({
                    lexer: this
                  }, tempSrc);
                  if (typeof tempStart === 'number' && tempStart >= 0) {
                    startIndex = Math.min(startIndex, tempStart);
                  }
                });
                if (startIndex < Infinity && startIndex >= 0) {
                  cutSrc = src.substring(0, startIndex + 1);
                }
              })();
            }
            if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
              lastToken = tokens[tokens.length - 1];
              if (lastParagraphClipped && lastToken.type === 'paragraph') {
                lastToken.raw += '\n' + token.raw;
                lastToken.text += '\n' + token.text;
                this.inlineQueue.pop();
                this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
              } else {
                tokens.push(token);
              }
              lastParagraphClipped = cutSrc.length !== src.length;
              src = src.substring(token.raw.length);
              continue;
            }

            // text
            if (token = this.tokenizer.text(src)) {
              src = src.substring(token.raw.length);
              lastToken = tokens[tokens.length - 1];
              if (lastToken && lastToken.type === 'text') {
                lastToken.raw += '\n' + token.raw;
                lastToken.text += '\n' + token.text;
                this.inlineQueue.pop();
                this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
              } else {
                tokens.push(token);
              }
              continue;
            }
            if (src) {
              var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
              if (this.options.silent) {
                console.error(errMsg);
                break;
              } else {
                throw new Error(errMsg);
              }
            }
          }
          this.state.top = true;
          return tokens;
        };
        _proto.inline = function inline(src, tokens) {
          if (tokens === void 0) {
            tokens = [];
          }
          this.inlineQueue.push({
            src: src,
            tokens: tokens
          });
          return tokens;
        }

        /**
         * Lexing/Compiling
         */;
        _proto.inlineTokens = function inlineTokens(src, tokens) {
          var _this2 = this;
          if (tokens === void 0) {
            tokens = [];
          }
          var token, lastToken, cutSrc;

          // String with links masked to avoid interference with em and strong
          var maskedSrc = src;
          var match;
          var keepPrevChar, prevChar;

          // Mask out reflinks
          if (this.tokens.links) {
            var links = Object.keys(this.tokens.links);
            if (links.length > 0) {
              while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
                if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
                  maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
                }
              }
            }
          }
          // Mask out other blocks
          while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
            maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
          }

          // Mask out escaped em & strong delimiters
          while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
            maskedSrc = maskedSrc.slice(0, match.index + match[0].length - 2) + '++' + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
            this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
          }
          while (src) {
            if (!keepPrevChar) {
              prevChar = '';
            }
            keepPrevChar = false;

            // extensions
            if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(function (extTokenizer) {
              if (token = extTokenizer.call({
                lexer: _this2
              }, src, tokens)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                return true;
              }
              return false;
            })) {
              continue;
            }

            // escape
            if (token = this.tokenizer.escape(src)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              continue;
            }

            // tag
            if (token = this.tokenizer.tag(src)) {
              src = src.substring(token.raw.length);
              lastToken = tokens[tokens.length - 1];
              if (lastToken && token.type === 'text' && lastToken.type === 'text') {
                lastToken.raw += token.raw;
                lastToken.text += token.text;
              } else {
                tokens.push(token);
              }
              continue;
            }

            // link
            if (token = this.tokenizer.link(src)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              continue;
            }

            // reflink, nolink
            if (token = this.tokenizer.reflink(src, this.tokens.links)) {
              src = src.substring(token.raw.length);
              lastToken = tokens[tokens.length - 1];
              if (lastToken && token.type === 'text' && lastToken.type === 'text') {
                lastToken.raw += token.raw;
                lastToken.text += token.text;
              } else {
                tokens.push(token);
              }
              continue;
            }

            // em & strong
            if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              continue;
            }

            // code
            if (token = this.tokenizer.codespan(src)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              continue;
            }

            // br
            if (token = this.tokenizer.br(src)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              continue;
            }

            // del (gfm)
            if (token = this.tokenizer.del(src)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              continue;
            }

            // autolink
            if (token = this.tokenizer.autolink(src, mangle)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              continue;
            }

            // url (gfm)
            if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              continue;
            }

            // text
            // prevent inlineText consuming extensions by clipping 'src' to extension start
            cutSrc = src;
            if (this.options.extensions && this.options.extensions.startInline) {
              (function () {
                var startIndex = Infinity;
                var tempSrc = src.slice(1);
                var tempStart = void 0;
                _this2.options.extensions.startInline.forEach(function (getStartIndex) {
                  tempStart = getStartIndex.call({
                    lexer: this
                  }, tempSrc);
                  if (typeof tempStart === 'number' && tempStart >= 0) {
                    startIndex = Math.min(startIndex, tempStart);
                  }
                });
                if (startIndex < Infinity && startIndex >= 0) {
                  cutSrc = src.substring(0, startIndex + 1);
                }
              })();
            }
            if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
              src = src.substring(token.raw.length);
              if (token.raw.slice(-1) !== '_') {
                // Track prevChar before string of ____ started
                prevChar = token.raw.slice(-1);
              }
              keepPrevChar = true;
              lastToken = tokens[tokens.length - 1];
              if (lastToken && lastToken.type === 'text') {
                lastToken.raw += token.raw;
                lastToken.text += token.text;
              } else {
                tokens.push(token);
              }
              continue;
            }
            if (src) {
              var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
              if (this.options.silent) {
                console.error(errMsg);
                break;
              } else {
                throw new Error(errMsg);
              }
            }
          }
          return tokens;
        };
        _createClass(Lexer, null, [{
          key: "rules",
          get: function get() {
            return {
              block: block,
              inline: inline
            };
          }
        }]);
        return Lexer;
      }();

      /**
       * Renderer
       */
      var Renderer = /*#__PURE__*/function () {
        function Renderer(options) {
          this.options = options || exports.defaults;
        }
        var _proto = Renderer.prototype;
        _proto.code = function code(_code, infostring, escaped) {
          var lang = (infostring || '').match(/\S*/)[0];
          if (this.options.highlight) {
            var out = this.options.highlight(_code, lang);
            if (out != null && out !== _code) {
              escaped = true;
              _code = out;
            }
          }
          _code = _code.replace(/\n$/, '') + '\n';
          if (!lang) {
            return '<pre><code>' + (escaped ? _code : escape(_code, true)) + '</code></pre>\n';
          }
          return '<pre><code class="' + this.options.langPrefix + escape(lang) + '">' + (escaped ? _code : escape(_code, true)) + '</code></pre>\n';
        }

        /**
         * @param {string} quote
         */;
        _proto.blockquote = function blockquote(quote) {
          return "<blockquote>\n" + quote + "</blockquote>\n";
        };
        _proto.html = function html(_html) {
          return _html;
        }

        /**
         * @param {string} text
         * @param {string} level
         * @param {string} raw
         * @param {any} slugger
         */;
        _proto.heading = function heading(text, level, raw, slugger) {
          if (this.options.headerIds) {
            var id = this.options.headerPrefix + slugger.slug(raw);
            return "<h" + level + " id=\"" + id + "\">" + text + "</h" + level + ">\n";
          }

          // ignore IDs
          return "<h" + level + ">" + text + "</h" + level + ">\n";
        };
        _proto.hr = function hr() {
          return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
        };
        _proto.list = function list(body, ordered, start) {
          var type = ordered ? 'ol' : 'ul',
            startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
          return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
        }

        /**
         * @param {string} text
         */;
        _proto.listitem = function listitem(text) {
          return "<li>" + text + "</li>\n";
        };
        _proto.checkbox = function checkbox(checked) {
          return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox"' + (this.options.xhtml ? ' /' : '') + '> ';
        }

        /**
         * @param {string} text
         */;
        _proto.paragraph = function paragraph(text) {
          return "<p>" + text + "</p>\n";
        }

        /**
         * @param {string} header
         * @param {string} body
         */;
        _proto.table = function table(header, body) {
          if (body) body = "<tbody>" + body + "</tbody>";
          return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
        }

        /**
         * @param {string} content
         */;
        _proto.tablerow = function tablerow(content) {
          return "<tr>\n" + content + "</tr>\n";
        };
        _proto.tablecell = function tablecell(content, flags) {
          var type = flags.header ? 'th' : 'td';
          var tag = flags.align ? "<" + type + " align=\"" + flags.align + "\">" : "<" + type + ">";
          return tag + content + ("</" + type + ">\n");
        }

        /**
         * span level renderer
         * @param {string} text
         */;
        _proto.strong = function strong(text) {
          return "<strong>" + text + "</strong>";
        }

        /**
         * @param {string} text
         */;
        _proto.em = function em(text) {
          return "<em>" + text + "</em>";
        }

        /**
         * @param {string} text
         */;
        _proto.codespan = function codespan(text) {
          return "<code>" + text + "</code>";
        };
        _proto.br = function br() {
          return this.options.xhtml ? '<br/>' : '<br>';
        }

        /**
         * @param {string} text
         */;
        _proto.del = function del(text) {
          return "<del>" + text + "</del>";
        }

        /**
         * @param {string} href
         * @param {string} title
         * @param {string} text
         */;
        _proto.link = function link(href, title, text) {
          href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
          if (href === null) {
            return text;
          }
          var out = '<a href="' + href + '"';
          if (title) {
            out += ' title="' + title + '"';
          }
          out += '>' + text + '</a>';
          return out;
        }

        /**
         * @param {string} href
         * @param {string} title
         * @param {string} text
         */;
        _proto.image = function image(href, title, text) {
          href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
          if (href === null) {
            return text;
          }
          var out = "<img src=\"" + href + "\" alt=\"" + text + "\"";
          if (title) {
            out += " title=\"" + title + "\"";
          }
          out += this.options.xhtml ? '/>' : '>';
          return out;
        };
        _proto.text = function text(_text) {
          return _text;
        };
        return Renderer;
      }();

      /**
       * TextRenderer
       * returns only the textual part of the token
       */
      var TextRenderer = /*#__PURE__*/function () {
        function TextRenderer() {}
        var _proto = TextRenderer.prototype;
        // no need for block level renderers
        _proto.strong = function strong(text) {
          return text;
        };
        _proto.em = function em(text) {
          return text;
        };
        _proto.codespan = function codespan(text) {
          return text;
        };
        _proto.del = function del(text) {
          return text;
        };
        _proto.html = function html(text) {
          return text;
        };
        _proto.text = function text(_text) {
          return _text;
        };
        _proto.link = function link(href, title, text) {
          return '' + text;
        };
        _proto.image = function image(href, title, text) {
          return '' + text;
        };
        _proto.br = function br() {
          return '';
        };
        return TextRenderer;
      }();

      /**
       * Slugger generates header id
       */
      var Slugger = /*#__PURE__*/function () {
        function Slugger() {
          this.seen = {};
        }

        /**
         * @param {string} value
         */
        var _proto = Slugger.prototype;
        _proto.serialize = function serialize(value) {
          return value.toLowerCase().trim()
          // remove html tags
          .replace(/<[!\/a-z].*?>/ig, '')
          // remove unwanted chars
          .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '').replace(/\s/g, '-');
        }

        /**
         * Finds the next safe (unique) slug to use
         * @param {string} originalSlug
         * @param {boolean} isDryRun
         */;
        _proto.getNextSafeSlug = function getNextSafeSlug(originalSlug, isDryRun) {
          var slug = originalSlug;
          var occurenceAccumulator = 0;
          if (this.seen.hasOwnProperty(slug)) {
            occurenceAccumulator = this.seen[originalSlug];
            do {
              occurenceAccumulator++;
              slug = originalSlug + '-' + occurenceAccumulator;
            } while (this.seen.hasOwnProperty(slug));
          }
          if (!isDryRun) {
            this.seen[originalSlug] = occurenceAccumulator;
            this.seen[slug] = 0;
          }
          return slug;
        }

        /**
         * Convert string to unique id
         * @param {object} [options]
         * @param {boolean} [options.dryrun] Generates the next unique slug without
         * updating the internal accumulator.
         */;
        _proto.slug = function slug(value, options) {
          if (options === void 0) {
            options = {};
          }
          var slug = this.serialize(value);
          return this.getNextSafeSlug(slug, options.dryrun);
        };
        return Slugger;
      }();

      /**
       * Parsing & Compiling
       */
      var Parser = /*#__PURE__*/function () {
        function Parser(options) {
          this.options = options || exports.defaults;
          this.options.renderer = this.options.renderer || new Renderer();
          this.renderer = this.options.renderer;
          this.renderer.options = this.options;
          this.textRenderer = new TextRenderer();
          this.slugger = new Slugger();
        }

        /**
         * Static Parse Method
         */
        Parser.parse = function parse(tokens, options) {
          var parser = new Parser(options);
          return parser.parse(tokens);
        }

        /**
         * Static Parse Inline Method
         */;
        Parser.parseInline = function parseInline(tokens, options) {
          var parser = new Parser(options);
          return parser.parseInline(tokens);
        }

        /**
         * Parse Loop
         */;
        var _proto = Parser.prototype;
        _proto.parse = function parse(tokens, top) {
          if (top === void 0) {
            top = true;
          }
          var out = '',
            i,
            j,
            k,
            l2,
            l3,
            row,
            cell,
            header,
            body,
            token,
            ordered,
            start,
            loose,
            itemBody,
            item,
            checked,
            task,
            checkbox,
            ret;
          var l = tokens.length;
          for (i = 0; i < l; i++) {
            token = tokens[i];

            // Run any renderer extensions
            if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
              ret = this.options.extensions.renderers[token.type].call({
                parser: this
              }, token);
              if (ret !== false || !['space', 'hr', 'heading', 'code', 'table', 'blockquote', 'list', 'html', 'paragraph', 'text'].includes(token.type)) {
                out += ret || '';
                continue;
              }
            }
            switch (token.type) {
              case 'space':
                {
                  continue;
                }
              case 'hr':
                {
                  out += this.renderer.hr();
                  continue;
                }
              case 'heading':
                {
                  out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
                  continue;
                }
              case 'code':
                {
                  out += this.renderer.code(token.text, token.lang, token.escaped);
                  continue;
                }
              case 'table':
                {
                  header = '';

                  // header
                  cell = '';
                  l2 = token.header.length;
                  for (j = 0; j < l2; j++) {
                    cell += this.renderer.tablecell(this.parseInline(token.header[j].tokens), {
                      header: true,
                      align: token.align[j]
                    });
                  }
                  header += this.renderer.tablerow(cell);
                  body = '';
                  l2 = token.rows.length;
                  for (j = 0; j < l2; j++) {
                    row = token.rows[j];
                    cell = '';
                    l3 = row.length;
                    for (k = 0; k < l3; k++) {
                      cell += this.renderer.tablecell(this.parseInline(row[k].tokens), {
                        header: false,
                        align: token.align[k]
                      });
                    }
                    body += this.renderer.tablerow(cell);
                  }
                  out += this.renderer.table(header, body);
                  continue;
                }
              case 'blockquote':
                {
                  body = this.parse(token.tokens);
                  out += this.renderer.blockquote(body);
                  continue;
                }
              case 'list':
                {
                  ordered = token.ordered;
                  start = token.start;
                  loose = token.loose;
                  l2 = token.items.length;
                  body = '';
                  for (j = 0; j < l2; j++) {
                    item = token.items[j];
                    checked = item.checked;
                    task = item.task;
                    itemBody = '';
                    if (item.task) {
                      checkbox = this.renderer.checkbox(checked);
                      if (loose) {
                        if (item.tokens.length > 0 && item.tokens[0].type === 'paragraph') {
                          item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;
                          if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                            item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                          }
                        } else {
                          item.tokens.unshift({
                            type: 'text',
                            text: checkbox
                          });
                        }
                      } else {
                        itemBody += checkbox;
                      }
                    }
                    itemBody += this.parse(item.tokens, loose);
                    body += this.renderer.listitem(itemBody, task, checked);
                  }
                  out += this.renderer.list(body, ordered, start);
                  continue;
                }
              case 'html':
                {
                  // TODO parse inline content if parameter markdown=1
                  out += this.renderer.html(token.text);
                  continue;
                }
              case 'paragraph':
                {
                  out += this.renderer.paragraph(this.parseInline(token.tokens));
                  continue;
                }
              case 'text':
                {
                  body = token.tokens ? this.parseInline(token.tokens) : token.text;
                  while (i + 1 < l && tokens[i + 1].type === 'text') {
                    token = tokens[++i];
                    body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
                  }
                  out += top ? this.renderer.paragraph(body) : body;
                  continue;
                }
              default:
                {
                  var errMsg = 'Token with "' + token.type + '" type was not found.';
                  if (this.options.silent) {
                    console.error(errMsg);
                    return;
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
         */;
        _proto.parseInline = function parseInline(tokens, renderer) {
          renderer = renderer || this.renderer;
          var out = '',
            i,
            token,
            ret;
          var l = tokens.length;
          for (i = 0; i < l; i++) {
            token = tokens[i];

            // Run any renderer extensions
            if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
              ret = this.options.extensions.renderers[token.type].call({
                parser: this
              }, token);
              if (ret !== false || !['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(token.type)) {
                out += ret || '';
                continue;
              }
            }
            switch (token.type) {
              case 'escape':
                {
                  out += renderer.text(token.text);
                  break;
                }
              case 'html':
                {
                  out += renderer.html(token.text);
                  break;
                }
              case 'link':
                {
                  out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
                  break;
                }
              case 'image':
                {
                  out += renderer.image(token.href, token.title, token.text);
                  break;
                }
              case 'strong':
                {
                  out += renderer.strong(this.parseInline(token.tokens, renderer));
                  break;
                }
              case 'em':
                {
                  out += renderer.em(this.parseInline(token.tokens, renderer));
                  break;
                }
              case 'codespan':
                {
                  out += renderer.codespan(token.text);
                  break;
                }
              case 'br':
                {
                  out += renderer.br();
                  break;
                }
              case 'del':
                {
                  out += renderer.del(this.parseInline(token.tokens, renderer));
                  break;
                }
              case 'text':
                {
                  out += renderer.text(token.text);
                  break;
                }
              default:
                {
                  var errMsg = 'Token with "' + token.type + '" type was not found.';
                  if (this.options.silent) {
                    console.error(errMsg);
                    return;
                  } else {
                    throw new Error(errMsg);
                  }
                }
            }
          }
          return out;
        };
        return Parser;
      }();

      var Hooks = /*#__PURE__*/function () {
        function Hooks(options) {
          this.options = options || exports.defaults;
        }
        var _proto = Hooks.prototype;
        /**
         * Process markdown before marked
         */
        _proto.preprocess = function preprocess(markdown) {
          return markdown;
        }

        /**
         * Process HTML after marked is finished
         */;
        _proto.postprocess = function postprocess(html) {
          return html;
        };
        return Hooks;
      }();
      Hooks.passThroughHooks = new Set(['preprocess', 'postprocess']);

      function onError(silent, async, callback) {
        return function (e) {
          e.message += '\nPlease report this to https://github.com/markedjs/marked.';
          if (silent) {
            var msg = '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
            if (async) {
              return Promise.resolve(msg);
            }
            if (callback) {
              callback(null, msg);
              return;
            }
            return msg;
          }
          if (async) {
            return Promise.reject(e);
          }
          if (callback) {
            callback(e);
            return;
          }
          throw e;
        };
      }
      function parseMarkdown(lexer, parser) {
        return function (src, opt, callback) {
          if (typeof opt === 'function') {
            callback = opt;
            opt = null;
          }
          var origOpt = _extends({}, opt);
          opt = _extends({}, marked.defaults, origOpt);
          var throwError = onError(opt.silent, opt.async, callback);

          // throw error in case of non string input
          if (typeof src === 'undefined' || src === null) {
            return throwError(new Error('marked(): input parameter is undefined or null'));
          }
          if (typeof src !== 'string') {
            return throwError(new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected'));
          }
          checkSanitizeDeprecation(opt);
          if (opt.hooks) {
            opt.hooks.options = opt;
          }
          if (callback) {
            var highlight = opt.highlight;
            var tokens;
            try {
              if (opt.hooks) {
                src = opt.hooks.preprocess(src);
              }
              tokens = lexer(src, opt);
            } catch (e) {
              return throwError(e);
            }
            var done = function done(err) {
              var out;
              if (!err) {
                try {
                  if (opt.walkTokens) {
                    marked.walkTokens(tokens, opt.walkTokens);
                  }
                  out = parser(tokens, opt);
                  if (opt.hooks) {
                    out = opt.hooks.postprocess(out);
                  }
                } catch (e) {
                  err = e;
                }
              }
              opt.highlight = highlight;
              return err ? throwError(err) : callback(null, out);
            };
            if (!highlight || highlight.length < 3) {
              return done();
            }
            delete opt.highlight;
            if (!tokens.length) return done();
            var pending = 0;
            marked.walkTokens(tokens, function (token) {
              if (token.type === 'code') {
                pending++;
                setTimeout(function () {
                  highlight(token.text, token.lang, function (err, code) {
                    if (err) {
                      return done(err);
                    }
                    if (code != null && code !== token.text) {
                      token.text = code;
                      token.escaped = true;
                    }
                    pending--;
                    if (pending === 0) {
                      done();
                    }
                  });
                }, 0);
              }
            });
            if (pending === 0) {
              done();
            }
            return;
          }
          if (opt.async) {
            return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then(function (src) {
              return lexer(src, opt);
            }).then(function (tokens) {
              return opt.walkTokens ? Promise.all(marked.walkTokens(tokens, opt.walkTokens)).then(function () {
                return tokens;
              }) : tokens;
            }).then(function (tokens) {
              return parser(tokens, opt);
            }).then(function (html) {
              return opt.hooks ? opt.hooks.postprocess(html) : html;
            })["catch"](throwError);
          }
          try {
            if (opt.hooks) {
              src = opt.hooks.preprocess(src);
            }
            var _tokens = lexer(src, opt);
            if (opt.walkTokens) {
              marked.walkTokens(_tokens, opt.walkTokens);
            }
            var html = parser(_tokens, opt);
            if (opt.hooks) {
              html = opt.hooks.postprocess(html);
            }
            return html;
          } catch (e) {
            return throwError(e);
          }
        };
      }

      /**
       * Marked
       */
      function marked(src, opt, callback) {
        return parseMarkdown(Lexer.lex, Parser.parse)(src, opt, callback);
      }

      /**
       * Options
       */

      marked.options = marked.setOptions = function (opt) {
        marked.defaults = _extends({}, marked.defaults, opt);
        changeDefaults(marked.defaults);
        return marked;
      };
      marked.getDefaults = getDefaults;
      marked.defaults = exports.defaults;

      /**
       * Use Extension
       */

      marked.use = function () {
        var extensions = marked.defaults.extensions || {
          renderers: {},
          childTokens: {}
        };
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        args.forEach(function (pack) {
          // copy options to new object
          var opts = _extends({}, pack);

          // set async to true if it was set to true before
          opts.async = marked.defaults.async || opts.async || false;

          // ==-- Parse "addon" extensions --== //
          if (pack.extensions) {
            pack.extensions.forEach(function (ext) {
              if (!ext.name) {
                throw new Error('extension name required');
              }
              if (ext.renderer) {
                // Renderer extensions
                var prevRenderer = extensions.renderers[ext.name];
                if (prevRenderer) {
                  // Replace extension with func to run new extension but fall back if false
                  extensions.renderers[ext.name] = function () {
                    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                      args[_key2] = arguments[_key2];
                    }
                    var ret = ext.renderer.apply(this, args);
                    if (ret === false) {
                      ret = prevRenderer.apply(this, args);
                    }
                    return ret;
                  };
                } else {
                  extensions.renderers[ext.name] = ext.renderer;
                }
              }
              if (ext.tokenizer) {
                // Tokenizer Extensions
                if (!ext.level || ext.level !== 'block' && ext.level !== 'inline') {
                  throw new Error("extension level must be 'block' or 'inline'");
                }
                if (extensions[ext.level]) {
                  extensions[ext.level].unshift(ext.tokenizer);
                } else {
                  extensions[ext.level] = [ext.tokenizer];
                }
                if (ext.start) {
                  // Function to check for start of token
                  if (ext.level === 'block') {
                    if (extensions.startBlock) {
                      extensions.startBlock.push(ext.start);
                    } else {
                      extensions.startBlock = [ext.start];
                    }
                  } else if (ext.level === 'inline') {
                    if (extensions.startInline) {
                      extensions.startInline.push(ext.start);
                    } else {
                      extensions.startInline = [ext.start];
                    }
                  }
                }
              }
              if (ext.childTokens) {
                // Child tokens to be visited by walkTokens
                extensions.childTokens[ext.name] = ext.childTokens;
              }
            });
            opts.extensions = extensions;
          }

          // ==-- Parse "overwrite" extensions --== //
          if (pack.renderer) {
            (function () {
              var renderer = marked.defaults.renderer || new Renderer();
              var _loop = function _loop(prop) {
                var prevRenderer = renderer[prop];
                // Replace renderer with func to run extension, but fall back if false
                renderer[prop] = function () {
                  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                    args[_key3] = arguments[_key3];
                  }
                  var ret = pack.renderer[prop].apply(renderer, args);
                  if (ret === false) {
                    ret = prevRenderer.apply(renderer, args);
                  }
                  return ret;
                };
              };
              for (var prop in pack.renderer) {
                _loop(prop);
              }
              opts.renderer = renderer;
            })();
          }
          if (pack.tokenizer) {
            (function () {
              var tokenizer = marked.defaults.tokenizer || new Tokenizer();
              var _loop2 = function _loop2(prop) {
                var prevTokenizer = tokenizer[prop];
                // Replace tokenizer with func to run extension, but fall back if false
                tokenizer[prop] = function () {
                  for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                    args[_key4] = arguments[_key4];
                  }
                  var ret = pack.tokenizer[prop].apply(tokenizer, args);
                  if (ret === false) {
                    ret = prevTokenizer.apply(tokenizer, args);
                  }
                  return ret;
                };
              };
              for (var prop in pack.tokenizer) {
                _loop2(prop);
              }
              opts.tokenizer = tokenizer;
            })();
          }

          // ==-- Parse Hooks extensions --== //
          if (pack.hooks) {
            (function () {
              var hooks = marked.defaults.hooks || new Hooks();
              var _loop3 = function _loop3(prop) {
                var prevHook = hooks[prop];
                if (Hooks.passThroughHooks.has(prop)) {
                  hooks[prop] = function (arg) {
                    if (marked.defaults.async) {
                      return Promise.resolve(pack.hooks[prop].call(hooks, arg)).then(function (ret) {
                        return prevHook.call(hooks, ret);
                      });
                    }
                    var ret = pack.hooks[prop].call(hooks, arg);
                    return prevHook.call(hooks, ret);
                  };
                } else {
                  hooks[prop] = function () {
                    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                      args[_key5] = arguments[_key5];
                    }
                    var ret = pack.hooks[prop].apply(hooks, args);
                    if (ret === false) {
                      ret = prevHook.apply(hooks, args);
                    }
                    return ret;
                  };
                }
              };
              for (var prop in pack.hooks) {
                _loop3(prop);
              }
              opts.hooks = hooks;
            })();
          }

          // ==-- Parse WalkTokens extensions --== //
          if (pack.walkTokens) {
            var _walkTokens = marked.defaults.walkTokens;
            opts.walkTokens = function (token) {
              var values = [];
              values.push(pack.walkTokens.call(this, token));
              if (_walkTokens) {
                values = values.concat(_walkTokens.call(this, token));
              }
              return values;
            };
          }
          marked.setOptions(opts);
        });
      };

      /**
       * Run callback for every token
       */

      marked.walkTokens = function (tokens, callback) {
        var values = [];
        var _loop4 = function _loop4() {
          var token = _step.value;
          values = values.concat(callback.call(marked, token));
          switch (token.type) {
            case 'table':
              {
                for (var _iterator2 = _createForOfIteratorHelperLoose(token.header), _step2; !(_step2 = _iterator2()).done;) {
                  var cell = _step2.value;
                  values = values.concat(marked.walkTokens(cell.tokens, callback));
                }
                for (var _iterator3 = _createForOfIteratorHelperLoose(token.rows), _step3; !(_step3 = _iterator3()).done;) {
                  var row = _step3.value;
                  for (var _iterator4 = _createForOfIteratorHelperLoose(row), _step4; !(_step4 = _iterator4()).done;) {
                    var _cell = _step4.value;
                    values = values.concat(marked.walkTokens(_cell.tokens, callback));
                  }
                }
                break;
              }
            case 'list':
              {
                values = values.concat(marked.walkTokens(token.items, callback));
                break;
              }
            default:
              {
                if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) {
                  // Walk any extensions
                  marked.defaults.extensions.childTokens[token.type].forEach(function (childTokens) {
                    values = values.concat(marked.walkTokens(token[childTokens], callback));
                  });
                } else if (token.tokens) {
                  values = values.concat(marked.walkTokens(token.tokens, callback));
                }
              }
          }
        };
        for (var _iterator = _createForOfIteratorHelperLoose(tokens), _step; !(_step = _iterator()).done;) {
          _loop4();
        }
        return values;
      };

      /**
       * Parse Inline
       * @param {string} src
       */
      marked.parseInline = parseMarkdown(Lexer.lexInline, Parser.parseInline);

      /**
       * Expose
       */
      marked.Parser = Parser;
      marked.parser = Parser.parse;
      marked.Renderer = Renderer;
      marked.TextRenderer = TextRenderer;
      marked.Lexer = Lexer;
      marked.lexer = Lexer.lex;
      marked.Tokenizer = Tokenizer;
      marked.Slugger = Slugger;
      marked.Hooks = Hooks;
      marked.parse = marked;
      var options = marked.options;
      var setOptions = marked.setOptions;
      var use = marked.use;
      var walkTokens = marked.walkTokens;
      var parseInline = marked.parseInline;
      var parse = marked;
      var parser = Parser.parse;
      var lexer = Lexer.lex;

      exports.Hooks = Hooks;
      exports.Lexer = Lexer;
      exports.Parser = Parser;
      exports.Renderer = Renderer;
      exports.Slugger = Slugger;
      exports.TextRenderer = TextRenderer;
      exports.Tokenizer = Tokenizer;
      exports.getDefaults = getDefaults;
      exports.lexer = lexer;
      exports.marked = marked;
      exports.options = options;
      exports.parse = parse;
      exports.parseInline = parseInline;
      exports.parser = parser;
      exports.setOptions = setOptions;
      exports.use = use;
      exports.walkTokens = walkTokens;

    }));
    });
    var marked_umd_1 = marked_umd.marked;

    var purify = createCommonjsModule(function (module, exports) {
    /*! @license DOMPurify 2.5.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.6/LICENSE */

    (function (global, factory) {
       module.exports = factory() ;
    })(commonjsGlobal, (function () {
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
          }
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

    });

    var mdToHTML = function (md, markedOptions) {
        if (markedOptions === void 0) { markedOptions = {}; }
        var others = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            others[_i - 2] = arguments[_i];
        }
        try {
            var _md = typeof md === 'string' ? md : '';
            if (typeof markedOptions === 'object' && Object.keys(markedOptions).length > 0) {
                // Set options
                marked_umd_1.use.apply(marked_umd_1, __spreadArrays([markedOptions], others));
            }
            return marked_umd_1.parse(_md);
        }
        catch (error) {
            return '';
        }
    };
    var htmlDomSanitize = function (html) {
        try {
            var _html = typeof html === 'string' ? html : '';
            return purify.sanitize(_html);
        }
        catch (error) {
            return '';
        }
    };

    var index_umd = createCommonjsModule(function (module, exports) {
    (function (global, factory) {
       factory(exports) ;
    })(commonjsGlobal, (function (exports) {
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

        return {
          async: !!options.async,
          walkTokens(token) {
            if (token.type !== 'code') {
              return;
            }

            const lang = getLang(token.lang);

            if (options.async) {
              return Promise.resolve(options.highlight(token.text, lang, token.lang || '')).then(updateToken(token));
            }

            const code = options.highlight(token.text, lang, token.lang || '');
            if (code instanceof Promise) {
              throw new Error('markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.');
            }
            updateToken(token)(code);
          },
          useNewRenderer: true,
          renderer: {
            code(code, infoString, escaped) {
              // istanbul ignore next
              if (typeof code === 'object') {
                escaped = code.escaped;
                infoString = code.lang;
                code = code.text;
              }
              const lang = getLang(infoString);
              const classAttr = lang
                ? ` class="${options.langPrefix}${escape(lang)}"`
                : '';
              code = code.replace(/\n$/, '');
              return `<pre><code${classAttr}>${escaped ? code : escape(code, true)}\n</code></pre>`;
            }
          }
        };
      }

      function getLang(lang) {
        return (lang || '').match(/\S*/)[0];
      }

      function updateToken(token) {
        return (code) => {
          if (typeof code === 'string' && code !== token.text) {
            token.escaped = true;
            token.text = code;
          }
        };
      }

      // copied from marked helpers
      const escapeTest = /[&<>"']/;
      const escapeReplace = new RegExp(escapeTest.source, 'g');
      const escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
      const escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, 'g');
      const escapeReplacements = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      };
      const getEscapeReplacement = (ch) => escapeReplacements[ch];
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

      exports.markedHighlight = markedHighlight;

    }));
    });
    var index_umd_1 = index_umd.markedHighlight;

    var ToolBarFuncs = ['toggleBold',
        'toggleItalic',
        'toggleStrikethrough',
        'toggleBlockquote',
        'toggleHeadingSmaller',
        'toggleHeadingBigger',
        'toggleHeading1',
        'toggleHeading2',
        'toggleHeading3',
        'toggleCodeBlock',
        'toggleUnorderedList',
        'toggleOrderedList',
        'cleanBlock',
        'drawLink',
        'drawImage',
        'drawTable',
        'drawHorizontalRule',
        'undo',
        'redo',
        'togglePreview',
        'toggleSideBySide',
        'toggleFullScreen'].reduce(function (pre, cur) {
        pre[cur] = EasyMDE[cur]; // as ((editor: Types.SimpleMarkdownEditor) => void);
        return pre;
    }, {});
    var fullToolBar = {
        'bold': {
            name: 'bold',
            action: ToolBarFuncs.toggleBold,
            className: 'fa fa-bold',
            title: 'Bold',
        },
        'italic': {
            name: 'italic',
            action: ToolBarFuncs.toggleItalic,
            className: 'fa fa-italic',
            title: 'Bold',
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
            title: 'Heading',
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
            title: 'Quote',
        },
        'unordered-list': {
            name: 'unordered-list',
            action: ToolBarFuncs.toggleUnorderedList,
            className: 'fa fa-list-ul',
            title: 'Generic List',
        },
        'ordered-list': {
            name: 'ordered-list',
            action: ToolBarFuncs.toggleOrderedList,
            className: 'fa fa-list-ol',
            title: 'Numbered List',
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
            title: 'Create Link',
        },
        'image': {
            name: 'image',
            action: ToolBarFuncs.drawImage,
            className: 'fa fa-picture-o',
            title: 'Insert Image',
        },
        'choose-image': {
            name: 'choose-image',
            action: function (editor) {
                if (!editor._fileInputEl) {
                    return false;
                }
                var el = editor._fileInputEl;
                el.addEventListener('change', onChange);
                el.click();
                function onChange(e) {
                    return __awaiter(this, void 0, void 0, function () {
                        var target, files, file, url, cm, stat, error_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    el.removeEventListener('change', onChange);
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 4, , 5]);
                                    target = e.target;
                                    files = target.files;
                                    if (!(files && files.length > 0)) return [3 /*break*/, 3];
                                    file = files[0];
                                    return [4 /*yield*/, editor._fileUploadFun(file)];
                                case 2:
                                    url = _a.sent();
                                    cm = editor.codemirror;
                                    stat = editor.getState();
                                    editor._replaceSelection(cm, stat.image, ['![](', '#url#)'], url);
                                    _a.label = 3;
                                case 3: return [3 /*break*/, 5];
                                case 4:
                                    error_1 = _a.sent();
                                    console.log('---', error_1);
                                    return [3 /*break*/, 5];
                                case 5: return [2 /*return*/];
                            }
                        });
                    });
                }
            },
            className: 'fa fa-picture-o',
            title: 'Choose Local Image',
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
            title: 'Toggle Preview',
        },
        'side-by-side': {
            name: 'side-by-side',
            action: ToolBarFuncs.toggleSideBySide,
            className: 'fa fa-columns no-disable no-mobile',
            title: 'Toggle Side by Side',
        },
        'fullscreen': {
            name: 'fullscreen',
            action: ToolBarFuncs.toggleFullScreen,
            className: 'fa fa-arrows-alt no-disable no-mobile',
            title: 'Toggle Fullscreen',
        },
        // 'separator-4': {
        //   name: 'separator-4'
        // },
        'guide': {
            name: 'guide',
            action: 'https://simplemde.com/markdown-guide',
            className: 'fa fa-question-circle',
            title: 'Markdown Guide',
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
    Object.entries(fullToolBar).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        var _className = "md-icon md-icon-" + key;
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
    var defaultUploadFun = function (file) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        var url = e.target.result;
                        if (url) {
                            resolve(url);
                        }
                        else {
                            // eslint-disable-next-line prefer-promise-reject-errors
                            reject('upload failed');
                        }
                    };
                    reader.readAsDataURL(file);
                })];
        });
    }); };
    var MarkdownEditor = /** @class */ (function (_super) {
        __extends(MarkdownEditor, _super);
        function MarkdownEditor() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._boxEl = React.createRef();
            _this._editorEl = React.createRef();
            _this._fileInputEl = React.createRef();
            _this.$editor = null;
            _this._defaultMinH = 300; // SimpleMDE default minH
            return _this;
        }
        Object.defineProperty(MarkdownEditor.prototype, "_inertTexts", {
            get: function () {
                var _a = this.props.editorConfig, editorConfig = _a === void 0 ? {} : _a;
                var _b = editorConfig.insertTexts, insertTexts = _b === void 0 ? {} : _b;
                var config = __assign({ link: ['[', '](#url#)'], image: ['![](', '#url#)'], table: ['', '\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text     | Text     |\n\n'], horizontalRule: ['', '\n\n-----\n\n'] }, insertTexts);
                return config;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MarkdownEditor.prototype, "_editorConfig", {
            get: function () {
                var _a = this.props.toolbar, toolBarConfig = _a === void 0 ? true : _a;
                var _toolbar = !toolBarConfig ? [] : (Array.isArray(toolBarConfig) ? toolBarConfig : MarkdownEditor.defaultToolBar);
                var toolBar = _toolbar.map(function (item) {
                    if (typeof item === 'string') {
                        if (item === separator) {
                            return item;
                        }
                        else {
                            if (fullToolBarKey.get(item)) {
                                var config = fullToolBarKey.get(item);
                                return config;
                            }
                            else {
                                return null;
                            }
                        }
                    }
                    else if (typeof item === 'object') {
                        var name_1 = item.name, action = item.action, className = item.className;
                        var _item = fullToolBarKey.get(name_1);
                        var _className = _item ? _item.className : '';
                        if (!name_1 || typeof name_1 !== 'string') {
                            console.warn("toolbar config error\uFF0C" + item + " name not  string");
                            return null;
                        }
                        if (_item) {
                            // tool Name rewrite
                            if (name_1 === 'guide') {
                                if (!action || typeof action !== 'string') {
                                    item.action = _item.action;
                                }
                            }
                            else if (!action || typeof action !== 'function') {
                                item.action = _item.action;
                            }
                        }
                        else {
                            // custom toolbar
                            if (typeof className !== 'string' || (!className && !_className)) {
                                console.warn("toolbar config error\uFF0C" + item + " className not exist");
                                return null;
                            }
                            if (!action || typeof action !== 'function') {
                                console.warn("toolbar config error\uFF0C" + item + " action not a function");
                                return null;
                            }
                        }
                        item.className = item.className ? item.className : _className;
                        return item;
                    }
                    return null;
                }).filter(function (item) { return item; });
                return __assign(__assign(__assign({}, (typeof this.props.initialValue === 'string' ? { initialValue: this.props.initialValue } : {})), (typeof this.props.editorConfig === 'object' ? this.props.editorConfig : {})), { toolbar: toolBar.length > 0 ? toolBar : false, autoDownloadFontAwesome: false });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MarkdownEditor.prototype, "_hideToolbar", {
            get: function () {
                var toolbar = this.props.toolbar;
                return !toolbar || (Array.isArray(toolbar) && toolbar.length === 0);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MarkdownEditor.prototype, "_hideStatusBar", {
            get: function () {
                var editorConfig = this.props.editorConfig;
                return !!(editorConfig && (editorConfig.status === false || Array.isArray(editorConfig.status) && editorConfig.status.length === 0));
            },
            enumerable: false,
            configurable: true
        });
        MarkdownEditor.prototype._getEditorH = function (height) {
            var _height = height;
            _height -= this._hideStatusBar ? 0 : 35;
            _height -= this._hideToolbar ? 0 : 51;
            _height -= 22; // padding + border
            return Math.max(_height, 160);
        };
        Object.defineProperty(MarkdownEditor.prototype, "_editorH", {
            get: function () {
                var height = this.props.height;
                if (height && Number.isInteger(height)) {
                    return this._getEditorH(height);
                }
                return 'auto';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MarkdownEditor.prototype, "_editorMinH", {
            get: function () {
                var height = this.props.minHeight;
                if (height && Number.isInteger(height)) {
                    return this._getEditorH(height);
                }
                return this._defaultMinH;
            },
            enumerable: false,
            configurable: true
        });
        MarkdownEditor.prototype._setHeightToEl = function (height, className, isMin) {
            if (isMin === void 0) { isMin = false; }
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
        };
        MarkdownEditor.prototype._outputDOMPurify = function () {
            if ('outputDOMPurify' in this.props) {
                return !!this.props.outputDOMPurify;
            }
            return true;
        };
        MarkdownEditor.prototype._previewDOMPurify = function () {
            if ('previewDOMPurify' in this.props) {
                return !!this.props.previewDOMPurify;
            }
            return true;
        };
        MarkdownEditor.prototype._getMdToHtml = function (md) {
            // Initialize
            var editorConfig = this.props.editorConfig;
            var markedOptions = {
                breaks: true,
            };
            // Update options
            var others = [];
            if (editorConfig && editorConfig.renderingConfig && editorConfig.renderingConfig.singleLineBreaks === false) {
                markedOptions.breaks = false;
            }
            else {
                markedOptions.breaks = true;
                if (editorConfig && editorConfig.renderingConfig && editorConfig.renderingConfig.codeSyntaxHighlighting === true && window.hljs) {
                    // markedOptions.highlight = function(code: any) {
                    //   return (window as any).hljs.highlightAuto(code).value;
                    // };
                    others.push(index_umd_1({
                        langPrefix: 'hljs language-',
                        highlight: function (code, lang, info) {
                            var language = window.hljs.getLanguage(lang) ? lang : 'plaintext';
                            return window.hljs.highlight(code, { language: language }).value;
                        }
                    }));
                }
                return mdToHTML.apply(void 0, __spreadArrays([md, markedOptions], others));
            }
        };
        MarkdownEditor.prototype._getDomHtml = function (html) {
            return htmlDomSanitize(html);
        };
        Object.defineProperty(MarkdownEditor.prototype, "mdValue", {
            get: function () {
                if (!this.$editor) {
                    return '';
                }
                return this.$editor.value();
            },
            set: function (content) {
                if (this.$editor) {
                    this.$editor.value(content || '');
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MarkdownEditor.prototype, "_unDOMPurifyHtml", {
            get: function () {
                var _md = this.mdValue;
                if (!_md) {
                    return '';
                }
                try {
                    var _html = this._getMdToHtml(_md);
                    return _html;
                }
                catch (error) {
                    console.warn('---get MarkdownEditor HTML Error ---', error);
                    return '';
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MarkdownEditor.prototype, "html", {
            get: function () {
                if (!this._outputDOMPurify) {
                    return this._unDOMPurifyHtml;
                }
                return this._getDomHtml(this._unDOMPurifyHtml || '');
            },
            enumerable: false,
            configurable: true
        });
        MarkdownEditor.prototype.componentDidMount = function () {
            var _a;
            var _this = this;
            if (!this._editorEl.current) {
                return;
            }
            if (this._previewDOMPurify) {
                // rewirte SimpleMDE prototype method
                EasyMDE.prototype.markdown = function (text) {
                    return _this._getDomHtml(_this._getMdToHtml(text) || '');
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
                }
                else {
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
            this.$editor = new EasyMDE(__assign({ element: this._editorEl.current }, this._editorConfig));
            // handle height
            this._setHeightToEl(this._editorH, '.CodeMirror');
            this._setHeightToEl(this._editorMinH, '.CodeMirror', true);
            this._setHeightToEl(this._editorMinH, '.CodeMirror-scroll', true);
            if (this.props.moreExtraKeys && typeof this.props.moreExtraKeys === 'object') {
                for (var _i = 0, _b = Object.keys(this.props.moreExtraKeys); _i < _b.length; _i++) {
                    var key = _b[_i];
                    if (typeof this.props.moreExtraKeys[key] === 'function') {
                        this.$editor.codemirror.addKeyMap((_a = {}, _a[key] = this.props.moreExtraKeys[key], _a));
                    }
                }
            }
            this.$editor.codemirror.on("paste", function (cm, e) { return __awaiter(_this, void 0, void 0, function () {
                var i, len, item, pasteFile, url, stat;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // console.log(e.clipboardData)
                            if (!(e.clipboardData && e.clipboardData.items)) {
                                alert("该浏览器不支持操作");
                                return [2 /*return*/];
                            }
                            i = 0, len = e.clipboardData.items.length;
                            _a.label = 1;
                        case 1:
                            if (!(i < len)) return [3 /*break*/, 5];
                            item = e.clipboardData.items[i];
                            if (!(item.kind === "string")) return [3 /*break*/, 2];
                            item.getAsString(function (str) {
                                // str 是获取到的字符串
                            });
                            return [3 /*break*/, 4];
                        case 2:
                            if (!(item.kind === "file")) return [3 /*break*/, 4];
                            pasteFile = item.getAsFile();
                            return [4 /*yield*/, this.$editor._fileUploadFun(pasteFile)];
                        case 3:
                            url = _a.sent();
                            stat = this.$editor.getState();
                            this.$editor._replaceSelection(cm, stat.image, ['![](', '#url#)'], url);
                            _a.label = 4;
                        case 4:
                            i++;
                            return [3 /*break*/, 1];
                        case 5: return [2 /*return*/];
                    }
                });
            }); });
        };
        MarkdownEditor.prototype.componentWillUnmount = function () {
            if (this.$editor) {
                this.$editor.toTextArea();
            }
        };
        MarkdownEditor.prototype.render = function () {
            return (React__default.createElement(React__default.Fragment, null,
                React__default.createElement("div", { ref: this._boxEl, className: "md-editor" },
                    React__default.createElement("textarea", { ref: this._editorEl })),
                React__default.createElement("input", { type: "file", ref: this._fileInputEl, accept: "image/x-png,image/gif,image/jpeg", hidden: true })));
        };
        MarkdownEditor.ToolBarFunc = ToolBarFuncs;
        MarkdownEditor.fullToolBar = fullToolBar;
        MarkdownEditor.defaultToolBar = [
            'bold',
            'italic',
            'strikethrough',
            separator,
            'heading-1',
            'heading-2',
            'heading-3',
            separator,
            'quote',
            'unordered-list',
            'ordered-list',
            separator,
            'link',
            'table',
            separator,
            'image',
            'choose-image',
            separator,
            'preview'
        ];
        return MarkdownEditor;
    }(React.Component));

    var MarkdownEditorField = function (props) {
        var _el = React.useRef(null);
        React.useEffect(function () {
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
        React.useEffect(function () {
            if (_el.current) {
                if (props.value !== _el.current.mdValue) {
                    _el.current.mdValue = props.value || '';
                }
            }
        }, [props.value]);
        return React__default.createElement(MarkdownEditor, __assign({ ref: _el }, props));
    };

    exports.MarkdownEditorField = MarkdownEditorField;
    exports.default = MarkdownEditor;
    exports.htmlDomSanitize = htmlDomSanitize;
    exports.mdToHTML = mdToHTML;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
