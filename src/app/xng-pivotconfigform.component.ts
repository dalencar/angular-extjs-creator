import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.pivot.plugin.configurator.Form
 */
export class XngPivotconfigformComponentMetaData {
    public static XTYPES: string[] = [
        'pivotconfigform'
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
        'fieldItem',
        'fieldSeparators',
        'header',
        'headerPosition',
        'hideAnimation',
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
        'fielditemchange',
        'resizedrag',
        'resizedragcancel',
        'resizedragend',
        'resizedragstart',
        'submit',
        'titlechange',
        'ready'
    ];
    public static OUTPUTS: any[] = [
        {
            'name': 'beforecollapse',
            'parameters': [
                'pivotconfigform',
                'eOpts'
            ]
        },
        {
            'name': 'beforeexpand',
            'parameters': [
                'pivotconfigform',
                'eOpts'
            ]
        },
        {
            'name': 'beforeresizedragstart',
            'parameters': [
                'pivotconfigform',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'beforesubmit',
            'parameters': [
                'pivotconfigform',
                'values',
                'options',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'collapse',
            'parameters': [
                'pivotconfigform',
                'eOpts'
            ]
        },
        {
            'name': 'drawerhide',
            'parameters': [
                'pivotconfigform',
                'eOpts'
            ]
        },
        {
            'name': 'drawershow',
            'parameters': [
                'pivotconfigform',
                'eOpts'
            ]
        },
        {
            'name': 'exception',
            'parameters': [
                'pivotconfigform',
                'result',
                'eOpts'
            ]
        },
        {
            'name': 'expand',
            'parameters': [
                'pivotconfigform',
                'eOpts'
            ]
        },
        {
            'name': 'fielditemchange',
            'parameters': [
                'pivotconfigform',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'resizedrag',
            'parameters': [
                'pivotconfigform',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragcancel',
            'parameters': [
                'pivotconfigform',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragend',
            'parameters': [
                'pivotconfigform',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragstart',
            'parameters': [
                'pivotconfigform',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'submit',
            'parameters': [
                'pivotconfigform',
                'result',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'titlechange',
            'parameters': [
                'pivotconfigform',
                'value',
                'oldValue',
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
    selector: 'xng-pivotconfigform',
    inputs: XngPivotconfigformComponentMetaData.INPUTNAMES,
    outputs: XngPivotconfigformComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngPivotconfigformComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngPivotconfigformComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngPivotconfigformComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
