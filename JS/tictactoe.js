


$(document).ready(function() {

  // var player = true

  var outcome = ["_", "_", "_", "_", "_", "_", "_", "_", "_"];

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
      for (var j = 0; j < condition.length; j++) {
        
      }
    }
  }

  var playGame = function(e) {
    // encompassing if statement checking if a player has already taken a move in a box and prevents other player from changing it
    if ($(this).html() === "X" || $(this).html() === "O") {
      return

    } else {

      var i;

      // if (player) {player = false} else player = true;

      // if (player === true) {

      // interaction with DOM to visually represent "X" on the gameboard.
      $(this).html("X")
      i = parseInt(this.id);
      // pushes the players move into an array which assesses victory conditions
      outcome[i] = "X";

      // if statement evaluates players move and plays reactively to it depending where they have moved.
      for (var i = 0; i < outcome.length; i++) {
        if (outcome[i] === '_') {
          outcome[i] = 'O';
          $('#' + i.toString()).html("O");
          break;
        }
      }

      gameWon();

      // I have eight victory conditions and 1 draw condition. players will only be notified of a draw if all moves have been taken. a means to do this is by perhaps looking at the inner html of all square classes to make sure that it has one thing in it or the other. once that criteria has been met, and if nobody has won, that is when a draw will be called.



    }


  }


  $(".square").on("click", playGame);



});



//
// Big Goals
//
// DONE----------------------------
// Build a dynamic game that allows two players to compete

// Craft a readme.md file that explains your app to the world
// Technical Requirements
//
// Your app must:
//

// DONE----------------------------
// Render a game board in the browser

// DONE----------------------------
// Switch turns between X and O (or whichever markers you select)



// Visually display which side won if a player gets three in a row or show a draw/"cat’s game" if neither wins ---------------------Perhaps include a hidden div which only shows when the game has finished with relevant message

// DONE--------------------------------
// Include separate HTML / CSS / JavaScript files

// DONE-------------------------------
// Use Javascript for DOM manipulation

// DONE-------------------------------
// Deploy your game online, where the rest of the world can access it








// Bonus
// These are for extra credit! Don't focus on these until you've hit the core requirements.
//
// Keep track of multiple game rounds with a win counter
// Allow players to customize their tokens (X, O, name, picture, etc)
// Get inventive with your styling, e.g. use hover effects or animations to spiff things up
// Use LocalStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity
// Support custom board sizes: default is 3x3 but you could allow users to choose a larger board
// Support networked multiplayer: https://www.firebase.com/ has a nice quickstart guide
// TRICKIEST: Create an AI opponent: teach Javascript to play an unbeatable game against you
// Necessary Deliverables
//
// A working game, built by you, hosted somewhere on the internet
// A link to your hosted working game in the URL section of your Github repo
// A git repository hosted on Github, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
// A readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.
// Suggested Ways to Get Started
//
// Break the project down into different components (data, presentation, views, style, DOM manipulation) and brainstorm each component individually. Use whiteboards!
// Use your Development Tools (console.log, inspector, alert statements, etc) to debug and solve problems
// Work through the lessons in class, ask questions and come to office hours when you need to. Think about adding relevant code to your Tic Tac Toe game each night, instead of, you know... procrastinating.
// Check out Tutorial and Documentation resources (jQuery tutorial) at home to better understand what you’ll be getting into.
