import { Block } from "./Template";
export default class Reactive {
    static Block<T extends Block>(Ctor: {
        new (...args: any[]): T;
    }): new (...args: any[]) => T;
    static Prop(Target: any, Key: string, PD?: any): void;
    static Callback(Fn: string | Function): (Target: any, Key: string, PD?: any) => void;
}
