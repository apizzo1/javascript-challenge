// from data.js
var tableData = data;

// select table body
var tbody = d3.select("tbody")

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("form");

// add all data to table to begin
tableData.forEach(sighting => {
  var row = tbody.append("tr");

  Object.entries(sighting).forEach(function([key, value]) {
    var cell = tbody.append("td");
    cell.text(value);
  });
});



// Create event handlers 
button.on("click", FilterData);
form.on("submit",FilterData);

// Complete the event handler function for the form
function FilterData() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // clear table (remove any children from the table body
  // source: 09-Par_Form_Filter activity
  tbody.html("")

  // Select the input elements
  var inputElement_date = d3.select("#date");
  var inputElement_city = d3.select("#city");
  var inputElement_state = d3.select("#state");
  var inputElement_country = d3.select("#country");
  var inputElement_shape = d3.select("#shape");

  // Get the value property of the input elements
  var inputValue_date = inputElement_date.property("value");
  var inputValue_city = inputElement_city.property("value");
  var inputValue_state = inputElement_state.property("value");
  var inputValue_country = inputElement_country.property("value");
  var inputValue_shape = inputElement_shape.property("value");

  // filter data.js for dates matching input value date
  var filteredData = tableData.filter(tableData => {
    return (tableData.datetime === inputValue_date) && (tableData.city === inputValue_city);
  });
  

  console.log(filteredData);
  console.log(inputValue_date);
  // console.log(inputValue_city);

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
  


