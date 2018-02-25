import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.pivot.Grid
 */
export class XngPivotgridComponentMetaData {
    public static XTYPES: string[] = [
        'pivotgrid'
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
        'clsGrandTotal',
        'clsGroupTotal',
        'columnLines',
        'columnMenu',
        'columnResize',
        'columns',
        'columnsMenuItem',
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
        'enableColumnSort',
        'enableLoadMask',
        'enableTextSelection',
        'enterAnimation',
        'exitAnimation',
        'flex',
        'floated',
        'fullscreen',
        'groupFooter',
        'groupHeader',
        'grouped',
        'headerContainer',
        'hideAnimation',
        'hideHeaders',
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
        'layout',
        'left',
        'leftAxisCellConfig',
        'loadingHeight',
        'loadingText',
        'maintainChildNodes',
        'manageBorders',
        'margin',
        'markDirty',
        'masked',
        'matrix',
        'maxHeight',
        'maxItemCache',
        'maxWidth',
        'minHeight',
        'minWidth',
        'minimumBufferDistance',
        'modal',
        'modelValidation',
        'multiColumnSort',
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
        'relative',
        'reserveScrollbar',
        'right',
        'rowLines',
        'rowNumbers',
        'scrollDock',
        'scrollToTopOnRefresh',
        'scrollable',
        'selectable',
        'selection',
        'selfAlign',
        'shadow',
        'shim',
        'showAnimation',
        'sortable',
        'startColGroupsCollapsed',
        'startRowGroupsCollapsed',
        'store',
        'storeEventListeners',
        'striped',
        'tabIndex',
        'title',
        'titleBar',
        'toFrontOnShow',
        'tooltip',
        'top',
        'topAxisCellConfig',
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
        'beforeselectionextend',
        'beforeshow',
        'beforetofront',
        'bottomchange',
        'cellselection',
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
        'columnadd',
        'columnhide',
        'columnmenucreated',
        'columnmove',
        'columnremove',
        'columnresize',
        'columnselection',
        'columnshow',
        'columnsort',
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
        'pivotbeforereconfigure',
        'pivotbeforerequest',
        'pivotbuildtotals',
        'pivotcolumnsbuilt',
        'pivotdone',
        'pivotgroupcelldoubletap',
        'pivotgroupcelltap',
        'pivotgroupcelltaphold',
        'pivotgroupcollapse',
        'pivotgroupdoubletap',
        'pivotgroupexpand',
        'pivotgrouptap',
        'pivotgrouptaphold',
        'pivotitemcelldoubletap',
        'pivotitemcelltap',
        'pivotitemcelltaphold',
        'pivotitemdoubletap',
        'pivotitemtap',
        'pivotitemtaphold',
        'pivotmodelbuilt',
        'pivotprogress',
        'pivotreconfigure',
        'pivotrecordbuilt',
        'pivotrequestexception',
        'pivotstart',
        'pivotstorebuilt',
        'pivottotalcelldoubletap',
        'pivottotalcelltap',
        'pivottotalcelltaphold',
        'pivottotaldoubletap',
        'pivottotaltap',
        'pivottotaltaphold',
        'positionedchange',
        'refresh',
        'removed',
        'renderedchange',
        'resize',
        'rightchange',
        'scrollablechange',
        'select',
        'selectionextenderdrag',
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
                'pivotgrid',
                'oldActiveItem',
                'eOpts'
            ]
        },
        {
            'name': 'activeitemchange',
            'parameters': [
                'pivotgrid',
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
            'name': 'beforeselectionextend',
            'parameters': [
                'grid',
                'An',
                'extension',
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
                'pivotgrid',
                'eOpts'
            ]
        },
        {
            'name': 'bottomchange',
            'parameters': [
                'pivotgrid',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'cellselection',
            'parameters': [
                'grid',
                'selection',
                'eOpts'
            ]
        },
        {
            'name': 'centeredchange',
            'parameters': [
                'pivotgrid',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'childdoubletap',
            'parameters': [
                'pivotgrid',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childlongpress',
            'parameters': [
                'pivotgrid',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childmouseenter',
            'parameters': [
                'pivotgrid',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childmouseleave',
            'parameters': [
                'pivotgrid',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childsingletap',
            'parameters': [
                'pivotgrid',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childtap',
            'parameters': [
                'pivotgrid',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childtaphold',
            'parameters': [
                'pivotgrid',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childtouchcancel',
            'parameters': [
                'pivotgrid',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childtouchend',
            'parameters': [
                'pivotgrid',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childtouchmove',
            'parameters': [
                'pivotgrid',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childtouchstart',
            'parameters': [
                'pivotgrid',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'columnadd',
            'parameters': [
                'pivotgrid',
                'column',
                'index',
                'eOpts'
            ]
        },
        {
            'name': 'columnhide',
            'parameters': [
                'pivotgrid',
                'column',
                'eOpts'
            ]
        },
        {
            'name': 'columnmenucreated',
            'parameters': [
                'grid',
                'column',
                'menu',
                'eOpts'
            ]
        },
        {
            'name': 'columnmove',
            'parameters': [
                'pivotgrid',
                'column',
                'fromIndex',
                'toIndex',
                'eOpts'
            ]
        },
        {
            'name': 'columnremove',
            'parameters': [
                'pivotgrid',
                'column',
                'eOpts'
            ]
        },
        {
            'name': 'columnresize',
            'parameters': [
                'pivotgrid',
                'column',
                'width',
                'eOpts'
            ]
        },
        {
            'name': 'columnselection',
            'parameters': [
                'grid',
                'selection',
                'eOpts'
            ]
        },
        {
            'name': 'columnshow',
            'parameters': [
                'pivotgrid',
                'column',
                'eOpts'
            ]
        },
        {
            'name': 'columnsort',
            'parameters': [
                'pivotgrid',
                'column',
                'direction',
                'eOpts'
            ]
        },
        {
            'name': 'deactivate',
            'parameters': [
                'oldActiveItem',
                'pivotgrid',
                'newActiveItem',
                'eOpts'
            ]
        },
        {
            'name': 'deselect',
            'parameters': [
                'pivotgrid',
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
                'pivotgrid',
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
                'pivotgrid',
                'index',
                'record',
                'action',
                'eOpts'
            ]
        },
        {
            'name': 'itemdoubletap',
            'parameters': [
                'pivotgrid',
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
                'pivotgrid',
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
                'pivotgrid',
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
                'pivotgrid',
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
                'pivotgrid',
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
                'pivotgrid',
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
                'pivotgrid',
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
                'pivotgrid',
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
                'pivotgrid',
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
                'pivotgrid',
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
                'pivotgrid',
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
                'pivotgrid',
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
                'pivotgrid',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'maxheightchange',
            'parameters': [
                'pivotgrid',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'maxwidthchange',
            'parameters': [
                'pivotgrid',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'minheightchange',
            'parameters': [
                'pivotgrid',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'minwidthchange',
            'parameters': [
                'pivotgrid',
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
                'pivotgrid',
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
            'name': 'pivotbeforereconfigure',
            'parameters': [
                'matrix',
                'config',
                'eOpts'
            ]
        },
        {
            'name': 'pivotbeforerequest',
            'parameters': [
                'matrix',
                'params',
                'eOpts'
            ]
        },
        {
            'name': 'pivotbuildtotals',
            'parameters': [
                'matrix',
                'totals',
                'eOpts'
            ]
        },
        {
            'name': 'pivotcolumnsbuilt',
            'parameters': [
                'matrix',
                'columns',
                'eOpts'
            ]
        },
        {
            'name': 'pivotdone',
            'parameters': [
                'matrix',
                'eOpts'
            ]
        },
        {
            'name': 'pivotgroupcelldoubletap',
            'parameters': [
                'params',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'pivotgroupcelltap',
            'parameters': [
                'params',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'pivotgroupcelltaphold',
            'parameters': [
                'params',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'pivotgroupcollapse',
            'parameters': [
                'matrix',
                'type',
                'group',
                'eOpts'
            ]
        },
        {
            'name': 'pivotgroupdoubletap',
            'parameters': [
                'params',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'pivotgroupexpand',
            'parameters': [
                'matrix',
                'type',
                'group',
                'eOpts'
            ]
        },
        {
            'name': 'pivotgrouptap',
            'parameters': [
                'params',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'pivotgrouptaphold',
            'parameters': [
                'params',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'pivotitemcelldoubletap',
            'parameters': [
                'params',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'pivotitemcelltap',
            'parameters': [
                'params',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'pivotitemcelltaphold',
            'parameters': [
                'params',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'pivotitemdoubletap',
            'parameters': [
                'params',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'pivotitemtap',
            'parameters': [
                'params',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'pivotitemtaphold',
            'parameters': [
                'params',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'pivotmodelbuilt',
            'parameters': [
                'matrix',
                'model',
                'eOpts'
            ]
        },
        {
            'name': 'pivotprogress',
            'parameters': [
                'matrix',
                'index',
                'total',
                'eOpts'
            ]
        },
        {
            'name': 'pivotreconfigure',
            'parameters': [
                'matrix',
                'config',
                'eOpts'
            ]
        },
        {
            'name': 'pivotrecordbuilt',
            'parameters': [
                'matrix',
                'record',
                'eOpts'
            ]
        },
        {
            'name': 'pivotrequestexception',
            'parameters': [
                'matrix',
                'response',
                'eOpts'
            ]
        },
        {
            'name': 'pivotstart',
            'parameters': [
                'matrix',
                'eOpts'
            ]
        },
        {
            'name': 'pivotstorebuilt',
            'parameters': [
                'matrix',
                'store',
                'eOpts'
            ]
        },
        {
            'name': 'pivottotalcelldoubletap',
            'parameters': [
                'params',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'pivottotalcelltap',
            'parameters': [
                'params',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'pivottotalcelltaphold',
            'parameters': [
                'params',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'pivottotaldoubletap',
            'parameters': [
                'params',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'pivottotaltap',
            'parameters': [
                'params',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'pivottotaltaphold',
            'parameters': [
                'params',
                'e',
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
                'pivotgrid',
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
                'pivotgrid',
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
                'pivotgrid',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'scrollablechange',
            'parameters': [
                'pivotgrid',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'select',
            'parameters': [
                'pivotgrid',
                'selected',
                'eOpts'
            ]
        },
        {
            'name': 'selectionextenderdrag',
            'parameters': [
                'grid',
                'An',
                'extension',
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
                'pivotgrid',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'tofront',
            'parameters': [
                'pivotgrid',
                'eOpts'
            ]
        },
        {
            'name': 'topchange',
            'parameters': [
                'pivotgrid',
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
    selector: 'xng-pivotgrid',
    inputs: XngPivotgridComponentMetaData.INPUTNAMES,
    outputs: XngPivotgridComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngPivotgridComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngPivotgridComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngPivotgridComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
