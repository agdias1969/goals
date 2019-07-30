import React, { Component } from 'react'
import { Text, View} from 'react-native'

class NoDeck extends React.Component {
    render() {
        return (
          <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text> Empty Deck Pool, ok? </Text>
          </View>
        )
    }
}

export default NoDeck