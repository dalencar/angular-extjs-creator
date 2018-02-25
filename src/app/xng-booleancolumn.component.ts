import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.grid.column.Boolean
 */
export class XngBooleancolumnComponentMetaData {
    public static XTYPES: string[] = [
        'booleancolumn'
    ];
    public static INPUTNAMES: string[] = [
        'activeItem',
        'activeItemIndex',
        'align',
        'alwaysOnTop',
        'autoDestroy',
        'autoSize',
        'axisLock',
        'bottom',
        'cardSwitchAnimation',
        'cell',
        'centered',
        'columns',
        'computedWidth',
        'constrainAlign',
        'contentEl',
        'control',
        'data',
        'dataIndex',
        'defaultColumnUI',
        'defaultEditor',
        'defaultFocus',
        'defaultToolWeights',
        'defaultType',
        'defaultWidth',
        'defaults',
        'depends',
        'displayed',
        'docked',
        'draggable',
        'editable',
        'editor',
        'emptyText',
        'enterAnimation',
        'exitAnimation',
        'exportRenderer',
        'exportStyle',
        'exportSummaryRenderer',
        'falseText',
        'flex',
        'floated',
        'formatter',
        'fullscreen',
        'grid',
        'groupHeaderTpl',
        'groupable',
        'grouper',
        'hideAnimation',
        'hideOnMaskTap',
        'hideShowMenuItem',
        'hideable',
        'html',
        'id',
        'ignore',
        'ignoreExport',
        'innerCls',
        'itemId',
        'items',
        'layout',
        'left',
        'manageBorders',
        'margin',
        'masked',
        'maxHeight',
        'maxWidth',
        'menu',
        'menuDisabled',
        'minHeight',
        'minWidth',
        'modal',
        'modelValidation',
        'padding',
        'record',
        'relative',
        'renderer',
        'reserveScrollbar',
        'resizable',
        'right',
        'scope',
        'scratchCell',
        'scrollable',
        'selfAlign',
        'shadow',
        'shim',
        'showAnimation',
        'sortable',
        'sorter',
        'summary',
        'summaryCell',
        'summaryDataIndex',
        'summaryFormatter',
        'summaryRenderer',
        'summaryType',
        'tabIndex',
        'text',
        'toFrontOnShow',
        'toolDefaults',
        'tools',
        'tooltip',
        'top',
        'tpl',
        'tplWriteMode',
        'translatable',
        'trueText',
        'undefinedText',
        'userSelectable',
        'verticalOverflow',
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
        'add',
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeshow',
        'beforetofront',
        'bottomchange',
        'centeredchange',
        'deactivate',
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
        'move',
        'moved',
        'orientationchange',
        'painted',
        'positionedchange',
        'remove',
        'removed',
        'renderedchange',
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
            'name': 'activate',
            'parameters': [
                'newActiveItem',
                'booleancolumn',
                'oldActiveItem',
                'eOpts'
            ]
        },
        {
            'name': 'activeitemchange',
            'parameters': [
                'booleancolumn',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'add',
            'parameters': [
                'booleancolumn',
                'item',
                'index',
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
                'booleancolumn',
                'eOpts'
            ]
        },
        {
            'name': 'bottomchange',
            'parameters': [
                'booleancolumn',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'centeredchange',
            'parameters': [
                'booleancolumn',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'deactivate',
            'parameters': [
                'oldActiveItem',
                'booleancolumn',
                'newActiveItem',
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
                'booleancolumn',
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
                'booleancolumn',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'maxheightchange',
            'parameters': [
                'booleancolumn',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'maxwidthchange',
            'parameters': [
                'booleancolumn',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'minheightchange',
            'parameters': [
                'booleancolumn',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'minwidthchange',
            'parameters': [
                'booleancolumn',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'move',
            'parameters': [
                'booleancolumn',
                'item',
                'toIndex',
                'fromIndex',
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
            'name': 'remove',
            'parameters': [
                'booleancolumn',
                'item',
                'index',
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
                'booleancolumn',
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
                'booleancolumn',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'scrollablechange',
            'parameters': [
                'booleancolumn',
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
                'booleancolumn',
                'eOpts'
            ]
        },
        {
            'name': 'topchange',
            'parameters': [
                'booleancolumn',
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
    selector: 'xng-booleancolumn',
    inputs: XngBooleancolumnComponentMetaData.INPUTNAMES,
    outputs: XngBooleancolumnComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngBooleancolumnComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngBooleancolumnComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngBooleancolumnComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
