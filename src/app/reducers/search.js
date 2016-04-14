import { SEARCH } from 'app/actions/search';


const initialState = {
  filter: {},
};

export default function search(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
    console.log('REDUCER:', action.filter);
      return {
        ...state,
        filter: action.filter,
      };

    default:
      return state;
  }
}
