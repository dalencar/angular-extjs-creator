import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.pivot.plugin.configurator.Container
 */
export class XngPivotconfigcontainerComponentMetaData {
    public static XTYPES: string[] = [
        'pivotconfigcontainer'
    ];
    public static INPUTNAMES: string[] = [
        'anchor',
        'anchorPosition',
        'bbar',
        'bodyBorder',
        'bodyPadding',
        'bodyStyle',
        'border',
        'buttonAlign',
        'buttonToolbar',
        'buttons',
        'closable',
        'closeAction',
        'closeToolText',
        'collapsed',
        'collapsible',
        'emptyText',
        'fieldType',
        'header',
        'headerPosition',
        'icon',
        'iconAlign',
        'iconCls',
        'lbar',
        'list',
        'minButtonWidth',
        'rbar',
        'resizable',
        'standardButtons',
        'store',
        'tbar',
        'title',
        'titleAlign',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    public static OUTPUTNAMES: string[] = [
        'beforecollapse',
        'beforeexpand',
        'beforeresizedragstart',
        'collapse',
        'drawerhide',
        'drawershow',
        'expand',
        'resizedrag',
        'resizedragcancel',
        'resizedragend',
        'resizedragstart',
        'ready'
    ];
    public static OUTPUTS: any[] = [
        {
            'name': 'beforecollapse',
            'parameters': [
                'pivotconfigcontainer',
                'eOpts'
            ]
        },
        {
            'name': 'beforeexpand',
            'parameters': [
                'pivotconfigcontainer',
                'eOpts'
            ]
        },
        {
            'name': 'beforeresizedragstart',
            'parameters': [
                'pivotconfigcontainer',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'collapse',
            'parameters': [
                'pivotconfigcontainer',
                'eOpts'
            ]
        },
        {
            'name': 'drawerhide',
            'parameters': [
                'pivotconfigcontainer',
                'eOpts'
            ]
        },
        {
            'name': 'drawershow',
            'parameters': [
                'pivotconfigcontainer',
                'eOpts'
            ]
        },
        {
            'name': 'expand',
            'parameters': [
                'pivotconfigcontainer',
                'eOpts'
            ]
        },
        {
            'name': 'resizedrag',
            'parameters': [
                'pivotconfigcontainer',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragcancel',
            'parameters': [
                'pivotconfigcontainer',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragend',
            'parameters': [
                'pivotconfigcontainer',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragstart',
            'parameters': [
                'pivotconfigcontainer',
                'context',
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
    selector: 'xng-pivotconfigcontainer',
    inputs: XngPivotconfigcontainerComponentMetaData.INPUTNAMES,
    outputs: XngPivotconfigcontainerComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngPivotconfigcontainerComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngPivotconfigcontainerComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngPivotconfigcontainerComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
