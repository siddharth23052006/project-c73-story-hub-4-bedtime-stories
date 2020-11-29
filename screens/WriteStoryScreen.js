import React from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';

export default class WriteStorySceen extends React.Component{
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
        {/*Title of the story*/}
        <TextInput
          style = {styles.authorTitleInputStyle}
          placeholder = "Title of the Story"
        />

        {/*Author of the story*/}
        <TextInput
          style = {styles.authorTitleInputStyle}
          placeholder = "Author name"
        />

        {/*The story text input*/}
        <TextInput
          style = {styles.storyInput}
          placeholder = "Write your story here"
          multiline = {true}
        />

        {/*Submit button*/}
        <TouchableOpacity
          style = {styles.submitStyle}
          onPress = {()=>{}}>
          <Text style = {styles.submitTextStyle}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  submitStyle:{
    alignSelf:'center',
    width:100,
    height:30,
    borderRadius:15,
    backgroundColor:'#FF0038',
    borderColor:'#000',
    borderWidth:1,
    alignContent:'center',
    alignItems:'center',
    margin:30,
    justifyContent:'center'

  },
  submitTextStyle:{
    color:'#EEE',
    fontSize:18,
    fontWeight:'bold'
  },
  authorTitleInputStyle:{
    width:'70%',
    height:'5%',
    alignSelf:'center',
    borderWidth:1.5,
    fontSize:20,
    backgroundColor:'#FFF',
    margin:20,
    textAlign:'center',
  },
  storyInput:{
    width:'70%',
    height:'30%',
    alignSelf:'center',
    borderWidth:1.5,
    fontSize:20,
    backgroundColor:'#FFF',
    margin:20
  }
});