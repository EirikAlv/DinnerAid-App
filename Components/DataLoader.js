import React, { useEffect, useState  } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { get_groceries, get_uom } from '../Helpers/api';
import { setGroceries, setUOM } from '../Store/storeSlice';

const DataLoader = () => {

    useEffect(() => {
		loading();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

    const dispatch = useDispatch();

    const loading = async () => {
        const grocery_list = await get_groceries();
        const uom = await get_uom();
        dispatch(setGroceries(grocery_list));
        dispatch(setUOM(uom));
        console.log('loaded');
    };

    return (
        <View />
    );
};
export default DataLoader;
