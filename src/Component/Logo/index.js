import * as React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image
  } from 'react-native';
import img from "../../Assets/logo.png"

const HomeScreen = ({ navigation }) => {
    return (
    <View style={styles.sectionContainer}>
        <Image style={{marginTop:-20,height:200, width:390,resizeMode: 'contain'}} source={img}></Image>
      </View>
    );
  };

  const styles = StyleSheet.create({
    
  });

export default HomeScreen;