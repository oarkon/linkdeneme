import { Part } from './part.js';
import { RenderOptions } from './render-options.js';
export declare const isPrimitive: (value: any) => boolean;
export declare class AttributeCommitter {
    element: Element;
    name: string;
    strings: string[];
    parts: AttributePart[];
    dirty: boolean;
    constructor(element: Element, name: string, strings: string[]);
    protected _createPart(): AttributePart;
    protected _getValue(): any;
    commit(): void;
}
export declare class AttributePart implements Part {
    committer: AttributeCommitter;
    value: any;
    constructor(comitter: AttributeCommitter);
    setValue(value: any): void;
    commit(): void;
}
export declare class NodePart implements Part {
    options: RenderOptions;
    startNode: Node;
    endNode: Node;
    value: any;
    _pendingValue: any;
    constructor(options: RenderOptions);
    appendInto(container: Node): void;
    insertAfterNode(ref: Node): void;
    appendIntoPart(part: NodePart): void;
    insertAfterPart(ref: NodePart): void;
    setValue(value: any): void;
    commit(): void;
    private _insert;
    private _commitNode;
    private _commitText;
    private _commitTemplateResult;
    private _commitIterable;
    clear(startNode?: Node): void;
}
export declare class BooleanAttributePart implements Part {
    element: Element;
    name: string;
    strings: string[];
    value: any;
    _pendingValue: any;
    constructor(element: Element, name: string, strings: string[]);
    setValue(value: any): void;
    commit(): void;
}
export declare class PropertyCommitter extends AttributeCommitter {
    single: boolean;
    constructor(element: Element, name: string, strings: string[]);
    protected _createPart(): PropertyPart;
    _getValue(): any;
    commit(): void;
}
export declare class PropertyPart extends AttributePart {
}
export declare class EventPart implements Part {
    element: Element;
    eventName: string;
    eventContext?: EventTarget;
    value: any;
    _options?: AddEventListenerOptions;
    _pendingValue: any;
    _boundHandleEvent: (event: Event) => void;
    constructor(element: Element, eventName: string, eventContext?: EventTarget);
    setValue(value: any): void;
    commit(): void;
    handleEvent(event: Event): void;
}
