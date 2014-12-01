'use strict';

var React = require('react');
var Header = React.createFactory(require('../header/Header'));
var CostsStore = require('../../stores/CostsStore');
var CostItem = React.createFactory(require('./CostItem'));
var Link = require('react-router-component').Link;

function getAreaList() {
  return { areas: CostsStore.getAll() };
}

var CostsList = React.createClass({
    getInitialState: function () {
      return getAreaList();
    },
    addItem: function (e) {
      document.getElementById('row-stage').appendChild(<CostItem />);
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
              <div className="col-md-2">
                <button onClick={this.addItem} className="btn btn-info header-option-button">Adicionar</button>
              </div>
            </div>
          </Header>
          <section id="row-stage" className="table table-hover">
              <CostItem areas = {this.state.areas} />
          </section>
        </section>
      );
    }
});

module.exports = CostsList;
