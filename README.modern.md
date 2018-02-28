# NgxExtJS

ExtJS Modern Toolkit 6.5.1 bridge Angular 2+

## Installation:   

    npm i @dalencar/angular-extjs-modern --save
    
## Usage

1 - Download [ExtJS 6+](https://www.sencha.com/products/evaluate/) and gets the following files:

    ext-6.x.x.zip 
    ext-addons-6.x.x.zip

> NOTE 1: The file ext-addons-6.x.x.zip will there is a only folder, named `packages`. Should be merged in the existing folder in next step.
> NOTE 2: Replace 6.x.x to correcly version available
    
2 - Extract the previous content files in the existent project directory `./ext-6.x.x`. Example how `./ext-6.x.x` directory will be:  
```  
./ext-6.x.x/build
./ext-6.x.x/classic
./ext-6.x.x/cmd
./ext-6.x.x/examples
./ext-6.x.x/packages
...
...
...
```

3 - In your .angular-cli.json, add the `ext-modern-all.js` or your JS compiled with the only Ext components the you want. Optionaly, 
you can add others JS from `ext-6.x.x/packages`. Add CSS files as well.

```
"styles": [
    "ext-6.x.x/build/modern/theme-triton/resources/theme-triton-all.css",
    ...
],
"scripts": [
    "ext-6.x.x/build/ext-modern-all.js",
    ...
],
```

4 - Change `main.ts` to add `Ext.onReady` in order to call angular bootstrap just when ExtJS framework is done.   

```
declare var Ext: any;
...
...
Ext.onReady(() => {
    platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err));
});
```

5 - Add `XngModule` module in your project to use all available ExtJS Modern components

## Demo

See [https://github.com/dalencar/angular-extjs-modern-demo](https://github.com/dalencar/angular-extjs-modern-demo)
