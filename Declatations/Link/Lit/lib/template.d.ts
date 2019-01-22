import { TemplateResult } from './template-result.js';
export declare const marker: string;
export declare const nodeMarker: string;
export declare const markerRegex: RegExp;
export declare const boundAttributeSuffix = "$lit$";
export declare class Template {
    parts: TemplatePart[];
    element: HTMLTemplateElement;
    constructor(result: TemplateResult, element: HTMLTemplateElement);
}
export declare type TemplatePart = {
    type: 'node';
    index: number;
} | {
    type: 'attribute';
    index: number;
    name: string;
    strings: string[];
};
export declare const isTemplatePartActive: (part: TemplatePart) => boolean;
export declare const createMarker: () => Comment;
export declare const lastAttributeNameRegex: RegExp;
