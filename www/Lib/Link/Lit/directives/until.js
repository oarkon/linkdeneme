import { isPrimitive } from "../lib/parts.js";
import { directive } from "../lit-html.js";
const _state = new WeakMap();
export const until = directive((...args) => (part) => {
    let state = _state.get(part);
    if (state === undefined) {
        state = {
            values: [],
        };
        _state.set(part, state);
    }
    const previousValues = state.values;
    let changedSinceLastRender = false;
    state.values = args;
    for (let i = 0; i < args.length; i++) {
        const value = args[i];
        if (value === previousValues[i] && !changedSinceLastRender) {
            continue;
        }
        changedSinceLastRender = true;
        if (isPrimitive(value) || typeof value.then !== 'function') {
            part.setValue(value);
            state.lastRenderedIndex = i;
            break;
        }
        state.lastRenderedIndex = undefined;
        Promise.resolve(value).then((resolvedValue) => {
            const index = state.values.indexOf(value);
            if (index > -1 &&
                (state.lastRenderedIndex === undefined ||
                    index < state.lastRenderedIndex)) {
                state.lastRenderedIndex = index;
                part.setValue(resolvedValue);
                part.commit();
            }
        });
    }
});
