const intialState = {
  list: [
    {
      firstName: 'Nathan',
      lastName: 'Hardy',
      details: 'email@example.org',
    },
  ],
};

export default function contacts(state = intialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
