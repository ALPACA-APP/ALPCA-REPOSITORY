import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Checkmark from './assets/icons8-checkmark-100.png';
import InsetShadow from 'react-native-inset-shadow';
import Loader from './assets/SpinLoader.gif';
import Header from './Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CONSTANTS } from './global.js';

const UserSettings = ({navigation}) => {

    const apiUrl = CONSTANTS.API_URL;
    const updateUserSettingsEndpoint = 'updateUserSettings/';
    const getUserEndpoint = 'getUser/';


    const [autoDeleteExpired, setAutoDeleteExpired] = useState(true);
    const [notifications, setNotifications] = useState(false);
    const [fontSize, setFontSize] = useState(0);
    const [language, setLanguage] = useState(0);
    const [colorBlind, setColorBlind] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [uuid, setUuid] = useState(''); // This should be set to the user's uuid when the user logs in
    const [userObject, setUserObject] = useState('');


    const openPicker = () => {
        setPickerVisible(true);
    };

    const closePicker = () => {
        setPickerVisible(false);
    };

    const handleLanguageSelect = (value) => {
        setLanguage(value);
    };

    const languages = [
        { label: 'English', value: 0 },
        { label: 'Spanish', value: 1 },
        { label: 'Portuguese', value: 2 },
    ];


    const updateUserSettings = async () => {
        // currently this method gets called on every change of a setting.
        // This is not ideal, as it will make a lot of requests to the server.
        // It would be better to only call this method when the user leaves the settings page.
        // This can be done by using the useEffect hook to call this method when the component unmounts.
        // But i am not sure how to do that in react native yet.

        if (colorBlind === null || fontSize === null || language === null) {
            console.log('One or more settings are null, not updating');
            return;
        }

        // convert string numbers to integers
        const colorBlindInt = parseInt(colorBlind);
        const fontSizeInt = parseInt(fontSize);
        const languageInt = parseInt(language);

        const newUser = {
            uuid: userObject.uuid,
            username: userObject.username,
            pasword_hash: userObject.pasword_hash,
            notifications: notifications,
            autoDelete: autoDeleteExpired,
            colourBlind: colorBlindInt,
            fontSize: fontSizeInt,
            language: languageInt,
        }
        const userString = JSON.stringify(newUser);
        AsyncStorage.setItem('user', userString);

        const response = await fetch(apiUrl + updateUserSettingsEndpoint,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    uuid: uuid,
                    notifications: notifications,
                    autoDelete: autoDeleteExpired,
                    colourBlind: colorBlindInt,
                    fontSize: fontSizeInt,
                    language: languageInt,
                }),
            });

    };

    const LoadSettings = async (uuid) => {
        setIsLoading(true);
        console.log('Loading settings');

        try {
            const response = await fetch(apiUrl + getUserEndpoint + uuid);
            const data = await response.json();
            // console.log(data);

            // Assuming data is an array with a single object
            const userData = data[0];

            setNotifications(userData.notifications);
            setAutoDeleteExpired(userData.autoDelete);
            setColorBlind("" + userData.colourBlind);
            setFontSize("" + userData.fontSize);
            setLanguage("" + userData.language);

        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    loadUserUuid = async () => {
        try {
            const userStoredString = await AsyncStorage.getItem('user');
            const userStored = JSON.parse(userStoredString);
            if (userStored !== null) {
                setUuid(""+userStored.uuid);
            }
            setUserObject(userStored);
            LoadSettings(userStored.uuid);
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        loadUserUuid();
    }, []);


    if (isLoading) {
        return (
            <View style={styles.container}>
                <Header userObject={userObject} navigation={navigation} />
                <Image source={Loader} style={{ width: 40, height: 40, alignSelf: 'center', marginTop: '50%' }} />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header userObject={userObject} navigation={navigation}  />

            <View style={styles.content}>

                <View style={styles.checkBoxInputContainer}>
                    <Text style={styles.settingLabel}>Notifications</Text>
                    <TouchableOpacity onPress={() => { setNotifications(!notifications); updateUserSettings(); }}>
                        <View style={styles.toggle}>
                            {notifications && <Image source={Checkmark} style={styles.toggleInner} />}
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={styles.checkBoxInputContainer}>
                    <Text style={styles.settingLabel}>Auto Delete Expired</Text>
                    <TouchableOpacity onPress={() => { setAutoDeleteExpired(!autoDeleteExpired); updateUserSettings(); }}>
                        <View style={styles.toggle}>
                            {autoDeleteExpired && <Image source={Checkmark} style={styles.toggleInner} />}
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={styles.settingItem}>
                    <Text style={styles.settingLabel}>Color Blindness</Text>
                    <InsetShadow containerStyle={styles.picker} shadowRadius={4} shadowOpacity={0.4}>
                        <RNPickerSelect
                            style={pickerSelectStyles}
                            placeholder={{}}
                            value={colorBlind}
                            onValueChange={(value, index) => { setColorBlind(value); updateUserSettings(); }}
                            items={[
                                { label: 'Default', value: '0' },
                                { label: 'Deuteranopia', value: '1' },
                                { label: 'Tritanopia', value: '2' },
                            ]}
                        />
                    </InsetShadow>
                </View>


                <View style={styles.settingItem}>
                    <Text style={styles.settingLabel}>Font Size</Text>
                    <InsetShadow containerStyle={styles.picker} shadowRadius={4} shadowOpacity={0.4}>
                        <RNPickerSelect
                            style={pickerSelectStyles}
                            placeholder={{}}
                            value={fontSize}
                            onValueChange={(value, index) => { setFontSize(value); updateUserSettings(); }}
                            items={[
                                { label: 'Small', value: '0' },
                                { label: 'Medium', value: '1' },
                                { label: 'Large', value: '2' },
                            ]}
                        />
                    </InsetShadow>
                </View>

                <View style={styles.settingItem}>
                    <Text style={styles.settingLabel}>Language</Text>
                    <InsetShadow containerStyle={styles.picker} shadowRadius={4} shadowOpacity={0.4}>
                        <RNPickerSelect
                            style={pickerSelectStyles}
                            placeholder={{}}
                            value={language}
                            onValueChange={(value) => { setLanguage(value); updateUserSettings(); }}
                            items={[
                                { label: 'English', value: '0' },
                                { label: 'Spanish', value: '1' },
                                { label: 'Portuguese', value: '2' },
                            ]}
                        />
                    </InsetShadow>
                </View>

            </View>
        </SafeAreaView>
    );
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: '10%',
        flex: 1,
    },
    checkBoxInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    settingItem: {
        flexDirection: 'column',
        width: '100%',
        marginBottom: 10,
    },
    settingLabel: {
        marginBottom: 5,
        fontSize: 16,
        fontFamily: 'lexend-bold',
    },
    toggle: {
        width: 40,
        height: 40,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    toggleInner: {
        width: 30,
        height: 30,
    },
    picker: {
        backgroundColor: 'transparent',
        borderRadius: 30,
        borderColor: '#9992',
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderWidth: 1,
        fontFamily: "lexend-regular",
        width: '100%',
        height: 'auto',
    },
    touchableText: {
        fontSize: 20,
        textAlign: 'center', // Center the text horizontally
        flex: 1, // Take up all available space
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        textAlignVertical: 'center', // Center vertically
        fontFamily: "lexend-bold",
    },
    loader: {
        width: 50,
        height: 50,
    },
    loaderWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },

});

export default UserSettings;