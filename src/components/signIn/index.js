import React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import Style from './style';

import SvgUri from 'react-native-svg-uri';

import banner from '../../assets/banner-sign-in.svg';

export default function SignIn(){

    return(
        <View>
            <SvgUri source={banner} style={Style.banner}/>
                
            <View style={ Style.container } >
                <View style={ Style.dataTimer } >
                    <View style={{ 
                        display: 'flex', 
                        flexDirection: 'row', 
                        alignContent: 'space-between', 
                        alignItems: 'center', 
                        width: 220,
                    }} >
                        <Text style={ Style.timer } > 06:12 PM </Text>
                        <View style={Style.temp} >
                            <FontAwesome5 name="cloud" size={18} color='#ffac30' />
                            <Text style={{ 
                                fontSize: 18, 
                                marginLeft: 8, 
                                fontFamily: 'AvenirNext' 
                            }} >34° C</Text>
                        </View>
                    </View>
                    <Text 
                        style={{
                            fontSize: 20,
                            color: '#999'
                        }}
                    >Nov.10.2020 | Wednesday</Text>
                </View>

                <View style={{
                    marginTop: 120,
                }} >
                    <SvgUri
                        source={
                            require('../assets/logo.svg')
                        }
                    />
                    <Text style={{
                        marginTop: 15,
                        fontSize:28,
                        fontFamily: 'Ubuntu',
                    }} >
                        eWalle
                    </Text>

                    <Text style={{ fontFamily: 'AvenirNext', fontSize: 18, color: '#999' }} >
                        Open An Account For Digital E-Wallet Solutions.Instant Payouts. 
                    </Text>
                    
                    <Text style={{ fontFamily: 'AvenirNext', fontSize: 18, color: '#999', marginTop: 20 }} >
                        Join For Free.
                    </Text>


                </View>
                
                <View style={{
                    position: 'absolute',
                    bottom: 0,
                    marginBottom: 40,
                }} >
                    <TouchableOpacity style={{ 
                        backgroundColor: '#ffac30', 
                        borderRadius: 10, 
                        width: 220, 
                        height: 50, 
                        display: "flex",
                        flexDirection: 'column',
                        alignItems: "center",
                        justifyContent: "center",
                    }} >
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }} >
                            <Text style={{
                                fontFamily: 'AvenirNext',
                                fontSize: 24,
                                fontWeight: 'bold',
                                color: '#333'
                            }} >Sign In</Text>
                            <FontAwesome 
                                name='long-arrow-right' 
                                color='#333' 
                                size={24} style={{ marginLeft: 10, }} 
                            />
                        </View>
                    </TouchableOpacity>
                
                    <TouchableOpacity style={{
                        marginTop: 20,
                        width: 220,
                        height: 30,
                        display: "flex",
                        alignItems: 'center',
                        justifyContent: 'center',
                    }} >
                        <Text style={{
                            fontFamily: 'AvenirNext',
                            fontSize: 20,
                        }} >Create an account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}