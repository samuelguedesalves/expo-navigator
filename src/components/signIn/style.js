import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const dimensionHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    banner:{
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: -1,
    },
    container:{
        marginTop: 40,
        marginLeft: 159,
        width: 220,
        height: dimensionHeight-40,
    },
    timer:{
        fontSize: 24,
        fontFamily: 'AvenirNext',
    },
    temp:{
        display: 'flex',
        flexDirection: 'row',
        width: 80,
        marginLeft: 46,
    }
})