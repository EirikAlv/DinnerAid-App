import React, { useEffect, useState  } from 'react';
import {View, Button, Alert} from 'react-native';
import Config from 'react-native-config';
import Auth0 from 'react-native-auth0';
import SInfo from 'react-native-sensitive-info';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Toast from 'react-native-toast-message';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderGroceries from './Views/OrderGroceries';
import OrderRecipes from './Views/OrderRecipes';
import styles from './style';


const auth0 = new Auth0({ audience: Config.AUDIENCE, domain: Config.AUTH0_DOMAIN, clientId: Config.AUTH0_CLIENT_ID });

const App = () => {

	const [loggedIn, setloggedIn] = useState(false);
	const [usedRefreshToken, setUsedRefreshToken] = useState(false);
	const [profile, setProfile] = useState('profile');

	useEffect(() => {
		refresh();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const Stack = createNativeStackNavigator();
	const Tab = createBottomTabNavigator();

	const logIn = () => {
		auth0
			.webAuth
			.authorize({scope: Config.AUTHO_SCOPE, audience: Config.AUDIENCE})
			.then(credentials => {
				setloggedIn(true);
				SInfo.setItem('accessToken', credentials.accessToken, {});
				SInfo.setItem('refreshToken', credentials.refreshToken, {});
			})
			.catch(error => console.log(error));
	};

	const logOut = () => {
		auth0.webAuth
			.clearSession({})
			.then(success => {
				Alert.alert(
					'Logged out!'
				);
				setloggedIn(false);
			})
			.catch(error => {
				console.log('Log out cancelled');
			});
	};

	const refresh = async () => {
		// const accessToken = await SInfo.getItem('accessToken', {});
		const refreshToken = await SInfo.getItem('refreshToken', {});

		auth0.auth.refreshToken({refreshToken: refreshToken})
			.then(credentials => {
				SInfo.setItem('accessToken', credentials.accessToken, {});
				SInfo.setItem('refreshToken', credentials.refreshToken, {});
				setloggedIn(true);
				setUsedRefreshToken(true);
			})
			.catch(error => {
				logIn();
				console.log('failed to refresh');
			});
	};

	const refreshExp = async () => {
		const accessToken = await SInfo.getItem('accessToken', {});
		const refreshToken = await SInfo.getItem('refreshToken', {});
		if (!accessToken) {
			return;
		}

		auth0.auth.userInfo({token: accessToken})
			.then(data => {
				setProfile(data.nickname);
				setloggedIn(true);
			})
			.catch(() => {
				auth0.auth.refreshToken({refreshToken: refreshToken})
					.then(success => {
						setloggedIn(true);
						setUsedRefreshToken(true);
					}).catch(console.log('failed to refresh'));
			});

	};

	const MyTheme = {
		...DefaultTheme,
		colors: {
			...DefaultTheme.colors,
			background: 'black',
		},
	};

	return (
		<NavigationContainer theme={MyTheme}>
			<Tab.Navigator
				screenOptions={{
				headerShown: false,
				}}>
				<Tab.Screen
					name="Groceries"
					component={OrderGroceries}
				/>
				<Tab.Screen
					name="Recipes"
					component={OrderRecipes}
				/>
			</Tab.Navigator>
			<Toast />
			{/* <Text>
				Try editing me!  {}
			</Text>
			<OrderGroceries />
			<Button
				onPress={() => {
					refresh();
				}}
				title={'refresh'}
			/>
			<Button
				onPress={() => {
					logIn();
				}}
				title={'Log in'}
			/>
			<Text>logged in: {loggedIn ? 'true' : 'false'}</Text>
			<Button
				onPress={() => {
					logOut();
				}}
				title={'Logout'}
			/>
			<Text>nickname: {profile}</Text>
			<Text>its newer</Text>
			<Button
				onPress={() => {
					refreshExp();
				}}
				title={'Refresh'}
			/>
			<Text>Used refresh token: {usedRefreshToken ? 'true' : 'false'}</Text> */}
		</NavigationContainer>
	);
};

export default App;
