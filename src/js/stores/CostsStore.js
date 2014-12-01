var CostsDispatcher = require('../dispatchers/CostsDispatcher');
var EventEmitter = require('events').EventEmitter;
var CostsConstants = require('../constants/CostsConstants');
var merge = require('react/lib/merge');

var _data = {
  title: null
};

var _areas = [];

for (var i=1; i < 10; i++) {
	_areas.push({
		'id':  i,
		'name': 'area ' + i,
		'highCost': i * 2,
		'lowCost': i
	});
}


// add private functions to modify data
function update(title) {
  _data.title = title;
}


var CostsStore = merge(EventEmitter.prototype, {

  // public methods used by Controller-View to operate on data
  getAll: function() {
    return _areas;
  },


  // Allow Controller-View to register itself with store
  addChangeListener: function(callback) {
    this.on(CostsConstants.CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CostsConstants.CHANGE_EVENT, callback);
  },
  // triggers change listener above, firing controller-view callback
  emitChange: function() {
    this.emit(CostsConstants.CHANGE_EVENT);
  },


  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: CostsDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {
      case CostsConstants.UPDATE_TITLE:
        var text = action.text.trim();
        // NOTE: if this action needs to wait on another store:
        // DataStore.waitFor([OtherStore.dispatchToken]);
        // For details, see: http://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html#why-we-need-a-dispatcher
        if (text !== '') {
          update(text);
          CostsStore.emitChange();
        }
        break;
        case CostsConstants.APPEND_ITEM:


      // add more cases for other actionTypes...
    }
  })

});

module.exports = CostsStore;
