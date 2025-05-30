import { marked, MarkedExtension } from 'marked';
import DOMPurify from 'dompurify';

export const mdToHTML = (md: string, markedOptions: MarkedExtension = {}, ...others: MarkedExtension[]): string => {
  try {
    const _md = typeof md === 'string' ? md : '';
    if (typeof markedOptions === 'object' && Object.keys(markedOptions).length > 0) {
      // Set options
      marked.use(markedOptions,...others);
    }
    return marked.parse(_md) as string;
  } catch (error) {
    return '';
  }
};

export const htmlDomSanitize = (html: string):string => {
  try {
    const _html = typeof html === 'string' ? html : '';
    return DOMPurify.sanitize(_html);
  } catch (error) {
    return '';
  }
};