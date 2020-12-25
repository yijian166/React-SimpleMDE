import React, { useEffect, useRef } from 'react';
import MarkdownEditor from './MarkdownEditor';
import { MarkdownEditorFieldProps } from './types';
export const MarkdownEditorField = (props: MarkdownEditorFieldProps) => {
  const _el = useRef<MarkdownEditor>(null);
  useEffect(() => {
    if (_el.current && _el.current.$editor) {
      _el.current.$editor.codemirror.on('change', _onChange);
      _el.current.$editor.codemirror.on('update', _onUpdate);
    }
    return () => {
      // console.log('---MarkdownEditorField unMount---');
      if (_el.current && _el.current.$editor) {
        _el.current.$editor.codemirror.off('change', _onChange);
        _el.current.$editor.codemirror.off('update', _onUpdate);
      }
    };
  }, []);

  function _onUpdate(e:any) {
    if (_el.current && typeof props.onUpdate === 'function') {
      props.onUpdate(_el.current.$editor,e);
    }
  }

  function _onChange(doc: any, e: any) {
    // console.log('---MarkdownEditorField---', doc, el);
    if (_el.current && typeof props.onChange === 'function') {
      props.onChange(_el.current.mdValue, _el.current.html || '');
    }
  }

  useEffect(() => {
    if (_el.current) {
      if (props.value !== _el.current.mdValue) {
        _el.current.mdValue = props.value || '';
      }
    }
  }, [props.value]);

  return <MarkdownEditor ref={_el} {...props}/>;
}