import { v4 as uuid } from 'uuid';

import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
} from 'app/actions/contacts';
import Contact from 'app/lib/contact';


const sampleContact = new Contact({
  id: 1,
  firstName: 'Nathan',
  lastName: 'Hardy',
  details: 'email@example.org',
});
const sampleContact2 = new Contact({
  id: 2,
  firstName: 'Nathan',
  lastName: 'Hardy',
  details: 'email@example.org',
});
const intialState = {
  contacts: {
    [sampleContact.id]: sampleContact,
    [sampleContact2.id]: sampleContact2,
  },
};

function addContact(state, details) {
  const newContact = new Contact({ ...details, id: uuid() });
  return {
    ...state,
    contacts: {
      ...state.contacts,
      [newContact.id]: newContact,
    },
  };
}

function deleteContact(state, id) {
  const newState = {
    ...state,
    contacts: {
      ...state.contacts,
    },
  };
  delete newState.contacts[id];
  return newState;
}

export default function contacts(state = intialState, action) {
  switch (action.type) {
    case ADD_CONTACT:
      return addContact(state, action.details);

    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          [action.id]: (new Contact(state.contacts[action.id])).update(action.details),
        },
      };

    case DELETE_CONTACT:
      return deleteContact(state, action.id);

    default:
      return state;
  }
}
