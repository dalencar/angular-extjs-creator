declare var Ext: any;

export class ${className} {
    public className: any;
    public extend: any;
    public defineConfig: any;
    public createConfig: any;
    public extjsObject: any;
    public ext: any;
    public x: any;

    constructor (className: any, extend: string, defineConfig: any, createConfig: any) {
        if (!Ext.ClassManager.isCreated(className)) {
            Ext.apply(defineConfig, { extend: extend });
            Ext.define(className, defineConfig);
        }
        this.className = className;
        this.extend = extend;
        this.defineConfig = defineConfig;
        this.createConfig = createConfig;
        this.extjsObject = Ext.create(className, createConfig);
        this.ext = this.extjsObject;
        this.x = this.extjsObject;
    }
}