'use strict';

//store merchandise images in array using constructor function
Merch.allMerch = [];

function Merch(filepath, description) {
  this.path = filepath;
  this.altText = description;
  Merch.allMerch.push(this);
}

new Merch('img/bag.jpg', 'A rolling suitcase resembling R2D2');
new Merch('img/banana.jpg', 'A rolling suitcase resembling R2D2');
new Merch('img/bathroom.jpg', 'A rolling suitcase resembling R2D2');
new Merch('img/boots.jpg', 'A rolling suitcase resembling R2D2');
new Merch('img/breakfast.jpg', 'A rolling suitcase resembling R2D2');
new Merch('img/bubblegum.jpg', 'A rolling suitcase resembling R2D2');
new Merch('img/chair.jpg', 'A rolling suitcase resembling R2D2');
new Merch('img/cthulhu.jpg', 'A rolling suitcase resembling R2D2');
new Merch('img/dog-duck.jpg', 'A rolling suitcase resembling R2D2');
new Merch('img/dragon.jpg', 'A rolling suitcase resembling R2D2');
new Merch('img/pen.jpg', 'A rolling suitcase resembling R2D2');
new Merch('img/pet-sweep.jpg', 'A rolling suitcase resembling R2D2');
new Merch('img/scissors.jpg', 'A rolling suitcase resembling R2D2');
new Merch('img/shark.jpg', 'A rolling suitcase resembling R2D2');
new Merch('img/sweep.jpg', 'A rolling suitcase resembling R2D2');
new Merch('img/tauntaun.jpg', 'A rolling suitcase resembling R2D2');
new Merch('img/unicorn.jpg', 'A rolling suitcase resembling R2D2');
new Merch('img/usb.gif', 'A rolling suitcase resembling R2D2');
new Merch('img/water-can.jpg', 'A rolling suitcase resembling R2D2');
new Merch('img/wine-glass.jpg', 'A rolling suitcase resembling R2D2');

//create random number generator

//use random numbers to select 3 images by array index number

//display the random images on the page

//create event listener to track images clicked

//callback function for clicked image should keep tally of number of times each image is clicked

//keep tally of number of times each image appears on screen
