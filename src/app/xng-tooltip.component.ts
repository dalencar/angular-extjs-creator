import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.tip.ToolTip
 */
export class XngTooltipComponentMetaData {
    public static XTYPES: string[] = [
        'tooltip'
    ];
    public static INPUTNAMES: string[] = [
        'align',
        'alignDelegate',
        'allowOver',
        'anchor',
        'anchorPosition',
        'anchorToTarget',
        'autoHide',
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
        'delegate',
        'dismissDelay',
        'header',
        'headerPosition',
        'hideDelay',
        'icon',
        'iconAlign',
        'iconCls',
        'lbar',
        'minButtonWidth',
        'mouseOffset',
        'quickShowInterval',
        'rbar',
        'resizable',
        'showDelay',
        'showOnTap',
        'standardButtons',
        'target',
        'tbar',
        'title',
        'titleAlign',
        'trackMouse',
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
                'tooltip',
                'eOpts'
            ]
        },
        {
            'name': 'beforeexpand',
            'parameters': [
                'tooltip',
                'eOpts'
            ]
        },
        {
            'name': 'beforeresizedragstart',
            'parameters': [
                'tooltip',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'collapse',
            'parameters': [
                'tooltip',
                'eOpts'
            ]
        },
        {
            'name': 'drawerhide',
            'parameters': [
                'tooltip',
                'eOpts'
            ]
        },
        {
            'name': 'drawershow',
            'parameters': [
                'tooltip',
                'eOpts'
            ]
        },
        {
            'name': 'expand',
            'parameters': [
                'tooltip',
                'eOpts'
            ]
        },
        {
            'name': 'resizedrag',
            'parameters': [
                'tooltip',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragcancel',
            'parameters': [
                'tooltip',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragend',
            'parameters': [
                'tooltip',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragstart',
            'parameters': [
                'tooltip',
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
    selector: 'xng-tooltip',
    inputs: XngTooltipComponentMetaData.INPUTNAMES,
    outputs: XngTooltipComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngTooltipComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngTooltipComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngTooltipComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
