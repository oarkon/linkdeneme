const directives = new WeakMap();
export const directive = (f) => ((...args) => {
    const d = f(...args);
    directives.set(d, true);
    return d;
});
export const isDirective = (o) => typeof o === 'function' && directives.has(o);
