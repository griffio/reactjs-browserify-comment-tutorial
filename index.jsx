var React = require("react");
var ReactDom = require("react-dom");
var CommentBox = require('./tutorial/commentBox.jsx');

var comments = [
    {id: 31, author: "Pete Hunt", text: "This is a comment"},
    {id: 42, author: "Jordan Walke", text: "This is *another* comment"}
];
ReactDom.render(<CommentBox data={comments} />, document.getElementById("content"));