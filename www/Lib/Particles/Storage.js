import Particle from "/Lib/Link/Particle.js";
export default class Storage extends Particle {
    static Global(Key) {
        return function (Target, Field) {
            Storage.Register(Target);
            Storage.Getter(Field, function () {
                return Storage.GlobalMap.get(Key);
            });
            Storage.Setter(Field, function (Value) {
                return Storage.GlobalMap.set(Key, Value);
            });
        };
    }
}
Storage.GlobalMap = new Map();
