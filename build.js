const fs = require('fs');
const es6template = require('es6-template');
const ngCli = require('./.angular-cli.json');

const flattenDir = './flatten';
const tmpDir = './templates';
const ngSrc = './src';
const ngDir = ngSrc + '/app';

/**
 * Build all angular components based on ExtJS
 */
(function build(prefix) {

    prefix = prefix.toLowerCase();

    var classNameBase = buildCmpClassName(prefix, 'base');
    var fileNameBase = buildCmpFileName(prefix, 'base');

    var imports = [];
    var exports = [];
    var declarations = [];
    var allClasses = [];

    const metadata = getMetadata();
    var item;

    for (index in metadata) {
        item = metadata[index];

        // TODO: Check after: actionsheet, audio, axis, carouselindicator, item, cell, column, row, sparkline, pivotconfig
        if (item.aliases &&
            item.aliases.widget &&
            item.aliases.widget.indexOf('actionsheet') === -1  &&
            item.aliases.widget.length === 1
        ) {

            // TODO: Do in all widgets
            item.xtype = item.aliases.widget[0];

            if (item.members && item.members.length) {

                var inputs = [];
                var outputs = [];

                // Find configs
                var configs = item.members.filter(function (member) {
                    return member.tagname == 'cfg';
                });
                configs.forEach(function (config) {
                    inputs.push(config.name);
                });
                inputs.push('platformConfig');
                inputs.push('responsiveConfig');
                inputs.push('fitToParent');
                inputs.push('config');

                // Find events
                var events = item.members.filter(function (member) {
                    return member.tagname == 'event';
                });
                var output;
                events.forEach(function (event) {
                    output = {
                        name: event.name,
                        parameters: []
                    };
                    event.params.forEach(function (param) {
                        if (param.name === 'this') {
                            param.name = item.xtype;
                        }
                        output.parameters.push( param.name );
                    });
                    outputs.push( output );
                });
                outputs.push({
                    name: 'ready',
                    parameters: []
                });

                // Build class name and file name
                var className = buildCmpClassName(prefix, item.xtype);
                var fileName = buildCmpFileName(prefix, item.xtype);

                // Create component
                buildComponent(className, fileName, inputs, outputs, item.name, item.aliases.widget, prefix, classNameBase, fileNameBase);

                // Save imports, exports and declarations for angular
                imports.push({className: className, fileName: fileName});
                exports.push(className);
                declarations.push(className);

                // Save all classes used for extjs
                allClasses.push(item.name);
            }
        }
    }

    // Build base for all components
    buildBaseComponent(classNameBase, fileNameBase);

    // Build generic cmoponent
    buildExtComponent(classNameBase, fileNameBase, prefix);

    // Build class to centrilize object's ExtJS
    buildExtClass(prefix);

    // Build module
    buildModule(imports, exports, declarations, prefix);

    // Build index
    buildIndex(prefix);

})(ngCli.apps[0].prefix);

/**
 * Load all json files and set in variable data
 */
function getMetadata() {
    const data = [];
    fs.readdirSync(flattenDir + '/').forEach(function(file) {
        if (file.match(/\.json$/) !== null) {
            var name = file.replace(/\.json$/, '');
            data.push(require(flattenDir + '/' + file));
        }
    });
    return data;
}

/**
 *
 * @param className
 * @param fileName
 * @param inputs
 * @param outputs
 * @param extClassName
 * @param xtypes
 * @param prefix
 * @param classNameBase
 * @param fileNameBase
 */
function buildComponent(className, fileName, inputs, outputs, extClassName, xtypes, prefix, classNameBase, fileNameBase) {
    loadFile('component.tpl', function (contentFile) {
        contentFile = es6template(contentFile, {
            classNameBase: classNameBase,
            fileNameBase: fileNameBase,
            extClassName: extClassName,
            xtypes: JSON.stringify(xtypes, null, 4).replace(/"/g, '\'').replace(/\n/g, '\n    '),
            inputs: JSON.stringify(inputs, null, 4).replace(/"/g, '\'').replace(/\n/g, '\n    '),
            outputs: JSON.stringify(outputs, null, 4).replace(/"/g, '\'').replace(/\n/g, '\n    '),
            outputNames: JSON.stringify(outputs.map(function(output){return output.name;}), null, 4).replace(/"/g, '\'').replace(/\n/g, '\n    '),
            className: className,
            selector: xtypes.map(function(xtype){return buildSelector(prefix, xtype);}).toString()
        });
        makeNgFile(fileName, contentFile);
    });
}

/**
 *
 * @param classNameBase
 * @param fileNameBase
 */
function buildBaseComponent(classNameBase, fileNameBase) {
    loadFile('base-component.tpl', function (contentFile) {
        contentFile = es6template(contentFile, {
            classNameBase: classNameBase
        });
        makeNgFile(fileNameBase, contentFile);
    });
}

/**
 *
 * @param classNameBase
 * @param fileNameBase
 * @param prefix
 */
function buildExtComponent(classNameBase, fileNameBase, prefix) {
    const className = buildCmpClassName(prefix, '');
    const fileName = buildCmpFileName(prefix, '');
    const inputs = ['xtype', 'fittoparent', 'config'];
    const outputs = [{
        name: 'ready',
        parameters: []
    }];

    buildComponent( className, fileName, inputs, outputs, 'Ext', [''], prefix, classNameBase, fileNameBase );
}

/**
 *
 * @param prefix
 */
function buildExtClass(prefix) {
    const className = buildClassName(prefix, 'class')
    const fileName = buildFileName(prefix)
    loadFile('ext-class.tpl', function (contentFile) {
        contentFile = es6template(contentFile, {
            className: className
        });
        makeNgFile(fileName + '.class', contentFile);
    });
}

/**
 *
 * @param imports
 * @param exports
 * @param declarations
 * @param prefix
 */
function buildModule(imports, exports, declarations, prefix) {
    const className = buildClassName(prefix, 'module');
    const extCmpClassName = buildCmpClassName(prefix, '');
    // Add Ext generic component
    imports.unshift({
        className: extCmpClassName,
        fileName: buildCmpFileName(prefix, '')
    });
    exports.unshift(extCmpClassName);
    declarations.unshift(extCmpClassName);
    loadFile('module.tpl', function (contentFile) {
        contentFile = es6template(contentFile, {
            imports: imports.map(function(v) {
                return 'import {' + v.className + "} from './" + v.fileName + "';";
            }).toString().replace(/,/g, '\n'),
            exports: JSON.stringify(exports, null, 4).replace(/"/g, '').replace(/\n/g, '\n    '),
            declarations: JSON.stringify(declarations, null, 4).replace(/"/g, '').replace(/\n/g, '\n    '),
            className: className
        });
        makeNgFile(prefix + '.module', contentFile);
    });
}

/**
 *
 * @param prefix
 */
function buildIndex(prefix) {
    loadFile('index.tpl', function (contentFile) {
        contentFile = es6template(contentFile, {
            dist: ngDir,
            prefix: prefix
        });
        makeFile('./index.ts', contentFile);
    });
}

function dashToCapitalize(value) {
    return value
        .split('-')
        .map(function (subvalue) {
            subvalue = subvalue.toLowerCase();
            return subvalue.charAt(0).toUpperCase() + subvalue.slice(1);
        })
        .join('');
}

function buildClassName(prefix, xtype) {
    return dashToCapitalize(prefix) + dashToCapitalize(xtype);
}

function buildCmpClassName(prefix, xtype) {
    return buildClassName(prefix, xtype) + 'Component';
}

function buildFileName(prefix, xtype) {
    var fileName = [];
    if (prefix) {fileName.push(prefix);}
    if (xtype) {fileName.push(xtype);}
    return fileName.join('-');
}

function buildCmpFileName(prefix, xtype) {
    return buildFileName(prefix, xtype) + '.component';
}

function buildSelector(prefix, xtype) {
    var selector = [];
    if (prefix) {selector.push(prefix);}
    if (xtype) {selector.push(xtype);}
    return selector.join('-');
}

/**
 *
 * @param fileName
 * @param callback
 */
function loadFile(fileName, callback) {
    fs.readFile(tmpDir + '/' + fileName, {encoding: "utf8"}, function (err, contentFile) {
        if (err) throw err;
        callback(contentFile);
    });
}

/**
 *
 * @param fileName
 * @param contentFile
 */
function makeNgFile(fileName, contentFile) {
    makeFile(ngDir + '/' + fileName + '.ts', contentFile);
}

/**
 *
 * @param fileName
 * @param contentFile
 */
function makeFile(fileName, contentFile) {
    fs.writeFile(
        fileName,
        contentFile,
        function (err) {
            if (err) {
                return console.log(err);
            }
        }
    );
}