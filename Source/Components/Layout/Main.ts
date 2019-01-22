import LinkElement, { CustomElement } from "Link/Element";
import { html, css } from "Link/Template";



@CustomElement.UI
export default class Main extends LinkElement {

  static Style = css`
    display:flex;
    justify-content:space-between;  
  `;

  Template = () => html`
    <ui-leftbar></ui-leftbar>
    <ui-content></ui-content>
    <ui-rightbar></ui-rightbar>
  `;
}