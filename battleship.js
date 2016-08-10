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
        if
        //.attr selects the attribute(anything after an equals sign) that you specify, pulling it from the location (i.e. using 'this') 
         (board[($(this).attr("id").substring(0,1))][($(this).attr("id").substring(1))] === 0){
          // adds the class to change the screen color to show we already have shot at this space and disable the click ability
          $(this).addClass("shot").off("click");
        }
        // if the array has a 1 in this spot, add teh class "hit" to change the color to red and disable the click function
        else{
          $("#"+($(this).attr("id"))).addClass("hit").off("click");
        }
          // removes one from the torpedoesLeft
          torpedoesLeft -= 1;
          // shows the variable torpedoesLeft on the board
          $("#torpedoesLeft").text(torpedoesLeft);
      });
    // }

  });// end of document.ready
// creating variable to show number of torpedoes left to shoot
var torpedoesLeft = 25;
var board = [];
var index1;
var index2;



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
    index1 = Math.floor(Math.random() * (9) + 1);
    index2 = Math.floor(Math.random() * (9) + 1);
    while (board[index1][index2] != 0){
      index1 = Math.floor(Math.random() * (9) + 1);
      index2 = Math.floor(Math.random() * (9) + 1);
    }
    board[index1][index2] = 1;
    counterOfShips += 1;
    console.log(index1,index2);

  }
}
placeShip();
