import React from 'react'
import { StyleSheet,
         TouchableOpacity } from 'react-native'

export function SubmitButton(props) {
    return (
        <TouchableOpacity 
          onPress={props.onPress}
          style={styles.submitbtn}
        >

        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
  submitbtn: {
      backgroundColor: '#4c4c4c',
      color: '#fff',
      padding: 2px;


      
  }
})