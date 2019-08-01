import React from 'react'
import { AsyncStorage,
         Text,
         View
       } from 'react-native'

import { addCard } from '../utils/api'



class Card extends React.Component {
    state = {
        item: ''
    }



   

    render() {
        
        
        return(
          <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
           <Text style={{fontSize: 20}}>Card</Text>
             
        
          </View>
        )
    }
}


//outline
// recuperar Item do AsyncStorage (getItem)
// localizar baralho e adicionar questoes ao array
// atualizar baralho

// const item = await AsyncStorage.getItem('@storage_key')

export default Card