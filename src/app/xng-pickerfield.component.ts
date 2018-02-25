import {
    Component, ViewChild, ElementRef, ComponentFactoryResolver, ViewContainerRef, forwardRef, ContentChildren,
    QueryList, AfterContentInit, OnInit
} from '@angular/core';
import {XngBaseComponent} from './xng-base.component';

/**
 * @see Ext.field.Picker
 */
export class XngPickerfieldComponentMetaData {
    public static XTYPES: string[] = [
        'pickerfield'
    ];
    public static INPUTNAMES: string[] = [
        'alignTarget',
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
        'disabled',
        'displayed',
        'docked',
        'draggable',
        'edgePicker',
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
        'floatedPicker',
        'floatedPickerAlign',
        'focusTrap',
        'hideAnimation',
        'hideOnMaskTap',
        'hideTrigger',
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
        'matchFieldWidth',
        'maxHeight',
        'maxLength',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
        'modelValidation',
        'name',
        'padding',
        'parseValidator',
        'pattern',
        'picker',
        'pickerSlotAlign',
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
        'collapse',
        'destroy',
        'dockedchange',
        'erased',
        'errorchange',
        'expand',
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
                'pickerfield',
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
                'pickerfield',
                'eOpts'
            ]
        },
        {
            'name': 'blur',
            'parameters': [
                'pickerfield',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'bottomchange',
            'parameters': [
                'pickerfield',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'centeredchange',
            'parameters': [
                'pickerfield',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'change',
            'parameters': [
                'pickerfield',
                'newValue',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'clearicontap',
            'parameters': [
                'pickerfield',
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
            'name': 'collapse',
            'parameters': [
                'field',
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
                'pickerfield',
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
                'pickerfield',
                'error',
                'eOpts'
            ]
        },
        {
            'name': 'expand',
            'parameters': [
                'field',
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
                'pickerfield',
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
                'pickerfield',
                'e',
                'eOpts'
            ]
        },
        {
            'name': 'leftchange',
            'parameters': [
                'pickerfield',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'maxheightchange',
            'parameters': [
                'pickerfield',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'maxwidthchange',
            'parameters': [
                'pickerfield',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'minheightchange',
            'parameters': [
                'pickerfield',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'minwidthchange',
            'parameters': [
                'pickerfield',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'mousedown',
            'parameters': [
                'pickerfield',
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
                'pickerfield',
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
                'pickerfield',
                'value',
                'oldValue',
                'eOpts'
            ]
        },
        {
            'name': 'scrollablechange',
            'parameters': [
                'pickerfield',
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
                'pickerfield',
                'eOpts'
            ]
        },
        {
            'name': 'topchange',
            'parameters': [
                'pickerfield',
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
    selector: 'xng-pickerfield',
    inputs: XngPickerfieldComponentMetaData.INPUTNAMES,
    outputs: XngPickerfieldComponentMetaData.OUTPUTNAMES,
    providers: [{provide: XngBaseComponent, useExisting: forwardRef(() => XngPickerfieldComponent)}],
    template: '<ng-template #dynamic></ng-template>'
})
export class XngPickerfieldComponent extends XngBaseComponent implements AfterContentInit, OnInit {

    @ContentChildren(XngBaseComponent, {read: XngBaseComponent}) extbaseRef: QueryList<XngBaseComponent>;
    @ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;

    constructor(eRef: ElementRef,
                resolver: ComponentFactoryResolver) {
        super(eRef, resolver, XngPickerfieldComponentMetaData);
    }

    ngAfterContentInit() {
        this.AfterContentInit(this.extbaseRef);
    }

    ngOnInit() {
        this.OnInit(this.dynamicRef);
    }

}
