# Frontend

This repository contains the web-interface for the Cloud Lada platform. It is implemented as a [VueJS]() 3 application.

## Getting Started

To work in this repository, you'll need [NodeJS](https://nodejs.org) 14 and [Yarn](https://yarnpkg.com/). After cloning
the repository, use `yarn install` to install all required dependencies.

The `yarn serve` command will spin up a local development server. API requests will automatically be forwarded to
`https://lada.dsb.dev`. During development, that API may not be available, so you may want to change that in the
[vue configuration](./vue.config.js).

When you make changes, the web application will hot reload. You can use `yarn lint --fix` to automatically fix any
linting issues preventing the application from displaying.

## CI

When opening a pull request, your changes will be compiled and linted. Once in the `master` branch, a release
can be performed by creating a new tag. A new tag will automatically publish a new docker image.

## Deploying

This repository also contains the [Kubernetes manifests](./manifests) required to deploy the application. The release
workflow will include these for each tag.
