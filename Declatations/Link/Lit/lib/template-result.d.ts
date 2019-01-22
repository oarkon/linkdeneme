import { TemplateProcessor } from './template-processor.js';
export declare class TemplateResult {
    strings: TemplateStringsArray;
    values: any[];
    type: string;
    processor: TemplateProcessor;
    constructor(strings: TemplateStringsArray, values: any[], type: string, processor: TemplateProcessor);
    getHTML(): string;
    getTemplateElement(): HTMLTemplateElement;
}
export declare class SVGTemplateResult extends TemplateResult {
    getHTML(): string;
    getTemplateElement(): HTMLTemplateElement;
}
