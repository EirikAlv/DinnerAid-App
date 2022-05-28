import React, { useEffect, useState  } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { get_groceries } from '../Helpers/api';
import { setGroceries } from '../Store/storeSlice';

const DataLoader = () => {

    useEffect(() => {
		loading();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

    const dispatch = useDispatch();

    const loading = async () => {
        const grocery_list = await get_groceries();
        dispatch(setGroceries(grocery_list));
        console.log('loaded');
    };

    return (
        <View />
    );
};
export default DataLoader;
