import React from 'react';
import { TextInput } from 'react-native';
import style from '../style';

const NameInput = ({return_name}) => {
    return (
        <TextInput
                onChangeText={ return_name }
                style={ [style.genericTextInput, {margin: 10}] }
            />
    );
};
export default NameInput;
