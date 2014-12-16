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

  updateArea: function(areaId, item) {
    CostsDispatcher.handleViewAction({
      type: CostsConstants.ActionTypes.UPDATE_AREA,
      areaId: areaId,
      item: item
    });
  },

  addArea: function () {
    CostsDispatcher.handleViewAction({
      type: CostsConstants.ActionTypes.ADD_AREA,
      name: name,
      highCost: highCost,
      lowCost: lowCost
    });
  }

};
