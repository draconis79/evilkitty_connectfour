console.log("connect four");

$(()=>{
// < ---------- variables ---------->

let columns = 0;
let rows = 0;
let createGameBoard = 0;

// < ---------- create game board ---------->

const $container = $("<div>").addClass("container");
$("body").append($container);

const createGameBoard = (column) => {
    for (let i = 0; i < column; i++) {
            console.log(i);

const $circle = $("<div>").addClass("circle");

$($container).append($column);

const addCircle = (event) => {

const $shape = $(event.currentTarget);
                //shape here is a placeholder. need something here to change it to a circle.
$shape.attr("class", "circle");

  };

//event listeners

  $(".circle").on("click", addCircle)
};

};

});

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
