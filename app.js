console.log("connect four");


// Adding a game piece on the board at the start of the game.

$(() => {

  const createBoard = () => {
      // create a column with 7 rows
      // change camel case on id to class to sausage-case
      const $gameBoard = $("<div>").addClass("gameBoard");
      for (let i = 0; i < 6; i++) {
          // create 6 rows
          const $row = $("<div>").addClass("row");
          $row.attr("id", "row" + (i + 1));
          $gameBoard.append($row);
          for (let j = 0; j < 7; j++) {

              // create game slots
              const $circle = $("<div>").addClass("circle");
              $circle.addClass('empty');
              // setting up attribute for column to isolate column to do something.
              $circle.attr("row", (i + 1));
              $circle.attr("column", (j + 1));
              $circle.attr("id", ("row" + (i + 1) + "column" + (j + 1)));
              $row.append($circle);

          }
      }
      $(".container").append($gameBoard);
  }




    createBoard();





    let numMagSlots = 0;
    let numGreySlots = 0;

// creating argument slotToColor, whenever addColor is called it will take this variable. parameter slotchecked

    const addColor = (slotChecked) => {
      if (numMagSlots <= numGreySlots) {
        $(slotChecked).css("background-color", "darkmagenta").addClass('player1');
// increment number by 1 so that we know there's one more magenta slots, also adding a class.
        numMagSlots++;
        // console.log('player1');
        // console.log($('.player1'));
        // if there are more magenta slots than grey slots, then color slots we are checking to grey.
      } else {
        $(slotChecked).css("background-color", "darkgrey").addClass('player2');

        numGreySlots++;
        // console.log('player2');
        // console.log($('.player2'));
      }
    }
// creating event listener to listen to click taht has the circle class. starts anonymous function that takes the argument event.

    $(".circle").on("click", (event) => {
// loop counts/checks backwards bottom up
      for (i = 6; i > 0; i--) {
        // creating variable that pulls the number of the column from the column property, from the element that is clicked.
        let columnNum = $(event.target).attr("column");
        // this creates and stores the ID of the slot that you are currently checking.
        let slotChecked = '#row' + i + 'column' + columnNum;
        // console.log(slotChecked);
        // console.log($(slotChecked).hasClass('empty'));
        // creating a condition that evaluates whether or not the slot currentlychecking has an empty class.
        if ($(slotChecked).hasClass('empty')) {
          // if slot is empty, it's sending the id of the slot to the addColor function to the appropriate color.
          addColor(slotChecked);
          $(slotChecked).removeClass('empty');
          break;
        }
      }

    });



});
// });

// loop through all rows from wherever they click to bottom
// inside loop, check if next row has marker.

//
// // Once the game piece drops, toggle from player 1 to player 2.
//

//
//
// const playGame  = (event) => {
//
//   $createBoard.on("mouseenter", (event) => {
//   })
//
//
//     }


// setupEventListeners();

// };
//
//

// < ---------- variables ---------->

// const player1;
// const player1Color = darkmagenta
// const player2;
// const player2Color = darkgrey
// const moves = 0;
// const message = 0;
// const startGame = 0;
// const button = 0;
// const winner = 0;


// < ---------- create game board ---------->
// global variable that I will be able to use.
// set this on start to true: player 1 turn
// in click function, once click toggle.
// if true, player 1 = false
// if false, player 1 = true
// if player1 , then add this color chip
//
//
//
// add the chip
// go to a specific place
// then toggle



// < ---------- functions ---------->

// 1. start game, start gameboard
// 2. show player color

// 2. seclect column
// 3. if column has space, add game piece to column
// 3. Make game piece fall to bottom

// 2. if column does not have space, show player color
// 4. update board, see win/lose status
// 6. if four in a row win, if not back to #2.
// 5. switch player
// 7. restart game

// < ---------- start game ---------->

// < ---------- how to make game pieces fall to the bottom ---------->

// < ---------- how to be sure game pieces are not clickable or change after it is in position ---------->

// < ---------- go from player one to player two and back and forth ---------->

// < ---------- how to determin if the game is a draw when all piece are filled on the gameboard and no winner ---------->

// < ---------- how to determine winning state ---------->



// < ---------- on-click events ---------->

// < ---------- score board ---------->

// < ---------- end game ---------->
