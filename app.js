// jQuery window onload
$(() => {

  // create a function to make a game board
  const createBoard = () => {
    // create element: div
    const $gameBoard = $("<div>").addClass("gameBoard");
    for (let i = 0; i < 6; i++) {
      // using for loop to dynamically create 6 rows on game board
      const $row = $("<div>").addClass("row");
      $row.attr("id", "row" + (i + 1));
      // appending row to the gameboard
      $gameBoard.append($row);
      for (let j = 0; j < 7; j++) {
        // create game slots on gameboard
        const $circle = $("<div>").addClass("circle");
        $circle.addClass("empty");
        // setting up attribution for each column to isolate column to do something later.
        $circle.attr("row", (i + 1));
        $circle.attr("column", (j + 1));
        $circle.attr("id", ("row" + (i + 1) + "column" + (j + 1)));
        $row.append($circle);
      }
    }
    // appending gameboard to the container div
    $(".container").append($gameBoard);
  }
  // Invoke gameboard to appear
  createBoard();




  // variables for game pieces
  let numMagSlots = 0;
  let numGreySlots = 0;

  // creating an argument slotChecked, whenever addColor is called, it will take this variable. Parameter slotChecked
  // allows game to alternate turns (colors) from each player

  const addColor = (slotChecked) => {
    if (numMagSlots === numGreySlots) {
      $(slotChecked).css("background-color", "darkmagenta").addClass("player1");
      // increment number by 1 so that we know there's one more magenta slot, also adding a class of player1.
      numMagSlots++;
      checkForWinner("player1");
      // console.log('player1');
      // when player1 = 1 and player2 = 0 after a magenta slots is placed on the board, it will alternateto a grey slot from player2
    } else {
      $(slotChecked).css("background-color", "darkgrey").addClass("player2");
      // increment number by 1 so that we know there's one more dark grey slot, also adding a class of player2.
      numGreySlots++;
      // console.log('player2');
      checkForWinner("player2");
    }
  }

// Once slot takes color, get player class of last colored slot.
// Create a loop that counts consecutive player-class-marked slots.

  const checkForWinner = (playerClass) => {
    let slotCount = 0;
    let player = eval("'" + playerClass + "'");
    // console.log(player);
    // For loop counting each slot starting from column 1 top down
    for (let i = 1; i <= 7; i++) {
      for (let j = 1; j <= 6; j++) {
        let currentSlot = ("$('#row" + j + "column" + i + "')");
        // console.log(currentSlot);
        // if the player reached 4 consecutive player class marked slots, we have a winner
        if (eval(currentSlot).hasClass(player) && slotCount === 3) {
          alert("You win!");
          // increment color slot by 1 if determined not yet a winner
          // tracking how many circle is not filled with current player
        } else if (eval(currentSlot).hasClass(player)) {
          slotCount++;
          // console.log(slotCount);
          // counts class not marked and opponent color is count as unmarked
        } else {
          slotCount = 0;
          // console.log(slotCount);
        }
      }
      // Reset slot count to 0 to make sure win scenario is correct
      slotCount = 0;
    }
    // For loop counting each slot starting from row 1 left right
    for (let j = 1; j <= 6; j++) {
      for (let i = 1; i <= 7; i++) {
        let currentSlot = ("$('#row" + j + "column" + i + "')");
        // console.log(currentSlot);
        if (eval(currentSlot).hasClass(player) && slotCount === 3) {
          alert("You win!");
        } else if (eval(currentSlot).hasClass(player)) {
          slotCount++;
          // console.log(slotCount);
        } else {
          slotCount = 0;
          // console.log(slotCount);
        }
      }
      slotCount = 0;
    }
  }


    // creating event listener to listen to click that has the circle class. starts anonymous function that takes the argument event.

  $(".circle").on("click", (event) => {
    // loop counts/checks backwards bottom up
    for (i = 6; i > 0; i--) {
      // creating variable that pulls the number of the column from the column property, from the element that is clicked.
      let columnNum = $(event.target).attr("column");
      // this creates and stores the ID of the slot that is currently being checked.
      let slotChecked = "#row" + i + "column" + columnNum;
      // console.log(slotChecked);
      // console.log($(slotChecked).hasClass('empty'));
      // creating a condition that evaluates whether or not the slot is currently checked and has an empty class.
      if ($(slotChecked).hasClass("empty")) {
        // if slot is empty, it's sending the id of the slot to the addColor function to add the appropriate color.
        addColor(slotChecked);
        // let the code know that the slot is no longer empty
        $(slotChecked).removeClass("empty");
        // adding break here to stop the loop, or else will color entire column. checked that this works.
        break;
      }
    }
  });


// Onload Closure
});

// Message for player to start the game
alert("Player 1, start game by clicking on a column.");
