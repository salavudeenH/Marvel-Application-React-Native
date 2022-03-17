import React, {
  useState,
  useEffect
} from 'react';
import styled from 'styled-components/native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Logo from "../Component/Logo/index"
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
const HomeScreen = ({
    navigation
  }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorPasswords, setErrorPasswords] = useState(false);
    useEffect(() => {
      if (username.length > 3) {
        setError(false)
      }
      if (password.length > 8) {
        setErrorPasswords(false)
      }
    }, [username, password])
    const onSubmit = () => {
      if (username.length < 3) {
        setError(true)
      }
      if (password.length < 6) {
        setErrorPasswords(true)
      } else {
        axios.post('https://easy-login-api.herokuapp.com/users/login', {
          username: username,
          password: password
        }).then(async (response) => {
          console.log(response);
          const token = response.headers["x-access-token"];
          await AsyncStorage.setItem('token', token)
          if (token) {
            navigation.navigate('Characters')
          }
        })
      }
    }

    return ( 
      <View style = {styles.view}>
        <Logo/>
        <Text style = {
          styles.title
        }> Bonjour Sala! </Text> 
        
        <TextInput style = {
          styles.input
        }
        onChangeText = {
          (text) => setUsername(text)
        }
        value = {
          username
        }
        required = "true"
        placeholder = "Votre adresse mail"/> 
        {error &&
        <Title> Entrez plus de 3 caractères </Title> } 
        <TextInput
          style = {
            styles.input
          }
          onChangeText = {
            (text) => setPassword(text)
          }
          value = {
            password
          }
          required = "true"
          placeholder = "Mot de passe"
          secureTextEntry = {
            true
          }
          /> 
          {errorPasswords &&
        <Title> Entrez plus de 6 caractères </Title>} 
        <View style = {styles.buttonView}>
         <TouchableOpacity style = {styles.button}> 
         <Text onPress = {onSubmit} style = {styles.buttonText}> Se Connecter </Text>
         </TouchableOpacity >
        </View> 
        </View>
          );
        };


 const Title = styled.Text `
  color:red
  fontSize:16
  textAlign:center
  `


const styles = StyleSheet.create({
          title: {
            color: "B8BFC2",
            fontSize: 30,
            fontWeight: "500",
            textAlign: "center",
          },
          input: {
            height: 50,
            margin: 12,
            borderWidth: 2,
            padding: 10,
            borderColor: 'white',
            backgroundColor: 'white',
            borderRadius: 10,
            fontSize: 17,
            placeholder: "Entrez votre nom",

          },
          buttonView: {
            alignItems: 'center',
          },
          button: {
            height: 50,
            width: 200,
            marginTop: 20,
            borderRadius: 5,
            backgroundColor: '#F05048',
            justifyContent: 'center',

          },
          buttonText: {
            textAlign: "center",
            fontSize: 20,
            color: "white",
            fontWeight: "bold",
          }
        });



        export default HomeScreen;