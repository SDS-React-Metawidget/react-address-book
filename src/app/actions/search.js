export const SEARCH = 'SEARCH';

export function search(filter) {
  return {
    type: SEARCH,
    filter,
  };
}
