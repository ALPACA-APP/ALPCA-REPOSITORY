import React, { useState, useEffect} from "react";
import { View, Image, Text, StyleSheet, TouchableHighlight } from 'react-native';
import logo from './assets/logo.png';
import logout from './assets/icons8-logout-96.png';
import account from './assets/icons8-account-96.png';
import leftArrow from './assets/icons8-left-arrow-100.png';
import { CONSTANTS } from './global.js';

const apiUrl = CONSTANTS.API_URL; 


const Header = ({ isLogout = "true", 
onGoBack = () => { 

    navigation.reset({
        index: 0,
        routes: [{ name: 'MainView' }],
    });

}, userObject, navigation }) => 

{

    const onGoBackDelete = async() => {
        try {
            console.log('Deleting user with uuid: ' + userObject.uuid);
            await fetch(apiUrl + 'DeleteUser/' + userObject.uuid, {
                method: 'DELETE',
            });

            navigation.reset({
                index: 0,
                routes: [{ name: 'MainView' }],
            });
        }catch (error) {
            console.error(error);
        }
    }

    const [pressedLogout, setPressedLogout] = useState(false);
    const [pressedAccount, setPressedAccount] = useState(false);
    
    
    return (
        <>
        { pressedLogout &&
        <TouchableHighlight style = {styles.darkBackground}  underlayColor='rgba(0,0,0,0.6)' onPress={()=>{setPressedLogout(false)}}>
            <View style = {styles.confirmBox}>
                <Text style = {styles.logoutText}>Are you sure you want to log out?</Text> 
                <View style = {styles.buttonsWrapper}>
                    <TouchableHighlight style={styles.confirmButton} onPress={() => { onGoBack()}}>
                        <Text style={styles.confirmText}>Yes, Log Me Out</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.cancelButton} onPress={() => { setPressedLogout(false) }}>
                        <Text style={styles.cancelText}>Nah, Just Kidding</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </TouchableHighlight>
        }
            <View style={styles.header}>
                { isLogout === "true" &&
                <TouchableHighlight style={{ borderRadius: 5, }} underlayColor='rgba(20,20,20,0.05)' onPress={() => { setPressedLogout(true); }}>
                    <View style={styles.leftContent}>
                        <Image source={isLogout === "true" ? logout : leftArrow} style={styles.sideImage} />
                        <Text style={styles.sideText}>Go Back</Text>
                    </View>
                </TouchableHighlight>
                }
                { isLogout != "true" &&
                <TouchableHighlight style={{ borderRadius: 5, }} underlayColor='rgba(20,20,20,0.05)' onPress={() => { onGoBack() }}>
                    <View style={styles.leftContent}>
                        <Image source={leftArrow} style={styles.sideImage} />
                        <Text style={styles.sideText}>Go Back</Text>
                    </View>
                </TouchableHighlight>
                }            

                <Image source={logo} style={styles.logoImage} />

                <TouchableHighlight style={{ borderRadius: 5, }} underlayColor='rgba(20,20,20,0.05)' onPress={() => { setPressedAccount(true) }}>
                    <View style={styles.rightContent}>
                        <Image source={account} style={styles.sideImage} />
                        <Text style={styles.sideText}>{userObject.username}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        { pressedAccount &&
        <TouchableHighlight style = {styles.darkBackground}  underlayColor='rgba(0,0,0,0.6)' onPress={()=>{setPressedAccount(false)}}>
            <View style = {styles.confirmBox}>
                <Text style = {styles.logoutText}>Are you sure you want to DELETE this Account?</Text> 
                <View style = {styles.buttonsWrapper}>
                    <TouchableHighlight style={styles.confirmButton} onPress={() => { onGoBackDelete()}}>
                        <Text style={styles.confirmText}>Yes, delete it</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.cancelButton} onPress={() => { setPressedAccount(false) }}>
                        <Text style={styles.cancelText}>Nah, Just Kidding</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </TouchableHighlight>
        }
        </>
    );
};


const styles = StyleSheet.create({

    darkBackground: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 20,
    },
    confirmBox: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        paddingBottom: 30,
        paddingTop: 30,
        width: '80%',
        position: 'absolute',
        zIndex: 30,
    },
    logoutText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonsWrapper: {
        marginTop: 20,
        flexDirection: 'column',
    },
    confirmButton: {
        color: '#000',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        borderColor: 'black',
        borderWidth: 1,
        width: '70%',
        alignItems: 'center',
    },
    confirmText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    cancelButton: {
        backgroundColor: 'black',
        color: '#fff',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 10,
        width: '70%',
        alignItems: 'center',
    },
    cancelText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },

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
