import React, { useState, useEffect } from 'react';
import { Alert, Animated, Button, View, Text, } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import ScanStyles from './ScanStyles';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [animation] = useState(new Animated.Value(0)); // Initialize animated value

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const apiUrl = 'https://world.openfoodfacts.org/api/v2/product/';
  const endURL = '.json';


  const toggleAnimationHide = () => {
    Animated.timing(animation, {
      toValue: 0.5, // Toggle between 0 and 1
      duration: 500, // Animation duration in milliseconds
      useNativeDriver: false, // This is required for layout animations
    }).start();
  };
  const toggleAnimationToHalf = () => {
    Animated.timing(animation, {
      toValue: 0.5, // Toggle between 0 and 1
      duration: 500, // Animation duration in milliseconds
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

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);

    fetch(apiUrl + data + endURL)
      .then((response) => response.json())
      .then((productData) => {
        const productName = productData.product.product_name || null;
        const brands = productData.product.brands || null;
        const imageURL = productData.product.image_url || null;

        //here toggle animation to 50% of the animated.view
        toggleAnimationToHalf();

      })
      .catch((error) => {
        console.error(error);
      });
  };

  const heightInterpolate = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0%', '50%', '100%'],
  });

  return (
    <>
      <Animated.View style={[ScanStyles.ascendingBox, { height: heightInterpolate }]}>

        
        
        <View style={ScanStyles.buttonWrapper}>
          <TouchableHighlight style={ScanStyles.buttonBox} onPress={() => setScanned(false)}>
            <Text style={ScanStyles.button}>Save</Text>
          </TouchableHighlight>
          <TouchableHighlight style={ScanStyles.buttonBox} onPress={() => setScanned(false) }>
            <Text style={ScanStyles.button}>Cancel</Text>
          </TouchableHighlight>
        </View>
        

      </Animated.View>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={ScanStyles.absoluteFillObject}
      ></BarCodeScanner>
    </>
  );
}
