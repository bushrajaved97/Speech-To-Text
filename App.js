/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import Voice from 'react-native-voice';

export default class NVoice extends Component {

  constructor(){
    super();
    this.state = {
      results: []
    }
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
  } 

  onSpeechResults(e){
    this.setState({
      results:e.value
    })
  }

onSpeechStart(){
    Voice.start('en_US');
  }

  onSpeechEnd(){
    Voice.stop();
  }

  render() {
    return (
          <View style={styles.Content}>
            <Text style={styles.title}>React Native - Speech to Text</Text>
            <View style={styles.btn}>
              <TouchableOpacity onPress={this.onSpeechStart.bind()} style={styles.btnStyle}>
              <Text>Start</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.onSpeechEnd.bind()} style={styles.btnStyle}>
              <Text>Stop</Text>
              </TouchableOpacity>
              {this.state.results.map( (text,index) => {
                return(
                  <Text key={index}>{text}</Text>
                )
              })}
            </View>
          </View>
    );
  }
}


const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  Content:{
    flex:1,
    alignItems:'center',
    marginTop:30    
  },
  btn:{
    justifyContent:'center',
    flex:1
  },
  btnStyle:{
    padding:10,
    backgroundColor:'#cecece',
    marginBottom:10
  }
});

AppRegistry.registerComponent('NVoice', () => NVoice);


