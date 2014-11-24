var React = require('react');
var Header = React.createFactory(require('../header/Header'));
var Link = require('react-router-component').Link;

var CostsList = React.createClass({
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
                <button className="btn btn-info header-option-button">Adicionar</button>
              </div>
            </div>
          </Header>
          <section className=""></section>
        </section>
      );
    }
});

module.exports = CostsList;
