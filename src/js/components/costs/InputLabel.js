'use strict';
var React = require('react');
var CostsMixin = require('./CostsMixin');

var InputLabel = React.createClass({
    mixins: [CostsMixin],
    componentWillMount: function () {
        this.setState({rowStyle : ''});
        if (this.props.area.name === '' ) {
          this.setState({rowStyle : 'js-hidden'});
        }
    },

    update : function (e) {

    },
    render: function () {
        return (

            <div className ={this.state.rowStyle + " row  item-row"}>
              <span className="col-xs-6 no-left-padding">{this.props.area.name}</span>
              <span className="col-xs-2 no-left-padding">{this.props.area.highCost}</span>
              <span className="col-xs-2 no-left-padding">{this.props.area.lowCost}</span>

              <div className="col-xs-2 btn-group  no-left-padding">
                <button type="button" onClick = {this.update}  className="btn btn-default input-normal glyphicon glyphicon-pencil" title="editar" ></button>
              </div>
            </div>
        );
    }
});

module.exports = InputLabel;
