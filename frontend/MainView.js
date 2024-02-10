import { Text, StyleSheet, View, Image, SafeAreaView, Button } from 'react-native';
import styles from './styles.js';
import LoginButton from './LoginButton';
import { useFonts } from 'expo-font';
import LoginIcon from './assets/icons8-login-100.png';
import RegIcon from './assets/icons8-add-user-male-100.png';
import {NavigationContainer} from '@react-navigation/native';

export default function MainView({ navigation }) {

  const [loaded] = useFonts({
    'lexend-light': require('./assets/Fonts/Lexend/static/Lexend-Light.ttf'),
    'lexend-regular': require('./assets/Fonts/Lexend/static/Lexend-Regular.ttf'),
    'lexend-bold': require('./assets/Fonts/Lexend/static/Lexend-Bold.ttf'),
    'lexend-extra-light': require('./assets/Fonts/Lexend/static/Lexend-ExtraLight.ttf')
  });

  if (!loaded) {
    return null;
  }

  const GoToLogin = () => {
    navigation.navigate('Login');
  }


  const alertTest2 = () => {
    //navigation.navigate('Register');
  };

  return (

        <SafeAreaView style={styles.container}>
          <Text style={styles.version}>v-0.1</Text>
          <Image style={styles.logo} source={require('./assets/logo.png')} />
          <View style = {styles.textWrapper}>
            <Text style={styles.textStyle}>Welcome to </Text>
            <Text style={styles.textStyleBold}>ALPACA! </Text>
          </View>
          <View style={styles.front}>
        <LoginButton displayText="Login" IconURI={LoginIcon} clickHandler={GoToLogin} /> 
        <LoginButton displayText="Register" IconURI={RegIcon} clickHandler={alertTest2} />
          </View>
          <Text style={styles.brand}>ALPACA © 2024</Text>
        </SafeAreaView>

  );
}
