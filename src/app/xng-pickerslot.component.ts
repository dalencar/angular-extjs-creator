import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.picker.Slot
 */
export class XngPickerslotComponentMetaData {
    public static XTYPES: string[] = [
        'pickerslot'
    ];
    public static INPUTNAMES: string[] = [
        'activeItem',
        'activeItemIndex',
        'align',
        'alwaysOnTop',
        'associatedData',
        'autoDestroy',
        'autoSize',
        'axisLock',
        'bottom',
        'cardSwitchAnimation',
        'centered',
        'cls',
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
        'displayField',
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
        'name',
        'navigationModel',
        'padding',
        'pressedDelay',
        'publishes',
        'record',
        'relative',
        'right',
        'scrollDock',
        'scrollToTopOnRefresh',
        'selectable',
        'selected',
        'selection',
        'selfAlign',
        'shadow',
        'shim',
        'showAnimation',
        'showTitle',
        'store',
        'storeEventListeners',
        'tabIndex',
        'title',
        'toFrontOnShow',
        'tooltip',
        'top',
        'tpl',
        'tplWriteMode',
        'translatable',
        'triggerCtEvent',
        'userSelectable',
        'value',
        'valueField',
        'verticallyCenterItems',
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
        'slotpick',
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
                'pickerslot',
                'oldActiveItem',
                'eOpts'
            ]
        },
        {
            'name': 'activeitemchange',
            'parameters': [
                'pickerslot',
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
                'pickerslot',
                'eOpts'
            ]
        },
        {
            'name': 'bottomchange',
            'parameters': [
                'pickerslot',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'centeredchange',
            'parameters': [
                'pickerslot',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'childdoubletap',
            'parameters': [
                'pickerslot',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childlongpress',
            'parameters': [
                'pickerslot',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childmouseenter',
            'parameters': [
                'pickerslot',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childmouseleave',
            'parameters': [
                'pickerslot',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childsingletap',
            'parameters': [
                'pickerslot',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childtap',
            'parameters': [
                'pickerslot',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childtaphold',
            'parameters': [
                'pickerslot',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childtouchcancel',
            'parameters': [
                'pickerslot',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childtouchend',
            'parameters': [
                'pickerslot',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childtouchmove',
            'parameters': [
                'pickerslot',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'childtouchstart',
            'parameters': [
                'pickerslot',
                'location',
                'eOpts'
            ]
        },
        {
            'name': 'deactivate',
            'parameters': [
                'oldActiveItem',
                'pickerslot',
                'newActiveItem',
                'eOpts'
            ]
        },
        {
            'name': 'deselect',
            'parameters': [
                'pickerslot',
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
                'pickerslot',
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
                'pickerslot',
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
                'pickerslot',
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
                'pickerslot',
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
                'pickerslot',
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
                'pickerslot',
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
                'pickerslot',
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
                'pickerslot',
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
                'pickerslot',
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
                'pickerslot',
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
                'pickerslot',
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
                'pickerslot',
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
                'pickerslot',
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
                'pickerslot',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'maxheightchange',
            'parameters': [
                'pickerslot',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'maxwidthchange',
            'parameters': [
                'pickerslot',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'minheightchange',
            'parameters': [
                'pickerslot',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'minwidthchange',
            'parameters': [
                'pickerslot',
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
                'pickerslot',
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
                'pickerslot',
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
                'pickerslot',
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
                'pickerslot',
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
                'pickerslot',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'select',
            'parameters': [
                'pickerslot',
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
            'name': 'slotpick',
            'parameters': [
                'pickerslot',
                'value',
                'node',
                'eOpts'
            ]
        },
        {
            'name': 'storechange',
            'parameters': [
                'pickerslot',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'tofront',
            'parameters': [
                'pickerslot',
                'eOpts'
            ]
        },
        {
            'name': 'topchange',
            'parameters': [
                'pickerslot',
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
    selector: 'xng-pickerslot',
    inputs: XngPickerslotComponentMetaData.INPUTNAMES,
    outputs: XngPickerslotComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngPickerslotComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngPickerslotComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngPickerslotComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
