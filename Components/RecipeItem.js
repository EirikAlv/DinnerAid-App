import React, { useState } from 'react';
import { Text, View, Button, Modal, FlatList, Pressable } from 'react-native';
import Toast from 'react-native-toast-message';
import styles from '../style';
import RecipeGroceryItem from './RecipeGroceryItem';
import { orderRecipe } from '../Helpers/api.js';

const RecipeItem = ({recipe}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const order_recipe = async () => {
        const res = await orderRecipe(recipe.Table);
        Toast.show({
            type: 'success',
            text1: res,
        });
    };

    return (
        <Pressable
            onPress={() => {
                setModalVisible(true);
            }}
        >
            <View style={[styles.listItem]}>
                <Text>{recipe.Name}</Text>
                <View style={styles.spacer}/>
                <Button
                    onPress={() => {
                        order_recipe();
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
        </Pressable>
    );
};

export default RecipeItem;
