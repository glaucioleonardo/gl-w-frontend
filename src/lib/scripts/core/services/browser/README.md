# gl-w-browser-frontend #
[![version](https://img.shields.io/npm/v/gl-w-browser-frontend)](https://www.npmjs.com/package/gl-w-browser-frontend) 
[![downloads](https://img.shields.io/npm/types/gl-w-browser-frontend)](https://www.npmjs.com/package/gl-w-browser-frontend) 
[![downloads](https://img.shields.io/npm/dw/gl-w-browser-frontend)](https://www.npmjs.com/package/gl-w-browser-frontend) 

### What is this repository for? ###
This package (**g**laucio**l**eonardo-**w**eb-browser-**frontend**) is a common code for using among web front-end development 
such as ES6+ and TypeScript.<br>

This package contains the types for using with Typescript.

### How do I get set up? ###
 The easiest way to install this library is via npm using the following commands:
* Latest version `npm install gl-w-frontend --save`;
* [Available versions](https://www.npmjs.com/package/gl-w-browser-frontend?activeTab=versions) `npm install gl-w-browser-frontend@version --save`;


If you are using only browser version:
* For ES5 version importing via <br>
```
<!DOCTYPE html>
 <html lang="en">
 <head>
    <meta charset="UTF-8">
    <title>gl-w-frontend</title>
    ...
 </head>
 <body>
    ...
    <!-- Dependencies must be placed in order -->    
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script
        src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
        integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
        crossorigin="anonymous">
    </script>
    <script src="https://github.com/sindresorhus/screenfull.js/blob/master/dist/screenfull.min.js"></script>
    <script src="https://github.com/moment/moment/blob/develop/dist/moment.js"></script>
    <script src="https://github.com/rotaready/moment-range/blob/master/lib/moment-range.js"></script>

    <!-- Excel dependencies -->
    <script lang="javascript" src="https://github.com/SheetJS/sheetjs/tree/master/dist/xlsx.full.min.js"></script> 
    <script lang="javascript" src="https://github.com/dtjohnson/xlsx-populate/blob/master/browser/xlsx-populate.js"></script> 

    <!-- Include here -->
    <script src="https://github.com/glaucioleonardo/gl-w-frontend/tree/master/lib/index.js"></script>
    <!-- or just download this repo and refer to the index.js like this -->
    <script src="js/index.js"></script>
 </body>
 </html>
 ```
#### Important: ####
* The library "moment-range" makes use of `Symbol.iterator` to provide the iteration protocols. 
If you need to support older browsers (specifically IE11+) you will need to include a polyfill. 
Any of the following should work, depending on your project configuration: <br>

* [core-js](https://github.com/zloirock/core-js): Tested with this polyfill (working on IE10+). 
* [babel runtime transform plugin](https://babeljs.io/docs/plugins/transform-runtime)
* [babel polyfill](https://babeljs.io/docs/usage/polyfill)
* [es6-iterator](https://github.com/medikoo/es6-iterator)

* In case you are using ES+, just use the `bundle.js` inside `lib/es6`

#### Importing assets of this library ####

* If you are using nodejs, you can just copy/refer the folder insinde `node_module/gl-w-frontend/lib/assets`;
* Angular: open the `angular.json` and paste this code in :
```
{
  ...
  "projects": {
    "my-project-angular": {
      ...
      "architect": {
        "build": {
          ...
          "options": {
            ...
            "assets": [
              ...
              {
                "glob": "**/*",
                "input": "node_modules/gl-w-frontend/lib/assets",
                "output": "/assets"
              }
            ],
          },
          ...
        },
        ...
      }
    }},
  ...
}
``` 
* Browser version: copy the folder assets and add to your public folder or save anywhere and in 
the following method inform the folderUrl (optional parameter). 
`AttachmentIcon.get(..., folderUrl: string /*inform the folser url*/)`
```
<!DOCTYPE html>
 <html lang="en">
 <head>
    <meta charset="UTF-8">
    <title>gl-w-frontend</title>
    ...
 </head>
 <body>
    ...
 </body>
 </html>
 ```
### Macro features ###

* Array
* Attachment
* Browser (Check version, fullscreen)
* ComboBox / Autocomplete
* Date / Time
* Image
* Input
* Dom Elements
* String

* Export: Data to excel.

Other features is going to be included  frequently.

### Other packages used ###
I'm really thankful for those packages creators!
* [Screenfull](https://www.npmjs.com/package/screenfull)
* [inputmask](https://github.com/RobinHerbots/Inputmask)
* [jquery-ui-dist](https://github.com/jquery/jquery-ui/graphs/contributors)
* [jquery](https://github.com/jquery/jquery/graphs/contributors)
* [moment](https://github.com/moment/moment)
* [moment-range](https://github.com/rotaready/moment-range)
* [Sheetsjs](https://github.com/SheetJS/sheetjs)
