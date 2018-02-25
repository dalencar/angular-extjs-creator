import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.calendar.view.Week
 */
export class XngCalendarWeekviewComponentMetaData {
    public static XTYPES: string[] = [
        'calendar-weekview'
    ];
    public static INPUTNAMES: string[] = [
        'addForm',
        'allowSelection',
        'alwaysOnTop',
        'axisLock',
        'bottom',
        'centered',
        'compact',
        'compactOptions',
        'constrainAlign',
        'contentEl',
        'controlStoreRange',
        'data',
        'displayOverlap',
        'displayed',
        'docked',
        'draggable',
        'droppable',
        'editForm',
        'endTime',
        'enterAnimation',
        'eventDefaults',
        'exitAnimation',
        'firstDayOfWeek',
        'flex',
        'floated',
        'fullscreen',
        'gestureNavigation',
        'header',
        'hideAnimation',
        'hideOnMaskTap',
        'html',
        'id',
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
        'record',
        'relative',
        'resizeEvents',
        'right',
        'scrollable',
        'selfAlign',
        'shadow',
        'shim',
        'showAnimation',
        'showNowMarker',
        'startTime',
        'store',
        'tabIndex',
        'timeFormat',
        'timeRenderer',
        'timezoneOffset',
        'toFrontOnShow',
        'tooltip',
        'top',
        'tpl',
        'tplWriteMode',
        'translatable',
        'userSelectable',
        'value',
        'visibleDays',
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
        'beforeeventadd',
        'beforeeventdragstart',
        'beforeeventedit',
        'beforeeventresizestart',
        'beforehide',
        'beforeorientationchange',
        'beforeshow',
        'beforetofront',
        'bottomchange',
        'centeredchange',
        'destroy',
        'dockedchange',
        'erased',
        'eventadd',
        'eventdrop',
        'eventedit',
        'eventresize',
        'eventtap',
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
        'validateeventadd',
        'validateeventdrop',
        'validateeventedit',
        'validateeventresize',
        'valuechange',
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
            'name': 'beforeeventadd',
            'parameters': [
                'calendar-weekview',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'beforeeventdragstart',
            'parameters': [
                'calendar-weekview',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'beforeeventedit',
            'parameters': [
                'calendar-weekview',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'beforeeventresizestart',
            'parameters': [
                'calendar-weekview',
                'context',
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
                'calendar-weekview',
                'eOpts'
            ]
        },
        {
            'name': 'bottomchange',
            'parameters': [
                'calendar-weekview',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'centeredchange',
            'parameters': [
                'calendar-weekview',
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
                'calendar-weekview',
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
            'name': 'eventadd',
            'parameters': [
                'calendar-weekview',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'eventdrop',
            'parameters': [
                'calendar-weekview',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'eventedit',
            'parameters': [
                'calendar-weekview',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'eventresize',
            'parameters': [
                'calendar-weekview',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'eventtap',
            'parameters': [
                'calendar-weekview',
                'context',
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
                'calendar-weekview',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'maxheightchange',
            'parameters': [
                'calendar-weekview',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'maxwidthchange',
            'parameters': [
                'calendar-weekview',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'minheightchange',
            'parameters': [
                'calendar-weekview',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'minwidthchange',
            'parameters': [
                'calendar-weekview',
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
                'calendar-weekview',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'scrollablechange',
            'parameters': [
                'calendar-weekview',
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
                'calendar-weekview',
                'eOpts'
            ]
        },
        {
            'name': 'topchange',
            'parameters': [
                'calendar-weekview',
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
            'name': 'validateeventadd',
            'parameters': [
                'calendar-weekview',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'validateeventdrop',
            'parameters': [
                'calendar-weekview',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'validateeventedit',
            'parameters': [
                'calendar-weekview',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'validateeventresize',
            'parameters': [
                'calendar-weekview',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'valuechange',
            'parameters': [
                'calendar-weekview',
                'context',
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
    selector: 'xng-calendar-weekview',
    inputs: XngCalendarWeekviewComponentMetaData.INPUTNAMES,
    outputs: XngCalendarWeekviewComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngCalendarWeekviewComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngCalendarWeekviewComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngCalendarWeekviewComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
