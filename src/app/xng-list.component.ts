import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.dataview.List
 */
export class XngListComponentMetaData {
    public static XTYPES: string[] = [
        'list'
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
        'bufferSize',
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
        'disclosureProperty',
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
        'groupFooter',
        'groupHeader',
        'grouped',
        'hideAnimation',
        'hideOnMaskTap',
        'horizontalOverflow',
        'html',
        'id',
        'indexBar',
        'infinite',
        'inline',
        'innerCls',
        'innerCtHeight',
        'innerWidth',
        'itemCls',
        'itemConfig',
        'itemContentCls',
        'itemCount',
        'itemDataMap',
        'itemId',
        'itemInnerCls',
        'itemTpl',
        'items',
        'itemsFocusable',
        'layout',
        'left',
        'loadingHeight',
        'loadingText',
        'maintainChildNodes',
        'manageBorders',
        'margin',
        'markDirty',
        'masked',
        'maxHeight',
        'maxItemCache',
        'maxWidth',
        'minHeight',
        'minWidth',
        'minimumBufferDistance',
        'modal',
        'modelValidation',
        'navigationModel',
        'onItemDisclosure',
        'padding',
        'pinFooters',
        'pinHeaders',
        'pinnedFooter',
        'pinnedFooterHeight',
        'pinnedHeader',
        'pinnedHeaderHeight',
        'pressedDelay',
        'preventSelectionOnDisclose',
        'preventSelectionOnTool',
        'publishes',
        'record',
        'relative',
        'right',
        'rowLines',
        'scrollDock',
        'scrollToTopOnRefresh',
        'scrollable',
        'selectable',
        'selection',
        'selfAlign',
        'shadow',
        'shim',
        'showAnimation',
        'store',
        'storeEventListeners',
        'striped',
        'tabIndex',
        'toFrontOnShow',
        'tooltip',
        'top',
        'topRenderedIndex',
        'tpl',
        'tplWriteMode',
        'translatable',
        'triggerCtEvent',
        'triggerEvent',
        'useSimpleItems',
        'userSelectable',
        'variableHeights',
        'verticalOverflow',
        'visibleHeight',
        'visibleLeft',
        'visibleTop',
        'visibleWidth',
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
        'disclose',
        'dockedchange',
        'erased',
        'floatingchange',
        'fullscreen',
        'hide',
        'initialize',
        'itemaction',
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
        'scrollablechange',
        'select',
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
                'list',
                'oldActiveItem',
                'eOpts'
            ]
        },
        {
            'name': 'activeitemchange',
            'parameters': [
                'list',
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
                'list',
                'eOpts'
            ]
        },
        {
            'name': 'bottomchange',
            'parameters': [
                'list',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'centeredchange',
            'parameters': [
                'list',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'childdoubletap',
            'parameters': [
                'list',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childlongpress',
            'parameters': [
                'list',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childmouseenter',
            'parameters': [
                'list',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childmouseleave',
            'parameters': [
                'list',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childsingletap',
            'parameters': [
                'list',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childtap',
            'parameters': [
                'list',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childtaphold',
            'parameters': [
                'list',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childtouchcancel',
            'parameters': [
                'list',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childtouchend',
            'parameters': [
                'list',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childtouchmove',
            'parameters': [
                'list',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childtouchstart',
            'parameters': [
                'list',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'deactivate',
            'parameters': [
                'oldActiveItem',
                'list',
                'newActiveItem',
                'eOpts'
            ]
        },
        {
            'name': 'deselect',
            'parameters': [
                'list',
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
            'name': 'disclose',
            'parameters': [
                'list',
                'record',
                'target',
                'index',
                'event',
                'eOpts'
            ]
        },
        {
            'name': 'dockedchange',
            'parameters': [
                'list',
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
            'name': 'itemaction',
            'parameters': [
                'list',
                'index',
                'record',
                'action',
                'eOpts'
            ]
        },
        {
            'name': 'itemdoubletap',
            'parameters': [
                'list',
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
                'list',
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
                'list',
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
                'list',
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
                'list',
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
                'list',
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
                'list',
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
                'list',
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
                'list',
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
                'list',
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
                'list',
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
                'list',
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
                'list',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'maxheightchange',
            'parameters': [
                'list',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'maxwidthchange',
            'parameters': [
                'list',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'minheightchange',
            'parameters': [
                'list',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'minwidthchange',
            'parameters': [
                'list',
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
                'list',
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
                'list',
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
                'list',
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
                'list',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'scrollablechange',
            'parameters': [
                'list',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'select',
            'parameters': [
                'list',
                'selected',
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
                'list',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'tofront',
            'parameters': [
                'list',
                'eOpts'
            ]
        },
        {
            'name': 'topchange',
            'parameters': [
                'list',
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
    selector: 'xng-list',
    inputs: XngListComponentMetaData.INPUTNAMES,
    outputs: XngListComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngListComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngListComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngListComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
