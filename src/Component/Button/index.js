import React from 'react';
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

const Button = ({prev,suivant}) => {
    return (
    <View style={styles.sectionContainer}>
        <TouchableOpacity style={styles.Button}><Text style={styles.buttonText} onPress={prev}>Précèdent</Text></TouchableOpacity>
        <TouchableOpacity style={styles.Button}><Text style={styles.buttonText} onPress={suivant}>Suivant</Text></TouchableOpacity>
      </View>
    );
  };

  const styles = StyleSheet.create({
    sectionContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight:10,
        paddingLeft:10,
        marginBottom:20
    },
    Button:{
        height:50,
        width:120,
        marginTop:20,
        borderRadius:5,
        backgroundColor: '#F05048',
        justifyContent: 'center',
        
      },
      buttonText:{
        textAlign:"center",
        fontSize:20,
        color:"white",
        fontWeight:"bold",      
      }
  });

export default Button;