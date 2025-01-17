import { directive } from "../lit-html.js";
const previousValues = new WeakMap();
export const guard = directive((value, f) => (part) => {
    const previousValue = previousValues.get(part);
    if (Array.isArray(value)) {
        if (Array.isArray(previousValue) &&
            previousValue.length === value.length &&
            value.every((v, i) => v === previousValue[i])) {
            return;
        }
    }
    else if (previousValue === value &&
        (value !== undefined || previousValues.has(part))) {
        return;
    }
    part.setValue(f());
    previousValues.set(part, Array.isArray(value) ? Array.from(value) : value);
});
