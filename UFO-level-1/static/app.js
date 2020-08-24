// from data.js
var tableData = data;

// select table body
var tbody = d3.select("tbody")

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", FilterData);
form.on("submit",FilterData);

// Complete the event handler function for the form
function FilterData() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#inputDefault");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // filter data.js for dates matching input value date
  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  // // create new row for each sighting on filtered date
  filteredData.forEach(sighting => {
    var row = tbody.append("tr");
    console.log(sighting);

    Object.entries(sighting).forEach(function([key, value]) {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
 
 
};
  


