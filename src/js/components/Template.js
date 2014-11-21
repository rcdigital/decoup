var React = require('react');

var Template = React.CreateClass({
    render: function () {
        return (
            <div className="container">
                {this.props.children}
            </div>
        );
    }
});

module.exports = Template;
