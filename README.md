# CoreRent

> **This is a server-side application, not a static website.**
> It cannot be hosted on GitHub Pages. See [Why GitHub Pages does not work](#why-github-pages-does-not-work).

An e-commerce rental application built with Node.js, Express and Handlebars,
backed by MongoDB. It is a 2022 learning project and is kept for reference.

## Features

Based on the routes and views actually present in the code:

- **Storefront** — product listing, product detail pages, and a shopping cart.
- **Accounts** — sign up, sign in, sign out, and a forgotten-password form.
- **Admin** — add products, upload product images, edit products, and an
  admin control panel.
- **Sessions** — cookie-based sessions with a 60-second maximum age.
- **Uploads** — image upload for products via `express-fileupload`.
- **Static assets** — Bootstrap Icons and stylesheets served from `public/`.

## Tech Stack

- **Node.js + Express 4** — server and routing.
- **Handlebars (`hbs`)** — server-side templating, rendered from `views/`.
- **MongoDB** (`mongodb` driver) — product, user and cart data.
- **Bootstrap Icons** — icon set.
- **`nodemon`** — development auto-restart (`npm start`).

## Installation

Requires Node.js and a running MongoDB instance.

```bash
npm install
```

MongoDB defaults to `localhost:27017` in `config/connection.js`.

## Usage

```bash
npm start          # nodemon ./bin/www
```

Then open <http://localhost:3000>.

## Why GitHub Pages does not work

GitHub Pages serves static files only. This application:

1. Renders every page from Handlebars templates on the server, so there is no
   `index.html` at the repository root to publish.
2. Requires a running Node.js process — Pages has no application runtime.
3. Requires a live MongoDB database for products, users and carts.

The Pages configuration on this repository points at the repository root of
`master` (legacy mode). Because that root contains no `index.html`, the site
returns **404**. The `.github/workflows/pages.yml` workflow present in the
repository is not the active build — the Pages site is in `legacy` mode, so
that workflow does not run.

This is not fixable by changing the Pages source. Disabling Pages on this
repository is the correct resolution, but that is a destructive change to
remote configuration and has been left for the repository owner to decide.

## Project Structure

```text
CoreRent/
├── app.js                  Express app, middleware, session setup
├── bin/www                 Server entry point
├── config/
│   ├── collections.js      Collection name constants
│   └── connection.js       MongoDB connection (mongodb://localhost:27017)
├── details/
│   ├── product-details.js  Product query helpers
│   └── user-details.js     User query helpers
├── routes/
│   ├── admin.js            /admin routes
│   └── user.js             Storefront, cart, auth routes
├── views/                  Handlebars templates
│   ├── layout/             Page layout
│   ├── partials/           Shared partials
│   ├── admin/              Admin pages
│   └── user/               Storefront and auth pages
├── public/                 Static assets (CSS, product images)
├── package.json
└── trush                   Stray 18 KB scratch file, no code reference
```

## Configuration

| Setting | Where | Current value |
|---|---|---|
| MongoDB URL | `config/connection.js` | `mongodb://localhost:27017` |
| Database name | `config/connection.js` | hardcoded `dbname` constant |
| Session secret | `app.js` | hardcoded string `hashimkey` |
| Session cookie max age | `app.js` | 60000 ms (60 seconds) |

## Development

```bash
npm start
```

`npm start` runs `nodemon ./bin/www`, so the server restarts on file changes.

## Known issues

- **Hardcoded session secret.** `app.js` uses a literal secret string. Any
  deployment of this app should read the secret from an environment variable
  instead. This was left unchanged because the application cannot currently be
  run to verify a change.
- **`node_modules/` is committed to the repository** — 4,710 files, ~39 MB of
  third-party dependencies. A `.gitignore` now prevents this growing, but the
  existing files remain in the Git history, because removing them would require
  a history rewrite.
- **Stray `trush` file** at the repository root, ~18 KB, referenced by no code.
  Looks like a typo for "trash". Left in place rather than deleted.
- **No README existed before this one.** The repository was undocumented.

## License

No license file is present. This is a personal learning project; add a license
before redistributing it.
