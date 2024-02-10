import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';

import { strContains } from '../utils/strContains.js';

//selectors
export const getFilteredCards = ({cards, searchText}, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchText));
export const getFavoriteCards = ({cards}) => cards.filter(card => card.isFavorite);
export const getListColumns = ({columns}, id) => columns.filter((column) => column.listId === id);
export const getListById = ({lists}, listId) => lists.find((list) => list.id === listId);
export const getAllLists = ({lists}) => lists;


// action creators
export const addList = payload => ({ type: 'ADD_LIST', payload });
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const search = payload => ({ type: 'SEARCH', payload });
export const toggleFavorite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload });

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_LIST': 
      return { ...state, lists: [...state.lists, {...action.payload, id: shortid()}]};
    case 'ADD_COLUMN': 
      return { ...state, columns: [...state.columns, {...action.payload, id: shortid()}]};
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, {...action.payload, id: shortid()}]};
    case 'TOGGLE_CARD_FAVORITE':
      return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };  
    case 'SEARCH':
      return {...state, searchText: action.payload};
    default:
      return state;
    };
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;