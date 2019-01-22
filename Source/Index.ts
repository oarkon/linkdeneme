
import LinkElement, { CustomElement } from "Link/Element";
import { css, html, Block } from "Link/Template";
import Style from "Particles/Style";
import Attribute from "Particles/Attribute";
import Storage from "Particles/Storage";
import Reactive from "Link/Reactive";
import "Components/Layout/Header";
import "Components/Layout/Navbar";
import "Components/Layout/Leftbar";
import "Components/Layout/Rightbar";
import "Components/Layout/Main";
import "Components/Layout/Content";
import "Components/Layout/Footer";
import "Components/Sidebar";

@Reactive.Block
class Profile extends Block {

  @Reactive.Prop @Reactive.Callback("Load") Id: number;

  constructor(Id?: number) {
    super();
    if (Id) this.Id = Id;
  }

  async Load() {
    const Req = await fetch(`https://swapi.co/api/people/${this.Id}`);
    const JSON = await Req.json();
    this.Template = html`
      Name: ${JSON.name}
      Gender: ${JSON.gender}
    `;
  }
}

class ClockBlock extends Block {

  Interval = setInterval(() => {
    const DateI = new Date();
    this.Template = html`<div>${DateI.toLocaleString()}</div>`;
  }, 1000);

}

const BaseClock = new ClockBlock();

@CustomElement.UI
export class Clock extends LinkElement {
  Clocks = new Array(2).fill(BaseClock);

  Template = () => html`${this.Clocks}`;
}

@CustomElement.UI
export class Test extends LinkElement {

  @Style.Var BgColor = "#DDD";
  @Style.Var.perc Width = 104;
  @Attribute.Prop Text = "123";
  @Attribute.Bool ReadOnly = true;
  @Attribute.DOM Title = "Click Me!";

  @Storage.Global("Test") TestObj: string;

  Block = new Profile(1);

  Test() {
    this.Text = Math.random().toString().substring(2);
  }

  Template = () => html`
    Initial ${this.Slot}
    <button @click="${this.Test}">test</button>
    <ui-clock />
    ${this.Block}
  `;

  static Style = css`
    display: block;
    background-color: var(--bg-color);

    &:hover {
      width: var(--width);
    }
  `;
}
