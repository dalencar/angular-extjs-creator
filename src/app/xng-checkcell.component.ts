import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.grid.cell.Check
 */
export class XngCheckcellComponentMetaData {
    public static XTYPES: string[] = [
        'checkcell'
    ];
    public static INPUTNAMES: string[] = [
        'align',
        'alwaysOnTop',
        'bodyCls',
        'bodyStyle',
        'cellCls',
        'cls',
        'column',
        'constrainAlign',
        'defaultToolWeights',
        'disabled',
        'flex',
        'floated',
        'hidden',
        'id',
        'itemId',
        'record',
        'relative',
        'selectable',
        'selfAlign',
        'shadow',
        'shim',
        'toFrontOnShow',
        'toolDefaults',
        'tools',
        'translatable',
        'value',
        'x',
        'y',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    public static OUTPUTNAMES: string[] = [
        'beforetofront',
        'tofront',
        'ready'
    ];
    public static OUTPUTS: any[] = [
        {
            'name': 'beforetofront',
            'parameters': [
                'checkcell',
                'eOpts'
            ]
        },
        {
            'name': 'tofront',
            'parameters': [
                'checkcell',
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
    selector: 'xng-checkcell',
    inputs: XngCheckcellComponentMetaData.INPUTNAMES,
    outputs: XngCheckcellComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngCheckcellComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngCheckcellComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngCheckcellComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
