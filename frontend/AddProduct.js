import React, { useState, useEffect } from 'react';
import { Alert, Animated, Button, View, Text,Pressable, Platform, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import ScanStyles from './ScanStyles';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from 'react-native-inset-shadow/src/styles';
import { CONSTANTS } from './global.js';
import frame from './assets/scanner_frame.png';
import {useFocusEffect} from '@react-navigation/native';

export default function App({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [animation] = useState(new Animated.Value(0)); // Initialize animated value
  const [product, setProduct] = useState(''); // Initialize state variable
  const [brands, setBrands] = useState(''); // Initialize state variable
  const [url, setUrl] = useState(''); // Initialize state variable
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false); // State to manage date picker visibility
  const [userObject, setUserObject] = useState('');
  const [barcodeActive, setBarcodeActive] = useState(false);

  
  const apiUrl = 'https://world.openfoodfacts.org/api/v2/product/';
  const endURL = '.json';
  const api = CONSTANTS.API_URL;

  let data = date.toDateString();

  useEffect(() => {
    (async () => {
      const userStoredString = await AsyncStorage.getItem('user');
      const userStored = JSON.parse(userStoredString);
      setUserObject(userStored);

      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');

      setBarcodeActive(true);

    })();
  },[]);

  useFocusEffect(
    React.useCallback(() => {

      setBarcodeActive(true);
      console.log('Screen was focused, barcode scanner is now active.');

      //reset the scanned state
      setScanned(false);
      setProduct('');
      setBrands('');
      setUrl('');
      setDate(new Date());
      setShowPicker(false);

      
      // Return a cleanup function to run when the screen loses focus (i.e., when you navigate away from it)
      return () => {
        setBarcodeActive(false);
        setScanned(false);
        setProduct('');
        setBrands('');
        setUrl('');
        setDate(new Date());
        setShowPicker(false);
        console.log('Screen was unfocused, barcode scanner is now inactive.');
      };
    }, [])
  );



  const toggleAnimationHide = () => {
    Animated.timing(animation, {
      toValue: 0, // Toggle between 0 and 1 
      duration: 250, // Animation duration in milliseconds
      useNativeDriver: false, // This is required for layout animations
    }).start();
  };
  const toggleAnimationToHalf = () => {
    Animated.timing(animation, {
      toValue: 0.5, // Toggle between 0 and 1
      duration: 250, // Animation duration in milliseconds
      useNativeDriver: false, // This is required for layout animations
    }).start();
  };
  const toggleAnimationFull = () => {
    Animated.timing(animation, {
      toValue: 1, // Toggle between 0 and 1
      duration: 500, // Animation duration in milliseconds
      useNativeDriver: false, // This is required for layout animations
    }).start();
  };
  const heightInterpolate = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0%', '60%', '70%'],
  });
  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);

    fetch(apiUrl + data + endURL)
      .then((response) => response.json())
      .then((productData) => {
        let productName = productData.product.product_name || null;
        let brands = productData.product.brands || null;
        let imageURL = productData.product.image_url || null;

        if (productName === null) {
          productName = ''
        }
        if (brands === null) {
          brands = ''
        }
        if (imageURL === null) {
          imageURL = ''
        }

        //here toggle animation to 50% of the animated.view
        toggleAnimationToHalf();
        setProduct(productName);
        setDate(new Date());
        setUrl(imageURL);
        setBrands(brands);
        

      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios'); // Only close if it's iOS platform
    setDate(currentDate);
    setShowPicker(!showPicker);
  };
  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };
  const formatDate = (date) => {
    // Format the date to 'dd/mm/yyyy' format
    const formattedDate = date.toLocaleDateString('en-GB');
    return formattedDate;
  };


  const manageScan = async() => {
    if (product === '') {
      Alert.alert('Product Name is required');
      return;
    }
    if (date === '') {
      Alert.alert('Expiration Date is required');
      return;
    }
    let postDate = formatDate(date);
    
    try{
    const response = fetch(api + 'AddProduct',
      { 
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              uuid: userObject.uuid,
              product_id: 0, 
              img_url: url,
              name: product,
              brand: brands,
              exp_date: postDate,
          }),
      });
      toggleAnimationHide();

    } catch (error) {
      console.error(error);
    }
  };


  const setGreen = (colourBlind) => {
    if(colourBlind === 0){
        return '#7cffc0';
    }else if (colourBlind === 1){
        return '#ffdfd2';
    }else if (colourBlind === 2){
        return '#b0f0ff';
    }
  };
  const setRed = (colourBlind) => {
      if(colourBlind === 0){
          return '#ff7c7c';
      }else if (colourBlind === 1){
          return '#c39b73';
      }else if (colourBlind === 2){
          return '#ff7a83';
      }
  };

  
  return (
    <>
      
      {barcodeActive && <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={ScanStyles.absoluteFillObject}>
        <View style = {ScanStyles.imageDiv}>
          <Image source={frame}  style = {ScanStyles.imageFrame}></Image>
        </View>
        

      </BarCodeScanner>}

        { showPicker &&
        <View style={ScanStyles.holePage}>
          <View style={ScanStyles.calendarIos}>
            <DateTimePicker
                  mode = 'date'
                  display={Platform.OS === 'ios' ? 'inline' : 'default'}
                  value = {date}
                  onChange = {onChange}
            ></DateTimePicker>
          </View> 
        </View>
        }
 
        <Animated.View style={[ScanStyles.ascendingBox, { height: heightInterpolate }]}>
        <Text style={ScanStyles.text}>Product Name</Text>
        <View style={ScanStyles.topPart}>
          <TextInput style={ScanStyles.name} onFocus={() => toggleAnimationFull()} onBlur={() => toggleAnimationToHalf()} onChangeText={(text) => setProduct(text)} value={product}></TextInput>
          <Text style={[ScanStyles.text, {marginTop:10}]}>Expiration Date</Text>
          <View style={ScanStyles.calendarWrap}>
          
            <Text style={ScanStyles.calendarText}>{data}</Text>
            
            {!showPicker &&
            <TouchableHighlight style={ScanStyles.calendarButton} onPress={toggleDatePicker}>
              <Image style={ScanStyles.icon} source={require('./assets/icons8-calendar-plus-100.png')} />
            </TouchableHighlight>}
          </View>
        </View>

        <View style={ScanStyles.buttonWrapper}> 
          <TouchableHighlight underlayColor='rgba(20,20,20,0.25)' style={[ScanStyles.buttonBox, {backgroundColor: setGreen(userObject.colourBlind)}]} onPress={() => {setScanned(false); manageScan()}}>
            <Text style={ScanStyles.button}>Save</Text>
          </TouchableHighlight> 
          <TouchableHighlight underlayColor='rgba(20,20,20,0.25)' style={[ScanStyles.buttonBox, {backgroundColor: setRed(userObject.colourBlind)}]} onPress={() => { setScanned(false); toggleAnimationHide() }}>
            <Text style={ScanStyles.button}>Cancel</Text>
          </TouchableHighlight>
        </View>
      </Animated.View>
      
    </>
  ); 
}

