import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	listItem: {
		padding: 15,
		flexDirection: 'row',
		alignItems: 'baseline',
	},
	spacer: {
		flexGrow: 1,
	},
	flexOne: {
		flex: 1,
	},
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		marginTop: 22,
	},
	align_center: {
		alignItems: 'center',
	},
	justify_end: {
		justifyContent: 'flex-end',
	},
	footer: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
	},
	modalView: {
		margin: 20,
		backgroundColor: 'black',
		borderRadius: 20,
		padding: 35,
		shadowColor: '000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	genericTextInput: {
		borderColor: 'blue',
		margin: 4,
		borderWidth: 1,
		borderRadius: 10,
	},
	createGroceryText: {
		alignItems: 'center',
		backgroundColor:'green',
	},
	m_10: {
		margin: 10,
	},
	p_5: {
		padding: 5,
	},
	p_10: {
		padding: 10,
	},
	p_20: {
		padding: 20,
	},
	flexRow: {
		flexDirection: 'row',
	},
	text_size_13: {
		fontSize: 13,
	},
	text_size_20: {
		fontSize: 20,
	},
	bg_color: {
		backgroundColor:'green',
	},
	text_align_center: {
		textAlign: 'center',
	},
});
