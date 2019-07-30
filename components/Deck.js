import React, { Component } from 'react'

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native'


export default class Deck extends Component  {
    render() {
        const { title, cards } = this.props
        return (
            <View style={styles.deck}>
              <TouchableOpacity 
                
              >
                  <Text style={{
                      textAlign: 'center',
                      color: 'white',
                      fontSize: 30,
                  }}>
                      {title}
                  </Text>
                  <Text style={{
                      textAlign: 'center',
                      color: 'white',
                      fontSize: 20, }}
                    
                  >
                     {`${cards} cards`}
                  </Text>
      
              </TouchableOpacity>
          </View>
        )
    }
   
}

const styles = StyleSheet.create({
    deck: {
        
        width: 315,
        marginBottom: 20,
        backgroundColor: '#777',
        textAlign: 'center',
        padding: 5
      
    }
})