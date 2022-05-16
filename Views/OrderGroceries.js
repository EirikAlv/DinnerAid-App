import React, { useState, useEffect } from 'react';
import { View, Button, FlatList, TextInput } from 'react-native';
import {get_groceries} from '../Helpers/api.js';
import GroceryItem from '../Components/GroceryItem';
import styles from '../style';

const OrderGroceries = () => {

    const [groceries_list, set_groceries_list] = useState([]);
    const [display_list, set_display_list] = useState([]);
    const [times, setTimes] = useState(0);

    useEffect(() => {
		getList();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

    const getList = async () => {
        const list = await get_groceries();
        set_groceries_list(list);
        set_display_list(list);
        setTimes(() =>  times + 1);
    };

    const onSearch = (text) => {
        let list = groceries_list.filter(x => {
            return x.norwegian.startsWith(text);
        });
        set_display_list(list);
    };

    return (
        <View style={styles.flexOne}>
            <TextInput
                onChangeText={onSearch}
                style={[styles.genericTextInput]}
                placeholder="type here"
            />
            {/* <Button
                onPress={() => {
                    getList();
                }}
                title={'Get list'}
            /> */}
            <FlatList
                data={display_list}
                renderItem={({item}) => <GroceryItem item={item}/>}
            />
        </View>
    );
};

export default OrderGroceries;
