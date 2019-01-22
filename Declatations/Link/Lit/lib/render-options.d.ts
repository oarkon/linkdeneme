import { TemplateFactory } from './template-factory.js';
export interface RenderOptions {
    templateFactory: TemplateFactory;
    eventContext?: EventTarget;
}
