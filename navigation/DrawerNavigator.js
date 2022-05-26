import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import OrderGroceries from '../Views/OrderGroceries';
import OrderRecipes from '../Views/OrderRecipes';

const DrawerNavigator = () => {

	const Drawer = createDrawerNavigator();

    return (
		<Drawer.Navigator initialRouteName="Groceries">
            <Drawer.Screen name="Groceries" component={OrderGroceries} />
            <Drawer.Screen name="Recipes" component={OrderRecipes} />
      	</Drawer.Navigator>
    );
};

export default DrawerNavigator;
