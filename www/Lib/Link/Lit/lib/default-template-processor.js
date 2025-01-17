import { AttributeCommitter, BooleanAttributePart, EventPart, NodePart, PropertyCommitter } from "./parts.js";
export class DefaultTemplateProcessor {
    handleAttributeExpressions(element, name, strings, options) {
        const prefix = name[0];
        if (prefix === '.') {
            const comitter = new PropertyCommitter(element, name.slice(1), strings);
            return comitter.parts;
        }
        if (prefix === '@') {
            return [new EventPart(element, name.slice(1), options.eventContext)];
        }
        if (prefix === '?') {
            return [new BooleanAttributePart(element, name.slice(1), strings)];
        }
        const comitter = new AttributeCommitter(element, name, strings);
        return comitter.parts;
    }
    handleTextExpression(options) {
        return new NodePart(options);
    }
}
export const defaultTemplateProcessor = new DefaultTemplateProcessor();
