import React from 'react';
import { View, Image, Text, StyleSheet, TouchableHighlight } from 'react-native';
import logo from './assets/logo.png';
import logout from './assets/icons8-logout-96.png';
import account from './assets/icons8-account-96.png';
import leftArrow from './assets/icons8-left-arrow-100.png';


const Header = ({ isLogout = "true", onGoBack = () => { 
    
    navigation.reset({
        index: 0,
        routes: [{ name: 'MainView' }],
      });

}, userObject, navigation }) => {
    
    return (
        <View style={styles.header}>
            <TouchableHighlight style={{ borderRadius: 5, }} underlayColor='rgba(20,20,20,0.05)' onPress={() => { onGoBack(); }}>
                <View style={styles.leftContent}>
                    <Image source={isLogout === "true" ? logout : leftArrow} style={styles.sideImage} />
                    <Text style={styles.sideText}>Go Back</Text>
                </View>
            </TouchableHighlight>

            <Image source={logo} style={styles.logoImage} />

            <TouchableHighlight style={{ borderRadius: 5, }} underlayColor='rgba(20,20,20,0.05)' onPress={() => { /* Handle right press */ }}>
                <View style={styles.rightContent}>
                    <Image source={account} style={styles.sideImage} />
                    <Text style={styles.sideText}>{userObject.username}</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
};


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30, // Adjust padding as needed
        paddingTop: 20,
        backgroundColor: 'transparent',
        borderColor: '#EBEBEB',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        marginTop: 20,
        height: '14%'
    },
    leftContent: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    rightContent: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    sideImage: {
        width: 40,
        height: 40,
        alignSelf: 'center',
        tintColor: '#000000',
    },
    sideText: {
        fontSize: 16,
        textAlign: 'center',
        backgroundColor: 'transparent',
        fontFamily: 'lexend-bold',
    },
    logoImage: {
        width: 80,
        height: 80,
        marginBottom: 20, // Adjust spacing
    }
});

export default Header;
