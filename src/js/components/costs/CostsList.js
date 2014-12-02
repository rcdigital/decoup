'use strict';

var React = require('react');
var Header = React.createFactory(require('../header/Header'));
var CostsStore = require('../../stores/CostsStore');
var CostItem = React.createFactory(require('./CostItem'));
var AddCost = React.createFactory(require('./AddCost'));
var Link = require('react-router-component').Link;


var CostsList = React.createClass({
    getInitialState: function () {
      return this.bindColumns()
    },
    bindColumns: function () {
      var items = CostsStore.getAll();
      var rows = [];
      for (var x=0, l = items.length; x < l; x++) {
        rows.push(<CostItem area={items[x]} />);
      }

      return {items: rows};
    },
    addItem: function () {
      var newItems = this.state.items.concat([<CostItem />]);
      this.setState({items: newItems});
    },
    render: function () {
      return (
        <section className = "container options-container">
          <Header>
            <div className = "row">
              <div className= "col-md-2">
                <Link className="btn btn-default header-link-default"  href="/">voltar</Link>
              </div>
              <h2 className="col-md-8 main-menu">Custo x Hora</h2>
              <AddCost onClick={this.addItem} />
            </div>
          </Header>
          <section id="row-stage" className="table table-hover">
            {this.state.items}
          </section>
        </section>
      );
    }
});

module.exports = CostsList;
