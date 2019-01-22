var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import LinkElement, { CustomElement } from "/Lib/Link/Element.js";
import { css, html } from "/Lib/Link/Template.js";
let Footer = class Footer extends LinkElement {
    constructor() {
        super(...arguments);
        this.Template = () => html `asdas`;
    }
};
Footer.Style = css `ui-footer{display:flex;position:relative;width:100%;height:45px}`;
Footer.Tag = "ui-footer";
Footer = __decorate([
    CustomElement.UI
], Footer);
export default Footer;
customElements.define("ui-footer", Footer);
