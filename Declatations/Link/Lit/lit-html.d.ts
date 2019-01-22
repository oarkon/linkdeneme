import { SVGTemplateResult, TemplateResult } from './lib/template-result.js';
export { DefaultTemplateProcessor, defaultTemplateProcessor } from './lib/default-template-processor.js';
export { directive, DirectiveFn, isDirective } from './lib/directive.js';
export { removeNodes, reparentNodes } from './lib/dom.js';
export { noChange, Part } from './lib/part.js';
export { AttributeCommitter, AttributePart, BooleanAttributePart, EventPart, isPrimitive, NodePart, PropertyCommitter, PropertyPart } from './lib/parts.js';
export { RenderOptions } from './lib/render-options.js';
export { parts, render } from './lib/render.js';
export { templateCaches, templateFactory } from './lib/template-factory.js';
export { TemplateInstance } from './lib/template-instance.js';
export { TemplateProcessor } from './lib/template-processor.js';
export { SVGTemplateResult, TemplateResult } from './lib/template-result.js';
export { createMarker, isTemplatePartActive, Template } from './lib/template.js';
export declare const html: (strings: TemplateStringsArray, ...values: any[]) => TemplateResult;
export declare const svg: (strings: TemplateStringsArray, ...values: any[]) => SVGTemplateResult;
