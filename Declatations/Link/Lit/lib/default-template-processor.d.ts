import { Part } from './part.js';
import { NodePart } from './parts.js';
import { RenderOptions } from './render-options.js';
import { TemplateProcessor } from './template-processor.js';
export declare class DefaultTemplateProcessor implements TemplateProcessor {
    handleAttributeExpressions(element: Element, name: string, strings: string[], options: RenderOptions): Part[];
    handleTextExpression(options: RenderOptions): NodePart;
}
export declare const defaultTemplateProcessor: DefaultTemplateProcessor;
