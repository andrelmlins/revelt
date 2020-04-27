<div align="center">
  <img alt="Logo" src="https://raw.githubusercontent.com/andrelmlins/revelt/master/logo.png" />
  <h1>React x Svelte</h1>
  <h4>Analysis of a project using React and Svelte technologies.</h4>
  <br />
</div>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/revelt/blob/master/LICENSE) &bull; [![Build Status](https://travis-ci.com/andrelmlins/revelt.svg?branch=master)](https://travis-ci.com/andrelmlins/revelt) &bull; [![Docker Pulls](https://img.shields.io/docker/pulls/andrelmlins1/revelt)](https://hub.docker.com/repository/docker/andrelmlins1/revelt) &bull; [![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/andrelmlins1/revelt)](https://hub.docker.com/repository/docker/andrelmlins1/revelt)

## ✔️ Goals

- 🥇 Compare these javascript technologies
- ➕ Analyze code amount
- 🔊 Analyze generated build size
- ⏱️ Time analysis

## ℹ️ How to use

```
git clone https://github.com/andrelmlins/revelt.git
cd revelt
yarn install && yarn start
```

**React application**

To view react application _http://localhost:5001/react_ and to edit go to the /packages/react-app package.

Open [demo](https://revelt.netlify.app/react/) react application.

**Svelte application**

To view svelte application _http://localhost:5000/svelte_ and to edit go to the /packages/svelte-app package.

Open [demo](https://revelt.netlify.app/svelte/) svelte application.

## ⚙️ Tools

- [get-folder-size](https://github.com/alessioalex/get-folder-size)
- [cloc](https://github.com/kentcdodds/cloc)
- [lighthouse](https://github.com/GoogleChrome/lighthouse)

## 🐳 Use Docker Image

[![dockeri.co](https://dockeri.co/image/andrelmlins1/revelt)](https://hub.docker.com/r/andrelmlins1/revelt)

There's an official docker image available on [Dockerhub](https://hub.docker.com/r/andrelmlins1/revelt):

```
$ docker pull andrelmlins1/revelt
$ docker run -d -p 8080:80 --name revelt andrelmlins1/revelt
```

## Contribution guidelines

If you want to contribute to **Revelt**, be sure to review the
[contribution guidelines](CONTRIBUTING.md). This project adheres to
[code of conduct](CODE_OF_CONDUCT.md). By participating, you are expected to
uphold this code.

## License

Revelt is open source software [licensed as MIT](https://github.com/andrelmlins/revelt/blob/master/LICENSE).
