import { Part } from './part.js';
import { NodePart } from './parts.js';
import { RenderOptions } from './render-options.js';
export interface TemplateProcessor {
    handleAttributeExpressions(element: Element, name: string, strings: string[], options: RenderOptions): Part[];
    handleTextExpression(options: RenderOptions): NodePart;
}
