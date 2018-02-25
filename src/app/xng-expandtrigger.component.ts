import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.field.trigger.Expand
 */
export class XngExpandtriggerComponentMetaData {
    public static XTYPES: string[] = [
        'expandtrigger'
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
                'expandtrigger',
                'eOpts'
            ]
        },
        {
            'name': 'tofront',
            'parameters': [
                'expandtrigger',
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
    selector: 'xng-expandtrigger',
    inputs: XngExpandtriggerComponentMetaData.INPUTNAMES,
    outputs: XngExpandtriggerComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngExpandtriggerComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngExpandtriggerComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngExpandtriggerComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
