import React, { useState } from 'react';
import { Text, View, Button, Modal, FlatList } from 'react-native';
import styles from '../style';
import RecipeGroceryItem from './RecipeGroceryItem';
// import {orderGrocery} from '../Helpers/api.js';

const RecipeItem = ({recipe}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const order_recipe = (item) => {
        console.log(item);
        // orderGrocery(recipe);
        setModalVisible(true);
    };

    return (
        <View style={[styles.listItem]}>
            <Text>{recipe.Name}</Text>
            <View style={styles.spacer}/>
            <Button
                onPress={() => {
                    order_recipe(recipe);
                }}
                title={'Order'}
            />

        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                console.log('closing modal');
                setModalVisible(!modalVisible);
            }}
        >
            <View style={[styles.centeredView, styles.modalView]}>
                <FlatList
                    data={recipe.Table}
                    renderItem={({item}) => <RecipeGroceryItem grocery={item}/>}
                />
            </View>

            </Modal>
        </View>
    );
};

export default RecipeItem;
