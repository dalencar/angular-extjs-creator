import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.grid.cell.Boolean
 */
export class XngBooleancellComponentMetaData {
    public static XTYPES: string[] = [
        'booleancell'
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
        'falseText',
        'flex',
        'floated',
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
        'trueText',
        'undefinedText',
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
                'booleancell',
                'eOpts'
            ]
        },
        {
            'name': 'tofront',
            'parameters': [
                'booleancell',
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
    selector: 'xng-booleancell',
    inputs: XngBooleancellComponentMetaData.INPUTNAMES,
    outputs: XngBooleancellComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngBooleancellComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngBooleancellComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngBooleancellComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
