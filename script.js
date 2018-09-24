// getData(): loads data from Github Search API and appends data to results
function getData() {  
  var request = new XMLHttpRequest();
  var input = document.getElementById("input").value;
  
  // check validity of input
  if (input) {
    request.open('GET', 'https://api.github.com/search/repositories?q=' + input, true);

    request.onload = function () {
      // load response
      var data = JSON.parse(this.response);
      // establish variables
      var table = document.getElementById("results");
      
      if (table.rows.length == 1) {
        for (item = 0; item < 10; ++item) {
          // specific result
          var result = data.items[item];

          // add row and cells to table
          var row = table.insertRow(item + 1);
          var name = row.insertCell(0);
          var language = row.insertCell(1);
          var tag = row.insertCell(2);

          // append new data
          name.innerHTML = result.full_name;
          language.innerHTML = result.language;
        }
      }
    }
    request.send();
  }
}

// clearTable(): when search box is modified, clears the previously loaded results
function clearTable() {
  var table = document.getElementById("results");
  var rowsIndex = table.rows.length - 1;
  
  for (row = rowsIndex; row >= 1; --row) {
    table.deleteRow(row);
  }
}