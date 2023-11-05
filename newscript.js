let score = 0;

//setting up image boxes
let card00 = document.getElementById("card00");
let card01 = document.getElementById("card01");
let card02 = document.getElementById("card02");
let card03 = document.getElementById("card03");
let card10 = document.getElementById("card10");
let card11 = document.getElementById("card11");
let card12 = document.getElementById("card12");
let card13 = document.getElementById("card13");
let card20 = document.getElementById("card20");
let card21 = document.getElementById("card21");
let card22 = document.getElementById("card22");
let card23 = document.getElementById("card23");
let card30 = document.getElementById("card30");
let card31 = document.getElementById("card31");
let card32 = document.getElementById("card32");
let card33 = document.getElementById("card33");
//event listeners here
card00.addEventListener("click", cardClicked("card00", card00));
card01.addEventListener("click", cardClicked("card01", card01));
card02.addEventListener("click", cardClicked("card02", card02));
card03.addEventListener("click", cardClicked("card03", card03));
card10.addEventListener("click", cardClicked("card10", card10));
card11.addEventListener("click", cardClicked("card11", card11));
card12.addEventListener("click", cardClicked("card12", card12));
card13.addEventListener("click", cardClicked("card13", card13));
card20.addEventListener("click", cardClicked("card20", card20));
card21.addEventListener("click", cardClicked("card21", card21));
card22.addEventListener("click", cardClicked("card22", card22));
card23.addEventListener("click", cardClicked("card23", card23));
card30.addEventListener("click", cardClicked("card30", card30));
card31.addEventListener("click", cardClicked("card31", card31));
card32.addEventListener("click", cardClicked("card32", card32));
card33.addEventListener("click", cardClicked("card33", card33));

const imageKey = new Map(); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
//set all the keys soon!!
imageKey.set("card00", "red.png");
imageKey.set("card10", "red.png");
imageKey.set("card01", "orange.png");
imageKey.set("card11", "orange.png");
imageKey.set("card02", "green.png");
imageKey.set("card12", "green.png");
imageKey.set("card03", "yellow.png");
imageKey.set("card13", "yellow.png");
imageKey.set("card20", "blue.jpg");
imageKey.set("card30", "blue.jpg");
imageKey.set("card21", "purple.png");
imageKey.set("card31", "purple.png");
imageKey.set("card22", "pink.png");
imageKey.set("card32", "pink.png");
imageKey.set("card23", "brown.png");
imageKey.set("card33", "brown.png");


let matchKey = []; //used to see if images match; match ANSWERS
let matchObject = []; //used to change image; access grids on user end

function cardClicked(key, imageObj) {
  matchObject.push(imageObj);
  match.push(imageKey.get(key));

  imageObj.src = imageKey.get(key); //flips the card
  score++;

  if (match.length == 2) {
    if (match[0] != match[1]) { //if no match
      setTimeout(1500);
      matchObject[0].src = matchObject[1].src = "blank.jpg";
      match = matchObject = [];
    } else { //if match
      matchObject[0].src = matchObject[1].src = imageKey.get(key);
      match = matchObject = [];
    }
  }
}