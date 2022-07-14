import React, { useState } from 'react';
import { Text, View, Modal, FlatList, Pressable } from 'react-native';
import Toast from 'react-native-toast-message';
import styles from '../style';
import RecipeGroceryItem from './RecipeGroceryItem';
import { orderRecipe } from '../Helpers/api.js';
import { truncate } from '../Helpers/utils';

const RecipeItem = ({ recipe }) => {
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
            <View style={ [styles.listItem] }>
                <Text style={ [styles.genericListItemText] }>{ truncate(recipe.Name, 25) }</Text>
                <View style={ styles.spacer }/>
                <Pressable
                    onPress={() => {
                        order_recipe();
                    }}
                    style={ [styles.genericButton] }>
                    <Text style={ [styles.genericButtonText] }>Order</Text>
                </Pressable>

                <Modal
                    animationType="slide"
                    transparent={ true }
                    visible={ modalVisible }
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={ [styles.centeredView, styles.modalView] }>
                        <Text
                            style={
                                [
                                    styles.text_size_20,
                                    styles.text_align_center,
                                    styles.font_bold,
                                    styles.mb_5,
                                ]
                            }>
                                    { recipe.Name }
                        </Text>
                        <FlatList
                            data={ recipe.Table }
                            renderItem={ ({ item }) => <RecipeGroceryItem grocery={ item }/> }/>
                    </View>
                </Modal>
            </View>
        </Pressable>
    );
};

export default RecipeItem;
