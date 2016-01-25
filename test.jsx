var Tape = require('tape');
var React = require('react/addons');
var ReactTestUtils = React.addons.TestUtils;
var Comment = require('./tutorial/comment.jsx');
var CommentBox = require('./tutorial/commentBox.jsx');
var CommentForm = require('./tutorial/commentForm.jsx');
var CommentList = require('./tutorial/commentList.jsx');

var comments = [
    {id: 99, author: "Pete Hunt", text: "This is one comment"},
    {id: 101, author: "Jordan Walke", text: "This is *another* comment"}
];

Tape('CommentBox', function (t) {

    t.plan(2);

    var commentBox = ReactTestUtils.renderIntoDocument(<CommentBox data={comments} />);

    var renderedType = ReactTestUtils.scryRenderedComponentsWithType(commentBox, CommentBox);

    t.ok(renderedType, "CommentBox added to document tree");

    t.ok(renderedType[0].getDOMNode().querySelectorAll("div.commentList>div.comment").length === 2, "Two comments expected in list");

});

Tape('CommentForm', function (t) {

    t.plan(1);

    var commentform = ReactTestUtils.renderIntoDocument(<CommentForm />);

    var renderedType = ReactTestUtils.scryRenderedComponentsWithType(commentform, CommentForm);

    t.ok(renderedType, "CommentForm added to document tree");

});

Tape('CommentList', function (t) {

    t.plan(2);

    var commentList = ReactTestUtils.renderIntoDocument(<CommentList data={comments} />);

    var renderedType = ReactTestUtils.scryRenderedComponentsWithType(commentList, CommentList);

    t.ok(renderedType, "CommentList added to document tree");

    t.ok(renderedType[0].getDOMNode().querySelectorAll("div.comment").length === 2, "Two comments expected");

});