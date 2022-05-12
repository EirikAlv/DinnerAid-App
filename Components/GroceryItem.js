import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../style';
import {orderGrocery} from '../Helpers/api.js';

const GroceryItem = ({item}) => {

    const order_grocery = (grocery) => {
        console.log(item);
        orderGrocery(item);
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
