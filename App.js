import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { StyleSheet,SafeAreaView } from 'react-native'
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import thunk from 'redux-thunk'
import rootReducer from './assets/reducers'
import  DeckList  from './components/DeckList'
import Deck from './components/Deck'
import AddDeck from    './components/AddDeck'
import Card from './components/Card'


//createStackNavigator(RouteConfigs, StackNavigatorConfig)

const DeckStack = createStackNavigator(
  {
    DeckList: DeckList,
    Deck: Deck,
    Card: Card,
   
    AddDeck: AddDeck
  }
)

const Navigation = createAppContainer(DeckStack)

const TabNavigation = createBottomTabNavigator(
  {
    DeckList: {screen: DeckStack},
    AddDeck:  {screen: AddDeck  }
  }
)

const AppNavigator = createAppContainer(TabNavigation)


export default class App extends React.Component  {

 


 
    
  render() {
    
    return (
      <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
        <SafeAreaView style={styles.safeArea}>
          <AppNavigator /> 
        </SafeAreaView>
       
      </Provider>
     
        
           

    )
  }
}
const styles = StyleSheet.create({
  safeArea: {
    flex:1,
    backgroundColor: '#fff'
  }
})




