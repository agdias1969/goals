export const  ADD_DECK =    'ADD_DECK'
export const LIST_DECKS =   'LIST_DECKS'
export const REMOVE_DECK =  'REMOVE_DECK'
import { AsyncStorage } from 'react-native'



export function addDeck(deck) {
    
    return {
        type: ADD_DECK,
        deck
    }
}

function listDecks(decks) {
   
    return {
        type: LIST_DECKS,
        decks
    }
   
}

export function retrieveDecks() {
    
    return function (dispatch)  {
        AsyncStorage.getItem('@storage_key')
          .then((result) => dispatch(listDecks(JSON.parse(result))))
    }
}


  
  

