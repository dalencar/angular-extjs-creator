import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.dataview.DataView
 */
export class XngDataviewComponentMetaData {
    public static XTYPES: string[] = [
        'dataview'
    ];
    public static INPUTNAMES: string[] = [
        'activeItem',
        'activeItemIndex',
        'alwaysOnTop',
        'associatedData',
        'autoDestroy',
        'autoSize',
        'axisLock',
        'bottom',
        'cardSwitchAnimation',
        'centered',
        'constrainAlign',
        'contentEl',
        'control',
        'data',
        'defaultFocus',
        'defaultType',
        'defaults',
        'deferEmptyText',
        'deselectOnContainerClick',
        'disableSelection',
        'displayed',
        'docked',
        'draggable',
        'emptyItemText',
        'emptyState',
        'emptyText',
        'emptyTextDefaults',
        'emptyTextProperty',
        'enableTextSelection',
        'enterAnimation',
        'exitAnimation',
        'flex',
        'floated',
        'fullscreen',
        'hideAnimation',
        'hideOnMaskTap',
        'html',
        'id',
        'inline',
        'innerCls',
        'itemCls',
        'itemId',
        'itemTpl',
        'items',
        'itemsFocusable',
        'lastSelected',
        'layout',
        'left',
        'loadingHeight',
        'loadingText',
        'manageBorders',
        'margin',
        'markDirty',
        'masked',
        'maxHeight',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
        'modelValidation',
        'navigationModel',
        'padding',
        'pressedDelay',
        'publishes',
        'record',
        'relative',
        'right',
        'scrollDock',
        'scrollToTopOnRefresh',
        'scrollable',
        'selectable',
        'selected',
        'selection',
        'selfAlign',
        'shadow',
        'shim',
        'showAnimation',
        'store',
        'storeEventListeners',
        'tabIndex',
        'toFrontOnShow',
        'tooltip',
        'top',
        'tpl',
        'tplWriteMode',
        'translatable',
        'triggerCtEvent',
        'triggerEvent',
        'userSelectable',
        'weight',
        'weighted',
        'x',
        'xtype',
        'y',
        'zIndex',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    public static OUTPUTNAMES: string[] = [
        'activate',
        'activeitemchange',
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeshow',
        'beforetofront',
        'bottomchange',
        'centeredchange',
        'childdoubletap',
        'childlongpress',
        'childmouseenter',
        'childmouseleave',
        'childsingletap',
        'childtap',
        'childtaphold',
        'childtouchcancel',
        'childtouchend',
        'childtouchmove',
        'childtouchstart',
        'deactivate',
        'deselect',
        'destroy',
        'dockedchange',
        'erased',
        'floatingchange',
        'fullscreen',
        'hide',
        'initialize',
        'itemdoubletap',
        'itemlongpress',
        'itemmouseenter',
        'itemmouseleave',
        'itemsingletap',
        'itemswipe',
        'itemtap',
        'itemtaphold',
        'itemtouchcancel',
        'itemtouchend',
        'itemtouchmove',
        'itemtouchstart',
        'leftchange',
        'maxheightchange',
        'maxwidthchange',
        'minheightchange',
        'minwidthchange',
        'moved',
        'navigate',
        'orientationchange',
        'painted',
        'positionedchange',
        'refresh',
        'removed',
        'renderedchange',
        'resize',
        'rightchange',
        'rowselection',
        'scrollablechange',
        'select',
        'selectionchange',
        'show',
        'storechange',
        'tofront',
        'topchange',
        'updatedata',
        'ready'
    ];
    public static OUTPUTS: any[] = [
        {
            'name': 'activate',
            'parameters': [
                'newActiveItem',
                'dataview',
                'oldActiveItem',
                'eOpts'
            ]
        },
        {
            'name': 'activeitemchange',
            'parameters': [
                'dataview',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'added',
            'parameters': [
                'sender',
                'container',
                'index',
                'eOpts'
            ]
        },
        {
            'name': 'beforehide',
            'parameters': [
                'sender',
                'eOpts'
            ]
        },
        {
            'name': 'beforeorientationchange',
            'parameters': [
                'eOpts'
            ]
        },
        {
            'name': 'beforeshow',
            'parameters': [
                'sender',
                'eOpts'
            ]
        },
        {
            'name': 'beforetofront',
            'parameters': [
                'dataview',
                'eOpts'
            ]
        },
        {
            'name': 'bottomchange',
            'parameters': [
                'dataview',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'centeredchange',
            'parameters': [
                'dataview',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'childdoubletap',
            'parameters': [
                'dataview',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childlongpress',
            'parameters': [
                'dataview',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childmouseenter',
            'parameters': [
                'dataview',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childmouseleave',
            'parameters': [
                'dataview',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childsingletap',
            'parameters': [
                'dataview',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childtap',
            'parameters': [
                'dataview',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childtaphold',
            'parameters': [
                'dataview',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childtouchcancel',
            'parameters': [
                'dataview',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childtouchend',
            'parameters': [
                'dataview',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childtouchmove',
            'parameters': [
                'dataview',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childtouchstart',
            'parameters': [
                'dataview',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'deactivate',
            'parameters': [
                'oldActiveItem',
                'dataview',
                'newActiveItem',
                'eOpts'
            ]
        },
        {
            'name': 'deselect',
            'parameters': [
                'dataview',
                'records',
                'eOpts'
            ]
        },
        {
            'name': 'destroy',
            'parameters': [
                'eOpts'
            ]
        },
        {
            'name': 'dockedchange',
            'parameters': [
                'dataview',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'erased',
            'parameters': [
                'sender',
                'eOpts'
            ]
        },
        {
            'name': 'floatingchange',
            'parameters': [
                'sender',
                'positioned',
                'eOpts'
            ]
        },
        {
            'name': 'fullscreen',
            'parameters': [
                'sender',
                'eOpts'
            ]
        },
        {
            'name': 'hide',
            'parameters': [
                'sender',
                'eOpts'
            ]
        },
        {
            'name': 'initialize',
            'parameters': [
                'sender',
                'eOpts'
            ]
        },
        {
            'name': 'itemdoubletap',
            'parameters': [
                'dataview',
                'index',
                'target',
                'record',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'itemlongpress',
            'parameters': [
                'dataview',
                'index',
                'target',
                'record',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'itemmouseenter',
            'parameters': [
                'dataview',
                'index',
                'target',
                'record',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'itemmouseleave',
            'parameters': [
                'dataview',
                'index',
                'target',
                'record',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'itemsingletap',
            'parameters': [
                'dataview',
                'index',
                'target',
                'record',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'itemswipe',
            'parameters': [
                'dataview',
                'index',
                'target',
                'record',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'itemtap',
            'parameters': [
                'dataview',
                'index',
                'target',
                'record',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'itemtaphold',
            'parameters': [
                'dataview',
                'index',
                'target',
                'record',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'itemtouchcancel',
            'parameters': [
                'dataview',
                'index',
                'target',
                'record',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'itemtouchend',
            'parameters': [
                'dataview',
                'index',
                'target',
                'record',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'itemtouchmove',
            'parameters': [
                'dataview',
                'index',
                'target',
                'record',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'itemtouchstart',
            'parameters': [
                'dataview',
                'index',
                'target',
                'record',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'leftchange',
            'parameters': [
                'dataview',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'maxheightchange',
            'parameters': [
                'dataview',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'maxwidthchange',
            'parameters': [
                'dataview',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'minheightchange',
            'parameters': [
                'dataview',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'minwidthchange',
            'parameters': [
                'dataview',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'moved',
            'parameters': [
                'sender',
                'container',
                'toIndex',
                'fromIndex',
                'eOpts'
            ]
        },
        {
            'name': 'navigate',
            'parameters': [
                'dataview',
                'to',
                'from',
                'eOpts'
            ]
        },
        {
            'name': 'orientationchange',
            'parameters': [
                'eOpts'
            ]
        },
        {
            'name': 'painted',
            'parameters': [
                'sender',
                'element',
                'eOpts'
            ]
        },
        {
            'name': 'positionedchange',
            'parameters': [
                'sender',
                'positioned',
                'eOpts'
            ]
        },
        {
            'name': 'refresh',
            'parameters': [
                'dataview',
                'eOpts'
            ]
        },
        {
            'name': 'removed',
            'parameters': [
                'sender',
                'container',
                'index',
                'eOpts'
            ]
        },
        {
            'name': 'renderedchange',
            'parameters': [
                'dataview',
                'item',
                'rendered',
                'eOpts'
            ]
        },
        {
            'name': 'resize',
            'parameters': [
                'element',
                'info',
                'eOpts'
            ]
        },
        {
            'name': 'rightchange',
            'parameters': [
                'dataview',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'rowselection',
            'parameters': [
                'view',
                'selection',
                'eOpts'
            ]
        },
        {
            'name': 'scrollablechange',
            'parameters': [
                'dataview',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'select',
            'parameters': [
                'dataview',
                'selected',
                'eOpts'
            ]
        },
        {
            'name': 'selectionchange',
            'parameters': [
                'view',
                'records',
                'selected',
                'selection',
                'eOpts'
            ]
        },
        {
            'name': 'show',
            'parameters': [
                'sender',
                'eOpts'
            ]
        },
        {
            'name': 'storechange',
            'parameters': [
                'dataview',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'tofront',
            'parameters': [
                'dataview',
                'eOpts'
            ]
        },
        {
            'name': 'topchange',
            'parameters': [
                'dataview',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'updatedata',
            'parameters': [
                'sender',
                'newData',
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
    selector: 'xng-dataview',
    inputs: XngDataviewComponentMetaData.INPUTNAMES,
    outputs: XngDataviewComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngDataviewComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngDataviewComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngDataviewComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
