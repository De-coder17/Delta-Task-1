// collecting all elements and classes
const upperGrid = document.querySelector(".upperGrid");

const lowerGrid = document.querySelector(".lowerGrid");

const upperGridCells = document.querySelectorAll(".ugcell");

const lowerGridCells = document.querySelectorAll(".lgcell");

const playAreas = document.querySelectorAll(".playArea")

const resetButton = document.querySelector("#reset-game");

const winningText = document.querySelector("#winningText");

const movesTaken = document.querySelector("#moves");

const easyGame = document.querySelector("#easyGame");
const hardGame = document.querySelector("#hardGame")

const easyBtn = document.querySelector("#Easy-Mode");
const hardBtn = document.querySelector("#Hard-Mode");

const playerName = document.querySelector("#playername");
const btnInsert = document.querySelector("#btnInsert");
const scoreOutput = document.querySelector("#scoreOutput");

const scoreSheet = document.querySelector("#scorekeeper");

hardGame.style.display = "none";
scoreSheet.style.display = "none";



easyBtn.addEventListener("click" , function(){
    clickSound.play();
    easyGame.style.display = "inline";
    hardGame.style.display = "none";

})

hardBtn.addEventListener("click", function(){
    clickSound.play();
    easyGame.style.display = "none";
    hardGame.style.display = "inline";
})

let winSound = new Audio();
winSound.src = "victory.mp3";

let clickSound = new Audio();
clickSound.src = "click.mp3";

movesTaken.style.display = "none"

winningText.style.display = "none"

let isGameOver = false;
let isGameOver2 = false;

let noOfMoves = 0;
let noOfMoves2 = 0;



// timer code
let seconds = 00;
let tens = 00;
let appendTens = document.querySelector("#tens");
let appendseconds = document.querySelector("#seconds");
let buttonStart = document.querySelector("#button-start");
let buttonStop = document.querySelector("#button-stop");
let buttonReset = document.querySelector("#button-reset");

let interval;

function startTimer(){
    tens++;

    if(tens<9){
        appendTens.innerHTML = "0" + tens;
    }
    if(tens>9){
        appendTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        appendseconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if(seconds>9){
        appendseconds.innerHTML = seconds;
    }
}

buttonStart.addEventListener("click" , function(){
    clickSound.play();
    interval = setInterval(startTimer);
})

buttonStop.addEventListener("click" , function(){
    clickSound.play();
    clearInterval(interval);
})

buttonReset.addEventListener("click" , function(){
    clickSound.play();
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    appendseconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
})
  
// defininf a array of colors 
const colorsOfGrid = ["Aquamarine" , "Brown" , "Chartreuse" , "Crimson" , "DarkSeaGreen" , "DarkSalmon" , "Gold" , "SteelBlue"]

//Defining a function which generates random no: between 0 to 8 using Math object
function randomizer8(){
    let rNo = Math.floor(Math.random() * 8);
    return rNo;
}
//defining an epmty array for upper grid colors
let upperGridColors = [];



// coloring upper grid
 for( let i = 0; i < 9; i++){
     let upperGridCell = upperGridCells[i];
     let colorNo = randomizer8();
     upperGridCell.style.backgroundColor = colorsOfGrid[colorNo];

     
    // pushing all the colors which the upper grid contains in an empty array
     upperGridColors.push(colorsOfGrid[colorNo]);
    //ensuring that the lower grid always conatin these 9 colors of upper grid
     lowerGridCells[i].style.backgroundColor = upperGridColors[i];

     
 }
 // randomly coloring 1 tile as transparent
let k = Math.floor(Math.random() * 16) + 9;

let tpTile = k;

 // coloring lower grid
 for( let i = 9; i < 25; i++){
    if( i === k){
        lowerGridCells[k].style.backgroundColor = "transparent"
    }
    else{
        let lowerGridCell = lowerGridCells[i];
     let colorNo = randomizer8();
    lowerGridCell.style.backgroundColor = colorsOfGrid[colorNo];
    }
    
}

// coloring for hard mode 
const upperGrid2 = document.querySelector(".upperGrid2");

const lowerGrid2 = document.querySelector(".lowerGrid2");

const upperGridCells2 = document.querySelectorAll(".ugcell2");

const lowerGridCells2 = document.querySelectorAll(".lgcell2");

const playAreas2 = document.querySelectorAll(".playArea2");


const colorsOfGrid2 = ["Aquamarine" , "Brown" , "Chartreuse" , "Crimson" , "DarkSeaGreen" , "DarkSalmon" , "Gold" , "SteelBlue"];


let upperGridColors2 = [];

for( let i = 0; i < 16; i++){
    let upperGridCell2 = upperGridCells2[i];
    let colorNo2 = randomizer8();
    upperGridCell2.style.backgroundColor = colorsOfGrid2[colorNo2];

    // pushing all the colors which the upper grid contains in an empty array
    upperGridColors2.push(colorsOfGrid2[colorNo2]);
    //ensuring that the lower grid always conatin these 9 colors of upper grid
     lowerGridCells2[i].style.backgroundColor = upperGridColors2[i];

}

let p = Math.floor(Math.random() * 20) + 16;

let tpTile2 = p;


for( let i = 16; i < 36; i++){
    if( i === p){
        lowerGridCells2[p].style.backgroundColor = "transparent"
    }
    else{
        let lowerGridCell2 = lowerGridCells2[i];
     let colorNo2 = randomizer8();
    lowerGridCell2.style.backgroundColor = colorsOfGrid2[colorNo2];
    }
    
}

for( lowerGridCell2 of lowerGridCells2){
    lowerGridCell2.addEventListener("click" , colorSwitch2)       
}

function colorSwitch2(evt){
    // right 
   if((tpTile2 + 1) % 6 !== 0 && tpTile2 !== -1){
       if(evt.target == lowerGridCells2[tpTile2 + 1]){
           lowerGridCells2[tpTile2].style.backgroundColor = evt.target.style.backgroundColor;
           lowerGridCells2[tpTile2 + 1].style.backgroundColor = "transparent";
           tpTile2 += 1;
           noOfMoves2 += 1;
           checkHard();
       }
   
    }
    //left
    if((tpTile2 - 1) % 6 !== 5){
        if(evt.target == lowerGridCells2[tpTile2-1]){
            lowerGridCells2[tpTile2].style.backgroundColor = evt.target.style.backgroundColor;
            lowerGridCells2[tpTile2 - 1].style.backgroundColor = "transparent";
            tpTile2 -= 1;
            noOfMoves2 += 1;
            checkHard();
        }

    }
    //bottom
    if(tpTile2 + 6 <= 35 && tpTile2 !== -1){
        if(evt.target == lowerGridCells2[tpTile2 + 6]){
            lowerGridCells2[tpTile2].style.backgroundColor = evt.target.style.backgroundColor;
            lowerGridCells2[tpTile2 + 6].style.backgroundColor = "transparent";
            tpTile2 += 6;
            noOfMoves2 += 1;
            checkHard();

        }
    }
    //top
    if(tpTile2 - 6 >= 0){
        if(evt.target == lowerGridCells2[tpTile2 - 6]){
            lowerGridCells2[tpTile2].style.backgroundColor = evt.target.style.backgroundColor;
            lowerGridCells2[tpTile2 - 6].style.backgroundColor = "transparent";
            tpTile2 -= 6;
            noOfMoves2 += 1;
            checkHard();

        }
    }

}




///////
for( lowerGridCell of lowerGridCells){
    lowerGridCell.addEventListener("click" , colorSwitch)       
}

 function colorSwitch(evt){
     // right 
    if((tpTile + 1) % 5 !== 0 && tpTile !== -1){
        if(evt.target == lowerGridCells[tpTile + 1]){
            lowerGridCells[tpTile].style.backgroundColor = evt.target.style.backgroundColor;
            lowerGridCells[tpTile + 1].style.backgroundColor = "transparent";
            tpTile += 1;
            noOfMoves += 1;
            checkEasy();
        }
    
    }
    //left
    if((tpTile - 1) % 5 !== 4){
        if(evt.target == lowerGridCells[tpTile-1]){
            lowerGridCells[tpTile].style.backgroundColor = evt.target.style.backgroundColor;
            lowerGridCells[tpTile - 1].style.backgroundColor = "transparent";
            tpTile -= 1;
            noOfMoves += 1;
            checkEasy();
        }

    }
    //bottom
    if(tpTile + 5 <= 24 && tpTile !== -1){
        if(evt.target == lowerGridCells[tpTile + 5]){
            lowerGridCells[tpTile].style.backgroundColor = evt.target.style.backgroundColor;
            lowerGridCells[tpTile + 5].style.backgroundColor = "transparent";
            tpTile += 5;
            noOfMoves += 1;
            checkEasy();

        }
    }
    //top
    if(tpTile - 5 >= 0){
        if(evt.target == lowerGridCells[tpTile - 5]){
            lowerGridCells[tpTile].style.backgroundColor = evt.target.style.backgroundColor;
            lowerGridCells[tpTile - 5].style.backgroundColor = "transparent";
            tpTile -= 5;
            noOfMoves += 1;
            checkEasy();

        }
    }
 }

 

 

 resetButton.addEventListener("click" , resetThegame)

 function resetThegame(){
     clickSound.play();
     isGameOver = false;
    noOfMoves = 0;
    noOfMoves2 = 0;
   // again including same code in reset button for hard and easy mode
   clearInterval(interval);
   tens = "00";
   seconds = "00";
   appendseconds.innerHTML = seconds;
   appendTens.innerHTML = tens;
   
   //defining an epmty array for upper grid colors
let upperGridColors = [];



// coloring upper grid
 for( let i = 0; i < 9; i++){
     let upperGridCell = upperGridCells[i];
     let colorNo = randomizer8();
     upperGridCell.style.backgroundColor = colorsOfGrid[colorNo];

     
    // pushing all the colors which the upper grid contains in an empty array
     upperGridColors.push(colorsOfGrid[colorNo]);
    //ensuring that the lower grid always conatin these 9 colors of upper grid
     lowerGridCells[i].style.backgroundColor = upperGridColors[i];

     
 }
 // randomly coloring 1 tile as transparent
let k = Math.floor(Math.random() * 16) + 9;

let tpTile = k;

 // coloring lower grid
 for( let i = 9; i < 25; i++){
    if( i === k){
        lowerGridCells[k].style.backgroundColor = "transparent"
    }
    else{
        let lowerGridCell = lowerGridCells[i];
     let colorNo = randomizer8();
    lowerGridCell.style.backgroundColor = colorsOfGrid[colorNo];
    }
    
}

for( lowerGridCell of lowerGridCells){
    lowerGridCell.addEventListener("click" , colorSwitch)       
}

 function colorSwitch(evt){
     // right 
    if((tpTile + 1) % 5 !== 0 && tpTile !== -1){
        if(evt.target == lowerGridCells[tpTile + 1]){
            lowerGridCells[tpTile].style.backgroundColor = evt.target.style.backgroundColor;
            lowerGridCells[tpTile + 1].style.backgroundColor = "transparent";
            tpTile += 1;
            noOfMoves += 1
            checkEasy();
        }
    
    }
    //left
    if((tpTile - 1) % 5 !== 4){
        if(evt.target == lowerGridCells[tpTile-1]){
            lowerGridCells[tpTile].style.backgroundColor = evt.target.style.backgroundColor;
            lowerGridCells[tpTile - 1].style.backgroundColor = "transparent";
            tpTile -= 1;
            noOfMoves += 1
            checkEasy();
        }

    }
    //bottom
    if(tpTile + 5 <= 24 && tpTile !== -1){
        if(evt.target == lowerGridCells[tpTile + 5]){
            lowerGridCells[tpTile].style.backgroundColor = evt.target.style.backgroundColor;
            lowerGridCells[tpTile + 5].style.backgroundColor = "transparent";
            tpTile += 5;
            noOfMoves += 1
            checkEasy();

        }
    }
    //top
    if(tpTile - 5 >= 0){
        if(evt.target == lowerGridCells[tpTile - 5]){
            lowerGridCells[tpTile].style.backgroundColor = evt.target.style.backgroundColor;
            lowerGridCells[tpTile - 5].style.backgroundColor = "transparent";
            tpTile -= 5;
            noOfMoves += 1;
            checkEasy();

        }
    }
 }

 // Hard


 let upperGridColors2 = [];

 for( let i = 0; i < 16; i++){
     let upperGridCell2 = upperGridCells2[i];
     let colorNo2 = randomizer8();
     upperGridCell2.style.backgroundColor = colorsOfGrid2[colorNo2];
 
     // pushing all the colors which the upper grid contains in an empty array
     upperGridColors2.push(colorsOfGrid2[colorNo2]);
     //ensuring that the lower grid always conatin these 9 colors of upper grid
      lowerGridCells2[i].style.backgroundColor = upperGridColors2[i];
 
 }
 
 let p = Math.floor(Math.random() * 20) + 16;
 
 let tpTile2 = p;
 
 
 for( let i = 16; i < 36; i++){
     if( i === p){
         lowerGridCells2[p].style.backgroundColor = "transparent"
     }
     else{
         let lowerGridCell2 = lowerGridCells2[i];
      let colorNo2 = randomizer8();
     lowerGridCell2.style.backgroundColor = colorsOfGrid2[colorNo2];
     }
     
 }
 
 for( lowerGridCell2 of lowerGridCells2){
     lowerGridCell2.addEventListener("click" , colorSwitch2)       
 }
 
 function colorSwitch2(evt){
     // right 
    if((tpTile2 + 1) % 6 !== 0 && tpTile2 !== -1){
        if(evt.target == lowerGridCells2[tpTile2 + 1]){
            lowerGridCells2[tpTile2].style.backgroundColor = evt.target.style.backgroundColor;
            lowerGridCells2[tpTile2 + 1].style.backgroundColor = "transparent";
            tpTile2 += 1;
            noOfMoves2 += 1;
            checkHard();
        }
    
     }
     //left
     if((tpTile2 - 1) % 6 !== 5){
         if(evt.target == lowerGridCells2[tpTile2-1]){
             lowerGridCells2[tpTile2].style.backgroundColor = evt.target.style.backgroundColor;
             lowerGridCells2[tpTile2 - 1].style.backgroundColor = "transparent";
             tpTile2 -= 1;
             noOfMoves2 += 1;
             checkHard();
         }
 
     }
     //bottom
     if(tpTile2 + 6 <= 35 && tpTile2 !== -1){
         if(evt.target == lowerGridCells2[tpTile2 + 6]){
             lowerGridCells2[tpTile2].style.backgroundColor = evt.target.style.backgroundColor;
             lowerGridCells2[tpTile2 + 6].style.backgroundColor = "transparent";
             tpTile2 += 6;
             noOfMoves2 += 1;
             checkHard();
 
         }
     }
     //top
     if(tpTile2 - 6 >= 0){
         if(evt.target == lowerGridCells2[tpTile2 - 6]){
             lowerGridCells2[tpTile2].style.backgroundColor = evt.target.style.backgroundColor;
             lowerGridCells2[tpTile2 - 6].style.backgroundColor = "transparent";
             tpTile2 -= 6;
             noOfMoves2 += 1;
             checkHard();
 
         }
     }
 
 }
 
 

 // 

 }
function checkEasy(){
      // easy mode win check
 for( let m  = 0; m < 9; m++){
    if(upperGridCells[m].style.backgroundColor !== playAreas[m].style.backgroundColor ){
        isGameOver = false;
        break;
    } else if(upperGridCells[m].style.backgroundColor == playAreas[m].style.backgroundColor){
        isGameOver = true
    }
}

if(isGameOver == true){
    winSound.play();
    clearInterval(interval);
    winningText.style.display = " inline"
    movesTaken.style.display = "block"
    movesTaken.innerText = "Number of moves:" + noOfMoves;
    scoreSheet.style.display = "inline";
    
}

}
 
function checkHard(){
     
for( let q = 0; q < 16; q++){
    if(upperGridCells2[q].style.backgroundColor !== playAreas2[q].style.backgroundColor){
        isGameOver2 = false;
        break;
    } else if(upperGridCells2[q].style.backgroundColor == playAreas2[q].style.backgroundColor){
        isGameOver2 = true;
    }
}

if(isGameOver2 == true){
    winSound.play();
    clearInterval(interval);
    winningText.style.display = " inline"
    movesTaken.style.display = "block"
    movesTaken.innerText = "Number of moves:" + noOfMoves2;
    scoreSheet.style.display = "inline";
}


}
// hard Mode win check


btnInsert.addEventListener("click" , function(){
    const pName = playerName.value;
   

    if(pName){
        localStorage.setItem("Name" , pName);
        localStorage.setItem("Easy-score" , noOfMoves);
        localStorage.setItem("Hard-score" , noOfMoves2);   
    }

    const nameDisplay = localStorage.getItem("Name");
    const easyScore = localStorage.getItem("Easy-score");
    const hardScore = localStorage.getItem("Hard-score");

    scoreOutput.innerHTML = `Name: ${nameDisplay} <br> Easy-score: ${easyScore} <br> Hard-score: ${hardScore} <br>`;
    
})




 






