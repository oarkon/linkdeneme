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
import Style from "/Lib/Particles/Style.js";
import { html, css } from "/Lib/Link/Template.js";
let Rightbar = class Rightbar extends LinkElement {
    constructor() {
        super(...arguments);
        this.BgColor = "#DDD";
        this.Height = window.innerHeight - 50;
        this.Template = () => html `assaa`;
    }
};
Rightbar.Style = css `ui-rightbar{display:flex;position:relative;width:25%;height:var(--height);background-color:var(--bg-color)}`;
Rightbar.Tag = "ui-rightbar";
__decorate([
    Style.Var,
    __metadata("design:type", Object)
], Rightbar.prototype, "BgColor", void 0);
__decorate([
    Style.Var.px,
    __metadata("design:type", Object)
], Rightbar.prototype, "Height", void 0);
Rightbar = __decorate([
    CustomElement.UI
], Rightbar);
export default Rightbar;
customElements.define("ui-rightbar", Rightbar);
