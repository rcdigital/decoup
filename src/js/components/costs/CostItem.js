'use strict';
var React = require('react');
var CostContainer = React.createFactory(require('./CostContainer'));

var inputs = [];

var CostItem = React.createClass({
    render: function () {
        var rows = [];
        this.props.areas.forEach(function (area) {
          rows.push(<CostContainer area={area} />);
        });

        rows.push(<CostContainer />);

        return (
          <section className="container cost-list">
          {rows}
          </section>
        );
    }
});

module.exports = CostItem;
