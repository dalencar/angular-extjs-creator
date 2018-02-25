import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.grid.cell.Date
 */
export class XngDatecellComponentMetaData {
    public static XTYPES: string[] = [
        'datecell'
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
        'encodeHtml',
        'flex',
        'floated',
        'format',
        'hidden',
        'id',
        'itemId',
        'rawValue',
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
                'datecell',
                'eOpts'
            ]
        },
        {
            'name': 'tofront',
            'parameters': [
                'datecell',
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
    selector: 'xng-datecell',
    inputs: XngDatecellComponentMetaData.INPUTNAMES,
    outputs: XngDatecellComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngDatecellComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngDatecellComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngDatecellComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
