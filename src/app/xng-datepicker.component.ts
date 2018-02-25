import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.picker.Date
 */
export class XngDatepickerComponentMetaData {
    public static XTYPES: string[] = [
        'datepicker'
    ];
    public static INPUTNAMES: string[] = [
        'anchor',
        'anchorPosition',
        'bbar',
        'bodyBorder',
        'bodyPadding',
        'bodyStyle',
        'border',
        'bottom',
        'buttonAlign',
        'buttonToolbar',
        'buttons',
        'cancelButton',
        'closable',
        'closeAction',
        'closeToolText',
        'collapsed',
        'collapsible',
        'cover',
        'dayText',
        'defaultType',
        'doneButton',
        'enter',
        'exit',
        'header',
        'headerPosition',
        'height',
        'icon',
        'iconAlign',
        'iconCls',
        'layout',
        'lbar',
        'left',
        'minButtonWidth',
        'monthText',
        'rbar',
        'resizable',
        'reveal',
        'right',
        'side',
        'slotOrder',
        'standardButtons',
        'stretchX',
        'stretchY',
        'tbar',
        'title',
        'titleAlign',
        'toolbar',
        'toolbarPosition',
        'useTitles',
        'value',
        'yearFrom',
        'yearText',
        'yearTo',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    public static OUTPUTNAMES: string[] = [
        'beforecollapse',
        'beforeexpand',
        'beforeresizedragstart',
        'cancel',
        'centeredchange',
        'change',
        'collapse',
        'drawerhide',
        'drawershow',
        'expand',
        'pick',
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
                'datepicker',
                'eOpts'
            ]
        },
        {
            'name': 'beforeexpand',
            'parameters': [
                'datepicker',
                'eOpts'
            ]
        },
        {
            'name': 'beforeresizedragstart',
            'parameters': [
                'datepicker',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'cancel',
            'parameters': [
                'datepicker',
                'eOpts'
            ]
        },
        {
            'name': 'centeredchange',
            'parameters': [
                'datepicker',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'change',
            'parameters': [
                'datepicker',
                'value',
                'eOpts'
            ]
        },
        {
            'name': 'collapse',
            'parameters': [
                'datepicker',
                'eOpts'
            ]
        },
        {
            'name': 'drawerhide',
            'parameters': [
                'datepicker',
                'eOpts'
            ]
        },
        {
            'name': 'drawershow',
            'parameters': [
                'datepicker',
                'eOpts'
            ]
        },
        {
            'name': 'expand',
            'parameters': [
                'datepicker',
                'eOpts'
            ]
        },
        {
            'name': 'pick',
            'parameters': [
                'datepicker',
                'values',
                'slot',
                'eOpts'
            ]
        },
        {
            'name': 'resizedrag',
            'parameters': [
                'datepicker',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragcancel',
            'parameters': [
                'datepicker',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragend',
            'parameters': [
                'datepicker',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragstart',
            'parameters': [
                'datepicker',
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
    selector: 'xng-datepicker',
    inputs: XngDatepickerComponentMetaData.INPUTNAMES,
    outputs: XngDatepickerComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngDatepickerComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngDatepickerComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngDatepickerComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
