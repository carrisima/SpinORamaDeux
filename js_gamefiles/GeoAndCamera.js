/*
 GeoAndCamera.js

Functions to enable geo location and the camera
 */


//*****************************************************************************


var app = app || {}
app.geoAndCamera = app.geoAndCamera || {};


//=============================================================================


app.geoAndCamera =
    (function()
    {
        //-------------------------------------------------------------------------
        //function vars

        var foo;

        //=========================================================================

        //Get Location coordinates
        function logPosition(position) {
            $("#latitude").prepend(position.coords.latitude);
            $("#longitude").prepend(position.coords.longitude);
        }

        function positionError(error) {
            $("#longitude").prepend("Ooops, can't get your location right now.  This seems to " +
                "be the issue: " + error);
        }

        function getCurrentPosition() {
        navigator.geolocation.getCurrentPosition(logPosition,positionError,{
            enableHighAccuracy: true
        })

        }

        //=========================================================================

        return {
            getCurrentPosition: getCurrentPosition
        };

        //-------------------------------------------------------------------------
    }
        )();


//*****************************************************************************