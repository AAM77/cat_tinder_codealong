// reducer
export default (state = [], action) => {
  let newCatsArr;

  switch (action.type) {

    case "SET_CATS":
      return action.cats

    case "LIKE_CAT":
       newCatsArr = state.map( cat => {
        if (action.catId === cat.id) {
          const newCat = Object.assign({}, cat);
          newCat.status = 'liked';
          return newCat
        } else {
          return cat
        }
      });
      return newCatsArr;

    case "DISLIKE_CAT":
      newCatsArr = state.map( cat => {
        if (action.catId === cat.id) {
          const newCat = Object.assign({}, cat);
          newCat.status = 'disliked'
          return newCat
        } else {
          return cat
        }
      });

      return newCatsArr;

    case 'CHANGE_HEART':
      newCatsArr = state.map( cat => {
        if (action.catId === cat.id) {
          const newCat = Object.assign({}, cat);
          newCat.status = "undecided";
          return newCat
        } else {
          return cat
        }
      });

      return newCatsArr;

    default:
      return state
  }
};
