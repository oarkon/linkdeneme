import { TemplateResult, NodePart, DefaultTemplateProcessor, noChange } from "/Lib/Link/Lit/lit-html.js";
export class Block {
    constructor(_Value) {
        this._Value = _Value;
        this.Parts = [];
    }
    get Template() {
        return this._Value;
    }
    set Template(Val) {
        if (this._Value === Val)
            return;
        this._Value = Val;
        this.Parts.forEach(Part => {
            Part.setValue(this._Value);
            Part.commit();
        });
    }
    $Assign(Part) {
        this.Parts.push(Part);
        Part.setValue(this._Value);
        Part.commit();
    }
}
class LinkNodePart extends NodePart {
    commit() {
        const V = this._pendingValue;
        if (V instanceof Block) {
            V.$Assign(this);
            this._pendingValue = noChange;
        }
        super.commit();
    }
    _commitIterable(value) {
        if (!Array.isArray(this.value)) {
            this.value = [];
            this.clear();
        }
        const itemParts = this.value;
        let partIndex = 0;
        let itemPart;
        for (const item of value) {
            itemPart = itemParts[partIndex];
            if (itemPart === undefined) {
                itemPart = new LinkNodePart(this.options);
                itemParts.push(itemPart);
                if (partIndex === 0) {
                    itemPart.appendIntoPart(this);
                }
                else {
                    itemPart.insertAfterPart(itemParts[partIndex - 1]);
                }
            }
            itemPart.setValue(item);
            itemPart.commit();
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            itemParts.length = partIndex;
            this.clear(itemPart && itemPart.endNode);
        }
    }
}
class LinkProcessor extends DefaultTemplateProcessor {
    handleTextExpression(Options) {
        return new LinkNodePart(Options);
    }
}
const DefaultLinkProcessor = new LinkProcessor();
export class LinkTemplate extends TemplateResult {
    constructor(strings, values) {
        super(strings, values, "html", DefaultLinkProcessor);
    }
    getHTML() {
        const SelfClosing = super.getHTML().split("/>");
        for (let i = 0; i < SelfClosing.length - 1; i++) {
            const x = SelfClosing[i];
            let SignIndex = x.lastIndexOf("<");
            let IsSignValid = false;
            while (!IsSignValid) {
                const signature = x.substr(SignIndex + 1);
                const QMatch = signature.match(/"/g);
                if (QMatch) {
                    if (QMatch.length % 2 === 0) {
                        IsSignValid = true;
                    }
                    else {
                        SignIndex = x.substr(SignIndex).lastIndexOf("<");
                    }
                }
                else {
                    IsSignValid = true;
                }
            }
            const TagMatch = x.substr(SignIndex + 1).match(/[\w-]+/);
            if (TagMatch) {
                SelfClosing[i] = `${x}></${TagMatch[0]}>`;
            }
        }
        return SelfClosing.join("");
    }
}
export const html = (strings, ...values) => new LinkTemplate(strings, values);
export const css = (strings, ...values) => new TemplateResult(strings, values, "html", DefaultLinkProcessor);
