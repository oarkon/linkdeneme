import Reactive from "Link/Reactive";
import { Block, css } from 'Link/Template';
import { html } from 'Link/Template';
import LinkElement, { CustomElement } from "Link/Element";
import Style from "Particles/Style";
import Attribute from "Particles/Attribute";
import DOM from "Particles/DOM";


@CustomElement.UI
export default class Head extends LinkElement {

  @Style.Var BgColor = '#DDD';
  @Style.Var.px Width = '300';
  @Style.Var.px Height = '450';
  @Attribute.DOM Title = "Click IT!";


  Template = () => html`
    <ui-logo .HeadSlot="${this.Slot}" />
  `;

  static Style = css` 
  padding-left:0px;
  display: block;
  width: 100%;
  height: 45px;
  background-color: var(--bg-color);

  
  `;

}

@Reactive.Block
class Image extends Block {

  @Reactive.Prop @Reactive.Callback("Load") Id: number;

  constructor(Id?: any) {
    super();
    if (Id) this.Id = Id;
  }

  async Load() {
    this.Template = html`<img src="https://picsum.photos/200/${this.Id}" />`;
  }
}

//Image'e tiklandiginda artik logo o image'in url ine sahip olucak!

@CustomElement.UI
class Logo extends LinkElement {

  HeadSlot: Node[];

  static Style = css`
  display: flex;
  position:relative;

  img{
    width:55px;
    height:45px;
    margin:auto;
  }  
  `;

  Image = new Image(2);
  @DOM.QuerySelector("#No") No: HTMLInputElement;

  Send(e: KeyboardEvent) {
    if (!this.No.value.trim()) return;
    if (e.which == 13) {
      console.dir(this.No.value);
      this.HeadSlot[0].textContent = this.No.value;
    }
  }

  // @DOM.Event("click")
  // Send2() {
  //   console.log("a")
  // }

  // Input yapcam Input un value sini slot a dusurcem slotada dusende logo olmus olcak..
  Template = () => html`
    ${this.Image}
    <input id="No" @keypress=${this.Send} placeholder="Numara">
    <button @click=${this.Send}>Send</button>
    ${this.HeadSlot}
  `;
}