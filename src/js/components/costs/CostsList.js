'use strict';
var React = require('react');
var Header = React.createFactory(require('../header/Header'));
var CostsStore = require('../../stores/CostsStore');
var CostItem = React.createFactory(require('./CostItem'));
var AddCost = React.createFactory(require('./AddCost'));
var Link = require('react-router-component').Link;


var items = CostItem.getAll();
var addArea = (item) => stores.addArea(item);

var CostsList = React.createClass({
    addArea: function () {
      addArea(item);
    },
    updateItem: function (item) {

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
              <AddCost onClick={this.addArea} />
            </div>
          </Header>
          <section id="row-stage" className="table table-hover">
            <CostItem area={items[x]} />
          </section>
        </section>
      );
    }
});

module.exports = CostsList;
