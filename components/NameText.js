import React from 'react';
import { View, Text} from 'react-native';
import {styles} from '../mystyles'

export const NameText=(props)=>{
     const {sname} = props;

    return (
        <View>
        <Text style={styles.baseText}>{sname}</Text>
        </View>
        )
}
