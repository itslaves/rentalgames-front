# rentalgames-front

| Branch | Build Status | Netlify Status |
| ------ | ------------ | ----------- |
| master | [![Build Status](https://travis-ci.com/itslaves/rentalgames-front.svg?branch=master)](https://travis-ci.com/itslaves/rentalgames-front) | [![Netlify Status](https://api.netlify.com/api/v1/badges/cad08a44-1b08-4d43-8691-39470ff2eeea/deploy-status)](https://app.netlify.com/sites/rentalgames-front-master/deploys)
| develop | [![Build Status](https://travis-ci.com/itslaves/rentalgames-front.svg?branch=develop)](https://travis-ci.com/itslaves/rentalgames-front) | [![Netlify Status](https://api.netlify.com/api/v1/badges/793cf164-87c4-4683-8ccf-b41c651de86c/deploy-status)](https://app.netlify.com/sites/rentalgames-front-develop/deploys)

---

## Project setup

```sh
npm install
```

### Compiles

```sh
npm run serve # Compiles and hot-reloads for development
npm run build # Compiles and minifies for production
```

### Tests

```sh
npm run test:unit # Run your unit tests
```

### Lints

```sh
npm run lint # Lints and fixes files
npm run lint -- --no-fix # Only lints
```

### Storybook

```sh
npm run storybook:serve # Run storybook for development
npm run storybook:build # Compiles storybook to create static files
```

### Containerize

```sh
docker image build -t rg-front:$TAG . # Build a docker image
docker container run --rm -it -p 8080:80 rg-front:$TAG # Run a docker container
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
