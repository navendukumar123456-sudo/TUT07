# Campus Library - CS543 GraphQL Tutorial

This project follows the CS543 Web Services GraphQL tutorial: MySQL -> Node/Apollo GraphQL API -> HTML/CSS page.

## Files

- `schema.sql` - creates the MySQL database, tables, relationship, and sample data.
- `db.js` - creates the MySQL connection pool.
- `server.js` - GraphQL schema, resolvers, query operations, and mutation.
- `public/index.html` - browser page with the GraphQL query and add-book mutation.
- `public/style.css` - page styling.
- `queries.graphql` - example GraphQL read queries for testing in Apollo Sandbox.
- `mutations.graphql` - example GraphQL write mutation for testing in Apollo Sandbox.
- `package.json` - Node project configuration and dependencies.

## Run

1. Start MySQL.
2. Run `schema.sql` in MySQL.
3. Set the MySQL password in the environment or directly in `db.js`.
4. Run `npm install`.
5. Run `npm start`.
6. Open `http://localhost:4000/` to use Apollo Sandbox.
7. Open `public/index.html` with VS Code Live Server to use the web page.

The GraphQL API uses port 4000 and the front end sends HTTP POST requests to `http://localhost:4000/`.
