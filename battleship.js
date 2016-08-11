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

    // function shoot(x,y)
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
      for (i =0; i < answerKey.length; i = i+2) {
        $("#" + answerKey[i] + answerKey[i + 1]).addClass("hit");
      }
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

function placeFiveShip(){
  var index1 = Math.floor(Math.random() * 5);
  var index2 = Math.floor(Math.random() * 5);
  for (var i = 0; i < 5; i++) {
    board[index1][index2 + i];
    answerKey.push(index1, index2 + i)
  };}
    placeFiveShip();
    console.log(answerKey);



//purpose: to place 5 ships at a random index in the array
//signature: nothing --> returns index
//examples: placeShip --> board[0][0]= 1
function placeShip() {
  //sets the number of ships to zero before the function is run
  var counterOfShips = 0;
  //if the counterOfShips is less than 5, the computer will pick a random number and defines it as var index
  while (counterOfShips < 5) {
    var index1;
    var index2;
      // creating a function to re-assign two variables to two random values
      function oneBlockShip() {
        index1 = Math.floor(Math.random() * 10);
        index2 = Math.floor(Math.random() * 10);
        console.log(""+index1+index2);
        }
      oneBlockShip();
      var issue = 0;
      function checkTr(){
        console.log("running checkTr");
        // checking each tr for ships right only
        if (index2 === 0) {
          if (board[index1][index2 + 1] === 1) {
            oneBlockShip();
            console.log("if#1 "+index1+index2);
            issue++;
          };
        };
        //checking each tr for ships left only
        if (index2 === 9) {
          if (board[index1][index2 - 1] === 1) {
            oneBlockShip();
            console.log("if#2 "+index1+index2);
            issue++;
          };
        };
        //for the inside rows check both left and right spaces for a ship
        if ((!(index2 === 0)) && (!(index2 === 9))) {
          if ((board[index1][index2 - 1] === 1) ||
          (board[index1][index2 + 1] === 1)) {
            oneBlockShip();
            console.log("if#3 "+index1+index2);
            issue++;
          };
        };
        //vertical td
        //checking the top row
        if (index1 ===0) {
          if (board[index1 + 1][index2] === 1) {
            oneBlockShip();
            console.log("if#4 "+index1+index2);
            issue++;
          };}
          //   //checking the bottom row
        if (index1 === 9) {
          if (board[index1 - 1][index2] === 1) {
            oneBlockShip();
            console.log("if#5 "+index1+index2);
            issue++;
              };}
              //checking middle rows
        if ((!(index1 === 0)) && (!(index1 === 9))) {
          if ((board[index1 + 1][index2] === 1) ||
            (board[index1 - 1][index2] === 1)) {
              oneBlockShip();
              console.log("#6" + index1 + index2);
            };};
        if (board[index1][index2] != 0){
            oneBlockShip();
          console.log("same spot "+index1+index2);
          issue++;
        };
      };
          checkTr();
          if (issue > 0){
            issue = 0;
             checkTr();
          }
                board[index1][index2] = 1;
                counterOfShips += 1;
                console.log(index1,index2);
                //adds the index to an empty array and saves in var answerkey
                answerKey.push(index1,index2);
              };
            }
              //
              // placeShip();
