console.log("connect four");

$(()=>{
// < ---------- variables ---------->

// const player1 = 0;
// const player2 = 0;
// const message = 0;
// const startGame = 0;
// const button = 0;
// const winner = 0;


// < ---------- create game board ---------->

const createBoard = () => {
// create a column with 7 rows
    const $gameBoard = $("<div>").addClass("gameBoard");
    for (let i = 0; i < 7; i++) {
// create 6 columns
        const $columnSelector = $("<div>").addClass("columnSelector");
        $columnSelector.attr("columnSelector" + (i));
        for (let j = 0; j < 6; j++) {
// create game slots
            const $circle = $("<div>").addClass("circle");
            $columnSelector.append($circle);
        }
        $gameBoard.append($columnSelector);
    }
    $(".container").append($gameBoard);
}





// const $circle = $("<div>").addClass("circle");
//
// $($container).append($column);
//
// const addCircle = (event) => {
//
// const $shape = $(event.currentTarget);
//                 //shape here is a placeholder. need something here to change it to a circle.
// $shape.attr("class", "circle");
//
//   };

//event listeners

//   $(".circle").on("click", addCircle)
// };
//
// };



// < ---------- create rows ---------->






// < ---------- create columns ---------->


// const $column1 = $("<div>").addClass("column").attr("id", "column1");
// const $column2 = $("<div>").addClass("column").attr("id", "column2");
// const $column3 = $("<div>").addClass("column").attr("id", "column3");
// const $column4 = $("<div>").addClass("column").attr("id", "column4");
// const $column5 = $("<div>").addClass("column").attr("id", "column5");
// const $column6 = $("<div>").addClass("column").attr("id", "column6");
// const $column7 = $("<div>").addClass("column").attr("id", "column7");

// < ---------- adding columns to gameboard ---------->
// $gameBoard.append($column1);
// $gameBoard.append($column2);
// $gameBoard.append($column3);
// $gameBoard.append($column4);
// $gameBoard.append($column5);
// $gameBoard.append($column6);
// $gameBoard.append($column7);


// < ---------- functions ---------->

// 1. start game
// 2. seclect column
// 3. Make game piece fall to bottom
// 4. update board
// 5. switch player
// 6. determine winner
// 7. restart game


createBoard();






});
// < ---------- start game ---------->

// < ---------- how to make game pieces fall to the bottom ---------->

// < ---------- how to be sure game pieces are not clickable or change after it is in position ---------->

// < ---------- go from player one to player two and back and forth ---------->

// < ---------- how to determin if the game is a draw when all piece are filled on the gameboard and no winner ---------->

// < ---------- how to determine winning state ---------->

// < ---------- event listeners ---------->

// < ---------- on-click events ---------->

// < ---------- score board ---------->

// < ---------- end game ---------->
