// reducer
export default (cats = [], action) => {
  switch (action.type) {
    case "SET_CATS":
      return action.cats
    case "CHANGE_STATUS":
      return action.cats
    default:
      return cats
  }
};
