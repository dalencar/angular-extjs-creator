import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.carousel.Carousel
 */
export class XngCarouselComponentMetaData {
    public static XTYPES: string[] = [
        'carousel'
    ];
    public static INPUTNAMES: string[] = [
        'activeItem',
        'activeItemIndex',
        'alwaysOnTop',
        'animation',
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
        'direction',
        'displayed',
        'docked',
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
        'innerCls',
        'itemConfig',
        'itemId',
        'itemLength',
        'items',
        'layout',
        'left',
        'manageBorders',
        'margin',
        'masked',
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
        'ui',
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
                'carousel',
                'oldActiveItem',
                'eOpts'
            ]
        },
        {
            'name': 'activeitemchange',
            'parameters': [
                'carousel',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'add',
            'parameters': [
                'carousel',
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
                'carousel',
                'eOpts'
            ]
        },
        {
            'name': 'bottomchange',
            'parameters': [
                'carousel',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'centeredchange',
            'parameters': [
                'carousel',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'deactivate',
            'parameters': [
                'oldActiveItem',
                'carousel',
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
                'carousel',
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
                'carousel',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'maxheightchange',
            'parameters': [
                'carousel',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'maxwidthchange',
            'parameters': [
                'carousel',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'minheightchange',
            'parameters': [
                'carousel',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'minwidthchange',
            'parameters': [
                'carousel',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'move',
            'parameters': [
                'carousel',
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
                'carousel',
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
                'carousel',
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
                'carousel',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'scrollablechange',
            'parameters': [
                'carousel',
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
                'carousel',
                'eOpts'
            ]
        },
        {
            'name': 'topchange',
            'parameters': [
                'carousel',
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
    selector: 'xng-carousel',
    inputs: XngCarouselComponentMetaData.INPUTNAMES,
    outputs: XngCarouselComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngCarouselComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngCarouselComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngCarouselComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
