import Particle from "/Lib/Link/Particle.js";
export default class Attribute extends Particle {
    constructor() {
        super(...arguments);
        this.Property = {};
    }
    static Prop(Target, Key) {
        Attribute.Register(Target);
        Attribute.Getter(Key, function () {
            return this.Property[Key];
        });
        Attribute.Setter(Key, function (Value) {
            if (!this.Property[Key] || Value !== this.Property[Key]) {
                this.Property[Key] = Value;
                this.Root.ReRender();
            }
        });
    }
    static Bool(Target, Key) {
        Attribute.Register(Target);
        Attribute.Getter(Key, function () {
            return this.Property[Key];
        });
        Attribute.Setter(Key, function (Value) {
            if (!this.Property[Key] || Value !== this.Property[Key]) {
                this.Property[Key] = Value;
                if (Value)
                    this.Root.setAttribute(Key, "");
                else
                    this.Root.removeAttribute(Key);
            }
        });
    }
    static DOM(Target, Key) {
        Attribute.Register(Target);
        Attribute.Getter(Key, function () {
            return this.Property[Key];
        });
        Attribute.Setter(Key, function (Value) {
            if (!this.Property[Key] || Value !== this.Property[Key]) {
                this.Property[Key] = Value;
                this.Root.setAttribute(Key, Value);
            }
        });
    }
}
