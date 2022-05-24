import React, { useState, useEffect } from 'react';
import { View, FlatList, TextInput } from 'react-native';
import {get_groceries} from '../Helpers/api.js';
import GroceryItem from '../Components/GroceryItem';
import styles from '../style';
import { useDispatch } from 'react-redux';
import { setGroceries } from '../Store/storeSlice';
import Toast from 'react-native-toast-message';
import {orderGrocery} from '../Helpers/api';

const OrderGroceries = () => {

    const [groceries_list, set_groceries_list] = useState([]);
    const [display_list, set_display_list] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
		getList();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

    const getList = async () => {
        const list = await get_groceries();
        set_groceries_list(list);
        set_display_list(list);
        dispatch(setGroceries(list));
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
