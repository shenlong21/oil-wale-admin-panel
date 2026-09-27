# Oil Wale Admin Panel

> **⚠️ Archived project.** This repository is no longer maintained and is kept for reference only. No further updates, bug fixes, or support should be expected.

A server-rendered admin panel prototype built with Express and Handlebars, intended for managing an oil/lubricant distribution business (garages, customers, products, vehicles, accounts, and schemes).

## Status

This project is a UI/routing prototype. Pages are rendered with static, hardcoded data (see `routes/routes.js`) — there is no working authentication, database persistence, or API layer wired up yet, despite `mongoose` and `connect-mongo` being listed as dependencies.

## Tech Stack

- [Express](https://expressjs.com/) — web server & routing
- [express-handlebars](https://github.com/express-handlebars/express-handlebars) — templating engine
- [Mongoose](https://mongoosejs.com/) / [connect-mongo](https://github.com/jdesboeufs/connect-mongo) — listed as dependencies (not yet integrated)
- [nodemon](https://nodemon.io/) — dev-only auto-reload

## Project Structure

```
.
├── index.js              # App entry point / server bootstrap
├── routes/
│   └── routes.js         # All page routes (dashboard, garages, accounts, customers, products, vehicles, schemes, login)
├── views/
│   ├── layouts/          # Handlebars layouts (main, login)
│   ├── authViews/        # Login page
│   └── panelView/        # Admin panel pages
└── static/
    ├── css/
    ├── js/
    └── img/
```

## Pages / Routes

| Route         | Description             |
|---------------|--------------------------|
| `/login`      | Login screen             |
| `/`           | Dashboard                |
| `/garages`    | Garages management       |
| `/accounts`   | Accounts management      |
| `/customers`  | Customers management     |
| `/products`   | Products management      |
| `/vehicles`   | Vehicles management      |
| `/schemes`    | Schemes management       |

## Getting Started

```bash
# Install dependencies
npm install

# Run in dev mode (auto-reload via nodemon)
npm run dev

# Or run normally
npm start
```

The server starts on **http://localhost:3000**.

## License

ISC
