import { Part } from '../lit-html.js';
export declare const asyncReplace: <T>(value: AsyncIterable<T>, mapper?: (v: T, index?: number) => any) => (part: Part) => Promise<void>;
