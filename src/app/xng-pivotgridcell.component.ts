import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.pivot.cell.Cell
 */
export class XngPivotgridcellComponentMetaData {
    public static XTYPES: string[] = [
        'pivotgridcell'
    ];
    public static INPUTNAMES: string[] = [
        'align',
        'alwaysOnTop',
        'bodyCls',
        'bodyStyle',
        'cellCls',
        'cls',
        'collapsible',
        'column',
        'constrainAlign',
        'defaultToolWeights',
        'encodeHtml',
        'eventCell',
        'flex',
        'floated',
        'formatter',
        'hidden',
        'id',
        'itemId',
        'rawValue',
        'record',
        'relative',
        'renderer',
        'scope',
        'selectable',
        'selfAlign',
        'shadow',
        'shim',
        'toFrontOnShow',
        'toolDefaults',
        'tools',
        'tpl',
        'translatable',
        'value',
        'x',
        'y',
        'zeroValue',
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
                'pivotgridcell',
                'eOpts'
            ]
        },
        {
            'name': 'tofront',
            'parameters': [
                'pivotgridcell',
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
    selector: 'xng-pivotgridcell',
    inputs: XngPivotgridcellComponentMetaData.INPUTNAMES,
    outputs: XngPivotgridcellComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngPivotgridcellComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngPivotgridcellComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngPivotgridcellComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
