import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from './screens/searchScreen';
import BookScreen from './screens/bookScreen';
import {createAppContainer} from 'react-navigation-tabs';
import {createBottonTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <AppContainer></AppContainer>
      </View>
    );
  }
}

const TabNavigator = createBottonTabNavigator({
  Book:{screen:BookScreen},
  Search:{screen:SearchScreen},
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
