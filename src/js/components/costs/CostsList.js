'use strict';
var React = require('react');
var Header = React.createFactory(require('../header/Header'));
var CostsStore = require('../../stores/CostsStore');
var CostItem = React.createFactory(require('./CostItem'));
var AddCost = React.createFactory(require('./AddCost'));
var Link = require('react-router-component').Link;



function addArea (name, highCost, lowCost) {
  CostsStore.addArea(name, highCost, lowCost);
}

function generateManyAreas(range) {
  for (var x = 1; x <= range; x++) {
    addArea('Area '+ x, x * 2, x);
  }
}

generateManyAreas(10);

var CostsList = React.createClass({
    addArea: function () {
      addArea(item);
    },
    updateItem: function (itemId, item) {

    },
    render: function () {
      var areas = CostsStore.getAll();
      console.log(areas);
      var areasItems = areas.map(function(area)  {
            return (<CostItem area={area} />);
      });
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
            {areasItems}
          </section>
        </section>
      );
    }
});

module.exports = CostsList;
