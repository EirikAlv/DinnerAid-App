import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrderGroceries from '../Views/OrderGroceries';
import OrderRecipes from '../Views/OrderRecipes';

const BottomTabNavigator = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>

            <Tab.Screen
                name="OrderGroceries"
                component={OrderGroceries}
                 />
            <Tab.Screen
                name="OrderRecipes"
                component={OrderRecipes}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
