import { MarkedExtension } from 'marked';
export declare const mdToHTML: (md: string, markedOptions?: MarkedExtension, ...others: MarkedExtension[]) => string;
export declare const htmlDomSanitize: (html: string) => string;
