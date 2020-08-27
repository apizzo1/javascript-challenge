// from data.js
var tableData = data;

// select table body
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#button");

// Select the forms
var form = d3.selectAll("form");

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

  // Select the input elements
  var inputElement_date = d3.select("#date");
  var inputElement_city = d3.select("#city");
  var inputElement_state = d3.select("#state");
  var inputElement_country = d3.select("#country");
  var inputElement_shape = d3.select("#shape");

  // Get the value property of the input elements
  var inputValue_date = inputElement_date.property("value");
  var inputValue_city = inputElement_city.property("value").toLowerCase();
  var inputValue_state = inputElement_state.property("value").toLowerCase();
  var inputValue_country = inputElement_country.property("value").toLowerCase();
  var inputValue_shape = inputElement_shape.property("value").toLowerCase();

// if statements to filter data based on what inputs were given
// at the time of form "submit" or filter button click, each if statement will check for input and filter accordingly
// all filters can be used simultaneously or only some can be used 

// if user does not input a date, use tableData from data.js
  if (inputValue_date.length === 0) {
    var date_data = tableData;
  }
  // if user does input date, filter tableData for desired date
  else {
    var date_data = tableData.filter(tableData =>  tableData.datetime === inputValue_date);
  }

  // if statements continue, running through each input field and continuing to filter the data to meet all desired criteria
  
  if (inputValue_city.length === 0) {
    var city_data = date_data;
  }
  else {
    var city_data = date_data.filter(date_data =>  date_data.city === inputValue_city);
  }

  if (inputValue_state.length === 0) {
    var state_data = city_data;
  }
  else {
    var state_data = city_data.filter(city_data =>  city_data.state === inputValue_state);
  }
  
  if (inputValue_country.length === 0) {
    var country_data = state_data;
  }
  else {
    var country_data = state_data.filter(state_data =>  state_data.country === inputValue_country);
  }

  if (inputValue_shape.length === 0) {
    var shape_data = country_data;
  }
  else {
    var shape_data = country_data.filter(country_data =>  country_data.shape === inputValue_shape);
  }

  // // create new row for each sighting on filtered data
  // shape_data is the last filter so this is the final data to output
  shape_data.forEach(sighting => {
    // for each filtered signting append table row to table body
    var row = tbody.append("tr");
   
    // for each filtered sighting, append table data tag (under corresponding table row) and fill in row data
    Object.entries(sighting).forEach(function([key, value]) {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
 
};
  


