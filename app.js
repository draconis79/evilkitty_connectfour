console.log("connect four");


// Adding a game piece on the board at the start of the game.

$(() => {

  const createBoard = () => {
      // create a column with 7 rows
      const $gameBoard = $("<div>").addClass("gameBoard");
      for (let i = 0; i < 6; i++) {
          // create 6 columns
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
              // .attr("data-column", column)
              // .attr("data-row", row)
              $row.append($circle);

          }
      }
      $(".container").append($gameBoard);
  }


    // const playGame = (event) => {
    //     const $row = $(event.currentTarget).parent().attr("id");
    //
    //
    //     const $dropChip = $(`#${$row}`).contents();
    //     // console.log($dropChip);
    //     for (let i = $dropChip.length - 1; i >= 0; i--) {
    //         const $circle = $dropChip.eq(i);

            // if (!$dropChip.eq(i).attr("value")) {
            //     if ($switchPlayer === true) {
            //         $dropChip.eq(i).css("background-color", "darkmagenta")
            //     } else if ($switchPlayer === false) {
            //         $dropChip.eq(i).css("background-color", "darkgrey")
            //     }
            // }

        // }
        // const inputRed = (event) => {
        //     let player1 = $(event.currentTarget).css('background-color', "darkmagenta");
        //     // console.log(player1);
        //
        //
        // }
        // $dropChip.on("click", inputRed);


    // }



    createBoard();

    // $(".circle").on("click", playGame);



    let magSlots = 0;
    let greySlots = 0;


    const addColor = () => {
      if (magSlots <= greySlots) {
        $(event.target).css("background-color", "darkmagenta").addClass('player1');

        magSlots++;
        // console.log('player1');
        // console.log($('.player1'));
      } else {
        $(event.target).css("background-color", "darkgrey").addClass('player2');

        greySlots++;
        // console.log('player2');
        // console.log($('.player2'));
      }
    }

    $(".circle").on("click", (event) => {




      // let c1EmptySlot = 6;
      // let c2EmptySlot = 6;
      // let c3EmptySlot = 6;
      // let c4EmptySlot = 6;
      // let c5EmptySlot = 6;
      // let c6EmptySlot = 6;
      // let c7EmptySlot = 6;
      //
      // let columnNum = $(event.target).attr("column");
      // let counterVar = eval("c" + columnNum + "EmptySlot");
      // let bottomEmptySlot = ("row" + counterVar + "column" + columnNum);
      // console.log(bottomEmptySlot);
      // Maybe figure out how to decrement from afar?
      // eval(counterVar) -- ;

      for (i = 6; i > 0; i--) {
        let columnNum = $(event.target).attr("column");
        let slotChecked = '#row' + i + 'column' + columnNum;
        console.log(slotChecked);
        if ($(slotChecked).hasClass('empty')) {
          addColor();
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
