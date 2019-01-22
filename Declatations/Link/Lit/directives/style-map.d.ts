import { Part } from '../lit-html.js';
export interface StyleInfo {
    [name: string]: string;
}
export declare const styleMap: (styleInfo: StyleInfo) => (part: Part) => void;
