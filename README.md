## Gdzie Kino

<div style="display: flex;">
  <img src="https://cdn.imgbin.com/3/6/2/imgbin-node-js-javascript-react-logo-express-js-javascript-logo-bBmMA8X88t7G16jsxZ17SysmA.jpg" width="50" alt="Node" />
  <img src="https://process.filestackapi.com/cache=expiry:max/7YurYvXQjCuvBtCHAR3N" width="50" alt="Graphql" />
  <img src="https://cdn.worldvectorlogo.com/logos/react.svg" width="50" alt="React" />
  <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" width="50" alt="TypeScript" />
  <img src="https://hashnode.imgix.net/res/hashnode/image/upload/jbhiqodxlyhaqogfuqwy/1486104606.png?w=180&h=180&fit=crop&crop=entropy&auto=format,enhance&q=60" width="50" alt="StyledComponents" />
</div>

#### The ultimate movie showtimes search app

## Inspiration

This application was initially created as a project for a bachelor thesis. <br/>

Later on, we decided to continue work on this project to get it out of the MVP stage. <br/>
The inspiration came from other great data aggregation apps, we just wanted to create one for movie showings, that we could use ourselves. <br/>

Along the way, we got a chance to learn and use many cutting edge technologies. <br/>
The SPA is created using  React with TypeScript and it's connected to the GraphQL API on Express.js backend.

## Tech Stack:

- React
- TypeScript
- Styled-components
- Apollo Client
- Express.js
- GraphQL
- PostgreSQL

## Project setup
You need to install postgreSQL locally and create an empty database

#### 1. Create `.env` file and add credentials for your database
```sh
cd server
cp .env_example .env
nano .env
```

#### 2. Install dependencies
```sh
yarn install
```

#### 3. Seed the database
```sh
yarn workspace server db:reset
```

## Running the project

### To start the app locally:

```sh
# Start server in one terminal tab
yarn workspace server start

# Start client in second terminal tab
yarn workspace client start
```

**App will run at localhost:300**

### To create a production build:

```sh
yarn workspace client build
```

## References

- [React docs](https://reactjs.org/docs/getting-started.html)
- [styled-components docs](https://www.styled-components.com/docs)
- [TypeScript docs](https://www.typescriptlang.org/docs/home.html)
- [Apollo Hooks docs page](https://www.apollographql.com/docs/react/api/react-hooks/)
- [Sequelize docs](https://sequelize.org/master/manual/)
