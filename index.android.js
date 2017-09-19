/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import SplashScreen from 'react-native-smart-splash-screen';


export default class animaltune1 extends Component {

  

  componentDidMount () {
     //SplashScreen.close(SplashScreen.animationType.scale, 850, 500)
     SplashScreen.close({
        animationType: SplashScreen.animationType.scale,
        duration: 850,
        delay: 500,
     })
 }
  
    render() {
    return (

      <ScrollView >
        <View>
          <View>
           <Button title="king kong"  onClick={}>
            <Image src="./jj.png"/>
            <Text> hello there</Text>
           </Button>
          </View>
        </View>
      </ScrollView>
     
   /* <View style={styles.container}> 
      <Text style={styles.welcome}> 
        Welcome to React Native! 
        </Text>
         <Text style={styles.instructions}> 
           To get started, edit index.android.js
        </Text> 
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'} Shake or press menu button for dev menu
       </Text>
   </View> */
   
    );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('animaltune1', () => animaltune1);
