import { marked } from 'marked/index';
import React, { createRef, Component, useRef, useEffect } from 'react';
import EasyMDE from 'easymde';

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

var css_248z = ".md-editor {\n  text-align: left;\n  font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;\n  font-size: 16px;\n  color: #1a1a1a;\n}\n.md-editor .editor-toolbar {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 50px;\n  overflow-x: auto;\n  background-color: white;\n  opacity: 1;\n}\n.md-editor .editor-toolbar a {\n  opacity: 0.6;\n}\n.md-editor .editor-toolbar a:hover {\n  opacity: 0.8;\n}\n.md-icon {\n  font-style: normal;\n  font-variant-ligatures: normal;\n  font-variant-caps: normal;\n  font-variant-numeric: normal;\n  font-variant-east-asian: normal;\n  font-weight: normal;\n  font-stretch: normal;\n  font-size: inherit;\n  line-height: 1;\n  margin-right: 2px;\n}\n.md-icon:before {\n  content: '';\n  width: 30px;\n  height: 30px;\n  display: inline-block;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  background-position: center;\n}\n.editor-preview img {\n  max-width: 100%;\n  \n}\n.editor-preview em {\n  font-style: italic!important;\n}\n.editor-preview b, \n.editor-preview strong {\n  font-weight: bolder!important;\n}\n\n.md-icon-bold:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTEwLjUgOGMxIDAgMi0xLjUzIDItMi41MkEzLjUgMy41IDAgMCAwIDkgMkgzLjV2MTJoNS41N2EzLjQzIDMuNDMgMCAwIDAgMy40My0zLjQzYzAtMS0xLTIuNTctMi0yLjU3em0tNS00SDlhMS41IDEuNSAwIDAgMSAwIDNINS41em0zLjU3IDhINS41VjloMy40M2ExLjU3IDEuNTcgMCAwIDEgMS41NyAxLjU3QTEuNDMgMS40MyAwIDAgMSA5LjA3IDEyeiIgZmlsbD0iIzY2NiIgLz48L3N2Zz4=);\n}\n.md-icon-bold:hover::before,\n.md-icon-bold.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTEwLjUgOGMxIDAgMi0xLjUzIDItMi41MkEzLjUgMy41IDAgMCAwIDkgMkgzLjV2MTJoNS41N2EzLjQzIDMuNDMgMCAwIDAgMy40My0zLjQzYzAtMS0xLTIuNTctMi0yLjU3em0tNS00SDlhMS41IDEuNSAwIDAgMSAwIDNINS41em0zLjU3IDhINS41VjloMy40M2ExLjU3IDEuNTcgMCAwIDEgMS41NyAxLjU3QTEuNDMgMS40MyAwIDAgMSA5LjA3IDEyeiIgZmlsbD0iIzAwYTRmZiIgLz48L3N2Zz4=);\n}\n\n.md-icon-italic:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTkuNjcgNGwtMS4zNCA4SDEwdjJINHYtMmgyLjMzbDEuMzQtOEg2VjJoNnYyeiIgZmlsbD0iIzY2NiIgZmlsbC1ydWxlPSJldmVub2RkIiAvPjwvc3ZnPg==);\n}\n.md-icon-italic:hover::before,\n.md-icon-italic.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTkuNjcgNGwtMS4zNCA4SDEwdjJINHYtMmgyLjMzbDEuMzQtOEg2VjJoNnYyeiIgZmlsbD0iIzAwYTRmZiIgZmlsbC1ydWxlPSJldmVub2RkIiAvPjwvc3ZnPg==);\n}\n\n.md-icon-strikethrough:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+PHBhdGggZmlsbD0iIzY2NiIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzE4LjczIDEwOS4zN2wtMS40MiAxLjQxLTUuMDctNS4wNyA1LjA3LTUuMDcgMS40MiAxLjQxLTMuNjYgMy42NiAzLjY2IDMuNjZ6IiAvPjwvY2xpcFBhdGg+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTExLjMgOGE0IDQgMCAwIDAtMi4yMy0uODlsLTEuMzEtLjJhMi40MiAyLjQyIDAgMCAxLTEuMjItLjUgMS4yMiAxLjIyIDAgMCAxLS4zOS0xYzAtMSAuNzctMS42NCAyLTEuNjRhMy4yMiAzLjIyIDAgMCAxIDIuNC44NWwuMS4xIDEuMzMtMS4zMS0uMTEtLjExQTQuOTQgNC45NCAwIDAgMCA4LjE2IDJjLTIuNDMgMC00IDEuMzgtNCAzLjUzYTMgMyAwIDAgMCAuODkgMi4zMSA0LjEgNC4xIDAgMCAwIDIuMjYgMUw4LjY3IDlhMS44NyAxLjg3IDAgMCAxIDEuMTguNDUgMS40MSAxLjQxIDAgMCAxIC40IDEuMDhjMCAxLS44MSAxLjYxLTIuMjMgMS42MWEzLjYxIDMuNjEgMCAwIDEtMi44Mi0xLjA2TDUuMDkgMTFsLTEuMzggMS4zMy4xLjExQTUuMzUgNS4zNSAwIDAgMCA4IDE0YzIuNiAwIDQuMjktMS4zOCA0LjI5LTMuNTNBMy4xNiAzLjE2IDAgMCAwIDExLjMgOHoiIGZpbGw9IiM2NjYiIC8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMiA3aDEydjFIMnoiIGZpbGw9IiM2NjYiIC8+PC9zdmc+);\n}\n.md-icon-strikethrough:hover::before,\n.md-icon-strikethrough.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+PHBhdGggZmlsbD0iIzAwYTRmZiIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzE4LjczIDEwOS4zN2wtMS40MiAxLjQxLTUuMDctNS4wNyA1LjA3LTUuMDcgMS40MiAxLjQxLTMuNjYgMy42NiAzLjY2IDMuNjZ6IiAvPjwvY2xpcFBhdGg+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTExLjMgOGE0IDQgMCAwIDAtMi4yMy0uODlsLTEuMzEtLjJhMi40MiAyLjQyIDAgMCAxLTEuMjItLjUgMS4yMiAxLjIyIDAgMCAxLS4zOS0xYzAtMSAuNzctMS42NCAyLTEuNjRhMy4yMiAzLjIyIDAgMCAxIDIuNC44NWwuMS4xIDEuMzMtMS4zMS0uMTEtLjExQTQuOTQgNC45NCAwIDAgMCA4LjE2IDJjLTIuNDMgMC00IDEuMzgtNCAzLjUzYTMgMyAwIDAgMCAuODkgMi4zMSA0LjEgNC4xIDAgMCAwIDIuMjYgMUw4LjY3IDlhMS44NyAxLjg3IDAgMCAxIDEuMTguNDUgMS40MSAxLjQxIDAgMCAxIC40IDEuMDhjMCAxLS44MSAxLjYxLTIuMjMgMS42MWEzLjYxIDMuNjEgMCAwIDEtMi44Mi0xLjA2TDUuMDkgMTFsLTEuMzggMS4zMy4xLjExQTUuMzUgNS4zNSAwIDAgMCA4IDE0YzIuNiAwIDQuMjktMS4zOCA0LjI5LTMuNTNBMy4xNiAzLjE2IDAgMCAwIDExLjMgOHoiIGZpbGw9IiMwMGE0ZmYiIC8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMiA3aDEydjFIMnoiIGZpbGw9IiMwMGE0ZmYiIC8+PC9zdmc+);\n}\n\n.md-icon-heading:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iIzY2NiIgZD0iTTEwLjUgMnY1aC01VjJoLTJ2MTJoMlY5aDV2NWgyVjJoLTJ6IiAvPjwvc3ZnPg==);\n}\n.md-icon-heading:hover::before,\n.md-icon-heading.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iIzAwYTRmZiIgZD0iTTEwLjUgMnY1aC01VjJoLTJ2MTJoMlY5aDV2NWgyVjJoLTJ6IiAvPjwvc3ZnPg==);\n}\n\n.md-icon-heading-smaller:before {\n  background-size: 14px;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iIzY2NiIgZD0iTTEwLjUgMnY1aC01VjJoLTJ2MTJoMlY5aDV2NWgyVjJoLTJ6IiAvPjwvc3ZnPg==);\n}\n.md-icon-heading-smaller:hover::before,\n.md-icon-heading-smaller.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iIzAwYTRmZiIgZD0iTTEwLjUgMnY1aC01VjJoLTJ2MTJoMlY5aDV2NWgyVjJoLTJ6IiAvPjwvc3ZnPg==);\n}\n\n.md-icon-heading-bigger:before {\n  background-size: 18px;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iIzY2NiIgZD0iTTEwLjUgMnY1aC01VjJoLTJ2MTJoMlY5aDV2NWgyVjJoLTJ6IiAvPjwvc3ZnPg==);\n}\n.md-icon-heading-bigger:hover::before,\n.md-icon-heading-bigger.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iIzAwYTRmZiIgZD0iTTEwLjUgMnY1aC01VjJoLTJ2MTJoMlY5aDV2NWgyVjJoLTJ6IiAvPjwvc3ZnPg==);\n}\n\n\n.md-icon-heading-1:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iLTMgMSAxNiAxNiI+PHBhdGggZD0iTTEwLjMgMTV2LTIuNGgtLjh2LS41aC41Yy4xIDAgLjMtLjEuMy0uMi4xLS4xLjEtLjEuMS0uM3YtLjFoLjZWMTVoLS43ek02IDNoMnYxMkg2di01SDF2NWgtMlYzaDJ2NWg1VjN6IiBmaWxsPSIjNjY2IiAvPjwvc3ZnPg==);\n}\n.md-icon-heading-1:hover::before,\n.md-icon-heading-1.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iLTMgMSAxNiAxNiI+PHBhdGggZD0iTTEwLjMgMTV2LTIuNGgtLjh2LS41aC41Yy4xIDAgLjMtLjEuMy0uMi4xLS4xLjEtLjEuMS0uM3YtLjFoLjZWMTVoLS43ek02IDNoMnYxMkg2di01SDF2NWgtMlYzaDJ2NWg1VjN6IiBmaWxsPSIjMDBhNGZmIiAvPjwvc3ZnPg==);\n}\n\n.md-icon-heading-2:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iLTMgMiAxNiAxNiI+PHBhdGggZD0iTTEwLjQgMTQuNmMuMy0uMi41LS40LjYtLjUuMS0uMi4yLS4zLjItLjUgMC0uMSAwLS4zLS4xLS40LS4xLS4xLS4yLS4xLS40LS4xcy0uNC4xLS40LjItLjEuMi0uMS40aC0uN2MwLS4zLjEtLjUuMi0uNy4yLS40LjUtLjUgMS0uNS40IDAgLjcuMS45LjMuMi4yLjMuNS4zLjggMCAuMy0uMS41LS4yLjdsLS41LjUtLjMuMmMtLjIuMS0uMy4yLS40LjNsLS4yLjJoMS41di42SDkuNGMwLS4zLjEtLjUuMi0uNy4yLS4zLjUtLjYuOC0uOHpNNiA0aDJ2MTJINnYtNUgxdjVoLTJWNGgydjVoNVY0eiIgZmlsbD0iIzY2NiIgLz48L3N2Zz4=);\n}\n.md-icon-heading-2:hover::before,\n.md-icon-heading-2.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iLTMgMiAxNiAxNiI+PHBhdGggZD0iTTEwLjQgMTQuNmMuMy0uMi41LS40LjYtLjUuMS0uMi4yLS4zLjItLjUgMC0uMSAwLS4zLS4xLS40LS4xLS4xLS4yLS4xLS40LS4xcy0uNC4xLS40LjItLjEuMi0uMS40aC0uN2MwLS4zLjEtLjUuMi0uNy4yLS40LjUtLjUgMS0uNS40IDAgLjcuMS45LjMuMi4yLjMuNS4zLjggMCAuMy0uMS41LS4yLjdsLS41LjUtLjMuMmMtLjIuMS0uMy4yLS40LjNsLS4yLjJoMS41di42SDkuNGMwLS4zLjEtLjUuMi0uNy4yLS4zLjUtLjYuOC0uOHpNNiA0aDJ2MTJINnYtNUgxdjVoLTJWNGgydjVoNVY0eiIgZmlsbD0iIzAwYTRmZiIgLz48L3N2Zz4=);\n}\n\n.md-icon-heading-3:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iLTIgMSAxNiAxNiI+PHBhdGggZD0iTTEyLjUgMTNjLjEgMCAuMi4xLjMuMi4yLjIuMy40LjMuNyAwIC4zLS4xLjYtLjMuOC0uMi4yLS41LjMtLjkuMy0uNSAwLS44LS4yLTEtLjUtLjEtLjItLjItLjQtLjItLjdoLjdjMCAuMSAwIC4zLjEuNC4xLjIuMi4zLjUuMy4xIDAgLjMgMCAuNC0uMS4xLS4xLjItLjIuMi0uNHMtLjEtLjQtLjMtLjVjLS4xIDAtLjMtLjEtLjUtLjF2LS41Yy4yIDAgLjQgMCAuNS0uMS4yLS4xLjItLjIuMi0uNCAwLS4xIDAtLjItLjEtLjMtLjEtLjEtLjItLjEtLjMtLjEtLjIgMC0uMy4xLS40LjItLjEuMS0uMS4yLS4xLjRIMTFjMC0uMiAwLS4zLjEtLjUuMS0uMS4xLS4zLjMtLjQuMS0uMS4yLS4xLjMtLjIuMSAwIC4zLS4xLjUtLjEuMyAwIC42LjEuOC4zLjIuMi4zLjQuMy43IDAgLjItLjEuNC0uMi41LS41IDAtLjUuMS0uNi4xek03IDNoMnYxMkg3di01SDJ2NUgwVjNoMnY1aDVWM3oiIGZpbGw9IiM2NjYiIC8+PC9zdmc+);\n}\n.md-icon-heading-3:hover::before,\n.md-icon-heading-3.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iLTIgMSAxNiAxNiI+PHBhdGggZD0iTTEyLjUgMTNjLjEgMCAuMi4xLjMuMi4yLjIuMy40LjMuNyAwIC4zLS4xLjYtLjMuOC0uMi4yLS41LjMtLjkuMy0uNSAwLS44LS4yLTEtLjUtLjEtLjItLjItLjQtLjItLjdoLjdjMCAuMSAwIC4zLjEuNC4xLjIuMi4zLjUuMy4xIDAgLjMgMCAuNC0uMS4xLS4xLjItLjIuMi0uNHMtLjEtLjQtLjMtLjVjLS4xIDAtLjMtLjEtLjUtLjF2LS41Yy4yIDAgLjQgMCAuNS0uMS4yLS4xLjItLjIuMi0uNCAwLS4xIDAtLjItLjEtLjMtLjEtLjEtLjItLjEtLjMtLjEtLjIgMC0uMy4xLS40LjItLjEuMS0uMS4yLS4xLjRIMTFjMC0uMiAwLS4zLjEtLjUuMS0uMS4xLS4zLjMtLjQuMS0uMS4yLS4xLjMtLjIuMSAwIC4zLS4xLjUtLjEuMyAwIC42LjEuOC4zLjIuMi4zLjQuMy43IDAgLjItLjEuNC0uMi41LS41IDAtLjUuMS0uNi4xek03IDNoMnYxMkg3di01SDJ2NUgwVjNoMnY1aDVWM3oiIGZpbGw9IiMwMGE0ZmYiIC8+PC9zdmc+);\n}\n\n\n.md-icon-code:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE2Ij48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNLTE5IDFoMTR2MTRoLTE0em02IDEyVjloLTR2NHptMiAwaDRWOWgtNHptLTItMTBoLTR2NGg0em0yIDB2NGg0VjN6IiBmaWxsPSIjNjY2IiAvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgtMiI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjk4LjczIDEwOS4zN2wtMS40MiAxLjQxLTUuMDctNS4wNyA1LjA3LTUuMDcgMS40MiAxLjQxLTMuNjYgMy42NiAzLjY2IDMuNjZ6IiBmaWxsPSIjNjY2IiAvPjwvY2xpcFBhdGg+PC9kZWZzPjxwYXRoIGQ9Ik0xMi4zNCA1LjE3bDEuNDEtMS40MSAyLjgzIDIuODNMMTggOGwtMS40MSAxLjQxLTIuODMgMi44My0xLjQxLTEuNDFMMTUuMTcgOHpNOS4yNCAyaDJsLTMgMTJoLTJ6TTEuNDEgNi41OWwyLjgzLTIuODMgMS40MiAxLjQxTDIuODMgOGwyLjgzIDIuODMtMS40MiAxLjQxLTIuODMtMi44M0wwIDh6IiBmaWxsPSIjNjY2IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIC8+PC9zdmc+);\n}\n.md-icon-code:hover::before,\n.md-icon-code.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE2Ij48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNLTE5IDFoMTR2MTRoLTE0em02IDEyVjloLTR2NHptMiAwaDRWOWgtNHptLTItMTBoLTR2NGg0em0yIDB2NGg0VjN6IiBmaWxsPSIjMDBhNGZmIiAvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgtMiI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjk4LjczIDEwOS4zN2wtMS40MiAxLjQxLTUuMDctNS4wNyA1LjA3LTUuMDcgMS40MiAxLjQxLTMuNjYgMy42NiAzLjY2IDMuNjZ6IiBmaWxsPSIjMDBhNGZmIiAvPjwvY2xpcFBhdGg+PC9kZWZzPjxwYXRoIGQ9Ik0xMi4zNCA1LjE3bDEuNDEtMS40MSAyLjgzIDIuODNMMTggOGwtMS40MSAxLjQxLTIuODMgMi44My0xLjQxLTEuNDFMMTUuMTcgOHpNOS4yNCAyaDJsLTMgMTJoLTJ6TTEuNDEgNi41OWwyLjgzLTIuODMgMS40MiAxLjQxTDIuODMgOGwyLjgzIDIuODMtMS40MiAxLjQxLTIuODMtMi44M0wwIDh6IiBmaWxsPSIjMDBhNGZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIC8+PC9zdmc+);\n}\n\n.md-icon-quote:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTEzIDVWM0M5IDMgOSA4IDkgOHY1aDRWOGgtMmMwLTEgMC0zIDItM3pNMyA4djVoNFY4SDVjMC0xIDAtMyAyLTNWM0MzIDMgMyA4IDMgOHoiIGZpbGw9IiM2NjYiIC8+PC9zdmc+);\n}\n.md-icon-quote:hover::before,\n.md-icon-quote.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTEzIDVWM0M5IDMgOSA4IDkgOHY1aDRWOGgtMmMwLTEgMC0zIDItM3pNMyA4djVoNFY4SDVjMC0xIDAtMyAyLTNWM0MzIDMgMyA4IDMgOHoiIGZpbGw9IiMwMGE0ZmYiIC8+PC9zdmc+);\n}\n\n.md-icon-unordered-list:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMSAzaDJ2Mkgxek01IDNoMTB2Mkg1ek01IDdoMTB2Mkg1ek01IDExaDEwdjJINXpNMSA3aDJ2Mkgxek0xIDExaDJ2MkgxeiIgZmlsbD0iIzY2NiIgLz48L3N2Zz4=);\n}\n.md-icon-unordered-list:hover::before,\n.md-icon-unordered-list.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMSAzaDJ2Mkgxek01IDNoMTB2Mkg1ek01IDdoMTB2Mkg1ek01IDExaDEwdjJINXpNMSA3aDJ2Mkgxek0xIDExaDJ2MkgxeiIgZmlsbD0iIzAwYTRmZiIgLz48L3N2Zz4=);\n}\n\n.md-icon-ordered-list:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMiA1aC43VjEuNDZoLS41OGEuNTguNTggMCAwIDEgMCAuMTQuNjEuNjEgMCAwIDEtLjEyLjI2LjY1LjY1IDAgMCAxLS4zOC4xNCAzLjA3IDMuMDcgMCAwIDEtLjQ2IDB2LjQ3SDJ6TTEuODggOC4zM2EyIDIgMCAwIDAtLjcuNzUgMS42NiAxLjY2IDAgMCAwLS4xNi43aDIuNDJ2LS42MUgxLjg5QS43OS43OSAwIDAgMSAyLjA1IDlsLjM2LS4yNy4yOC0uMmEyLjMzIDIuMzMgMCAwIDAgLjUxLS40NSAxLjExIDEuMTEgMCAwIDAgLjIzLS43IDEuMDggMS4wOCAwIDAgMC0uMzMtLjgyIDEuMjYgMS4yNiAwIDAgMC0uODktLjMxIDEgMSAwIDAgMC0xIC41MyAxLjcxIDEuNzEgMCAwIDAtLjE2LjczaC42OEExLjE4IDEuMTggMCAwIDEgMS44IDdhLjQ0LjQ0IDAgMCAxIC40My0uMjQuNDQuNDQgMCAwIDEgLjM2LjI0LjU2LjU2IDAgMCAxIC4xMi4zNy43My43MyAwIDAgMS0uMjIuNTEgNS4xNSA1LjE1IDAgMCAxLS42MS40NXpNMi45MSAxMi42OGEuNjQuNjQgMCAwIDAgLjI0LS4xOC43OC43OCAwIDAgMCAuMTktLjUuODguODggMCAwIDAtLjMxLS43IDEuMjMgMS4yMyAwIDAgMC0uODItLjMgMS40MSAxLjQxIDAgMCAwLS40Ni4wNy45NC45NCAwIDAgMC0uMzIuMTkgMS4xMiAxLjEyIDAgMCAwLS4yNy4zOCAxLjc0IDEuNzQgMCAwIDAtLjA5LjVoLjY1YS42Ni42NiAwIDAgMSAuMTEtLjQyLjQyLjQyIDAgMCAxIC4zNi0uMTYuNDMuNDMgMCAwIDEgLjMzLjEzLjQ2LjQ2IDAgMCAxIC4xMi4zMy40MS40MSAwIDAgMS0uMjMuNDIgMS4zMiAxLjMyIDAgMCAxLS40Ny4wN1YxM2ExLjQzIDEuNDMgMCAwIDEgLjUxLjA3LjQ2LjQ2IDAgMCAxIC4yOC40Ny41Mi41MiAwIDAgMS0uMTUuNC41MS41MSAwIDAgMS0uMzYuMTQuNDcuNDcgMCAwIDEtLjQ2LS4yNi44LjggMCAwIDEtLjA3LS4zNUgxYTEuNDUgMS40NSAwIDAgMCAuMTcuNjggMS4xMSAxLjExIDAgMCAwIDEgLjQ5IDEuMTggMS4xOCAwIDAgMCAuOTItLjM0IDEuMTMgMS4xMyAwIDAgMCAuMzEtLjc5Ljg3Ljg3IDAgMCAwLS4yNy0uNjcuNS41IDAgMCAwLS4yMi0uMTZ6TTQuOTkgM0gxNXYySDQuOTl6TTQuOTkgN0gxNXYySDQuOTl6TTQuOTkgMTFIMTV2Mkg0Ljk5eiIgZmlsbD0iIzY2NiIgLz48L3N2Zz4=);\n\n}\n.md-icon-ordered-list:hover::before,\n.md-icon-ordered-list.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMiA1aC43VjEuNDZoLS41OGEuNTguNTggMCAwIDEgMCAuMTQuNjEuNjEgMCAwIDEtLjEyLjI2LjY1LjY1IDAgMCAxLS4zOC4xNCAzLjA3IDMuMDcgMCAwIDEtLjQ2IDB2LjQ3SDJ6TTEuODggOC4zM2EyIDIgMCAwIDAtLjcuNzUgMS42NiAxLjY2IDAgMCAwLS4xNi43aDIuNDJ2LS42MUgxLjg5QS43OS43OSAwIDAgMSAyLjA1IDlsLjM2LS4yNy4yOC0uMmEyLjMzIDIuMzMgMCAwIDAgLjUxLS40NSAxLjExIDEuMTEgMCAwIDAgLjIzLS43IDEuMDggMS4wOCAwIDAgMC0uMzMtLjgyIDEuMjYgMS4yNiAwIDAgMC0uODktLjMxIDEgMSAwIDAgMC0xIC41MyAxLjcxIDEuNzEgMCAwIDAtLjE2LjczaC42OEExLjE4IDEuMTggMCAwIDEgMS44IDdhLjQ0LjQ0IDAgMCAxIC40My0uMjQuNDQuNDQgMCAwIDEgLjM2LjI0LjU2LjU2IDAgMCAxIC4xMi4zNy43My43MyAwIDAgMS0uMjIuNTEgNS4xNSA1LjE1IDAgMCAxLS42MS40NXpNMi45MSAxMi42OGEuNjQuNjQgMCAwIDAgLjI0LS4xOC43OC43OCAwIDAgMCAuMTktLjUuODguODggMCAwIDAtLjMxLS43IDEuMjMgMS4yMyAwIDAgMC0uODItLjMgMS40MSAxLjQxIDAgMCAwLS40Ni4wNy45NC45NCAwIDAgMC0uMzIuMTkgMS4xMiAxLjEyIDAgMCAwLS4yNy4zOCAxLjc0IDEuNzQgMCAwIDAtLjA5LjVoLjY1YS42Ni42NiAwIDAgMSAuMTEtLjQyLjQyLjQyIDAgMCAxIC4zNi0uMTYuNDMuNDMgMCAwIDEgLjMzLjEzLjQ2LjQ2IDAgMCAxIC4xMi4zMy40MS40MSAwIDAgMS0uMjMuNDIgMS4zMiAxLjMyIDAgMCAxLS40Ny4wN1YxM2ExLjQzIDEuNDMgMCAwIDEgLjUxLjA3LjQ2LjQ2IDAgMCAxIC4yOC40Ny41Mi41MiAwIDAgMS0uMTUuNC41MS41MSAwIDAgMS0uMzYuMTQuNDcuNDcgMCAwIDEtLjQ2LS4yNi44LjggMCAwIDEtLjA3LS4zNUgxYTEuNDUgMS40NSAwIDAgMCAuMTcuNjggMS4xMSAxLjExIDAgMCAwIDEgLjQ5IDEuMTggMS4xOCAwIDAgMCAuOTItLjM0IDEuMTMgMS4xMyAwIDAgMCAuMzEtLjc5Ljg3Ljg3IDAgMCAwLS4yNy0uNjcuNS41IDAgMCAwLS4yMi0uMTZ6TTQuOTkgM0gxNXYySDQuOTl6TTQuOTkgN0gxNXYySDQuOTl6TTQuOTkgMTFIMTV2Mkg0Ljk5eiIgZmlsbD0iIzAwYTRmZiIgLz48L3N2Zz4=);\n}\n\n.md-icon-link:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNy44MyAxMWwtMS40MiAxLjQxYTIgMiAwIDAgMS0yLjgyLTIuODJMNSA4LjE3bC43MS0uNzEtMS40Mi0xLjQxLTIuMTIgMi4xMmE0IDQgMCAwIDAgNS42NiA1LjY2bDIuMTItMi4xMi0xLjQxLTEuNDJ6TTEzLjgzIDIuMTdhNCA0IDAgMCAwLTUuNjYgMEw2LjA1IDQuMjlsMS40MSAxLjQyIDEuNDItMS40Mi43MS0uNzFhMiAyIDAgMSAxIDIuODMgMi44M2wtLjcxLjcxLTEuNDIgMS40MiAxLjQxIDEuNDEgMi4xMi0yLjEyYTQgNCAwIDAgMCAuMDEtNS42NnoiIGZpbGw9IiM2NjYiIC8+PHBhdGggY2xhc3M9ImNscy0xIiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUgOC4wMDIgNy45OTYpIiBkPSJNNSA3aDZ2Mkg1eiIgZmlsbD0iIzY2NiIgLz48L3N2Zz4=);\n}\n.md-icon-link:hover::before,\n.md-icon-link.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNy44MyAxMWwtMS40MiAxLjQxYTIgMiAwIDAgMS0yLjgyLTIuODJMNSA4LjE3bC43MS0uNzEtMS40Mi0xLjQxLTIuMTIgMi4xMmE0IDQgMCAwIDAgNS42NiA1LjY2bDIuMTItMi4xMi0xLjQxLTEuNDJ6TTEzLjgzIDIuMTdhNCA0IDAgMCAwLTUuNjYgMEw2LjA1IDQuMjlsMS40MSAxLjQyIDEuNDItMS40Mi43MS0uNzFhMiAyIDAgMSAxIDIuODMgMi44M2wtLjcxLjcxLTEuNDIgMS40MiAxLjQxIDEuNDEgMi4xMi0yLjEyYTQgNCAwIDAgMCAuMDEtNS42NnoiIGZpbGw9IiMwMGE0ZmYiIC8+PHBhdGggY2xhc3M9ImNscy0xIiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUgOC4wMDIgNy45OTYpIiBkPSJNNSA3aDZ2Mkg1eiIgZmlsbD0iIzAwYTRmZiIgLz48L3N2Zz4=);\n}\n\n.md-icon-image:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMCAxdjE0aDE2VjF6bTE0IDJ2Mi41Mkw5Ljc2IDguOTEgNS45MyA4IDIgOS41MlYzek0yIDEzdi0xLjMyTDYuMDcgMTBsNC4xNyAxTDE0IDh2NXoiIGZpbGw9IiM2NjYiIC8+PGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSI1LjUiIGN5PSI1LjUiIHI9IjEuNSIgZmlsbD0iIzY2NiIgLz48L3N2Zz4=);\n}\n.md-icon-image:hover::before,\n.md-icon-image.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMCAxdjE0aDE2VjF6bTE0IDJ2Mi41Mkw5Ljc2IDguOTEgNS45MyA4IDIgOS41MlYzek0yIDEzdi0xLjMyTDYuMDcgMTBsNC4xNyAxTDE0IDh2NXoiIGZpbGw9IiMwMGE0ZmYiIC8+PGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSI1LjUiIGN5PSI1LjUiIHI9IjEuNSIgZmlsbD0iIzAwYTRmZiIgLz48L3N2Zz4=);\n}\n\n.md-icon-choose-image:before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyNDE0Mzc5OTUyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwNzM3IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQwMS4wNjY2NjcgNDQ4bDIwNC44LTM1NC4xMzMzMzNjLTI5Ljg2NjY2Ny00LjI2NjY2Ny02NC04LjUzMzMzMy05My44NjY2NjctOC41MzMzMzQtMTAyLjQgMC0xOTYuMjY2NjY3IDM0LjEzMzMzMy0yNjguOCA5OC4xMzMzMzRsMTU3Ljg2NjY2NyAyNjguOHYtNC4yNjY2Njd6TTkxNy4zMzMzMzMgMzg0Yy0zOC40LTEyMy43MzMzMzMtMTMyLjI2NjY2Ny0yMjYuMTMzMzMzLTI1Ni0yNjguOEw1MDcuNzMzMzMzIDM4NGg0MDkuNnogbTEyLjggNDIuNjY2NjY3aC0zMjBsMTIuOCAyMS4zMzMzMzMgMjA0LjggMzU0LjEzMzMzM0M4OTYgNzI1LjMzMzMzMyA5MzguNjY2NjY3IDYyMi45MzMzMzMgOTM4LjY2NjY2NyA1MTJjMC0yOS44NjY2NjctNC4yNjY2NjctNTkuNzMzMzMzLTguNTMzMzM0LTg1LjMzMzMzM3pNMzYyLjY2NjY2NyA1MTJMMTk2LjI2NjY2NyAyMjEuODY2NjY3QzEyOCAyOTguNjY2NjY3IDg1LjMzMzMzMyA0MDEuMDY2NjY3IDg1LjMzMzMzMyA1MTJjMCAyOS44NjY2NjcgNC4yNjY2NjcgNTkuNzMzMzMzIDguNTMzMzM0IDg1LjMzMzMzM2gzMjBsLTUxLjItODUuMzMzMzMzeiBtLTI1NiAxMjhjMzguNCAxMjMuNzMzMzMzIDEzMi4yNjY2NjcgMjI2LjEzMzMzMyAyNTYgMjY4LjhsMTU3Ljg2NjY2Ni0yNjguOEgxMDYuNjY2NjY3eiBtNDc3Ljg2NjY2NiAwbC0xNjYuNCAyOTAuMTMzMzMzYzI5Ljg2NjY2NyA4LjUzMzMzMyA1OS43MzMzMzMgOC41MzMzMzMgOTMuODY2NjY3IDguNTMzMzM0IDEwMi40IDAgMTk2LjI2NjY2Ny0zNC4xMzMzMzMgMjY4LjgtOTguMTMzMzM0bC0xNTcuODY2NjY3LTI2OC44LTM4LjQgNjguMjY2NjY3eiIgcC1pZD0iMTA3MzgiIGZpbGw9IiM1NTU1NTUiPjwvcGF0aD48L3N2Zz4=\")\n}\n.md-icon-choose-image:hover::before,\n.md-icon-choose-image.active::before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyNDE0Mzc5OTUyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwNzM3IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQwMS4wNjY2NjcgNDQ4bDIwNC44LTM1NC4xMzMzMzNjLTI5Ljg2NjY2Ny00LjI2NjY2Ny02NC04LjUzMzMzMy05My44NjY2NjctOC41MzMzMzQtMTAyLjQgMC0xOTYuMjY2NjY3IDM0LjEzMzMzMy0yNjguOCA5OC4xMzMzMzRsMTU3Ljg2NjY2NyAyNjguOHYtNC4yNjY2Njd6TTkxNy4zMzMzMzMgMzg0Yy0zOC40LTEyMy43MzMzMzMtMTMyLjI2NjY2Ny0yMjYuMTMzMzMzLTI1Ni0yNjguOEw1MDcuNzMzMzMzIDM4NGg0MDkuNnogbTEyLjggNDIuNjY2NjY3aC0zMjBsMTIuOCAyMS4zMzMzMzMgMjA0LjggMzU0LjEzMzMzM0M4OTYgNzI1LjMzMzMzMyA5MzguNjY2NjY3IDYyMi45MzMzMzMgOTM4LjY2NjY2NyA1MTJjMC0yOS44NjY2NjctNC4yNjY2NjctNTkuNzMzMzMzLTguNTMzMzM0LTg1LjMzMzMzM3pNMzYyLjY2NjY2NyA1MTJMMTk2LjI2NjY2NyAyMjEuODY2NjY3QzEyOCAyOTguNjY2NjY3IDg1LjMzMzMzMyA0MDEuMDY2NjY3IDg1LjMzMzMzMyA1MTJjMCAyOS44NjY2NjcgNC4yNjY2NjcgNTkuNzMzMzMzIDguNTMzMzM0IDg1LjMzMzMzM2gzMjBsLTUxLjItODUuMzMzMzMzeiBtLTI1NiAxMjhjMzguNCAxMjMuNzMzMzMzIDEzMi4yNjY2NjcgMjI2LjEzMzMzMyAyNTYgMjY4LjhsMTU3Ljg2NjY2Ni0yNjguOEgxMDYuNjY2NjY3eiBtNDc3Ljg2NjY2NiAwbC0xNjYuNCAyOTAuMTMzMzMzYzI5Ljg2NjY2NyA4LjUzMzMzMyA1OS43MzMzMzMgOC41MzMzMzMgOTMuODY2NjY3IDguNTMzMzM0IDEwMi40IDAgMTk2LjI2NjY2Ny0zNC4xMzMzMzMgMjY4LjgtOTguMTMzMzM0bC0xNTcuODY2NjY3LTI2OC44LTM4LjQgNjguMjY2NjY3eiIgcC1pZD0iMTA3MzgiIGZpbGw9IiMwMGE0ZmYiPjwvcGF0aD48L3N2Zz4=\")\n}\n\n.md-icon-table:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTTEgMWgxNHYxNEgxVjF6bTYgMTJWOUgzdjRoNHptMiAwaDRWOUg5djR6TTcgM0gzdjRoNFYzem0yIDB2NGg0VjNIOXoiIGZpbGw9IiM2NjYiIC8+PC9zdmc+);\n}\n.md-icon-table:hover::before,\n.md-icon-table.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTTEgMWgxNHYxNEgxVjF6bTYgMTJWOUgzdjRoNHptMiAwaDRWOUg5djR6TTcgM0gzdjRoNFYzem0yIDB2NGg0VjNIOXoiIGZpbGw9IiMwMGE0ZmYiIC8+PC9zdmc+);\n}\n\n.md-icon-preview:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTIgMTcuMDVoOC45NVYyNkg1MnoiIGZpbGw9IiM2NjYiIC8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aC0yIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01Ny4wNSAxMkg2NnY4Ljk1aC04Ljk1eiIgZmlsbD0iIzY2NiIgLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoLTMiPjxwYXRoIGNsYXNzPSJjbHMtMSIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1IDU4Ljk5NyAxOC45OTMpIiBkPSJNNTYgMThoNnYyaC02eiIgZmlsbD0iIzY2NiIgLz48L2NsaXBQYXRoPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik04IDRhNi41MiA2LjUyIDAgMCAxIDUuODQgNEE2LjUyIDYuNTIgMCAwIDEgOCAxMmE2LjUyIDYuNTIgMCAwIDEtNS44NC00QTYuNTIgNi41MiAwIDAgMSA4IDRtMC0yYTguNjYgOC42NiAwIDAgMC04IDYgOC42NiA4LjY2IDAgMCAwIDggNiA4LjY2IDguNjYgMCAwIDAgOC02IDguNjYgOC42NiAwIDAgMC04LTZ6IiBmaWxsPSIjNjY2IiAvPjxjaXJjbGUgY2xhc3M9ImNscy01IiBjeD0iOCIgY3k9IjgiIHI9IjIiIGZpbGw9IiM2NjYiIC8+PC9zdmc+);\n}\n.md-icon-preview:hover::before,\n.md-icon-preview.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTIgMTcuMDVoOC45NVYyNkg1MnoiIGZpbGw9IiMwMGE0ZmYiIC8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aC0yIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01Ny4wNSAxMkg2NnY4Ljk1aC04Ljk1eiIgZmlsbD0iIzAwYTRmZiIgLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoLTMiPjxwYXRoIGNsYXNzPSJjbHMtMSIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1IDU4Ljk5NyAxOC45OTMpIiBkPSJNNTYgMThoNnYyaC02eiIgZmlsbD0iIzAwYTRmZiIgLz48L2NsaXBQYXRoPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik04IDRhNi41MiA2LjUyIDAgMCAxIDUuODQgNEE2LjUyIDYuNTIgMCAwIDEgOCAxMmE2LjUyIDYuNTIgMCAwIDEtNS44NC00QTYuNTIgNi41MiAwIDAgMSA4IDRtMC0yYTguNjYgOC42NiAwIDAgMC04IDYgOC42NiA4LjY2IDAgMCAwIDggNiA4LjY2IDguNjYgMCAwIDAgOC02IDguNjYgOC42NiAwIDAgMC04LTZ6IiBmaWxsPSIjMDBhNGZmIiAvPjxjaXJjbGUgY2xhc3M9ImNscy01IiBjeD0iOCIgY3k9IjgiIHI9IjIiIGZpbGw9IiMwMGE0ZmYiIC8+PC9zdmc+);\n}\n\n.md-icon-side-by-side:before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzYwMDE2MjE4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEyNTEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNOTI4IDY0SDk2QzQyLjk4IDY0IDAgMTA2Ljk4IDAgMTYwdjcwNGMwIDUzLjAyIDQyLjk4IDk2IDk2IDk2aDgzMmM1My4wMiAwIDk2LTQyLjk4IDk2LTk2VjE2MGMwLTUzLjAyLTQyLjk4LTk2LTk2LTk2ek00NDggODMySDEyOFYzMjBoMzIwdjUxMnogbTQ0OCAwSDU3NlYzMjBoMzIwdjUxMnoiIHAtaWQ9IjEyNTIiIGZpbGw9IiM1NTU1NTUiPjwvcGF0aD48L3N2Zz4=\")\n}\n.md-icon-side-by-side:hover::before,\n.md-icon-side-by-side.active::before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzYwMDE2MjE4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEyNTEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNOTI4IDY0SDk2QzQyLjk4IDY0IDAgMTA2Ljk4IDAgMTYwdjcwNGMwIDUzLjAyIDQyLjk4IDk2IDk2IDk2aDgzMmM1My4wMiAwIDk2LTQyLjk4IDk2LTk2VjE2MGMwLTUzLjAyLTQyLjk4LTk2LTk2LTk2ek00NDggODMySDEyOFYzMjBoMzIwdjUxMnogbTQ0OCAwSDU3NlYzMjBoMzIwdjUxMnoiIHAtaWQ9IjEyNTIiIGZpbGw9IiMwMGE0ZmYiPjwvcGF0aD48L3N2Zz4=\")\n}\n\n.md-icon-clean-block:before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk3OTg2MTYyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwOTggMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE3MjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjE0LjQ1MzEyNSIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMS45NjcyMzIgODA0LjU4NTQ3MmwxOTEuOTg3NzEyLTIxOS40MTQ1MjgtNDM4LjgyOTA1NiAwLTE5MS45ODc3MTIgMjE5LjQxNDUyOCA0MzguODI5MDU2IDB6bTU3OC44MjAwOTYtNjE1LjM4OTE4NHE4LjU3MDg4IDE5LjQyNzMyOCA1LjQyODIyNCA0MC44NTQ1Mjh0LTE3LjQyNzQ1NiAzNy40MjYxNzZsLTUxMS45NjcyMzIgNTg1LjEwNTQwOHEtMjEuNzEyODk2IDI1LjE0MTI0OC01NC44NTM2MzIgMjUuMTQxMjQ4bC00MzguODI5MDU2IDBxLTIxLjcxMjg5NiAwLTM5LjcxMTc0NC0xMS43MTM1MzZ0LTI3LjE0MTEyLTMxLjE0MDg2NHEtOC41NzA4OC0xOS40MjczMjgtNS40MjgyMjQtNDAuODU0NTI4dDE3LjQyNzQ1Ni0zNy40MjYxNzZsNTExLjk2NzIzMi01ODUuMTA1NDA4cTIxLjcxMjg5Ni0yNS4xNDEyNDggNTQuODUzNjMyLTI1LjE0MTI0OGw0MzguODI5MDU2IDBxMjEuNzEyODk2IDAgMzkuNzExNzQ0IDExLjcxMzUzNnQyNy4xNDExMiAzMS4xNDA4NjR6IiBwLWlkPSIxNzIyIiBmaWxsPSIjNTU1NTU1Ij48L3BhdGg+PC9zdmc+\")\n}\n.md-icon-clean-block:hover::before,\n.md-icon-clean-block.active::before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk3OTg2MTYyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwOTggMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE3MjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjE0LjQ1MzEyNSIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMS45NjcyMzIgODA0LjU4NTQ3MmwxOTEuOTg3NzEyLTIxOS40MTQ1MjgtNDM4LjgyOTA1NiAwLTE5MS45ODc3MTIgMjE5LjQxNDUyOCA0MzguODI5MDU2IDB6bTU3OC44MjAwOTYtNjE1LjM4OTE4NHE4LjU3MDg4IDE5LjQyNzMyOCA1LjQyODIyNCA0MC44NTQ1Mjh0LTE3LjQyNzQ1NiAzNy40MjYxNzZsLTUxMS45NjcyMzIgNTg1LjEwNTQwOHEtMjEuNzEyODk2IDI1LjE0MTI0OC01NC44NTM2MzIgMjUuMTQxMjQ4bC00MzguODI5MDU2IDBxLTIxLjcxMjg5NiAwLTM5LjcxMTc0NC0xMS43MTM1MzZ0LTI3LjE0MTEyLTMxLjE0MDg2NHEtOC41NzA4OC0xOS40MjczMjgtNS40MjgyMjQtNDAuODU0NTI4dDE3LjQyNzQ1Ni0zNy40MjYxNzZsNTExLjk2NzIzMi01ODUuMTA1NDA4cTIxLjcxMjg5Ni0yNS4xNDEyNDggNTQuODUzNjMyLTI1LjE0MTI0OGw0MzguODI5MDU2IDBxMjEuNzEyODk2IDAgMzkuNzExNzQ0IDExLjcxMzUzNnQyNy4xNDExMiAzMS4xNDA4NjR6IiBwLWlkPSIxNzIyIiBmaWxsPSIjMDBhNGZmIj48L3BhdGg+PC9zdmc+\")\n}\n\n.md-icon-horizontal-rule:before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk4MTc2MjYwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI2MzQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMCA0MTZ2MTkyYzAgMTcuNjcyIDE0LjMyOCAzMiAzMiAzMmg5NjBjMTcuNjcyIDAgMzItMTQuMzI4IDMyLTMydi0xOTJjMC0xNy42NzItMTQuMzI4LTMyLTMyLTMySDMyYy0xNy42NzIgMC0zMiAxNC4zMjgtMzIgMzJ6IiBwLWlkPSIyNjM1IiBmaWxsPSIjNTU1NTU1Ij48L3BhdGg+PC9zdmc+\")\n}\n.md-icon-horizontal-rule:hover::before,\n.md-icon-horizontal-rule.active::before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk4MTc2MjYwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI2MzQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMCA0MTZ2MTkyYzAgMTcuNjcyIDE0LjMyOCAzMiAzMiAzMmg5NjBjMTcuNjcyIDAgMzItMTQuMzI4IDMyLTMydi0xOTJjMC0xNy42NzItMTQuMzI4LTMyLTMyLTMySDMyYy0xNy42NzIgMC0zMiAxNC4zMjgtMzIgMzJ6IiBwLWlkPSIyNjM1IiBmaWxsPSIjMDBhNGZmIj48L3BhdGg+PC9zdmc+\")\n}\n\n.md-icon-fullscreen:before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk4NjY3MzAyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM1NjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODA2LjI1MzcyNiAzMDkuMTc0ODU3bC0yMDIuODI1MTQzIDIwMi44MjUxNDMgMjAyLjgyNTE0MyAyMDIuODI1MTQzIDgyLjI4NTcxNC04Mi4yODU3MTRxMTYuNjAzNDI5LTE3LjcwMDU3MSA0MC4wMDkxNDMtNy45NzI1NzEgMjIuMzA4NTcxIDkuNzI4IDIyLjMwODU3MSAzMy43MTg4NTdsMCAyNTZxMCAxNC44NDgtMTAuODI1MTQzIDI1Ljc0NjI4NnQtMjUuNzQ2Mjg2IDEwLjgyNTE0M2wtMjU2IDBxLTIzLjk5MDg1NyAwLTMzLjcxODg1Ny0yMi44MjA1NzEtOS43MjgtMjIuMzA4NTcxIDcuOTcyNTcxLTM5LjQyNGw4Mi4yODU3MTQtODIuMjg1NzE0LTIwMi44MjUxNDMtMjAyLjgyNTE0My0yMDIuODI1MTQzIDIwMi44MjUxNDMgODIuMjg1NzE0IDgyLjI4NTcxNHExNy43MDA1NzEgMTcuMTE1NDI5IDcuOTcyNTcxIDM5LjQyNC05LjcyOCAyMi44MjA1NzEtMzMuNzE4ODU3IDIyLjgyMDU3MWwtMjU2IDBxLTE0Ljg0OCAwLTI1Ljc0NjI4Ni0xMC44MjUxNDN0LTEwLjgyNTE0My0yNS43NDYyODZsMC0yNTZxMC0yMy45OTA4NTcgMjIuODIwNTcxLTMzLjcxODg1NyAyMi4zMDg1NzEtOS43MjggMzkuNDI0IDcuOTcyNTcxbDgyLjI4NTcxNCA4Mi4yODU3MTQgMjAyLjgyNTE0My0yMDIuODI1MTQzLTIwMi44MjUxNDMtMjAyLjgyNTE0My04Mi4yODU3MTQgODIuMjg1NzE0cS0xMC44MjUxNDMgMTAuODI1MTQzLTI1Ljc0NjI4NiAxMC44MjUxNDMtNi44NzU0MjkgMC0xMy42Nzc3MTQtMi44NTI1NzEtMjIuODIwNTcxLTkuNzI4LTIyLjgyMDU3MS0zMy43MTg4NTdsMC0yNTZxMC0xNC44NDggMTAuODI1MTQzLTI1Ljc0NjI4NnQyNS43NDYyODYtMTAuODI1MTQzbDI1NiAwcTIzLjk5MDg1NyAwIDMzLjcxODg1NyAyMi44MjA1NzEgOS43MjggMjIuMzA4NTcxLTcuOTcyNTcxIDM5LjQyNGwtODIuMjg1NzE0IDgyLjI4NTcxNCAyMDIuODI1MTQzIDIwMi44MjUxNDMgMjAyLjgyNTE0My0yMDIuODI1MTQzLTgyLjI4NTcxNC04Mi4yODU3MTRxLTE3LjcwMDU3MS0xNy4xMTU0MjktNy45NzI1NzEtMzkuNDI0IDkuNzI4LTIyLjgyMDU3MSAzMy43MTg4NTctMjIuODIwNTcxbDI1NiAwcTE0Ljg0OCAwIDI1Ljc0NjI4NiAxMC44MjUxNDN0MTAuODI1MTQzIDI1Ljc0NjI4NmwwIDI1NnEwIDIzLjk5MDg1Ny0yMi4zMDg1NzEgMzMuNzE4ODU3LTcuNDYwNTcxIDIuODUyNTcxLTE0LjI2Mjg1NyAyLjg1MjU3MS0xNC44NDggMC0yNS43NDYyODYtMTAuODI1MTQzeiIgcC1pZD0iMzU2MiIgZmlsbD0iIzU1NTU1NSI+PC9wYXRoPjwvc3ZnPg==\")\n}\n.md-icon-fullscreen:hover::before,\n.md-icon-fullscreen.active::before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk4NjY3MzAyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM1NjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODA2LjI1MzcyNiAzMDkuMTc0ODU3bC0yMDIuODI1MTQzIDIwMi44MjUxNDMgMjAyLjgyNTE0MyAyMDIuODI1MTQzIDgyLjI4NTcxNC04Mi4yODU3MTRxMTYuNjAzNDI5LTE3LjcwMDU3MSA0MC4wMDkxNDMtNy45NzI1NzEgMjIuMzA4NTcxIDkuNzI4IDIyLjMwODU3MSAzMy43MTg4NTdsMCAyNTZxMCAxNC44NDgtMTAuODI1MTQzIDI1Ljc0NjI4NnQtMjUuNzQ2Mjg2IDEwLjgyNTE0M2wtMjU2IDBxLTIzLjk5MDg1NyAwLTMzLjcxODg1Ny0yMi44MjA1NzEtOS43MjgtMjIuMzA4NTcxIDcuOTcyNTcxLTM5LjQyNGw4Mi4yODU3MTQtODIuMjg1NzE0LTIwMi44MjUxNDMtMjAyLjgyNTE0My0yMDIuODI1MTQzIDIwMi44MjUxNDMgODIuMjg1NzE0IDgyLjI4NTcxNHExNy43MDA1NzEgMTcuMTE1NDI5IDcuOTcyNTcxIDM5LjQyNC05LjcyOCAyMi44MjA1NzEtMzMuNzE4ODU3IDIyLjgyMDU3MWwtMjU2IDBxLTE0Ljg0OCAwLTI1Ljc0NjI4Ni0xMC44MjUxNDN0LTEwLjgyNTE0My0yNS43NDYyODZsMC0yNTZxMC0yMy45OTA4NTcgMjIuODIwNTcxLTMzLjcxODg1NyAyMi4zMDg1NzEtOS43MjggMzkuNDI0IDcuOTcyNTcxbDgyLjI4NTcxNCA4Mi4yODU3MTQgMjAyLjgyNTE0My0yMDIuODI1MTQzLTIwMi44MjUxNDMtMjAyLjgyNTE0My04Mi4yODU3MTQgODIuMjg1NzE0cS0xMC44MjUxNDMgMTAuODI1MTQzLTI1Ljc0NjI4NiAxMC44MjUxNDMtNi44NzU0MjkgMC0xMy42Nzc3MTQtMi44NTI1NzEtMjIuODIwNTcxLTkuNzI4LTIyLjgyMDU3MS0zMy43MTg4NTdsMC0yNTZxMC0xNC44NDggMTAuODI1MTQzLTI1Ljc0NjI4NnQyNS43NDYyODYtMTAuODI1MTQzbDI1NiAwcTIzLjk5MDg1NyAwIDMzLjcxODg1NyAyMi44MjA1NzEgOS43MjggMjIuMzA4NTcxLTcuOTcyNTcxIDM5LjQyNGwtODIuMjg1NzE0IDgyLjI4NTcxNCAyMDIuODI1MTQzIDIwMi44MjUxNDMgMjAyLjgyNTE0My0yMDIuODI1MTQzLTgyLjI4NTcxNC04Mi4yODU3MTRxLTE3LjcwMDU3MS0xNy4xMTU0MjktNy45NzI1NzEtMzkuNDI0IDkuNzI4LTIyLjgyMDU3MSAzMy43MTg4NTctMjIuODIwNTcxbDI1NiAwcTE0Ljg0OCAwIDI1Ljc0NjI4NiAxMC44MjUxNDN0MTAuODI1MTQzIDI1Ljc0NjI4NmwwIDI1NnEwIDIzLjk5MDg1Ny0yMi4zMDg1NzEgMzMuNzE4ODU3LTcuNDYwNTcxIDIuODUyNTcxLTE0LjI2Mjg1NyAyLjg1MjU3MS0xNC44NDggMC0yNS43NDYyODYtMTAuODI1MTQzeiIgcC1pZD0iMzU2MiIgZmlsbD0iIzAwYTRmZiI+PC9wYXRoPjwvc3ZnPg==\")\n}\n\n.md-icon-guide:before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk4ODE2MTI3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ0ODEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDAuNUMyMjkuNSAwLjUgMC41IDIyOS41IDAuNSA1MTJzMjI5IDUxMS41IDUxMS41IDUxMS41YzI4Mi41IDAgNTExLjUtMjI5IDUxMS41LTUxMS41Uzc5NC41IDAuNSA1MTIgMC41ek01MTIgODA0LjNjLTI1LjIgMC00NS43LTIwLjQtNDUuNy00NS43czIwLjQtNDUuNyA0NS43LTQ1LjdjMjUuMiAwIDQ1LjcgMjAuNCA0NS43IDQ1LjdTNTM3LjIgODA0LjMgNTEyIDgwNC4zek01ODEuOCA1MzAuNmMtNDQuOCAyNi42LTQzLjIgNjEuNS00My4yIDYzLjJsMCA1My4zYzAgMTYuNi0xMS41IDI5LjMtMzAuNCAyOS4zLTE5IDAtMzAuNi0xMi43LTMwLjYtMjkuM2wwLTUxLjdjLTEuNy0yNi42IDEwLTc4LjEgNjkuOC0xMTQuNyAyOS45LTE4LjMgNjMuNi00OS45IDYzLjYtOTYuNCAwLTU2LjUtNDQuMi05OC41LTEwMC43LTk4LjUtNTYuNSAwLTEwMC43IDQyLTEwMC43IDk4LjUgMCAxNi42LTE0LjQgMjkuOS0zMSAyOS45LTE2LjYgMC0zMS0xMy4zLTMxLTI5LjkgMC05MS40IDczLjEtMTY0LjYgMTY0LjQtMTY0LjZzMTY0LjQgNzEuNSAxNjQuNCAxNjIuOUM2NzYuNCA0NDAuOCA2NDMuMiA0OTQgNTgxLjggNTMwLjZ6IiBwLWlkPSI0NDgyIiBmaWxsPSIjNTU1NTU1Ij48L3BhdGg+PC9zdmc+\")\n}\n.md-icon-guide:hover::before,\n.md-icon-guide.active::before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk4ODE2MTI3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ0ODEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDAuNUMyMjkuNSAwLjUgMC41IDIyOS41IDAuNSA1MTJzMjI5IDUxMS41IDUxMS41IDUxMS41YzI4Mi41IDAgNTExLjUtMjI5IDUxMS41LTUxMS41Uzc5NC41IDAuNSA1MTIgMC41ek01MTIgODA0LjNjLTI1LjIgMC00NS43LTIwLjQtNDUuNy00NS43czIwLjQtNDUuNyA0NS43LTQ1LjdjMjUuMiAwIDQ1LjcgMjAuNCA0NS43IDQ1LjdTNTM3LjIgODA0LjMgNTEyIDgwNC4zek01ODEuOCA1MzAuNmMtNDQuOCAyNi42LTQzLjIgNjEuNS00My4yIDYzLjJsMCA1My4zYzAgMTYuNi0xMS41IDI5LjMtMzAuNCAyOS4zLTE5IDAtMzAuNi0xMi43LTMwLjYtMjkuM2wwLTUxLjdjLTEuNy0yNi42IDEwLTc4LjEgNjkuOC0xMTQuNyAyOS45LTE4LjMgNjMuNi00OS45IDYzLjYtOTYuNCAwLTU2LjUtNDQuMi05OC41LTEwMC43LTk4LjUtNTYuNSAwLTEwMC43IDQyLTEwMC43IDk4LjUgMCAxNi42LTE0LjQgMjkuOS0zMSAyOS45LTE2LjYgMC0zMS0xMy4zLTMxLTI5LjkgMC05MS40IDczLjEtMTY0LjYgMTY0LjQtMTY0LjZzMTY0LjQgNzEuNSAxNjQuNCAxNjIuOUM2NzYuNCA0NDAuOCA2NDMuMiA0OTQgNTgxLjggNTMwLjZ6IiBwLWlkPSI0NDgyIiBmaWxsPSIjMDBhNGZmIj48L3BhdGg+PC9zdmc+\")\n}\n\n.md-icon-undo:before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk5MDQ4MDkwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUzOTUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNDI0LjY2NiA0NDguNjY2SDI0Yy0xMy4yNTQgMC0yNC0xMC43NDYtMjQtMjRWMjRDMCAxMC43NDYgMTAuNzQ2IDAgMjQgMGg5NmMxMy4yNTQgMCAyNCAxMC43NDYgMjQgMjR2MTU2LjIyNEMyMzUuNTQ2IDc4LjU1OCAzNjguNTIgMTQuOTQgNTE2LjM1IDE2LjAxNGMyNzMuODEyIDEuOTg4IDQ5Mi44OTYgMjIzLjI0NiA0OTIuMzE0IDQ5Ny4wNjRDMTAwOC4wODIgNzg2LjUxNiA3ODYuMjQgMTAwOCA1MTIuNjY2IDEwMDhjLTEyOC4xNzggMC0yNDQuOTkyLTQ4LjYyNi0zMzMuMDItMTI4LjQzLTEwLjE5OC05LjI0NC0xMC42NjgtMjUuMTA4LTAuOTM0LTM0Ljg0bDY3LjkzNC02Ny45MzRjOC45NDgtOC45NDggMjMuMzI0LTkuNDM0IDMyLjgwMi0xLjA1QzM0MS41MiA4MzAuNjcyIDQyMy4xNiA4NjQgNTEyLjY2NiA4NjRjMTk0LjUzNiAwIDM1Mi0xNTcuNDMyIDM1Mi0zNTIgMC0xOTQuNTM0LTE1Ny40MzItMzUyLTM1Mi0zNTItMTE2Ljk5MiAwLTIyMC41NiA1Ni45NTItMjg0LjU0OCAxNDQuNjY2aDE5Ni41NDhjMTMuMjU0IDAgMjQgMTAuNzQ2IDI0IDI0djk2YzAgMTMuMjU0LTEwLjc0NiAyNC0yNCAyNHoiIHAtaWQ9IjUzOTYiIGZpbGw9IiM1NTU1NTUiPjwvcGF0aD48L3N2Zz4=\")\n}\n.md-icon-undo:hover::before,\n.md-icon-undo.active::before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk5MDQ4MDkwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUzOTUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNDI0LjY2NiA0NDguNjY2SDI0Yy0xMy4yNTQgMC0yNC0xMC43NDYtMjQtMjRWMjRDMCAxMC43NDYgMTAuNzQ2IDAgMjQgMGg5NmMxMy4yNTQgMCAyNCAxMC43NDYgMjQgMjR2MTU2LjIyNEMyMzUuNTQ2IDc4LjU1OCAzNjguNTIgMTQuOTQgNTE2LjM1IDE2LjAxNGMyNzMuODEyIDEuOTg4IDQ5Mi44OTYgMjIzLjI0NiA0OTIuMzE0IDQ5Ny4wNjRDMTAwOC4wODIgNzg2LjUxNiA3ODYuMjQgMTAwOCA1MTIuNjY2IDEwMDhjLTEyOC4xNzggMC0yNDQuOTkyLTQ4LjYyNi0zMzMuMDItMTI4LjQzLTEwLjE5OC05LjI0NC0xMC42NjgtMjUuMTA4LTAuOTM0LTM0Ljg0bDY3LjkzNC02Ny45MzRjOC45NDgtOC45NDggMjMuMzI0LTkuNDM0IDMyLjgwMi0xLjA1QzM0MS41MiA4MzAuNjcyIDQyMy4xNiA4NjQgNTEyLjY2NiA4NjRjMTk0LjUzNiAwIDM1Mi0xNTcuNDMyIDM1Mi0zNTIgMC0xOTQuNTM0LTE1Ny40MzItMzUyLTM1Mi0zNTItMTE2Ljk5MiAwLTIyMC41NiA1Ni45NTItMjg0LjU0OCAxNDQuNjY2aDE5Ni41NDhjMTMuMjU0IDAgMjQgMTAuNzQ2IDI0IDI0djk2YzAgMTMuMjU0LTEwLjc0NiAyNC0yNCAyNHoiIHAtaWQ9IjUzOTYiIGZpbGw9IiMwMGE0ZmYiPjwvcGF0aD48L3N2Zz4=\")\n}\n\n.md-icon-redo:before {\n  background-size: 19px;\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk5MjY0NTc1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjY1NDUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODc3LjcyOCAxNDYuMjcydjI1NnEwIDE0Ljg0OC0xMC44NDggMjUuNzI4dC0yNS43MjggMTAuODQ4aC0yNTZxLTI0IDAtMzMuNzI4LTIyLjg0OC05LjcyOC0yMi4yNzIgOC0zOS40MjRsNzguODQ4LTc4Ljg0OHEtODQuNTc2LTc4LjI3Mi0xOTkuNDI0LTc4LjI3Mi01OS40MjQgMC0xMTMuNDQgMjMuMTM2dC05My40NCA2Mi41Ni02Mi41NiA5My40NC0yMy4xMzYgMTEzLjQ0IDIzLjEzNiAxMTMuNDQgNjIuNTYgOTMuNDQgOTMuNDQgNjIuNTYgMTEzLjQ0IDIzLjEzNnE2OCAwIDEyOC41NzYtMjkuNzI4dDEwMi4yNzItODRxNC01LjcyOCAxMy4xNTItNi44NDggOC41NzYgMCAxNC4yNzIgNS4xNTJsNzguMjcyIDc4Ljg0OHE1LjE1MiA0LjU3NiA1LjQ0IDExLjcxMnQtNC4yODggMTIuODY0cS02Mi4yNzIgNzUuNDI0LTE1MC44NDggMTE2Ljg2NHQtMTg2Ljg0OCA0MS40NHEtODkuMTUyIDAtMTcwLjI3Mi0zNC44NDh0LTE0MC05My43MjgtOTMuNzI4LTE0MFQwIDUxMi4wNjR0MzQuODQ4LTE3MC4yNzIgOTMuNzI4LTE0MCAxNDAtOTMuNzI4IDE3MC4yNzItMzQuODQ4cTg0IDAgMTYyLjU2IDMxLjcxMnQxMzkuNzEyIDg5LjQ0bDc0LjI3Mi03My43MjhxMTYuNTc2LTE3LjcyOCA0MC04IDIyLjI3MiA5LjcyOCAyMi4yNzIgMzMuNzI4eiIgZmlsbD0iIzU1NTU1NSIgcC1pZD0iNjU0NiI+PC9wYXRoPjwvc3ZnPg==\")\n}\n.md-icon-redo:hover::before,\n.md-icon-redo.active::before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk5MzUzMDAwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjY3NjgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODc3LjcyOCAxNDYuMjcydjI1NnEwIDE0Ljg0OC0xMC44NDggMjUuNzI4dC0yNS43MjggMTAuODQ4aC0yNTZxLTI0IDAtMzMuNzI4LTIyLjg0OC05LjcyOC0yMi4yNzIgOC0zOS40MjRsNzguODQ4LTc4Ljg0OHEtODQuNTc2LTc4LjI3Mi0xOTkuNDI0LTc4LjI3Mi01OS40MjQgMC0xMTMuNDQgMjMuMTM2dC05My40NCA2Mi41Ni02Mi41NiA5My40NC0yMy4xMzYgMTEzLjQ0IDIzLjEzNiAxMTMuNDQgNjIuNTYgOTMuNDQgOTMuNDQgNjIuNTYgMTEzLjQ0IDIzLjEzNnE2OCAwIDEyOC41NzYtMjkuNzI4dDEwMi4yNzItODRxNC01LjcyOCAxMy4xNTItNi44NDggOC41NzYgMCAxNC4yNzIgNS4xNTJsNzguMjcyIDc4Ljg0OHE1LjE1MiA0LjU3NiA1LjQ0IDExLjcxMnQtNC4yODggMTIuODY0cS02Mi4yNzIgNzUuNDI0LTE1MC44NDggMTE2Ljg2NHQtMTg2Ljg0OCA0MS40NHEtODkuMTUyIDAtMTcwLjI3Mi0zNC44NDh0LTE0MC05My43MjgtOTMuNzI4LTE0MFQwIDUxMi4wNjR0MzQuODQ4LTE3MC4yNzIgOTMuNzI4LTE0MCAxNDAtOTMuNzI4IDE3MC4yNzItMzQuODQ4cTg0IDAgMTYyLjU2IDMxLjcxMnQxMzkuNzEyIDg5LjQ0bDc0LjI3Mi03My43MjhxMTYuNTc2LTE3LjcyOCA0MC04IDIyLjI3MiA5LjcyOCAyMi4yNzIgMzMuNzI4eiIgZmlsbD0iIzAwYTRmZiIgcC1pZD0iNjc2OSI+PC9wYXRoPjwvc3ZnPg==\")\n}\n\n.md-icon-file:before {\n  background-size: 19px;\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyNDE2NTI2OTUxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEyNzA1IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUyMS44OTg2NjcgNjE4LjM5MzZhNTUuMDIyOTMzIDU1LjAyMjkzMyAwIDAgMCA3Ny42MTkyIDBsMTc0LjYyNjEzMy0xNzQuNTU3ODY3YTEzNy4zODY2NjcgMTM3LjM4NjY2NyAwIDAgMCAwLTE5My45Nzk3MzMgMTM3LjM1MjUzMyAxMzcuMzUyNTMzIDAgMCAwLTE5My45Nzk3MzMgMGwtMzI5Ljc2MjEzNCAzMjkuNzk2MjY3YTEzNy4yMTYgMTM3LjIxNiAwIDAgMCAwIDE5My45Nzk3MzMgMTM3LjIxNiAxMzcuMjE2IDAgMCAwIDE5My45Nzk3MzQgMGw5LjY1OTczMy05Ljc2MjEzM2E0MS4xNjQ4IDQxLjE2NDggMCAwIDEgNTguMTk3MzMzIDU4LjE5NzMzM2wtOS42NTk3MzMgOS43NjIxMzNjLTg2LjA1MDEzMyA4NS42MDY0LTIyNC44NzA0IDg1LjUwNC0zMTAuMzc0NCAwLTg1LjUzODEzMy04NS41MzgxMzMtODUuNjc0NjY3LTIyNC4yOTAxMzMgMC0zMTAuMzc0NGwzMjkuNzk2MjY3LTMyOS43NjIxMzNhMjE5LjU0NTYgMjE5LjU0NTYgMCAwIDEgMzA5Ljc5NDEzMyAwLjU0NjEzMyAyMTkuNTExNDY3IDIxOS41MTE0NjcgMCAwIDEgMC41MTIgMzA5Ljc2bC0xNzQuNTkyIDE3NC41OTJhMTM3LjMxODQgMTM3LjMxODQgMCAwIDEtMTkzLjk3OTczMyAwIDEzNy4zMTg0IDEzNy4zMTg0IDAgMCAxIDAtMTkzLjk3OTczM2wxNjQuODY0LTE2NC44NjRhNDEuMTY0OCA0MS4xNjQ4IDAgMCAxIDU4LjIzMTQ2NiA1OC4xNjMybC0xNjQuODk4MTMzIDE2NC44NjRhNTQuOTU0NjY3IDU0Ljk1NDY2NyAwIDAgMCAwIDc3LjYxOTJ6IiBwLWlkPSIxMjcwNiIgZmlsbD0iIzU1NTU1NSI+PC9wYXRoPjwvc3ZnPg==\")\n}\n.md-icon-file:hover::before,\n.md-icon-file.active::before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyNDE2NTI2OTUxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEyNzA1IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUyMS44OTg2NjcgNjE4LjM5MzZhNTUuMDIyOTMzIDU1LjAyMjkzMyAwIDAgMCA3Ny42MTkyIDBsMTc0LjYyNjEzMy0xNzQuNTU3ODY3YTEzNy4zODY2NjcgMTM3LjM4NjY2NyAwIDAgMCAwLTE5My45Nzk3MzMgMTM3LjM1MjUzMyAxMzcuMzUyNTMzIDAgMCAwLTE5My45Nzk3MzMgMGwtMzI5Ljc2MjEzNCAzMjkuNzk2MjY3YTEzNy4yMTYgMTM3LjIxNiAwIDAgMCAwIDE5My45Nzk3MzMgMTM3LjIxNiAxMzcuMjE2IDAgMCAwIDE5My45Nzk3MzQgMGw5LjY1OTczMy05Ljc2MjEzM2E0MS4xNjQ4IDQxLjE2NDggMCAwIDEgNTguMTk3MzMzIDU4LjE5NzMzM2wtOS42NTk3MzMgOS43NjIxMzNjLTg2LjA1MDEzMyA4NS42MDY0LTIyNC44NzA0IDg1LjUwNC0zMTAuMzc0NCAwLTg1LjUzODEzMy04NS41MzgxMzMtODUuNjc0NjY3LTIyNC4yOTAxMzMgMC0zMTAuMzc0NGwzMjkuNzk2MjY3LTMyOS43NjIxMzNhMjE5LjU0NTYgMjE5LjU0NTYgMCAwIDEgMzA5Ljc5NDEzMyAwLjU0NjEzMyAyMTkuNTExNDY3IDIxOS41MTE0NjcgMCAwIDEgMC41MTIgMzA5Ljc2bC0xNzQuNTkyIDE3NC41OTJhMTM3LjMxODQgMTM3LjMxODQgMCAwIDEtMTkzLjk3OTczMyAwIDEzNy4zMTg0IDEzNy4zMTg0IDAgMCAxIDAtMTkzLjk3OTczM2wxNjQuODY0LTE2NC44NjRhNDEuMTY0OCA0MS4xNjQ4IDAgMCAxIDU4LjIzMTQ2NiA1OC4xNjMybC0xNjQuODk4MTMzIDE2NC44NjRhNTQuOTU0NjY3IDU0Ljk1NDY2NyAwIDAgMCAwIDc3LjYxOTJ6IiBwLWlkPSIxMjcwNiIgZmlsbD0iIzAwYTRmZiI+PC9wYXRoPjwvc3ZnPg==\")\n}";
styleInject(css_248z);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

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
            marked.use.apply(marked, __spreadArrays([markedOptions], others));
        }
        return marked.parse(_md);
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
        _this._boxEl = createRef();
        _this._editorEl = createRef();
        _this._fileInputEl = createRef();
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
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { ref: this._boxEl, className: "md-editor" },
                React.createElement("textarea", { ref: this._editorEl })),
            React.createElement("input", { type: "file", ref: this._fileInputEl, accept: "image/x-png,image/gif,image/jpeg", hidden: true })));
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
}(Component));

var MarkdownEditorField = function (props) {
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
    return React.createElement(MarkdownEditor, __assign({ ref: _el }, props));
};

export default MarkdownEditor;
export { MarkdownEditorField, htmlDomSanitize, mdToHTML };
