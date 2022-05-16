import React from 'react';
import { Text, View, Button } from 'react-native';
import Toast from 'react-native-toast-message';
import styles from '../style';
import {orderGrocery} from '../Helpers/api.js';

const GroceryItem = ({item}) => {

    const order_grocery = async (grocery) => {
        let res = await orderGrocery(item);
        Toast.show({
            type: 'success',
            text1: res,
        });
    };

    return (
        <View style={[styles.listItem]}>
            <Text>{item.norwegian}</Text>
            <View style={styles.spacer}/>
            <Button
                onPress={() => {
                    order_grocery(item);
                }}
                title={'Order'}
            />
        </View>
    );

};

export default GroceryItem;
