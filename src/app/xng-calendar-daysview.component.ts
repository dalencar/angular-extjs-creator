import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.calendar.view.Days
 */
export class XngCalendarDaysviewComponentMetaData {
    public static XTYPES: string[] = [
        'calendar-daysview'
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
                'calendar-daysview',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'beforeeventdragstart',
            'parameters': [
                'calendar-daysview',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'beforeeventedit',
            'parameters': [
                'calendar-daysview',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'beforeeventresizestart',
            'parameters': [
                'calendar-daysview',
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
                'calendar-daysview',
                'eOpts'
            ]
        },
        {
            'name': 'bottomchange',
            'parameters': [
                'calendar-daysview',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'centeredchange',
            'parameters': [
                'calendar-daysview',
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
                'calendar-daysview',
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
                'calendar-daysview',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'eventdrop',
            'parameters': [
                'calendar-daysview',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'eventedit',
            'parameters': [
                'calendar-daysview',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'eventresize',
            'parameters': [
                'calendar-daysview',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'eventtap',
            'parameters': [
                'calendar-daysview',
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
                'calendar-daysview',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'maxheightchange',
            'parameters': [
                'calendar-daysview',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'maxwidthchange',
            'parameters': [
                'calendar-daysview',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'minheightchange',
            'parameters': [
                'calendar-daysview',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'minwidthchange',
            'parameters': [
                'calendar-daysview',
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
                'calendar-daysview',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'scrollablechange',
            'parameters': [
                'calendar-daysview',
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
                'calendar-daysview',
                'eOpts'
            ]
        },
        {
            'name': 'topchange',
            'parameters': [
                'calendar-daysview',
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
                'calendar-daysview',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'validateeventdrop',
            'parameters': [
                'calendar-daysview',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'validateeventedit',
            'parameters': [
                'calendar-daysview',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'validateeventresize',
            'parameters': [
                'calendar-daysview',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'valuechange',
            'parameters': [
                'calendar-daysview',
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
    selector: 'xng-calendar-daysview',
    inputs: XngCalendarDaysviewComponentMetaData.INPUTNAMES,
    outputs: XngCalendarDaysviewComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngCalendarDaysviewComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngCalendarDaysviewComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngCalendarDaysviewComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
