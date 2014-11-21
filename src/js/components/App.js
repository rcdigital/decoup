/*** @jsx React.DOM */

var React = require('react');
var Router = require('react-router-component');
var CostsInsertions = React.createFactory(require('./costs/CostsInsertions'));
var Template = React.createFactory(require('./Template'));

var Locations = Router.Locations;
var Location = Router.Location;

var App = React.createClass({
  render: function() {
    return (
        <Template>
            <Locations>
                <Location path = "/" handler = {CostsInsertions} />
            </Locations>
        </Template>
    );
  }

});

module.exports = App;
