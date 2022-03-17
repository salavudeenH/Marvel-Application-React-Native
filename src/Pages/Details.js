import React,{useEffect,useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  FlatList
} from 'react-native';
import axios from "axios"
import Card from '../Component/Card/index'

const Details = ({navigation,route}) => {
  const [post, setPost] = useState([]);
  const {id} = route.params;
  console.log("hello"+ {id});

  useEffect(() => {
    axios.get(`https://gateway.marvel.com/v1/public/characters/${id}`,{
      params:{
      id,
      apikey:"0f62e5d6031cadf4f88f8b00b9cbfe62",
      hash:"c6316f2c89634b3c0b817cbb6f7f2ef0",
      ts:1,
      limit:10,
      }
    })
    .then((response) => {
    console.log(response.data.data.results)
    setPost(response.data.data.results);
  })
  })

  return ( 
  <View style = {styles.sectionContainer}> 
      <Text> Details </Text> 
      <FlatList
            data={post}
            keyExtractor={(item) => item.id}
            renderItem={({item})=>(
          <Card title={item.name}/>
        )} />
      </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});



export default Details;