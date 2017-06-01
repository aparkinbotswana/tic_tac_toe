


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
        console.log(condition);
        if (final === "XXX") {
          $("#gameMessageX").fadeIn()
          return true;

        } else if (final === "OOO") {
          $("#gameMessageO").fadeIn()
          return true;

        } else if (turns === 5) {
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

    // if statement evaluates players move and plays reactively to it depending where they have moved.

    // check for certain better-than-average moves and make them if possible

    // 1. check if center id available and take it if so


    // 2. check if any corner is available and take one

    for (var i = 0; i < outcome.length; i++) {

      if (outcome[4] === '_') {
        outcome[4] = 'O';
        $('#' + "4").html("O");
        break;

      } else if (outcome[2] === '_') {
        outcome[2] = 'O';
        $('#' + "2").html("O");
        break;

      }

      else if (outcome[i] === '_') {
        outcome[i] = 'O';
        $('#' + i.toString()).html("O");
        break;
      }
    }
    gameOver = gameWon(); //computer won!




  }  //playGame end function


  $(".square").on("click", playGame);



});
