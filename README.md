#ReadMe

react 0.14.6, babelify, testling, beefy, livereactload

##Simple starter project for React.js

npm script to split into react bundle to speed up start/reload times.

livereactload updates browser when your scripts change.

~~~
"scripts": {
    "preserve": "browserify --require react --require react-dom --outfile react-bundle.js",
    "serve": "beefy index.jsx:bundle.js --open -- --plugin livereactload --external react --external react-dom"
  }

npm install
npm run serve
~~~

[From the React Tutorial](http://facebook.github.io/react/docs/tutorial.html)
Uses "marked" npm module for MarkDown(tm)

Browserify, Testling

~~~
npm install -g beefy browserify testling
~~~

### Commands

~~~
npm install
npm test
npm run serve
~~~

