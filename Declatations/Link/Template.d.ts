import { TemplateResult, Part } from "Link/Lit/lit-html";
export declare class Block {
    private _Value?;
    protected Parts: Part[];
    constructor(_Value?: any);
    Template: any;
    private $Assign;
}
export declare class LinkTemplate extends TemplateResult {
    constructor(strings: TemplateStringsArray, values: any[]);
    getHTML(): string;
}
export declare const html: (strings: TemplateStringsArray, ...values: any[]) => LinkTemplate;
export declare const css: (strings: TemplateStringsArray, ...values: any[]) => any;
