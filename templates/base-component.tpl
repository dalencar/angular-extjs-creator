import {ComponentFactory, ComponentFactoryResolver, EventEmitter, Type} from '@angular/core';

declare var Ext: any;

export class ${classNameBase} {
    public extjsObject: any;
    private rootElement: any;
    private listeners = {};
    private xtype: string;
    private inputs: any;
    [key: string]: any;

    constructor(
        private myElement: any,
        private componentFactoryResolver: ComponentFactoryResolver,
        private metaData: any
    ) {
        this.xtype = metaData.XTYPE;
        this.inputs = metaData.INPUTNAMES;
        this.rootElement = myElement.nativeElement;
        this['ready'] = new EventEmitter();
        metaData.OUTPUTS.forEach((event: any, n: any) => {
            (<any>this)[event.name] = new EventEmitter();
        });
    }

    AfterContentInit(ExtJSBaseRef: QueryList<XngBaseComponent>) {
        const extJSRootComponentRef: ${classNameBase} = ExtJSBaseRef.first;
        const firstExtJS = extJSRootComponentRef.extjsObject;
        firstExtJS.setRenderTo(this.myElement.nativeElement);
        const ExtJSComponentRefArray: any = ExtJSBaseRef.toArray();
        const arrayLength = ExtJSComponentRefArray.length;
        for (let i = 1; i < arrayLength; i++) {
            const obj = ExtJSComponentRefArray[i].extjsObject;
            if (obj.config.docked != null) {
                firstExtJS.insert(0, obj);
            } else {
                firstExtJS.add(obj);
            }
        }
    }

    OnInit(dynamicTarget: ViewContainerRef) {
        const me: any = this;
        const o: any = {};
        let eventtasks: any[] = [];

        o.listeners = {};

        const EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\\w+)(true|false)$/;
        const properties = Object.keys(this.myElement.nativeElement);
        for (const name in properties) {
            if (EVENT_NAME_SYMBOL_REGX.test(properties[name])) {
                eventtasks = eventtasks.concat(this.myElement.nativeElement[properties[name]]);
            }
        }

        eventtasks.forEach(function (eventtask, index, array) {
            const eventIndex = this.metadata.OUTPUTNAMES.indexOf(eventtask.eventName);
            if (eventIndex !== -1) {
                const eventname = eventtask.eventName;
                const parms = this.metadata.OUTPUTS[eventIndex].parameters;
                o.listeners[eventname] = function () {
                    const args = Array.prototype.slice.call(arguments);
                    const nextObj: any = {};
                    for (let i = 0; i < parms.length; i++) {
                        nextObj[parms[i]] = args[i];
                    }
                    me[eventname].next(nextObj);
                };
            }
        });

        o.xtype = me.xtype;
        if (me.xtype !== '') {
            o.xtype = me.xtype;
        }
        for (let i = 0; i < me.metaData.INPUTNAMES.length; i++) {
            const prop = me.metaData.INPUTNAMES[i];
            // need to handle listeners coming in here
            if (me[prop] !== undefined &&
            prop !== 'listeners' &&
            prop !== 'config' &&
            prop !== 'fitToParent') {
                o[prop] = me[prop];
            }
        }
        if (me.fitToParent === 'true' || me.fitToParent === true) {
            o.top = 0;
            o.left = 0;
            o.width = '100%';
            o.height = '100%';
        }
        if (me.config !== {}) {
            Ext.apply(o, me.config);
        }
        me.extjsObject = Ext.create(o);
        me.ext = me.extjsObject;
        me.x = me.extjsObject;

        let componentFactory: ComponentFactory<any>;
        let type: Type<any>;

        if (me.component !== undefined) {
            type = me.component;
            componentFactory = me.componentFactoryResolver.resolveComponentFactory(type);
            me.componentRef = dynamicTarget.createComponent(componentFactory);
            // me.componentRef.instance['buttontext'] = 'testing';
            const node = me.extjsObject.innerElement.dom;
            node.appendChild(me.componentRef['_hostElement'].nativeElement);
        }
        if (me.parent !== undefined) {
            me.parent.insert(0, me.extjsObject);
        }
        me.ready.next(me);
    }
}
