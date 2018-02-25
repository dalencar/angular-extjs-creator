import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.form.Panel
 */
export class XngFormpanelComponentMetaData {
    public static XTYPES: string[] = [
        'formpanel'
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
        'enableSubmissionForm',
        'enctype',
        'fieldSeparators',
        'header',
        'headerPosition',
        'icon',
        'iconAlign',
        'iconCls',
        'inputBorders',
        'lbar',
        'method',
        'minButtonWidth',
        'multipartDetection',
        'nameHolder',
        'nameable',
        'paramOrder',
        'paramsAsHash',
        'rbar',
        'resizable',
        'scrollable',
        'shareableName',
        'standardButtons',
        'standardSubmit',
        'submitOnAction',
        'tbar',
        'timeout',
        'title',
        'titleAlign',
        'trackResetOnLoad',
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
        'beforesubmit',
        'collapse',
        'drawerhide',
        'drawershow',
        'exception',
        'expand',
        'resizedrag',
        'resizedragcancel',
        'resizedragend',
        'resizedragstart',
        'submit',
        'ready'
    ];
    public static OUTPUTS: any[] = [
        {
            'name': 'beforecollapse',
            'parameters': [
                'formpanel',
                'eOpts'
            ]
        },
        {
            'name': 'beforeexpand',
            'parameters': [
                'formpanel',
                'eOpts'
            ]
        },
        {
            'name': 'beforeresizedragstart',
            'parameters': [
                'formpanel',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'beforesubmit',
            'parameters': [
                'formpanel',
                'values',
                'options',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'collapse',
            'parameters': [
                'formpanel',
                'eOpts'
            ]
        },
        {
            'name': 'drawerhide',
            'parameters': [
                'formpanel',
                'eOpts'
            ]
        },
        {
            'name': 'drawershow',
            'parameters': [
                'formpanel',
                'eOpts'
            ]
        },
        {
            'name': 'exception',
            'parameters': [
                'formpanel',
                'result',
                'eOpts'
            ]
        },
        {
            'name': 'expand',
            'parameters': [
                'formpanel',
                'eOpts'
            ]
        },
        {
            'name': 'resizedrag',
            'parameters': [
                'formpanel',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragcancel',
            'parameters': [
                'formpanel',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragend',
            'parameters': [
                'formpanel',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragstart',
            'parameters': [
                'formpanel',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'submit',
            'parameters': [
                'formpanel',
                'result',
                'e',
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
    selector: 'xng-formpanel',
    inputs: XngFormpanelComponentMetaData.INPUTNAMES,
    outputs: XngFormpanelComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngFormpanelComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngFormpanelComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngFormpanelComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
