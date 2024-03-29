/*
  Loader.js

  Manages loading of scripts and resources.
*/

//*****************************************************************************

//Our one global object:
var app = app || { };

//*****************************************************************************

app.loader =
    (function () {
        //-------------------------------------------------------------------------
        var numResourcesToLoad = 0,
             numResourcesLoaded = 0,
             globalResourceList;

        function run() {
            /*var resourceList = listResources(),
                imgList = [];

            setResourcePrefix();
            numResourcesToLoad = resourceList.length;
            numResourcesLoaded = 0;*/


            Modernizr.load(
                 [
                     {
                         test: navigator.appName.match(/Explorer/),
                         yep: "js_libraries/jquery.min.js",
                         nope: "js_libraries/zepto.min.js"
                     },

                     {
                         load: [

                             "js_libraries/jquery.min.js",
                             "js_libraries/underscore-min.js",
                             "js_gamefiles/BackgroundCanvas.js",
                             "js_gamefiles/CanvasGraphics.js",
                             "js_gamefiles/App.js",
                             "js_gamefiles/GeoAndCamera.js"

                         ],
                         complete: function () {

                             app.start();
                         }
                     }


                    /* {
                         load: resourceList,
                         callback: function (url, result, key) {
                             ++numResourcesLoaded;
                         },
                         complete: function () {
                             numResourcesLoaded = numResourcesToLoad = 0;
                             globalResourceList = resourceList;
                         }
                     }*/

                 ]
             );
        }
        //--------------------------------------------------------------------------------

        function getResourceList() {
            return globalResourceList;
        }

        //--------------------------------------------------------------------------------

        function setResourcePrefix() {
            yepnope.addPrefix(
                 "resource",
                 function (resourceObj) {
                     resourceObj.noexec = true;
                     return resourceObj;
                 }
             );
        }

        //--------------------------------------------------------------------------------

        function getResourceLoadProgress() {
            return numResourcesLoaded / numResourcesToLoad;
        }

        





        //=========================================================================

        return {
            run: run,
            getResourceLoadProgress: getResourceLoadProgress


        };

        //-------------------------------------------------------------------------
    }
)();

//*****************************************************************************

app.loader.run( );

//*****************************************************************************
