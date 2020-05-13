import React from 'react';
import { View } from 'react-native';

import SignIn from './components/signIn/index';
import Home from './components/home/index';

export default function Index (){
    return(
        <View>
            <Home/>
            <SignIn/>
        </View>
    )
}
