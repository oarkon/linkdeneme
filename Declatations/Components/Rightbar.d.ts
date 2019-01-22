import LinkElement from "Link/Element";
export default class Rightbar extends LinkElement {
    BgColor: string;
    Height: number;
    static Style: any;
    Template: () => import("../Link/Template").LinkTemplate;
}
