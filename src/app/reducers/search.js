import { SEARCH } from 'app/actions/search';


const initialState = {
  filter: {},
};

export default function search(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        filter: action.filter,
      };

    default:
      return state;
  }
}
