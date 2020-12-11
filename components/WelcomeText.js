import React from 'react';
import { View, Text} from 'react-native';
import {styles} from '../mystyles'

export const WelcomeText=(props)=>{
       const {smessage} = props;

    return (
        <View>
        <Text style={styles.baseText}>{smessage}</Text>
        </View>
        )
}
