var React = require('react');
var Header = React.createFactory(require('../header/Header'));
var Link = require('react-router-component').Link;

var CostItem = React.createClass({
    render: function () {
        return (
          <div className="col-md-9 col-md-offset-1">
            <form className="form-horizontal" role="form">
              <div className ="row">
                <div className="col-xs-6  no-left-padding">
                    <label className="sr-only">Area:</label>
                    <input type="text" name="area" className="form-control input-normal" placeholder = "Area" />
                </div>

                <div className="col-xs-2 no-left-padding">
                    <label className="sr-only">Maior Custo:</label>
                    <input type="text" name="highcost" className="form-control input-normal" placeholder = "Maior Custo" />
                </div>

                <div className="col-xs-2 no-left-padding">
                    <label className="sr-only">Menor Custo:</label>
                    <input type="text" name="lowercost" className="form-control input-normal" placeholder = "Menor Custo" />
                </div>

                <div className="col-xs-2 btn-group  no-left-padding">
                  <button type="submit"  className="btn btn-success input-normal glyphicon glyphicon-ok" title="Salvar" ></button>
                  <button type="button"  className="btn btn-danger input-normal glyphicon glyphicon-remove" title="Cancelar" ></button>
                </div>

              </div>
            </form>
          </div>
        );
    }
});

module.exports = CostItem;
