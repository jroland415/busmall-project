'use strict';

Merch.firstImgEl = document.getElementById('first-pic');
Merch.secondImgEl = document.getElementById('second-pic');
Merch.thirdImgEl = document.getElementById('third-pic');
Merch.sectionEl = document.getElementById('image-section');
Merch.ulElement = document.getElementById('results-list');
Merch.chartContext = document.getElementById('results-chart');

Merch.allMerch = [];
Merch.displayed = [];
Merch.totalVotes = [];
Merch.totalClicks = 0;
Merch.altTextLabels = [];

//store merchandise images in array using constructor function
function Merch(filepath, description) {
  this.path = filepath;
  this.altText = description;
  this.numClicked = 0;
  this.numDisplayed = 0;
  Merch.allMerch.push(this);
  Merch.altTextLabels.push(this.altText);
}

new Merch('img/bag.jpg', 'rolling suitcase resembling R2D2');
new Merch('img/banana.jpg', 'banana slicer');
new Merch('img/bathroom.jpg', 'bathroom stand that holds a tablet and toilet paper');
new Merch('img/boots.jpg', 'pair of toe-less yellow rubber boots');
new Merch('img/breakfast.jpg', 'mini toaster over/pan/coffee maker combo');
new Merch('img/bubblegum.jpg', 'box of meatball bubblegum');
new Merch('img/chair.jpg', 'red plastic chair with an upward-curving seat');
new Merch('img/cthulhu.jpg', 'cthulhu action figure');
new Merch('img/dog-duck.jpg', 'dog with a duck bill strapped to its face');
new Merch('img/dragon.jpg', 'can of dragon meat');
new Merch('img/pen.jpg', 'set of pens with plastic eating utensils as caps');
new Merch('img/pet-sweep.jpg', 'box of dog shoes that sweep the floor');
new Merch('img/scissors.jpg', 'pizza-cutter scissors');
new Merch('img/shark.jpg', 'sleeping bag shaped like a shark');
new Merch('img/sweep.png', 'baby onesie that sweeps the floor');
new Merch('img/tauntaun.jpg', 'sleeping bag shaped like a tauntaun');
new Merch('img/unicorn.jpg', 'can of unicorn meat');
new Merch('img/usb.gif', 'USB drive shaped like a tentacle');
new Merch('img/water-can.jpg', 'watering can with the spout pointing backward');
new Merch('img/wine-glass.jpg', 'wine glass with the opening on the side');

//create random number generator
Merch.randomNum = function() {
  var ranNum = Math.floor(Math.random() * Merch.allMerch.length);
  return ranNum;
};

Merch.uniqueArray = function() {
  var ranIndex = Merch.randomNum();
  while(Merch.displayed.length < 6) {
    if(!Merch.displayed.includes(ranIndex)){
      Merch.displayed.unshift(ranIndex);
    } else {
      ranIndex = Merch.randomNum();
    }
  }
};

//render 3 images at once
Merch.renderMerch = function() {
  Merch.uniqueArray();

  Merch.firstImgEl.src = Merch.allMerch[Merch.displayed[0]].path;
  Merch.firstImgEl.alt = Merch.allMerch[Merch.displayed[0]].altText;
  Merch.allMerch[Merch.displayed[0]].numDisplayed++;

  Merch.secondImgEl.src = Merch.allMerch[Merch.displayed[1]].path;
  Merch.secondImgEl.alt = Merch.allMerch[Merch.displayed[1]].altText;
  Merch.allMerch[Merch.displayed[1]].numDisplayed++;

  Merch.thirdImgEl.src = Merch.allMerch[Merch.displayed[2]].path;
  Merch.thirdImgEl.alt = Merch.allMerch[Merch.displayed[2]].altText;
  Merch.allMerch[Merch.displayed[2]].numDisplayed++;

  Merch.displayed.splice(2);
};

Merch.handleClick = function(event) {
  Merch.totalClicks++;

  for (var i = 0; i < Merch.allMerch.length; i++) {
    if(event.target.alt === Merch.allMerch[i].altText) {
      Merch.allMerch[i].numClicked++;
    }
  }

  if(Merch.totalClicks > 24) {
    Merch.sectionEl.removeEventListener('click', Merch.handleClick);
    alert('This concludes the survey. Thank you.');
    Merch.getVotes();
    Merch.generateList();
    Merch.displayChart();
  } else {
    Merch.renderMerch();
  }
};

Merch.getVotes = function() {
  for(var i = 0; i < Merch.allMerch.length; i++) {
    Merch.totalVotes[i] = Merch.allMerch[i].numClicked;
  }
};

Merch.generateList = function() {
  for(var i = 0; i < Merch.totalVotes.length; i++) {
    var liElement = document.createElement('li');
    liElement.textContent = `${Merch.totalVotes[i]} votes for the ${Merch.allMerch[i].altText}`;
    Merch.ulElement.appendChild(liElement);
  }
};

Merch.renderMerch();

Merch.sectionEl.addEventListener('click', Merch.handleClick);

Merch.displayChart = function() {
  // eslint-disable-next-line no-undef
  new Chart(Merch.chartContext, {
    type: 'bar',
    data: {
      labels: Merch.altTextLabels,
      datasets: [{
        label: 'Number of Votes Per Product',
        data: Merch.totalVotes,
        backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue', 'red', 'orange', 'yellow', 'green', 'blue', 'red', 'orange', 'yellow', 'green', 'blue', 'red', 'orange', 'yellow', 'green', 'blue'],
      }],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }],
        xAxes: [{
          ticks: {
            stepSize: 1,
            autoskip: false
          }
        }]
      }
    }
  });
};
