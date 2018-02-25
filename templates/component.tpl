import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {${classNameBase}} from './${fileNameBase}';

/**
 * @see ${extClassName}
 */
export class ${className}MetaData {
    public static XTYPES: string[] = ${xtypes};
    public static INPUTNAMES: string[] = ${inputs};
    public static OUTPUTNAMES: string[] = ${outputNames};
    public static OUTPUTS: any[] = ${outputs};
}
@Component({
    selector: '${selector}',
    inputs: ${className}MetaData.INPUTNAMES,
    outputs: ${className}MetaData.OUTPUTNAMES,
    providers: [{provide: ${classNameBase}, useExisting: forwardRef(() => ${className})}],
    template: '<ng-template #dynamic></ng-template>'
})
export class ${className} extends ${classNameBase} implements AfterContentInit, OnInit {

    @ContentChildren(${classNameBase}, {read: ${classNameBase}}) extbaseRef: QueryList<${classNameBase}>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, ${className}MetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
