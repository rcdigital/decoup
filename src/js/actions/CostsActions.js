'use strict';
var CostsDispatcher = require('../dispatchers/CostsDispatcher');
var CostsConstants = require('../constants/CostsConstants');
var CostsStore = require('../stores/CostsStore');

module.exports = {

  updateTitle: function(text) {
    CostsDispatcher.handleViewAction({
      type: CostsConstants.ActionTypes.UPDATE_TITLE,
      text: text
    });
  },

  appendItem: function () {
    CostsDispatcher.handleViewAction({
      type: CostsConstants.ActionTypes.APPEND_ITEM
    });
  }

};
