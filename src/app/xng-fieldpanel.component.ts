import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.field.Panel
 */
export class XngFieldpanelComponentMetaData {
    public static XTYPES: string[] = [
        'fieldpanel'
    ];
    public static INPUTNAMES: string[] = [
        'anchor',
        'anchorPosition',
        'api',
        'baseParams',
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
        'fieldSeparators',
        'header',
        'headerPosition',
        'icon',
        'iconAlign',
        'iconCls',
        'inputBorders',
        'lbar',
        'minButtonWidth',
        'nameHolder',
        'nameable',
        'paramOrder',
        'paramsAsHash',
        'rbar',
        'resizable',
        'scrollable',
        'shareableName',
        'standardButtons',
        'tbar',
        'timeout',
        'title',
        'titleAlign',
        'url',
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
        'exception',
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
                'fieldpanel',
                'eOpts'
            ]
        },
        {
            'name': 'beforeexpand',
            'parameters': [
                'fieldpanel',
                'eOpts'
            ]
        },
        {
            'name': 'beforeresizedragstart',
            'parameters': [
                'fieldpanel',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'collapse',
            'parameters': [
                'fieldpanel',
                'eOpts'
            ]
        },
        {
            'name': 'drawerhide',
            'parameters': [
                'fieldpanel',
                'eOpts'
            ]
        },
        {
            'name': 'drawershow',
            'parameters': [
                'fieldpanel',
                'eOpts'
            ]
        },
        {
            'name': 'exception',
            'parameters': [
                'fieldpanel',
                'result',
                'eOpts'
            ]
        },
        {
            'name': 'expand',
            'parameters': [
                'fieldpanel',
                'eOpts'
            ]
        },
        {
            'name': 'resizedrag',
            'parameters': [
                'fieldpanel',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragcancel',
            'parameters': [
                'fieldpanel',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragend',
            'parameters': [
                'fieldpanel',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragstart',
            'parameters': [
                'fieldpanel',
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
    selector: 'xng-fieldpanel',
    inputs: XngFieldpanelComponentMetaData.INPUTNAMES,
    outputs: XngFieldpanelComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngFieldpanelComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngFieldpanelComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngFieldpanelComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
