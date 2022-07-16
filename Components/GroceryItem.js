import React, { useState } from 'react';
import { Text, View, Pressable, Modal } from 'react-native';
import styles from '../style';
import theme from '../theme';
import EditGrocery from './EditGrocery';

const GroceryItem = ({ item, btnFunc, btnText }) => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={[styles.listItem]}>
            <Pressable style={styles.spacer}
                onPress={() => {
                    setModalVisible(true);
                }}>
                <Text style={[styles.genericListItemText]}>{ item.norwegian }</Text>
            </Pressable>
            <Pressable
                onPress={() => {
                    btnFunc(item);
                }}
                style={ [styles.genericButton] }>
                <Text style={ [styles.genericButtonText] }> { btnText } </Text>
            </Pressable>
            <Modal
                animationType="slide"
                transparent={ true }
                visible={ modalVisible }
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={[styles.flexOne, { backgroundColor: theme.BACKGROUND_COLOR }]}>
                    <EditGrocery
                        item={ item }
                    />
                </View>
                </Modal>
        </View>
    );
};

export default GroceryItem;
