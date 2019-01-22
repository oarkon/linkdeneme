import { Template } from './template.js';
export declare function removeNodesFromTemplate(template: Template, nodesToRemove: Set<Node>): void;
export declare function insertNodeIntoTemplate(template: Template, node: Node, refNode?: Node | null): void;
