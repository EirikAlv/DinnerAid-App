import React, { useState } from 'react';
import { View, Text, Button, FlatList, Modal } from 'react-native';
import { useSelector } from 'react-redux';
import GroceryItem from '../Components/GroceryItem';
import styles from '../style.js';
import { searhRecipes } from '../Helpers/api';
import GroceryAmountEditor from '../Components/GroceryAmountEditor';
import RecipeItem from '../Components/RecipeItem';

const SearchRecipes = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [recipe_modal_visible, set_recipe_modal_visible] = useState(false);
    const [selected_groceries, set_selected_groceries] = useState([]);
    const [recipes, set_recipes] = useState([]);

    const groceries = useSelector((state) => state.store.groceries);

    const append_selected_groceries = (grocery) => {
        let temp = selected_groceries;
        temp.push(grocery);
        console.log(temp);
        set_selected_groceries(temp);
    };

    const find_recipe = async () => {
        const found_recipes = await searhRecipes(selected_groceries);
        set_recipes(found_recipes);
        set_recipe_modal_visible(true);
    };

    const get_amount = (amount, grocery) => {
        let found_grocery = selected_groceries.find(sg => sg.id === grocery.id);
        let temp = selected_groceries.filter(sg => sg.id !== grocery.id);
        let foo = {... found_grocery};
        foo.amount = amount;
        temp.push(foo);
        set_selected_groceries(temp);
    };

    return (
        <View>
            <Button
                onPress={() => {
                    setModalVisible(true);
                }}
                title={'Select groceries'}
            />
            <Button
                onPress={() => {
                    find_recipe();
                }}
                title={'Search recipes'}
            />
            <FlatList
                data={ selected_groceries }
                renderItem={({ item }) => <GroceryAmountEditor item={ item } returnAmount={ get_amount } />}
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
                    <Text>In modal</Text>
                    <FlatList
                        data={ groceries }
                        renderItem={({ item }) => <GroceryItem item={ item } btnFunc={ append_selected_groceries } btnText={ 'Add' }/>}
                    />
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={recipe_modal_visible}
                onRequestClose={() => {
                    console.log('closing modal');
                    set_recipe_modal_visible(!recipe_modal_visible);
                }}
            >
                <View style={[styles.centeredView, styles.modalView]}>
                    <Text>{ recipes.length ? 'Found recipes' : 'No recipes found' }</Text>
                    <FlatList
                        data={ recipes }
                        renderItem={({ item }) => <RecipeItem recipe={ item } />}
                    />
                </View>
            </Modal>

        </View>
    );
};

export default SearchRecipes;

