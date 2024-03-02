import React from 'react';
import { View, Image, Text, StyleSheet, TouchableHighlight } from 'react-native';
import logo from './assets/logo.png';
import logout from './assets/icons8-logout-96.png';
import account from './assets/icons8-account-96.png';

const Header = () => {
    return (
        <View style={[styles.header, { height: '17%' }]}>
            <TouchableHighlight style={{ borderRadius: 5, }} underlayColor='rgba(20,20,20,0.05)' onPress={() => { /* Handle left press */ }}>
                <View style={styles.leftContent}>
                    <Image source={logout} style={styles.sideImage} />
                    <Text style={styles.sideText}>Go Back</Text>
                </View>
            </TouchableHighlight>

            <Image source={logo} style={styles.logoImage} />

            <TouchableHighlight style={{ borderRadius: 5, }} underlayColor='rgba(20,20,20,0.05)' onPress={() => { /* Handle right press */ }}>
                <View style={styles.rightContent}>
                    <Image source={account} style={styles.sideImage} />
                    <Text style={styles.sideText}>Username</Text>
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
        width: 50,
        height: 50,
        alignSelf: 'center',
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
