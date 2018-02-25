import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.pivot.plugin.rangeeditor.Panel
 */
export class XngPivotrangeeditorComponentMetaData {
    public static XTYPES: string[] = [
        'pivotrangeeditor'
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
                'pivotrangeeditor',
                'eOpts'
            ]
        },
        {
            'name': 'beforeexpand',
            'parameters': [
                'pivotrangeeditor',
                'eOpts'
            ]
        },
        {
            'name': 'beforeresizedragstart',
            'parameters': [
                'pivotrangeeditor',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'beforesubmit',
            'parameters': [
                'pivotrangeeditor',
                'values',
                'options',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'collapse',
            'parameters': [
                'pivotrangeeditor',
                'eOpts'
            ]
        },
        {
            'name': 'drawerhide',
            'parameters': [
                'pivotrangeeditor',
                'eOpts'
            ]
        },
        {
            'name': 'drawershow',
            'parameters': [
                'pivotrangeeditor',
                'eOpts'
            ]
        },
        {
            'name': 'exception',
            'parameters': [
                'pivotrangeeditor',
                'result',
                'eOpts'
            ]
        },
        {
            'name': 'expand',
            'parameters': [
                'pivotrangeeditor',
                'eOpts'
            ]
        },
        {
            'name': 'resizedrag',
            'parameters': [
                'pivotrangeeditor',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragcancel',
            'parameters': [
                'pivotrangeeditor',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragend',
            'parameters': [
                'pivotrangeeditor',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragstart',
            'parameters': [
                'pivotrangeeditor',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'submit',
            'parameters': [
                'pivotrangeeditor',
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
    selector: 'xng-pivotrangeeditor',
    inputs: XngPivotrangeeditorComponentMetaData.INPUTNAMES,
    outputs: XngPivotrangeeditorComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngPivotrangeeditorComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngPivotrangeeditorComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngPivotrangeeditorComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
