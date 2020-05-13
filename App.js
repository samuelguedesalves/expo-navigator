import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import {Text, View } from 'react-native';

import Index from './src/index';

export default function App() {
  const [stateFont, setStateFont] = useState(false);

  useEffect(()=>{
    async function loadFont(callback){
      await Font.loadAsync({
        'AvenirNext':{
            uri: require('./src/assets/fonts/AvenirNext-Medium.ttf'),
            fontDisplay: Font.FontDisplay.FALLBACK,
        },
        'Ubuntu':{
            uri: require('./src/assets/fonts/ubuntu/Ubuntu-Regular.ttf'),
            uri: require('./src/assets/fonts/ubuntu/Ubuntu-Medium.ttf'),
            uri: require('./src/assets/fonts/ubuntu/Ubuntu-Light.ttf'),
            uri: require('./src/assets/fonts/ubuntu/Ubuntu-Bold.ttf'),
            fontDisplay: Font.FontDisplay.FALLBACK,
          
        }
      })
      .then(()=>{
        callback(true);

      }).catch((erro)=>{
        return new Error(erro);
      })
    }
    loadFont( setStateFont );
  },[]);

  if(stateFont){
    return (
      <View>
        <Index/>
      </View>
    );
  }else{
    return(
      <Text >Loading...</Text>
    );
  }
}
