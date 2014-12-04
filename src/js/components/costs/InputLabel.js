'use strict';
var React = require('react');
var Addons = require('react/addons').addons;
var CostsMixin = require('./CostsMixin');

var InputLabel = React.createClass({
    mixins: [CostsMixin],
    updateHandler : function (e) {
      console.log(e);
      this.setState({rowStyle: true});
    },

    render: function () {
        var cx = Addons.classSet;
        var classes = cx({
          'row': true,
          'item-row': true,
          'js-hidden': !this.state.rowStyle
        });
        return (
            <div className = {classes} >
              <span className="col-xs-6 no-left-padding">{this.props.area.name}</span>
              <span className="col-xs-2 no-left-padding">{this.props.area.highCost}</span>
              <span className="col-xs-2 no-left-padding">{this.props.area.lowCost}</span>

              <div className="col-xs-2 btn-group  no-left-padding">
                <button type="button" onClick = {this.updateHandler}  className="btn btn-default input-normal glyphicon glyphicon-pencil" title="editar" ></button>
              </div>
            </div>
        );
    }
});

module.exports = InputLabel;
