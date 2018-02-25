import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.picker.Tablet
 */
export class XngTabletpickerComponentMetaData {
    public static XTYPES: string[] = [
        'tabletpicker'
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
        'header',
        'headerPosition',
        'icon',
        'iconAlign',
        'iconCls',
        'lbar',
        'minButtonWidth',
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
                'tabletpicker',
                'eOpts'
            ]
        },
        {
            'name': 'beforeexpand',
            'parameters': [
                'tabletpicker',
                'eOpts'
            ]
        },
        {
            'name': 'beforeresizedragstart',
            'parameters': [
                'tabletpicker',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'collapse',
            'parameters': [
                'tabletpicker',
                'eOpts'
            ]
        },
        {
            'name': 'drawerhide',
            'parameters': [
                'tabletpicker',
                'eOpts'
            ]
        },
        {
            'name': 'drawershow',
            'parameters': [
                'tabletpicker',
                'eOpts'
            ]
        },
        {
            'name': 'expand',
            'parameters': [
                'tabletpicker',
                'eOpts'
            ]
        },
        {
            'name': 'resizedrag',
            'parameters': [
                'tabletpicker',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragcancel',
            'parameters': [
                'tabletpicker',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragend',
            'parameters': [
                'tabletpicker',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragstart',
            'parameters': [
                'tabletpicker',
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
    selector: 'xng-tabletpicker',
    inputs: XngTabletpickerComponentMetaData.INPUTNAMES,
    outputs: XngTabletpickerComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngTabletpickerComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngTabletpickerComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngTabletpickerComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
