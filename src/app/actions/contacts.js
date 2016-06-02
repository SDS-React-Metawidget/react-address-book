export const ADD_CONTACT = 'ADD_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';

export function addContact(details) {
  return {
    type: ADD_CONTACT,
    details,
  };
}

export function updateContact(id, details) {
  return {
    type: UPDATE_CONTACT,
    id,
    details,
  };
}

export function deleteContact(id) {
  return {
    type: DELETE_CONTACT,
    id,
  };
}
