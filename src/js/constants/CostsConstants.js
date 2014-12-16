var keyMirror = require('react/lib/keyMirror');

module.exports = {

  CHANGE_EVENT: 'change',

  ActionTypes: keyMirror({
    UPDATE_TITLE: null,
    ADD_AREA: null,
    UPDATE_AREA: null,
    DELETE_AREA: null,
    RECEIVE_DATA: null
  }),

  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })

};
