


$(document).ready(function() {


  var outcome = ["_", "_", "_", "_", "_", "_", "_", "_", "_"];

  var turns = 0;

  var gameOver = false; // gameOver variable

  var winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]];


  var gameWon = function(){

    for (var i = 0; i < winCondition.length; i++) {
      condition = winCondition[i]
        var win = []
      for (var j = 0; j < condition.length; j++) {
        var position = condition[j];
        win.push(outcome[position]);
        var final = win.join('')
        if (final === "XXX") {
          $("#gameMessageX").fadeIn()
          return true;

        } else if (final === "OOO") {
          $("#gameMessageO").fadeIn()
          return true;

        } else if (turns === 5 && i === 7) {

          $("#gameMessageDraw").fadeIn()
          $("#notTheBees").fadeIn()
          return false;
        }
      }
    }
    return false;
  }// function called after every human and computer move to determine if there has been a win. turns variable is increased by one in every click function to determine when all moves have been made. if there is no win condition met when all boxes have been taken, it will declare a draw


  var playGame = function() {
    //  if statement checking if a player has already taken a move in a box and prevents them or the computer  from changing it
    if ($(this).html() === "X" || $(this).html() === "O") {
      return;
    }

    var i;
    turns +=1;

    $(this).html("X")
    i = parseInt(this.id); // interaction with DOM to visually represent "X" on the gameboard.

    outcome[i] = "X"; // pushes the players move into an array which assesses victory conditions

    gameOver = gameWon();
    if( gameOver ) {
      // human won!
      return;  // don't let computer play its turn!
    }


    // following if statement and function evaluates players move and plays reactively to it.

    var checkForOpponentWin = function () {
      for (var i = 0; i < winCondition.length; i++) {
        var mayWinCheck = winCondition[i];
        var mayWin = [];
        var emptyIndex = null;
        var xCount = 0;

        for (var j = 0; j < mayWinCheck.length; j++) {

          var checkIndex = mayWinCheck[ j ];
          var squareValue = outcome[ checkIndex ];
console.log(squareValue);
console.log(checkIndex);
          if( squareValue === '_'){
            // if we see an empty spot, save its index for later, in case it's the one we need to take
            emptyIndex = checkIndex;
          } else if( squareValue === 'X' ){
            // if we see an X, increment our count of found Xs
            xCount += 1;
          }
        } // loop over each index of a win combo

        console.log("this is emptyIndex " +emptyIndex);
        if ( xCount === 2 && emptyIndex !== null ) {
          // play the move for O into the empty position
          outcome[emptyIndex] = 'O';
          console.log('blocked opponent win at:', emptyIndex, outcome[emptyIndex]);
          $('#' + emptyIndex.toString()).html("O");
          return true;
        }


      } // loop over each win combo as a whole

      return false;
    };

      var randomMove = function() {
        for (var i = 0; i < outcome.length; i++) {
          if (outcome[i] === '_') {
            outcome[i] = 'O';
            $('#' + i.toString()).html("O");
            break;
          }
        }
      }


      if (outcome[4] === '_') {
        outcome[4] = 'O';
        $('#' + "4").html("O");

      } else if (turns === 1 && outcome[2] === '_') {
        outcome[2] = 'O';
        $('#' + "2").html("O");

      } else if (turns >= 2) {
        var found = checkForOpponentWin();
        if(!found){
          randomMove();
        }
      }

    gameOver = gameWon(); //computer won!
    console.log(outcome);
  }  //playGame end function

  $(".square").on("click", playGame);
});
