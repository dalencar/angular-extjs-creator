import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.Editor
 */
export class XngEditorComponentMetaData {
    public static XTYPES: string[] = [
        'editor'
    ];
    public static INPUTNAMES: string[] = [
        'activeItem',
        'activeItemIndex',
        'alignment',
        'allowBlur',
        'alwaysOnTop',
        'autoDestroy',
        'autoSize',
        'axisLock',
        'bottom',
        'cancelOnClear',
        'cancelOnEsc',
        'cardSwitchAnimation',
        'centered',
        'completeOnEnter',
        'constrain',
        'constrainAlign',
        'contentEl',
        'control',
        'data',
        'defaultFocus',
        'defaultType',
        'defaults',
        'displayed',
        'docked',
        'draggable',
        'enterAnimation',
        'exitAnimation',
        'field',
        'flex',
        'floated',
        'fullscreen',
        'hideAnimation',
        'hideEl',
        'hideOnMaskTap',
        'html',
        'id',
        'ignoreNoChange',
        'innerCls',
        'itemId',
        'items',
        'layout',
        'left',
        'manageBorders',
        'margin',
        'masked',
        'matchFont',
        'maxHeight',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
        'modelValidation',
        'offset',
        'padding',
        'parentEl',
        'record',
        'relative',
        'revertInvalid',
        'right',
        'scrollable',
        'selfAlign',
        'shadow',
        'shim',
        'showAnimation',
        'swallowKeys',
        'tabIndex',
        'toFrontOnShow',
        'tooltip',
        'top',
        'tpl',
        'tplWriteMode',
        'translatable',
        'updateEl',
        'userSelectable',
        'value',
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
        'beforecomplete',
        'beforehide',
        'beforeorientationchange',
        'beforeshow',
        'beforestartedit',
        'beforetofront',
        'bottomchange',
        'canceledit',
        'centeredchange',
        'complete',
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
        'specialkey',
        'startedit',
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
                'editor',
                'oldActiveItem',
                'eOpts'
            ]
        },
        {
            'name': 'activeitemchange',
            'parameters': [
                'editor',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'add',
            'parameters': [
                'editor',
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
            'name': 'beforecomplete',
            'parameters': [
                'editor',
                'value',
                'startValue',
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
            'name': 'beforestartedit',
            'parameters': [
                'editor',
                'boundEl',
                'value',
                'eOpts'
            ]
        },
        {
            'name': 'beforetofront',
            'parameters': [
                'editor',
                'eOpts'
            ]
        },
        {
            'name': 'bottomchange',
            'parameters': [
                'editor',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'canceledit',
            'parameters': [
                'editor',
                'value',
                'startValue',
                'eOpts'
            ]
        },
        {
            'name': 'centeredchange',
            'parameters': [
                'editor',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'complete',
            'parameters': [
                'editor',
                'value',
                'startValue',
                'eOpts'
            ]
        },
        {
            'name': 'deactivate',
            'parameters': [
                'oldActiveItem',
                'editor',
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
                'editor',
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
                'editor',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'maxheightchange',
            'parameters': [
                'editor',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'maxwidthchange',
            'parameters': [
                'editor',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'minheightchange',
            'parameters': [
                'editor',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'minwidthchange',
            'parameters': [
                'editor',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'move',
            'parameters': [
                'editor',
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
                'editor',
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
                'editor',
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
                'editor',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'scrollablechange',
            'parameters': [
                'editor',
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
            'name': 'specialkey',
            'parameters': [
                'editor',
                'field',
                'event',
                'eOpts'
            ]
        },
        {
            'name': 'startedit',
            'parameters': [
                'editor',
                'boundEl',
                'value',
                'eOpts'
            ]
        },
        {
            'name': 'tofront',
            'parameters': [
                'editor',
                'eOpts'
            ]
        },
        {
            'name': 'topchange',
            'parameters': [
                'editor',
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
    selector: 'xng-editor',
    inputs: XngEditorComponentMetaData.INPUTNAMES,
    outputs: XngEditorComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngEditorComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngEditorComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngEditorComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
