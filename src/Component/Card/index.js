import * as React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TouchableOpacity
  } from 'react-native';

const Card = ({title,image,details,favorite}) => {
    // console.log(image)
    return (
    <View style={styles.Maincard}>
    <View style={styles.Card}>
    <TouchableOpacity onPress={details}>
        <Image style={{marginTop:-50,height:200, width:300,resizeMode:"cover", borderRadius:10}} source={{uri:image}}></Image>
        <View style={styles.TitleCard}>
        <Text style={styles.Text}>{title}</Text>
        </View>
        <TouchableOpacity><Text style={styles.fav} onPress={favorite}>♥</Text></TouchableOpacity>
        </TouchableOpacity>
      </View>
      
      </View>
    );
  };

  const styles = StyleSheet.create({
    Maincard:{
        alignItems:"center",
        justifyContent:"center",
    },
    Card: {
        backgroundColor:"black",
        height:300,
        width:300,
        alignItems:"center",
        borderRadius:10,
        justifyContent:"center",
        marginBottom:40
    },
    Text:{
        color:'white',
        fontSize:25,
        paddingTop:20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    fav:{
      color:"white",
      fontSize:30,
      paddingBottom:20,
      textAlign:'right',
      paddingRight:20
    }
  });

export default Card;