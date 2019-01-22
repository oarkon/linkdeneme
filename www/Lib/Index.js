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
import { css, html, Block } from "/Lib/Link/Template.js";
import Style from "/Lib/Particles/Style.js";
import Attribute from "/Lib/Particles/Attribute.js";
import Storage from "/Lib/Particles/Storage.js";
import Reactive from "/Lib/Link/Reactive.js";
import "/Lib/Components/Layout/Header.js";
import "/Lib/Components/Layout/Navbar.js";
import "/Lib/Components/Layout/Leftbar.js";
import "/Lib/Components/Layout/Rightbar.js";
import "/Lib/Components/Layout/Main.js";
import "/Lib/Components/Layout/Content.js";
import "/Lib/Components/Layout/Footer.js";
import "/Lib/Components/Sidebar.js";
let Profile = class Profile extends Block {
    constructor(Id) {
        super();
        if (Id)
            this.Id = Id;
    }
    async Load() {
        const Req = await fetch(`https://swapi.co/api/people/${this.Id}`);
        const JSON = await Req.json();
        this.Template = html `
      Name: ${JSON.name}
      Gender: ${JSON.gender}
    `;
    }
};
__decorate([
    Reactive.Prop, Reactive.Callback("Load"),
    __metadata("design:type", Number)
], Profile.prototype, "Id", void 0);
Profile = __decorate([
    Reactive.Block,
    __metadata("design:paramtypes", [Number])
], Profile);
class ClockBlock extends Block {
    constructor() {
        super(...arguments);
        this.Interval = setInterval(() => {
            const DateI = new Date();
            this.Template = html `<div>${DateI.toLocaleString()}</div>`;
        }, 1000);
    }
}
const BaseClock = new ClockBlock();
let Clock = class Clock extends LinkElement {
    constructor() {
        super(...arguments);
        this.Clocks = new Array(2).fill(BaseClock);
        this.Template = () => html `${this.Clocks}`;
    }
};
Clock.Tag = "ui-clock";
Clock = __decorate([
    CustomElement.UI
], Clock);
export { Clock };
customElements.define("ui-clock", Clock);
let Test = class Test extends LinkElement {
    constructor() {
        super(...arguments);
        this.BgColor = "#DDD";
        this.Width = 104;
        this.Text = "123";
        this.ReadOnly = true;
        this.Title = "Click Me!";
        this.Block = new Profile(1);
        this.Template = () => html `
    Initial ${this.Slot}
    <button @click="${this.Test}">test</button>
    <ui-clock />
    ${this.Block}
  `;
    }
    Test() {
        this.Text = Math.random().toString().substring(2);
    }
};
Test.Style = css `ui-test{display:block;background-color:var(--bg-color)}ui-test:hover{width:var(--width)}`;
Test.Tag = "ui-test";
__decorate([
    Style.Var,
    __metadata("design:type", Object)
], Test.prototype, "BgColor", void 0);
__decorate([
    Style.Var.perc,
    __metadata("design:type", Object)
], Test.prototype, "Width", void 0);
__decorate([
    Attribute.Prop,
    __metadata("design:type", Object)
], Test.prototype, "Text", void 0);
__decorate([
    Attribute.Bool,
    __metadata("design:type", Object)
], Test.prototype, "ReadOnly", void 0);
__decorate([
    Attribute.DOM,
    __metadata("design:type", Object)
], Test.prototype, "Title", void 0);
__decorate([
    Storage.Global("Test"),
    __metadata("design:type", String)
], Test.prototype, "TestObj", void 0);
Test = __decorate([
    CustomElement.UI
], Test);
export { Test };
customElements.define("ui-test", Test);
