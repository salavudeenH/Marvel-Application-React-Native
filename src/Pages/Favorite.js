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
import readFavorite from '../utils/readFavorite'

const Details = ({navigation,route}) => {
  const [fav, setFav] = useState({});
//   useEffect(() => {
//     const data = readFavorite();
//     console.log(data)
//     setFav(data)
//   })

  return ( 
  <View style = {styles.sectionContainer}> 
      <Text> Favorite </Text> 
      {/* {fav.map((item) => <View><Text>{item.id}</Text></View>)} */}
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