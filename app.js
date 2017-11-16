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
        if (numMagSlots !== numGreySlots) {
            $(slotChecked).css("background-color", "darkmagenta").addClass('player1');
            // increment number by 1 so that we know there's one more magenta slot, also adding a class of player1.
            numMagSlots++;
            checkForWinner();
            // console.log('player1');
            // if there are more magenta slots than grey slots, then color slots we are checking to grey.
        } else {
            $(slotChecked).css("background-color", "darkgrey").addClass('player2');
            // increment number by 1 so that we know there's one more dark grey slot, also adding a class of player2.
            numGreySlots++;
            // console.log('player2');
            checkForWinner();
            // break;
        }
    }


    // check if there are 4 color slots that match up in rows and columns
    // check circle next to where circle was clicked left, right, up, and down, if it's the same class, check again, until it reaches four of the same has class player 1 or player 2.
    // everytime a game piece is clicked, check to see if player has connect four.

    // takes argument row and column
    // const checkForWinner = (row, column) {
    //   checkDirection(row);
    //   checkDirection(column);
      // lets say we click on row 2, column 2, we need to check in the direction up and down


      const checkDirection = (direction) => {
      // check if color that was just clicked matches the color we are looking for
      // keeping track of total of slots
      let total = 0;
      // row that is passed in and in the i direction
      let i = $(gameboard + direction.i);
      // column that is passed in and in the i direction
      let j = $($row + direction.j);

      while (i >= 0 && i < rows && j >= 0 && j < gameboard)
          total++;
      i += direction.i;
      j += direction.j;
      return total;
  }


  // direction A = up
  // direction B = down
  const checkForWinner = (directionA, directionB) => {
      const total = 1 +
          // everything above
          checkDirection(directionA) +
          // everything below
          checkDirection(directionB);
      if (total >= 4) {
          return player1;
      } else {
          return null;
      }
  }
  // row direction from up to down
  const checkUpDown = () => {
      // pass in i of -1 and j of 0, pass in a direction going up (i: -1, j:0), then down (i: 1, j:0)
      return checkWinner({
          i: -1,
          j: 0
      }, {
          i: 1,
          j: 0
      })
  }
  // row direction from left to right
  const checkLeftRight = () => {
      // pass in i of -1 and j of 0, pass in a direction going left and right)
      return checkWinner({
          i: 0,
          j: -1
      }, {
          i: 0,
          j: 1
      })
  }

  const checkDiagonalBottomLeftToTopRight = () => {
      return checkWin({
          i: 1,
          j: -1
      }, {
          i: 1,
          j: 1
      });
  }

  const checkDiagonalTopLeftToBottomRight = () => {
      return checkWin({
          i: 1,
          j: 1
      }, {
          i: -1,
          j: -1
      });
  }

checkVerticals() || checkHorizontals() || checkDiagonalBottomLeftToTopRight() || checkDiagonalTopLeftToBottomRight();


    //
    //
    // // place this higher than function
    //       const winner = checkWinRowColumn (row, column)
    //         if (winner) {
    //           // do something here
    //           alert("message for winning player here")
    //           return;
    //         }




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



});



// < ---------- functions ---------->

// < ---------- how to be sure game pieces are not clickable or change after it is in position ---------->

// < ---------- how to determin if the game is a draw when all piece are filled on the gameboard and no winner ----------> if four in a row win, if not back to next player.

// < ---------- how to determine winning state ---------->

// < ---------- end game ---------->

// < ---------- restart game ---------->
