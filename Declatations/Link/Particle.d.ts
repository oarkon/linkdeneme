import LinkElement from "./Element";
declare type ParticleModifier<T extends Particle = Particle> = (this: T, Inh?: any) => any;
export default class Particle {
    Root: LinkElement;
    static Getters: Record<string, Array<ParticleModifier>>;
    static Setters: Record<string, Array<ParticleModifier>>;
    static Register(Target: any): void;
    static Getter(Key: string, Fn: ParticleModifier): void;
    static Setter(Key: string, Fn: ParticleModifier): void;
    static Constr?(El: LinkElement): void;
    static Update?(El: LinkElement): void;
    static Connected?(El: LinkElement): void;
    static Disconnected?(El: LinkElement): void;
    static Rendered?(El: LinkElement): void;
    constructor(Root: LinkElement);
}
export {};
