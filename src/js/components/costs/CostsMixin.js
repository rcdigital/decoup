'use strict';
var React = require('react');
var CostsMixin = function () {
    return {
      getInitialState: function () {
        return {rowStyle: false};
      },

      componentWillMount: function () {
          console.log('test');
          this.setState({rowStyle : false});
          if (this.props.area.name === '' ) {
            this.setState({rowStyle : true});
          }
      },

      shouldComponentUpdate: function () {
        console.log('should update');
        return true;
      },

      propTypes: {
        name: React.PropTypes.string,
        highCost: React.PropTypes.number,
        lowCost: React.PropTypes.number
      },

      updataData: function (index) {
        console.log(index);
      },

      getDefaultProps: function () {
        return {
          area: {
            name: '',
            highCost: '',
            lowCost: ''
          },

          onChange: function (){},
          onRemove: function () {}
        };
      }

  };

};

module.exports = CostsMixin;
