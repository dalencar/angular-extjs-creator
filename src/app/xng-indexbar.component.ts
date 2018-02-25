import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.dataview.IndexBar
 */
export class XngIndexbarComponentMetaData {
    public static XTYPES: string[] = [
        'indexbar'
    ];
    public static INPUTNAMES: string[] = [
        'alwaysOnTop',
        'animation',
        'autoHide',
        'axisLock',
        'bottom',
        'centered',
        'constrainAlign',
        'contentEl',
        'data',
        'direction',
        'displayed',
        'docked',
        'draggable',
        'dynamic',
        'enterAnimation',
        'exitAnimation',
        'flex',
        'floated',
        'fullscreen',
        'hideAnimation',
        'hideOnMaskTap',
        'html',
        'id',
        'indicator',
        'itemId',
        'left',
        'letters',
        'listPrefix',
        'margin',
        'maxHeight',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
        'modelValidation',
        'padding',
        'record',
        'relative',
        'right',
        'scrollable',
        'selfAlign',
        'shadow',
        'shim',
        'showAnimation',
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
        'directionchange',
        'dockedchange',
        'erased',
        'floatingchange',
        'fullscreen',
        'hide',
        'index',
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
                'indexbar',
                'eOpts'
            ]
        },
        {
            'name': 'bottomchange',
            'parameters': [
                'indexbar',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'centeredchange',
            'parameters': [
                'indexbar',
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
            'name': 'directionchange',
            'parameters': [
                'indexbar',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'dockedchange',
            'parameters': [
                'indexbar',
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
            'name': 'index',
            'parameters': [
                'indexbar',
                'html',
                'target',
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
                'indexbar',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'maxheightchange',
            'parameters': [
                'indexbar',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'maxwidthchange',
            'parameters': [
                'indexbar',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'minheightchange',
            'parameters': [
                'indexbar',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'minwidthchange',
            'parameters': [
                'indexbar',
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
                'indexbar',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'scrollablechange',
            'parameters': [
                'indexbar',
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
                'indexbar',
                'eOpts'
            ]
        },
        {
            'name': 'topchange',
            'parameters': [
                'indexbar',
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
    selector: 'xng-indexbar',
    inputs: XngIndexbarComponentMetaData.INPUTNAMES,
    outputs: XngIndexbarComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngIndexbarComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngIndexbarComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngIndexbarComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
