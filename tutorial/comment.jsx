var React = require("react");
var marked = require("marked");
var Comment = React.createClass({
    render: function () {
        var unSafeHtml = marked(this.props.children.toString());
        return (
            <div className="comment">
                <h2 className="commentAuthor">{this.props.author}</h2>
                <span dangerouslySetInnerHTML={{__html: unSafeHtml}} />
            </div>
        );
    }
});

module.exports = Comment;