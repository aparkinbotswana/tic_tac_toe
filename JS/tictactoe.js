$(document).ready(function() {

  let outcome = ["_", "_", "_", "_", "_", "_", "_", "_", "_"];
  let turns = 0;
  let gameOver = false; // gameOver letiable
  let winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]];


  let gameWon = function(){

    for (let i = 0; i < winCondition.length; i++) {
      condition = winCondition[i]
        let win = []
      for (let j = 0; j < condition.length; j++) {
        let position = condition[j];
        win.push(outcome[position]);
        let final = win.join('')
        if (final === "XXX") {
          $("#gameMessageX").fadeIn()
          return true;

        } else if (final === "OOO") {
          $("#gameMessageO").fadeIn()
          return true;

        } else if (turns === 5 && i === 7) {

          $("#gameMessageDraw").fadeIn()
          $("#notTheBees").attr("src", $("#notTheBees").attr("src").replace("autoplay=0", "autoplay=1"));
          $("#notTheBees").fadeIn()
          return false;
        }
      }
    }
    return false;
  }// function called after every human and computer move to determine if there has been a win. turns letiable is increased by one in every click function to determine when all moves have been made. if there is no win condition met when all boxes have been taken, it will declare a draw


  let gameUpdate = function(outcomePosition, player) {
    outcome[outcomePosition] = player;
    $('#' + outcomePosition).html(player);
  }


  let playGame = function() {
    //  if statement checking if a player has already taken a move in a box and prevents them or the computer  from changing it
    if ($(this).html() === "X" || $(this).html() === "O") {
      return;
    }

    let i;
    turns +=1;
    console.log(turns);
    $(this).html("X")
    i = parseInt(this.id); // interaction with DOM to visually represent "X" on the gameboard.
    outcome[i] = "X"; // pushes the players move into an array which assesses victory conditions

    gameOver = gameWon();
    if( gameOver ) {
      // human won!
      return;  // don't let computer play its turn!
    }


    // following if statement and function evaluates players move and plays reactively to it.
    let checkForWin = function (player) {
      for (let i = 0; i < winCondition.length; i++) {
        let mayWinCheck = winCondition[i];
        let mayWin = [];
        let emptyIndex = null;
        let xCount = 0;
        let playerCount = 0;

        for (let j = 0; j < mayWinCheck.length; j++) {

          let checkIndex = mayWinCheck[ j ];
          let squareValue = outcome[ checkIndex ];
          if( squareValue === '_'){
            // if we see an empty spot, save its index for later, in case it's the one we need to take
            emptyIndex = checkIndex;
          } else if( squareValue === player ){
            // if we see an O, increment our count of found Os
            playerCount += 1;
          }
        } // loop over each index of a win combo
        if ( playerCount === 2 && emptyIndex !== null ) {
          // play the move for O into the empty position
          outcome[emptyIndex] = 'O';
          $('#' + emptyIndex.toString()).html('O');
          return true;
        }
      } // loop over each win combo as a whole
      return false
    }


    let randomMove = function() {
      console.log('random move made');
      for (let i = 0; i < outcome.length; i++) {
        if (outcome[i] === '_') {
          outcome[i] = 'O';
          $('#' + i.toString()).html("O");
          break;
        }
      }
    }


    if (outcome[4] === '_') {
      gameUpdate(4, 'O'); // optimal move on computer 1st turn
    } else if (turns === 1 && outcome[2] === '_') {
      gameUpdate(2, 'O'); // alternate move on computer 1st turn
    } else if (turns === 2 && outcome[4] === 'X') {
      let found = checkForWin('X');
      if (!found && outcome[0] === '_') {
        gameUpdate(0, 'O');
      } else if (!found && outcome[6] === '_') {
        gameUpdate(6, 'O');
      }
    } else if (turns === 2 && outcome[4] === 'O') {
      let found = checkForWin('X');
      if (!found && outcome[1] === '_') {
        gameUpdate(1, 'O');
      } else if (!found && outcome[5] === '_') {
        gameUpdate(5, 'O');
      } else if (!found && outcome[3] === '_') {
        gameUpdate(3, 'O');
      }
    } else if (turns > 2) {
      let found = checkForWin('O');
      if(!found){
        let found = checkForWin('X');
        if (!found) {
          randomMove()
        }
      }
    }

    gameOver = gameWon(); //computer won!
    console.log(outcome);
  }  //playGame end function

  $(".square").on("click", playGame);
});
