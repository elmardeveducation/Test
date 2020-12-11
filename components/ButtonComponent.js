import React from 'react';
import {Button} from 'react-native';

export const ButtonComponent = (props) => {
    const {title, onClickFunc} = props;
    return(
        <Button title={title} onPress={onClickFunc}></Button>
    )
}