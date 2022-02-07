
// Checking whether the entered digit is between 1-9 or not 

// document.getElementById("sudokuBoard").addEventListener("keyup", function(event){
//     if(event.target && event.target.nodeName == "TD"){
//         var validNum = /[1-9]/;
//         var tdE1 = event.target;
//         if(tdE1.innerText.length > 0 && validNum.test(tdE1.innerText[0])){
//             tdE1.innerText = tdE1.innerText[0];
//         }else{
//             tdE1.innerText = "";
//         }
//     }
// });



// document.getElementById(solveButton).addEventListener("click",function(event){
//     var boardString = boardToString();
//     var solution = SudokuSolver.solve(boardString);
//     if(solution){
//         stringToBoard(solution);
//     }else{
//         alert("Invalid board!");
//     }
// });

// document.getElementById("clearButton").addEventListener("click",clearBoard);

// // Function for clearing the board

// function clearBoard(){
//     var tds = document.getElementsByTagName("td");
//     for(var i= 0;i<tds.length;i++){
//         tds[i].innerText = "";
//     }
// }

// // Function that will return the string to the board

// function boardToString(){
//     var string = "";
//     var validNum = /[1-9]/;
//     var tds = document.getElementsByTagName("td");
//     for(var i=0;i<tds.length;i++){
//         if(validNum.test(tds[i].innerText[0])){
//             string += tds[i].innerText;
//         }else{
//             sting += "-";
//         }
//     }
//     return string;
// }

// // Function that will convert the String to the board

// function stringToBoard(string){
//     var currentCell;
//     var validNum = /[1-9]/;
//     var cells = string.split("");
//     var tds = document.getElementsByTagName("td");
//     for(var i=0;i<tds.length;i++){
//         currentCell = cells.shift();
//         if(validNum.test(currentCell)){
//             tds[i].innerText = currentCell;
//         }
//     }
// }