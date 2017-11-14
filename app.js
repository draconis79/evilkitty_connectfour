console.log("connect four");


const createBoard = () => {
// create a column with 7 rows
    const $row = $("<div>").addClass("row");
    for (let i = 0; i < 6; i++) {
// create 6 columns
        const $column = $("<div>").addClass("column");
              $column.attr("id", "column" + (i + 1));
        for (let j = 0; j < 7; j++) {

// create game slots
            const $circle = $("<div>").addClass("circle");
            $column.append($circle);
        }
        $row.append($column);
    }
    $(".container").append($row);
}







// < ---------- event listeners ---------->

// setupEventListerners  = () => {
//
//   $circle.on("mouseenter", (event) => {
//     console.log("here", "column");
//   })
// });



$(()=> {

createBoard();
// setupEventListerners();
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

});
// < ---------- create game board ---------->








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
