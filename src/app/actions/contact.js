export const SELECT_CONTACT = 'SELECT_CONTACT';

export function selectContact(id) {
  return {
    type: SELECT_CONTACT,
    id,
  };
}
