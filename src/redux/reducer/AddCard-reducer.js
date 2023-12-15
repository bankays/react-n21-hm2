const initialstate = {
  add: [],
};
const addReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD_CART":
      return {
        add: [...state.add, action.prod],
      };
    case "REMOVE_CART":
      return {
        add: [],
      };
    case "REMOVE_ONE":
      return {
        add: state.add.filter((add) => add.id !== action.add.id),
      };
    default:
      state;
  }
  return state;
};
export default addReducer;
