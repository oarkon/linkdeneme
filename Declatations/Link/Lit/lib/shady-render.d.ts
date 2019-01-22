import { RenderOptions } from './render-options.js';
import { TemplateResult } from './template-result.js';
export { html, svg, TemplateResult } from '../lit-html.js';
export interface ShadyRenderOptions extends Partial<RenderOptions> {
    scopeName: string;
}
export declare const render: (result: TemplateResult, container: Element | DocumentFragment, options: ShadyRenderOptions) => void;
