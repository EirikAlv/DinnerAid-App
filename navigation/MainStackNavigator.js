import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator.js';
import SearchRecipes from '../Views/SearchRecipes.js';


const MainStackNavigator = ({ navigation }) => {

	const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="TabNavigator" component={BottomTabNavigator} />
          <Stack.Screen name="SearchRecipes" component={SearchRecipes} />
        </Stack.Navigator>
    );
};

export default MainStackNavigator;
