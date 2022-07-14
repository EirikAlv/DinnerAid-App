import React from 'react';
import { Text, View, Pressable } from 'react-native';
import styles from '../style';

const GroceryItem = ({ item, btnFunc, btnText }) => {
    return (
        <View style={[styles.listItem]}>
            <Text style={[styles.genericListItemText]}>{ item.norwegian }</Text>
            <View style={styles.spacer}/>
            <Pressable
                onPress={() => {
                    btnFunc(item);
                }}
                style={ [styles.genericButton] }>
                <Text style={ [styles.genericButtonText] }> { btnText } </Text>
            </Pressable>
        </View>
    );
};

export default GroceryItem;
