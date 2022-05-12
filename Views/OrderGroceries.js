import React, { useState } from 'react';
import {Text, View, Button, FlatList} from 'react-native';
import {get_groceries} from '../Helpers/api.js';
import GroceryItem from '../Components/GroceryItem';

const OrderGroceries = () => {

    const [groceries_list, set_groceries_list] = useState([]);


    const getList = async () => {
        const list = await get_groceries();
        set_groceries_list(list);
        console.log(list);
        console.log('populated list');
    };

    return (
        <View>
            <Text>Hellooooo</Text>
            <Button
                onPress={() => {
                    getList();
                }}
                title={'Get list'}
            />
            <FlatList
                data={groceries_list}
                renderItem={({item}) => <GroceryItem item={item}/>}
            />
        </View>
    );
};

export default OrderGroceries;
