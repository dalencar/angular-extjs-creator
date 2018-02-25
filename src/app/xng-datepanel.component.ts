import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.panel.Date
 */
export class XngDatepanelComponentMetaData {
    public static XTYPES: string[] = [
        'datepanel'
    ];
    public static INPUTNAMES: string[] = [
        'anchor',
        'anchorPosition',
        'animation',
        'autoConfirm',
        'bbar',
        'bodyBorder',
        'bodyPadding',
        'bodyStyle',
        'border',
        'buttonAlign',
        'buttonToolbar',
        'buttons',
        'captionFormat',
        'closable',
        'closeAction',
        'closeToolText',
        'collapsed',
        'collapsible',
        'dateCellFormat',
        'disabledDates',
        'disabledDays',
        'focusableDate',
        'format',
        'handler',
        'header',
        'headerFormat',
        'headerLength',
        'headerPosition',
        'hideCaptions',
        'hideOutside',
        'icon',
        'iconAlign',
        'iconCls',
        'lbar',
        'maxDate',
        'minButtonWidth',
        'minDate',
        'navigationPosition',
        'nextText',
        'panes',
        'prevText',
        'rbar',
        'resizable',
        'scope',
        'selectOnNavigate',
        'showAfterMaxDate',
        'showBeforeMinDate',
        'showFooter',
        'showTodayButton',
        'specialDates',
        'specialDays',
        'splitTitle',
        'standardButtons',
        'startDay',
        'tbar',
        'title',
        'titleAlign',
        'titleAnimation',
        'transformCellCls',
        'value',
        'weekendDays',
        'yearPicker',
        'yearPickerDefaults',
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
                'datepanel',
                'eOpts'
            ]
        },
        {
            'name': 'beforeexpand',
            'parameters': [
                'datepanel',
                'eOpts'
            ]
        },
        {
            'name': 'beforeresizedragstart',
            'parameters': [
                'datepanel',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'collapse',
            'parameters': [
                'datepanel',
                'eOpts'
            ]
        },
        {
            'name': 'drawerhide',
            'parameters': [
                'datepanel',
                'eOpts'
            ]
        },
        {
            'name': 'drawershow',
            'parameters': [
                'datepanel',
                'eOpts'
            ]
        },
        {
            'name': 'expand',
            'parameters': [
                'datepanel',
                'eOpts'
            ]
        },
        {
            'name': 'resizedrag',
            'parameters': [
                'datepanel',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragcancel',
            'parameters': [
                'datepanel',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragend',
            'parameters': [
                'datepanel',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragstart',
            'parameters': [
                'datepanel',
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
    selector: 'xng-datepanel',
    inputs: XngDatepanelComponentMetaData.INPUTNAMES,
    outputs: XngDatepanelComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngDatepanelComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngDatepanelComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngDatepanelComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
