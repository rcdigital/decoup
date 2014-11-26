'use strict';
var Dispatcher = require('flux').Dispatcher;
var CostsConstants = require('../constants/CostsConstants');
var copyProperties = require('react/lib/copyProperties');

var AppDispatcher = copyProperties(new Dispatcher(), {

  handleServerAction: function(action) {
    var payload = {
      source: CostsConstants.ActionSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },

  handleViewAction: function(action) {
    console.log('action', action);
    var payload = {
      source: CostsConstants.ActionSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }

});

module.exports = AppDispatcher;
