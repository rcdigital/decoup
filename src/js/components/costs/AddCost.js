var React = require('react');

var AddCost = React.createClass({
    addItem: function (e) {
      this.props.onClick(e);
    },
    render: function () {
      return (
          <button onClick = {this.addItem} className="btn btn-info header-option-button">Adicionar</button>
      );
    }
});

module.exports = AddCost;
