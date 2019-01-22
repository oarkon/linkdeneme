import { html } from "/Lib/Link/Template.js";
export default class Block {
    constructor(Root) {
        this.Root = Root;
        this._Template = html ``;
    }
    set Template(Value) {
        this._Template = Value;
    }
}
