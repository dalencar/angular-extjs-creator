import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.calendar.panel.Panel
 */
export class XngCalendarComponentMetaData {
    public static XTYPES: string[] = [
        'calendar'
    ];
    public static INPUTNAMES: string[] = [
        'calendarList',
        'compact',
        'compactOptions',
        'createButton',
        'createButtonPosition',
        'dateTitle',
        'nextButton',
        'previousButton',
        'sideBar',
        'store',
        'switcher',
        'switcherPosition',
        'timezoneOffset',
        'titleBar',
        'todayButton',
        'value',
        'views',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    public static OUTPUTNAMES: string[] = [
        'ready'
    ];
    public static OUTPUTS: any[] = [
        {
            'name': 'ready',
            'parameters': []
        }
    ];
}
@Component({
    selector: 'xng-calendar',
    inputs: XngCalendarComponentMetaData.INPUTNAMES,
    outputs: XngCalendarComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngCalendarComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngCalendarComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngCalendarComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
