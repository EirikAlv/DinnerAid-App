import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import styles from '../style';

const GroceryAmountEditor = ({ item, returnAmount, remove }) => {

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
            <Button
            onPress={() => {
                remove(item);
            }}
            title={'remove'}
            />
        </View>
    );
};

export default GroceryAmountEditor;


