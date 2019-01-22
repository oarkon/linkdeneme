import { Part } from './part.js';
export declare type DirectiveFn = (part: Part) => void;
export declare const directive: <F extends Function>(f: F) => F;
export declare const isDirective: (o: any) => boolean;
