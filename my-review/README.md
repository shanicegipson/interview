This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation
You will need a GoogleMaps Javascript API Key in the `.env` file labeled:
`REACT_APP_GOOGLE_MAP`

1. Create a database named `review`,
2. The queries in the `database.sql` file are set up to create all the necessary tables to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!


## Usage
1. Enter information into all three input fields and click submit button you will see entry appear on map.
2. Click on pin to see review

## Built With

- React, Redux-Saga, Express, Node.js, PostgreSQL
- Passport.js, bcrypt, pg, axios
- Google Maps Geolocation API, Material-UI

## License
[MIT](https://choosealicense.com/licenses/mit/)
