import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.pivot.plugin.configurator.Column
 */
export class XngPivotconfigfieldComponentMetaData {
    public static XTYPES: string[] = [
        'pivotconfigfield'
    ];
    public static INPUTNAMES: string[] = [
        'dataMap',
        'defaultToolWeights',
        'deleteCmp',
        'itemCls',
        'moveCmp',
        'pinned',
        'sortCmp',
        'toolDefaults',
        'tools',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    public static OUTPUTNAMES: string[] = [
        'updatedata',
        'ready'
    ];
    public static OUTPUTS: any[] = [
        {
            'name': 'updatedata',
            'parameters': [
                'dataItem',
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
    selector: 'xng-pivotconfigfield',
    inputs: XngPivotconfigfieldComponentMetaData.INPUTNAMES,
    outputs: XngPivotconfigfieldComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngPivotconfigfieldComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngPivotconfigfieldComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngPivotconfigfieldComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
