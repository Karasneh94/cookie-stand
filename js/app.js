'use strict';


// let shops = [
//   {

//     location: 'Seattle',
//     minCust: 23,
//     maxCust: 65,
//     avrCookies: [],
//     avrCust: [],
//     workHours: ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
//     cookiesTotal: 0,

//     evaluate: function () {
//       for (let i = 0; i < this.workHours.length; i++) {

//         this.avrCust[i] = randomNum(this.minCust, this.maxCust);
//         this.avrCookies[i] = 6.3 * this.avrCust[i];
//         this.cookiesTotal += this.avrCookies[i];

//       }

//     }



//   },
//   {

//     location: 'Tokyo',
//     minCust: 3,
//     maxCust: 24,
//     avrCookies: [],
//     avrCust: [],
//     workHours: ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
//     cookiesTotal: 0,

//     evaluate: function () {
//       for (let i = 0; i < this.workHours.length; i++) {

//         this.avrCust[i] = randomNum(this.minCust, this.maxCust);
//         this.avrCookies[i] = 1.2 * this.avrCust[i];
//         this.cookiesTotal += this.avrCookies[i];

//       }

//     }


//   },
//   {

//     location: 'Dubai',
//     minCust: 11,
//     maxCust: 38,
//     avrCookies: [],
//     avrCust: [],
//     workHours: ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
//     cookiesTotal: 0,

//     evaluate: function () {
//       for (let i = 0; i < this.workHours.length; i++) {

//         this.avrCust[i] = randomNum(this.minCust, this.maxCust);
//         this.avrCookies[i] = 3.7 * this.avrCust[i];
//         this.cookiesTotal += this.avrCookies[i];

//       }

//     }
//   },
//   {

//     location: 'Paris',
//     minCust: 20,
//     maxCust: 38,
//     avrCookies: [],
//     avrCust: [],
//     workHours: ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
//     cookiesTotal: 0,

//     evaluate: function () {
//       for (let i = 0; i < this.workHours.length; i++) {

//         this.avrCust[i] = randomNum(this.minCust, this.maxCust);
//         this.avrCookies[i] = 2.3 * this.avrCust[i];
//         this.cookiesTotal += this.avrCookies[i];

//       }

//     }
//   },
//   {

//     location: 'Lima',
//     minCust: 2,
//     maxCust: 16,
//     avrCookies: [],
//     avrCust: [],
//     workHours: ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
//     cookiesTotal: 0,

//     evaluate: function () {
//       for (let i = 0; i < this.workHours.length; i++) {

//         this.avrCust[i] = randomNum(this.minCust, this.maxCust);
//         this.avrCookies[i] = 4.6 * this.avrCust[i];
//         this.cookiesTotal += this.avrCookies[i];

//       }

//     }
//   },

// ];

// //#################### END OF OBJECTS ARRAY ######################

// function fillArr () {

//   for (let i = 0; i < shops.length; i++) {

//     shops[i].evaluate();

//   }

// }

// fillArr();


// //##################################################################


// let sales =document.getElementById('sales');



// for(let i =0 ; i<shops.length;i++){

//   let title = document.createElement('h2');
//   sales.appendChild(title);
//   title.textContent= shops[i].location;
//   // let breaks = document.createElement('br');

//   let unorderedList = document.createElement('ul');
//   sales.appendChild(unorderedList);

//   for (let j = 0; j < shops[i].avrCookies.length; j++) {

//     let listItem = document.createElement('li');

//     unorderedList.appendChild(listItem);

//     listItem.textContent= shops[i].workHours[j] + ' : ' + Math.round(shops[i].avrCookies[j]) + ' Cookies' ;


//   }


//   let total = document.createElement('li');
//   unorderedList.appendChild(total);
//   total.textContent= 'Total : ' + Math.round(shops[i].cookiesTotal) + ' : Cookies';



// }



//##################################### New Code #################################

let tableHead = false;
let workHours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'];


const parentElement = document.getElementById('sales');
let tableElement = document.createElement('table');
tableElement.setAttribute('border', '1');
parentElement.appendChild(tableElement);



let footerRow = document.createElement('tfoot');
tableElement.appendChild(footerRow);


let tr1 = document.createElement('tr');
footerRow.appendChild(tr1);

let finalTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];







function randomNum(min, max) {

  return Math.floor(Math.random() * (max - min + 1) + min);

}



function Store(location, minCust, maxCust, avg) {

  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avg = avg;
  this.avrCust = this.getAvrCust();
  this.avrCookies = this.getAvrCookies();
  this.cookiesTotal = this.getCookiesTotal();

}

Store.prototype.getCookiesTotal = function () {

  let total = 0;
  for (let i = 0; i < workHours.length; i++) {
    total += this.avrCookies[i];
  }
  return total;

};



Store.prototype.getAvrCust = function () {

  let custArr = [];

  for (let i = 0; i < workHours.length; i++) {
    custArr[i] = randomNum(this.minCust, this.maxCust);
  }

  return custArr;

};


Store.prototype.getAvrCookies = function () {

  let cookiesArr = [];

  for (let i = 0; i < workHours.length; i++) {
    cookiesArr[i] = this.avg * this.avrCust[i];
  }

  return cookiesArr;

};

Store.prototype.render = function () {




  if (!tableHead) {


    let headerRow = document.createElement('tr');
    tableElement.appendChild(headerRow);


    let th1 = document.createElement('th');
    headerRow.appendChild(th1);

    for (let i = 0; i < workHours.length; i++) {

      th1 = document.createElement('th');
      headerRow.appendChild(th1);
      th1.textContent = workHours[i];

    }
    th1 = document.createElement('th');
    headerRow.appendChild(th1);
    th1.textContent = 'Daily Location Total';

    tableHead = true;
  } // end of if statment

  let dataRow = document.createElement('tr');
  tableElement.appendChild(dataRow);

  let td1;
  td1 = document.createElement('td');
  dataRow.appendChild(td1);
  td1.textContent = this.location;

  let locationTotal = 0;

  for (let j = 0; j < workHours.length; j++) {


    td1 = document.createElement('td');
    dataRow.appendChild(td1);
    console.log(this.avrCookies[j], this.location, j);
    td1.textContent = Math.round(this.avrCookies[j]);
    locationTotal += this.avrCookies[j];



    finalTotal[j] += this.avrCookies[j];




  }
  td1 = document.createElement('td');
  dataRow.appendChild(td1);
  td1.textContent = Math.round(locationTotal);











};

let storeArr = [];

storeArr.push(new Store('Seattle', 23, 65, 6.3));
storeArr.push(new Store('Tokyo', 3, 24, 1.2));
storeArr.push(new Store('Dubai', 11, 38, 3.7));
storeArr.push(new Store('Paris', 20, 38, 2.3));
storeArr.push(new Store('Lima', 2, 16, 4.6));

for (let i = 0; i < storeArr.length; i++) {
  storeArr[i].render();
}



let megaTotal = 0;
for (let i = 0; i < workHours.length; i++) {

  let footerData = document.createElement('td');
  footerRow.appendChild(footerData);
  if (i === 0) {
    footerData.textContent = 'Totals';
    footerData = document.createElement('td');
    footerRow.appendChild(footerData);
    footerData.textContent = Math.round(finalTotal[0]);
    megaTotal += finalTotal[0];
    continue;
  }
  megaTotal += finalTotal[i];
  footerData.textContent = Math.round(finalTotal[i]);

  if (i === (workHours.length - 1)) {

    footerData = document.createElement('td');
    footerRow.appendChild(footerData);
    footerData.textContent = Math.round(megaTotal);


  }

}

