$(() => {

  const createBoard = () => {
    // create a gameboard
    // change camel case on id class to sausage-case
    const $gameBoard = $("<div>").addClass("gameBoard");
    for (let i = 0; i < 6; i++) {
      // create 6 rows on gameboard
      const $row = $("<div>").addClass("row");
      $row.attr("id", "row" + (i + 1));
      // appending row to the gameboard
      $gameBoard.append($row);
      for (let j = 0; j < 7; j++) {

        // create game slots on gameboard
        const $circle = $("<div>").addClass("circle");
        $circle.addClass('empty');
        // setting up attribute for each column to isolate column to do something later.
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



  // variables
  let numMagSlots = 0;
  let numGreySlots = 0;

  // creating an argument slotChecked, whenever addColor is called, it will take this variable. Parameter slotChecked
  // allows game to alternate turns (colors) from each player

  const addColor = (slotChecked) => {
    if (numMagSlots === numGreySlots) {
      $(slotChecked).css("background-color", "darkmagenta").addClass('player1');
      // increment number by 1 so that we know there's one more magenta slot, also adding a class of player1.
      numMagSlots++;
      checkForWinner('player1');
      // console.log('player1');
      // if there are more magenta slots than grey slots, then color slots we are checking to grey.
    } else {
      $(slotChecked).css("background-color", "darkgrey").addClass('player2');
      // increment number by 1 so that we know there's one more dark grey slot, also adding a class of player2.
      numGreySlots++;
      // console.log('player2');
      checkForWinner('player2');
      // break;
    }
  }
// create 3 diff functions inside to check row, check column and check diagonal.

// Once slot takes color, get player class of last colored slot.
// Create a loop that counts consecutive player-class-marked slots.

  const checkForWinner = (playerClass) => {
    let slotCount = 0;
    let player = eval("'" + playerClass + "'");
    console.log(player);
    for (let i = 1; i <= 7; i++) {
      for (let j = 1; j <= 6; j++) {
        let currentSlot = ("$('#row" + j + "column" + i + "')");
        // console.log(currentSlot);
        if (eval(currentSlot).hasClass(player) && slotCount === 3) {
          alert('You win!');
        } else if (eval(currentSlot).hasClass(player)) {
          slotCount++;
          console.log(slotCount);
        } else {
          slotCount = 0;
          console.log(slotCount);
        }
      }
      slotCount = 0;
    }
    for (let j = 1; j <= 6; j++) {
      for (let i = 1; i <= 7; i++) {
        let currentSlot = ("$('#row" + j + "column" + i + "')");
        // console.log(currentSlot);
        if (eval(currentSlot).hasClass(player) && slotCount === 3) {
          alert('You win!');
        } else if (eval(currentSlot).hasClass(player)) {
          slotCount++;
          console.log(slotCount);
        } else {
          slotCount = 0;
          console.log(slotCount);
        }
      }
      slotCount = 0;
    }
  }


// when a color is clicked, check for winner
// determine color(player)

// everytime a game piece is clicked, check to see if player has connect four.
// check if there are 4 color slots that match up in rows and columns
// check circle next to where circle was clicked left, right,
// check circle to where it was clicked up, and down, if it's the same class,
// if it reaches four of the same has class player 1 or player 2, you have a winner.






    // creating event listener to listen to click that has the circle class. starts anonymous function that takes the argument event.

  $(".circle").on("click", (event) => {
    // loop counts/checks backwards bottom up
    for (i = 6; i > 0; i--) {
      // creating variable that pulls the number of the column from the column property, from the element that is clicked.
      let columnNum = $(event.target).attr("column");
      // this creates and stores the ID of the slot that is currently being checked.
      let slotChecked = '#row' + i + 'column' + columnNum;
      // console.log(slotChecked);
      // console.log($(slotChecked).hasClass('empty'));
      // creating a condition that evaluates whether or not the slot is currently checking has an empty class.
      if ($(slotChecked).hasClass('empty')) {
        // if slot is empty, it's sending the id of the slot to the addColor function to add the appropriate color.
        addColor(slotChecked);
        // let the code know that the slot is no longer empty
        $(slotChecked).removeClass('empty');
        // adding break here to stop the loop, or else will color entire column. checked that this works.
        break;
      }
    }
  });


// Onload Closure
});
