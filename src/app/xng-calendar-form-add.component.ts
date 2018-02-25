import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.calendar.form.Add
 */
export class XngCalendarFormAddComponentMetaData {
    public static XTYPES: string[] = [
        'calendar-form-add'
    ];
    public static INPUTNAMES: string[] = [
        'defaultEndTime',
        'defaultStartTime',
        'event',
        'title',
        'view',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    public static OUTPUTNAMES: string[] = [
        'cancel',
        'drop',
        'save',
        'ready'
    ];
    public static OUTPUTS: any[] = [
        {
            'name': 'cancel',
            'parameters': [
                'calendar-form-add',
                'eOpts'
            ]
        },
        {
            'name': 'drop',
            'parameters': [
                'calendar-form-add',
                'eOpts'
            ]
        },
        {
            'name': 'save',
            'parameters': [
                'calendar-form-add',
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
    selector: 'xng-calendar-form-add',
    inputs: XngCalendarFormAddComponentMetaData.INPUTNAMES,
    outputs: XngCalendarFormAddComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngCalendarFormAddComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngCalendarFormAddComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngCalendarFormAddComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
