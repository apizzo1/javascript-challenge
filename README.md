# javascript-challenge

## Description of assignment

This challenge was to create 2 pages that allow users to search for UFO sightings. 

The two folders contain files with the same names. However, the index.html file in UFO-Level-1 allows the user to filter for a specific date only. The index.html file in UFO-Level-2 allows the user to filter using multiple criteria, including date, city, state, country, and shape.

### Files included

In each folder is an index.html file, an Images folder, and a static folder. 

The Images folder contains the image used in the index.html file's background. Source: https://unsplash.com/photos/UFqKI4QWd2k

In the static folder, the following files can be found:
* data.js, which contains all the UFO sightings data
* style.css, which contains the customized styling used for the index.html 
* bootstrap.css, which contains the Bootstrap theme styling for the index.html
* app.js, which contains all the functionality to add all the UFO sightings to the index.html to start and then filter according to the user's inputs (as well as alert the user if their inputs yielded no sightings data)

### General Functionality and Error Handling

The user can either use the filter button or hit Enter to filter the sightings data. The user can click "UFO Sightings" in the upper left corner of the page to refresh the table (and show all sightings again). This can also be done by clearing all the filter input boxes and clicking the Filter button (or hitting Enter).

Some error handling has been included. Each filter (excluding date) accepts upper or lower case entries from the user. If the user inputs any entries that cannot be found in the data (or multiple entries that, together, result in 0 output rows) an alert message will appear. 

