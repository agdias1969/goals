import React, {Component} from 'react'
import { AsyncStorage,
         FlatList,
         StatusBar, 
         Text, 
         View } from 'react-native'

         
import { connect } from 'react-redux'
import  { retrieveDecks, _retriveDecks, _retrieveDecks } from '../assets/actions'
import NoDeck from './NoDeck'
import Deck from './Deck'
import {
  Entypo,
  MaterialCommunityIcons
}from '@expo/vector-icons'



async function cleanup() {
  try {
    const result = await AsyncStorage.removeItem('@storage_key')
   
  }
  catch(e) {
    console.log(e.message)
  }
}




class DeckList  extends Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: 'DeckList',
      tabBarIcon: () => <
        MaterialCommunityIcons
          color='gray'
          name={'cards-playing-outline'} 
          size={34} 
        />
    }
  }
   
  
  componentDidMount() {
    
    const { dispatch, navigation } = this.props
   
    didFocusSubscription = navigation.addListener(
      'didFocus',
     () => dispatch(retrieveDecks())
    )
  } 
    render() {
      
      const { decks } = this.props
      const deckList = Object.entries(decks)
      
      console.log(deckList)
      
    
        return (
          <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}} >
           <View style={{marginTop: 60}} >
           <FlatList 
              data={Object.keys(decks)}
              renderItem={({item}) => (
                <Deck  
                 keyExtractor={item.key}
                 title={decks[item].title } 
                 cards={decks[item].questions.length}
                />
              )}
            />
           </View>
            
            
            
            
          
          
             
           
           
   
          </View>
        )
    }
}

function mapStateToProps(decks) {
    
   return decks

}

export default connect(mapStateToProps)(DeckList)