'use strict';
var _ = require('underscore');
var areaNS = 'areas';
var companyNS = 'companies';

var find = require('./data/Find');

var CostsDispatcher = require('../dispatchers/CostsDispatcher');
var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');

var CostsConstants = require('../constants/CostsConstants');
var CHANGE_EVENT = 'change';

var lastRef = '';

var _data = {
  title: null
};

var _areas = [];

// add private functions to modify data
function _updateTitle(title) {
  _data.title = title;
}

function _addArea(item, id) {
  item.id = id;
  _areas.push(item);
}

function _updateArea(item) {
  _areas[item.id] = item;
}

function _delelteArea(areaId) {
  delete _areas[areaId];
}

function _find(term) {
  var result = _.findWhere(_areas, {id: term});
  console.log(result);
  return result;
}

var CostsStore = merge(EventEmitter.prototype, {
	emitChange: function () {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	updateTitle: function (title) {
	  return _updateTitle(title);
	},

  addArea: function (name, highCost, lowCost) {
	  return _addArea(name, highCost, lowCost);
	},

	deleteArea : function (areaId) {
	  return _deleteArea(areaId);
	},

  updateArea: function (areaId, item) {
    return _addArea[areaId] = item;
  },

  getAll: function () {
    return _areas;
  },

	dispatcherIndex: CostsDispatcher.register(function (payload) {
	  var action = payload.action;
		switch (action.actionType) {
      case CostConstants.UPDATE_TITLE:
        var text = action.text.trim();
        if (text !== '') {
          this.updateTitle(text);
          CostStore.emitChange();
        }
      break;

      case CostStore.UPDATE_AREA:
        this.updateArea(action.areaId, action.item);
        CostStore.emitChange();
      break;

      case CostStore.ADD_AREA:
        this.addArea(action.name, action.highCost, action.lowCost);
        CostStore.emitChange();
      break;

      case CostStore.DELETE_AREA:
        this.removeArea(areaId);
        CostStore.emitChange();
      break;

		}
	})

});

module.exports = CostsStore;
