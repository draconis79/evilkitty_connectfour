console.log("connect four");

let switchPlayer = 0;



const createBoard = () => {
    // create a column with 7 rows
    const $gameBoard = $("<div>").addClass("gameBoard");
    for (let i = 0; i < 6; i++) {
        // create 6 columns
        const $row = $("<div>").addClass("column");
        $row.attr("id", "row" + (i + 1));
        $gameBoard.append($row);
        for (let j = 0; j < 7; j++) {

            // create game slots
            const $circle = $("<div>").addClass("circle");
            // setting up attribute for column to isolate column to do something.
            $circle.attr("row", (i + 1));
            $circle.attr("column", (j + 1));
            $row.append($circle);

        }
    }
    $(".container").append($gameBoard);
}

// Adding a game piece on the board at the start of the game.
// < ---------- event listeners ---------->
$(() => {

    const playGame = (event) => {
        const $row = $(event.currentTarget).parent().attr("id");
        console.log($row);

    const $dropChip = $(`#${$row}`).contents();
      console.log($dropChip);
    for (let i = 0; i < $dropChip.length - 1; i--) {

        // if ($switchPlayer === true) {
        //     $dropChip(i).css("background-color", "darkmagenta") add class or id here
        // } else if ($switchPlayer === false) {
        //   $dropChip(i).css("background-color", "darkgrey") add class or id here
        // }


// loop through all rows from wherever they click to bottom
// inside loop, check if next row has marker.
    }

}

createBoard();

$(".circle").on("click", playGame);



});



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
