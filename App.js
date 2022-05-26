import 'react-native-gesture-handler';
import React, { useEffect, useState  } from 'react';
import Config from 'react-native-config';
import Auth0 from 'react-native-auth0';
import SInfo from 'react-native-sensitive-info';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import Store from './Store/Store';
import DrawerNavigator from './navigation/DrawerNavigator';

const auth0 = new Auth0({ audience: Config.AUDIENCE, domain: Config.AUTH0_DOMAIN, clientId: Config.AUTH0_CLIENT_ID });

const App = () => {

	const [loggedIn, setloggedIn] = useState(false);
	const [usedRefreshToken, setUsedRefreshToken] = useState(false);

	useEffect(() => {
		refresh();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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

	const refresh = async () => {
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

	const MyTheme = {
		...DefaultTheme,
		colors: {
			...DefaultTheme.colors,
			background: 'black',
		},
	};

	return (
		<Provider store={ Store }>
			<NavigationContainer theme={ MyTheme }>
				{/* <MainStackNavigator /> */}
				<DrawerNavigator />
				<Toast />
			</NavigationContainer>
		</Provider>
	);
};

export default App;
