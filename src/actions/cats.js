// action creators
// an action creator is a function that returns an action
// for example, an action creator would be:
// export const setCats = cats => {
//
// }
// This CANNOT all be on the same line !!!!!! The curly braces need to be
// opened up into curly braces onto multiple lines with a return statement.

// action create vs action: an action creator is simply a function
// that returns an action object with a type (instructions) and payload (the data that we are interacting with)

export const setCats = cats => {
  return { type: 'SET_CATS', cats: cats }
}

export const changeStatus = (cats) => {
  return { type: 'CHANGE_STATUS', cats: cats }
}











// before we can do anything with our action creators, however, we
// need to first GET those cats from a backend database
// so that we can actually use the actions we built to
// interact with the global state in redux.

// this is where asyn action creators come into play.

// async action creators
export const getCats = () => {
  return dispatch => {
    return fetch("http://localhost:3001/cats")
      .then( response => response.json())
      .then( cats => (dispatch(setCats(cats))))
  }
}
