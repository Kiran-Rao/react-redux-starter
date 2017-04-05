# react-redux-starter

> Based on Rangle.io [React starter](https://github.com/rangle/react-starter)


[![Circle CI](https://circleci.com/gh/Kiran-Rao/react-redux-starter.svg?style=shield&circle-token=3f52d227c9a46fdd65d3c8b33b08d02f499a517a)](https://circleci.com/gh/Kiran-Rao/react-redux-starter/)



## Getting Started

### Dev
```bash
$ npm run dev
```

This runs a development mode server with live reload etc.

Open `http://localhost:8080` in your browser.

### Production

```bash
npm run build
npm start
```

This runs a production-ready express server that serves up a bundled and
minified version of the client.

Open `http://localhost:8080` in your browser.

### Tests

#### Single Run
```bash
$ npm run test
```

#### Watch Files
```bash
$ npm run test:watch
```

#### Coverage
Code coverage is generated automatically after a `npm run test` run (but not
`test:watch`).

#### Connecting to remote APIs

Both the devmode and production servers provide a way to proxy requests to
remote HTTP APIs.  This can be useful for working around CORS issues when
developing your software.

Edit [this file](server/proxy-config.js) to mount such APIs at a given path.

## Improvements

This is an initial version of this setup and will be expanded in the future. Refer to the [issues section](https://github.com/rangle/rangle-starter/issues) to see what needs to be done, or create a [new one](https://github.com/rangle/rangle-starter/issues/new).

## If something doesn't work

We centralize issue management for all rangle starters in the [rangle-starter](https://github.com/rangle/rangle-starter) repository, to help us keep things consistent.

Refer to the [issues section](https://github.com/rangle/rangle-starter/issues) to see if this has already been logged. Otherwise create a [new issue](https://github.com/rangle/rangle-starter/issues/new).

## License

* Copyright (c) 2015 rangle.io
* Copyright (c) 2017 Kiran Rao

[MIT License][MIT]

[MIT]: ./LICENSE "Mit License"
