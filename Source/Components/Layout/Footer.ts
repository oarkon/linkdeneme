import LinkElement, { CustomElement } from "Link/Element";
import { css, html } from "Link/Template";


@CustomElement.UI
export default class Footer extends LinkElement {

  Template = () => html`asdas`;

  static Style = css`
  display:flex;
  position:relative;
  width: 100%;
  height: 45px;
  `;
}