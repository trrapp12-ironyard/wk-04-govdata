"use strict";

function createTable (dataSet) {
  let data = dataSet.data;
  data.map(tableMaker);
  data.map(console.log(data[8]));

};

function tableMaker (locationAndDate) {
  const msg = "<tr><td>" + locationAndDate[8]
              + "</td><td>" + locationAndDate[9]
              + "</td></tr>\n"
  document.querySelector("#table").innerHTML += msg;
}
