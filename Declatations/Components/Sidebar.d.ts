import LinkElement from "Link/Element";
export declare const enum direction {
    left = 0,
    right = 1
}
export default class Sidebar extends LinkElement {
    constructor();
    Side: direction;
    id: string;
    isOpen: boolean;
    BgColor: string;
    Display: string;
    side: HTMLElement;
    Open(): void;
    Close(): void;
    static Style: any;
    Template: () => import("../Link/Template").LinkTemplate;
}
