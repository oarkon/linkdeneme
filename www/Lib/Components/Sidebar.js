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
import Attribute from "/Lib/Particles/Attribute.js";
let Sidebar = class Sidebar extends LinkElement {
    constructor() {
        super();
        this.Side = 0;
        this.id = "Sidebar";
        this.isOpen = false;
        this.BgColor = "#42f49e";
        this.Display = this.isOpen ? "flex" : "none";
        this.side = document.getElementById("Sidebar");
        this.Template = () => html `
  <button style="width:30px;height:45px;" @click=${this.Close}>hahaha</button>
  ${this.Side}
  <a href="#">asdsad</a>`;
    }
    Open() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            const SetClick = () => setTimeout(() => {
                window.addEventListener("click", (e) => {
                    console.log("yes");
                    let target = e.target || e.srcElement;
                    if (target != this && target.parentNode != this)
                        this.Close();
                    else
                        SetClick();
                }, { once: true });
            }, 0);
            SetClick();
        }
        this.side.style.display = "flex";
    }
    Close() {
        this.Open;
        this.side.style.display = "none";
    }
};
Sidebar.Style = css `sidebar-sidebar{display:var(--display);position:fixed;right:0;z-index:1;justify-content:flex-end;width:25%;height:100%;background-color:var(--bg-color)}sidebar-sidebar body,sidebar-sidebar html{height:100%}`;
Sidebar.Tag = "sidebar-sidebar";
__decorate([
    Attribute.DOM,
    __metadata("design:type", Object)
], Sidebar.prototype, "Side", void 0);
__decorate([
    Attribute.DOM,
    __metadata("design:type", Object)
], Sidebar.prototype, "id", void 0);
__decorate([
    Attribute.Bool,
    __metadata("design:type", Object)
], Sidebar.prototype, "isOpen", void 0);
__decorate([
    Style.Var,
    __metadata("design:type", Object)
], Sidebar.prototype, "BgColor", void 0);
__decorate([
    Style.Var,
    __metadata("design:type", Object)
], Sidebar.prototype, "Display", void 0);
Sidebar = __decorate([
    CustomElement.Sidebar,
    __metadata("design:paramtypes", [])
], Sidebar);
export default Sidebar;
customElements.define("sidebar-sidebar", Sidebar);
;
