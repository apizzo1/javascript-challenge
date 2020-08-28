// from data.js
var tableData = data;

// select table body
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("form");

// select the alert 
var alert = d3.select(".alert");

// add all data to table to begin
tableData.forEach(sighting => {
  // for each signting append table row to table body
  var row = tbody.append("tr");
// for each sighting, append table data tag (under corresponding table row) and fill in row data
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
  tbody.html("");

  // remove alert
  alert.attr("class", "alert alert-secondary alert_hide");

  // Select the input element 
  var inputElement = d3.select("#inputDefault");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // filter data.js for dates matching input value date
  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);



  // checking filteredData length - if 0, show alert to user that no sightings were found
  if (filteredData.length === 0) {
    alert.attr("class", "alert alert-secondary alert_details");
  };

  // // create new row for each sighting on filtered date
  filteredData.forEach(sighting => {
    // for each filtered signting append table row to table body
    var row = tbody.append("tr");
    // for each filtered sighting, append table data tag (under corresponding table row) and fill in row data
    Object.entries(sighting).forEach(function([key, value]) {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
 
 
};
  


