import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext
 */
export class XngComponentMetaData {
    public static XTYPES: string[] = [
        ''
    ];
    public static INPUTNAMES: string[] = [
        'xtype',
        'fittoparent',
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
    selector: 'xng',
    inputs: XngComponentMetaData.INPUTNAMES,
    outputs: XngComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
