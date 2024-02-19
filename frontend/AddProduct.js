import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';


import ScanStyles from './ScanStyles';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);


  const apiUrl = 'https://world.openfoodfacts.org/api/v2/product/'
  const endURL = '.json'

  const handleBarCodeScanned = ({data}) => {
    setScanned(true);
  
    fetch(apiUrl + data + endURL)
      .then((response) => response.json())
      .then((productData) => {

        const productName = productData.product.product_name || null;
        const brands = productData.product.brands || null;
        const imageURL = productData.product.image_url || null;

        Alert.alert(
          "Product Information",
          productName + "\n " + brands + "\n " + imageURL ,
          [{
            text: 'OK',
            onPress: () => setScanned(false),
          }],
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={ScanStyles.absoluteFillObject}
      />
  );
}
