const intialState = {
  list: [
    {
      firstName: 'Nathan',
      lastName: 'Hardy',
      details: 'Nathan.J.Hardy@student.uts.edu.au',
    },
  ],
};

export default function contacts(state = intialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
