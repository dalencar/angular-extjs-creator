# NgxExtJS

## Steps to create a new version ExtJS bridge:   

1 - Install [jsduck 5+](https://github.com/senchalabs/jsduck)

2 - Do download [ExtJS 6+](https://www.sencha.com/products/evaluate/) and gets the following files:

    ext-6.x.x.zip 
    ext-addons-6.x.x.zip
    
    > NOTE: The file ext-addons-6.x.x.zip will there is a only folder, named `packages`. Should be merged in the existing folder in next step.  
    
3 - Extract the previous content files in the existent project directory `./extjs`. Example how `./extjs` directory will be:

     ./extjs/build
     ./extjs/classic
     ./extjs/cmd
     ./extjs/examples
     ./extjs/packages
     ...
     ...
     ...
    
4 - Run the following command to make sure folder `./flatten` is empty:

    $ npm run step1 

5 - Run the following command to create json files from source ExtJS comments:

    $ npm run step2

6 - Run the following command to build and create all angular components files:

    $ npm run step2
        
## Thanks

Project inspirated from [mgusmano/angular2-extjs](https://github.com/mgusmano/angular2-extjs)
