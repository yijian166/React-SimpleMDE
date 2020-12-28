import { EditorFromTextArea } from 'codemirror';
export interface MarkdownEditorFieldProps extends MarkdownEditorProps {
    value?: string;
    onChange?: (value: string, html: string) => void;
    /**
     * codemirror on upate event
     */
    onUpdate?: (editor: SimpleMarkdownEditor, e: EditorFromTextArea) => void;
}
export interface MarkdownEditorProps {
    /**
     * SimpleMd's Config
     */
    editorConfig?: MarkdownEditorConfig;
    /**
     * Editor Fix Height, inclues toolbar, and status bar
     */
    height?: number;
    /**
     * Editor min height, default 300
     */
    minHeight?: number;
    /**
     * If set, will customize the initial value of the editor.
     */
    initialValue?: string;
    /**
     * toolbar config
     */
    toolbar?: MarkdownEditorToolbar;
    /**
     * Output html DOMPurify，default on
     * prevent xss, like: <div>html<img src="x" onerror="alert('hell0')" /></div>
     */
    outputDOMPurify?: boolean;
    /**
     * Preview html DOMPurify，default on
     * prevent xss, like: <div>html<img src="x" onerror="alert('hell0')" /></div>
     */
    previewDOMPurify?: boolean;
    /**
     * image upload async function, default use Browser FileReader
     */
    imageUploadFun?: (file: File) => Promise<string>;
    /**
     * add extra key map to codemirror
     */
    moreExtraKeys?: {
        [key: string]: (cm: EditorFromTextArea) => void;
    };
}
export declare type MarkdownEditorToolbar = boolean | MarkdownEditorToolBarConfig;
export declare type MarkdownEditorToolBarConfig = (MarkdownEditorToolBarName | '|' | MarkdownEditorToolBarItem)[];
export interface MarkdownEditorToolBarItem {
    name: MarkdownEditorToolBarName | string;
    action?: ((editor: SimpleMarkdownEditor) => void) | string;
    className?: string;
    title?: string;
}
export declare type MarkdownEditorToolBarName = 'bold' | 'italic' | 'strikethrough' | 'heading' | 'heading-smaller' | 'heading-bigger' | 'heading-1' | 'heading-2' | 'heading-3' | 'code' | 'quote' | 'unordered-list' | 'ordered-list' | 'clean-block' | 'link' | 'image' | 'choose-image' | 'table' | 'horizontal-rule' | 'preview' | 'side-by-side' | 'fullscreen' | 'undo' | 'redo' | 'guide';
export interface SimpleMarkdownEditor extends ToolBarFuncs {
    /**
     * codemirror's EditorFromTextArea variable，can do something like attach event, and editor staff.
     */
    codemirror: EditorFromTextArea;
    /**
     * get，set
     * get: use empty param，reutrn markdown string
     * set: use string param，return SimpleMDE instance
     */
    value: (value?: string) => SimpleMarkdownEditor | string;
    /**
     * check is preview
     */
    isPreviewActive: () => boolean;
    /**
     * check is side by side preview
     */
    isSideBySideActive: () => boolean;
    /**
     * check is fullscreen
     */
    isFullscreenActive: () => boolean;
    /**
     * get editor CodeMirrorstatus
     */
    getState: () => any;
    /**
     * You can revert to the initial textarea by calling the toTextArea method.
     * Note that this clears up the autosave (if enabled) associated with it. The textarea will retain any text from the destroyed SimpleMDE instance.
     */
    toTextArea: () => void;
    /**
     * codeMirror's method,  rarely used
     */
    _replaceSelection: (cm: any, active: any, startEnd: any, url: any) => void;
}
export declare type MarkdownEditorToolbarFuncName = 'toggleBold' | 'toggleItalic' | 'toggleStrikethrough' | 'toggleBlockquote' | 'toggleHeadingSmaller' | 'toggleHeadingBigger' | 'toggleHeading1' | 'toggleHeading2' | 'toggleHeading3' | 'toggleCodeBlock' | 'toggleUnorderedList' | 'toggleOrderedList' | 'cleanBlock' | 'drawLink' | 'drawImage' | 'drawTable' | 'drawHorizontalRule' | 'undo' | 'redo' | 'togglePreview' | 'toggleSideBySide' | 'toggleFullScreen';
export declare type ToolBarFuncs = {
    [key in MarkdownEditorToolbarFuncName]: (editor: SimpleMarkdownEditor) => void;
};
export interface MarkdownEditorConfig {
    /**
     * autofocuses the editor. Defaults to false.
     */
    autofocus?: boolean;
    /**
     * Saves the text that's being written and will load it back in the future. It will forget the text when the form it's contained in is submitted.
     */
    autosave?: MarkdownEditorOptionAutoSave;
    /**
     * Customize how certain buttons that style blocks of text behave.
     */
    blockStyles?: MarkdownEditorOptionBlockStyles;
    /**
     * If set to true, force text changes made in SimpleMDE to be immediately stored in original textarea. Defaults to false.
     */
    forceSync?: boolean;
    /**
     * If set to false, indent using spaces instead of tabs. Defaults to true.
     */
    indentWithTabs?: boolean;
    /**
     * Customize how certain buttons that insert text behave. Takes an array with two elements. The first element will be the text inserted before the cursor or highlight, and the second element will be inserted after. For example, this is the default link value: ["[", "](http://)"]
     */
    insertTexts?: MarkdownEditorOptionInsertTextsRules;
    /**
     * If set to false, disable line wrapping. Defaults to true.
     */
    lineWrapping?: boolean;
    /**
     * Adjust settings for parsing the Markdown during editing (not previewing).
     */
    parsingConfig?: MarkdownEditorOptionParsingConfig;
    /**
     * Custom placeholder that should be displayed
     */
    placeholder?: string;
    /**
     * Custom function for parsing the plaintext Markdown and returning HTML. Used when user previews.
     */
    previewRender?: (plainText: string) => string;
    /**
     * If set to true, a JS alert window appears asking for the link or image URL. Defaults to false.
     */
    promptURLs?: boolean;
    /**
     * Adjust settings for parsing the Markdown during previewing (not editing).
     */
    renderingConfig?: MarkdownEditorRenderingConfig;
    /**
     * Keyboard shortcuts associated with this instance.
     * Defaults to: https://github.com/sparksuite/simplemde-markdown-editor#keyboard-shortcuts
     */
    shortcuts?: MarkdownEditorShortcuts;
    /**
     * If set to false, hide the status bar. Defaults to the array of built-in status bar items.
     * Optionally, you can set an array of status bar items to include, and in what order. You can even define your own custom status bar items.
     */
    status: MarkdownEditorStatus;
    /**
     * If set to false, remove the CodeMirror-selectedtext class from selected lines. Defaults to true.
     */
    styleSelectedText?: boolean;
    /**
     *  If set, customize the tab size. Defaults to 2.
     */
    tabSize?: number;
    /**
     * If set to false, disable toolbar button tips. Defaults to true.
     */
    toolbar?: boolean;
}
export declare type MarkdownEditorShortcuts = {
    [key in keyof MarkdownEditorShortcutsKey]: string;
};
export declare type MarkdownEditorStatus = false | ('autosave' | 'lines' | 'words' | 'cursor' | {
    className: string;
    defaultValue: (el: HTMLElement) => void;
    onUpdate: (el: HTMLElement) => void;
})[];
export declare type MarkdownEditorShortcutsKey = 'toggleBlockquote' | 'toggleBold' | 'cleanBlock' | 'toggleHeadingSmaller' | 'toggleItalic' | 'drawLink' | 'toggleUnorderedList' | 'togglePreview' | 'toggleCodeBlock' | 'drawImage' | 'toggleOrderedList' | 'toggleHeadingBigger' | 'toggleSideBySide' | 'toggleFullScreen';
export interface MarkdownEditorRenderingConfig {
    /**
     * If set to false, disable parsing GFM single line breaks. Defaults to true.
     */
    singleLineBreaks?: boolean;
    /**
     * If set to true, will highlight using highlight.js. Defaults to false. To use this feature you must include highlight.js on your page. For example, include the script and the CSS files like:
     * <script src="https://cdn.jsdelivr.net/highlight.js/latest/highlight.min.js"></script>
     * <link rel="stylesheet" href="https://cdn.jsdelivr.net/highlight.js/latest/styles/github.min.css">
     */
    codeSyntaxHighlighting?: boolean;
}
export interface MarkdownEditorOptionParsingConfig {
    /**
     *  If set to true, will render headers without a space after the #. Defaults to false.
     */
    allowAtxHeaderWithoutSpace?: boolean;
    /**
     * If set to false, will not process GFM strikethrough syntax. Defaults to true.
     */
    strikethrough?: boolean;
    /**
     * If set to true, let underscores be a delimiter for separating words. Defaults to false.
     */
    underscoresBreakWords?: boolean;
}
export interface MarkdownEditorOptionInsertTextsRules {
    horizontalRule?: [string, string];
    image?: [string, string];
    link?: [string, string];
    table?: [string, string];
}
export interface MarkdownEditorOptionBlockStyles {
    /**
     * Can be set to ** or __. Defaults to **.
     */
    bold?: '**' | '__';
    /**
     * Can be set to ``` or ~~~. Defaults to ```.
     */
    code?: '' | '';
    /**
     * Can be set to * or _. Defaults to *.
     */
    italic?: '' | '';
}
export interface MarkdownEditorOptionAutoSave {
    /**
     * If set to true, autosave the text. Defaults to false.
     */
    enabled?: boolean;
    /**
     * Delay between saves, in milliseconds. Defaults to 10000 (10s).
     */
    delay?: number;
    /**
     * You must set a unique string identifier so that SimpleMDE can autosave. Something that separates this from other instances of SimpleMDE elsewhere on your website.
     */
    uniqueId: string;
}
