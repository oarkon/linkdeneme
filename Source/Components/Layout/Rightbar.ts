import LinkElement, { CustomElement } from "Link/Element";
import Style from "Particles/Style";
import { html, css } from "Link/Template";


@CustomElement.UI
export default class Rightbar extends LinkElement {
  @Style.Var BgColor = "#DDD";
  @Style.Var.px Height = window.innerHeight - 50;

  static Style = css`
    display: flex;
    position:relative;
    
    width:25%;
    height:var(--height);
    background-color:var(--bg-color);
  `;

  Template = () => html`assaa`;
}