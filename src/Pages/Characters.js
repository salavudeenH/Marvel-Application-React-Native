import React,{useEffect,useState} from 'react';
import styled from 'styled-components/native';
import Card from '../Component/Card/index';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    FlatList,
    Button
  } from 'react-native';
  import axios from 'axios'
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import NextButton from "../Component/Button/index"
  import readFavorite from '../utils/readFavorite'

const CharactersScreen = ({ navigation }) => {
    const [post, setPost] = useState([]);
    const [offset,setOffset] = useState(0);
    const [token,setToken] = useState("");
    

  const getStorageValue = async () => {
    let token = await AsyncStorage.getItem('token')
    return token
  }

    useEffect(() => {
      getStorageValue().then(res => {
        setToken(res)
      });
        axios.get(`https://gateway.marvel.com/v1/public/characters?`,{
          params:{
          apikey:"0f62e5d6031cadf4f88f8b00b9cbfe62",
          hash:"c6316f2c89634b3c0b817cbb6f7f2ef0",
          ts:1,
          limit:10,
          offset:offset
          }
        })
        .then((response) => {
            console.log(response.data.data.results)
            setPost(response.data.data.results);
        })
    },[offset])

    const prev = () => {
        if(offset != 0){
        setOffset(offset - 10);
        }
    }
    const suivant = () => {
        if(offset < 1560){
        setOffset(offset + 10);
        }
    }

    const addToFavorite = async item => {
      const formerFavorite = await readFavorite()

      const arrayOfFavorite = formerFavorite || []
      console.log("sala" + arrayOfFavorite)
      try {
        const jsonValue = JSON.stringify([
          ...arrayOfFavorite,
          { name: item.name, id: item.id }
        ])
        console.log(jsonValue)
        await AsyncStorage.setItem('favorite', jsonValue)
      } catch (e) {}
    }
  

    return (
    <View style={styles.sectionContainer}>
         <Text style={styles.title}>Marvel</Text>
        <NextButton prev={() => prev()} suivant={() => suivant()}></NextButton>
        <ScrollView>
        <FlatList
            data={post}
            keyExtractor={(item) => item.id}
            renderItem={({item})=>(
          <Card title={item.name} image={`https:${item.thumbnail.path.split(':')[1]}.${item.thumbnail.extension}`} details={() => navigation.navigate('Details', {id: item.id})} favorite={() => addToFavorite(item)}/>
            )} 
        />
        </ScrollView>
      </View>
    );
  };

  const Title = styled.Text`
  color:"black",
  fontSize:20
  `

  const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 5,
    },
    title:{
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom:10,
        color:"red"
    },
  });
  


export default CharactersScreen;