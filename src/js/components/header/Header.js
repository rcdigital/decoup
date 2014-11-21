var React = require('react');

var Header = React.CreateClass({
    render: function () {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                {this.props.children}
            </nav>
        );
    }
});

module.exports = Header;
