import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.menu.Menu
 */
export class XngMenuComponentMetaData {
    public static XTYPES: string[] = [
        'menu'
    ];
    public static INPUTNAMES: string[] = [
        'align',
        'allowOtherMenus',
        'anchor',
        'anchorPosition',
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
        'groups',
        'header',
        'headerPosition',
        'icon',
        'iconAlign',
        'iconCls',
        'ignoreParentClicks',
        'indented',
        'lbar',
        'minButtonWidth',
        'mouseLeaveDelay',
        'rbar',
        'resizable',
        'separator',
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
        'groupchange',
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
                'menu',
                'eOpts'
            ]
        },
        {
            'name': 'beforeexpand',
            'parameters': [
                'menu',
                'eOpts'
            ]
        },
        {
            'name': 'beforeresizedragstart',
            'parameters': [
                'menu',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'collapse',
            'parameters': [
                'menu',
                'eOpts'
            ]
        },
        {
            'name': 'drawerhide',
            'parameters': [
                'menu',
                'eOpts'
            ]
        },
        {
            'name': 'drawershow',
            'parameters': [
                'menu',
                'eOpts'
            ]
        },
        {
            'name': 'expand',
            'parameters': [
                'menu',
                'eOpts'
            ]
        },
        {
            'name': 'groupchange',
            'parameters': [
                'menu',
                'groupName',
                'newValue',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'resizedrag',
            'parameters': [
                'menu',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragcancel',
            'parameters': [
                'menu',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragend',
            'parameters': [
                'menu',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragstart',
            'parameters': [
                'menu',
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
    selector: 'xng-menu',
    inputs: XngMenuComponentMetaData.INPUTNAMES,
    outputs: XngMenuComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngMenuComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngMenuComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngMenuComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
