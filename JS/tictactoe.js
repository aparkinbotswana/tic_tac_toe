


$(document).ready(function() {
  console.log("linked");

  var player = true
  var x = "X"
  var o = "O"

  var outcome = ["_", "_", "_", "_", "_", "_", "_", "_", "_"];

  var playGame = function(e) {
    // console.log(outcome);
    var i;

    if (player === true) {
      // console.log("player 1 turn " + player);
      $(this).html(x)
      i = parseInt(this.id);
      outcome[i] = 'X';

      console.log(outcome);

    } else {
      // console.log("player 2 turn " + player);
      $(this).html(o)
      i = parseInt(this.id);
      outcome[i] = 'O';

      console.log(outcome);

    }

    // cycles through the player 1 and player 2.
    if (player){player=false}else player = true;


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






// Switch turns between X and O (or whichever markers you select)



// Visually display which side won if a player gets three in a row or show a draw/"cat’s game" if neither wins ---------------------Perhaps include a hidden div which only shows when the game has finished with relevant message

// DONE--------------------------------
// Include separate HTML / CSS / JavaScript files


// Use Javascript for DOM manipulation


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
