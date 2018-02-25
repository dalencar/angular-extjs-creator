import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.panel.YearPicker
 */
export class XngYearpickerComponentMetaData {
    public static XTYPES: string[] = [
        'yearpicker'
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
        'defaultOffset',
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
        'end',
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
        'start',
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
                'yearpicker',
                'oldActiveItem',
                'eOpts'
            ]
        },
        {
            'name': 'activeitemchange',
            'parameters': [
                'yearpicker',
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
                'yearpicker',
                'eOpts'
            ]
        },
        {
            'name': 'bottomchange',
            'parameters': [
                'yearpicker',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'centeredchange',
            'parameters': [
                'yearpicker',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'childdoubletap',
            'parameters': [
                'yearpicker',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childlongpress',
            'parameters': [
                'yearpicker',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childmouseenter',
            'parameters': [
                'yearpicker',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childmouseleave',
            'parameters': [
                'yearpicker',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childsingletap',
            'parameters': [
                'yearpicker',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childtap',
            'parameters': [
                'yearpicker',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childtaphold',
            'parameters': [
                'yearpicker',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childtouchcancel',
            'parameters': [
                'yearpicker',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childtouchend',
            'parameters': [
                'yearpicker',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childtouchmove',
            'parameters': [
                'yearpicker',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childtouchstart',
            'parameters': [
                'yearpicker',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'deactivate',
            'parameters': [
                'oldActiveItem',
                'yearpicker',
                'newActiveItem',
                'eOpts'
            ]
        },
        {
            'name': 'deselect',
            'parameters': [
                'yearpicker',
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
                'yearpicker',
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
                'yearpicker',
                'index',
                'record',
                'action',
                'eOpts'
            ]
        },
        {
            'name': 'itemdoubletap',
            'parameters': [
                'yearpicker',
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
                'yearpicker',
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
                'yearpicker',
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
                'yearpicker',
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
                'yearpicker',
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
                'yearpicker',
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
                'yearpicker',
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
                'yearpicker',
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
                'yearpicker',
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
                'yearpicker',
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
                'yearpicker',
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
                'yearpicker',
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
                'yearpicker',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'maxheightchange',
            'parameters': [
                'yearpicker',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'maxwidthchange',
            'parameters': [
                'yearpicker',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'minheightchange',
            'parameters': [
                'yearpicker',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'minwidthchange',
            'parameters': [
                'yearpicker',
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
                'yearpicker',
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
                'yearpicker',
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
                'yearpicker',
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
                'yearpicker',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'scrollablechange',
            'parameters': [
                'yearpicker',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'select',
            'parameters': [
                'yearpicker',
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
                'yearpicker',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'tofront',
            'parameters': [
                'yearpicker',
                'eOpts'
            ]
        },
        {
            'name': 'topchange',
            'parameters': [
                'yearpicker',
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
    selector: 'xng-yearpicker',
    inputs: XngYearpickerComponentMetaData.INPUTNAMES,
    outputs: XngYearpickerComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngYearpickerComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngYearpickerComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngYearpickerComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
