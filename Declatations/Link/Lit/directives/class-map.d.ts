import { Part } from '../lit-html.js';
export interface ClassInfo {
    [name: string]: string | boolean | number;
}
export declare const classMap: (classInfo: ClassInfo) => (part: Part) => void;
