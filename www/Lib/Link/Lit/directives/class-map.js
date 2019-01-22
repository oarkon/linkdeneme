import { AttributePart, directive, PropertyPart } from "../lit-html.js";
if (window.navigator.userAgent.match('Trident')) {
    DOMTokenList.prototype.toggle = function (token, force) {
        if (force === undefined || force) {
            this.add(token);
        }
        else {
            this.remove(token);
        }
        return force === undefined ? true : force;
    };
}
const classMapCache = new WeakMap();
const classMapStatics = new WeakMap();
export const classMap = directive((classInfo) => (part) => {
    if (!(part instanceof AttributePart) || (part instanceof PropertyPart) ||
        part.committer.name !== 'class' || part.committer.parts.length > 1) {
        throw new Error('The `classMap` directive must be used in the `class` attribute ' +
            'and must be the only part in the attribute.');
    }
    if (!classMapStatics.has(part)) {
        part.committer.element.className = part.committer.strings.join(' ');
        classMapStatics.set(part, true);
    }
    const oldInfo = classMapCache.get(part);
    for (const name in oldInfo) {
        if (!(name in classInfo)) {
            part.committer.element.classList.remove(name);
        }
    }
    for (const name in classInfo) {
        if (!oldInfo || (oldInfo[name] !== classInfo[name])) {
            part.committer.element.classList.toggle(name, Boolean(classInfo[name]));
        }
    }
    classMapCache.set(part, classInfo);
});
