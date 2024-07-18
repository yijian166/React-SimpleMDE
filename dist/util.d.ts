import { marked } from 'marked';
export declare const mdToHTML: (md: string, markedOptions?: marked.MarkedExtension, ...others: marked.MarkedExtension[]) => string;
export declare const htmlDomSanitize: (html: string) => string;
