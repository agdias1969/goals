import React, {Component} from 'react'
import { AsyncStorage,
         FlatList,
         ListItem,
         SafeAreaView,
         StyleSheet,  
         Text,
         TouchableOpacity, 
         View } from 'react-native'

         
import { connect } from 'react-redux'
import  { retrieveDecks, _retriveDecks, _retrieveDecks } from '../assets/actions'
import NoDeck from './NoDeck'
import DeckButton from './DeckButton'
import {
  Entypo,
  MaterialCommunityIcons
}from '@expo/vector-icons'
import { ContainerTypes } from 'expo-contacts';




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
      title: 'Deck Pool',
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
      const { navigate } = this.props.navigation
     
    
     
      
        return (
          <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}} >
           
            <View style={{flex:1}}>
              <FlatList
                data={Object.values(decks)}
                renderItem={({item}) => (
                  <View>
                    <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('Deck',{
                      title: item.title
                      
                    })}
                    key={item.title}
                     style={styles.deck}
                    >
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.cards}>{item.questions.length} cards</Text>
                    </TouchableOpacity>
                  </View>
                  
                )}
              
              />
            </View>
           
             
               
              

              
             
           
          
          
          </View>
        )
    }
}


const styles = StyleSheet.create({
  deck: {
    
    maxWidth: '100%',
    width: 400,
    borderWidth: 1,
    borderTopColor: '#f2f2f2',
    borderLeftColor: '#f2f2f2',
    borderRightColor: '#737373',
    borderBottomColor: '#8c8c8c',
    backgroundColor: '#f7f7f7',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    color: '#444',
    textAlign: 'center',
    padding: 5
  },
  cards: {
    fontSize: 15,
    color: '#444',
    textAlign: 'center',
    padding: 5
  }
  
})
function mapStateToProps(decks) {
    
   return decks

}

export default connect(mapStateToProps)(DeckList)