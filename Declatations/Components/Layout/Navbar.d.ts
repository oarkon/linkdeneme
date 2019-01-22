import LinkElement from "Link/Element";
export default class Navbar extends LinkElement {
    BgColor: string;
    Template: () => import("../../Link/Template").LinkTemplate;
    static Style: any;
}
