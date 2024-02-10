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
import LoginStyles from './LoginStyles';
import InsetShadow from 'react-native-inset-shadow';
import App from './App';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passFocus, setPassFocus] = useState(false);
  const [isPassVisible, setIsPassVisible] = useState(false);
  const inputAnimation = useRef(new Animated.Value(0)).current;
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const sha256 = require('js-sha256').sha256;

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleFocus = () => {
    setPassFocus(true);
    Animated.timing(inputAnimation, {
      toValue: 1,
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

  const inputStyle = {
    transform: [
      {
        translateY: inputAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -50], // You can adjust the translateY value for the desired animation
        }),
      },
    ],
  };

  const checkLogin = async () => {
    // This method is called to check if the user credentials lineup with the dev database data, to check if requests are recieved.

    const apiUrl = 'https://dark-ruby-brown-bear-sock.cyclic.app/';

    try {
      //set the loading state to true
      setLoading(true);

      //fetch the data from the api
      const response = await fetch(apiUrl);
      const data = await response.json();

      //use the response data to check if the username and password are correct
      const resUsername = data[0].username;
      const resPassword = data[0].password;

      const hashedPassword = sha256(password);

      //if they are correct, navigate to the main view
      if (username === resUsername && hashedPassword === resPassword) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'MainNavigation' }],
        })
      } else {
        //if they are incorrect, display an error message
        setError(true);
      }


    } catch (error) {
      console.error(error);
      setError(true);
    }

    //set the loading state to false
    setLoading(false);
  };

  return (
    <SafeAreaView style={LoginStyles.container}>

      <View style={LoginStyles.header}>
        <TouchableHighlight style={LoginStyles.backIconWrapper} onPress={() => navigation.navigate('MainView')}>
          <Image style={LoginStyles.backIcon} source={require('./assets/icons8-left-arrow-100.png')} />
        </TouchableHighlight>
        <Text style={LoginStyles.textStyle}>Login</Text>
      </View>

      <TouchableWithoutFeedback onPress={() => { dismissKeyboard(); setPassFocus(false) }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === !'ios' ? 'height' : 'none'}
          style={LoginStyles.front}
        >
          <Animated.View style={[LoginStyles.inputView, inputStyle]}>
            <Text style={LoginStyles.labelInput}>Username</Text>
            <InsetShadow containerStyle={LoginStyles.innerShadow} shadowRadius={4} shadowOpacity={0.4}>
              <TextInput
                style={LoginStyles.textInput}
                onChangeText={(text) => setUsername(text)}
                value={username}
              />
            </InsetShadow>
            <Text style={LoginStyles.labelInput}>Password</Text>
            <InsetShadow containerStyle={LoginStyles.innerShadow} shadowRadius={4} shadowOpacity={0.4}>

              <TextInput
                style={LoginStyles.textInput}
                onChangeText={(text) => setPassword(text)}
                value={password}
                onFocus={handleFocus}
                onBlur={handleBlur}
                secureTextEntry={!isPassVisible && true}
              />
              {/* This Touchable highlight allows the user to hide/unhide their password to make sure they type it right */}
              {passFocus && <TouchableHighlight underlayColor='rgba(20,20,20,0)' style={LoginStyles.eyeIconWrapper} onPress={() => setIsPassVisible(!isPassVisible)}>
                <Image style={LoginStyles.eyeIcon} source={isPassVisible ? require('./assets/icons8-eye-96.png') : require('./assets/icons8-invisible-90.png')} />
              </TouchableHighlight>}

            </InsetShadow>
            

            <TouchableHighlight style={LoginStyles.button} onPress={() => {
              checkLogin();
            }}>
              <Text style={LoginStyles.buttonText}>Submit</Text>
            </TouchableHighlight>
            {error && <Text style={LoginStyles.error}>Username or Password incorrect</Text>}
          </Animated.View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>

      <Text style={LoginStyles.brand}>ALPACA © 2024</Text>

      {loading && <View style={LoginStyles.loaderWrapper}>
        <Image style={LoginStyles.loader} source={require('./assets/SpinLoader.gif')} />
      </View>}

    </SafeAreaView>
  );
};

export default Login;
