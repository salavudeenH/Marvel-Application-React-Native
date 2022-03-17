import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
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
  import Routes from "./index";

  
  const HomeStack = () => {
        const Stack = createNativeStackNavigator();
      return(
        <NavigationContainer>
             <Stack.Navigator>
              <Stack.Screen name="Login" options={{
                // headerShown: false
                gestureEnabled: false
              }}component={Login}/>
             <Stack.Screen name="Characters"  options={{headerShown: false, gestureEnabled: false}} component={Routes} />
            </Stack.Navigator>
            </NavigationContainer>
      )
  }

  export default HomeStack;