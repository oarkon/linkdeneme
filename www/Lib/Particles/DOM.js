import Particle from "/Lib/Link/Particle.js";
export default class DOM extends Particle {
    static QuerySelector(Selector, global = false) {
        return function (Target, Key) {
            DOM.Register(Target);
            DOM.Getter(Key, function () {
                return (global ? document : this.Root).querySelector(Selector);
            });
        };
    }
    static Event(EventN) {
        return function (Target, Key) {
            DOM.Register(Target);
            if (!Target.hasOwnProperty("$Events"))
                Target.$Events = [];
            Target.$Events.push([EventN, Target[Key]]);
        };
    }
    static Connected(El) {
        if ("$Events" in El)
            for (const Ev of El.$Events) {
                El.addEventListener(Ev[0], Ev[1]);
            }
    }
    static Disconnected(El) {
        if ("$Events" in El)
            for (const Ev of El.$Events) {
                El.removeEventListener(Ev[0], Ev[1]);
            }
    }
}
