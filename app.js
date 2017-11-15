$(() => {

    const createBoard = () => {
        // create a column with 7 rows
        // change camel case on id class to sausage-case
        const $gameBoard = $("<div>").addClass("gameBoard");
        for (let i = 0; i < 6; i++) {
            // create 6 rows on gameboard
            const $row = $("<div>").addClass("row");
            $row.attr("id", "row" + (i + 1));
            $gameBoard.append($row);
            for (let j = 0; j < 7; j++) {

                // create game slots on gameboard
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



// Invoke gameboard to appear
    createBoard();




    let numMagSlots = 0;
    let numGreySlots = 0;

    // creating an argument slotChecked, whenever addColor is called, it will take this variable. Parameter slotChecked

    const addColor = (slotChecked) => {
        if (numMagSlots <= numGreySlots) {
            $(slotChecked).css("background-color", "darkmagenta").addClass('player1');
            // increment number by 1 so that we know there's one more magenta slot, also adding a class.
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
