import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner'

export default class ScanScreen extends React.Component{

    constructor(){
    super();
    this.state={
      hasCameraPermissions: null,
      scanned: false,
      scannedData: '',
      buttonState: 'normal',
    }
    }

    getCameraPermissions=async()=>{
    const {status}= await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
      // status === 'granted'
      hasCameraPermissions: status === 'granted',
      buttonState: 'clicked',
    })
    }

  handleBarcodeScanned=async({type,data})=>{
    this.setState({
      scanned: true,
      scannedData: data,
      buttonState: 'normal'
    })
  }

    render(){
        return (
        <View style={styles.container}>
            <Image
                source={require('../assets/Camera.jpg')}
                style={{
                    width: 300,
                    height: 300,
                    borderWidth: 3,
                    borderColor: 'red',
                    marginTop: 50,
                    marginLeft: 70,
                }}
            />
            <TouchableOpacity
             style = {styles.scanButton}
              onPress = {this.getCameraPermissions}
              title = "Bar Code Scanner">
            <Text style = {styles.buttonText}>
              Scan QR Code
            </Text>
          </TouchableOpacity>
        </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    width: 5000,
    height:1000,
  },
  scanButton: {
    backgroundColor: 'yellow',
    width: 100,
    height: 50,
    padding: 10,
    margin: 20,
  },
  buttonText: {
    fontColor: 'red',
    fontSize: 'bold',
  }
});
