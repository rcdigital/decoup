var React = require('react');
var Header = React.createFactory(require('../header/Header'));
var Link = require('react-router-component').Link;

var CostItem = React.createClass({
    render: function () {
        return (
          <div className="row"></div>
        );
    }
});

module.exports = CostItem;
