import Particle from "Link/Particle";
import LinkElement from "Link/Element";
export default class DOM extends Particle {
    static QuerySelector(Selector: string, global?: boolean): (Target: any, Key: string) => void;
    static Events: string[];
    static Event(EventN: string): (Target: any, Key: string) => void;
    static Connected(El: LinkElement & {
        $Events?: [string, Function];
    }): void;
    static Disconnected(El: LinkElement & {
        $Events?: [string, Function];
    }): void;
}
