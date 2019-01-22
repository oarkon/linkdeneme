import LinkElement, { CustomElement } from "Link/Element";
import { html, css } from "Link/Template";
import Style from "Particles/Style";
import Sidebar from "Components/Sidebar";
import DOM from "Particles/DOM";



@CustomElement.UI
export default class Navbar extends LinkElement {
  @Style.Var BgColor = '#DF12DD';


  Template = () => html`
    <logo-logo />
    <ui-sitename />
    <ui-logbar />
  `;

  static Style = css`
    display:flex;
    width:100%;
    height:50px;
    background-color:var(--bg-color);
    justify-content:space-around;
  `;
}

@CustomElement.Logo
class Logo extends LinkElement {
  static Style = css`
    display:flex;
    position:relative;

    img{
      width:45px;
      height:50px;
    }
  `;

  Template = () => html`
    <img src="https://picsum.photos/200/200" />
  `;
}

@CustomElement.UI
class Sitename extends LinkElement {
  static Style = css`
    width:100px;
    height:45px;
    font-family:monospace;
    font-size:30px;
    padding-top:7.5px;
  `;

  Template = () => html`
    Selamlar!
  `;
}



@CustomElement.UI
class Logbar extends LinkElement {
  static Style = css`
    margin-top:12.5px;
  `;

  @DOM.QuerySelector("sidebar-sidebar", true) a: Sidebar;

  Open() {
    this.a.Open();
  }

  Template = () => html`
    <a href="#">Login</a>
    <button @click=${this.Open}>TIKLA!</button>
    
  `;
}