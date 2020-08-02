![CI](https://github.com/ViralFeedback/ViralFeedback/workflows/CI/badge.svg)

# Viral Feedback

## Installation

[Lerna](https://github.com/lerna/lerna) is used to manage packages.

To install all needed dependencies run:

```sh
 npm ci && npx lerna exec npm ci
```

### Setup environment variables

You'll need a `HYPOTHESIS_API_TOKEN` if you're working with private groups or posting annotations.

```sh
cd packages/server
cp .env.example .env
```

Open the newly created env file and add your API token.

Environment variables for the web app are optional.

### Start dev servers

You'll need two terminals. In the first:

```sh
cd packages/server
npm run start:dev
```

In the other:

```sh
cd packages/web
npm start
```

## Development

### GraphQL Code Gen

We use [GraphQL Code Generator](https://graphql-code-generator.com/) for automatically generating typescript types and some other useful code (see docs for all this can do).

When you change the schema (on frontend or server), with the server running in another terminal run:

```sh
npm run gql
```

This will generate types and more for your schema changes.

### Linting

```sh
npm run lint
```

### Tests

We have the most basic tests

```sh
npm test
```

## Deployments

Deploying to a Digital Ocean droplet is handled by a Github action. You will need to add secrets for your instance. See `.github/workflows/ci.yml` for more info.

The `contrib` folder containing example systemd services. Additionally, there is a `Caddyfile` used for configuring a [caddy server](https://caddyserver.com/) for serving static assets and serving as a reverse proxy for the API.
