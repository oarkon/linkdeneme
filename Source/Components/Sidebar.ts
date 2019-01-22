import LinkElement, { CustomElement } from "Link/Element";
import { html, css } from "Link/Template";
import Style from "Particles/Style";
import Attribute from "Particles/Attribute";
import DOM from "Particles/DOM";

export const enum direction {
  left = 0,
  right = 1
}

@CustomElement.Sidebar
export default class Sidebar extends LinkElement {

  constructor() {
    super();
  }



  @Attribute.DOM Side = direction.left;
  @Attribute.DOM id = "Sidebar";
  @Attribute.Bool isOpen = false;
  @Style.Var BgColor = "#42f49e";
  @Style.Var Display = this.isOpen ? "flex" : "none";

  //Open SideBar!!
  side = document.getElementById("Sidebar");

  Open() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      const SetClick = () => setTimeout(() => {
        window.addEventListener("click", (e: MouseEvent) => {
          console.log("yes");
          let target = e.target || e.srcElement;
          if (target != this && target.parentNode != this) this.Close();
          else SetClick();
        }, { once: true })
      }, 0);
      SetClick();
    }
    this.side.style.display = "flex";

  }

  Close() {
    this.Open;
    this.side.style.display = "none";
  }

  static Style = css`

  html{
    height:100%;
  }
  body{
    height:100%;
  }

  display: var(--display);
  position:fixed;
  right:0;
  z-index:1;
  justify-content:flex-end;
  width:25%;
  height:100%;
  background-color:var(--bg-color);
  `;

  Template = () => html`
  <button style="width:30px;height:45px;" @click=${this.Close}>hahaha</button>
  ${this.Side}
  <a href="#">asdsad</a>`;

};