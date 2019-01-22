import { AttributePart, directive, PropertyPart } from "../lit-html.js";
const styleMapCache = new WeakMap();
const styleMapStatics = new WeakMap();
export const styleMap = directive((styleInfo) => (part) => {
    if (!(part instanceof AttributePart) || (part instanceof PropertyPart) ||
        part.committer.name !== 'style' || part.committer.parts.length > 1) {
        throw new Error('The `styleMap` directive must be used in the style attribute ' +
            'and must be the only part in the attribute.');
    }
    if (!styleMapStatics.has(part)) {
        part.committer.element.style.cssText =
            part.committer.strings.join(' ');
        styleMapStatics.set(part, true);
    }
    const style = part.committer.element.style;
    const oldInfo = styleMapCache.get(part);
    for (const name in oldInfo) {
        if (!(name in styleInfo)) {
            if (name.indexOf('-') === -1) {
                style[name] = null;
            }
            else {
                style.removeProperty(name);
            }
        }
    }
    for (const name in styleInfo) {
        if (name.indexOf('-') === -1) {
            style[name] = styleInfo[name];
        }
        else {
            style.setProperty(name, styleInfo[name]);
        }
    }
    styleMapCache.set(part, styleInfo);
});
