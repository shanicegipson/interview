# mySidewalk Inc Coding Assessment

## Overview
* Neither application is currently deployed and are still in progress. See below to get additional information.

## File-Reader:
* As the code currently stands the user is able to upload a file but it is displaying the path to the file rather than the file itself. 
* For next steps I would:
 * Drill into the path to extract the file information to send to the server
 * Once the file is available on server use fs to read the file
 I was at a cross roads on how to split the strings to get them to listed in order:
 * My first train of thought was to write either a regualar expression to handle the information
 * Or to put each string into an array and use an array method such as split()

 
## My-Review:
* The user is able to enter in a Business name and Review and submit the form. The user is also able to use the geolactor on the map to search the address.
* For next steps I would:
 * Create a reducer to hold information from the form and the gelocator then send the information to the DB
 * Create a GET to get Business Name, Review and Lat and Lon from table and connect with a marker on the map

