import React from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from '../style';

const GroceryAmountEditor = ({ item, returnAmount }) => {

    const returnGrocery = (amount) => {
        returnAmount(amount, item);
    };

    return (
        <View style={[styles.listItem]}>
            <Text>{item.norwegian}</Text>
            <View/>
            <TextInput
                onChangeText={ returnGrocery }
                style={ [styles.genericTextInput, styles.spacer] }
                keyboardType="numeric"
            />
        </View>
    );
};

export default GroceryAmountEditor;


