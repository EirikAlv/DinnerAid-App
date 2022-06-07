import React, { useState } from 'react';
import { View, FlatList, TouchableHighlight, Text } from 'react-native';
import style from '../style';

const TagSelector = ({list, return_selected }) => {

    const [selected_index, set_selected_index] = useState(-1);

    const click_section = (section, index) => {
        return_selected(section);
        set_selected_index(index);
    };

    const renderSection = (item, index) => {
        const styles = [style.p_5, style.genericTextInput];

        if (selected_index === index) {
            styles.push({
                backgroundColor: '#ADD8E6',
            });
        }
        return (
            <TouchableHighlight
                style={styles}
                activeOpacity={ 0.6 }
                underlayColor="#DDDDDD"
                onPress={() => {
                    click_section(item, index);
                }} >
                <Text style={[[style.text_size_20, style.text_align_center]]}>{ item }</Text>
            </TouchableHighlight>
        );
    };


    return (
        <View style={[style.flexRow]}>
            <FlatList
                data={list}
                numColumns={Math.ceil(list.length / 2)}
                extraData={selected_index}
                renderItem={({item, index}) => {
                    return (
                        renderSection(item, index)
                    );
                }}
            />
        </View>
    );
};
export default TagSelector;
