import LinkElement from "Link/Element";
export default class Content extends LinkElement {
    BgColor: string;
    Height: number;
    Template: () => import("../../Link/Template").LinkTemplate;
    static Style: any;
}
