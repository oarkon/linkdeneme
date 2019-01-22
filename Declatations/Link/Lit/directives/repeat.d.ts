import { DirectiveFn } from '../lib/directive.js';
export declare type KeyFn<T> = (item: T, index: number) => any;
export declare type ItemTemplate<T> = (item: T, index: number) => any;
export declare const repeat: <T>(items: Iterable<T>, keyFnOrTemplate: KeyFn<T> | ItemTemplate<T>, template?: ItemTemplate<T>) => DirectiveFn;
