import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.calendar.panel.Day
 */
export class XngCalendarDayComponentMetaData {
    public static XTYPES: string[] = [
        'calendar-day'
    ];
    public static INPUTNAMES: string[] = [
        'configExtractor',
        'dayHeader',
        'eventRelayers',
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
                'calendar-day',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'beforeeventdragstart',
            'parameters': [
                'calendar-day',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'beforeeventedit',
            'parameters': [
                'calendar-day',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'beforeeventresizestart',
            'parameters': [
                'calendar-day',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'eventadd',
            'parameters': [
                'calendar-day',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'eventdrop',
            'parameters': [
                'calendar-day',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'eventedit',
            'parameters': [
                'calendar-day',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'eventresize',
            'parameters': [
                'calendar-day',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'eventtap',
            'parameters': [
                'calendar-day',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'validateeventadd',
            'parameters': [
                'calendar-day',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'validateeventdrop',
            'parameters': [
                'calendar-day',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'validateeventedit',
            'parameters': [
                'calendar-day',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'validateeventresize',
            'parameters': [
                'calendar-day',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'valuechange',
            'parameters': [
                'calendar-day',
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
    selector: 'xng-calendar-day',
    inputs: XngCalendarDayComponentMetaData.INPUTNAMES,
    outputs: XngCalendarDayComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngCalendarDayComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngCalendarDayComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngCalendarDayComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
