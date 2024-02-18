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

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Alert.alert(
      `${data}`,'',
      [{
          text: 'OK',
          onPress: () => setScanned(false),
        },],
    );
  };

  return (
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={ScanStyles.absoluteFillObject}
      />
  );
}
