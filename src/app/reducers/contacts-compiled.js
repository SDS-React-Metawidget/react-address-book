'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = contacts;

var _uuid = require('uuid');

var _contacts2 = require('app/actions/contacts');

var _contact = require('app/lib/contact');

var _contact2 = _interopRequireDefault(_contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sampleContact = new _contact2.default({
  id: (0, _uuid.v4)(),
  firstName: 'Nathan',
  lastName: 'Hardy',
  details: 'email@example.org'
});
var intialState = {
  contacts: _defineProperty({}, sampleContact.id, sampleContact)
};

function addContact(state, details) {
  var newContact = new _contact2.default(_extends({}, details, { id: (0, _uuid.v4)() }));
  return _extends({}, state, {
    contacts: _extends({}, state.contacts, _defineProperty({}, newContact.id, newContact))
  });
}

function deleteContact(state, id) {
  var newState = _extends({}, state, {
    contacts: _extends({}, state.contacts)
  });
  delete newState.contacts[id];
  return newState;
}

function contacts() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? intialState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _contacts2.ADD_CONTACT:
      return addContact(state, action.details);

    case _contacts2.UPDATE_CONTACT:
      return _extends({}, state, {
        contacts: _extends({}, state.contacts, _defineProperty({}, action.id, new _contact2.default(state.contacts[action.id]).update(action.details)))
      });

    case _contacts2.DELETE_CONTACT:
      return deleteContact(state, action.id);

    default:
      return state;
  }
}

//# sourceMappingURL=contacts-compiled.js.map