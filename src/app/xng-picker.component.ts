import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.picker.Picker
 */
export class XngPickerComponentMetaData {
    public static XTYPES: string[] = [
        'picker'
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
        'rbar',
        'resizable',
        'reveal',
        'right',
        'side',
        'slots',
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
                'picker',
                'eOpts'
            ]
        },
        {
            'name': 'beforeexpand',
            'parameters': [
                'picker',
                'eOpts'
            ]
        },
        {
            'name': 'beforeresizedragstart',
            'parameters': [
                'picker',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'cancel',
            'parameters': [
                'picker',
                'eOpts'
            ]
        },
        {
            'name': 'centeredchange',
            'parameters': [
                'picker',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'change',
            'parameters': [
                'picker',
                'values',
                'eOpts'
            ]
        },
        {
            'name': 'collapse',
            'parameters': [
                'picker',
                'eOpts'
            ]
        },
        {
            'name': 'drawerhide',
            'parameters': [
                'picker',
                'eOpts'
            ]
        },
        {
            'name': 'drawershow',
            'parameters': [
                'picker',
                'eOpts'
            ]
        },
        {
            'name': 'expand',
            'parameters': [
                'picker',
                'eOpts'
            ]
        },
        {
            'name': 'pick',
            'parameters': [
                'picker',
                'values',
                'slot',
                'eOpts'
            ]
        },
        {
            'name': 'resizedrag',
            'parameters': [
                'picker',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragcancel',
            'parameters': [
                'picker',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragend',
            'parameters': [
                'picker',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'resizedragstart',
            'parameters': [
                'picker',
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
    selector: 'xng-picker',
    inputs: XngPickerComponentMetaData.INPUTNAMES,
    outputs: XngPickerComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngPickerComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngPickerComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngPickerComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
