import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AsyncStorage,View, Text, TextInput,TouchableOpacity } from 'react-native'
import * as Font from 'expo-font'
import { StyleSheet } from 'react-native';
import { retrieveDecks } from '../assets/actions';
import { addDeck  } from '../assets/actions'
import { createDeck } from '../utils/api'
import { MaterialCommunityIcons } from '@expo/vector-icons'



//StyleSheet.setStyleAttributePreprocessor('fontFamily', Font.processFontFamily)



class AddDeck extends Component {
state = {
    text:''
}

static navigationOptions = ({navigation}) => {
  return {
    title: 'Add Deck',
    tabBarIcon: () => <
        MaterialCommunityIcons
        color='gray'
        name={'plus-circle-outline'} 
        size={30} 
      />
  }
}

componentDidMount() {
  const { dispatch, navigation } = this.props
  didFocusSubscription = navigation.addListener(
    'didFocus',
   () => this.setState({text:''})
  )
}

  handleChange = text => {
      this.setState({text:text})
  
  }

  onButtonPress = () => {
      const { navigate } = this.props.navigation
    const deckTitle = this.state.text
  
    createDeck(deckTitle)
    navigate('DeckList') 
  }
    

    render() {
       
        return (
           
            <View style={{flex:1, textAlign: 'center',alignItems: 'center', justifyContent: 'center'}}>
                <Text  style={{
                          fontSize: 30,
                          color: '#5d5d5d',
                          
                          
                         
                          textAlign: 'center'
                          
                        }}>
                            What is the title of your new deck?
                </Text>
                <TextInput
                  
                  value={this.state.text}
                  onChangeText = {(text) => this.setState({text:text})}
                  style={{ width: '90%',borderColor: '#CCCCCC',
                 
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                  height: 50,
                  fontSize: 25,
                  marginTop: 40,
                  paddingLeft: 20,
                  paddingRight: 20}}
                  placeholder='Deck Title'
                 />

                 <TouchableOpacity 
                   style={{
                     marginTop: 30,
                     width: 200,
                     padding: 10,
                     borderRadius: 5,
                     backgroundColor: '#6e6e6e', 
                     color: '#fff',
                     borderradius: 5,
                   }}
                   onPress={this.onButtonPress}   
                   
                >

                     <Text style={{textAlign: 'center', fontSize: 20,color: '#FFF'}}>Submit</Text>
                 </TouchableOpacity>
                


             
            </View>
            
        )
    }
}



const styles = StyleSheet.create({
    inputContainer: {
        paddingTop: 15
      },
      textInput: {
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 50,
        fontSize: 25,
        paddingLeft: 20,
        paddingRight: 20
      }
})

function mapStateToProps(state) {
    return { decks: state.decks }
}

export default  connect(mapStateToProps)(AddDeck)