import { AsyncStorage } from 'react-native'

async function addDeck(deck) {
    try {
      const result = await AsyncStorage.mergeItem('@storage_key',JSON.stringify(deck))
      
    }
    catch (e) {
      console.log(e.message)
    }
  }
  
  async function cleanup() {
    try {
      const result = await AsyncStorage.removeItem('@storage_key')
      console.log('asyncstorage wiped out')
    }
    catch(e) {
      console.log(e.message)
    }
  }

 export function createDeck(title) {
   console.log('TITLE8***', title)
   
    return AsyncStorage.mergeItem('@storage_key',
    JSON.stringify({
      [title]: {
        title,
        questions: []
      }
    }))
       
 }