import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import OrderGroceries from '../Views/OrderGroceries';
import OrderRecipes from '../Views/OrderRecipes';
import SearchRecipes from '../Views/SearchRecipes';
import CreateGrocery from '../Views/CreateGrocery';

const DrawerNavigator = () => {

	const Drawer = createDrawerNavigator();

    return (
		<Drawer.Navigator initialRouteName="Groceries">
            <Drawer.Screen name="Groceries" component= {OrderGroceries } />
            <Drawer.Screen name="Recipes" component={ OrderRecipes } />
            <Drawer.Screen name="Search Recipes" component={ SearchRecipes } />
            <Drawer.Screen name="Create grocery" component={ CreateGrocery } />
      	</Drawer.Navigator>
    );
};

export default DrawerNavigator;
