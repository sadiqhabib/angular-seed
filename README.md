![Meanie](https://raw.githubusercontent.com/meanie/meanie/master/meanie-logo-full.png)

# Angular seed project

[![github release](https://img.shields.io/github/release/meanie/angular-seed.svg)](https://github.com/meanie/angular-seed/releases)
[![node dependencies](https://david-dm.org/meanie/angular-seed.svg)](https://david-dm.org/meanie/angular-seed)
[![github issues](https://img.shields.io/github/issues/meanie/angular-seed.svg)](https://github.com/meanie/angular-seed/issues)
[![codacy](https://img.shields.io/codacy/e7834f33fcb24ee9a390a3872794d078.svg)](https://www.codacy.com/app/meanie/angular-seed)
[![gitter](https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg)](https://gitter.im/meanie/meanie?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This repository contains a seed project for Angular 1 client applications written in ES5/ES6. It is part of the [Meanie](https://github.com/meanie/meanie) eco system, which is a collection of boilerplate code and libraries for developing, testing and building javascript applications using the MEAN stack (MongoDB, Express, Angular and Node).

This seed project is built to work together side by side with the [Express seed](https://github.com/meanie/express-seed) project for server side applications. There is also an [Angular 2 seed](https://github.com/meanie/angular2-seed) project using TypeScript.

The build process for this seed project is powered by the Gulp 4 task runner.

## Installation
You can install this seed project either by manually cloning the repository, or by using the [Meanie CLI](https://www.npmjs.com/package/meanie).

### Cloning from github
```shell
# Create empty project directory
mkdir my-project
cd my-project

# Clone repository
git clone https://github.com/meanie/angular-seed.git .

# Install dependencies
npm install
```

### Using the Meanie CLI
This feature will be available shortly.
```shell
# Create empty project directory
mkdir my-project
cd my-project

# Seed a new Angular project
meanie seed angular
```

If you don't have the Meanie CLI tool installed, you can get it using:

```shell
npm install -g meanie
```

## Running the project
Once installed, you can run the project using:

```shell
npm start
```

This will build the app, launch lite-server and watch for file changes and rebuild as needed.

## Folder structure

The following is an outline of the folder structure of this seed project:

```shell
# This is where your client side Angular application resides.
├─ app

  # Static assets for your application go here. This is a good
  # place to store fonts, images, pdf files, etc. Anything in here
  # will be copied as-is to the distribution folder.
  ├─ assets

  # This folder contains your applications main feature modules.
  ├─ components

    # The core application component
    ├─ app

    # The home module of your application. Feel free to rename to
    # anything that suits better (e.g. index, dashboard, ...)
    ├─ home

    # Any shared components (like interface elements) reside here.
    └─ shared

  # This folder contains the shared layout for your application.
  # It's a good place to store all common stylesheets.
  ├─ layout

  # Any shared services can go here.
  └─ services

# This folder contains build configuration as well as all the tasks
# and utilities required to build your project.
├─ build

# This folder contains your environment specific application config.
# The config files are in YAML for convenience and are parsed during
# the build process and compiled into an Angular `Config` module.
├─ config

# Distribution folder for compiled files (generated by gulp build).
└─ dist
```

## Gulp tasks

Meanie comes with fully configured [Gulp](http://gulpjs.com/) tasks for all common development and build tasks.

*Note*: The gulpfile for Meanie has been configured for use with Gulp version 4. This version is not officially released yet, but you can install and use the alpha version by following  [these instructions](http://demisx.github.io/gulp4/2015/01/15/install-gulp4.html).

### Default

The default task, which you can run by simply typing `gulp` is to run the three main tasks, build, watch and start. This is perfect for ongoing development.
```shell
$ gulp
```
You can also run these tasks individually if needed.

### Build

Build the application and populate the public folder with compiled javascript, stylesheets and static assets. The build task also lints your files and runs your tests prior to building.
```shell
$ gulp build
```

### Watch

Watch your files for changes and runs linters, unit tests and recompiles the application files as needed.
```shell
$ gulp watch
```
The watch task also comes with livereload, which gets triggered every time the index file is rebuilt. To use it, simply install the [Chrome livereload plugin](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en).

### Start

Starts the Node server using [Nodemon](http://nodemon.io/).
```shell
$ gulp start
```

### Testing
```shell
$ npm test
```

### Versioning

Use `npm version` to bump the version numbers in your package file, as well as commit the bump to the repository and tag it with the new version. This process uses [semantic versioning](https://github.com/npm/node-semver).

```shell
# Bump the patch version (0.1.0 -> 0.1.1)
$ npm version patch

# Bump the minor version (0.1.0 -> 0.2.0)
$ npm version minor

# Bump the major version (0.1.0 -> 1.0.0)
$ npm version major
```

### Helpers

Some of the helper tasks have also been exposed to the CLI:

```shell
# Cleans the public folder
$ gulp clean

# Copy all static assets to the public folder
$ gulp static
```

## FAQ

#### Why can't I install this seed project with npm?

Unfortunately, npm currently doesn't support moving package code outside of the `node_modules` folder. Since this is a seed project, and as such it has to reside in your project folder and not in `node_modules`, the seed project can only be installed by cloning the git repository or using the [Meanie CLI tool](https://github.com/meanie/meanie).

#### What if I want to use this seed project with a different server architecture?

No problem! While this seed project was built to work seemlessly together with the [Meanie Express seed](https://github.com/meanie/express-seed), you can use it with any server architecture or as a standalone Angular app as well.

## Issues & feature requests

Please report any bugs, issues, suggestions and feature requests in the appropriate issue tracker:
* [Angular seed project issue tracker](https://github.com/meanie/angular-seed/issues)
* [Meanie CLI issue tracker](https://github.com/meanie/meanie/issues)

## Contributing

Pull requests are welcome! If you would like to contribute to Meanie, please check out the [Meanie contributing guidelines](https://github.com/meanie/meanie/blob/master/CONTRIBUTING.md).

## License

(MIT License)

Copyright 2015-2016, [Adam Buczynski](http://adambuczynski.com)
