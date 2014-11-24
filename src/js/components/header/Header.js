'use strict';
var React = require('react');

var Header = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-default navbar-fixed-top menu-structure">
              {this.props.children}
            </nav>
        );
    }
});

module.exports = Header;
