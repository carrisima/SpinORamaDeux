/*
  GameScreen.js

  Game module for FreeCell game
*/

//*****************************************************************************



var app = app || { };
app.screens = app.screens || { };



//*****************************************************************************



app.screens[ "gameScreen" ] =
    (function()
     {
    //-------------------------------------------------------------------------

        var limbo,
            currentCursorPos = {},
            model,
            view,
            gameMode,
            audio,
            playGameOver,
            audioMap;
         
    //=========================================================================

         function run( )
         {
             
             
             model = app.freeCellModel;
             view = app.freeCellCanvasView;
             audio = app.audio;
             audioMap = app.freeCellAudio;
             viewParams = {};
             view.setUp(model, viewParams, "new");
             audio.initialize();
             setEventHandlers();
             app.gameLoop.setLoopFunction(update);
             playGameOver = true;
             audioMap.play("Christmas");
             
             
         }

    //-------------------------------------------------------------------------


         function update() {
             var now = app.gameTime.getSeconds();
             view.update(now);
             if (model.getGameOver() && playGameOver) {
                 audio.play("gameover");
                 playGameOver = false;
             }
         }

   //-------------------------------------------------------------------------

         function setEventHandlers() {
             $("#gameMainBtn").click(
                 function (event) {
                     endGame();
                     audio.play("levelup");
                     audio.stop();
                     app.showScreen("mainScreen");
                 }
             );

             $("#gameNewBtn").click(
                 function (event) {
                     newGame();
                     audio.play("levelup");
                 }
             );

             $("#gameRestartBtn").click(
                function (event) {
                    reStartGame();
                    audio.play("levelup");
                }
             );

             $("#gameFinishBtn").click(
                function (event) {
                    app.freeCellModel.cheatersEnd();
                   
                }
             );
             
             

             $("#gameBoardDiv").click(handleClick);
             $("#gameBoardDiv").mousemove(handleMouseMove);

         }

        //-------------------------------------------------------------------------

         function clearEventHandlers() {

             $("#gameScreen button").off("click");
             $("#gameBoardDiv").off("click");

         }

        //-------------------------------------------------------------------------

         function endGame() {
             clearEventHandlers();
             $("#gameBoardDiv canvas").remove();
            
         }

      
        //-------------------------------------------------------------------------
        //mode = firstGame or continueGame
         function newGame(mode) {
             $("#gameBoardDiv canvas").remove();
             view.setUp(model, viewParams, "new");
             

         }

        //-------------------------------------------------------------------------

         function reStartGame() {
             $("#gameBoardDiv canvas").remove();
             view.setUp(model, viewParams, "restart");
             audio.play("levelup");

         }

        //-------------------------------------------------------------------------

         function handleClick(event) {
             var currentLoc,
                 move;

             currentCursorPos = { x: event.clientX, y: event.clientY };
             currentLoc = view.posToLoc(currentCursorPos);

             if (currentLoc !== null) {
                
                 move = app.freeCellModel.pickOrPut(currentLoc);
                 
                 if (move.matchType === "putdown")
                 {


                     if (move.matchStatus) {
                         audio.play("match");
                     }
                     else {
                         audio.play("badswap");
                     }
                 }
                 
             }

             return true;
         }

        //-------------------------------------------------------------------------

         function handleMouseMove(event) {

             currentCursorPos = { x: event.clientX, y: event.clientY };
             view.setCurrentCursorPos(currentCursorPos);

             
         }
    //=========================================================================

         return {
             run: run,
             newGame: newGame
 
         };
         
    //-------------------------------------------------------------------------
     }
)();



//*****************************************************************************
