import LinkElement from "Link/Element";
export default class Head extends LinkElement {
    BgColor: string;
    Width: string;
    Height: string;
    Title: string;
    Template: () => import("../Link/Template").LinkTemplate;
    static Style: any;
}
