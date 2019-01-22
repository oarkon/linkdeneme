import LinkElement, { CustomElement } from "Link/Element";
import { css, html } from "Link/Template";
import Style from "Particles/Style";


@CustomElement.UI
export default class Content extends LinkElement {
  @Style.Var BgColor = "#fff";
  @Style.Var.px Height = window.innerHeight - 50;

  Template = () => html`
  asd
  `;

  static Style = css`
    display: flex;
    position:relative;
    width:100%;
    height:var(--height);
    background-color:var(--bg-color);
  `;
}