import React,{useEffect,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from "../../Pages/Login";
import ProfileScreen from "../../Pages/ProfileScreen";
import CharactersScreen from "./CharactersStack";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from "./HomeStack"
import AsyncStorage from '@react-native-async-storage/async-storage';

const CharactersTab = () => {
    const Tab = createBottomTabNavigator();
    const [token,setToken] = useState("");

    const getStorageValue = async () => {
      let token = await AsyncStorage.getItem('token')
      return token
    }
  
      useEffect(() => {
        getStorageValue().then(res => {
          setToken(res)
        });})


return (
<NavigationContainer>

<Tab.Navigator>
<Tab.Screen name="Characters" options={{}} component={CharactersScreen} />
</Tab.Navigator>
</NavigationContainer>
);
}
    const styles = StyleSheet.create({
        view:{
          backgroundColor:"red"
        },
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

export default CharactersTab;