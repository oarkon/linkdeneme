import { directive, isPrimitive, NodePart } from "../lit-html.js";
const previousValues = new WeakMap();
export const unsafeHTML = directive((value) => (part) => {
    if (!(part instanceof NodePart)) {
        throw new Error('unsafeHTML can only be used in text bindings');
    }
    const previousValue = previousValues.get(part);
    if (previousValue === value && isPrimitive(value)) {
        return;
    }
    const tmp = document.createElement('template');
    tmp.innerHTML = value;
    part.setValue(document.importNode(tmp.content, true));
    previousValues.set(part, value);
});
