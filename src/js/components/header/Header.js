var React = require('react');

var Header = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <h2>{this.props.pageName}<h2>
            </nav>
        );
    }
});

module.exports = Header;
