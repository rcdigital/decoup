var React = require('react');
var Header = React.createFactory(require('./header/Header'));
var Link = require('react-router-component').Link;

var Home = React.createClass({
    render: function () {
        return (
          <section className="container">
            <Header>
              <h2 className="main-menu">Decoup</h2>
            </Header>
            <div className="row options-container">
              <Link href="/custos" className="btn btn-lg btn-primary menu-link">
                Custo / Hora
              </Link>

              <Link href="/servicos" className="btn btn-lg btn-primary menu-link">
                Serviço
              </Link>
            </div>
          </section>
        );
    }
});

module.exports = Home;
