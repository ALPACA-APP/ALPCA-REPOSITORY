import React, { useState, useEffect } from 'react';
import { Alert, Animated, Button, View, Text,Pressable, Platform, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import ScanStyles from './ScanStyles';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from 'react-native-inset-shadow/src/styles';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [animation] = useState(new Animated.Value(0)); // Initialize animated value
  const [product, setProduct] = useState(''); // Initialize state variable
  const [brands, setBrands] = useState(''); // Initialize state variable
  const [url, setUrl] = useState(''); // Initialize state variable
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false); // State to manage date picker visibility
  const apiUrl = 'https://world.openfoodfacts.org/api/v2/product/';
  const endURL = '.json';
  const api = 'https://thoughtful-cod-sweatshirt.cyclic.app/api/';
  //const api = 'http://localhost:3000'
  let data = date.toDateString();
  const uuid = '72165bb3-14e1-4b5e-9dbf-4316d26a9941';



  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
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
    outputRange: ['0%', '50%', '60%'],
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
  const updateUsername = (newValue) => {
    setProduct(newValue);
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
              uuid: uuid,
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

  
  return (
    <>
      
      <BarCodeScanner 
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={ScanStyles.absoluteFillObject}
      ></BarCodeScanner>

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
          <TouchableHighlight underlayColor='rgba(20,20,20,0.25)' style={[ScanStyles.buttonBox, {backgroundColor:'rgb(105, 255, 172)'}]} onPress={() => {setScanned(false); manageScan()}}>
            <Text style={ScanStyles.button}>Save</Text>
          </TouchableHighlight> 
          <TouchableHighlight underlayColor='rgba(20,20,20,0.25)' style={[ScanStyles.buttonBox, {backgroundColor: 'rgb(247, 126, 104)'}]} onPress={() => { setScanned(false); toggleAnimationHide() }}>
            <Text style={ScanStyles.button}>Cancel</Text>
          </TouchableHighlight>
        </View>
      </Animated.View>
      
    </>
  ); 
}

