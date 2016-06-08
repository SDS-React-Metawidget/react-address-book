'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addContact = addContact;
exports.updateContact = updateContact;
exports.deleteContact = deleteContact;
var ADD_CONTACT = exports.ADD_CONTACT = 'ADD_CONTACT';
var UPDATE_CONTACT = exports.UPDATE_CONTACT = 'UPDATE_CONTACT';
var DELETE_CONTACT = exports.DELETE_CONTACT = 'DELETE_CONTACT';

function addContact(details) {
  return {
    type: ADD_CONTACT,
    details: details
  };
}

function updateContact(id, details) {
  return {
    type: UPDATE_CONTACT,
    id: id,
    details: details
  };
}

function deleteContact(id) {
  return {
    type: DELETE_CONTACT,
    id: id
  };
}

//# sourceMappingURL=contacts-compiled.js.map

//# sourceMappingURL=contacts-compiled-compiled.js.map