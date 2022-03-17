import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
  import Setting from "../../Pages/settings"
  import ProfileScreen from "../../Pages/ProfileScreen"
  import Login from "../../Pages/Login"
  import DetailsScreen from "../../Pages/Details"
  import CharactersScreen from "../../Pages/Characters";

   

  const CharactersStack = () => {
        const Stack = createNativeStackNavigator();
      return(
             <Stack.Navigator>
              <Stack.Screen name="Characters"  options={{headerShown: false}} component={CharactersScreen}/>
              <Stack.Screen name="Details" component={DetailsScreen}/>
            </Stack.Navigator>
      )
  }
  export default CharactersStack;