import Particle from "Link/Particle";
declare function StyleVar(Target: any, Key: any, Unit?: string): void;
export default class Style extends Particle {
    Vars: {};
    static Var: typeof StyleVar & Record<string, typeof StyleVar>;
}
export {};
