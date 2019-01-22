import { TemplateResult } from "Link/Lit/lit-html";
import Particle from "./Particle";
export declare const CustomElement: Record<string, any>;
declare const enum ElementStages {
    Disconnected = 0,
    Idle = 1,
    Busy = 2
}
export declare class Stylist {
    static Store: Record<string, TemplateResult>;
    static Clients: HTMLStyleElement[];
    static Register(Key: string, Value: TemplateResult): void;
    static RegisterClient(Component: HTMLStyleElement): void;
}
export default class LinkElement extends HTMLElement {
    static Tag: string;
    static Style: TemplateResult;
    static Particles: Record<string, typeof Particle>;
    Root: this;
    Slot: Node[];
    Particles: Record<string, Particle>;
    Stage: ElementStages;
    Getters: Record<string, Function[]>;
    Setters: Record<string, Function[]>;
    DefineProp(Key: any, Context: any): void;
    SetGetter(Context: any, Key: string, Fn: (BV?: any) => any): void;
    SetSetter(Context: any, Key: string, Fn: (CV: any, BV?: any) => any): void;
    SetGetters(Context: any, Key: string, Fns: Array<(BV?: any) => any>): void;
    SetSetters(Context: any, Key: string, Fns: Array<(CV: any, BV?: any) => any>): void;
    constructor();
    Render(Template: any): void;
    ReRender(): void;
    CalcParticle(Stage: string): void;
    connectedCallback(): void;
    Template?(): TemplateResult;
    Constr?(): Promise<void> | void;
    Update?(): Promise<void> | void;
    Rendered?(): void;
    disconnectedCallback(): void;
    RequestCycle(Reason: string): void;
    $Constr(): Promise<void>;
    $Cycle(): Promise<void>;
}
export declare class LinkComponent extends LinkElement {
}
export {};
