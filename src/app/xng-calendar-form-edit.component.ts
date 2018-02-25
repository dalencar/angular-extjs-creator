import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.calendar.form.Edit
 */
export class XngCalendarFormEditComponentMetaData {
    public static XTYPES: string[] = [
        'calendar-form-edit'
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
                'calendar-form-edit',
                'eOpts'
            ]
        },
        {
            'name': 'drop',
            'parameters': [
                'calendar-form-edit',
                'eOpts'
            ]
        },
        {
            'name': 'save',
            'parameters': [
                'calendar-form-edit',
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
    selector: 'xng-calendar-form-edit',
    inputs: XngCalendarFormEditComponentMetaData.INPUTNAMES,
    outputs: XngCalendarFormEditComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngCalendarFormEditComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngCalendarFormEditComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngCalendarFormEditComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
