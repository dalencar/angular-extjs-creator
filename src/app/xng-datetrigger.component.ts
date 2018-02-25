import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.field.trigger.Date
 */
export class XngDatetriggerComponentMetaData {
    public static XTYPES: string[] = [
        'datetrigger'
    ];
    public static INPUTNAMES: string[] = [
        'alwaysOnTop',
        'constrainAlign',
        'field',
        'flex',
        'floated',
        'focusOnTap',
        'group',
        'handler',
        'iconCls',
        'id',
        'itemId',
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
                'datetrigger',
                'eOpts'
            ]
        },
        {
            'name': 'tofront',
            'parameters': [
                'datetrigger',
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
    selector: 'xng-datetrigger',
    inputs: XngDatetriggerComponentMetaData.INPUTNAMES,
    outputs: XngDatetriggerComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngDatetriggerComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngDatetriggerComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngDatetriggerComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
