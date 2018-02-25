import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.calendar.panel.Week
 */
export class XngCalendarWeekComponentMetaData {
    public static XTYPES: string[] = [
        'calendar-week'
    ];
    public static INPUTNAMES: string[] = [
        'configExtractor',
        'dayHeader',
        'eventRelayers',
        'firstDayOfWeek',
        'value',
        'view',
        'visibleDays',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    public static OUTPUTNAMES: string[] = [
        'beforeeventadd',
        'beforeeventdragstart',
        'beforeeventedit',
        'beforeeventresizestart',
        'eventadd',
        'eventdrop',
        'eventedit',
        'eventresize',
        'eventtap',
        'validateeventadd',
        'validateeventdrop',
        'validateeventedit',
        'validateeventresize',
        'valuechange',
        'ready'
    ];
    public static OUTPUTS: any[] = [
        {
            'name': 'beforeeventadd',
            'parameters': [
                'calendar-week',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'beforeeventdragstart',
            'parameters': [
                'calendar-week',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'beforeeventedit',
            'parameters': [
                'calendar-week',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'beforeeventresizestart',
            'parameters': [
                'calendar-week',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'eventadd',
            'parameters': [
                'calendar-week',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'eventdrop',
            'parameters': [
                'calendar-week',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'eventedit',
            'parameters': [
                'calendar-week',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'eventresize',
            'parameters': [
                'calendar-week',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'eventtap',
            'parameters': [
                'calendar-week',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'validateeventadd',
            'parameters': [
                'calendar-week',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'validateeventdrop',
            'parameters': [
                'calendar-week',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'validateeventedit',
            'parameters': [
                'calendar-week',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'validateeventresize',
            'parameters': [
                'calendar-week',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'valuechange',
            'parameters': [
                'calendar-week',
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
    selector: 'xng-calendar-week',
    inputs: XngCalendarWeekComponentMetaData.INPUTNAMES,
    outputs: XngCalendarWeekComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngCalendarWeekComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngCalendarWeekComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngCalendarWeekComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
