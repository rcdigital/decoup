'use strict';
var React = require('react');
var PureRenderMixin = require('react').addons.PureRenderMixin;
var Addons = require('react/addons').addons;
var CostsMixin = require('./CostsMixin');

var InputLabel = React.createClass({
    mixins: [CostsMixin(), PureRenderMixin],

    handleUpdateButton : function () {
      this.props.onClick();
    },

    render: function () {
        var cx = Addons.classSet;
        console.log('input label');
        var classes = cx({
          'row': true,
          'item-row': true,
          'js-hidden': this.props.rowStyle
        });
        return (
            <div className = {classes} >
              <span className="col-xs-6 no-left-padding">{this.props.name}</span>
              <span className="col-xs-2 no-left-padding">{this.props.highCost}</span>
              <span className="col-xs-2 no-left-padding">{this.props.lowCost}</span>

              <div className="col-xs-2 btn-group  no-left-padding">
                <button type="button" onClick = {this.handleUpdateButton}  className="btn btn-default input-normal glyphicon glyphicon-pencil" title="editar" ></button>
              </div>
            </div>
        );
    }
});

module.exports = InputLabel;
