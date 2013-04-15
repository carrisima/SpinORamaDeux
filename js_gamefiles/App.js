//App.js file
//main game logic with game objects, stage, level etc.
//would like to reorg code someday...really

var app = app || {};
/*
 App.js

 Main routine(s) for our Web app
 */

//*****************************************************************************


//Our one global object:
var app = app || {};


//=============================================================================

app.screens = app.screens || {};

//=============================================================================

app.start = function () {
    app.drawBackgroundCanvas();
    app.showScreen("splashScreen", app.loader.getResourceLoadProgress);

};

//=============================================================================

app.showScreen = function (screenId) {

    var oldScreenDiv = $("#game .screen.active"),
        newScreenDiv = $("#" + screenId),
        newScreen = app.screens[screenId];
    args = Array.prototype.slice.call(arguments, 1);

    if (oldScreenDiv) {
        oldScreenDiv.removeClass("active");
    }
    newScreenDiv.addClass("active");
    newScreen.run.apply(newScreen, args);

};





