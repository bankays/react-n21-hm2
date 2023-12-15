const initialState = {
  likedpr: [],
};
const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIKE_PRODUCT":
      return {
        likedpr: [...state.likedpr, action.prod],
      };
    default:
      state;
  }
  return state;
};
export default likeReducer;
