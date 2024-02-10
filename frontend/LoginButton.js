import React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, TouchableHighlight, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';


const LoginButton = ({ displayText, IconURI, clickHandler }) => {
    
    const [loaded] = useFonts({
        'lexend': require('./assets/Fonts/Lexend/static/Lexend-Light.ttf'),
    });
    
    if (!loaded) {
        return null;
    }

    return (
        <TouchableHighlight underlayColor='rgba(20,20,20,0.25)' style={styles.buttonContainer} onPress={clickHandler}>
            <View style={styles.textWrapper} >
                <Text style={styles.button}>{displayText}</Text>
                <Image style={styles.iconStyle} source={IconURI} />
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 15,
        borderWidth: 0.9,
        borderColor: '#ccc',
        padding: 10,
        //Its for IOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: .2,

        // its for android 
        elevation: 10,
        position: 'relative',

        width: '65%',
        alignContent: 'center',
        marginTop: 50,
        backgroundColor: '#fff',
    },
    button: {
        paddingLeft: 40,
        padding: 20,
        fontSize: 30,
        fontFamily: 'lexend',
    },
    textWrapper: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    iconStyle: {
        right: 10,
        top: 0,
        height: 40,
        width: 40 
    }
});

export default LoginButton;