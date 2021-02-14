//'use strict';

// eslint-disable-next-line no-unused-vars
function randomNum(min, max) {

  return Math.floor(Math.random() * (max - min + 1) + min);

}

// eslint-disable-next-line no-unused-vars
let shops = [
  {

    location: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avrCookies: [],
    avrCust: [],
    workHours: ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
    cookiesTotal: 0,

    evaluate: function () {
      for (let i = 0; i < this.workHours.length; i++) {

        this.avrCust[i] = randomNum(this.minCust, this.maxCust);
        this.avrCookies[i] = 6.3 * this.avrCust[i];
        this.cookiesTotal += this.avrCookies[i];

      }

    }



  },
  {

    location: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avrCookies: [],
    avrCust: [],
    workHours: ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
    cookiesTotal: 0,

    evaluate: function () {
      for (let i = 0; i < this.workHours.length; i++) {

        this.avrCust[i] = randomNum(this.minCust, this.maxCust);
        this.avrCookies[i] = 1.2 * this.avrCust[i];
        this.cookiesTotal += this.avrCookies[i];

      }

    }


  },
  {

    location: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avrCookies: [],
    avrCust: [],
    workHours: ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
    cookiesTotal: 0,

    evaluate: function () {
      for (let i = 0; i < this.workHours.length; i++) {

        this.avrCust[i] = randomNum(this.minCust, this.maxCust);
        this.avrCookies[i] = 3.7 * this.avrCust[i];
        this.cookiesTotal += this.avrCookies[i];

      }

    }
  },
  {

    location: 'Paris',
    minCust: 20,
    maxCust: 38,
    avrCookies: [],
    avrCust: [],
    workHours: ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
    cookiesTotal: 0,

    evaluate: function () {
      for (let i = 0; i < this.workHours.length; i++) {

        this.avrCust[i] = randomNum(this.minCust, this.maxCust);
        this.avrCookies[i] = 2.3 * this.avrCust[i];
        this.cookiesTotal += this.avrCookies[i];

      }

    }
  },
  {

    location: 'Lima',
    minCust: 2,
    maxCust: 16,
    avrCookies: [],
    avrCust: [],
    workHours: ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
    cookiesTotal: 0,

    evaluate: function () {
      for (let i = 0; i < this.workHours.length; i++) {

        this.avrCust[i] = randomNum(this.minCust, this.maxCust);
        this.avrCookies[i] = 4.6 * this.avrCust[i];
        this.cookiesTotal += this.avrCookies[i];

      }

    }
  },

];

//#################### END OF OBJECTS ARRAY ######################

function fillArr () {

  for (let i = 0; i < shops.length; i++) {

    shops[i].evaluate();

  }

}

fillArr();


//##################################################################


let sales =document.getElementById('sales');



for(let i =0 ; i<shops.length;i++){

  let title = document.createElement('h2');
  sales.appendChild(title);
  title.textContent= shops[i].location;
  // let breaks = document.createElement('br');

  let unorderedList = document.createElement('ul');
  sales.appendChild(unorderedList);

  for (let j = 0; j < shops[i].avrCookies.length; j++) {

    let listItem = document.createElement('li');

    unorderedList.appendChild(listItem);

    listItem.textContent= shops[i].workHours[j] + ' : ' + shops[i].avrCookies[j] + ' Cookies' ;


  }


  let total = document.createElement('h3');
  sales.appendChild(total);
  total.textContent= shops[i].cookiesTotal + ' : Cookies';



}



