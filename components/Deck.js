import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

class Deck extends Component {
 
  
    render() {
        const { navigation, decks } = this.props
        const { navigate } = navigation.navigate
        const title = navigation.getParam('title')
        
           
            return (
                <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                 <Text style={{fontSize: 40}}>{title}</Text>
                 <Text style={{fontSize: 20}}>{decks[title].questions.length} cards </Text>
                 <MyButton onPress={() => this.props.navigation.navigate('Card') } text='Add Card' bgColor='white' color='#555' />
                 <MyButton text='StartQuiz' bgColor='#555' color='#fff' />
                </View>
    
            )
        
      
       
    }
}
function MyButton(props) {
    return (
      <View style={{marginTop: 20}} >
        <TouchableOpacity 
            onPress={props.onPress}
            style={{padding: 20,  
                    
                    width: 250, 
                    backgroundColor: props.bgColor , 
                     
                    borderRadius: 8 ,
                    borderWidth: 0.5
                    
                    }} 
         > 
            <Text style={{textAlign: 'center',fontSize: 20, color: props.color}}>{ props.text }</Text>
        </TouchableOpacity>
      </View>
       
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: '300',
        padding: 5,
        borderRadius: 5,
        backgroundColor: 'white',
    }
})

const mapStateToProps = (decks) => (decks)



export default connect(mapStateToProps)(Deck)