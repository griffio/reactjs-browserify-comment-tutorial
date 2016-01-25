#ReadMe

react 0.14.6, babelify, testling, beefy

##Simple starter project for React.js

npm script to split into react bundle to speed up start/reload times
~~~
"scripts": {
    "test": "browserify test.jsx | testling -x open",
    "bundle": "browserify --external react --external react-dom --entry index.jsx --outfile bundle.js",
    "preserve": "browserify --require react --require react-dom --outfile react-bundle.js",
    "serve": "beefy index.jsx:bundle.js --open --live -- -x react -x react-dom"
  },
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

