import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.grid.Row
 */
export class XngGridrowComponentMetaData {
    public static XTYPES: string[] = [
        'gridrow'
    ];
    public static INPUTNAMES: string[] = [
        'alwaysOnTop',
        'axisLock',
        'body',
        'bottom',
        'centered',
        'collapsed',
        'constrainAlign',
        'contentCls',
        'contentEl',
        'data',
        'defaultCellUI',
        'displayed',
        'docked',
        'draggable',
        'enterAnimation',
        'exitAnimation',
        'expandedField',
        'flex',
        'floated',
        'fullscreen',
        'hideAnimation',
        'hideOnMaskTap',
        'html',
        'id',
        'innerCls',
        'itemId',
        'left',
        'margin',
        'maxHeight',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
        'modelValidation',
        'padding',
        'pinned',
        'record',
        'recordIndex',
        'relative',
        'right',
        'scrollable',
        'selfAlign',
        'shadow',
        'shim',
        'showAnimation',
        'stickyVisibility',
        'tabIndex',
        'toFrontOnShow',
        'tooltip',
        'top',
        'tpl',
        'tplWriteMode',
        'translatable',
        'userSelectable',
        'weight',
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
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeshow',
        'beforetofront',
        'bottomchange',
        'centeredchange',
        'destroy',
        'dockedchange',
        'erased',
        'floatingchange',
        'fullscreen',
        'hide',
        'initialize',
        'leftchange',
        'maxheightchange',
        'maxwidthchange',
        'minheightchange',
        'minwidthchange',
        'moved',
        'orientationchange',
        'painted',
        'positionedchange',
        'removed',
        'resize',
        'rightchange',
        'scrollablechange',
        'show',
        'tofront',
        'topchange',
        'updatedata',
        'ready'
    ];
    public static OUTPUTS: any[] = [
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
                'gridrow',
                'eOpts'
            ]
        },
        {
            'name': 'bottomchange',
            'parameters': [
                'gridrow',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'centeredchange',
            'parameters': [
                'gridrow',
                'value',
                'oldValue',
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
                'gridrow',
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
            'name': 'leftchange',
            'parameters': [
                'gridrow',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'maxheightchange',
            'parameters': [
                'gridrow',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'maxwidthchange',
            'parameters': [
                'gridrow',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'minheightchange',
            'parameters': [
                'gridrow',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'minwidthchange',
            'parameters': [
                'gridrow',
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
            'name': 'removed',
            'parameters': [
                'sender',
                'container',
                'index',
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
                'gridrow',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'scrollablechange',
            'parameters': [
                'gridrow',
                'value',
                'oldValue',
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
            'name': 'tofront',
            'parameters': [
                'gridrow',
                'eOpts'
            ]
        },
        {
            'name': 'topchange',
            'parameters': [
                'gridrow',
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
    selector: 'xng-gridrow',
    inputs: XngGridrowComponentMetaData.INPUTNAMES,
    outputs: XngGridrowComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngGridrowComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngGridrowComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngGridrowComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
