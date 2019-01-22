import LinkElement from "Link/Element";
import { TemplateResult } from "Link/Lit/lit-html";
export default class Block {
    Root: LinkElement;
    _Template: TemplateResult;
    constructor(Root: LinkElement);
    Template: any;
}
