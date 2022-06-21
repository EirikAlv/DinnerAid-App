import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { View, FlatList, TouchableHighlight, Text } from 'react-native';
import style from '../style';

const TagSelector = ({list, return_selected }, ref) => {

    useImperativeHandle(ref, () => ({
        reset: () => { set_selected_index(-1); },
    }));

    const [selected_index, set_selected_index] = useState(-1);

    const click_section = (section, index) => {
        return_selected(section);
        set_selected_index(index);
    };

    const reset_selected = () => {
        set_selected_index(-1);
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
                key={`${item}${index}`}
                onPress={() => {
                    click_section(item, index);
                }} >
                <Text style={[[style.text_size_20, style.text_align_center]]}>{ item }</Text>
            </TouchableHighlight>
        );
    };


    return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            { list.map((item, index) => {
                return renderSection(item, index);
            }) }
        </View>
    );
};
export default forwardRef(TagSelector);
