import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { AsyncStorage, StyleSheet, StatusBar, Text, View } from 'react-native'
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import thunk from 'redux-thunk'
import rootReducer from './assets/reducers'
import  DeckList  from './components/DeckList'
import AddDeck from    './components/AddDeck'



//createStackNavigator(RouteConfigs, StackNavigatorConfig)

const DeckStack = createStackNavigator(
  {
    DeckList: DeckList,
    AddDeck: AddDeck
  }
)

const Navigation = createAppContainer(DeckStack)

const TabNavigation = createBottomTabNavigator(
  {
    DeckList: {screen: DeckList},
    AddDeck: {screen: AddDeck }
  }
)

const AppNavigator = createAppContainer(TabNavigation)


export default class App extends React.Component  {

 


 
    
  render() {
    
    return (
      <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
        < StatusBar 
          backgroundColor="blue"
          barStyle="light-content"
          translucent
        />
         <AppNavigator /> 
      </Provider>
     
        
           

    )
  }
}




