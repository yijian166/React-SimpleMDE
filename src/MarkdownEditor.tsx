/* eslint-disable @typescript-eslint/no-object-literal-type-assertion */
/* eslint-disable @typescript-eslint/member-ordering */
;

import './style.css';
import * as Types from './types';
import { mdToHTML, htmlDomSanitize } from './util';
import React, { Component, createRef } from 'react';
import SimpleMDE from 'simplemde'

const ToolBarFuncs = ['toggleBold',
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
  'toggleFullScreen'].reduce((pre, cur) => {
  pre[cur as Types.MarkdownEditorToolbarFuncName] = SimpleMDE[cur];// as ((editor: Types.SimpleMarkdownEditor) => void);
  return pre;
}, {} as Types.ToolBarFuncs);

const fullToolBar: {
  [key in Types.MarkdownEditorToolBarName]: Types.MarkdownEditorToolBarItem
} = {
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
    action(editor) {
      if (!(editor as any)._fileInputEl) {
        return false;
      }
      const el: HTMLInputElement = (editor as any)._fileInputEl;
      el.addEventListener('change', onChange);
      el.click();
      async function onChange(e: Event): Promise<any> {
        el.removeEventListener('change', onChange)
        try {
          const target = (e as any).target;
          const files = target.files;
          if (files && files.length > 0) {
            const file = files[0];
            const url = await (editor as any)._fileUploadFun(file);
            const cm = editor.codemirror;
            const stat = editor.getState();
            editor._replaceSelection(cm, stat.image, ['![](', '#url#)'], url);
          }
        } catch (error) {
          console.log('---', error);
        }
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
const fullToolBarKey = new Map<string, Types.MarkdownEditorToolBarItem>();
Object.entries(fullToolBar).forEach(([key, value]) => {
  let _className = `md-icon md-icon-${key}`;
  if (value.className && value.className.includes('no-disable')) {
    _className += ' no-disable';
  }
  if (value.className && value.className.includes('no-mobile')) {
    _className += ' no-mobile';
  }
  value.className = _className;
  fullToolBarKey.set(key, value);
});
const separator = '|';
const defaultUploadFun = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const url = (e.target as any).result;
      if (url) {
        resolve(url);
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('upload failed');
      }
    };
    reader.readAsDataURL(file);
  });
};

export default class MarkdownEditor extends Component<Types.MarkdownEditorProps> {
  static ToolBarFunc = ToolBarFuncs;
  static fullToolBar = fullToolBar;
  static defaultToolBar: Types.MarkdownEditorToolBarConfig = [
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
  private _boxEl = createRef<HTMLDivElement>();
  private _editorEl = createRef<HTMLTextAreaElement>();
  private _fileInputEl = createRef<HTMLInputElement>();
  public $editor: null | Types.SimpleMarkdownEditor = null;

  private get _inertTexts() {
    const { editorConfig = {}} = this.props;
    const { insertTexts = {}} = editorConfig as Types.MarkdownEditorConfig;
    const config: Types.MarkdownEditorOptionInsertTextsRules = {
      link: ['[', '](#url#)'],
      image: ['![](', '#url#)'],
      table: ['', '\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text     | Text     |\n\n'],
      horizontalRule: ['', '\n\n-----\n\n'],
      ...insertTexts
    };
    return config;
  }

  private get _editorConfig() {
    const { toolbar: toolBarConfig = true } = this.props;
    const _toolbar = !toolBarConfig ? [] : (Array.isArray(toolBarConfig) ? toolBarConfig : MarkdownEditor.defaultToolBar);
    const toolBar = _toolbar.map(item => {
      if (typeof item === 'string') {
        if (item === separator) {
          return item;
        } else {
          if (fullToolBarKey.get(item)) {
            const config = fullToolBarKey.get(item) as Types.MarkdownEditorToolBarItem;
            return config
          } else {
            return null;
          }
        }
      } else if (typeof item === 'object') {
        const { name, action, className } = item;
        const _item = fullToolBarKey.get(name);
        const _className = _item ? _item.className : '';
        if (!name || typeof name !== 'string') {
          console.warn(`toolbar config error，${item} name not  string`);
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
          if (typeof className !== 'string' || (!className && !_className)) {
            console.warn(`toolbar config error，${item} className not exist`);
            return null;
          }

          if (!action || typeof action !== 'function') {
            console.warn(`toolbar config error，${item} action not a function`);
            return null;
          }
        }
        item.className = item.className ? item.className : _className;
        return item;
      }
      return null;
    }).filter(item => item);
    return {
      ...(typeof this.props.initialValue === 'string' ? { initialValue: this.props.initialValue } : {}),
      ...(typeof this.props.editorConfig === 'object' ? this.props.editorConfig : {}),
      toolbar: toolBar.length > 0 ? toolBar : false,
      autoDownloadFontAwesome: false
    };
  }
  private get _hideToolbar() {
    const { toolbar } = this.props;
    return !toolbar || (Array.isArray(toolbar) && toolbar.length === 0);
  }
  private get _hideStatusBar() {
    const { editorConfig } = this.props;
    return !!(editorConfig && (editorConfig.status === false || Array.isArray(editorConfig.status) && editorConfig.status.length === 0));
  }
  private _getEditorH(height: number) {
    let _height = height;
    _height -= this._hideStatusBar ? 0 : 35;
    _height -= this._hideToolbar ? 0 : 51;
    _height -= 22; // padding + border
    return Math.max(_height, 160);
  }
  private get _editorH() {
    const { height } = this.props;
    if (height && Number.isInteger(height)) {
      return this._getEditorH(height);
    }
    return 'auto';
  }
  private _defaultMinH = 300; // SimpleMDE default minH
  private get _editorMinH() {
    const { minHeight: height } = this.props;
    if (height && Number.isInteger(height)) {
      return this._getEditorH(height);
    }
    return this._defaultMinH;
  }

  private _setHeightToEl(height: number | 'auto', className: string, isMin = false) {
    if (isMin && this._defaultMinH === height) {
      return;
    }
    if (this._boxEl.current) {
      const boxEl = this._boxEl.current;
      if (height !== 'auto') {
        const el = boxEl.querySelector(className);
        if (el) {
          (el as HTMLDivElement).style[isMin ? 'minHeight' : 'height'] = height + 'px';
        }
      }
    }
  }

  private _outputDOMPurify() {
    if ('outputDOMPurify' in this.props) {
      return !!this.props.outputDOMPurify;
    }
    return true;
  }
  private _previewDOMPurify() {
    if ('previewDOMPurify' in this.props) {
      return !!this.props.previewDOMPurify;
    }
    return true;
  }

  private _getMdToHtml(md: string) {
    // Initialize
    const { editorConfig } = this.props;
    let markedOptions: any = {
      breaks: true,
    };
    // Update options
    if (editorConfig && editorConfig.renderingConfig && editorConfig.renderingConfig.singleLineBreaks === false) {
      markedOptions.breaks = false;
    } else {
      markedOptions.breaks = true;
      if (editorConfig && editorConfig.renderingConfig && editorConfig.renderingConfig.codeSyntaxHighlighting === true && (window as any).hljs) {
        markedOptions.highlight = function(code: any) {
          return (window as any).hljs.highlightAuto(code).value;
        };
      }
      return mdToHTML(md, markedOptions);
    }
  }

  private _getDomHtml(html: string) {
    return htmlDomSanitize(html);
  }


  public get mdValue() {
    if (!this.$editor) { return '' }
    return this.$editor.value() as string;
  }
  public set mdValue(content: string) {
    if (this.$editor) {
      this.$editor.value(content || '');
    }
  }

  public get _unDOMPurifyHtml() {
    const _md = this.mdValue;
    if (!_md) { return '' }
    try {
      let _html = this._getMdToHtml(_md);
      return _html;
    } catch (error) {
      console.warn('---get MarkdownEditor HTML Error ---', error);
      return '';
    }
  }

  public get html() {
    if (!this._outputDOMPurify) { return this._unDOMPurifyHtml }
    return this._getDomHtml(this._unDOMPurifyHtml || '');
  }

  componentDidMount() {
    if (!this._editorEl.current) {
      return;
    }
    if (this._previewDOMPurify) {
      // rewirte SimpleMDE prototype method
      SimpleMDE.prototype.markdown = (text: string) => {
        return this._getDomHtml(this._getMdToHtml(text) || '');
      };
    }
    SimpleMDE.prototype._fileInputEl = this._fileInputEl.current;
    SimpleMDE.prototype._fileUploadFun = typeof this.props.imageUploadFun === 'function' ? this.props.imageUploadFun : defaultUploadFun;
    // SimpleMDE don't export codemirror method
    SimpleMDE.prototype._replaceSelection = (cm: any, active: any, startEnd: any, url: any) => {
      if (/editor-preview-active/.test(cm.getWrapperElement().lastChild.className)) { return }
      let text;
      let start = startEnd[0];
      let end = startEnd[1];
      let startPoint = cm.getCursor('start');
      let endPoint = cm.getCursor('end');
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
    this.$editor = new SimpleMDE({
      element: this._editorEl.current,
      ...this._editorConfig
    });

    // handle height
    this._setHeightToEl(this._editorH, '.CodeMirror');
    this._setHeightToEl(this._editorMinH, '.CodeMirror', true);
    this._setHeightToEl(this._editorMinH, '.CodeMirror-scroll', true);
    
    (this.$editor.codemirror as any).on("paste", async (cm: any,e:any) => {
      // console.log(e.clipboardData)
        if(!(e.clipboardData&&e.clipboardData.items)){
            alert("该浏览器不支持操作");
            return;
        }
        for (var i = 0, len = e.clipboardData.items.length; i < len; i++) {
          var item = e.clipboardData.items[i];
        // console.log(item.kind+":"+item.type);
          if (item.kind === "string") {
              item.getAsString(function (str: any) {
                  // str 是获取到的字符串
              })
          } else if (item.kind === "file") {
            var pasteFile = item.getAsFile();
            // pasteFile就是获取到的文件
            console.log(pasteFile);
            // fileUpload(pasteFile);
            const url = await (this.$editor as any)._fileUploadFun(pasteFile);
            const stat = this.$editor.getState();
            this.$editor._replaceSelection(cm, stat.image, ['![](', '#url#)'], url);
          }
      }
    });
  }

  render() {
    return (
      <>
        <div ref={this._boxEl} className="md-editor">
          <textarea ref={this._editorEl} />
        </div>
        <input type="file" ref={this._fileInputEl} accept="image/x-png,image/gif,image/jpeg" hidden/>
      </>
    );
  }
}