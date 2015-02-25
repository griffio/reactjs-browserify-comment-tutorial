var React = require("react");
var CommentBox = require('./tutorial/commentBox.jsx');

var comments = [
    {author: "Pete Hunt", text: "This is one comment"},
    {author: "Jordan Walke", text: "This is *another* comment"}
];
React.render(<CommentBox data={comments} />, document.getElementById("content"));