import React from 'react'
import { AsyncStorage,
         Text,
         View
       } from 'react-native'
import { parse } from 'qs';


class Card extends React.Component {
    render() {
        const item = fetchItem()
        console.log('Card',fetchItem())
        return(
          <View>
           <Text>Card</Text>
             
        
          </View>
        )
    }
}

const fetchItem = async() => {
    const item = await AsyncStorage.getItem('@storage_key')
    console.log(JSON.parse(item))
}
//outline
// recuperar Item do AsyncStorage (getItem)
// localizar baralho e adicionar questoes ao array
// atualizar baralho

// const item = await AsyncStorage.getItem('@storage_key')

export default Card