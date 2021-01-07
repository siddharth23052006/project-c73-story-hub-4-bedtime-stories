import React from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {Header} from 'react-native-elements';
import db from '../Config';

export default class ReadStoryScreen extends React.Component{
  constructor(){
    super();
    this.state = {
      storiesInDB:[],
      search:'',
      searchResults:[]
    }
  }

  retrieveStories = async()=>{
    var allStories = db.collection("stories").where("Title", "!=", "").get();
    var allStoriesData = allStories.data();
    console.log(allStoriesData);
    this.setState({storiesInDB:allStoriesData});
  }

  searchFilter = async(searchInput)=>{
    console.log("Search Filter function is called")
    if (searchInput!=''){
      var results = this.state.storiesInDB.where("Title","==", searchInput).get();
      var resultsData = results.data()
      this.setState({searchResults:resultsData});
    }
    else{
      this.setState({searchResults:this.state.storiesInDB});
    }
  }

  componentDidMount(){
    this.retrieveStories;
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
        <View style = {{alignItems:'center'}}>
          <TextInput
            style = {styles.searchText}
            placeholder = "Search for a story title"
            onChangeText = {search=>{
              this.searchFilter(search);
              this.setState({search:search});
              console.log(this.state.search);
            }}
            value = {this.state.search}/>
          <ScrollView>
            {this.state.searchResults}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchText:{
    height:35,
    width:'70%',
    borderWidth:1.5,
    alignSelf:'center',
    borderWidth:1.5,
    fontSize:20,
    backgroundColor:'#FFF',
    margin:20
  }
});