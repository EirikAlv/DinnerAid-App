import { StyleSheet } from 'react-native';
import theme from './theme';

export default StyleSheet.create({
	listItem: {
		padding: 10,
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
	justify_center: {
		justifyContent: 'center',
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
		backgroundColor: theme.BACKGROUND_COLOR,
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
		backgroundColor: theme.TEXTINPUT_COLOR,
		margin: 4,
		borderRadius: 20,
		paddingLeft: 20,
	},
	genericButton: {
		borderRadius: 10,
		borderWidth: 1,
		borderColor: theme.PRIMARY_COLOR,
		padding: 8,
	},
	genericButtonText: {
		fontSize: 15,
		color: theme.PRIMARY_COLOR,
	},
	genericListItemText: {
		marginLeft: 20,
		fontWeight: 'normal',
		fontSize: 18,
		color: theme.TEXT_COLOR,
	},
	separator: {
		backgroundColor: 'grey',
		height: 1,
		marginLeft: 15,
		marginRight: 15,
	},
	selectorItem: {
		borderRadius: 10,
		borderWidth: 1,
		borderColor: theme.PRIMARY_COLOR,
	},
	m_10: {
		margin: 10,
	},
	ml_5: {
		marginLeft: 5,
	},
	mr_5: {
		marginRight: 5,
	},
	mt_5: {
		marginTop: 5,
	},
	mb_5: {
		marginBottom: 5,
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
	b_rad_30: {
		borderRadius: 30,
	},
	flexRow: {
		flexDirection: 'row',
	},
	flexWrap_wrap: {
		flexWrap: 'wrap',
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
	font_bold: {
		fontWeight: 'bold',
	},
});
