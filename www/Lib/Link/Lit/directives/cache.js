import { TemplateInstance } from "../lib/template-instance.js";
import { directive, NodePart, reparentNodes, TemplateResult } from "../lit-html.js";
const templateCaches = new WeakMap();
export const cache = directive((value) => (part) => {
    if (!(part instanceof NodePart)) {
        throw new Error('cache can only be used in text bindings');
    }
    let templateCache = templateCaches.get(part);
    if (templateCache === undefined) {
        templateCache = new WeakMap();
        templateCaches.set(part, templateCache);
    }
    const previousValue = part.value;
    if (previousValue instanceof TemplateInstance) {
        if (value instanceof TemplateResult &&
            previousValue.template === part.options.templateFactory(value)) {
            part.setValue(value);
            return;
        }
        else {
            let cachedTemplate = templateCache.get(previousValue.template);
            if (cachedTemplate === undefined) {
                cachedTemplate = {
                    instance: previousValue,
                    nodes: document.createDocumentFragment(),
                };
                templateCache.set(previousValue.template, cachedTemplate);
            }
            reparentNodes(cachedTemplate.nodes, part.startNode.nextSibling, part.endNode);
        }
    }
    if (value instanceof TemplateResult) {
        const template = part.options.templateFactory(value);
        const cachedTemplate = templateCache.get(template);
        if (cachedTemplate !== undefined) {
            part.setValue(cachedTemplate.nodes);
            part.commit();
            part.value = cachedTemplate.instance;
        }
    }
    part.setValue(value);
});
