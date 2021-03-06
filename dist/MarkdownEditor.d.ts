import './style.css';
import * as Types from './types';
import { Component } from 'react';
export default class MarkdownEditor extends Component<Types.MarkdownEditorProps> {
    static ToolBarFunc: Types.ToolBarFuncs;
    static fullToolBar: {
        undo: Types.MarkdownEditorToolBarItem;
        redo: Types.MarkdownEditorToolBarItem;
        bold: Types.MarkdownEditorToolBarItem;
        italic: Types.MarkdownEditorToolBarItem;
        strikethrough: Types.MarkdownEditorToolBarItem;
        heading: Types.MarkdownEditorToolBarItem;
        "heading-smaller": Types.MarkdownEditorToolBarItem;
        "heading-bigger": Types.MarkdownEditorToolBarItem;
        "heading-1": Types.MarkdownEditorToolBarItem;
        "heading-2": Types.MarkdownEditorToolBarItem;
        "heading-3": Types.MarkdownEditorToolBarItem;
        code: Types.MarkdownEditorToolBarItem;
        quote: Types.MarkdownEditorToolBarItem;
        "unordered-list": Types.MarkdownEditorToolBarItem;
        "ordered-list": Types.MarkdownEditorToolBarItem;
        "clean-block": Types.MarkdownEditorToolBarItem;
        link: Types.MarkdownEditorToolBarItem;
        image: Types.MarkdownEditorToolBarItem;
        "choose-image": Types.MarkdownEditorToolBarItem;
        table: Types.MarkdownEditorToolBarItem;
        "horizontal-rule": Types.MarkdownEditorToolBarItem;
        preview: Types.MarkdownEditorToolBarItem;
        "side-by-side": Types.MarkdownEditorToolBarItem;
        fullscreen: Types.MarkdownEditorToolBarItem;
        guide: Types.MarkdownEditorToolBarItem;
    };
    static defaultToolBar: Types.MarkdownEditorToolBarConfig;
    private _boxEl;
    private _editorEl;
    private _fileInputEl;
    $editor: null | Types.SimpleMarkdownEditor;
    private readonly _inertTexts;
    private readonly _editorConfig;
    private readonly _hideToolbar;
    private readonly _hideStatusBar;
    private _getEditorH;
    private readonly _editorH;
    private _defaultMinH;
    private readonly _editorMinH;
    private _setHeightToEl;
    private _outputDOMPurify;
    private _previewDOMPurify;
    private _getMdToHtml;
    private _getDomHtml;
    mdValue: string;
    readonly _unDOMPurifyHtml: string;
    readonly html: string;
    componentDidMount(): void;
    render(): JSX.Element;
}
