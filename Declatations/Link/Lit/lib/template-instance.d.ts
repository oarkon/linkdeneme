import { Part } from './part.js';
import { RenderOptions } from './render-options.js';
import { TemplateProcessor } from './template-processor.js';
import { Template } from './template.js';
export declare class TemplateInstance {
    _parts: Array<Part | undefined>;
    processor: TemplateProcessor;
    options: RenderOptions;
    template: Template;
    constructor(template: Template, processor: TemplateProcessor, options: RenderOptions);
    update(values: any[]): void;
    _clone(): DocumentFragment;
}
