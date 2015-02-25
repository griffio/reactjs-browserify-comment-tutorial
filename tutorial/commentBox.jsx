var React = require("react");
var CommentList = require("./commentList.jsx");
var CommentForm = require("./commentForm.jsx");

var CommentBox = React.createClass({
    render: function () {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.props.data} />
                <CommentForm />
            </div>
        );
    }
});

module.exports = CommentBox;