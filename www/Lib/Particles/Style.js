import Particle from "/Lib/Link/Particle.js";
const LineThrough = (Text) => Text.replace(/([A-Z])/g, (A, B, C, D) => {
    const F = A[0].toLowerCase();
    if (C)
        return `-${F}`;
    else
        return F;
});
function StyleVar(Target, Key, Unit) {
    Style.Register(Target);
    Style.Getter(Key, function () {
        return this.Vars[Key];
    });
    Style.Setter(Key, function (Value) {
        if (!this.Vars[Key] || Value !== this.Vars[Key]) {
            this.Vars[Key] = Value;
            this.Root.style.setProperty("--" + LineThrough(Key), Unit ? Value + Unit : Value);
        }
    });
}
export default class Style extends Particle {
    constructor() {
        super(...arguments);
        this.Vars = {};
    }
}
Style.Var = new Proxy(StyleVar, {
    get(Target, Unit) {
        if (Unit === "perc")
            Unit = "%";
        return (Target, Key) => StyleVar(Target, Key, Unit);
    }
});
