const initialState = {
  username: '',
  password: '',
  email: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA_REGISTER':
      return {
        ...state,
        email: action.payload.email,
        username: action.payload.username,
        password: action.payload.password,
      };
    default:
      return state;
  }
};
