import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../style';

const GroceryItem = ({ item, btnFunc, btnText }) => {
    return (
        <View style={[styles.listItem]}>
            <Text>{item.norwegian}</Text>
            <View style={styles.spacer}/>
            <Button
                onPress={() => {
                    btnFunc(item);
                }}
                title={ btnText }
            />
        </View>
    );
};

export default GroceryItem;
