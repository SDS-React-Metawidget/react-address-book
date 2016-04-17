import { SELECT_CONTACT } from 'app/actions/contact';


const initialState = {
  id: null,
};

export default function contact(state = initialState, action) {
  switch (action.type) {
    case SELECT_CONTACT:
      return {
        ...state,
        id: action.id,
      };

    default:
      return state;
  }
}
