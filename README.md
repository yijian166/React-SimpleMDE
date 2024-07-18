# React-SimpleMDE

Simple Markdown Editor For React, base on [SimpleMDE](https://github.com/sparksuite/simplemde-markdown-editor).

- No Need jQuery
- Support Custom Toobar, and toobar icon buildin css with base4 svg
- Support Local Image
- Support **DOMPurify**, prevent XSS Issue.
- Support Typescript, include some SimpleMDE's types.
- Support paste image to upload
- Support add more codemirror key map
- And full [SimpleMDE](https://github.com/sparksuite/simplemde-markdown-editor)'s Feature

## How To Use MarkdownEditor

[Demo](https://stackblitz.com/edit/stackblitz-starters-aambmu?file=app%2Fpage.tsx)

```
npm install easymde --save
npm install react-markdown-editor-smde --save
```

```javascript
import 'easymde/src/css/easymde.css';
import 'codemirror/lib/codemirror.css'
import MarkdownEditor from 'react-markdown-editor-smde'
const Editor = () => {
  const el = useRef();
  function onSubmit() {
    if (el.current) {
      const md = el.current.mdValue;
    }
  }
  function doReset() {
    if (el.current) {
      el.current.mdValue = '';
    }
  }
  return (
    <div>
      <MarkdownEditor ref={el} />
      <button onClick={onSubmit}>Submit</button>
      <button onClick={doReset}>Reset</button>
    </div>
  )
}

```
- use `ref` to get Editor instance
    - `const md = ref.mdValue` get markdown value
    - `ref.mdValue = md` set markdown value
    - `const html = ref.html` get markdown value
    - **`ref.$editor` get SimpleMd's instance (SimpleMarkdownEditor)**
- And `MarkdownEditor` has static vars
    - `MarkdownEditor.ToolBarFuncs`: default ToolBar Functions
    - `MarkdownEditor.defaultToolBar`: default ToolBar item




### `MarkdownEditor` props

| Props | Note | Required |
| -------- | -------- | -------- |
| `editorConfig`     | [SimpleMd's Config](https://github.com/sparksuite/simplemde-markdown-editor#configuration)     |  NO    |
| `height`     | Editor Fix Height, inclues toolbar, and status bar    |  NO    |
| `minHeight`     | Editor min height, default 300   |  NO    |
| `initialValue` | If set, will customize the initial value of the editor. |  NO    |
| `toolbar` | toolbar config, default has toolbar  |  NO    |
| `outputDOMPurify` | Output HTML DOMPurify，default ON,  prevent xss issues |  NO    |
| `previewDOMPurify` | Output HTML DOMPurify，default ON,  prevent xss issues |  NO    |
| `imageUploadFun` | image upload async function, default use Browser FileReader |  NO    |
| `moreExtraKeys` | add more key map to codemirror |  NO    |


Most Markdown Editor (include SimpleMDE) also support html, this will cause [XSS issues](https://github.com/sparksuite/simplemde-markdown-editor/issues/721). So highly recommended you **DO NOT turn `outputDOMPurify` and `previewDOMPurify` off**.

### How to Custom Toolbar(`toolbar` props)

`MarkdownEditor` still use SimpleMd's mothods to Custom toobar, but more Lazy, only `toolbar` props ...

`toolbar`'s type is : `boolean | (MarkdownEditorToolBarName | '|' | MarkdownEditorToolBarItem)[]`

```typescript
export interface MarkdownEditorToolBarItem {
  name: MarkdownEditorToolBarName | string;
  action?: ((editor: SimpleMarkdownEditor) => void) | string;
  className?: string;
  title?: string;
}
```

- string[]: use SimpleMd's buidin Names
    - `bold`
    - `italic`
    - `strikethrough`
    - `heading`
    - `heading-smaller`
    - `heading-bigger`
    - `heading-1`
    - `heading-2`
    - `heading-3`
    - `code`
    - `quote`
    - `unordered-list`
    - `ordered-list`
    - `clean-block`
    - `link`
    - `image`
    - `table`
    - `horizontal-rule`
    - `preview`
    - `side-by-side`
    - `fullscreen`
    - `undo`
    - `redo`
    - `guide`;
    - `|`
    - And plus one `choose-image` (choose local image, and combine with `imageUploadFun` to upload image to your server)
- MarkdownEditorToolBarItem[]: SimpleMd's buidin toolbar functions 
    - `toggleBold`
    - `toggleItalic`
    - `toggleStrikethrough`
    - `toggleBlockquote`
    - `toggleHeadingSmaller`
    - `toggleHeadingBigger`
    - `toggleHeading1`
    - `toggleHeading2`
    - `toggleHeading3`
    - `toggleCodeBlock`
    - `toggleUnorderedList`
    - `toggleOrderedList`
    - `cleanBlock`
    - `drawLink`
    - `drawImage`
    - `drawTable`
    - `drawHorizontalRule`
    - `undo`
    - `redo`
    - `togglePreview`
    - `toggleSideBySide`
    - `toggleFullScreen`

## more key map
```javascript
<MarkdownEditorField
  moreExtraKeys={{
    'Ctrl-S': function(cm) {
      onSubmit();
    },
    'Cmd-S': function(cm) {
      onSubmit();
    }
  }}
/>
```

## Others

- `MarkdownEditorField,`like normal form component, support `value` and `onChange` props. 
- `mdToHTML()` and  `htmlDomSanitize()`
