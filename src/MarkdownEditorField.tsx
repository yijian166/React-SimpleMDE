import MarkdownEditor from './MarkdownEditor';
import { MarkdownEditorFieldProps } from './types';
import * as React from 'react';
export const MarkdownEditorField = (props: MarkdownEditorFieldProps) => {
  const _el = React.useRef<MarkdownEditor>(null);
  React.useEffect(() => {
    if (_el.current && _el.current.$editor) {
      _el.current.$editor.codemirror.on('change', _onChange);
    }
    return () => {
      // console.log('---MarkdownEditorField unMount---');
      if (_el.current && _el.current.$editor) {
        _el.current.$editor.codemirror.off('change', _onChange);
      }
    };
  }, []);

  function _onChange(doc: any, e: any) {
    // console.log('---MarkdownEditorField---', doc, el);
    if (_el.current && typeof props.onChange === 'function') {
      props.onChange(_el.current.mdValue, _el.current.html || '');
    }
  }

  React.useEffect(() => {
    if (_el.current) {
      if (props.value !== _el.current.mdValue) {
        _el.current.mdValue = props.value || '';
      }
    }
  }, [props.value]);

  return <MarkdownEditor ref={_el} {...props}/>;
}