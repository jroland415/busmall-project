'use strict';

//start by rendering one image, then build out to 3
Merch.firstImgEl = document.getElementById('first-pic');
Merch.secondImgEl = document.getElementById('second-pic');
Merch.thirdImgEl = document.getElementById('third-pic');

//store merchandise images in array using constructor function
Merch.allMerch = [];

function Merch(filepath, description) {
  this.path = filepath;
  this.altText = description;
  Merch.allMerch.push(this);
}

new Merch('img/bag.jpg', 'A rolling suitcase resembling R2D2');
new Merch('img/banana.jpg', 'A banana slicer');
new Merch('img/bathroom.jpg', 'A bathroom stand that holds a tablet and toilet paper');
new Merch('img/boots.jpg', 'A pair of toe-less yellow rubber boots');
new Merch('img/breakfast.jpg', 'A mini toaster over/pan/coffee maker combo');
new Merch('img/bubblegum.jpg', 'A box of meatball bubblegum');
new Merch('img/chair.jpg', 'A red plastic chair with an upward-curving seat');
new Merch('img/cthulhu.jpg', 'A cthulhu action figure');
new Merch('img/dog-duck.jpg', 'A dog with a duck bill strapped to its face');
new Merch('img/dragon.jpg', 'A can of dragon meat');
new Merch('img/pen.jpg', 'A set of pens with plastic eating utensils as caps');
new Merch('img/pet-sweep.jpg', 'A box of dog shoes that sweep the floor');
new Merch('img/scissors.jpg', 'Pizza-cutter scissors');
new Merch('img/shark.jpg', 'A sleeping bag shaped like a shark');
new Merch('img/sweep.png', 'A baby onesie that sweeps the floor');
new Merch('img/tauntaun.jpg', 'A sleeping bag shaped like a tauntaun');
new Merch('img/unicorn.jpg', 'A can of unicorn meat');
new Merch('img/usb.gif', 'A USB drive shaped like a tentacle');
new Merch('img/water-can.jpg', 'A watering can with the spout pointing backward');
new Merch('img/wine-glass.jpg', 'A wine glass with the opening on the side');

//create random number generator
Merch.randomNum = function() {
  var ranNum = Math.random() * Merch.allMerch.length;
  var roundRan = Math.floor(ranNum);
  return roundRan;
};


//render 3 images at once
Merch.renderMerch = function() {
  var randomMerch = [Merch.allMerch[Merch.randomNum()], Merch.allMerch[Merch.randomNum()], Merch.allMerch[Merch.randomNum()]];

  Merch.firstImgEl.src = randomMerch[0].path;
  Merch.firstImgEl.alt = randomMerch[0].altText;
  Merch.secondImgEl.src = randomMerch[1].path;
  Merch.secondImgEl.alt = randomMerch[1].altText;
  Merch.thirdImgEl.src = randomMerch[2].path;
  Merch.thirdImgEl.alt = randomMerch[2].altText;
};

Merch.renderMerch();

//change image with each click
//Merch.imgEl.addEventListener('click', Merch.renderMerch);


//Still need to ...

//implement repetition rules

//keep tally of number of times each image is clicked

//keep tally of number of times each image appears on screen

//limit number of clicks to 25
