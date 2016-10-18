/* https://open.whitehouse.gov/ data from the
   Climate Change Adaptation Task Force
*/

var ourData = {};

window.onload = function climateChange () {

  let url = 'https://open.whitehouse.gov/resource/ybwj-5tg8.json'

  // over 27,000 hits with the following
  // $.get(url, function(data) {
  //   console.log(data);
  // });

  // we'll do the long version to prevent overload
  $.ajax({
    dataType: "json",
    url: url,
    data: {
      "$limit" : 100
    }
  }).done(function(data) {
    ourData = data;
    console.log(ourData)
  })

};


document.getElementById('display').innerHTML = formula () {

}
