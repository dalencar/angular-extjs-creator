import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.field.Spinner
 */
export class XngSpinnerfieldComponentMetaData {
    public static XTYPES: string[] = [
        'spinnerfield'
    ];
    public static INPUTNAMES: string[] = [
        'accelerateOnTapHold',
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
        'cycle',
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
        'groupButtons',
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
        'stepValue',
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
        'spin',
        'spindown',
        'spinup',
        'tofront',
        'topchange',
        'ready'
    ];
    public static OUTPUTS: any[] = [
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
                'spinnerfield',
                'eOpts'
            ]
        },
        {
            'name': 'blur',
            'parameters': [
                'spinnerfield',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'bottomchange',
            'parameters': [
                'spinnerfield',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'centeredchange',
            'parameters': [
                'spinnerfield',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'change',
            'parameters': [
                'spinnerfield',
                'newValue',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'clearicontap',
            'parameters': [
                'spinnerfield',
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
                'spinnerfield',
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
                'spinnerfield',
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
                'spinnerfield',
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
                'spinnerfield',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'leftchange',
            'parameters': [
                'spinnerfield',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'maxheightchange',
            'parameters': [
                'spinnerfield',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'maxwidthchange',
            'parameters': [
                'spinnerfield',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'minheightchange',
            'parameters': [
                'spinnerfield',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'minwidthchange',
            'parameters': [
                'spinnerfield',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'mousedown',
            'parameters': [
                'spinnerfield',
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
                'spinnerfield',
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
                'spinnerfield',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'scrollablechange',
            'parameters': [
                'spinnerfield',
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
            'name': 'spin',
            'parameters': [
                'spinnerfield',
                'value',
                'direction',
                'eOpts'
            ]
        },
        {
            'name': 'spindown',
            'parameters': [
                'spinnerfield',
                'value',
                'eOpts'
            ]
        },
        {
            'name': 'spinup',
            'parameters': [
                'spinnerfield',
                'value',
                'eOpts'
            ]
        },
        {
            'name': 'tofront',
            'parameters': [
                'spinnerfield',
                'eOpts'
            ]
        },
        {
            'name': 'topchange',
            'parameters': [
                'spinnerfield',
                'value',
                'oldValue',
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
    selector: 'xng-spinnerfield',
    inputs: XngSpinnerfieldComponentMetaData.INPUTNAMES,
    outputs: XngSpinnerfieldComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngSpinnerfieldComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngSpinnerfieldComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngSpinnerfieldComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
