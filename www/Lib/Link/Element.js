import { render } from "/Lib/Link/Lit/lit-html.js";
import { html } from "./Template.js";
import { repeat } from "./Lit/directives/repeat.js";
export const CustomElement = new Proxy({}, {
    get(Target, Key) {
        return function (Ctor) {
            if ("Style" in Ctor) {
                Stylist.Register(Ctor.Tag, Ctor.Style);
            }
        };
    }
});
const NextCycle = (Fn) => setTimeout(Fn, 0);
const GlobalStyle = document.createElement("style");
document.head.appendChild(GlobalStyle);
export class Stylist {
    static Register(Key, Value) {
        this.Store[Key] = Value;
        const T = html `
      ${repeat(Object.entries(this.Store), K => K[0], K => K[1])}
    `;
        for (const Client of this.Clients)
            render(T, Client);
    }
    static RegisterClient(Component) {
        this.Clients.push(Component);
    }
}
Stylist.Store = {};
Stylist.Clients = [GlobalStyle];
export default class LinkElement extends HTMLElement {
    constructor() {
        super();
        this.Root = this;
        this.Slot = undefined;
        this.Particles = {};
        this.Stage = 0;
        this.Getters = {};
        this.Setters = {};
        const ParticlePrototypes = this.constructor
            .Particles;
        for (const PP in ParticlePrototypes)
            this.Particles[PP] = new ParticlePrototypes[PP](this);
        NextCycle(() => this.$Constr());
    }
    DefineProp(Key, Context) {
        if (!(Key in this.Getters)) {
            this.Getters[Key] = [];
            this.Setters[Key] = [];
            Object.defineProperty(this, Key, {
                get() {
                    return this.Getters[Key].reduce((y, x) => x.call(Context, y), undefined);
                },
                set(Value) {
                    return this.Setters[Key].reduce((y, x) => x.call(Context, Value, y), undefined);
                }
            });
        }
    }
    SetGetter(Context, Key, Fn) {
        this.DefineProp(Key, Context);
        this.Getters[Key].push(Fn);
    }
    SetSetter(Context, Key, Fn) {
        this.DefineProp(Key, Context);
        this.Setters[Key].push(Fn);
    }
    SetGetters(Context, Key, Fns) {
        this.DefineProp(Key, Context);
        this.Getters[Key] = this.Getters[Key].concat(Fns);
    }
    SetSetters(Context, Key, Fns) {
        this.DefineProp(Key, Context);
        this.Setters[Key] = this.Setters[Key].concat(Fns);
    }
    Render(Template) {
        render(Template, this.Root, { eventContext: this });
        if (this.Rendered) {
            this.CalcParticle("Rendered");
            this.Rendered();
        }
    }
    ReRender() {
        if (this.Template)
            this.Render(this.Template());
    }
    CalcParticle(Stage) {
        for (const K in this.Particles) {
            const Fn = this.Particles[K].constructor[Stage];
            if (Fn)
                Fn(this);
        }
    }
    connectedCallback() {
        if (!this.Slot)
            this.Slot = Array.from(this.childNodes);
        this.Stage = 1;
        this.CalcParticle("Connected");
        this.RequestCycle("Connected");
    }
    disconnectedCallback() {
        this.Stage = 0;
        this.CalcParticle("Disconnected");
    }
    RequestCycle(Reason) {
        if (this.Stage === 1)
            NextCycle(() => this.$Cycle());
    }
    async $Constr() {
        this.CalcParticle("Constr");
        if (this.Constr)
            await this.Constr();
    }
    async $Cycle() {
        if (this.Stage !== 1)
            return;
        this.Stage = 2;
        this.CalcParticle("Update");
        if (this.Update)
            await this.Update();
        this.ReRender();
        this.Stage = 1;
    }
}
LinkElement.Particles = {};
export class LinkComponent extends LinkElement {
}
