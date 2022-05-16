import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../style';

const RecipeGroceryItem = ({grocery}) => {

    return (
        <View style={[styles.listItem]}>
            <Text>
                { grocery.norwegian }
            </Text>
            <View style={ styles.spacer }/>
            <Text>{ grocery.amount }</Text>
            <Text> { grocery.uom }</Text>
        </View>
    );
};

export default RecipeGroceryItem;
