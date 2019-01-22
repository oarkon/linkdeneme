import LinkElement from "Link/Element";
import { Block } from "Link/Template";
import "Components/Layout/Header";
import "Components/Layout/Navbar";
import "Components/Layout/Leftbar";
import "Components/Layout/Rightbar";
import "Components/Layout/Main";
import "Components/Layout/Content";
import "Components/Layout/Footer";
import "Components/Sidebar";
declare class Profile extends Block {
    Id: number;
    constructor(Id?: number);
    Load(): Promise<void>;
}
export declare class Clock extends LinkElement {
    Clocks: any[];
    Template: () => import("./Link/Template").LinkTemplate;
}
export declare class Test extends LinkElement {
    BgColor: string;
    Width: number;
    Text: string;
    ReadOnly: boolean;
    Title: string;
    TestObj: string;
    Block: Profile;
    Test(): void;
    Template: () => import("./Link/Template").LinkTemplate;
    static Style: any;
}
export {};
