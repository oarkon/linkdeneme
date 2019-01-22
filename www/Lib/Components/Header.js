var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import Reactive from "/Lib/Link/Reactive.js";
import { Block, css } from "/Lib/Link/Template.js";
import { html } from "/Lib/Link/Template.js";
import LinkElement, { CustomElement } from "/Lib/Link/Element.js";
import Style from "/Lib/Particles/Style.js";
import Attribute from "/Lib/Particles/Attribute.js";
import DOM from "/Lib/Particles/DOM.js";
let Head = class Head extends LinkElement {
    constructor() {
        super(...arguments);
        this.BgColor = '#DDD';
        this.Width = '300';
        this.Height = '450';
        this.Title = "Click IT!";
        this.Template = () => html `
    <ui-logo .HeadSlot="${this.Slot}" />
  `;
    }
};
Head.Style = css `ui-head{padding-left:0;display:block;width:100%;height:45px;background-color:var(--bg-color)}`;
Head.Tag = "ui-head";
__decorate([
    Style.Var,
    __metadata("design:type", Object)
], Head.prototype, "BgColor", void 0);
__decorate([
    Style.Var.px,
    __metadata("design:type", Object)
], Head.prototype, "Width", void 0);
__decorate([
    Style.Var.px,
    __metadata("design:type", Object)
], Head.prototype, "Height", void 0);
__decorate([
    Attribute.DOM,
    __metadata("design:type", Object)
], Head.prototype, "Title", void 0);
Head = __decorate([
    CustomElement.UI
], Head);
export default Head;
customElements.define("ui-head", Head);
let Image = class Image extends Block {
    constructor(Id) {
        super();
        if (Id)
            this.Id = Id;
    }
    async Load() {
        this.Template = html `<img src="https://picsum.photos/200/${this.Id}" />`;
    }
};
__decorate([
    Reactive.Prop, Reactive.Callback("Load"),
    __metadata("design:type", Number)
], Image.prototype, "Id", void 0);
Image = __decorate([
    Reactive.Block,
    __metadata("design:paramtypes", [Object])
], Image);
let Logo = class Logo extends LinkElement {
    constructor() {
        super(...arguments);
        this.Image = new Image(2);
        this.Template = () => html `
    ${this.Image}
    <input id="No" @keypress=${this.Send} placeholder="Numara">
    <button @click=${this.Send}>Send</button>
    ${this.HeadSlot}
  `;
    }
    Send(e) {
        if (!this.No.value.trim())
            return;
        if (e.which == 13) {
            console.dir(this.No.value);
            this.HeadSlot[0].textContent = this.No.value;
        }
    }
};
Logo.Style = css `ui-logo{display:flex;position:relative}ui-logo img{width:55px;height:45px;margin:auto}`;
Logo.Tag = "ui-logo";
__decorate([
    DOM.QuerySelector("#No"),
    __metadata("design:type", HTMLInputElement)
], Logo.prototype, "No", void 0);
Logo = __decorate([
    CustomElement.UI
], Logo);
customElements.define("ui-logo", Logo);
