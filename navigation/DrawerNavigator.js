import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import OrderGroceries from '../Views/OrderGroceries';
import OrderRecipes from '../Views/OrderRecipes';
import SearchRecipes from '../Views/SearchRecipes';
import CreateGrocery from '../Views/CreateGrocery';

const DrawerNavigator = () => {


	const Drawer = createDrawerNavigator();

  const header_options = {
      headerStyle: {
        backgroundColor:'black',
      },
      headerTintColor: 'white',
  };

    return (
		<Drawer.Navigator
			screenOptions={{
				drawerStyle: {
					backgroundColor: 'black',
					width: 240,
				},
				drawerInactiveTintColor: 'white',
			}}
			initialRouteName="Groceries">
            <Drawer.Screen options={header_options} name="Groceries" component= { OrderGroceries } />
            <Drawer.Screen options={ header_options } name="Recipes" component={ OrderRecipes } />
            <Drawer.Screen options={ header_options } name="Search Recipes" component={ SearchRecipes } />
            <Drawer.Screen options={ header_options } name="Create grocery" component={ CreateGrocery } />
    </Drawer.Navigator>
    );
};

export default DrawerNavigator;
