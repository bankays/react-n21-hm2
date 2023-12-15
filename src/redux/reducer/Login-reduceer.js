const initialstate = {
  email: null,
};
const loginReducer = (state = initialstate, action) => {
  //   if (action.type === "SaveEmail") {
  //     return {
  //       email: action.email,
  //     };
  //   }
  switch (action.type) {
    case "SaveEmail":
      return {
        email: action.email,
      };
    default:
      return state;
  }
  //   return state;
};
export default loginReducer;
