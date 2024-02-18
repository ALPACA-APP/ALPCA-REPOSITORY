import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { CameraView, Camera } from "expo-camera/next";



import ScanStyles from './ScanStyles'; // Assuming you still need styles

export default function Scan() {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };
    getCameraPermissions();
  }, []);

  if (hasPermission === null) {
    return <Text>No access to camera</Text>;
  } else if (hasPermission === false) { 
    return <Text>No access to camera</Text>;
  }

  const scanned = (data) => {
    console.log(data);
  };


  
  return (
    <View style={ScanStyles.absoluteFillObject}>
      <CameraView style={ScanStyles.absoluteFillObject} 

          barCodeScannerSettings={{
            barCodeTypes: ["qr" ],
          }}
          onBarCodeScanned={scanned}
      />
    </View>
  );
}


