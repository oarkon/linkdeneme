var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import LinkElement, { CustomElement } from "/Lib/Link/Element.js";
import { css, html } from "/Lib/Link/Template.js";
import Style from "/Lib/Particles/Style.js";
let Content = class Content extends LinkElement {
    constructor() {
        super(...arguments);
        this.BgColor = "#fff";
        this.Height = window.innerHeight - 50;
        this.Template = () => html `
  asd
  `;
    }
};
Content.Style = css `ui-content{display:flex;position:relative;width:100%;height:var(--height);background-color:var(--bg-color)}`;
Content.Tag = "ui-content";
__decorate([
    Style.Var,
    __metadata("design:type", Object)
], Content.prototype, "BgColor", void 0);
__decorate([
    Style.Var.px,
    __metadata("design:type", Object)
], Content.prototype, "Height", void 0);
Content = __decorate([
    CustomElement.UI
], Content);
export default Content;
customElements.define("ui-content", Content);
