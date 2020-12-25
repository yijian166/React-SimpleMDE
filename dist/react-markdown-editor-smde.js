(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('simplemde')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'simplemde'], factory) :
    (global = global || self, factory(global['react-markdown-editor-smde'] = {}, global.React, global.SimpleMDE));
}(this, (function (exports, React, SimpleMDE) { 'use strict';

    var React__default = 'default' in React ? React['default'] : React;
    SimpleMDE = SimpleMDE && SimpleMDE.hasOwnProperty('default') ? SimpleMDE['default'] : SimpleMDE;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
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
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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

    var css = ".md-editor {\n  text-align: left;\n  font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;\n  font-size: 16px;\n  color: #1a1a1a;\n}\n.md-editor .editor-toolbar {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 50px;\n  overflow-x: auto;\n  background-color: white;\n  opacity: 1;\n}\n.md-editor .editor-toolbar a {\n  opacity: 0.6;\n}\n.md-editor .editor-toolbar a:hover {\n  opacity: 0.8;\n}\n.md-icon {\n  font-style: normal;\n  font-variant-ligatures: normal;\n  font-variant-caps: normal;\n  font-variant-numeric: normal;\n  font-variant-east-asian: normal;\n  font-weight: normal;\n  font-stretch: normal;\n  font-size: inherit;\n  line-height: 1;\n  margin-right: 2px;\n}\n.md-icon:before {\n  content: '';\n  width: 30px;\n  height: 30px;\n  display: inline-block;\n  background-repeat: no-repeat;\n  background-size: 16px;\n  background-position: center;\n}\n.editor-preview img {\n  max-width: 100%;\n  \n}\n.editor-preview em {\n  font-style: italic!important;\n}\n.editor-preview b, \n.editor-preview strong {\n  font-weight: bolder!important;\n}\n\n.md-icon-bold:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTEwLjUgOGMxIDAgMi0xLjUzIDItMi41MkEzLjUgMy41IDAgMCAwIDkgMkgzLjV2MTJoNS41N2EzLjQzIDMuNDMgMCAwIDAgMy40My0zLjQzYzAtMS0xLTIuNTctMi0yLjU3em0tNS00SDlhMS41IDEuNSAwIDAgMSAwIDNINS41em0zLjU3IDhINS41VjloMy40M2ExLjU3IDEuNTcgMCAwIDEgMS41NyAxLjU3QTEuNDMgMS40MyAwIDAgMSA5LjA3IDEyeiIgZmlsbD0iIzY2NiIgLz48L3N2Zz4=);\n}\n.md-icon-bold:hover::before,\n.md-icon-bold.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTEwLjUgOGMxIDAgMi0xLjUzIDItMi41MkEzLjUgMy41IDAgMCAwIDkgMkgzLjV2MTJoNS41N2EzLjQzIDMuNDMgMCAwIDAgMy40My0zLjQzYzAtMS0xLTIuNTctMi0yLjU3em0tNS00SDlhMS41IDEuNSAwIDAgMSAwIDNINS41em0zLjU3IDhINS41VjloMy40M2ExLjU3IDEuNTcgMCAwIDEgMS41NyAxLjU3QTEuNDMgMS40MyAwIDAgMSA5LjA3IDEyeiIgZmlsbD0iIzAwYTRmZiIgLz48L3N2Zz4=);\n}\n\n.md-icon-italic:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTkuNjcgNGwtMS4zNCA4SDEwdjJINHYtMmgyLjMzbDEuMzQtOEg2VjJoNnYyeiIgZmlsbD0iIzY2NiIgZmlsbC1ydWxlPSJldmVub2RkIiAvPjwvc3ZnPg==);\n}\n.md-icon-italic:hover::before,\n.md-icon-italic.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTkuNjcgNGwtMS4zNCA4SDEwdjJINHYtMmgyLjMzbDEuMzQtOEg2VjJoNnYyeiIgZmlsbD0iIzAwYTRmZiIgZmlsbC1ydWxlPSJldmVub2RkIiAvPjwvc3ZnPg==);\n}\n\n.md-icon-strikethrough:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+PHBhdGggZmlsbD0iIzY2NiIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzE4LjczIDEwOS4zN2wtMS40MiAxLjQxLTUuMDctNS4wNyA1LjA3LTUuMDcgMS40MiAxLjQxLTMuNjYgMy42NiAzLjY2IDMuNjZ6IiAvPjwvY2xpcFBhdGg+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTExLjMgOGE0IDQgMCAwIDAtMi4yMy0uODlsLTEuMzEtLjJhMi40MiAyLjQyIDAgMCAxLTEuMjItLjUgMS4yMiAxLjIyIDAgMCAxLS4zOS0xYzAtMSAuNzctMS42NCAyLTEuNjRhMy4yMiAzLjIyIDAgMCAxIDIuNC44NWwuMS4xIDEuMzMtMS4zMS0uMTEtLjExQTQuOTQgNC45NCAwIDAgMCA4LjE2IDJjLTIuNDMgMC00IDEuMzgtNCAzLjUzYTMgMyAwIDAgMCAuODkgMi4zMSA0LjEgNC4xIDAgMCAwIDIuMjYgMUw4LjY3IDlhMS44NyAxLjg3IDAgMCAxIDEuMTguNDUgMS40MSAxLjQxIDAgMCAxIC40IDEuMDhjMCAxLS44MSAxLjYxLTIuMjMgMS42MWEzLjYxIDMuNjEgMCAwIDEtMi44Mi0xLjA2TDUuMDkgMTFsLTEuMzggMS4zMy4xLjExQTUuMzUgNS4zNSAwIDAgMCA4IDE0YzIuNiAwIDQuMjktMS4zOCA0LjI5LTMuNTNBMy4xNiAzLjE2IDAgMCAwIDExLjMgOHoiIGZpbGw9IiM2NjYiIC8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMiA3aDEydjFIMnoiIGZpbGw9IiM2NjYiIC8+PC9zdmc+);\n}\n.md-icon-strikethrough:hover::before,\n.md-icon-strikethrough.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+PHBhdGggZmlsbD0iIzAwYTRmZiIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzE4LjczIDEwOS4zN2wtMS40MiAxLjQxLTUuMDctNS4wNyA1LjA3LTUuMDcgMS40MiAxLjQxLTMuNjYgMy42NiAzLjY2IDMuNjZ6IiAvPjwvY2xpcFBhdGg+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTExLjMgOGE0IDQgMCAwIDAtMi4yMy0uODlsLTEuMzEtLjJhMi40MiAyLjQyIDAgMCAxLTEuMjItLjUgMS4yMiAxLjIyIDAgMCAxLS4zOS0xYzAtMSAuNzctMS42NCAyLTEuNjRhMy4yMiAzLjIyIDAgMCAxIDIuNC44NWwuMS4xIDEuMzMtMS4zMS0uMTEtLjExQTQuOTQgNC45NCAwIDAgMCA4LjE2IDJjLTIuNDMgMC00IDEuMzgtNCAzLjUzYTMgMyAwIDAgMCAuODkgMi4zMSA0LjEgNC4xIDAgMCAwIDIuMjYgMUw4LjY3IDlhMS44NyAxLjg3IDAgMCAxIDEuMTguNDUgMS40MSAxLjQxIDAgMCAxIC40IDEuMDhjMCAxLS44MSAxLjYxLTIuMjMgMS42MWEzLjYxIDMuNjEgMCAwIDEtMi44Mi0xLjA2TDUuMDkgMTFsLTEuMzggMS4zMy4xLjExQTUuMzUgNS4zNSAwIDAgMCA4IDE0YzIuNiAwIDQuMjktMS4zOCA0LjI5LTMuNTNBMy4xNiAzLjE2IDAgMCAwIDExLjMgOHoiIGZpbGw9IiMwMGE0ZmYiIC8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMiA3aDEydjFIMnoiIGZpbGw9IiMwMGE0ZmYiIC8+PC9zdmc+);\n}\n\n.md-icon-heading:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iIzY2NiIgZD0iTTEwLjUgMnY1aC01VjJoLTJ2MTJoMlY5aDV2NWgyVjJoLTJ6IiAvPjwvc3ZnPg==);\n}\n.md-icon-heading:hover::before,\n.md-icon-heading.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iIzAwYTRmZiIgZD0iTTEwLjUgMnY1aC01VjJoLTJ2MTJoMlY5aDV2NWgyVjJoLTJ6IiAvPjwvc3ZnPg==);\n}\n\n.md-icon-heading-smaller:before {\n  background-size: 14px;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iIzY2NiIgZD0iTTEwLjUgMnY1aC01VjJoLTJ2MTJoMlY5aDV2NWgyVjJoLTJ6IiAvPjwvc3ZnPg==);\n}\n.md-icon-heading-smaller:hover::before,\n.md-icon-heading-smaller.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iIzAwYTRmZiIgZD0iTTEwLjUgMnY1aC01VjJoLTJ2MTJoMlY5aDV2NWgyVjJoLTJ6IiAvPjwvc3ZnPg==);\n}\n\n.md-icon-heading-bigger:before {\n  background-size: 18px;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iIzY2NiIgZD0iTTEwLjUgMnY1aC01VjJoLTJ2MTJoMlY5aDV2NWgyVjJoLTJ6IiAvPjwvc3ZnPg==);\n}\n.md-icon-heading-bigger:hover::before,\n.md-icon-heading-bigger.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iIzAwYTRmZiIgZD0iTTEwLjUgMnY1aC01VjJoLTJ2MTJoMlY5aDV2NWgyVjJoLTJ6IiAvPjwvc3ZnPg==);\n}\n\n\n.md-icon-heading-1:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iLTMgMSAxNiAxNiI+PHBhdGggZD0iTTEwLjMgMTV2LTIuNGgtLjh2LS41aC41Yy4xIDAgLjMtLjEuMy0uMi4xLS4xLjEtLjEuMS0uM3YtLjFoLjZWMTVoLS43ek02IDNoMnYxMkg2di01SDF2NWgtMlYzaDJ2NWg1VjN6IiBmaWxsPSIjNjY2IiAvPjwvc3ZnPg==);\n}\n.md-icon-heading-1:hover::before,\n.md-icon-heading-1.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iLTMgMSAxNiAxNiI+PHBhdGggZD0iTTEwLjMgMTV2LTIuNGgtLjh2LS41aC41Yy4xIDAgLjMtLjEuMy0uMi4xLS4xLjEtLjEuMS0uM3YtLjFoLjZWMTVoLS43ek02IDNoMnYxMkg2di01SDF2NWgtMlYzaDJ2NWg1VjN6IiBmaWxsPSIjMDBhNGZmIiAvPjwvc3ZnPg==);\n}\n\n.md-icon-heading-2:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iLTMgMiAxNiAxNiI+PHBhdGggZD0iTTEwLjQgMTQuNmMuMy0uMi41LS40LjYtLjUuMS0uMi4yLS4zLjItLjUgMC0uMSAwLS4zLS4xLS40LS4xLS4xLS4yLS4xLS40LS4xcy0uNC4xLS40LjItLjEuMi0uMS40aC0uN2MwLS4zLjEtLjUuMi0uNy4yLS40LjUtLjUgMS0uNS40IDAgLjcuMS45LjMuMi4yLjMuNS4zLjggMCAuMy0uMS41LS4yLjdsLS41LjUtLjMuMmMtLjIuMS0uMy4yLS40LjNsLS4yLjJoMS41di42SDkuNGMwLS4zLjEtLjUuMi0uNy4yLS4zLjUtLjYuOC0uOHpNNiA0aDJ2MTJINnYtNUgxdjVoLTJWNGgydjVoNVY0eiIgZmlsbD0iIzY2NiIgLz48L3N2Zz4=);\n}\n.md-icon-heading-2:hover::before,\n.md-icon-heading-2.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iLTMgMiAxNiAxNiI+PHBhdGggZD0iTTEwLjQgMTQuNmMuMy0uMi41LS40LjYtLjUuMS0uMi4yLS4zLjItLjUgMC0uMSAwLS4zLS4xLS40LS4xLS4xLS4yLS4xLS40LS4xcy0uNC4xLS40LjItLjEuMi0uMS40aC0uN2MwLS4zLjEtLjUuMi0uNy4yLS40LjUtLjUgMS0uNS40IDAgLjcuMS45LjMuMi4yLjMuNS4zLjggMCAuMy0uMS41LS4yLjdsLS41LjUtLjMuMmMtLjIuMS0uMy4yLS40LjNsLS4yLjJoMS41di42SDkuNGMwLS4zLjEtLjUuMi0uNy4yLS4zLjUtLjYuOC0uOHpNNiA0aDJ2MTJINnYtNUgxdjVoLTJWNGgydjVoNVY0eiIgZmlsbD0iIzAwYTRmZiIgLz48L3N2Zz4=);\n}\n\n.md-icon-heading-3:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iLTIgMSAxNiAxNiI+PHBhdGggZD0iTTEyLjUgMTNjLjEgMCAuMi4xLjMuMi4yLjIuMy40LjMuNyAwIC4zLS4xLjYtLjMuOC0uMi4yLS41LjMtLjkuMy0uNSAwLS44LS4yLTEtLjUtLjEtLjItLjItLjQtLjItLjdoLjdjMCAuMSAwIC4zLjEuNC4xLjIuMi4zLjUuMy4xIDAgLjMgMCAuNC0uMS4xLS4xLjItLjIuMi0uNHMtLjEtLjQtLjMtLjVjLS4xIDAtLjMtLjEtLjUtLjF2LS41Yy4yIDAgLjQgMCAuNS0uMS4yLS4xLjItLjIuMi0uNCAwLS4xIDAtLjItLjEtLjMtLjEtLjEtLjItLjEtLjMtLjEtLjIgMC0uMy4xLS40LjItLjEuMS0uMS4yLS4xLjRIMTFjMC0uMiAwLS4zLjEtLjUuMS0uMS4xLS4zLjMtLjQuMS0uMS4yLS4xLjMtLjIuMSAwIC4zLS4xLjUtLjEuMyAwIC42LjEuOC4zLjIuMi4zLjQuMy43IDAgLjItLjEuNC0uMi41LS41IDAtLjUuMS0uNi4xek03IDNoMnYxMkg3di01SDJ2NUgwVjNoMnY1aDVWM3oiIGZpbGw9IiM2NjYiIC8+PC9zdmc+);\n}\n.md-icon-heading-3:hover::before,\n.md-icon-heading-3.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iLTIgMSAxNiAxNiI+PHBhdGggZD0iTTEyLjUgMTNjLjEgMCAuMi4xLjMuMi4yLjIuMy40LjMuNyAwIC4zLS4xLjYtLjMuOC0uMi4yLS41LjMtLjkuMy0uNSAwLS44LS4yLTEtLjUtLjEtLjItLjItLjQtLjItLjdoLjdjMCAuMSAwIC4zLjEuNC4xLjIuMi4zLjUuMy4xIDAgLjMgMCAuNC0uMS4xLS4xLjItLjIuMi0uNHMtLjEtLjQtLjMtLjVjLS4xIDAtLjMtLjEtLjUtLjF2LS41Yy4yIDAgLjQgMCAuNS0uMS4yLS4xLjItLjIuMi0uNCAwLS4xIDAtLjItLjEtLjMtLjEtLjEtLjItLjEtLjMtLjEtLjIgMC0uMy4xLS40LjItLjEuMS0uMS4yLS4xLjRIMTFjMC0uMiAwLS4zLjEtLjUuMS0uMS4xLS4zLjMtLjQuMS0uMS4yLS4xLjMtLjIuMSAwIC4zLS4xLjUtLjEuMyAwIC42LjEuOC4zLjIuMi4zLjQuMy43IDAgLjItLjEuNC0uMi41LS41IDAtLjUuMS0uNi4xek03IDNoMnYxMkg3di01SDJ2NUgwVjNoMnY1aDVWM3oiIGZpbGw9IiMwMGE0ZmYiIC8+PC9zdmc+);\n}\n\n\n.md-icon-code:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE2Ij48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNLTE5IDFoMTR2MTRoLTE0em02IDEyVjloLTR2NHptMiAwaDRWOWgtNHptLTItMTBoLTR2NGg0em0yIDB2NGg0VjN6IiBmaWxsPSIjNjY2IiAvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgtMiI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjk4LjczIDEwOS4zN2wtMS40MiAxLjQxLTUuMDctNS4wNyA1LjA3LTUuMDcgMS40MiAxLjQxLTMuNjYgMy42NiAzLjY2IDMuNjZ6IiBmaWxsPSIjNjY2IiAvPjwvY2xpcFBhdGg+PC9kZWZzPjxwYXRoIGQ9Ik0xMi4zNCA1LjE3bDEuNDEtMS40MSAyLjgzIDIuODNMMTggOGwtMS40MSAxLjQxLTIuODMgMi44My0xLjQxLTEuNDFMMTUuMTcgOHpNOS4yNCAyaDJsLTMgMTJoLTJ6TTEuNDEgNi41OWwyLjgzLTIuODMgMS40MiAxLjQxTDIuODMgOGwyLjgzIDIuODMtMS40MiAxLjQxLTIuODMtMi44M0wwIDh6IiBmaWxsPSIjNjY2IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIC8+PC9zdmc+);\n}\n.md-icon-code:hover::before,\n.md-icon-code.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE2Ij48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNLTE5IDFoMTR2MTRoLTE0em02IDEyVjloLTR2NHptMiAwaDRWOWgtNHptLTItMTBoLTR2NGg0em0yIDB2NGg0VjN6IiBmaWxsPSIjMDBhNGZmIiAvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgtMiI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjk4LjczIDEwOS4zN2wtMS40MiAxLjQxLTUuMDctNS4wNyA1LjA3LTUuMDcgMS40MiAxLjQxLTMuNjYgMy42NiAzLjY2IDMuNjZ6IiBmaWxsPSIjMDBhNGZmIiAvPjwvY2xpcFBhdGg+PC9kZWZzPjxwYXRoIGQ9Ik0xMi4zNCA1LjE3bDEuNDEtMS40MSAyLjgzIDIuODNMMTggOGwtMS40MSAxLjQxLTIuODMgMi44My0xLjQxLTEuNDFMMTUuMTcgOHpNOS4yNCAyaDJsLTMgMTJoLTJ6TTEuNDEgNi41OWwyLjgzLTIuODMgMS40MiAxLjQxTDIuODMgOGwyLjgzIDIuODMtMS40MiAxLjQxLTIuODMtMi44M0wwIDh6IiBmaWxsPSIjMDBhNGZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIC8+PC9zdmc+);\n}\n\n.md-icon-quote:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTEzIDVWM0M5IDMgOSA4IDkgOHY1aDRWOGgtMmMwLTEgMC0zIDItM3pNMyA4djVoNFY4SDVjMC0xIDAtMyAyLTNWM0MzIDMgMyA4IDMgOHoiIGZpbGw9IiM2NjYiIC8+PC9zdmc+);\n}\n.md-icon-quote:hover::before,\n.md-icon-quote.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZD0iTTEzIDVWM0M5IDMgOSA4IDkgOHY1aDRWOGgtMmMwLTEgMC0zIDItM3pNMyA4djVoNFY4SDVjMC0xIDAtMyAyLTNWM0MzIDMgMyA4IDMgOHoiIGZpbGw9IiMwMGE0ZmYiIC8+PC9zdmc+);\n}\n\n.md-icon-unordered-list:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMSAzaDJ2Mkgxek01IDNoMTB2Mkg1ek01IDdoMTB2Mkg1ek01IDExaDEwdjJINXpNMSA3aDJ2Mkgxek0xIDExaDJ2MkgxeiIgZmlsbD0iIzY2NiIgLz48L3N2Zz4=);\n}\n.md-icon-unordered-list:hover::before,\n.md-icon-unordered-list.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMSAzaDJ2Mkgxek01IDNoMTB2Mkg1ek01IDdoMTB2Mkg1ek01IDExaDEwdjJINXpNMSA3aDJ2Mkgxek0xIDExaDJ2MkgxeiIgZmlsbD0iIzAwYTRmZiIgLz48L3N2Zz4=);\n}\n\n.md-icon-ordered-list:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMiA1aC43VjEuNDZoLS41OGEuNTguNTggMCAwIDEgMCAuMTQuNjEuNjEgMCAwIDEtLjEyLjI2LjY1LjY1IDAgMCAxLS4zOC4xNCAzLjA3IDMuMDcgMCAwIDEtLjQ2IDB2LjQ3SDJ6TTEuODggOC4zM2EyIDIgMCAwIDAtLjcuNzUgMS42NiAxLjY2IDAgMCAwLS4xNi43aDIuNDJ2LS42MUgxLjg5QS43OS43OSAwIDAgMSAyLjA1IDlsLjM2LS4yNy4yOC0uMmEyLjMzIDIuMzMgMCAwIDAgLjUxLS40NSAxLjExIDEuMTEgMCAwIDAgLjIzLS43IDEuMDggMS4wOCAwIDAgMC0uMzMtLjgyIDEuMjYgMS4yNiAwIDAgMC0uODktLjMxIDEgMSAwIDAgMC0xIC41MyAxLjcxIDEuNzEgMCAwIDAtLjE2LjczaC42OEExLjE4IDEuMTggMCAwIDEgMS44IDdhLjQ0LjQ0IDAgMCAxIC40My0uMjQuNDQuNDQgMCAwIDEgLjM2LjI0LjU2LjU2IDAgMCAxIC4xMi4zNy43My43MyAwIDAgMS0uMjIuNTEgNS4xNSA1LjE1IDAgMCAxLS42MS40NXpNMi45MSAxMi42OGEuNjQuNjQgMCAwIDAgLjI0LS4xOC43OC43OCAwIDAgMCAuMTktLjUuODguODggMCAwIDAtLjMxLS43IDEuMjMgMS4yMyAwIDAgMC0uODItLjMgMS40MSAxLjQxIDAgMCAwLS40Ni4wNy45NC45NCAwIDAgMC0uMzIuMTkgMS4xMiAxLjEyIDAgMCAwLS4yNy4zOCAxLjc0IDEuNzQgMCAwIDAtLjA5LjVoLjY1YS42Ni42NiAwIDAgMSAuMTEtLjQyLjQyLjQyIDAgMCAxIC4zNi0uMTYuNDMuNDMgMCAwIDEgLjMzLjEzLjQ2LjQ2IDAgMCAxIC4xMi4zMy40MS40MSAwIDAgMS0uMjMuNDIgMS4zMiAxLjMyIDAgMCAxLS40Ny4wN1YxM2ExLjQzIDEuNDMgMCAwIDEgLjUxLjA3LjQ2LjQ2IDAgMCAxIC4yOC40Ny41Mi41MiAwIDAgMS0uMTUuNC41MS41MSAwIDAgMS0uMzYuMTQuNDcuNDcgMCAwIDEtLjQ2LS4yNi44LjggMCAwIDEtLjA3LS4zNUgxYTEuNDUgMS40NSAwIDAgMCAuMTcuNjggMS4xMSAxLjExIDAgMCAwIDEgLjQ5IDEuMTggMS4xOCAwIDAgMCAuOTItLjM0IDEuMTMgMS4xMyAwIDAgMCAuMzEtLjc5Ljg3Ljg3IDAgMCAwLS4yNy0uNjcuNS41IDAgMCAwLS4yMi0uMTZ6TTQuOTkgM0gxNXYySDQuOTl6TTQuOTkgN0gxNXYySDQuOTl6TTQuOTkgMTFIMTV2Mkg0Ljk5eiIgZmlsbD0iIzY2NiIgLz48L3N2Zz4=);\n\n}\n.md-icon-ordered-list:hover::before,\n.md-icon-ordered-list.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMiA1aC43VjEuNDZoLS41OGEuNTguNTggMCAwIDEgMCAuMTQuNjEuNjEgMCAwIDEtLjEyLjI2LjY1LjY1IDAgMCAxLS4zOC4xNCAzLjA3IDMuMDcgMCAwIDEtLjQ2IDB2LjQ3SDJ6TTEuODggOC4zM2EyIDIgMCAwIDAtLjcuNzUgMS42NiAxLjY2IDAgMCAwLS4xNi43aDIuNDJ2LS42MUgxLjg5QS43OS43OSAwIDAgMSAyLjA1IDlsLjM2LS4yNy4yOC0uMmEyLjMzIDIuMzMgMCAwIDAgLjUxLS40NSAxLjExIDEuMTEgMCAwIDAgLjIzLS43IDEuMDggMS4wOCAwIDAgMC0uMzMtLjgyIDEuMjYgMS4yNiAwIDAgMC0uODktLjMxIDEgMSAwIDAgMC0xIC41MyAxLjcxIDEuNzEgMCAwIDAtLjE2LjczaC42OEExLjE4IDEuMTggMCAwIDEgMS44IDdhLjQ0LjQ0IDAgMCAxIC40My0uMjQuNDQuNDQgMCAwIDEgLjM2LjI0LjU2LjU2IDAgMCAxIC4xMi4zNy43My43MyAwIDAgMS0uMjIuNTEgNS4xNSA1LjE1IDAgMCAxLS42MS40NXpNMi45MSAxMi42OGEuNjQuNjQgMCAwIDAgLjI0LS4xOC43OC43OCAwIDAgMCAuMTktLjUuODguODggMCAwIDAtLjMxLS43IDEuMjMgMS4yMyAwIDAgMC0uODItLjMgMS40MSAxLjQxIDAgMCAwLS40Ni4wNy45NC45NCAwIDAgMC0uMzIuMTkgMS4xMiAxLjEyIDAgMCAwLS4yNy4zOCAxLjc0IDEuNzQgMCAwIDAtLjA5LjVoLjY1YS42Ni42NiAwIDAgMSAuMTEtLjQyLjQyLjQyIDAgMCAxIC4zNi0uMTYuNDMuNDMgMCAwIDEgLjMzLjEzLjQ2LjQ2IDAgMCAxIC4xMi4zMy40MS40MSAwIDAgMS0uMjMuNDIgMS4zMiAxLjMyIDAgMCAxLS40Ny4wN1YxM2ExLjQzIDEuNDMgMCAwIDEgLjUxLjA3LjQ2LjQ2IDAgMCAxIC4yOC40Ny41Mi41MiAwIDAgMS0uMTUuNC41MS41MSAwIDAgMS0uMzYuMTQuNDcuNDcgMCAwIDEtLjQ2LS4yNi44LjggMCAwIDEtLjA3LS4zNUgxYTEuNDUgMS40NSAwIDAgMCAuMTcuNjggMS4xMSAxLjExIDAgMCAwIDEgLjQ5IDEuMTggMS4xOCAwIDAgMCAuOTItLjM0IDEuMTMgMS4xMyAwIDAgMCAuMzEtLjc5Ljg3Ljg3IDAgMCAwLS4yNy0uNjcuNS41IDAgMCAwLS4yMi0uMTZ6TTQuOTkgM0gxNXYySDQuOTl6TTQuOTkgN0gxNXYySDQuOTl6TTQuOTkgMTFIMTV2Mkg0Ljk5eiIgZmlsbD0iIzAwYTRmZiIgLz48L3N2Zz4=);\n}\n\n.md-icon-link:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNy44MyAxMWwtMS40MiAxLjQxYTIgMiAwIDAgMS0yLjgyLTIuODJMNSA4LjE3bC43MS0uNzEtMS40Mi0xLjQxLTIuMTIgMi4xMmE0IDQgMCAwIDAgNS42NiA1LjY2bDIuMTItMi4xMi0xLjQxLTEuNDJ6TTEzLjgzIDIuMTdhNCA0IDAgMCAwLTUuNjYgMEw2LjA1IDQuMjlsMS40MSAxLjQyIDEuNDItMS40Mi43MS0uNzFhMiAyIDAgMSAxIDIuODMgMi44M2wtLjcxLjcxLTEuNDIgMS40MiAxLjQxIDEuNDEgMi4xMi0yLjEyYTQgNCAwIDAgMCAuMDEtNS42NnoiIGZpbGw9IiM2NjYiIC8+PHBhdGggY2xhc3M9ImNscy0xIiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUgOC4wMDIgNy45OTYpIiBkPSJNNSA3aDZ2Mkg1eiIgZmlsbD0iIzY2NiIgLz48L3N2Zz4=);\n}\n.md-icon-link:hover::before,\n.md-icon-link.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNy44MyAxMWwtMS40MiAxLjQxYTIgMiAwIDAgMS0yLjgyLTIuODJMNSA4LjE3bC43MS0uNzEtMS40Mi0xLjQxLTIuMTIgMi4xMmE0IDQgMCAwIDAgNS42NiA1LjY2bDIuMTItMi4xMi0xLjQxLTEuNDJ6TTEzLjgzIDIuMTdhNCA0IDAgMCAwLTUuNjYgMEw2LjA1IDQuMjlsMS40MSAxLjQyIDEuNDItMS40Mi43MS0uNzFhMiAyIDAgMSAxIDIuODMgMi44M2wtLjcxLjcxLTEuNDIgMS40MiAxLjQxIDEuNDEgMi4xMi0yLjEyYTQgNCAwIDAgMCAuMDEtNS42NnoiIGZpbGw9IiMwMGE0ZmYiIC8+PHBhdGggY2xhc3M9ImNscy0xIiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUgOC4wMDIgNy45OTYpIiBkPSJNNSA3aDZ2Mkg1eiIgZmlsbD0iIzAwYTRmZiIgLz48L3N2Zz4=);\n}\n\n.md-icon-image:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMCAxdjE0aDE2VjF6bTE0IDJ2Mi41Mkw5Ljc2IDguOTEgNS45MyA4IDIgOS41MlYzek0yIDEzdi0xLjMyTDYuMDcgMTBsNC4xNyAxTDE0IDh2NXoiIGZpbGw9IiM2NjYiIC8+PGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSI1LjUiIGN5PSI1LjUiIHI9IjEuNSIgZmlsbD0iIzY2NiIgLz48L3N2Zz4=);\n}\n.md-icon-image:hover::before,\n.md-icon-image.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMCAxdjE0aDE2VjF6bTE0IDJ2Mi41Mkw5Ljc2IDguOTEgNS45MyA4IDIgOS41MlYzek0yIDEzdi0xLjMyTDYuMDcgMTBsNC4xNyAxTDE0IDh2NXoiIGZpbGw9IiMwMGE0ZmYiIC8+PGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSI1LjUiIGN5PSI1LjUiIHI9IjEuNSIgZmlsbD0iIzAwYTRmZiIgLz48L3N2Zz4=);\n}\n\n.md-icon-choose-image:before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyNDE0Mzc5OTUyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwNzM3IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQwMS4wNjY2NjcgNDQ4bDIwNC44LTM1NC4xMzMzMzNjLTI5Ljg2NjY2Ny00LjI2NjY2Ny02NC04LjUzMzMzMy05My44NjY2NjctOC41MzMzMzQtMTAyLjQgMC0xOTYuMjY2NjY3IDM0LjEzMzMzMy0yNjguOCA5OC4xMzMzMzRsMTU3Ljg2NjY2NyAyNjguOHYtNC4yNjY2Njd6TTkxNy4zMzMzMzMgMzg0Yy0zOC40LTEyMy43MzMzMzMtMTMyLjI2NjY2Ny0yMjYuMTMzMzMzLTI1Ni0yNjguOEw1MDcuNzMzMzMzIDM4NGg0MDkuNnogbTEyLjggNDIuNjY2NjY3aC0zMjBsMTIuOCAyMS4zMzMzMzMgMjA0LjggMzU0LjEzMzMzM0M4OTYgNzI1LjMzMzMzMyA5MzguNjY2NjY3IDYyMi45MzMzMzMgOTM4LjY2NjY2NyA1MTJjMC0yOS44NjY2NjctNC4yNjY2NjctNTkuNzMzMzMzLTguNTMzMzM0LTg1LjMzMzMzM3pNMzYyLjY2NjY2NyA1MTJMMTk2LjI2NjY2NyAyMjEuODY2NjY3QzEyOCAyOTguNjY2NjY3IDg1LjMzMzMzMyA0MDEuMDY2NjY3IDg1LjMzMzMzMyA1MTJjMCAyOS44NjY2NjcgNC4yNjY2NjcgNTkuNzMzMzMzIDguNTMzMzM0IDg1LjMzMzMzM2gzMjBsLTUxLjItODUuMzMzMzMzeiBtLTI1NiAxMjhjMzguNCAxMjMuNzMzMzMzIDEzMi4yNjY2NjcgMjI2LjEzMzMzMyAyNTYgMjY4LjhsMTU3Ljg2NjY2Ni0yNjguOEgxMDYuNjY2NjY3eiBtNDc3Ljg2NjY2NiAwbC0xNjYuNCAyOTAuMTMzMzMzYzI5Ljg2NjY2NyA4LjUzMzMzMyA1OS43MzMzMzMgOC41MzMzMzMgOTMuODY2NjY3IDguNTMzMzM0IDEwMi40IDAgMTk2LjI2NjY2Ny0zNC4xMzMzMzMgMjY4LjgtOTguMTMzMzM0bC0xNTcuODY2NjY3LTI2OC44LTM4LjQgNjguMjY2NjY3eiIgcC1pZD0iMTA3MzgiIGZpbGw9IiM1NTU1NTUiPjwvcGF0aD48L3N2Zz4=\")\n}\n.md-icon-choose-image:hover::before,\n.md-icon-choose-image.active::before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyNDE0Mzc5OTUyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwNzM3IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQwMS4wNjY2NjcgNDQ4bDIwNC44LTM1NC4xMzMzMzNjLTI5Ljg2NjY2Ny00LjI2NjY2Ny02NC04LjUzMzMzMy05My44NjY2NjctOC41MzMzMzQtMTAyLjQgMC0xOTYuMjY2NjY3IDM0LjEzMzMzMy0yNjguOCA5OC4xMzMzMzRsMTU3Ljg2NjY2NyAyNjguOHYtNC4yNjY2Njd6TTkxNy4zMzMzMzMgMzg0Yy0zOC40LTEyMy43MzMzMzMtMTMyLjI2NjY2Ny0yMjYuMTMzMzMzLTI1Ni0yNjguOEw1MDcuNzMzMzMzIDM4NGg0MDkuNnogbTEyLjggNDIuNjY2NjY3aC0zMjBsMTIuOCAyMS4zMzMzMzMgMjA0LjggMzU0LjEzMzMzM0M4OTYgNzI1LjMzMzMzMyA5MzguNjY2NjY3IDYyMi45MzMzMzMgOTM4LjY2NjY2NyA1MTJjMC0yOS44NjY2NjctNC4yNjY2NjctNTkuNzMzMzMzLTguNTMzMzM0LTg1LjMzMzMzM3pNMzYyLjY2NjY2NyA1MTJMMTk2LjI2NjY2NyAyMjEuODY2NjY3QzEyOCAyOTguNjY2NjY3IDg1LjMzMzMzMyA0MDEuMDY2NjY3IDg1LjMzMzMzMyA1MTJjMCAyOS44NjY2NjcgNC4yNjY2NjcgNTkuNzMzMzMzIDguNTMzMzM0IDg1LjMzMzMzM2gzMjBsLTUxLjItODUuMzMzMzMzeiBtLTI1NiAxMjhjMzguNCAxMjMuNzMzMzMzIDEzMi4yNjY2NjcgMjI2LjEzMzMzMyAyNTYgMjY4LjhsMTU3Ljg2NjY2Ni0yNjguOEgxMDYuNjY2NjY3eiBtNDc3Ljg2NjY2NiAwbC0xNjYuNCAyOTAuMTMzMzMzYzI5Ljg2NjY2NyA4LjUzMzMzMyA1OS43MzMzMzMgOC41MzMzMzMgOTMuODY2NjY3IDguNTMzMzM0IDEwMi40IDAgMTk2LjI2NjY2Ny0zNC4xMzMzMzMgMjY4LjgtOTguMTMzMzM0bC0xNTcuODY2NjY3LTI2OC44LTM4LjQgNjguMjY2NjY3eiIgcC1pZD0iMTA3MzgiIGZpbGw9IiMwMGE0ZmYiPjwvcGF0aD48L3N2Zz4=\")\n}\n\n.md-icon-table:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTTEgMWgxNHYxNEgxVjF6bTYgMTJWOUgzdjRoNHptMiAwaDRWOUg5djR6TTcgM0gzdjRoNFYzem0yIDB2NGg0VjNIOXoiIGZpbGw9IiM2NjYiIC8+PC9zdmc+);\n}\n.md-icon-table:hover::before,\n.md-icon-table.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZD0iTTEgMWgxNHYxNEgxVjF6bTYgMTJWOUgzdjRoNHptMiAwaDRWOUg5djR6TTcgM0gzdjRoNFYzem0yIDB2NGg0VjNIOXoiIGZpbGw9IiMwMGE0ZmYiIC8+PC9zdmc+);\n}\n\n.md-icon-preview:before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTIgMTcuMDVoOC45NVYyNkg1MnoiIGZpbGw9IiM2NjYiIC8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aC0yIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01Ny4wNSAxMkg2NnY4Ljk1aC04Ljk1eiIgZmlsbD0iIzY2NiIgLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoLTMiPjxwYXRoIGNsYXNzPSJjbHMtMSIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1IDU4Ljk5NyAxOC45OTMpIiBkPSJNNTYgMThoNnYyaC02eiIgZmlsbD0iIzY2NiIgLz48L2NsaXBQYXRoPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik04IDRhNi41MiA2LjUyIDAgMCAxIDUuODQgNEE2LjUyIDYuNTIgMCAwIDEgOCAxMmE2LjUyIDYuNTIgMCAwIDEtNS44NC00QTYuNTIgNi41MiAwIDAgMSA4IDRtMC0yYTguNjYgOC42NiAwIDAgMC04IDYgOC42NiA4LjY2IDAgMCAwIDggNiA4LjY2IDguNjYgMCAwIDAgOC02IDguNjYgOC42NiAwIDAgMC04LTZ6IiBmaWxsPSIjNjY2IiAvPjxjaXJjbGUgY2xhc3M9ImNscy01IiBjeD0iOCIgY3k9IjgiIHI9IjIiIGZpbGw9IiM2NjYiIC8+PC9zdmc+);\n}\n.md-icon-preview:hover::before,\n.md-icon-preview.active::before {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTIgMTcuMDVoOC45NVYyNkg1MnoiIGZpbGw9IiMwMGE0ZmYiIC8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aC0yIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01Ny4wNSAxMkg2NnY4Ljk1aC04Ljk1eiIgZmlsbD0iIzAwYTRmZiIgLz48L2NsaXBQYXRoPjxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoLTMiPjxwYXRoIGNsYXNzPSJjbHMtMSIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1IDU4Ljk5NyAxOC45OTMpIiBkPSJNNTYgMThoNnYyaC02eiIgZmlsbD0iIzAwYTRmZiIgLz48L2NsaXBQYXRoPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik04IDRhNi41MiA2LjUyIDAgMCAxIDUuODQgNEE2LjUyIDYuNTIgMCAwIDEgOCAxMmE2LjUyIDYuNTIgMCAwIDEtNS44NC00QTYuNTIgNi41MiAwIDAgMSA4IDRtMC0yYTguNjYgOC42NiAwIDAgMC04IDYgOC42NiA4LjY2IDAgMCAwIDggNiA4LjY2IDguNjYgMCAwIDAgOC02IDguNjYgOC42NiAwIDAgMC04LTZ6IiBmaWxsPSIjMDBhNGZmIiAvPjxjaXJjbGUgY2xhc3M9ImNscy01IiBjeD0iOCIgY3k9IjgiIHI9IjIiIGZpbGw9IiMwMGE0ZmYiIC8+PC9zdmc+);\n}\n\n.md-icon-side-by-side:before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzYwMDE2MjE4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEyNTEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNOTI4IDY0SDk2QzQyLjk4IDY0IDAgMTA2Ljk4IDAgMTYwdjcwNGMwIDUzLjAyIDQyLjk4IDk2IDk2IDk2aDgzMmM1My4wMiAwIDk2LTQyLjk4IDk2LTk2VjE2MGMwLTUzLjAyLTQyLjk4LTk2LTk2LTk2ek00NDggODMySDEyOFYzMjBoMzIwdjUxMnogbTQ0OCAwSDU3NlYzMjBoMzIwdjUxMnoiIHAtaWQ9IjEyNTIiIGZpbGw9IiM1NTU1NTUiPjwvcGF0aD48L3N2Zz4=\")\n}\n.md-icon-side-by-side:hover::before,\n.md-icon-side-by-side.active::before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzYwMDE2MjE4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEyNTEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNOTI4IDY0SDk2QzQyLjk4IDY0IDAgMTA2Ljk4IDAgMTYwdjcwNGMwIDUzLjAyIDQyLjk4IDk2IDk2IDk2aDgzMmM1My4wMiAwIDk2LTQyLjk4IDk2LTk2VjE2MGMwLTUzLjAyLTQyLjk4LTk2LTk2LTk2ek00NDggODMySDEyOFYzMjBoMzIwdjUxMnogbTQ0OCAwSDU3NlYzMjBoMzIwdjUxMnoiIHAtaWQ9IjEyNTIiIGZpbGw9IiMwMGE0ZmYiPjwvcGF0aD48L3N2Zz4=\")\n}\n\n.md-icon-clean-block:before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk3OTg2MTYyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwOTggMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE3MjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjE0LjQ1MzEyNSIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMS45NjcyMzIgODA0LjU4NTQ3MmwxOTEuOTg3NzEyLTIxOS40MTQ1MjgtNDM4LjgyOTA1NiAwLTE5MS45ODc3MTIgMjE5LjQxNDUyOCA0MzguODI5MDU2IDB6bTU3OC44MjAwOTYtNjE1LjM4OTE4NHE4LjU3MDg4IDE5LjQyNzMyOCA1LjQyODIyNCA0MC44NTQ1Mjh0LTE3LjQyNzQ1NiAzNy40MjYxNzZsLTUxMS45NjcyMzIgNTg1LjEwNTQwOHEtMjEuNzEyODk2IDI1LjE0MTI0OC01NC44NTM2MzIgMjUuMTQxMjQ4bC00MzguODI5MDU2IDBxLTIxLjcxMjg5NiAwLTM5LjcxMTc0NC0xMS43MTM1MzZ0LTI3LjE0MTEyLTMxLjE0MDg2NHEtOC41NzA4OC0xOS40MjczMjgtNS40MjgyMjQtNDAuODU0NTI4dDE3LjQyNzQ1Ni0zNy40MjYxNzZsNTExLjk2NzIzMi01ODUuMTA1NDA4cTIxLjcxMjg5Ni0yNS4xNDEyNDggNTQuODUzNjMyLTI1LjE0MTI0OGw0MzguODI5MDU2IDBxMjEuNzEyODk2IDAgMzkuNzExNzQ0IDExLjcxMzUzNnQyNy4xNDExMiAzMS4xNDA4NjR6IiBwLWlkPSIxNzIyIiBmaWxsPSIjNTU1NTU1Ij48L3BhdGg+PC9zdmc+\")\n}\n.md-icon-clean-block:hover::before,\n.md-icon-clean-block.active::before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk3OTg2MTYyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwOTggMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE3MjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjE0LjQ1MzEyNSIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMS45NjcyMzIgODA0LjU4NTQ3MmwxOTEuOTg3NzEyLTIxOS40MTQ1MjgtNDM4LjgyOTA1NiAwLTE5MS45ODc3MTIgMjE5LjQxNDUyOCA0MzguODI5MDU2IDB6bTU3OC44MjAwOTYtNjE1LjM4OTE4NHE4LjU3MDg4IDE5LjQyNzMyOCA1LjQyODIyNCA0MC44NTQ1Mjh0LTE3LjQyNzQ1NiAzNy40MjYxNzZsLTUxMS45NjcyMzIgNTg1LjEwNTQwOHEtMjEuNzEyODk2IDI1LjE0MTI0OC01NC44NTM2MzIgMjUuMTQxMjQ4bC00MzguODI5MDU2IDBxLTIxLjcxMjg5NiAwLTM5LjcxMTc0NC0xMS43MTM1MzZ0LTI3LjE0MTEyLTMxLjE0MDg2NHEtOC41NzA4OC0xOS40MjczMjgtNS40MjgyMjQtNDAuODU0NTI4dDE3LjQyNzQ1Ni0zNy40MjYxNzZsNTExLjk2NzIzMi01ODUuMTA1NDA4cTIxLjcxMjg5Ni0yNS4xNDEyNDggNTQuODUzNjMyLTI1LjE0MTI0OGw0MzguODI5MDU2IDBxMjEuNzEyODk2IDAgMzkuNzExNzQ0IDExLjcxMzUzNnQyNy4xNDExMiAzMS4xNDA4NjR6IiBwLWlkPSIxNzIyIiBmaWxsPSIjMDBhNGZmIj48L3BhdGg+PC9zdmc+\")\n}\n\n.md-icon-horizontal-rule:before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk4MTc2MjYwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI2MzQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMCA0MTZ2MTkyYzAgMTcuNjcyIDE0LjMyOCAzMiAzMiAzMmg5NjBjMTcuNjcyIDAgMzItMTQuMzI4IDMyLTMydi0xOTJjMC0xNy42NzItMTQuMzI4LTMyLTMyLTMySDMyYy0xNy42NzIgMC0zMiAxNC4zMjgtMzIgMzJ6IiBwLWlkPSIyNjM1IiBmaWxsPSIjNTU1NTU1Ij48L3BhdGg+PC9zdmc+\")\n}\n.md-icon-horizontal-rule:hover::before,\n.md-icon-horizontal-rule.active::before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk4MTc2MjYwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI2MzQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMCA0MTZ2MTkyYzAgMTcuNjcyIDE0LjMyOCAzMiAzMiAzMmg5NjBjMTcuNjcyIDAgMzItMTQuMzI4IDMyLTMydi0xOTJjMC0xNy42NzItMTQuMzI4LTMyLTMyLTMySDMyYy0xNy42NzIgMC0zMiAxNC4zMjgtMzIgMzJ6IiBwLWlkPSIyNjM1IiBmaWxsPSIjMDBhNGZmIj48L3BhdGg+PC9zdmc+\")\n}\n\n.md-icon-fullscreen:before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk4NjY3MzAyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM1NjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODA2LjI1MzcyNiAzMDkuMTc0ODU3bC0yMDIuODI1MTQzIDIwMi44MjUxNDMgMjAyLjgyNTE0MyAyMDIuODI1MTQzIDgyLjI4NTcxNC04Mi4yODU3MTRxMTYuNjAzNDI5LTE3LjcwMDU3MSA0MC4wMDkxNDMtNy45NzI1NzEgMjIuMzA4NTcxIDkuNzI4IDIyLjMwODU3MSAzMy43MTg4NTdsMCAyNTZxMCAxNC44NDgtMTAuODI1MTQzIDI1Ljc0NjI4NnQtMjUuNzQ2Mjg2IDEwLjgyNTE0M2wtMjU2IDBxLTIzLjk5MDg1NyAwLTMzLjcxODg1Ny0yMi44MjA1NzEtOS43MjgtMjIuMzA4NTcxIDcuOTcyNTcxLTM5LjQyNGw4Mi4yODU3MTQtODIuMjg1NzE0LTIwMi44MjUxNDMtMjAyLjgyNTE0My0yMDIuODI1MTQzIDIwMi44MjUxNDMgODIuMjg1NzE0IDgyLjI4NTcxNHExNy43MDA1NzEgMTcuMTE1NDI5IDcuOTcyNTcxIDM5LjQyNC05LjcyOCAyMi44MjA1NzEtMzMuNzE4ODU3IDIyLjgyMDU3MWwtMjU2IDBxLTE0Ljg0OCAwLTI1Ljc0NjI4Ni0xMC44MjUxNDN0LTEwLjgyNTE0My0yNS43NDYyODZsMC0yNTZxMC0yMy45OTA4NTcgMjIuODIwNTcxLTMzLjcxODg1NyAyMi4zMDg1NzEtOS43MjggMzkuNDI0IDcuOTcyNTcxbDgyLjI4NTcxNCA4Mi4yODU3MTQgMjAyLjgyNTE0My0yMDIuODI1MTQzLTIwMi44MjUxNDMtMjAyLjgyNTE0My04Mi4yODU3MTQgODIuMjg1NzE0cS0xMC44MjUxNDMgMTAuODI1MTQzLTI1Ljc0NjI4NiAxMC44MjUxNDMtNi44NzU0MjkgMC0xMy42Nzc3MTQtMi44NTI1NzEtMjIuODIwNTcxLTkuNzI4LTIyLjgyMDU3MS0zMy43MTg4NTdsMC0yNTZxMC0xNC44NDggMTAuODI1MTQzLTI1Ljc0NjI4NnQyNS43NDYyODYtMTAuODI1MTQzbDI1NiAwcTIzLjk5MDg1NyAwIDMzLjcxODg1NyAyMi44MjA1NzEgOS43MjggMjIuMzA4NTcxLTcuOTcyNTcxIDM5LjQyNGwtODIuMjg1NzE0IDgyLjI4NTcxNCAyMDIuODI1MTQzIDIwMi44MjUxNDMgMjAyLjgyNTE0My0yMDIuODI1MTQzLTgyLjI4NTcxNC04Mi4yODU3MTRxLTE3LjcwMDU3MS0xNy4xMTU0MjktNy45NzI1NzEtMzkuNDI0IDkuNzI4LTIyLjgyMDU3MSAzMy43MTg4NTctMjIuODIwNTcxbDI1NiAwcTE0Ljg0OCAwIDI1Ljc0NjI4NiAxMC44MjUxNDN0MTAuODI1MTQzIDI1Ljc0NjI4NmwwIDI1NnEwIDIzLjk5MDg1Ny0yMi4zMDg1NzEgMzMuNzE4ODU3LTcuNDYwNTcxIDIuODUyNTcxLTE0LjI2Mjg1NyAyLjg1MjU3MS0xNC44NDggMC0yNS43NDYyODYtMTAuODI1MTQzeiIgcC1pZD0iMzU2MiIgZmlsbD0iIzU1NTU1NSI+PC9wYXRoPjwvc3ZnPg==\")\n}\n.md-icon-fullscreen:hover::before,\n.md-icon-fullscreen.active::before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk4NjY3MzAyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM1NjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODA2LjI1MzcyNiAzMDkuMTc0ODU3bC0yMDIuODI1MTQzIDIwMi44MjUxNDMgMjAyLjgyNTE0MyAyMDIuODI1MTQzIDgyLjI4NTcxNC04Mi4yODU3MTRxMTYuNjAzNDI5LTE3LjcwMDU3MSA0MC4wMDkxNDMtNy45NzI1NzEgMjIuMzA4NTcxIDkuNzI4IDIyLjMwODU3MSAzMy43MTg4NTdsMCAyNTZxMCAxNC44NDgtMTAuODI1MTQzIDI1Ljc0NjI4NnQtMjUuNzQ2Mjg2IDEwLjgyNTE0M2wtMjU2IDBxLTIzLjk5MDg1NyAwLTMzLjcxODg1Ny0yMi44MjA1NzEtOS43MjgtMjIuMzA4NTcxIDcuOTcyNTcxLTM5LjQyNGw4Mi4yODU3MTQtODIuMjg1NzE0LTIwMi44MjUxNDMtMjAyLjgyNTE0My0yMDIuODI1MTQzIDIwMi44MjUxNDMgODIuMjg1NzE0IDgyLjI4NTcxNHExNy43MDA1NzEgMTcuMTE1NDI5IDcuOTcyNTcxIDM5LjQyNC05LjcyOCAyMi44MjA1NzEtMzMuNzE4ODU3IDIyLjgyMDU3MWwtMjU2IDBxLTE0Ljg0OCAwLTI1Ljc0NjI4Ni0xMC44MjUxNDN0LTEwLjgyNTE0My0yNS43NDYyODZsMC0yNTZxMC0yMy45OTA4NTcgMjIuODIwNTcxLTMzLjcxODg1NyAyMi4zMDg1NzEtOS43MjggMzkuNDI0IDcuOTcyNTcxbDgyLjI4NTcxNCA4Mi4yODU3MTQgMjAyLjgyNTE0My0yMDIuODI1MTQzLTIwMi44MjUxNDMtMjAyLjgyNTE0My04Mi4yODU3MTQgODIuMjg1NzE0cS0xMC44MjUxNDMgMTAuODI1MTQzLTI1Ljc0NjI4NiAxMC44MjUxNDMtNi44NzU0MjkgMC0xMy42Nzc3MTQtMi44NTI1NzEtMjIuODIwNTcxLTkuNzI4LTIyLjgyMDU3MS0zMy43MTg4NTdsMC0yNTZxMC0xNC44NDggMTAuODI1MTQzLTI1Ljc0NjI4NnQyNS43NDYyODYtMTAuODI1MTQzbDI1NiAwcTIzLjk5MDg1NyAwIDMzLjcxODg1NyAyMi44MjA1NzEgOS43MjggMjIuMzA4NTcxLTcuOTcyNTcxIDM5LjQyNGwtODIuMjg1NzE0IDgyLjI4NTcxNCAyMDIuODI1MTQzIDIwMi44MjUxNDMgMjAyLjgyNTE0My0yMDIuODI1MTQzLTgyLjI4NTcxNC04Mi4yODU3MTRxLTE3LjcwMDU3MS0xNy4xMTU0MjktNy45NzI1NzEtMzkuNDI0IDkuNzI4LTIyLjgyMDU3MSAzMy43MTg4NTctMjIuODIwNTcxbDI1NiAwcTE0Ljg0OCAwIDI1Ljc0NjI4NiAxMC44MjUxNDN0MTAuODI1MTQzIDI1Ljc0NjI4NmwwIDI1NnEwIDIzLjk5MDg1Ny0yMi4zMDg1NzEgMzMuNzE4ODU3LTcuNDYwNTcxIDIuODUyNTcxLTE0LjI2Mjg1NyAyLjg1MjU3MS0xNC44NDggMC0yNS43NDYyODYtMTAuODI1MTQzeiIgcC1pZD0iMzU2MiIgZmlsbD0iIzAwYTRmZiI+PC9wYXRoPjwvc3ZnPg==\")\n}\n\n.md-icon-guide:before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk4ODE2MTI3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ0ODEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDAuNUMyMjkuNSAwLjUgMC41IDIyOS41IDAuNSA1MTJzMjI5IDUxMS41IDUxMS41IDUxMS41YzI4Mi41IDAgNTExLjUtMjI5IDUxMS41LTUxMS41Uzc5NC41IDAuNSA1MTIgMC41ek01MTIgODA0LjNjLTI1LjIgMC00NS43LTIwLjQtNDUuNy00NS43czIwLjQtNDUuNyA0NS43LTQ1LjdjMjUuMiAwIDQ1LjcgMjAuNCA0NS43IDQ1LjdTNTM3LjIgODA0LjMgNTEyIDgwNC4zek01ODEuOCA1MzAuNmMtNDQuOCAyNi42LTQzLjIgNjEuNS00My4yIDYzLjJsMCA1My4zYzAgMTYuNi0xMS41IDI5LjMtMzAuNCAyOS4zLTE5IDAtMzAuNi0xMi43LTMwLjYtMjkuM2wwLTUxLjdjLTEuNy0yNi42IDEwLTc4LjEgNjkuOC0xMTQuNyAyOS45LTE4LjMgNjMuNi00OS45IDYzLjYtOTYuNCAwLTU2LjUtNDQuMi05OC41LTEwMC43LTk4LjUtNTYuNSAwLTEwMC43IDQyLTEwMC43IDk4LjUgMCAxNi42LTE0LjQgMjkuOS0zMSAyOS45LTE2LjYgMC0zMS0xMy4zLTMxLTI5LjkgMC05MS40IDczLjEtMTY0LjYgMTY0LjQtMTY0LjZzMTY0LjQgNzEuNSAxNjQuNCAxNjIuOUM2NzYuNCA0NDAuOCA2NDMuMiA0OTQgNTgxLjggNTMwLjZ6IiBwLWlkPSI0NDgyIiBmaWxsPSIjNTU1NTU1Ij48L3BhdGg+PC9zdmc+\")\n}\n.md-icon-guide:hover::before,\n.md-icon-guide.active::before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk4ODE2MTI3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ0ODEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDAuNUMyMjkuNSAwLjUgMC41IDIyOS41IDAuNSA1MTJzMjI5IDUxMS41IDUxMS41IDUxMS41YzI4Mi41IDAgNTExLjUtMjI5IDUxMS41LTUxMS41Uzc5NC41IDAuNSA1MTIgMC41ek01MTIgODA0LjNjLTI1LjIgMC00NS43LTIwLjQtNDUuNy00NS43czIwLjQtNDUuNyA0NS43LTQ1LjdjMjUuMiAwIDQ1LjcgMjAuNCA0NS43IDQ1LjdTNTM3LjIgODA0LjMgNTEyIDgwNC4zek01ODEuOCA1MzAuNmMtNDQuOCAyNi42LTQzLjIgNjEuNS00My4yIDYzLjJsMCA1My4zYzAgMTYuNi0xMS41IDI5LjMtMzAuNCAyOS4zLTE5IDAtMzAuNi0xMi43LTMwLjYtMjkuM2wwLTUxLjdjLTEuNy0yNi42IDEwLTc4LjEgNjkuOC0xMTQuNyAyOS45LTE4LjMgNjMuNi00OS45IDYzLjYtOTYuNCAwLTU2LjUtNDQuMi05OC41LTEwMC43LTk4LjUtNTYuNSAwLTEwMC43IDQyLTEwMC43IDk4LjUgMCAxNi42LTE0LjQgMjkuOS0zMSAyOS45LTE2LjYgMC0zMS0xMy4zLTMxLTI5LjkgMC05MS40IDczLjEtMTY0LjYgMTY0LjQtMTY0LjZzMTY0LjQgNzEuNSAxNjQuNCAxNjIuOUM2NzYuNCA0NDAuOCA2NDMuMiA0OTQgNTgxLjggNTMwLjZ6IiBwLWlkPSI0NDgyIiBmaWxsPSIjMDBhNGZmIj48L3BhdGg+PC9zdmc+\")\n}\n\n.md-icon-undo:before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk5MDQ4MDkwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUzOTUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNDI0LjY2NiA0NDguNjY2SDI0Yy0xMy4yNTQgMC0yNC0xMC43NDYtMjQtMjRWMjRDMCAxMC43NDYgMTAuNzQ2IDAgMjQgMGg5NmMxMy4yNTQgMCAyNCAxMC43NDYgMjQgMjR2MTU2LjIyNEMyMzUuNTQ2IDc4LjU1OCAzNjguNTIgMTQuOTQgNTE2LjM1IDE2LjAxNGMyNzMuODEyIDEuOTg4IDQ5Mi44OTYgMjIzLjI0NiA0OTIuMzE0IDQ5Ny4wNjRDMTAwOC4wODIgNzg2LjUxNiA3ODYuMjQgMTAwOCA1MTIuNjY2IDEwMDhjLTEyOC4xNzggMC0yNDQuOTkyLTQ4LjYyNi0zMzMuMDItMTI4LjQzLTEwLjE5OC05LjI0NC0xMC42NjgtMjUuMTA4LTAuOTM0LTM0Ljg0bDY3LjkzNC02Ny45MzRjOC45NDgtOC45NDggMjMuMzI0LTkuNDM0IDMyLjgwMi0xLjA1QzM0MS41MiA4MzAuNjcyIDQyMy4xNiA4NjQgNTEyLjY2NiA4NjRjMTk0LjUzNiAwIDM1Mi0xNTcuNDMyIDM1Mi0zNTIgMC0xOTQuNTM0LTE1Ny40MzItMzUyLTM1Mi0zNTItMTE2Ljk5MiAwLTIyMC41NiA1Ni45NTItMjg0LjU0OCAxNDQuNjY2aDE5Ni41NDhjMTMuMjU0IDAgMjQgMTAuNzQ2IDI0IDI0djk2YzAgMTMuMjU0LTEwLjc0NiAyNC0yNCAyNHoiIHAtaWQ9IjUzOTYiIGZpbGw9IiM1NTU1NTUiPjwvcGF0aD48L3N2Zz4=\")\n}\n.md-icon-undo:hover::before,\n.md-icon-undo.active::before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk5MDQ4MDkwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUzOTUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNDI0LjY2NiA0NDguNjY2SDI0Yy0xMy4yNTQgMC0yNC0xMC43NDYtMjQtMjRWMjRDMCAxMC43NDYgMTAuNzQ2IDAgMjQgMGg5NmMxMy4yNTQgMCAyNCAxMC43NDYgMjQgMjR2MTU2LjIyNEMyMzUuNTQ2IDc4LjU1OCAzNjguNTIgMTQuOTQgNTE2LjM1IDE2LjAxNGMyNzMuODEyIDEuOTg4IDQ5Mi44OTYgMjIzLjI0NiA0OTIuMzE0IDQ5Ny4wNjRDMTAwOC4wODIgNzg2LjUxNiA3ODYuMjQgMTAwOCA1MTIuNjY2IDEwMDhjLTEyOC4xNzggMC0yNDQuOTkyLTQ4LjYyNi0zMzMuMDItMTI4LjQzLTEwLjE5OC05LjI0NC0xMC42NjgtMjUuMTA4LTAuOTM0LTM0Ljg0bDY3LjkzNC02Ny45MzRjOC45NDgtOC45NDggMjMuMzI0LTkuNDM0IDMyLjgwMi0xLjA1QzM0MS41MiA4MzAuNjcyIDQyMy4xNiA4NjQgNTEyLjY2NiA4NjRjMTk0LjUzNiAwIDM1Mi0xNTcuNDMyIDM1Mi0zNTIgMC0xOTQuNTM0LTE1Ny40MzItMzUyLTM1Mi0zNTItMTE2Ljk5MiAwLTIyMC41NiA1Ni45NTItMjg0LjU0OCAxNDQuNjY2aDE5Ni41NDhjMTMuMjU0IDAgMjQgMTAuNzQ2IDI0IDI0djk2YzAgMTMuMjU0LTEwLjc0NiAyNC0yNCAyNHoiIHAtaWQ9IjUzOTYiIGZpbGw9IiMwMGE0ZmYiPjwvcGF0aD48L3N2Zz4=\")\n}\n\n.md-icon-redo:before {\n  background-size: 19px;\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk5MjY0NTc1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjY1NDUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODc3LjcyOCAxNDYuMjcydjI1NnEwIDE0Ljg0OC0xMC44NDggMjUuNzI4dC0yNS43MjggMTAuODQ4aC0yNTZxLTI0IDAtMzMuNzI4LTIyLjg0OC05LjcyOC0yMi4yNzIgOC0zOS40MjRsNzguODQ4LTc4Ljg0OHEtODQuNTc2LTc4LjI3Mi0xOTkuNDI0LTc4LjI3Mi01OS40MjQgMC0xMTMuNDQgMjMuMTM2dC05My40NCA2Mi41Ni02Mi41NiA5My40NC0yMy4xMzYgMTEzLjQ0IDIzLjEzNiAxMTMuNDQgNjIuNTYgOTMuNDQgOTMuNDQgNjIuNTYgMTEzLjQ0IDIzLjEzNnE2OCAwIDEyOC41NzYtMjkuNzI4dDEwMi4yNzItODRxNC01LjcyOCAxMy4xNTItNi44NDggOC41NzYgMCAxNC4yNzIgNS4xNTJsNzguMjcyIDc4Ljg0OHE1LjE1MiA0LjU3NiA1LjQ0IDExLjcxMnQtNC4yODggMTIuODY0cS02Mi4yNzIgNzUuNDI0LTE1MC44NDggMTE2Ljg2NHQtMTg2Ljg0OCA0MS40NHEtODkuMTUyIDAtMTcwLjI3Mi0zNC44NDh0LTE0MC05My43MjgtOTMuNzI4LTE0MFQwIDUxMi4wNjR0MzQuODQ4LTE3MC4yNzIgOTMuNzI4LTE0MCAxNDAtOTMuNzI4IDE3MC4yNzItMzQuODQ4cTg0IDAgMTYyLjU2IDMxLjcxMnQxMzkuNzEyIDg5LjQ0bDc0LjI3Mi03My43MjhxMTYuNTc2LTE3LjcyOCA0MC04IDIyLjI3MiA5LjcyOCAyMi4yNzIgMzMuNzI4eiIgZmlsbD0iIzU1NTU1NSIgcC1pZD0iNjU0NiI+PC9wYXRoPjwvc3ZnPg==\")\n}\n.md-icon-redo:hover::before,\n.md-icon-redo.active::before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyMzk5MzUzMDAwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjY3NjgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODc3LjcyOCAxNDYuMjcydjI1NnEwIDE0Ljg0OC0xMC44NDggMjUuNzI4dC0yNS43MjggMTAuODQ4aC0yNTZxLTI0IDAtMzMuNzI4LTIyLjg0OC05LjcyOC0yMi4yNzIgOC0zOS40MjRsNzguODQ4LTc4Ljg0OHEtODQuNTc2LTc4LjI3Mi0xOTkuNDI0LTc4LjI3Mi01OS40MjQgMC0xMTMuNDQgMjMuMTM2dC05My40NCA2Mi41Ni02Mi41NiA5My40NC0yMy4xMzYgMTEzLjQ0IDIzLjEzNiAxMTMuNDQgNjIuNTYgOTMuNDQgOTMuNDQgNjIuNTYgMTEzLjQ0IDIzLjEzNnE2OCAwIDEyOC41NzYtMjkuNzI4dDEwMi4yNzItODRxNC01LjcyOCAxMy4xNTItNi44NDggOC41NzYgMCAxNC4yNzIgNS4xNTJsNzguMjcyIDc4Ljg0OHE1LjE1MiA0LjU3NiA1LjQ0IDExLjcxMnQtNC4yODggMTIuODY0cS02Mi4yNzIgNzUuNDI0LTE1MC44NDggMTE2Ljg2NHQtMTg2Ljg0OCA0MS40NHEtODkuMTUyIDAtMTcwLjI3Mi0zNC44NDh0LTE0MC05My43MjgtOTMuNzI4LTE0MFQwIDUxMi4wNjR0MzQuODQ4LTE3MC4yNzIgOTMuNzI4LTE0MCAxNDAtOTMuNzI4IDE3MC4yNzItMzQuODQ4cTg0IDAgMTYyLjU2IDMxLjcxMnQxMzkuNzEyIDg5LjQ0bDc0LjI3Mi03My43MjhxMTYuNTc2LTE3LjcyOCA0MC04IDIyLjI3MiA5LjcyOCAyMi4yNzIgMzMuNzI4eiIgZmlsbD0iIzAwYTRmZiIgcC1pZD0iNjc2OSI+PC9wYXRoPjwvc3ZnPg==\")\n}\n\n.md-icon-file:before {\n  background-size: 19px;\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyNDE2NTI2OTUxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEyNzA1IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUyMS44OTg2NjcgNjE4LjM5MzZhNTUuMDIyOTMzIDU1LjAyMjkzMyAwIDAgMCA3Ny42MTkyIDBsMTc0LjYyNjEzMy0xNzQuNTU3ODY3YTEzNy4zODY2NjcgMTM3LjM4NjY2NyAwIDAgMCAwLTE5My45Nzk3MzMgMTM3LjM1MjUzMyAxMzcuMzUyNTMzIDAgMCAwLTE5My45Nzk3MzMgMGwtMzI5Ljc2MjEzNCAzMjkuNzk2MjY3YTEzNy4yMTYgMTM3LjIxNiAwIDAgMCAwIDE5My45Nzk3MzMgMTM3LjIxNiAxMzcuMjE2IDAgMCAwIDE5My45Nzk3MzQgMGw5LjY1OTczMy05Ljc2MjEzM2E0MS4xNjQ4IDQxLjE2NDggMCAwIDEgNTguMTk3MzMzIDU4LjE5NzMzM2wtOS42NTk3MzMgOS43NjIxMzNjLTg2LjA1MDEzMyA4NS42MDY0LTIyNC44NzA0IDg1LjUwNC0zMTAuMzc0NCAwLTg1LjUzODEzMy04NS41MzgxMzMtODUuNjc0NjY3LTIyNC4yOTAxMzMgMC0zMTAuMzc0NGwzMjkuNzk2MjY3LTMyOS43NjIxMzNhMjE5LjU0NTYgMjE5LjU0NTYgMCAwIDEgMzA5Ljc5NDEzMyAwLjU0NjEzMyAyMTkuNTExNDY3IDIxOS41MTE0NjcgMCAwIDEgMC41MTIgMzA5Ljc2bC0xNzQuNTkyIDE3NC41OTJhMTM3LjMxODQgMTM3LjMxODQgMCAwIDEtMTkzLjk3OTczMyAwIDEzNy4zMTg0IDEzNy4zMTg0IDAgMCAxIDAtMTkzLjk3OTczM2wxNjQuODY0LTE2NC44NjRhNDEuMTY0OCA0MS4xNjQ4IDAgMCAxIDU4LjIzMTQ2NiA1OC4xNjMybC0xNjQuODk4MTMzIDE2NC44NjRhNTQuOTU0NjY3IDU0Ljk1NDY2NyAwIDAgMCAwIDc3LjYxOTJ6IiBwLWlkPSIxMjcwNiIgZmlsbD0iIzU1NTU1NSI+PC9wYXRoPjwvc3ZnPg==\")\n}\n.md-icon-file:hover::before,\n.md-icon-file.active::before {\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTcyNDE2NTI2OTUxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEyNzA1IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUyMS44OTg2NjcgNjE4LjM5MzZhNTUuMDIyOTMzIDU1LjAyMjkzMyAwIDAgMCA3Ny42MTkyIDBsMTc0LjYyNjEzMy0xNzQuNTU3ODY3YTEzNy4zODY2NjcgMTM3LjM4NjY2NyAwIDAgMCAwLTE5My45Nzk3MzMgMTM3LjM1MjUzMyAxMzcuMzUyNTMzIDAgMCAwLTE5My45Nzk3MzMgMGwtMzI5Ljc2MjEzNCAzMjkuNzk2MjY3YTEzNy4yMTYgMTM3LjIxNiAwIDAgMCAwIDE5My45Nzk3MzMgMTM3LjIxNiAxMzcuMjE2IDAgMCAwIDE5My45Nzk3MzQgMGw5LjY1OTczMy05Ljc2MjEzM2E0MS4xNjQ4IDQxLjE2NDggMCAwIDEgNTguMTk3MzMzIDU4LjE5NzMzM2wtOS42NTk3MzMgOS43NjIxMzNjLTg2LjA1MDEzMyA4NS42MDY0LTIyNC44NzA0IDg1LjUwNC0zMTAuMzc0NCAwLTg1LjUzODEzMy04NS41MzgxMzMtODUuNjc0NjY3LTIyNC4yOTAxMzMgMC0zMTAuMzc0NGwzMjkuNzk2MjY3LTMyOS43NjIxMzNhMjE5LjU0NTYgMjE5LjU0NTYgMCAwIDEgMzA5Ljc5NDEzMyAwLjU0NjEzMyAyMTkuNTExNDY3IDIxOS41MTE0NjcgMCAwIDEgMC41MTIgMzA5Ljc2bC0xNzQuNTkyIDE3NC41OTJhMTM3LjMxODQgMTM3LjMxODQgMCAwIDEtMTkzLjk3OTczMyAwIDEzNy4zMTg0IDEzNy4zMTg0IDAgMCAxIDAtMTkzLjk3OTczM2wxNjQuODY0LTE2NC44NjRhNDEuMTY0OCA0MS4xNjQ4IDAgMCAxIDU4LjIzMTQ2NiA1OC4xNjMybC0xNjQuODk4MTMzIDE2NC44NjRhNTQuOTU0NjY3IDU0Ljk1NDY2NyAwIDAgMCAwIDc3LjYxOTJ6IiBwLWlkPSIxMjcwNiIgZmlsbD0iIzAwYTRmZiI+PC9wYXRoPjwvc3ZnPg==\")\n}";
    styleInject(css);

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var marked = createCommonjsModule(function (module, exports) {
    (function(root) {

    /**
     * Block-Level Grammar
     */

    var block = {
      newline: /^\n+/,
      code: /^( {4}[^\n]+\n*)+/,
      fences: /^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
      hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
      heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
      blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
      list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
      html: '^ {0,3}(?:' // optional indentation
        + '<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
        + '|comment[^\\n]*(\\n+|$)' // (2)
        + '|<\\?[\\s\\S]*?\\?>\\n*' // (3)
        + '|<![A-Z][\\s\\S]*?>\\n*' // (4)
        + '|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*' // (5)
        + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)' // (6)
        + '|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) open tag
        + '|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) closing tag
        + ')',
      def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
      nptable: noop,
      table: noop,
      lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
      // regex template, placeholders will be replaced according to different paragraph
      // interruption rules of commonmark and the original markdown spec:
      _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
      text: /^[^\n]+/
    };

    block._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
    block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
    block.def = edit(block.def)
      .replace('label', block._label)
      .replace('title', block._title)
      .getRegex();

    block.bullet = /(?:[*+-]|\d{1,9}\.)/;
    block.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/;
    block.item = edit(block.item, 'gm')
      .replace(/bull/g, block.bullet)
      .getRegex();

    block.list = edit(block.list)
      .replace(/bull/g, block.bullet)
      .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
      .replace('def', '\\n+(?=' + block.def.source + ')')
      .getRegex();

    block._tag = 'address|article|aside|base|basefont|blockquote|body|caption'
      + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption'
      + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe'
      + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option'
      + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr'
      + '|track|ul';
    block._comment = /<!--(?!-?>)[\s\S]*?-->/;
    block.html = edit(block.html, 'i')
      .replace('comment', block._comment)
      .replace('tag', block._tag)
      .replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
      .getRegex();

    block.paragraph = edit(block._paragraph)
      .replace('hr', block.hr)
      .replace('heading', ' {0,3}#{1,6} +')
      .replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
      .replace('blockquote', ' {0,3}>')
      .replace('fences', ' {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
      .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
      .replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
      .getRegex();

    block.blockquote = edit(block.blockquote)
      .replace('paragraph', block.paragraph)
      .getRegex();

    /**
     * Normal Block Grammar
     */

    block.normal = merge({}, block);

    /**
     * GFM Block Grammar
     */

    block.gfm = merge({}, block.normal, {
      nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
      table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
    });

    /**
     * Pedantic grammar (original John Gruber's loose markdown specification)
     */

    block.pedantic = merge({}, block.normal, {
      html: edit(
        '^ *(?:comment *(?:\\n|\\s*$)'
        + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
        + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))')
        .replace('comment', block._comment)
        .replace(/tag/g, '(?!(?:'
          + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub'
          + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)'
          + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b')
        .getRegex(),
      def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
      heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
      fences: noop, // fences not supported
      paragraph: edit(block.normal._paragraph)
        .replace('hr', block.hr)
        .replace('heading', ' *#{1,6} *[^\n]')
        .replace('lheading', block.lheading)
        .replace('blockquote', ' {0,3}>')
        .replace('|fences', '')
        .replace('|list', '')
        .replace('|html', '')
        .getRegex()
    });

    /**
     * Block Lexer
     */

    function Lexer(options) {
      this.tokens = [];
      this.tokens.links = Object.create(null);
      this.options = options || marked.defaults;
      this.rules = block.normal;

      if (this.options.pedantic) {
        this.rules = block.pedantic;
      } else if (this.options.gfm) {
        this.rules = block.gfm;
      }
    }

    /**
     * Expose Block Rules
     */

    Lexer.rules = block;

    /**
     * Static Lex Method
     */

    Lexer.lex = function(src, options) {
      var lexer = new Lexer(options);
      return lexer.lex(src);
    };

    /**
     * Preprocessing
     */

    Lexer.prototype.lex = function(src) {
      src = src
        .replace(/\r\n|\r/g, '\n')
        .replace(/\t/g, '    ')
        .replace(/\u00a0/g, ' ')
        .replace(/\u2424/g, '\n');

      return this.token(src, true);
    };

    /**
     * Lexing
     */

    Lexer.prototype.token = function(src, top) {
      src = src.replace(/^ +$/gm, '');
      var next,
          loose,
          cap,
          bull,
          b,
          item,
          listStart,
          listItems,
          t,
          space,
          i,
          tag,
          l,
          isordered,
          istask,
          ischecked;

      while (src) {
        // newline
        if (cap = this.rules.newline.exec(src)) {
          src = src.substring(cap[0].length);
          if (cap[0].length > 1) {
            this.tokens.push({
              type: 'space'
            });
          }
        }

        // code
        if (cap = this.rules.code.exec(src)) {
          var lastToken = this.tokens[this.tokens.length - 1];
          src = src.substring(cap[0].length);
          // An indented code block cannot interrupt a paragraph.
          if (lastToken && lastToken.type === 'paragraph') {
            lastToken.text += '\n' + cap[0].trimRight();
          } else {
            cap = cap[0].replace(/^ {4}/gm, '');
            this.tokens.push({
              type: 'code',
              codeBlockStyle: 'indented',
              text: !this.options.pedantic
                ? rtrim(cap, '\n')
                : cap
            });
          }
          continue;
        }

        // fences
        if (cap = this.rules.fences.exec(src)) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'code',
            lang: cap[2] ? cap[2].trim() : cap[2],
            text: cap[3] || ''
          });
          continue;
        }

        // heading
        if (cap = this.rules.heading.exec(src)) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'heading',
            depth: cap[1].length,
            text: cap[2]
          });
          continue;
        }

        // table no leading pipe (gfm)
        if (cap = this.rules.nptable.exec(src)) {
          item = {
            type: 'table',
            header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
            align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
            cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
          };

          if (item.header.length === item.align.length) {
            src = src.substring(cap[0].length);

            for (i = 0; i < item.align.length; i++) {
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

            for (i = 0; i < item.cells.length; i++) {
              item.cells[i] = splitCells(item.cells[i], item.header.length);
            }

            this.tokens.push(item);

            continue;
          }
        }

        // hr
        if (cap = this.rules.hr.exec(src)) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'hr'
          });
          continue;
        }

        // blockquote
        if (cap = this.rules.blockquote.exec(src)) {
          src = src.substring(cap[0].length);

          this.tokens.push({
            type: 'blockquote_start'
          });

          cap = cap[0].replace(/^ *> ?/gm, '');

          // Pass `top` to keep the current
          // "toplevel" state. This is exactly
          // how markdown.pl works.
          this.token(cap, top);

          this.tokens.push({
            type: 'blockquote_end'
          });

          continue;
        }

        // list
        if (cap = this.rules.list.exec(src)) {
          src = src.substring(cap[0].length);
          bull = cap[2];
          isordered = bull.length > 1;

          listStart = {
            type: 'list_start',
            ordered: isordered,
            start: isordered ? +bull : '',
            loose: false
          };

          this.tokens.push(listStart);

          // Get each top-level item.
          cap = cap[0].match(this.rules.item);

          listItems = [];
          next = false;
          l = cap.length;
          i = 0;

          for (; i < l; i++) {
            item = cap[i];

            // Remove the list item's bullet
            // so it is seen as the next token.
            space = item.length;
            item = item.replace(/^ *([*+-]|\d+\.) */, '');

            // Outdent whatever the
            // list item contains. Hacky.
            if (~item.indexOf('\n ')) {
              space -= item.length;
              item = !this.options.pedantic
                ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
                : item.replace(/^ {1,4}/gm, '');
            }

            // Determine whether the next list item belongs here.
            // Backpedal if it does not belong in this list.
            if (i !== l - 1) {
              b = block.bullet.exec(cap[i + 1])[0];
              if (bull.length > 1 ? b.length === 1
                : (b.length > 1 || (this.options.smartLists && b !== bull))) {
                src = cap.slice(i + 1).join('\n') + src;
                i = l - 1;
              }
            }

            // Determine whether item is loose or not.
            // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
            // for discount behavior.
            loose = next || /\n\n(?!\s*$)/.test(item);
            if (i !== l - 1) {
              next = item.charAt(item.length - 1) === '\n';
              if (!loose) loose = next;
            }

            if (loose) {
              listStart.loose = true;
            }

            // Check for task list items
            istask = /^\[[ xX]\] /.test(item);
            ischecked = undefined;
            if (istask) {
              ischecked = item[1] !== ' ';
              item = item.replace(/^\[[ xX]\] +/, '');
            }

            t = {
              type: 'list_item_start',
              task: istask,
              checked: ischecked,
              loose: loose
            };

            listItems.push(t);
            this.tokens.push(t);

            // Recurse.
            this.token(item, false);

            this.tokens.push({
              type: 'list_item_end'
            });
          }

          if (listStart.loose) {
            l = listItems.length;
            i = 0;
            for (; i < l; i++) {
              listItems[i].loose = true;
            }
          }

          this.tokens.push({
            type: 'list_end'
          });

          continue;
        }

        // html
        if (cap = this.rules.html.exec(src)) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: this.options.sanitize
              ? 'paragraph'
              : 'html',
            pre: !this.options.sanitizer
              && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
            text: this.options.sanitize ? (this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0])) : cap[0]
          });
          continue;
        }

        // def
        if (top && (cap = this.rules.def.exec(src))) {
          src = src.substring(cap[0].length);
          if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
          tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
          if (!this.tokens.links[tag]) {
            this.tokens.links[tag] = {
              href: cap[2],
              title: cap[3]
            };
          }
          continue;
        }

        // table (gfm)
        if (cap = this.rules.table.exec(src)) {
          item = {
            type: 'table',
            header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
            align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
            cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
          };

          if (item.header.length === item.align.length) {
            src = src.substring(cap[0].length);

            for (i = 0; i < item.align.length; i++) {
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

            for (i = 0; i < item.cells.length; i++) {
              item.cells[i] = splitCells(
                item.cells[i].replace(/^ *\| *| *\| *$/g, ''),
                item.header.length);
            }

            this.tokens.push(item);

            continue;
          }
        }

        // lheading
        if (cap = this.rules.lheading.exec(src)) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'heading',
            depth: cap[2].charAt(0) === '=' ? 1 : 2,
            text: cap[1]
          });
          continue;
        }

        // top-level paragraph
        if (top && (cap = this.rules.paragraph.exec(src))) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'paragraph',
            text: cap[1].charAt(cap[1].length - 1) === '\n'
              ? cap[1].slice(0, -1)
              : cap[1]
          });
          continue;
        }

        // text
        if (cap = this.rules.text.exec(src)) {
          // Top-level should never reach here.
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'text',
            text: cap[0]
          });
          continue;
        }

        if (src) {
          throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
        }
      }

      return this.tokens;
    };

    /**
     * Inline-Level Grammar
     */

    var inline = {
      escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
      autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
      url: noop,
      tag: '^comment'
        + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
        + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
        + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
        + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
        + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>', // CDATA section
      link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
      reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
      nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
      strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
      em: /^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
      code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
      br: /^( {2,}|\\)\n(?!\s*$)/,
      del: noop,
      text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/
    };

    // list of punctuation marks from common mark spec
    // without ` and ] to workaround Rule 17 (inline code blocks/links)
    inline._punctuation = '!"#$%&\'()*+,\\-./:;<=>?@\\[^_{|}~';
    inline.em = edit(inline.em).replace(/punctuation/g, inline._punctuation).getRegex();

    inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;

    inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
    inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
    inline.autolink = edit(inline.autolink)
      .replace('scheme', inline._scheme)
      .replace('email', inline._email)
      .getRegex();

    inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;

    inline.tag = edit(inline.tag)
      .replace('comment', block._comment)
      .replace('attribute', inline._attribute)
      .getRegex();

    inline._label = /(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
    inline._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/;
    inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;

    inline.link = edit(inline.link)
      .replace('label', inline._label)
      .replace('href', inline._href)
      .replace('title', inline._title)
      .getRegex();

    inline.reflink = edit(inline.reflink)
      .replace('label', inline._label)
      .getRegex();

    /**
     * Normal Inline Grammar
     */

    inline.normal = merge({}, inline);

    /**
     * Pedantic Inline Grammar
     */

    inline.pedantic = merge({}, inline.normal, {
      strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
      em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
      link: edit(/^!?\[(label)\]\((.*?)\)/)
        .replace('label', inline._label)
        .getRegex(),
      reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/)
        .replace('label', inline._label)
        .getRegex()
    });

    /**
     * GFM Inline Grammar
     */

    inline.gfm = merge({}, inline.normal, {
      escape: edit(inline.escape).replace('])', '~|])').getRegex(),
      _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
      url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
      _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
      del: /^~+(?=\S)([\s\S]*?\S)~+/,
      text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
    });

    inline.gfm.url = edit(inline.gfm.url, 'i')
      .replace('email', inline.gfm._extended_email)
      .getRegex();
    /**
     * GFM + Line Breaks Inline Grammar
     */

    inline.breaks = merge({}, inline.gfm, {
      br: edit(inline.br).replace('{2,}', '*').getRegex(),
      text: edit(inline.gfm.text)
        .replace('\\b_', '\\b_| {2,}\\n')
        .replace(/\{2,\}/g, '*')
        .getRegex()
    });

    /**
     * Inline Lexer & Compiler
     */

    function InlineLexer(links, options) {
      this.options = options || marked.defaults;
      this.links = links;
      this.rules = inline.normal;
      this.renderer = this.options.renderer || new Renderer();
      this.renderer.options = this.options;

      if (!this.links) {
        throw new Error('Tokens array requires a `links` property.');
      }

      if (this.options.pedantic) {
        this.rules = inline.pedantic;
      } else if (this.options.gfm) {
        if (this.options.breaks) {
          this.rules = inline.breaks;
        } else {
          this.rules = inline.gfm;
        }
      }
    }

    /**
     * Expose Inline Rules
     */

    InlineLexer.rules = inline;

    /**
     * Static Lexing/Compiling Method
     */

    InlineLexer.output = function(src, links, options) {
      var inline = new InlineLexer(links, options);
      return inline.output(src);
    };

    /**
     * Lexing/Compiling
     */

    InlineLexer.prototype.output = function(src) {
      var out = '',
          link,
          text,
          href,
          title,
          cap,
          prevCapZero;

      while (src) {
        // escape
        if (cap = this.rules.escape.exec(src)) {
          src = src.substring(cap[0].length);
          out += escape(cap[1]);
          continue;
        }

        // tag
        if (cap = this.rules.tag.exec(src)) {
          if (!this.inLink && /^<a /i.test(cap[0])) {
            this.inLink = true;
          } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
            this.inLink = false;
          }
          if (!this.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
            this.inRawBlock = true;
          } else if (this.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
            this.inRawBlock = false;
          }

          src = src.substring(cap[0].length);
          out += this.options.sanitize
            ? this.options.sanitizer
              ? this.options.sanitizer(cap[0])
              : escape(cap[0])
            : cap[0];
          continue;
        }

        // link
        if (cap = this.rules.link.exec(src)) {
          var lastParenIndex = findClosingBracket(cap[2], '()');
          if (lastParenIndex > -1) {
            var linkLen = 4 + cap[1].length + lastParenIndex;
            cap[2] = cap[2].substring(0, lastParenIndex);
            cap[0] = cap[0].substring(0, linkLen).trim();
            cap[3] = '';
          }
          src = src.substring(cap[0].length);
          this.inLink = true;
          href = cap[2];
          if (this.options.pedantic) {
            link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

            if (link) {
              href = link[1];
              title = link[3];
            } else {
              title = '';
            }
          } else {
            title = cap[3] ? cap[3].slice(1, -1) : '';
          }
          href = href.trim().replace(/^<([\s\S]*)>$/, '$1');
          out += this.outputLink(cap, {
            href: InlineLexer.escapes(href),
            title: InlineLexer.escapes(title)
          });
          this.inLink = false;
          continue;
        }

        // reflink, nolink
        if ((cap = this.rules.reflink.exec(src))
            || (cap = this.rules.nolink.exec(src))) {
          src = src.substring(cap[0].length);
          link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
          link = this.links[link.toLowerCase()];
          if (!link || !link.href) {
            out += cap[0].charAt(0);
            src = cap[0].substring(1) + src;
            continue;
          }
          this.inLink = true;
          out += this.outputLink(cap, link);
          this.inLink = false;
          continue;
        }

        // strong
        if (cap = this.rules.strong.exec(src)) {
          src = src.substring(cap[0].length);
          out += this.renderer.strong(this.output(cap[4] || cap[3] || cap[2] || cap[1]));
          continue;
        }

        // em
        if (cap = this.rules.em.exec(src)) {
          src = src.substring(cap[0].length);
          out += this.renderer.em(this.output(cap[6] || cap[5] || cap[4] || cap[3] || cap[2] || cap[1]));
          continue;
        }

        // code
        if (cap = this.rules.code.exec(src)) {
          src = src.substring(cap[0].length);
          out += this.renderer.codespan(escape(cap[2].trim(), true));
          continue;
        }

        // br
        if (cap = this.rules.br.exec(src)) {
          src = src.substring(cap[0].length);
          out += this.renderer.br();
          continue;
        }

        // del (gfm)
        if (cap = this.rules.del.exec(src)) {
          src = src.substring(cap[0].length);
          out += this.renderer.del(this.output(cap[1]));
          continue;
        }

        // autolink
        if (cap = this.rules.autolink.exec(src)) {
          src = src.substring(cap[0].length);
          if (cap[2] === '@') {
            text = escape(this.mangle(cap[1]));
            href = 'mailto:' + text;
          } else {
            text = escape(cap[1]);
            href = text;
          }
          out += this.renderer.link(href, null, text);
          continue;
        }

        // url (gfm)
        if (!this.inLink && (cap = this.rules.url.exec(src))) {
          if (cap[2] === '@') {
            text = escape(cap[0]);
            href = 'mailto:' + text;
          } else {
            // do extended autolink path validation
            do {
              prevCapZero = cap[0];
              cap[0] = this.rules._backpedal.exec(cap[0])[0];
            } while (prevCapZero !== cap[0]);
            text = escape(cap[0]);
            if (cap[1] === 'www.') {
              href = 'http://' + text;
            } else {
              href = text;
            }
          }
          src = src.substring(cap[0].length);
          out += this.renderer.link(href, null, text);
          continue;
        }

        // text
        if (cap = this.rules.text.exec(src)) {
          src = src.substring(cap[0].length);
          if (this.inRawBlock) {
            out += this.renderer.text(this.options.sanitize ? (this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0])) : cap[0]);
          } else {
            out += this.renderer.text(escape(this.smartypants(cap[0])));
          }
          continue;
        }

        if (src) {
          throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
        }
      }

      return out;
    };

    InlineLexer.escapes = function(text) {
      return text ? text.replace(InlineLexer.rules._escapes, '$1') : text;
    };

    /**
     * Compile Link
     */

    InlineLexer.prototype.outputLink = function(cap, link) {
      var href = link.href,
          title = link.title ? escape(link.title) : null;

      return cap[0].charAt(0) !== '!'
        ? this.renderer.link(href, title, this.output(cap[1]))
        : this.renderer.image(href, title, escape(cap[1]));
    };

    /**
     * Smartypants Transformations
     */

    InlineLexer.prototype.smartypants = function(text) {
      if (!this.options.smartypants) return text;
      return text
        // em-dashes
        .replace(/---/g, '\u2014')
        // en-dashes
        .replace(/--/g, '\u2013')
        // opening singles
        .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
        // closing singles & apostrophes
        .replace(/'/g, '\u2019')
        // opening doubles
        .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
        // closing doubles
        .replace(/"/g, '\u201d')
        // ellipses
        .replace(/\.{3}/g, '\u2026');
    };

    /**
     * Mangle Links
     */

    InlineLexer.prototype.mangle = function(text) {
      if (!this.options.mangle) return text;
      var out = '',
          l = text.length,
          i = 0,
          ch;

      for (; i < l; i++) {
        ch = text.charCodeAt(i);
        if (Math.random() > 0.5) {
          ch = 'x' + ch.toString(16);
        }
        out += '&#' + ch + ';';
      }

      return out;
    };

    /**
     * Renderer
     */

    function Renderer(options) {
      this.options = options || marked.defaults;
    }

    Renderer.prototype.code = function(code, infostring, escaped) {
      var lang = (infostring || '').match(/\S*/)[0];
      if (this.options.highlight) {
        var out = this.options.highlight(code, lang);
        if (out != null && out !== code) {
          escaped = true;
          code = out;
        }
      }

      if (!lang) {
        return '<pre><code>'
          + (escaped ? code : escape(code, true))
          + '</code></pre>';
      }

      return '<pre><code class="'
        + this.options.langPrefix
        + escape(lang, true)
        + '">'
        + (escaped ? code : escape(code, true))
        + '</code></pre>\n';
    };

    Renderer.prototype.blockquote = function(quote) {
      return '<blockquote>\n' + quote + '</blockquote>\n';
    };

    Renderer.prototype.html = function(html) {
      return html;
    };

    Renderer.prototype.heading = function(text, level, raw, slugger) {
      if (this.options.headerIds) {
        return '<h'
          + level
          + ' id="'
          + this.options.headerPrefix
          + slugger.slug(raw)
          + '">'
          + text
          + '</h'
          + level
          + '>\n';
      }
      // ignore IDs
      return '<h' + level + '>' + text + '</h' + level + '>\n';
    };

    Renderer.prototype.hr = function() {
      return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
    };

    Renderer.prototype.list = function(body, ordered, start) {
      var type = ordered ? 'ol' : 'ul',
          startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
      return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
    };

    Renderer.prototype.listitem = function(text) {
      return '<li>' + text + '</li>\n';
    };

    Renderer.prototype.checkbox = function(checked) {
      return '<input '
        + (checked ? 'checked="" ' : '')
        + 'disabled="" type="checkbox"'
        + (this.options.xhtml ? ' /' : '')
        + '> ';
    };

    Renderer.prototype.paragraph = function(text) {
      return '<p>' + text + '</p>\n';
    };

    Renderer.prototype.table = function(header, body) {
      if (body) body = '<tbody>' + body + '</tbody>';

      return '<table>\n'
        + '<thead>\n'
        + header
        + '</thead>\n'
        + body
        + '</table>\n';
    };

    Renderer.prototype.tablerow = function(content) {
      return '<tr>\n' + content + '</tr>\n';
    };

    Renderer.prototype.tablecell = function(content, flags) {
      var type = flags.header ? 'th' : 'td';
      var tag = flags.align
        ? '<' + type + ' align="' + flags.align + '">'
        : '<' + type + '>';
      return tag + content + '</' + type + '>\n';
    };

    // span level renderer
    Renderer.prototype.strong = function(text) {
      return '<strong>' + text + '</strong>';
    };

    Renderer.prototype.em = function(text) {
      return '<em>' + text + '</em>';
    };

    Renderer.prototype.codespan = function(text) {
      return '<code>' + text + '</code>';
    };

    Renderer.prototype.br = function() {
      return this.options.xhtml ? '<br/>' : '<br>';
    };

    Renderer.prototype.del = function(text) {
      return '<del>' + text + '</del>';
    };

    Renderer.prototype.link = function(href, title, text) {
      href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
      if (href === null) {
        return text;
      }
      var out = '<a href="' + escape(href) + '"';
      if (title) {
        out += ' title="' + title + '"';
      }
      out += '>' + text + '</a>';
      return out;
    };

    Renderer.prototype.image = function(href, title, text) {
      href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
      if (href === null) {
        return text;
      }

      var out = '<img src="' + href + '" alt="' + text + '"';
      if (title) {
        out += ' title="' + title + '"';
      }
      out += this.options.xhtml ? '/>' : '>';
      return out;
    };

    Renderer.prototype.text = function(text) {
      return text;
    };

    /**
     * TextRenderer
     * returns only the textual part of the token
     */

    function TextRenderer() {}

    // no need for block level renderers

    TextRenderer.prototype.strong =
    TextRenderer.prototype.em =
    TextRenderer.prototype.codespan =
    TextRenderer.prototype.del =
    TextRenderer.prototype.text = function(text) {
      return text;
    };

    TextRenderer.prototype.link =
    TextRenderer.prototype.image = function(href, title, text) {
      return '' + text;
    };

    TextRenderer.prototype.br = function() {
      return '';
    };

    /**
     * Parsing & Compiling
     */

    function Parser(options) {
      this.tokens = [];
      this.token = null;
      this.options = options || marked.defaults;
      this.options.renderer = this.options.renderer || new Renderer();
      this.renderer = this.options.renderer;
      this.renderer.options = this.options;
      this.slugger = new Slugger();
    }

    /**
     * Static Parse Method
     */

    Parser.parse = function(src, options) {
      var parser = new Parser(options);
      return parser.parse(src);
    };

    /**
     * Parse Loop
     */

    Parser.prototype.parse = function(src) {
      this.inline = new InlineLexer(src.links, this.options);
      // use an InlineLexer with a TextRenderer to extract pure text
      this.inlineText = new InlineLexer(
        src.links,
        merge({}, this.options, { renderer: new TextRenderer() })
      );
      this.tokens = src.reverse();

      var out = '';
      while (this.next()) {
        out += this.tok();
      }

      return out;
    };

    /**
     * Next Token
     */

    Parser.prototype.next = function() {
      this.token = this.tokens.pop();
      return this.token;
    };

    /**
     * Preview Next Token
     */

    Parser.prototype.peek = function() {
      return this.tokens[this.tokens.length - 1] || 0;
    };

    /**
     * Parse Text Tokens
     */

    Parser.prototype.parseText = function() {
      var body = this.token.text;

      while (this.peek().type === 'text') {
        body += '\n' + this.next().text;
      }

      return this.inline.output(body);
    };

    /**
     * Parse Current Token
     */

    Parser.prototype.tok = function() {
      switch (this.token.type) {
        case 'space': {
          return '';
        }
        case 'hr': {
          return this.renderer.hr();
        }
        case 'heading': {
          return this.renderer.heading(
            this.inline.output(this.token.text),
            this.token.depth,
            unescape(this.inlineText.output(this.token.text)),
            this.slugger);
        }
        case 'code': {
          return this.renderer.code(this.token.text,
            this.token.lang,
            this.token.escaped);
        }
        case 'table': {
          var header = '',
              body = '',
              i,
              row,
              cell,
              j;

          // header
          cell = '';
          for (i = 0; i < this.token.header.length; i++) {
            cell += this.renderer.tablecell(
              this.inline.output(this.token.header[i]),
              { header: true, align: this.token.align[i] }
            );
          }
          header += this.renderer.tablerow(cell);

          for (i = 0; i < this.token.cells.length; i++) {
            row = this.token.cells[i];

            cell = '';
            for (j = 0; j < row.length; j++) {
              cell += this.renderer.tablecell(
                this.inline.output(row[j]),
                { header: false, align: this.token.align[j] }
              );
            }

            body += this.renderer.tablerow(cell);
          }
          return this.renderer.table(header, body);
        }
        case 'blockquote_start': {
          body = '';

          while (this.next().type !== 'blockquote_end') {
            body += this.tok();
          }

          return this.renderer.blockquote(body);
        }
        case 'list_start': {
          body = '';
          var ordered = this.token.ordered,
              start = this.token.start;

          while (this.next().type !== 'list_end') {
            body += this.tok();
          }

          return this.renderer.list(body, ordered, start);
        }
        case 'list_item_start': {
          body = '';
          var loose = this.token.loose;
          var checked = this.token.checked;
          var task = this.token.task;

          if (this.token.task) {
            body += this.renderer.checkbox(checked);
          }

          while (this.next().type !== 'list_item_end') {
            body += !loose && this.token.type === 'text'
              ? this.parseText()
              : this.tok();
          }
          return this.renderer.listitem(body, task, checked);
        }
        case 'html': {
          // TODO parse inline content if parameter markdown=1
          return this.renderer.html(this.token.text);
        }
        case 'paragraph': {
          return this.renderer.paragraph(this.inline.output(this.token.text));
        }
        case 'text': {
          return this.renderer.paragraph(this.parseText());
        }
        default: {
          var errMsg = 'Token with "' + this.token.type + '" type was not found.';
          if (this.options.silent) {
            console.log(errMsg);
          } else {
            throw new Error(errMsg);
          }
        }
      }
    };

    /**
     * Slugger generates header id
     */

    function Slugger() {
      this.seen = {};
    }

    /**
     * Convert string to unique id
     */

    Slugger.prototype.slug = function(value) {
      var slug = value
        .toLowerCase()
        .trim()
        .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
        .replace(/\s/g, '-');

      if (this.seen.hasOwnProperty(slug)) {
        var originalSlug = slug;
        do {
          this.seen[originalSlug]++;
          slug = originalSlug + '-' + this.seen[originalSlug];
        } while (this.seen.hasOwnProperty(slug));
      }
      this.seen[slug] = 0;

      return slug;
    };

    /**
     * Helpers
     */

    function escape(html, encode) {
      if (encode) {
        if (escape.escapeTest.test(html)) {
          return html.replace(escape.escapeReplace, function(ch) { return escape.replacements[ch]; });
        }
      } else {
        if (escape.escapeTestNoEncode.test(html)) {
          return html.replace(escape.escapeReplaceNoEncode, function(ch) { return escape.replacements[ch]; });
        }
      }

      return html;
    }

    escape.escapeTest = /[&<>"']/;
    escape.escapeReplace = /[&<>"']/g;
    escape.replacements = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };

    escape.escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
    escape.escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;

    function unescape(html) {
      // explicitly match decimal, hex, and named HTML entities
      return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, function(_, n) {
        n = n.toLowerCase();
        if (n === 'colon') return ':';
        if (n.charAt(0) === '#') {
          return n.charAt(1) === 'x'
            ? String.fromCharCode(parseInt(n.substring(2), 16))
            : String.fromCharCode(+n.substring(1));
        }
        return '';
      });
    }

    function edit(regex, opt) {
      regex = regex.source || regex;
      opt = opt || '';
      return {
        replace: function(name, val) {
          val = val.source || val;
          val = val.replace(/(^|[^\[])\^/g, '$1');
          regex = regex.replace(name, val);
          return this;
        },
        getRegex: function() {
          return new RegExp(regex, opt);
        }
      };
    }

    function cleanUrl(sanitize, base, href) {
      if (sanitize) {
        try {
          var prot = decodeURIComponent(unescape(href))
            .replace(/[^\w:]/g, '')
            .toLowerCase();
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

    function resolveUrl(base, href) {
      if (!baseUrls[' ' + base]) {
        // we can ignore everything in base after the last slash of its path component,
        // but we might need to add _that_
        // https://tools.ietf.org/html/rfc3986#section-3
        if (/^[^:]+:\/*[^/]*$/.test(base)) {
          baseUrls[' ' + base] = base + '/';
        } else {
          baseUrls[' ' + base] = rtrim(base, '/', true);
        }
      }
      base = baseUrls[' ' + base];

      if (href.slice(0, 2) === '//') {
        return base.replace(/:[\s\S]*/, ':') + href;
      } else if (href.charAt(0) === '/') {
        return base.replace(/(:\/*[^/]*)[\s\S]*/, '$1') + href;
      } else {
        return base + href;
      }
    }
    var baseUrls = {};
    var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

    function noop() {}
    noop.exec = noop;

    function merge(obj) {
      var i = 1,
          target,
          key;

      for (; i < arguments.length; i++) {
        target = arguments[i];
        for (key in target) {
          if (Object.prototype.hasOwnProperty.call(target, key)) {
            obj[key] = target[key];
          }
        }
      }

      return obj;
    }

    function splitCells(tableRow, count) {
      // ensure that every cell-delimiting pipe has a space
      // before it to distinguish it from an escaped pipe
      var row = tableRow.replace(/\|/g, function(match, offset, str) {
            var escaped = false,
                curr = offset;
            while (--curr >= 0 && str[curr] === '\\') escaped = !escaped;
            if (escaped) {
              // odd number of slashes means | is escaped
              // so we leave it alone
              return '|';
            } else {
              // add space before unescaped |
              return ' |';
            }
          }),
          cells = row.split(/ \|/),
          i = 0;

      if (cells.length > count) {
        cells.splice(count);
      } else {
        while (cells.length < count) cells.push('');
      }

      for (; i < cells.length; i++) {
        // leading or trailing whitespace is ignored per the gfm spec
        cells[i] = cells[i].trim().replace(/\\\|/g, '|');
      }
      return cells;
    }

    // Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
    // /c*$/ is vulnerable to REDOS.
    // invert: Remove suffix of non-c chars instead. Default falsey.
    function rtrim(str, c, invert) {
      if (str.length === 0) {
        return '';
      }

      // Length of suffix matching the invert condition.
      var suffLen = 0;

      // Step left until we fail to match the invert condition.
      while (suffLen < str.length) {
        var currChar = str.charAt(str.length - suffLen - 1);
        if (currChar === c && !invert) {
          suffLen++;
        } else if (currChar !== c && invert) {
          suffLen++;
        } else {
          break;
        }
      }

      return str.substr(0, str.length - suffLen);
    }

    function findClosingBracket(str, b) {
      if (str.indexOf(b[1]) === -1) {
        return -1;
      }
      var level = 0;
      for (var i = 0; i < str.length; i++) {
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

    /**
     * Marked
     */

    function marked(src, opt, callback) {
      // throw error in case of non string input
      if (typeof src === 'undefined' || src === null) {
        throw new Error('marked(): input parameter is undefined or null');
      }
      if (typeof src !== 'string') {
        throw new Error('marked(): input parameter is of type '
          + Object.prototype.toString.call(src) + ', string expected');
      }

      if (callback || typeof opt === 'function') {
        if (!callback) {
          callback = opt;
          opt = null;
        }

        opt = merge({}, marked.defaults, opt || {});
        checkSanitizeDeprecation(opt);

        var highlight = opt.highlight,
            tokens,
            pending,
            i = 0;

        try {
          tokens = Lexer.lex(src, opt);
        } catch (e) {
          return callback(e);
        }

        pending = tokens.length;

        var done = function(err) {
          if (err) {
            opt.highlight = highlight;
            return callback(err);
          }

          var out;

          try {
            out = Parser.parse(tokens, opt);
          } catch (e) {
            err = e;
          }

          opt.highlight = highlight;

          return err
            ? callback(err)
            : callback(null, out);
        };

        if (!highlight || highlight.length < 3) {
          return done();
        }

        delete opt.highlight;

        if (!pending) return done();

        for (; i < tokens.length; i++) {
          (function(token) {
            if (token.type !== 'code') {
              return --pending || done();
            }
            return highlight(token.text, token.lang, function(err, code) {
              if (err) return done(err);
              if (code == null || code === token.text) {
                return --pending || done();
              }
              token.text = code;
              token.escaped = true;
              --pending || done();
            });
          })(tokens[i]);
        }

        return;
      }
      try {
        if (opt) opt = merge({}, marked.defaults, opt);
        checkSanitizeDeprecation(opt);
        return Parser.parse(Lexer.lex(src, opt), opt);
      } catch (e) {
        e.message += '\nPlease report this to https://github.com/markedjs/marked.';
        if ((opt || marked.defaults).silent) {
          return '<p>An error occurred:</p><pre>'
            + escape(e.message + '', true)
            + '</pre>';
        }
        throw e;
      }
    }

    /**
     * Options
     */

    marked.options =
    marked.setOptions = function(opt) {
      merge(marked.defaults, opt);
      return marked;
    };

    marked.getDefaults = function() {
      return {
        baseUrl: null,
        breaks: false,
        gfm: true,
        headerIds: true,
        headerPrefix: '',
        highlight: null,
        langPrefix: 'language-',
        mangle: true,
        pedantic: false,
        renderer: new Renderer(),
        sanitize: false,
        sanitizer: null,
        silent: false,
        smartLists: false,
        smartypants: false,
        xhtml: false
      };
    };

    marked.defaults = marked.getDefaults();

    /**
     * Expose
     */

    marked.Parser = Parser;
    marked.parser = Parser.parse;

    marked.Renderer = Renderer;
    marked.TextRenderer = TextRenderer;

    marked.Lexer = Lexer;
    marked.lexer = Lexer.lex;

    marked.InlineLexer = InlineLexer;
    marked.inlineLexer = InlineLexer.output;

    marked.Slugger = Slugger;

    marked.parse = marked;

    {
      module.exports = marked;
    }
    })();
    });

    var purify = createCommonjsModule(function (module, exports) {
    (function (global, factory) {
    	 module.exports = factory() ;
    }(commonjsGlobal, (function () {
    var freeze$1 = Object.freeze || function (x) {
      return x;
    };

    var html = freeze$1(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']);

    // SVG
    var svg = freeze$1(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'audio', 'canvas', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'video', 'view', 'vkern']);

    var svgFilters = freeze$1(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']);

    var mathMl = freeze$1(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover']);

    var text = freeze$1(['#text']);

    var freeze$2 = Object.freeze || function (x) {
      return x;
    };

    var html$1 = freeze$2(['accept', 'action', 'align', 'alt', 'autocomplete', 'background', 'bgcolor', 'border', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'coords', 'crossorigin', 'datetime', 'default', 'dir', 'disabled', 'download', 'enctype', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'integrity', 'ismap', 'label', 'lang', 'list', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'name', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns']);

    var svg$1 = freeze$2(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'tabindex', 'targetx', 'targety', 'transform', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);

    var mathMl$1 = freeze$2(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);

    var xml = freeze$2(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

    var hasOwnProperty = Object.hasOwnProperty;
    var setPrototypeOf = Object.setPrototypeOf;

    var _ref$1 = typeof Reflect !== 'undefined' && Reflect;
    var apply$1 = _ref$1.apply;

    if (!apply$1) {
      apply$1 = function apply(fun, thisValue, args) {
        return fun.apply(thisValue, args);
      };
    }

    /* Add properties to a lookup table */
    function addToSet(set, array) {
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
          var lcElement = element.toLowerCase();
          if (lcElement !== element) {
            // Config presets (e.g. tags.js, attrs.js) are immutable.
            if (!Object.isFrozen(array)) {
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
      var newObject = {};

      var property = void 0;
      for (property in object) {
        if (apply$1(hasOwnProperty, object, [property])) {
          newObject[property] = object[property];
        }
      }

      return newObject;
    }

    var seal = Object.seal || function (x) {
      return x;
    };

    var MUSTACHE_EXPR = seal(/\{\{[\s\S]*|[\s\S]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode
    var ERB_EXPR = seal(/<%[\s\S]*|[\s\S]*%>/gm);
    var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape
    var ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape
    var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
    );
    var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
    var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g // eslint-disable-line no-control-regex
    );

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

    function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

    var _ref = typeof Reflect !== 'undefined' && Reflect;
    var apply = _ref.apply;

    var arraySlice = Array.prototype.slice;
    var freeze = Object.freeze;

    var getGlobal = function getGlobal() {
      return typeof window === 'undefined' ? null : window;
    };

    if (!apply) {
      apply = function apply(fun, thisValue, args) {
        return fun.apply(thisValue, args);
      };
    }

    /**
     * Creates a no-op policy for internal use only.
     * Don't export this function outside this module!
     * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
     * @param {Document} document The document object (to determine policy name suffix)
     * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
     * are not supported).
     */
    var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, document) {
      if ((typeof trustedTypes === 'undefined' ? 'undefined' : _typeof(trustedTypes)) !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
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
          createHTML: function createHTML(html$$1) {
            return html$$1;
          }
        });
      } catch (error) {
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
      DOMPurify.version = '2.0.7';

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
      var useDOMParser = false;
      var removeTitle = false;

      var document = window.document;
      var DocumentFragment = window.DocumentFragment,
          HTMLTemplateElement = window.HTMLTemplateElement,
          Node = window.Node,
          NodeFilter = window.NodeFilter,
          _window$NamedNodeMap = window.NamedNodeMap,
          NamedNodeMap = _window$NamedNodeMap === undefined ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
          Text = window.Text,
          Comment = window.Comment,
          DOMParser = window.DOMParser,
          TrustedTypes = window.TrustedTypes;

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

      var trustedTypesPolicy = _createTrustedTypesPolicy(TrustedTypes, originalDocument);
      var emptyHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML('') : '';

      var _document = document,
          implementation = _document.implementation,
          createNodeIterator = _document.createNodeIterator,
          getElementsByTagName = _document.getElementsByTagName,
          createDocumentFragment = _document.createDocumentFragment;
      var importNode = originalDocument.importNode;


      var hooks = {};

      /**
       * Expose whether this browser supports running the full DOMPurify.
       */
      DOMPurify.isSupported = implementation && typeof implementation.createHTMLDocument !== 'undefined' && document.documentMode !== 9;

      var MUSTACHE_EXPR$$1 = MUSTACHE_EXPR,
          ERB_EXPR$$1 = ERB_EXPR,
          DATA_ATTR$$1 = DATA_ATTR,
          ARIA_ATTR$$1 = ARIA_ATTR,
          IS_SCRIPT_OR_DATA$$1 = IS_SCRIPT_OR_DATA,
          ATTR_WHITESPACE$$1 = ATTR_WHITESPACE;
      var IS_ALLOWED_URI$$1 = IS_ALLOWED_URI;

      /**
       * We consider the elements and attributes below to be safe. Ideally
       * don't add any new ones but feel free to remove unwanted ones.
       */

      /* allowed element names */

      var ALLOWED_TAGS = null;
      var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(html), _toConsumableArray(svg), _toConsumableArray(svgFilters), _toConsumableArray(mathMl), _toConsumableArray(text)));

      /* Allowed attribute names */
      var ALLOWED_ATTR = null;
      var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray(html$1), _toConsumableArray(svg$1), _toConsumableArray(mathMl$1), _toConsumableArray(xml)));

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

      /* Output should be safe for jQuery's $() factory? */
      var SAFE_FOR_JQUERY = false;

      /* Output should be safe for common template engines.
       * This means, DOMPurify removes data attributes, mustaches and ERB
       */
      var SAFE_FOR_TEMPLATES = false;

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

      /* If `RETURN_DOM` or `RETURN_DOM_FRAGMENT` is enabled, decide if the returned DOM
       * `Node` is imported into the current `Document`. If this flag is not enabled the
       * `Node` will belong (its ownerDocument) to a fresh `HTMLDocument`, created by
       * DOMPurify. */
      var RETURN_DOM_IMPORT = false;

      /* Try to return a Trusted Type object instead of a string, retrun a string in
       * case Trusted Types are not supported  */
      var RETURN_TRUSTED_TYPE = false;

      /* Output should be free from DOM clobbering attacks? */
      var SANITIZE_DOM = true;

      /* Keep element content when removing element? */
      var KEEP_CONTENT = true;

      /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
       * of importing it into a new Document and returning a sanitized copy */
      var IN_PLACE = false;

      /* Allow usage of profiles like html, svg and mathMl */
      var USE_PROFILES = {};

      /* Tags to ignore content of when KEEP_CONTENT is true */
      var FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);

      /* Tags that are safe for data: URIs */
      var DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image']);

      /* Attributes safe for values like "javascript:" */
      var URI_SAFE_ATTRIBUTES = null;
      var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'summary', 'title', 'value', 'style', 'xmlns']);

      /* Keep a reference to config to pass to hooks */
      var CONFIG = null;

      /* Ideally, do not touch anything below this line */
      /* ______________________________________________ */

      var formElement = document.createElement('form');

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
        if (!cfg || (typeof cfg === 'undefined' ? 'undefined' : _typeof(cfg)) !== 'object') {
          cfg = {};
        }

        /* Set configuration parameters */
        ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
        ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
        URI_SAFE_ATTRIBUTES = 'ADD_URI_SAFE_ATTR' in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR) : DEFAULT_URI_SAFE_ATTRIBUTES;
        FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS) : {};
        FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR) : {};
        USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
        ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
        ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
        ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
        SAFE_FOR_JQUERY = cfg.SAFE_FOR_JQUERY || false; // Default false
        SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
        WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
        RETURN_DOM = cfg.RETURN_DOM || false; // Default false
        RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
        RETURN_DOM_IMPORT = cfg.RETURN_DOM_IMPORT || false; // Default false
        RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false
        FORCE_BODY = cfg.FORCE_BODY || false; // Default false
        SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
        KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true
        IN_PLACE = cfg.IN_PLACE || false; // Default false

        IS_ALLOWED_URI$$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$$1;

        if (SAFE_FOR_TEMPLATES) {
          ALLOW_DATA_ATTR = false;
        }

        if (RETURN_DOM_FRAGMENT) {
          RETURN_DOM = true;
        }

        /* Parse profile info */
        if (USE_PROFILES) {
          ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(text)));
          ALLOWED_ATTR = [];
          if (USE_PROFILES.html === true) {
            addToSet(ALLOWED_TAGS, html);
            addToSet(ALLOWED_ATTR, html$1);
          }

          if (USE_PROFILES.svg === true) {
            addToSet(ALLOWED_TAGS, svg);
            addToSet(ALLOWED_ATTR, svg$1);
            addToSet(ALLOWED_ATTR, xml);
          }

          if (USE_PROFILES.svgFilters === true) {
            addToSet(ALLOWED_TAGS, svgFilters);
            addToSet(ALLOWED_ATTR, svg$1);
            addToSet(ALLOWED_ATTR, xml);
          }

          if (USE_PROFILES.mathMl === true) {
            addToSet(ALLOWED_TAGS, mathMl);
            addToSet(ALLOWED_ATTR, mathMl$1);
            addToSet(ALLOWED_ATTR, xml);
          }
        }

        /* Merge configuration parameters */
        if (cfg.ADD_TAGS) {
          if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
            ALLOWED_TAGS = clone(ALLOWED_TAGS);
          }

          addToSet(ALLOWED_TAGS, cfg.ADD_TAGS);
        }

        if (cfg.ADD_ATTR) {
          if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
            ALLOWED_ATTR = clone(ALLOWED_ATTR);
          }

          addToSet(ALLOWED_ATTR, cfg.ADD_ATTR);
        }

        if (cfg.ADD_URI_SAFE_ATTR) {
          addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR);
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

      /**
       * _forceRemove
       *
       * @param  {Node} node a DOM node
       */
      var _forceRemove = function _forceRemove(node) {
        DOMPurify.removed.push({ element: node });
        try {
          node.parentNode.removeChild(node);
        } catch (error) {
          node.outerHTML = emptyHTML;
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
          DOMPurify.removed.push({
            attribute: node.getAttributeNode(name),
            from: node
          });
        } catch (error) {
          DOMPurify.removed.push({
            attribute: null,
            from: node
          });
        }

        node.removeAttribute(name);
      };

      /**
       * _initDocument
       *
       * @param  {String} dirty a string of dirty markup
       * @return {Document} a DOM, filled with the dirty markup
       */
      var _initDocument = function _initDocument(dirty) {
        /* Create a HTML document */
        var doc = void 0;
        var leadingWhitespace = void 0;

        if (FORCE_BODY) {
          dirty = '<remove></remove>' + dirty;
        } else {
          /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
          var matches = dirty.match(/^[\s]+/);
          leadingWhitespace = matches && matches[0];
          if (leadingWhitespace) {
            dirty = dirty.slice(leadingWhitespace.length);
          }
        }

        /* Use DOMParser to workaround Firefox bug (see comment below) */
        if (useDOMParser) {
          try {
            doc = new DOMParser().parseFromString(dirty, 'text/html');
          } catch (error) {}
        }

        /* Remove title to fix a mXSS bug in older MS Edge */
        if (removeTitle) {
          addToSet(FORBID_TAGS, ['title']);
        }

        /* Otherwise use createHTMLDocument, because DOMParser is unsafe in
        Safari (see comment below) */
        if (!doc || !doc.documentElement) {
          doc = implementation.createHTMLDocument('');
          var _doc = doc,
              body = _doc.body;

          body.parentNode.removeChild(body.parentNode.firstElementChild);
          body.outerHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
        }

        if (dirty && leadingWhitespace) {
          doc.body.insertBefore(document.createTextNode(leadingWhitespace), doc.body.childNodes[0] || null);
        }

        /* Work on whole document or just its body */
        return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
      };

      // Firefox uses a different parser for innerHTML rather than
      // DOMParser (see https://bugzilla.mozilla.org/show_bug.cgi?id=1205631)
      // which means that you *must* use DOMParser, otherwise the output may
      // not be safe if used in a document.write context later.
      //
      // So we feature detect the Firefox bug and use the DOMParser if necessary.
      //
      // Chrome 77 and other versions ship an mXSS bug that caused a bypass to
      // happen. We now check for the mXSS trigger and react accordingly.
      if (DOMPurify.isSupported) {
        (function () {
          try {
            var doc = _initDocument('<svg><p><textarea><img src="</textarea><img src=x abc=1//">');
            if (doc.querySelector('svg img')) {
              useDOMParser = true;
            }
          } catch (error) {}
        })();

        (function () {
          try {
            var doc = _initDocument('<x/><title>&lt;/title&gt;&lt;img&gt;');
            if (/<\/title/.test(doc.querySelector('title').innerHTML)) {
              removeTitle = true;
            }
          } catch (error) {}
        })();
      }

      /**
       * _createIterator
       *
       * @param  {Document} root document/fragment to create iterator for
       * @return {Iterator} iterator instance
       */
      var _createIterator = function _createIterator(root) {
        return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, function () {
          return NodeFilter.FILTER_ACCEPT;
        }, false);
      };

      /**
       * _isClobbered
       *
       * @param  {Node} elm element to check for clobbering attacks
       * @return {Boolean} true if clobbered, false if safe
       */
      var _isClobbered = function _isClobbered(elm) {
        if (elm instanceof Text || elm instanceof Comment) {
          return false;
        }

        if (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string') {
          return true;
        }

        return false;
      };

      /**
       * _isNode
       *
       * @param  {Node} obj object to check whether it's a DOM node
       * @return {Boolean} true is object is a DOM node
       */
      var _isNode = function _isNode(obj) {
        return (typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? obj instanceof Node : obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && typeof obj.nodeType === 'number' && typeof obj.nodeName === 'string';
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

        hooks[entryPoint].forEach(function (hook) {
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
      // eslint-disable-next-line complexity
      var _sanitizeElements = function _sanitizeElements(currentNode) {
        var content = void 0;

        /* Execute a hook if present */
        _executeHook('beforeSanitizeElements', currentNode, null);

        /* Check if element is clobbered or can clobber */
        if (_isClobbered(currentNode)) {
          _forceRemove(currentNode);
          return true;
        }

        /* Now let's check the element's type and name */
        var tagName = currentNode.nodeName.toLowerCase();

        /* Execute a hook if present */
        _executeHook('uponSanitizeElement', currentNode, {
          tagName: tagName,
          allowedTags: ALLOWED_TAGS
        });

        /* Take care of an mXSS pattern using p, br inside svg, math */
        if ((tagName === 'svg' || tagName === 'math') && currentNode.querySelectorAll('p, br').length !== 0) {
          _forceRemove(currentNode);
          return true;
        }

        /* Remove element if anything forbids its presence */
        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
          /* Keep content except for black-listed elements */
          if (KEEP_CONTENT && !FORBID_CONTENTS[tagName] && typeof currentNode.insertAdjacentHTML === 'function') {
            try {
              var htmlToInsert = currentNode.innerHTML;
              currentNode.insertAdjacentHTML('AfterEnd', trustedTypesPolicy ? trustedTypesPolicy.createHTML(htmlToInsert) : htmlToInsert);
            } catch (error) {}
          }

          _forceRemove(currentNode);
          return true;
        }

        /* Remove in case a noscript/noembed XSS is suspected */
        if (tagName === 'noscript' && /<\/noscript/i.test(currentNode.innerHTML)) {
          _forceRemove(currentNode);
          return true;
        }

        if (tagName === 'noembed' && /<\/noembed/i.test(currentNode.innerHTML)) {
          _forceRemove(currentNode);
          return true;
        }

        /* Convert markup to cover jQuery behavior */
        if (SAFE_FOR_JQUERY && !currentNode.firstElementChild && (!currentNode.content || !currentNode.content.firstElementChild) && /</g.test(currentNode.textContent)) {
          DOMPurify.removed.push({ element: currentNode.cloneNode() });
          if (currentNode.innerHTML) {
            currentNode.innerHTML = currentNode.innerHTML.replace(/</g, '&lt;');
          } else {
            currentNode.innerHTML = currentNode.textContent.replace(/</g, '&lt;');
          }
        }

        /* Sanitize element content to be template-safe */
        if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
          /* Get the element's text content */
          content = currentNode.textContent;
          content = content.replace(MUSTACHE_EXPR$$1, ' ');
          content = content.replace(ERB_EXPR$$1, ' ');
          if (currentNode.textContent !== content) {
            DOMPurify.removed.push({ element: currentNode.cloneNode() });
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
        if (ALLOW_DATA_ATTR && DATA_ATTR$$1.test(lcName)) ; else if (ALLOW_ARIA_ATTR && ARIA_ATTR$$1.test(lcName)) ; else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
          return false;

          /* Check value is safe. First, is attr inert? If so, is safe */
        } else if (URI_SAFE_ATTRIBUTES[lcName]) ; else if (IS_ALLOWED_URI$$1.test(value.replace(ATTR_WHITESPACE$$1, ''))) ; else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && value.indexOf('data:') === 0 && DATA_URI_TAGS[lcTag]) ; else if (ALLOW_UNKNOWN_PROTOCOLS && !IS_SCRIPT_OR_DATA$$1.test(value.replace(ATTR_WHITESPACE$$1, ''))) ; else if (!value) ; else {
          return false;
        }

        return true;
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
      // eslint-disable-next-line complexity
      var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
        var attr = void 0;
        var value = void 0;
        var lcName = void 0;
        var idAttr = void 0;
        var l = void 0;
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

          value = attr.value.trim();
          lcName = name.toLowerCase();

          /* Execute a hook if present */
          hookEvent.attrName = lcName;
          hookEvent.attrValue = value;
          hookEvent.keepAttr = true;
          _executeHook('uponSanitizeAttribute', currentNode, hookEvent);
          value = hookEvent.attrValue;

          /* Remove attribute */
          // Safari (iOS + Mac), last tested v8.0.5, crashes if you try to
          // remove a "name" attribute from an <img> tag that has an "id"
          // attribute at the time.
          if (lcName === 'name' && currentNode.nodeName === 'IMG' && attributes.id) {
            idAttr = attributes.id;
            attributes = apply(arraySlice, attributes, []);
            _removeAttribute('id', currentNode);
            _removeAttribute(name, currentNode);
            if (attributes.indexOf(idAttr) > l) {
              currentNode.setAttribute('id', idAttr.value);
            }
          } else if (
          // This works around a bug in Safari, where input[type=file]
          // cannot be dynamically set after type has been removed
          currentNode.nodeName === 'INPUT' && lcName === 'type' && value === 'file' && hookEvent.keepAttr && (ALLOWED_ATTR[lcName] || !FORBID_ATTR[lcName])) {
            continue;
          } else {
            // This avoids a crash in Safari v9.0 with double-ids.
            // The trick is to first set the id to be empty and then to
            // remove the attribute
            if (name === 'id') {
              currentNode.setAttribute(name, '');
            }

            _removeAttribute(name, currentNode);
          }

          /* Did the hooks approve of the attribute? */
          if (!hookEvent.keepAttr) {
            continue;
          }

          /* Take care of an mXSS pattern using namespace switches */
          if (/svg|math/i.test(currentNode.namespaceURI) && new RegExp('</(' + Object.keys(FORBID_CONTENTS).join('|') + ')', 'i').test(value)) {
            _removeAttribute(name, currentNode);
            continue;
          }

          /* Sanitize attribute content to be template-safe */
          if (SAFE_FOR_TEMPLATES) {
            value = value.replace(MUSTACHE_EXPR$$1, ' ');
            value = value.replace(ERB_EXPR$$1, ' ');
          }

          /* Is `value` valid for this attribute? */
          var lcTag = currentNode.nodeName.toLowerCase();
          if (!_isValidAttribute(lcTag, lcName, value)) {
            continue;
          }

          /* Handle invalid data-* attribute set by try-catching it */
          try {
            if (namespaceURI) {
              currentNode.setAttributeNS(namespaceURI, name, value);
            } else {
              /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
              currentNode.setAttribute(name, value);
            }

            DOMPurify.removed.pop();
          } catch (error) {}
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
        var shadowNode = void 0;
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
      DOMPurify.sanitize = function (dirty, cfg) {
        var body = void 0;
        var importedNode = void 0;
        var currentNode = void 0;
        var oldNode = void 0;
        var returnNode = void 0;
        /* Make sure we have a string to sanitize.
          DO NOT return early, as this will return the wrong type if
          the user has requested a DOM object rather than a string */
        if (!dirty) {
          dirty = '<!-->';
        }

        /* Stringify, in case dirty is an object */
        if (typeof dirty !== 'string' && !_isNode(dirty)) {
          // eslint-disable-next-line no-negated-condition
          if (typeof dirty.toString !== 'function') {
            throw new TypeError('toString is not a function');
          } else {
            dirty = dirty.toString();
            if (typeof dirty !== 'string') {
              throw new TypeError('dirty is not a string, aborting');
            }
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

        if (IN_PLACE) ; else if (dirty instanceof Node) {
          /* If dirty is a DOM element, append to an empty document to avoid
             elements being stripped by the parser */
          body = _initDocument('<!-->');
          importedNode = body.ownerDocument.importNode(dirty, true);
          if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
            /* Node is already a body, use as is */
            body = importedNode;
          } else if (importedNode.nodeName === 'HTML') {
            body = importedNode;
          } else {
            // eslint-disable-next-line unicorn/prefer-node-append
            body.appendChild(importedNode);
          }
        } else {
          /* Exit directly if we have nothing to do */
          if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && RETURN_TRUSTED_TYPE && dirty.indexOf('<') === -1) {
            return trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
          }

          /* Initialize the document to work on */
          body = _initDocument(dirty);

          /* Check we have a DOM node from the data */
          if (!body) {
            return RETURN_DOM ? null : emptyHTML;
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
              // eslint-disable-next-line unicorn/prefer-node-append
              returnNode.appendChild(body.firstChild);
            }
          } else {
            returnNode = body;
          }

          if (RETURN_DOM_IMPORT) {
            /* AdoptNode() is not used because internal state is not reset
                   (e.g. the past names map of a HTMLFormElement), this is safe
                   in theory but we would rather not risk another attack vector.
                   The state that is cloned by importNode() is explicitly defined
                   by the specs. */
            returnNode = importNode.call(originalDocument, returnNode, true);
          }

          return returnNode;
        }

        var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;

        /* Sanitize final string template-safe */
        if (SAFE_FOR_TEMPLATES) {
          serializedHTML = serializedHTML.replace(MUSTACHE_EXPR$$1, ' ');
          serializedHTML = serializedHTML.replace(ERB_EXPR$$1, ' ');
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

        var lcTag = tag.toLowerCase();
        var lcName = attr.toLowerCase();
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
        hooks[entryPoint].push(hookFunction);
      };

      /**
       * RemoveHook
       * Public method to remove a DOMPurify hook at a given entryPoint
       * (pops it from the stack of hooks if more are present)
       *
       * @param {String} entryPoint entry point for the hook to remove
       */
      DOMPurify.removeHook = function (entryPoint) {
        if (hooks[entryPoint]) {
          hooks[entryPoint].pop();
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

    })));

    });

    var mdToHTML = function (md, markedOptions) {
        if (markedOptions === void 0) { markedOptions = {}; }
        try {
            var _md = typeof md === 'string' ? md : '';
            if (typeof markedOptions === 'object' && Object.keys(markedOptions).length > 0) {
                // Set options
                marked.setOptions(markedOptions);
            }
            return marked(_md);
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
        pre[cur] = SimpleMDE[cur]; // as ((editor: Types.SimpleMarkdownEditor) => void);
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
            enumerable: true,
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
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MarkdownEditor.prototype, "_hideToolbar", {
            get: function () {
                var toolbar = this.props.toolbar;
                return !toolbar || (Array.isArray(toolbar) && toolbar.length === 0);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MarkdownEditor.prototype, "_hideStatusBar", {
            get: function () {
                var editorConfig = this.props.editorConfig;
                return !!(editorConfig && (editorConfig.status === false || Array.isArray(editorConfig.status) && editorConfig.status.length === 0));
            },
            enumerable: true,
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
            enumerable: true,
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
            enumerable: true,
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
            if (editorConfig && editorConfig.renderingConfig && editorConfig.renderingConfig.singleLineBreaks === false) {
                markedOptions.breaks = false;
            }
            else {
                markedOptions.breaks = true;
                if (editorConfig && editorConfig.renderingConfig && editorConfig.renderingConfig.codeSyntaxHighlighting === true && window.hljs) {
                    markedOptions.highlight = function (code) {
                        return window.hljs.highlightAuto(code).value;
                    };
                }
                return mdToHTML(md, markedOptions);
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
            enumerable: true,
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
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MarkdownEditor.prototype, "html", {
            get: function () {
                if (!this._outputDOMPurify) {
                    return this._unDOMPurifyHtml;
                }
                return this._getDomHtml(this._unDOMPurifyHtml || '');
            },
            enumerable: true,
            configurable: true
        });
        MarkdownEditor.prototype.componentDidMount = function () {
            var _this = this;
            if (!this._editorEl.current) {
                return;
            }
            if (this._previewDOMPurify) {
                // rewirte SimpleMDE prototype method
                SimpleMDE.prototype.markdown = function (text) {
                    return _this._getDomHtml(_this._getMdToHtml(text) || '');
                };
            }
            SimpleMDE.prototype._fileInputEl = this._fileInputEl.current;
            SimpleMDE.prototype._fileUploadFun = typeof this.props.imageUploadFun === 'function' ? this.props.imageUploadFun : defaultUploadFun;
            // SimpleMDE don't export codemirror method
            SimpleMDE.prototype._replaceSelection = function (cm, active, startEnd, url) {
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
            this.$editor = new SimpleMDE(__assign({ element: this._editorEl.current }, this._editorConfig));
            // handle height
            this._setHeightToEl(this._editorH, '.CodeMirror');
            this._setHeightToEl(this._editorMinH, '.CodeMirror', true);
            this._setHeightToEl(this._editorMinH, '.CodeMirror-scroll', true);
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
