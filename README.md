# chatblend-ui
[![Build Status](https://travis-ci.org/starknine/chatblend-ui.svg?branch=master)](https://travis-ci.org/starknine/chatblend-ui)

## Install Dependencies

Install nodejs and npm. On Mac OS X, the easiest way to accomplish this is with `brew`:

```
$ brew install node
```

If you prefer to install manually, head over to the [node.js downloads page](http://nodejs.org/download/).

Next, install Gulp and Bower to get their CLI tools:

```
$ npm install -g gulp bower`
```

Finally, install the dependencies for the project:

```
$ npm install && bower install
```

## Development Server

```
$ gulp serve
```

This will start a local server to access the application. It will also watch for changes and automatically reload the page when necessary.

## Building

```
$ gulp build
```

## Testing

```
$ gulp test
```