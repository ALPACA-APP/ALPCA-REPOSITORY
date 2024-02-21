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
import App from './App';

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

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleFocus = () => {
    setPassFocus(true);
    setSecurePassIOs(true);
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
          inputRange: [0, 1],
          outputRange: [0, -50], // You can adjust the translateY value for the desired animation
        }),
      },
    ],
  };


  const handleRegister = async () => {

    const apiUrl = 'https://thoughtful-cod-sweatshirt.cyclic.app/';
    //const apiUrl = 'http://127.0.0.1:3000';

    if (password === '' || confirmPassword === '' || username === ''){
        setErrorCode(0);
        setError(true);
    }else{
        if (password === confirmPassword){
            const hashedPassword = sha256(password);
            try{
                setLoading(true);
                // Make a POST request to the server to register the user
                const response = await fetch(apiUrl + '/api/RegisterUser',{
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    username: username,
                    hashedPassword: hashedPassword
                  })
                });
                if (response.status != 201){
                    setErrorCode(3);
                    console.log(response.status);
                    setError(true);
                }else{
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'MainNavigation' }],
                    });
                }
            }catch(error){
                console.error(error);
                setErrorCode(2);
                setError(true);
            }
            setLoading(false);
        }else{
            setErrorCode(1);
            setError(true);
        }
    }

  };


  return (
    <SafeAreaView style={RegisterStyles.container}>

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
          <Animated.View style={[RegisterStyles.inputView, inputStyle]}>

            <Text style={RegisterStyles.labelInput}>Username</Text>
            <InsetShadow containerStyle={RegisterStyles.innerShadow} shadowRadius={4} shadowOpacity={0.4}>
              <TextInput
                style={RegisterStyles.textInput}
                onChangeText={(text) => setUsername(text)}
                value={username}
              />
            </InsetShadow>

            <Text style={RegisterStyles.labelInput}textContextType = 'password'>Password</Text>
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
            <TextInput styles={{height: 0.1}} editable='false'/>
            <Text style={RegisterStyles.labelInput} textContextType = 'password'>Confirm Password</Text>
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
            

            <TouchableHighlight style={RegisterStyles.button} onPress={() => {
              handleRegister();
            }}>
              <Text style={RegisterStyles.buttonText}>Submit</Text>
            </TouchableHighlight>
            {error && (
                <>
                    {errorCode === 0 && <Text style={RegisterStyles.error}>There are empty fields</Text>}
                    {errorCode === 1 && <Text style={RegisterStyles.error}>Passwords aren't the same</Text>}
                    {errorCode === 2 && <Text style={RegisterStyles.error}>Something went wrong, please try again</Text>}
                    {errorCode === 3 && <Text style={RegisterStyles.error}>Error</Text>}
                </>
                )}
          </Animated.View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>

      <Text style={RegisterStyles.brand}>ALPACA © 2024</Text>

      {loading && <View style={RegisterStyles.loaderWrapper}>
        <Image style={RegisterStyles.loader} source={require('./assets/SpinLoader.gif')} />
      </View>}

    </SafeAreaView>
  );
};

export default Register;