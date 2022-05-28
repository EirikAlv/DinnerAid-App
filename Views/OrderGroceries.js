import React, { useState, useEffect } from 'react';
import { View, FlatList, TextInput } from 'react-native';
import GroceryItem from '../Components/GroceryItem';
import styles from '../style';
import { useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
import {orderGrocery} from '../Helpers/api';

const OrderGroceries = () => {

    const [groceries_list, set_groceries_list] = useState([]);
    const [display_list, set_display_list] = useState([]);

    const groceries = useSelector((state) => state.store.groceries);

    useEffect(() => {
		getList();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [groceries]);

    const getList = async () => {
        set_groceries_list(groceries);
        set_display_list(groceries);
    };

    const onSearch = (text) => {
        let list = groceries_list.filter(x => {
            return x.norwegian.startsWith(text);
        });

        set_display_list(list);
    };

    const order_grocery = async (grocery) => {
        let res = await orderGrocery(grocery);
        Toast.show({
            type: 'success',
            text1: res,
        });
    };

    return (
        <View style={ styles.flexOne }>
            <TextInput
                onChangeText={ onSearch }
                style={ [styles.genericTextInput] }
                placeholder="type here"
            />
            <FlatList
                data={ display_list }
                renderItem={({ item }) => <GroceryItem item={ item } btnFunc={ order_grocery } btnText={ 'Order' }/>}
            />
        </View>
    );
};

export default OrderGroceries;
