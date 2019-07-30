import { ADD_DECK, LIST_DECKS } from '../actions'


const initialState = {}

export function decks(state = initialState, action) {
  
  
  
  switch ( action.type ) {

    case ADD_DECK:

        return {
             ...state,
             ...action.deck
        }
    case LIST_DECKS:
      
        return {
          ...state,
          ...action.decks
        }

    default:
        return state
  }
}