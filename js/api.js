/* https://open.whitehouse.gov/ data from the
   Climate Change Adaptation Task Force
*/

window.onload = function deathsByCity () {

  let url = 'https://data.cdc.gov/api/views/rpjd-ejph/rows.json?accessType=DOWNLOAD'

//this sets the $.ajax equal to a variable that we can access//
  var jQueryPromise = $.ajax({
    dataType: "json",
    url: url,
    data: {
      "$limit" : 10
    }
  })


//This sets the resolve situation equal to a variable that we can access//

//moved it within the scope of the larger function so realPromise could have access to jQueryPromise//
  var realPromise = Promise.resolve(jQueryPromise);


  realPromise.then(function(response){
    console.log("got data");
    createTable(response);
  }, function(err) {
    console.log("err:", err);
  })

};
