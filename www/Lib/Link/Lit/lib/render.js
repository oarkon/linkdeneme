import { removeNodes } from "./dom.js";
import { NodePart } from "./parts.js";
import { templateFactory } from "./template-factory.js";
export const parts = new WeakMap();
export const render = (result, container, options) => {
    let part = parts.get(container);
    if (part === undefined) {
        removeNodes(container, container.firstChild);
        parts.set(container, part = new NodePart(Object.assign({ templateFactory }, options)));
        part.appendInto(container);
    }
    part.setValue(result);
    part.commit();
};
