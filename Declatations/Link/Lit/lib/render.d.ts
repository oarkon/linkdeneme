import { NodePart } from './parts.js';
import { RenderOptions } from './render-options.js';
import { TemplateResult } from './template-result.js';
export declare const parts: WeakMap<Node, NodePart>;
export declare const render: (result: TemplateResult, container: Element | DocumentFragment, options?: Partial<RenderOptions>) => void;
