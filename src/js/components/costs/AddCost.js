var React = require('react');
var DataActionCreators = require('../actions.DataActionCreators');

var AddCost = React.createClass({
    handleClick: function () {

    },
    render: function () {
      return (
          <button onclick = {this.handleClick} className="btn btn-info header-option-button">Adicionar</button>
      );
    }
});

module.exports = AddCost;
