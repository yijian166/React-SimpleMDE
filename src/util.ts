import marked from 'marked';
import DOMPurify from 'dompurify';

export const mdToHTML = (md: string, markedOptions = {}) => {
  try {
    const _md = typeof md === 'string' ? md : '';
    if (typeof markedOptions === 'object' && Object.keys(markedOptions).length > 0) {
      // Set options
      marked.setOptions(markedOptions);
    }
    return marked(_md);
  } catch (error) {
    return '';
  }
};

export const htmlDomSanitize = (html: string) => {
  try {
    const _html = typeof html === 'string' ? html : '';
    return DOMPurify.sanitize(_html);
  } catch (error) {
    return '';
  }
};