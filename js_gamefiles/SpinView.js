/*
 SpinView.js

 Draw view for the game.
 */

//*****************************************************************************



var app = app || {};
app.spinView = app.spinView || {};



//*****************************************************************************



app.spinView =
    (function () {
        //-------------------------------------------------------------------------

        var canvas,
            ctx;



        //=========================================================================

        function setUp(model) {


            dim = model.getDimensions();
            //model.setUp();
            boardDiv = $("#spinBoard");


            //canvas for gameplay
            canvas = $("<canvas />")[0];
            ctx = canvas.getContext("2d");
            canvas.width = dim.canvasWidth;
            canvas.height = dim.canvasHeight;
            $(canvas).appendTo(boardDiv);

            //draw wheel image
            var img = $("#wheel")[0];
            ctx.drawImage( img, 25, 10 );

        }



        function update(time) {



        }






        //-------------------------------------------------------------------------

        function gameOver() {




        }

        //-------------------------------------------------------------------------

        function updateGameOver(time) {


        }


        //-------------------------------------------------------------------------
        //find location of specified card
        function locToPos(loc) {

        }


        return {
            setUp: setUp
        };

        //-------------------------------------------------------------------------
    }
        )();



//*****************************************************************************
