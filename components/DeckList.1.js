import React, {Component} from 'react'
import { AsyncStorage,
         FlatList, 
         Text, 
         View } from 'react-native'

         
import { connect } from 'react-redux'
import  { retrieveDecks, _retriveDecks, _retrieveDecks } from '../assets/actions'
import NoDeck from './NoDeck'
import Deck from './Deck'



async function cleanup() {
  try {
    const result = await AsyncStorage.removeItem('@storage_key')
   
  }
  catch(e) {
    console.log(e.message)
  }
}




class DeckList  extends Component {
   
  
  componentDidMount() {
    
    const { dispatch, navigation } = this.props
   
    didFocusSubscription = navigation.addListener(
      'didFocus',
     () => dispatch(retrieveDecks())
    )
  } 
    render() {
      
      const { decks } = this.props
      const deckList = Object.keys(decks)
      
      console.log(deckList)
      
    
        return (
          <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
          {
            deckList.map((deck) => {
              return (
               <View>
                
                 <Deck title={decks[deck].title} cards={decks[deck].questions.length} />
               </View>
              
                  
                
              
              )
            })
          }
          
             
           
           
   
          </View>
        )
    }
}

function mapStateToProps(decks) {
    
   return decks

}

export default connect(mapStateToProps)(DeckList)