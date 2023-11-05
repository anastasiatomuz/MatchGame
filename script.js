//important variables
let recentTries = []; //this is what we will use to store the current match (actual img objects)
let score = 0; //keeps track of score
let setsMatched = 0;//keeps track of how many sets the user matched correctly; max 8
let scoreText = document.getElementById("score");
const imgMap = new Map();
let cardsFound = [];//array to store the cards that have already been found
const text = document.getElementById("ex");

//the answer key
let keyGrid = [
  ["red.png", "orange.png", "green.png", "yellow.png"],
  ["red.png", "orange.png", "green.png", "yellow.png"],
  ["blue.jpg", "purple.png", "pink.png", "brown.png"],
  ["blue.jpg", "purple.png", "pink.png", "brown.png"]
];

const colorsArray = [
  "red.png", "orange.png", "green.png", "yellow.png",
  "red.png", "orange.png", "green.png", "yellow.png",
  "blue.jpg", "purple.png", "pink.png", "brown.png",
  "blue.jpg", "purple.png", "pink.png", "brown.png"];


// //event listeners
// reset.addEventListener("click", () => {resetGame()});


//Map of img objects to r,c array
for (let r = 0; r < 4; r ++){
  for (let c = 0; c < 4; c ++){
    let temp = document.getElementById("card" + r + c); //get the img object from html
    imgMap.set(temp, [r,c]);
    temp.addEventListener("click", function() { cardClicked(temp)});
  }
}




function cardClicked(imgObj){
  
  if (recentTries.length == 2 || (recentTries.length != 0 && recentTries[0]==imgObj) || cardsFound.includes(imgObj)){ //https://www.w3schools.com/jsref/jsref_includes_array.asp
      //do nothing while the two cards are still being displayed before they flip back over
      //do nothing if the user clicked the same card twice
  } else {
    recentTries.push(imgObj); //store the img object of the image clicked
    score ++; //updates score each time the user gusses
    scoreText.innerHTML = score;

    let imagecoor = imgMap.get(imgObj); //gets an array of [r,c] where imagesrc link is stored in keyGrid
    let imagesrc = keyGrid[imagecoor[0]][imagecoor[1]]; //image src link of the image to be flipped
    imgObj.src = imagesrc; //set new image to display
    if (recentTries.length == 2){
      checkMatch();
    }
    if (cardsFound.length == 16){
      gameWon();
    }
  }
  console.log(cardsFound);
}

/*function that checks if the two recent tries have matching cards*/
function checkMatch(){
  let img1coor = imgMap.get(recentTries[0]);
  let img2coor = imgMap.get(recentTries[1]);
  if (keyGrid[img1coor[0]][img1coor[1]] == keyGrid[img2coor[0]][img2coor[1]]){//checks that img1 = img2
    cardsFound.push(recentTries[0]);
    cardsFound.push(recentTries[1]);
    setsMatched ++;
    recentTries = [];//empties array that stores img objects for keeping track of guesses
  } else {
    //https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep/39914235#39914235
    function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}
  
    async function demo() {
      console.log("inside async");
      await sleep(1000);
      recentTries[0].src = "blank.jpg";
      recentTries[1].src = "blank.jpg";
      recentTries = []; 
    }
    demo();      
  }
}

function gameWon(){
  text.innerHTML = "You won!";
}

//function that resets the game
function resetGame(){
  score = 0;
  setsMatched = 0;
  for (let obj of imgMap.keys()){
    obj.src = "blank.jpg";
  }
  scoreText.innerHTML = 0;
}

function randomize() {
  copyOfList = [...colorsArray];
  for (let r = 0; r < 4; r ++){

  }
}

/*

reason for calling cardClicked inside an anonymous function: 
you will automoatically have the function run if the function inside the addEventListener has parameters, so you need to prevent that 
further explanation: https://stackoverflow.com/questions/30354136/function-call-with-parameters-to-addeventlistener-inside-a-loop 
*/


