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
import { html, css } from "/Lib/Link/Template.js";
import Style from "/Lib/Particles/Style.js";
import Sidebar from "/Lib/Components/Sidebar.js";
import DOM from "/Lib/Particles/DOM.js";
let Navbar = class Navbar extends LinkElement {
    constructor() {
        super(...arguments);
        this.BgColor = '#DF12DD';
        this.Template = () => html `
    <logo-logo />
    <ui-sitename />
    <ui-logbar />
  `;
    }
};
Navbar.Style = css `ui-navbar{display:flex;width:100%;height:50px;background-color:var(--bg-color);justify-content:space-around}`;
Navbar.Tag = "ui-navbar";
__decorate([
    Style.Var,
    __metadata("design:type", Object)
], Navbar.prototype, "BgColor", void 0);
Navbar = __decorate([
    CustomElement.UI
], Navbar);
export default Navbar;
customElements.define("ui-navbar", Navbar);
let Logo = class Logo extends LinkElement {
    constructor() {
        super(...arguments);
        this.Template = () => html `
    <img src="https://picsum.photos/200/200" />
  `;
    }
};
Logo.Style = css `logo-logo{display:flex;position:relative}logo-logo img{width:45px;height:50px}`;
Logo.Tag = "logo-logo";
Logo = __decorate([
    CustomElement.Logo
], Logo);
customElements.define("logo-logo", Logo);
let Sitename = class Sitename extends LinkElement {
    constructor() {
        super(...arguments);
        this.Template = () => html `
    Selamlar!
  `;
    }
};
Sitename.Style = css `ui-sitename{width:100px;height:45px;font-family:monospace;font-size:30px;padding-top:7.5px}`;
Sitename.Tag = "ui-sitename";
Sitename = __decorate([
    CustomElement.UI
], Sitename);
customElements.define("ui-sitename", Sitename);
let Logbar = class Logbar extends LinkElement {
    constructor() {
        super(...arguments);
        this.Template = () => html `
    <a href="#">Login</a>
    <button @click=${this.Open}>TIKLA!</button>
    
  `;
    }
    Open() {
        this.a.Open();
    }
};
Logbar.Style = css `ui-logbar{margin-top:12.5px}`;
Logbar.Tag = "ui-logbar";
__decorate([
    DOM.QuerySelector("sidebar-sidebar", true),
    __metadata("design:type", Sidebar)
], Logbar.prototype, "a", void 0);
Logbar = __decorate([
    CustomElement.UI
], Logbar);
customElements.define("ui-logbar", Logbar);
