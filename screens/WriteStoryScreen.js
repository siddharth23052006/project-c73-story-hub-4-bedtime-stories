import React from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import db from '../Config';
import firebase from 'firebase';

export default class WriteStorySceen extends React.Component{
  constructor(){
    super();
    this.state = {
      title:'',
      authorName:'',
      story:''
    }
  }

  submitStory = async()=>{
    /*db.collection("stories").doc("story-1").get()
    .then((doc)=>{
      console.log(doc.data());
    });*/
    db.collection("stories").add({
      Title: this.state.title,
      AuthorName: this.state.authorName,
      Story: this.state.story
    });
    
  }

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
          onChangeText = {(text) => {this.setState({title:text})}}
          value = {this.state.title}
        />

        {/*Author of the story*/}
        <TextInput
          style = {styles.authorTitleInputStyle}
          placeholder = "Author name"
          onChangeText = {(text) => {this.setState({authorName:text})}}
          value = {this.state.authorName}
        />

        {/*The story text input*/}
        <TextInput
          style = {styles.storyInput}
          placeholder = "Write your story here"
          multiline = {true}
          onChangeText = {(text) => {this.setState({story:text})}}
          value = {this.state.story}
        />

        {/*Submit button*/}
        <TouchableOpacity
          style = {styles.submitStyle}
          onPress = {()=>{this.submitStory()}}>
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