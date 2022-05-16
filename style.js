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
});
