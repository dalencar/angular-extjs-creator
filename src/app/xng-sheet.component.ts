import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.Sheet
 */
export class XngSheetComponentMetaData {
    public static XTYPES: string[] = [
        'sheet'
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
        'centered',
        'closable',
        'closeAction',
        'closeToolText',
        'collapsed',
        'collapsible',
        'cover',
        'enter',
        'exit',
        'header',
        'headerPosition',
        'icon',
        'iconAlign',
        'iconCls',
        'lbar',
        'minButtonWidth',
        'rbar',
        'resizable',
        'reveal',
        'side',
        'standardButtons',
        'stretchX',
        'stretchY',
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
        'centeredchange',
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
                'sheet',
                'eOpts'
            ]
        },
        {
            'name': 'beforeexpand',
            'parameters': [
                'sheet',
                'eOpts'
            ]
        },
        {
            'name': 'beforeresizedragstart',
            'parameters': [
                'sheet',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'centeredchange',
            'parameters': [
                'sheet',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'collapse',
            'parameters': [
                'sheet',
                'eOpts'
            ]
        },
        {
            'name': 'drawerhide',
            'parameters': [
                'sheet',
                'eOpts'
            ]
        },
        {
            'name': 'drawershow',
            'parameters': [
                'sheet',
                'eOpts'
            ]
        },
        {
            'name': 'expand',
            'parameters': [
                'sheet',
                'eOpts'
            ]
        },
        {
            'name': 'resizedrag',
            'parameters': [
                'sheet',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragcancel',
            'parameters': [
                'sheet',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragend',
            'parameters': [
                'sheet',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragstart',
            'parameters': [
                'sheet',
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
    selector: 'xng-sheet',
    inputs: XngSheetComponentMetaData.INPUTNAMES,
    outputs: XngSheetComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngSheetComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngSheetComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngSheetComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
