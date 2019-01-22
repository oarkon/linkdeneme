import { TemplateResult } from './template-result.js';
import { Template } from './template.js';
export declare type TemplateFactory = (result: TemplateResult) => Template;
export declare function templateFactory(result: TemplateResult): Template;
export declare type templateCache = {
    stringsArray: WeakMap<TemplateStringsArray, Template>;
    keyString: Map<string, Template>;
};
export declare const templateCaches: Map<string, templateCache>;
