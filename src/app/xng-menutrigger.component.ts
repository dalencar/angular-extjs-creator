import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.field.trigger.Menu
 */
export class XngMenutriggerComponentMetaData {
    public static XTYPES: string[] = [
        'menutrigger'
    ];
    public static INPUTNAMES: string[] = [
        'alwaysOnTop',
        'constrainAlign',
        'destroyMenu',
        'field',
        'flex',
        'floated',
        'focusOnTap',
        'group',
        'handler',
        'iconCls',
        'id',
        'itemId',
        'menu',
        'menuAlign',
        'name',
        'relative',
        'repeat',
        'scope',
        'selfAlign',
        'shadow',
        'shim',
        'side',
        'toFrontOnShow',
        'translatable',
        'triggers',
        'x',
        'y',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    public static OUTPUTNAMES: string[] = [
        'beforetofront',
        'tofront',
        'ready'
    ];
    public static OUTPUTS: any[] = [
        {
            'name': 'beforetofront',
            'parameters': [
                'menutrigger',
                'eOpts'
            ]
        },
        {
            'name': 'tofront',
            'parameters': [
                'menutrigger',
                'eOpts'
            ]
        },
        {
            'name': 'ready',
            'parameters': []
        }
    ];
}
@Component({
    selector: 'xng-menutrigger',
    inputs: XngMenutriggerComponentMetaData.INPUTNAMES,
    outputs: XngMenutriggerComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngMenutriggerComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngMenutriggerComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngMenutriggerComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
