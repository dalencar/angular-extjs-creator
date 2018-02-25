import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.pivot.cell.Group
 */
export class XngPivotgridgroupcellComponentMetaData {
    public static XTYPES: string[] = [
        'pivotgridgroupcell'
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
        'innerGroupCls',
        'innerGroupStyle',
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
        'userGroupCls',
        'userGroupStyle',
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
                'pivotgridgroupcell',
                'eOpts'
            ]
        },
        {
            'name': 'tofront',
            'parameters': [
                'pivotgridgroupcell',
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
    selector: 'xng-pivotgridgroupcell',
    inputs: XngPivotgridgroupcellComponentMetaData.INPUTNAMES,
    outputs: XngPivotgridgroupcellComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngPivotgridgroupcellComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngPivotgridgroupcellComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngPivotgridgroupcellComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
