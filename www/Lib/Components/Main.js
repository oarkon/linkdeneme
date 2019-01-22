var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import LinkElement, { CustomElement } from "/Lib/Link/Element.js";
import { html, css } from "/Lib/Link/Template.js";
let Main = class Main extends LinkElement {
    constructor() {
        super(...arguments);
        this.Template = () => html `
    <ui-leftbar></ui-leftbar>
    <ui-content></ui-content>
    <ui-rightbar></ui-rightbar>
  `;
    }
};
Main.Style = css `ui-main{display:flex;justify-content:space-between}`;
Main.Tag = "ui-main";
Main = __decorate([
    CustomElement.UI
], Main);
export default Main;
customElements.define("ui-main", Main);
