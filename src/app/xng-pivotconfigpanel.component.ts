import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.pivot.plugin.configurator.Panel
 */
export class XngPivotconfigpanelComponentMetaData {
    public static XTYPES: string[] = [
        'pivotconfigpanel'
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
        'fields',
        'header',
        'headerPosition',
        'icon',
        'iconAlign',
        'iconCls',
        'lbar',
        'minButtonWidth',
        'panelAggFieldsText',
        'panelAggFieldsTitle',
        'panelAllFieldsText',
        'panelAllFieldsTitle',
        'panelLeftFieldsText',
        'panelLeftFieldsTitle',
        'panelTopFieldsText',
        'panelTopFieldsTitle',
        'pivot',
        'rbar',
        'resizable',
        'standardButtons',
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
        'fieldschange',
        'pivotchange',
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
                'pivotconfigpanel',
                'eOpts'
            ]
        },
        {
            'name': 'beforeexpand',
            'parameters': [
                'pivotconfigpanel',
                'eOpts'
            ]
        },
        {
            'name': 'beforeresizedragstart',
            'parameters': [
                'pivotconfigpanel',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'collapse',
            'parameters': [
                'pivotconfigpanel',
                'eOpts'
            ]
        },
        {
            'name': 'drawerhide',
            'parameters': [
                'pivotconfigpanel',
                'eOpts'
            ]
        },
        {
            'name': 'drawershow',
            'parameters': [
                'pivotconfigpanel',
                'eOpts'
            ]
        },
        {
            'name': 'expand',
            'parameters': [
                'pivotconfigpanel',
                'eOpts'
            ]
        },
        {
            'name': 'fieldschange',
            'parameters': [
                'pivotconfigpanel',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'pivotchange',
            'parameters': [
                'pivotconfigpanel',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'resizedrag',
            'parameters': [
                'pivotconfigpanel',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragcancel',
            'parameters': [
                'pivotconfigpanel',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragend',
            'parameters': [
                'pivotconfigpanel',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragstart',
            'parameters': [
                'pivotconfigpanel',
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
    selector: 'xng-pivotconfigpanel',
    inputs: XngPivotconfigpanelComponentMetaData.INPUTNAMES,
    outputs: XngPivotconfigpanelComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngPivotconfigpanelComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngPivotconfigpanelComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngPivotconfigpanelComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
