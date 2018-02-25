import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.pivot.plugin.configurator.Settings
 */
export class XngPivotsettingsComponentMetaData {
    public static XTYPES: string[] = [
        'pivotsettings'
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
        'hideAnimation',
        'icon',
        'iconAlign',
        'iconCls',
        'inputBorders',
        'lbar',
        'matrixProperties',
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
        'matrixpropertieschange',
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
                'pivotsettings',
                'eOpts'
            ]
        },
        {
            'name': 'beforeexpand',
            'parameters': [
                'pivotsettings',
                'eOpts'
            ]
        },
        {
            'name': 'beforeresizedragstart',
            'parameters': [
                'pivotsettings',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'beforesubmit',
            'parameters': [
                'pivotsettings',
                'values',
                'options',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'collapse',
            'parameters': [
                'pivotsettings',
                'eOpts'
            ]
        },
        {
            'name': 'drawerhide',
            'parameters': [
                'pivotsettings',
                'eOpts'
            ]
        },
        {
            'name': 'drawershow',
            'parameters': [
                'pivotsettings',
                'eOpts'
            ]
        },
        {
            'name': 'exception',
            'parameters': [
                'pivotsettings',
                'result',
                'eOpts'
            ]
        },
        {
            'name': 'expand',
            'parameters': [
                'pivotsettings',
                'eOpts'
            ]
        },
        {
            'name': 'matrixpropertieschange',
            'parameters': [
                'pivotsettings',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'resizedrag',
            'parameters': [
                'pivotsettings',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragcancel',
            'parameters': [
                'pivotsettings',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragend',
            'parameters': [
                'pivotsettings',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragstart',
            'parameters': [
                'pivotsettings',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'submit',
            'parameters': [
                'pivotsettings',
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
    selector: 'xng-pivotsettings',
    inputs: XngPivotsettingsComponentMetaData.INPUTNAMES,
    outputs: XngPivotsettingsComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngPivotsettingsComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngPivotsettingsComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngPivotsettingsComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
