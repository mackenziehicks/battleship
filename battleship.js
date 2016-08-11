$(document).ready(function(){
  //purpose: creates 10x 10 table
  //signature: none
  //examples: self explanatory
  function createTable(){
    //loop to add 10 rows
    for (var rowsCounter = 0; rowsCounter < 10; rowsCounter++) {
      //adds rows to the gameboard by append
      $("#gameBoard").append("<tr></tr>")
      //loop to add 10 columns
      for (var colCounter = 0; colCounter < 10;
        colCounter++){
          //adds 10 columns to the last row of the table
          $("tr").last().append("<td id="+ rowsCounter + colCounter +"></td>")
        }
      }
    };
    createTable();

    // function shoot(x,y){
    // each time a user clicks a space on the board,
    $("td").on("click",
    // the function will add the class to change the color and disable the space.
    function(){
      // if statement that pulls each digit from the ID and places it into the two indexes of the array and asks if it has a value or not
      if (counterOfHits < 5 && torpedoesLeft > 0) {
        if
        //.attr selects the attribute(anything after an equals sign) that you specify, pulling it from the location (i.e. using 'this')
        (board[($(this).attr("id").substring(0,1))][($(this).attr("id").substring(1))] === 0){
          // adds the class to change the screen color to show we already have shot at this space and disable the click ability
          $(this).addClass("shot").off("click");

        // if the array has a 1 in this spot, add teh class "hit" to change the color to red and disable the click function
        }else{
          $("#"+($(this).attr("id"))).addClass("hit").off("click");
          counterOfHits ++;
          $("#counterOfHits").text(counterOfHits);
        }
        // removes one from the torpedoesLeft
        torpedoesLeft -= 1;
        // shows the variable torpedoesLeft on the board
        $("#torpedoesLeft").text(torpedoesLeft);
      }; //end of counterofhits

      if (counterOfHits === 5){
        $("#gameStatus").text("YOU WIN!");
      }
      if (counterOfHits < 5 && torpedoesLeft === 0)
        {$("#gameStatus").text("YOU LOSE!");
        //accesses indexes saved in var answerkey and adds the class 'hit'
        $("#" + answerKey[0] + answerKey [1]).addClass("hit");
        $("#" + answerKey[2] + answerKey [3]).addClass("hit");
        $("#" + answerKey[4] + answerKey [5]).addClass("hit");
        $("#" + answerKey[6] + answerKey [7]).addClass("hit");
        $("#" + answerKey[8] + answerKey [9]).addClass("hit");
      }
  }); //end of on click
});// end of document.ready
  // creating variable to show number of torpedoes left to shoot
var torpedoesLeft = 25;
var board = [];
var counterOfHits = 0;
var answerKey = [];



function createBoard() {
  for (var array = 0; array < 10; array++) {
    board[array] = [0,0,0,0,0,0,0,0,0,0];
  }
}
createBoard();


//purpose: to place 5 ships at a random index in the array
//signature: nothing --> returns index
//examples: placeShip --> board[0][0]= 1
function placeShip() {
  //sets the number of ships to zero before the function is run
  var counterOfShips = 0;
  //if the counterOfShips is less than 5, the computer will pick a random number and defines it as var index
  while (counterOfShips < 5) {
    var index1 = Math.floor(Math.random() * 10);
    var index2 = Math.floor(Math.random() * 10);
    while (board[index1][index2] != 0){
      index1 = Math.floor(Math.random() * 10);
      index2 = Math.floor(Math.random() * 10);
    }
    board[index1][index2] = 1;
    counterOfShips += 1;
    console.log(index1,index2);
    //adds the index to an empty array and saves in var answerkey
    answerKey.push(index1,index2);
  }
}
placeShip();
