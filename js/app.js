'use strict';

// eslint-disable-next-line no-unused-vars
function openForm() {
  document.getElementById('popupForm').style.display = 'block';
}
function closeForm() {
  document.getElementById('popupForm').style.display = 'none';
}

window.onclick = function (event) {
  let modal = document.getElementById('test');
  if (event.target === modal) {
    closeForm();
  }
};

let tableHead = false;
let workHours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'];


const parentElement = document.getElementById('sales');
let tableElement = document.createElement('table');
tableElement.setAttribute('border', '1');
parentElement.appendChild(tableElement);



let footerRow = document.createElement('tfoot');
footerRow.setAttribute('id','fr');
tableElement.appendChild(footerRow);


let tr1 = document.createElement('tr');
footerRow.appendChild(tr1);

let finalTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let storeArr = [];
let counter = storeArr.length;



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
    td1.textContent = Math.round(this.avrCookies[j]);
    locationTotal += this.avrCookies[j];
    finalTotal[j] += this.avrCookies[j];

  }

  td1 = document.createElement('td');
  dataRow.appendChild(td1);
  td1.textContent = Math.round(locationTotal);

};

//####################END OF STORE FUNCTION##################



storeArr.push(new Store('Seattle', 23, 65, 6.3));
storeArr.push(new Store('Tokyo', 3, 24, 1.2));
storeArr.push(new Store('Dubai', 11, 38, 3.7));
storeArr.push(new Store('Paris', 20, 38, 2.3));
storeArr.push(new Store('Lima', 2, 16, 4.6));









let storeForm = document.getElementById('newStoreFormID');


storeForm.addEventListener('submit', submitter);



function submitter(event) {
  event.preventDefault();
  let location = event.target.locationField.value;
  let mins = parseInt(event.target.minField.value);
  let maxs = parseInt(event.target.maxField.value);
  let avgs = parseInt(event.target.avgField.value);


  storeArr.push(new Store(location, mins, maxs, avgs));

  console.log(location, mins, maxs, avgs);
  closeForm();

  console.log(storeArr[storeArr.length - 1]);
  storeArr[storeArr.length - 1].render();

  tableFooter();

}








for (let i = 0; i < storeArr.length; i++) {
  storeArr[i].render();
}



//###################TABLE FOOTER###############




let megaTotal = 0;
for (let i = 0; i < workHours.length; i++) {

  let footerData = document.createElement('td');
  footerData.setAttribute('id', 'fd');
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


function tableFooter() {

  megaTotal = 0;
  footerRow.textContent = '';
  for (let i = 0; i < workHours.length; i++) {

    //footerRow.textContent='';
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

}