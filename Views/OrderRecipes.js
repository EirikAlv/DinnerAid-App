import { View, FlatList, Button } from 'react-native';
import React, { useEffect, useState  } from 'react';
import {get_recipes} from '../Helpers/api.js';
import RecipeItem from '../Components/RecipeItem.js';
import styles from '../style';

const OrderRecipes = () => {

    const [recipe_list, set_recipe_list] = useState([]);

    useEffect(() => {
		load_recipes();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

    const load_recipes = async () => {
        const recipes = await get_recipes();
        set_recipe_list(recipes);
        console.log('populated recipes');
    };

    return (
        <View style={ styles.flexOne }>
            <FlatList
                data={recipe_list}
                renderItem={({item}) => <RecipeItem recipe={item}/>}
            />
        </View>
    );
};

export default OrderRecipes;
