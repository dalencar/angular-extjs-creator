import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.MessageBox
 */
export class XngMessageboxComponentMetaData {
    public static XTYPES: string[] = [
        'messagebox'
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
        'constrainDrag',
        'defaultTextHeight',
        'dismissAction',
        'dismissHandler',
        'header',
        'headerPosition',
        'hideAnimation',
        'icon',
        'iconAlign',
        'iconCls',
        'layout',
        'lbar',
        'maskTapHandler',
        'maximizable',
        'maximizeAnimation',
        'maximizeProxy',
        'maximizeTool',
        'maximized',
        'message',
        'minButtonWidth',
        'modal',
        'msg',
        'multiLine',
        'prompt',
        'rbar',
        'resizable',
        'restorable',
        'restoreAnimation',
        'restoreTool',
        'shadow',
        'showAnimation',
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
        'beforemaximize',
        'beforeresizedragstart',
        'beforerestore',
        'collapse',
        'drawerhide',
        'drawershow',
        'expand',
        'maximize',
        'resizedrag',
        'resizedragcancel',
        'resizedragend',
        'resizedragstart',
        'restore',
        'ready'
    ];
    public static OUTPUTS: any[] = [
        {
            'name': 'beforecollapse',
            'parameters': [
                'messagebox',
                'eOpts'
            ]
        },
        {
            'name': 'beforeexpand',
            'parameters': [
                'messagebox',
                'eOpts'
            ]
        },
        {
            'name': 'beforemaximize',
            'parameters': [
                'dialog',
                'eOpts'
            ]
        },
        {
            'name': 'beforeresizedragstart',
            'parameters': [
                'messagebox',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'beforerestore',
            'parameters': [
                'dialog',
                'eOpts'
            ]
        },
        {
            'name': 'collapse',
            'parameters': [
                'messagebox',
                'eOpts'
            ]
        },
        {
            'name': 'drawerhide',
            'parameters': [
                'messagebox',
                'eOpts'
            ]
        },
        {
            'name': 'drawershow',
            'parameters': [
                'messagebox',
                'eOpts'
            ]
        },
        {
            'name': 'expand',
            'parameters': [
                'messagebox',
                'eOpts'
            ]
        },
        {
            'name': 'maximize',
            'parameters': [
                'dialog',
                'eOpts'
            ]
        },
        {
            'name': 'resizedrag',
            'parameters': [
                'messagebox',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragcancel',
            'parameters': [
                'messagebox',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragend',
            'parameters': [
                'messagebox',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragstart',
            'parameters': [
                'messagebox',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'restore',
            'parameters': [
                'dialog',
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
    selector: 'xng-messagebox',
    inputs: XngMessageboxComponentMetaData.INPUTNAMES,
    outputs: XngMessageboxComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngMessageboxComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngMessageboxComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngMessageboxComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
