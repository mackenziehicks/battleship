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
          $(this).addClass("shot").off("click");
          // removes one from the torpedoesLeft
          torpedoesLeft -= 1;
          // shows the variable torpedoesLeft on the board
          $("#torpedoesLeft").text(torpedoesLeft);
      });
    // }

  });// end of document.ready
// creating variable to show number of torpedoes left to shoot
var torpedoesLeft = 25

// 2nd 
