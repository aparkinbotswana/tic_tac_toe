


$(document).ready(function() {


  var outcome = ["_", "_", "_", "_", "_", "_", "_", "_", "_"]; //

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


  var gameWon = function(){ // function called after every human and computer move to determine if there has been a win. turns variable is increased by one in every click function to determine when all moves have been made. if there is no win condition met when all boxes have been taken, it will declare a draw

    for (var i = 0; i < winCondition.length; i++) {
      condition = winCondition[i]
        var win = []
      for (var j = 0; j < condition.length; j++) {
        var position = condition[j];
        win.push(outcome[position]);
        var final = win.join('')
        if (final === "XXX") {
          $("#gameMessageX").fadeIn()
          console.log("win");
          return true;

        } else if (final === "OOO") {
          $("#gameMessageO").fadeIn()
          return true;

        } else if (turns === 5 && j === 7) {
          $("#gameMessageDraw").fadeIn()
          return false;
        }
      }
    }
    return false;
  }


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

    var checkForPossibleWin = function(){
// console.log("are you there?");
      for (var i = 0; i < winCondition.length; i++) {
        var mayWinCheck = winCondition[i]
        var mayWin = []
// console.log("i am here");
          for (var j = 0; j < mayWinCheck.length; j++) {
            var check = mayWinCheck[j];
            mayWin.push(outcome[check]);
            mayWin.sort();
            var joinMayWin = mayWin.join("")
            console.log(joinMayWin);
// console.log("are you really?");
            if (joinMayWin === "XX_") {
              for (var k = 0; k < mayWinCheck.length; k++) {
console.log("I promise");
console.log(mayWinCheck[k]);
                if (outcome[check] === "_") {
                  console.log(outcome);
                  console.log(outcome[check]);
console.log("ummmm?");

                  outcome[k] = 'O';
                  console.log(outcome[k]);
                  $('#' + j.toString()).html("O");
console.log("are you still there?");
                }
              }
            }
          }
        }
      }

      var randomMove = function() {
        for (var i = 0; i < outcome.length; i++) {
          if (outcome[i] === '_') {
            outcome[i] = 'O';
            $('#' + i.toString()).html("O");
            break; // consider putting this at the end of the checkPossibleWin function as a backup move if it will not execute after the function has been called.
          }
        }
      }


      if (outcome[4] === '_') {
        outcome[4] = 'O';
        $('#' + "4").html("O");

      } else if (turns === 1 && outcome[2] === '_') {
        outcome[2] = 'O';
        $('#' + "2").html("O");

      // } else if (turns >= 2) {
      //   checkForPossibleWin();

      } else {
        randomMove()
      }
      
    gameOver = gameWon(); //computer won!
    console.log(outcome);
  }  //playGame end function

  $(".square").on("click", playGame);
});
