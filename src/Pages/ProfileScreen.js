import * as React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button
} from 'react-native';

const ProfileScreen = ({navigation}) => {

    return ( 
    <View style = {styles.sectionContainer}>
     <Text> Profile Screen </Text> 
     <Button title = "Go to Jane's profile"
      onPress = {() => navigation.navigate('HomeScreen', {name: 'Jane'})}/>
    </View>
    );
}


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



export default ProfileScreen;