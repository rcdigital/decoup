'use strict';
var React = require('react');
var Addons = require('react/addons').addons;
var CostsMixin = require('./CostsMixin');

var InputForm = React.createClass({
    mixins: [CostsMixin()],
    saveData : function (e) {
      e.preventDefault();
      console.log(this.props.index);
    },

    render: function () {
        var cx = Addons.classSet;
        console.log('input form');
        var classes = cx({
          'form-horizontal': true,
          'item-row': true,
          'js-hidden': !this.state.rowStyle
        });
        return (
            <form onSubmit={this.saveData} index={this.props.area.id} className={classes} role="form">
              <div className ="row">

                <div className="col-xs-6  no-left-padding">
                    <label className="sr-only">Area:</label>
                    <input type="text" refs="area" value={this.props.area.name} onChange={this.updateData} name="area" className="form-control input-normal" placeholder = "Area" />
                </div>

                <div className="col-xs-2 no-left-padding">
                    <label className="sr-only">Maior Custo:</label>
                    <input type="text" value={this.props.area.highCost} onChange={this.updateData} name="highcost" className="form-control input-normal" placeholder = "Maior Custo" />
                </div>

                <div className="col-xs-2 no-left-padding">
                    <label className="sr-only">Menor Custo:</label>
                    <input type="text" value={this.props.area.lowCost} onChange={this.updateData} name="lowercost" className="form-control input-normal" placeholder = "Menor Custo" />
                </div>

                <div className="col-xs-2 btn-group  no-left-padding">
                  <button type="submit"  className="btn btn-success input-normal glyphicon glyphicon-ok" title="Salvar" ></button>
                  <button type="button"  className="btn btn-danger input-normal glyphicon glyphicon-remove" title="Cancelar" ></button>
                </div>

              </div>
            </form>
        );
    }
});

module.exports = InputForm;
