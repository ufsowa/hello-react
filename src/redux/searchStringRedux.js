
// actions
const createActionName = actionName => `app/search/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName('SEARCH');

// action creators
export const search = payload => ({ type: UPDATE_SEARCHSTRING, payload });


const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
      case UPDATE_SEARCHSTRING:
        return action.payload
      default:
        return statePart;
    }
  }

export default searchStringReducer;