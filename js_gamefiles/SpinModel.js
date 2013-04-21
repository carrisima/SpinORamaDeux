/*
 spinModel.js

 Model for setting up Game and rules of the game
 Store and retrieve data
 */



//*****************************************************************************



//Global objects:
var app = app || {};
app.spinModel = app.spinModel || {};



//=============================================================================

//Global vars

app.spinModel =
    (function () {
        //-------------------------------------------------------------------------
        //Private variables

        var gameover,
            gameBoardWidth,
            gameBoardHeight,
            canvasWidth = 800,
            canvasHeight = 500;

        //-------------------------------------------------------------------------


        function getDimensions() {

            return {canvasWidth: canvasWidth, canvasHeight: canvasHeight};
        }

        //-------------------------------------------------------------------------

        function getGameOver() {

            return gameover;
        }


        //-------------------------------------------------------------------------

        function setGameOver(isGameOver) {

            gameover = isGameOver;
        }



        //=========================================================================
        //Private Methods


        //-------------------------------------------------------------------------


        function setUp(mode) {


            gameover = false;

        }



        //-------------------------------------------------------------------------
        function isGameOver() {

            return false;

        }
        //=========================================================================
        //Public API


        return {
            setUp: setUp,
            getDimensions: getDimensions,
            getGameOver: getGameOver,
            setGameOver: setGameOver,
            isGameOver: isGameOver

        };

        //-------------------------------------------------------------------------
    }
        )();



//*****************************************************************************
