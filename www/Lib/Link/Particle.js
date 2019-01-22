export default class Particle {
    constructor(Root) {
        this.Root = Root;
        const C = this.constructor;
        for (const Key in C.Getters)
            this.Root.SetGetters(this, Key, C.Getters[Key]);
        for (const Key in C.Setters)
            this.Root.SetSetters(this, Key, C.Setters[Key]);
    }
    static Register(Target) {
        if (!Target.constructor.Particles[this.name])
            Target.constructor.Particles[this.name] = this;
    }
    static Getter(Key, Fn) {
        if (!this.hasOwnProperty("Getters"))
            this.Getters = {};
        if (!this.Getters[Key])
            this.Getters[Key] = [];
        this.Getters[Key].push(Fn);
    }
    static Setter(Key, Fn) {
        if (!this.hasOwnProperty("Setters"))
            this.Setters = {};
        if (!this.Setters[Key])
            this.Setters[Key] = [];
        this.Setters[Key].push(Fn);
    }
}
