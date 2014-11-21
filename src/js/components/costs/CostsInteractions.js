var React = require('react');
var Header = React.createFactory(require('../header/Header'));
var Link = require('react-router-component').Link;

var CostsInteractions = React.createClass({
    render: function () {
        return (
            <Header pageName ='Decoup' />

            <div className="btn-group btn-group-xs">
              <Link href='/custos' className="btn btn-lg btn-default">Custo / Hora</Link>
            </div>
        );
    }
});

module.exports = CostsInteractions;
