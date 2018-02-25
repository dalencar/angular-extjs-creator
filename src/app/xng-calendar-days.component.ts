import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.calendar.panel.Days
 */
export class XngCalendarDaysComponentMetaData {
    public static XTYPES: string[] = [
        'calendar-days'
    ];
    public static INPUTNAMES: string[] = [
        'configExtractor',
        'dayHeader',
        'eventRelayers',
        'view',
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
                'calendar-days',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'beforeeventdragstart',
            'parameters': [
                'calendar-days',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'beforeeventedit',
            'parameters': [
                'calendar-days',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'beforeeventresizestart',
            'parameters': [
                'calendar-days',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'eventadd',
            'parameters': [
                'calendar-days',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'eventdrop',
            'parameters': [
                'calendar-days',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'eventedit',
            'parameters': [
                'calendar-days',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'eventresize',
            'parameters': [
                'calendar-days',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'eventtap',
            'parameters': [
                'calendar-days',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'validateeventadd',
            'parameters': [
                'calendar-days',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'validateeventdrop',
            'parameters': [
                'calendar-days',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'validateeventedit',
            'parameters': [
                'calendar-days',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'validateeventresize',
            'parameters': [
                'calendar-days',
                'context',
                'eOpts'
            ]
        },
        {
            'name': 'valuechange',
            'parameters': [
                'calendar-days',
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
    selector: 'xng-calendar-days',
    inputs: XngCalendarDaysComponentMetaData.INPUTNAMES,
    outputs: XngCalendarDaysComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngCalendarDaysComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngCalendarDaysComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngCalendarDaysComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
