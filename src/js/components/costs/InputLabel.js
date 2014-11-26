'use strict';
var React = require('react');
var CostsMixin = require('./CostsMixin');

var InputLabel = React.createClass({
    mixins: [CostsMixin],
    render: function () {
        return (
            <div className ="row">
              <span className="col-xs-6 no-left-padding">{this.props.area.name}</span>
              <span className="col-xs-2 no-left-padding">{this.props.area.highCost}</span>
              <span className="col-xs-2 no-left-padding">{this.props.area.lowCost}</span>

              <div className="col-xs-2 btn-group  no-left-padding">
                <button type="submit"  className="btn btn-default input-normal glyphicon glyphicon-pencil" title="editar" > Editar</button>
              </div>
            </div>
        );
    }
});

module.exports = InputLabel;
