import React, { useState, useRef } from 'react';
import {
  Text,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableHighlight,
  Animated,
  Image
} from 'react-native';
import RegisterStyles from './RegisterStyles';
import InsetShadow from 'react-native-inset-shadow';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passFocus, setPassFocus] = useState(false);
  const [confPassFocus, setConfPassFocus] = useState(false);
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [isConfPassVisible, setIsConfPassVisible] = useState(false);
  const inputAnimation = useRef(new Animated.Value(0)).current;
  const [error, setError] = useState(false);
  const [errorCode, setErrorCode] = useState(0);
  const [loading, setLoading] = useState(false);
  const [securePassIOs, setSecurePassIOs] = useState(false);
  const [secureConfPassIOs, setSecureConfPassIOs] = useState(false);
  const sha256 = require('js-sha256').sha256;

  const apiUrl = 'https://thoughtful-cod-sweatshirt.cyclic.app';
  //const apiUrl = 'http://127.0.0.1:3000';

  const dismissKeyboard = () => {
    Keyboard.dismiss();

    Animated.timing(inputAnimation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleFocus = () => {
    setPassFocus(true);
    setSecurePassIOs(true);
    Animated.timing(inputAnimation, {
      toValue: 0.5,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setPassFocus(false);
    Animated.timing(inputAnimation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleConfFocus = () => {
    setConfPassFocus(true);
    setSecureConfPassIOs(true);
    Animated.timing(inputAnimation, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleConfBlur = () => {
    setConfPassFocus(false);
    Animated.timing(inputAnimation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };
  const inputStyle = {
    transform: [
      {
        translateY: inputAnimation.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0, -50, -120], // You can adjust the translateY value for the desired animation
        }),
      },
    ],
    bottom: 0,
    width: '100%',
    height: '100%', 
    position: 'absolute',
  };

  const handleRegister = async () => {
    setLoading(true);

    try {
      const response = await fetch(apiUrl + '/api/FetchAllUsers');
      const data = await response.json();

      let userList = []; //Empty array for loading the usernames in it
      for (let i = 0; i < data.length; i++) {
        userList[i] = data[i].username;
      }

      const usernameExists = userList.includes(username); //Searches into the array for the username

      if (usernameExists) {
        setErrorCode(3);
        setError(true);
      } else if (password === '' || confirmPassword === '' || username === '') {
        setErrorCode(0);
        setError(true);
      } else if (password !== confirmPassword) {
        setErrorCode(1);
        setError(true);
      } else {
        const hashedPassword = sha256(password);
        const registerResponse = await fetch(apiUrl + '/api/RegisterUser', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: username,
            hashedPassword: hashedPassword,
          }),
        });

        console.log(registerResponse);

        console.log(registerResponse.statusText);

        if (registerResponse.status !== 201) {
          setErrorCode(2);
          setError(true);
        } else {
          const userUuid = await registerResponse.text()
          AsyncStorage.setItem('UUID', ""+userUuid);
          console.log(userUuid);
          navigation.reset({
            index: 0,
            routes: [{ name: 'MainNavigation' }],
          });
        }
      }
    } catch (error) {
      console.error(error);
      setErrorCode(2);
      setError(true);
    } finally {
      setLoading(false);
    }
  };


  return (

    <SafeAreaView style={RegisterStyles.container}>
      <Animated.View style={inputStyle}>
        <View style={RegisterStyles.header}>
          <TouchableHighlight style={RegisterStyles.backIconWrapper} onPress={() => navigation.navigate('MainView')}>
            <Image style={RegisterStyles.backIcon} source={require('./assets/icons8-left-arrow-100.png')} />
          </TouchableHighlight>
          <Text style={RegisterStyles.textStyle}>Register</Text>
        </View>

        <TouchableWithoutFeedback onPress={() => { dismissKeyboard(); setPassFocus(false) }}>
          <KeyboardAvoidingView
            behavior={Platform.OS === !'ios' ? 'height' : 'none'}
            style={RegisterStyles.front}
          >
            <View style={RegisterStyles.inputView}>

              <Text style={RegisterStyles.labelInput}>Username</Text>
              <InsetShadow containerStyle={RegisterStyles.innerShadow} shadowRadius={4} shadowOpacity={0.4}>
                <TextInput
                  style={RegisterStyles.textInput}
                  onChangeText={(text) => setUsername(text)}
                  value={username}
                />
              </InsetShadow>

              <Text style={RegisterStyles.labelInput}>Password</Text>
              <InsetShadow containerStyle={RegisterStyles.innerShadow} shadowRadius={4} shadowOpacity={0.4}>
                <TextInput
                  style={RegisterStyles.textInput}
                  onChangeText={(text) => setPassword(text)}
                  value={password}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  secureTextEntry={!isPassVisible && securePassIOs}
                />
                {/* This Touchable highlight allows the user to hide/unhide their password to make sure they type it right */}
                {passFocus && <TouchableHighlight underlayColor='rgba(20,20,20,0)' style={RegisterStyles.eyeIconWrapper} onPress={() => setIsPassVisible(!isPassVisible)}>
                  <Image style={RegisterStyles.eyeIcon} source={isPassVisible ? require('./assets/icons8-eye-96.png') : require('./assets/icons8-invisible-90.png')} />
                </TouchableHighlight>}
              </InsetShadow>
              <Text style={RegisterStyles.labelInput}>Confirm Password</Text>
              <InsetShadow containerStyle={RegisterStyles.innerShadow} shadowRadius={4} shadowOpacity={0.4}>
                <TextInput
                  style={RegisterStyles.textInput}
                  onChangeText={(text) => setConfirmPassword(text)}
                  value={confirmPassword}
                  onFocus={handleConfFocus}
                  onBlur={handleConfBlur}
                  secureTextEntry={!isConfPassVisible && secureConfPassIOs}
                />

                {confPassFocus && <TouchableHighlight underlayColor='rgba(20,20,20,0)' style={RegisterStyles.eyeIconWrapper} onPress={() => setIsConfPassVisible(!isConfPassVisible)}>
                  <Image style={RegisterStyles.eyeIcon} source={isConfPassVisible ? require('./assets/icons8-eye-96.png') : require('./assets/icons8-invisible-90.png')} />
                </TouchableHighlight>}
              </InsetShadow>


              <TouchableHighlight style={RegisterStyles.button} disabled={loading} onPress={() => {
                handleRegister();
              }}>
                <Text style={RegisterStyles.buttonText}>Submit</Text>
              </TouchableHighlight>
              {error && (
                <>
                  {errorCode === 0 && <Text style={RegisterStyles.error}>There are empty fields</Text>}
                  {errorCode === 1 && <Text style={RegisterStyles.error}>Passwords aren't the same</Text>}
                  {errorCode === 2 && <Text style={RegisterStyles.error}>Something went wrong, please try again</Text>}
                  {errorCode === 3 && <Text style={RegisterStyles.error}>The username provided already exists</Text>}
                </>
              )}
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>

        <Text style={RegisterStyles.brand}>ALPACA © 2024</Text>

        {loading && <View style={RegisterStyles.loaderWrapper}>
          <Image style={RegisterStyles.loader} source={require('./assets/SpinLoader.gif')} />
        </View>}
      </Animated.View>
    </SafeAreaView>
  );
};

export default Register;