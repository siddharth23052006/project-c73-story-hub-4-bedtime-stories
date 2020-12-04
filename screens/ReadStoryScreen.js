import React from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';

export default class ReadStoryScreen extends React.Component{
  render(){
    return(
      <View style = {{flex: 1, backgroundColor:'#FFEFEF'}}>
        <Header
          backgroundColor={'#FF0038'}
          centerComponent={{
            text:'Story Hub',
            style:{color:'#EEE', fontSize:20, fontWeight:'bold'}
          }}
        />
        <View style = {{alignItems:'center'}}>
          <Text style = {styles.readStoryText}>Read Story</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  readStoryText:{
    color:'#000',
    fontSize:18,
    fontWeight:'bold'
  }
});