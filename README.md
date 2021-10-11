# Getting Started

Application to keep track of statistics for the Fairfield - Berkeley Baseball Association (FBBA).

## Starting Express Server

You will first need to install and configure MySQL.

Set the following environment variables used by the application:
```
export BS_HOST=localhost (or your target host)
export BS_PORT=<target_port> (default to 3306)
export BS_USER=<your_user> (default to 'root')
export BS_PASSWORD=<your_password>
```

Seed the MySQL database with the ```seed.sql``` script:
```
mysql -u $BS_USER -p < ./setup/seed.sql
```

To start Express server, run ```node server.js``` at the root of the project.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## API Routes
| Method | Route              | Description                                             |
|--------|--------------------|---------------------------------------------------------|
| ```GET``` | /player            | Returns all players in the league                       |
| ```GET``` | /player/id/:id     | Returns a player (if it exists) with specified id       |
| ```GET``` | /player/name/:name | Returns a list of players that match the name specified |
| ```GET``` | /team              | Returns all teams in the league                         |
| ```GET``` | /team/id/:id       | Returns a team (if it exists) with specified name       |
| ```GET``` | /team/name/:name   | Returns a list of teams that match the name specified   |
|        |                    |                                                         |