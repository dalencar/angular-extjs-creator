import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.field.Number
 */
export class XngNumberfieldComponentMetaData {
    public static XTYPES: string[] = [
        'numberfield'
    ];
    public static INPUTNAMES: string[] = [
        'alwaysOnTop',
        'animateUnderline',
        'autoCapitalize',
        'autoComplete',
        'autoCorrect',
        'autoFitErrors',
        'autoHideInputMask',
        'axisLock',
        'badFormatMessage',
        'bottom',
        'bubbleEvents',
        'centered',
        'clearable',
        'constrainAlign',
        'contentEl',
        'data',
        'decimals',
        'decimalsText',
        'disabled',
        'displayed',
        'docked',
        'draggable',
        'editable',
        'enterAnimation',
        'error',
        'errorMessage',
        'errorTarget',
        'errorTip',
        'errorTpl',
        'exitAnimation',
        'flex',
        'floated',
        'hideAnimation',
        'hideOnMaskTap',
        'html',
        'id',
        'inline',
        'inputCls',
        'inputMask',
        'inputType',
        'inputValue',
        'itemId',
        'label',
        'labelAlign',
        'labelCls',
        'labelInPlaceholder',
        'labelMinWidth',
        'labelTextAlign',
        'labelWidth',
        'labelWrap',
        'left',
        'margin',
        'maxHeight',
        'maxLength',
        'maxValue',
        'maxValueText',
        'maxWidth',
        'minHeight',
        'minValue',
        'minValueText',
        'minWidth',
        'modal',
        'modelValidation',
        'name',
        'padding',
        'parseValidator',
        'pattern',
        'placeHolder',
        'placeholder',
        'publishes',
        'readOnly',
        'record',
        'relative',
        'required',
        'requiredMessage',
        'right',
        'scrollable',
        'selfAlign',
        'shadow',
        'shim',
        'showAnimation',
        'sideError',
        'tabIndex',
        'textAlign',
        'tipError',
        'titleError',
        'toFrontOnShow',
        'tooltip',
        'top',
        'tpl',
        'tplWriteMode',
        'translatable',
        'triggers',
        'trim',
        'underError',
        'userSelectable',
        'validateDisabled',
        'validationMessage',
        'validators',
        'value',
        'weight',
        'x',
        'xtype',
        'y',
        'zIndex',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    public static OUTPUTNAMES: string[] = [
        'action',
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeshow',
        'beforetofront',
        'blur',
        'bottomchange',
        'centeredchange',
        'change',
        'clearicontap',
        'click',
        'destroy',
        'dockedchange',
        'erased',
        'errorchange',
        'floatingchange',
        'focus',
        'fullscreen',
        'hide',
        'initialize',
        'keyup',
        'leftchange',
        'maxheightchange',
        'maxwidthchange',
        'minheightchange',
        'minwidthchange',
        'mousedown',
        'moved',
        'orientationchange',
        'painted',
        'paste',
        'positionedchange',
        'removed',
        'resize',
        'rightchange',
        'scrollablechange',
        'show',
        'tofront',
        'topchange',
        'updatedata',
        'ready'
    ];
    public static OUTPUTS: any[] = [
        {
            'name': 'action',
            'parameters': [
                'numberfield',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'added',
            'parameters': [
                'sender',
                'container',
                'index',
                'eOpts'
            ]
        },
        {
            'name': 'beforehide',
            'parameters': [
                'sender',
                'eOpts'
            ]
        },
        {
            'name': 'beforeorientationchange',
            'parameters': [
                'eOpts'
            ]
        },
        {
            'name': 'beforeshow',
            'parameters': [
                'sender',
                'eOpts'
            ]
        },
        {
            'name': 'beforetofront',
            'parameters': [
                'numberfield',
                'eOpts'
            ]
        },
        {
            'name': 'blur',
            'parameters': [
                'numberfield',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'bottomchange',
            'parameters': [
                'numberfield',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'centeredchange',
            'parameters': [
                'numberfield',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'change',
            'parameters': [
                'numberfield',
                'newValue',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'clearicontap',
            'parameters': [
                'numberfield',
                'input',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'click',
            'parameters': [
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'destroy',
            'parameters': [
                'eOpts'
            ]
        },
        {
            'name': 'dockedchange',
            'parameters': [
                'numberfield',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'erased',
            'parameters': [
                'sender',
                'eOpts'
            ]
        },
        {
            'name': 'errorchange',
            'parameters': [
                'numberfield',
                'error',
                'eOpts'
            ]
        },
        {
            'name': 'floatingchange',
            'parameters': [
                'sender',
                'positioned',
                'eOpts'
            ]
        },
        {
            'name': 'focus',
            'parameters': [
                'numberfield',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'fullscreen',
            'parameters': [
                'sender',
                'eOpts'
            ]
        },
        {
            'name': 'hide',
            'parameters': [
                'sender',
                'eOpts'
            ]
        },
        {
            'name': 'initialize',
            'parameters': [
                'sender',
                'eOpts'
            ]
        },
        {
            'name': 'keyup',
            'parameters': [
                'numberfield',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'leftchange',
            'parameters': [
                'numberfield',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'maxheightchange',
            'parameters': [
                'numberfield',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'maxwidthchange',
            'parameters': [
                'numberfield',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'minheightchange',
            'parameters': [
                'numberfield',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'minwidthchange',
            'parameters': [
                'numberfield',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'mousedown',
            'parameters': [
                'numberfield',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'moved',
            'parameters': [
                'sender',
                'container',
                'toIndex',
                'fromIndex',
                'eOpts'
            ]
        },
        {
            'name': 'orientationchange',
            'parameters': [
                'eOpts'
            ]
        },
        {
            'name': 'painted',
            'parameters': [
                'sender',
                'element',
                'eOpts'
            ]
        },
        {
            'name': 'paste',
            'parameters': [
                'numberfield',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'positionedchange',
            'parameters': [
                'sender',
                'positioned',
                'eOpts'
            ]
        },
        {
            'name': 'removed',
            'parameters': [
                'sender',
                'container',
                'index',
                'eOpts'
            ]
        },
        {
            'name': 'resize',
            'parameters': [
                'element',
                'info',
                'eOpts'
            ]
        },
        {
            'name': 'rightchange',
            'parameters': [
                'numberfield',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'scrollablechange',
            'parameters': [
                'numberfield',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'show',
            'parameters': [
                'sender',
                'eOpts'
            ]
        },
        {
            'name': 'tofront',
            'parameters': [
                'numberfield',
                'eOpts'
            ]
        },
        {
            'name': 'topchange',
            'parameters': [
                'numberfield',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'updatedata',
            'parameters': [
                'sender',
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
    selector: 'xng-numberfield',
    inputs: XngNumberfieldComponentMetaData.INPUTNAMES,
    outputs: XngNumberfieldComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngNumberfieldComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngNumberfieldComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngNumberfieldComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
