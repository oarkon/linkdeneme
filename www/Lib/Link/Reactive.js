export default class Reactive {
    static Block(Ctor) {
        return class ReactiveClass extends Ctor {
            constructor(...args) {
                super(...args);
                if (this.$ReactiveProps)
                    for (const Key of this.$ReactiveProps) {
                        if (!this.hasOwnProperty("$Props"))
                            this.$Props = {};
                        if (!(Key in this.$Props)) {
                            this.$Props[Key] = this[Key];
                            Object.defineProperty(this, Key, {
                                get() {
                                    return this.$Props[Key];
                                },
                                set(Value) {
                                    if (this.$Props[Key] !== Value) {
                                        this.$Props[Key] = Value;
                                        if (Key in this.$ReactiveCallbacks) {
                                            this.$ReactiveCallbacks[Key].forEach(x => x.call(this, Value, this));
                                        }
                                    }
                                }
                            });
                            if (this.$ReactiveCallbacks && Key in this.$ReactiveCallbacks) {
                                this.$ReactiveCallbacks[Key].forEach(x => x.call(this, this.$Props[Key], this));
                            }
                        }
                    }
            }
        };
    }
    static Prop(Target, Key, PD) {
        if (!Target.hasOwnProperty("$ReactiveProps"))
            Target.$ReactiveProps = [];
        Target.$ReactiveProps.push(Key);
    }
    static Callback(Fn) {
        return function (Target, Key, PD) {
            if (!Target.hasOwnProperty("$ReactiveCallbacks"))
                Target.$ReactiveCallbacks = {};
            if (!Target.$ReactiveCallbacks[Key])
                Target.$ReactiveCallbacks[Key] = [];
            Fn = Fn.constructor === String ? Target[Fn] : Fn;
            if (Fn)
                Target.$ReactiveCallbacks[Key].push(Fn);
        };
    }
}
