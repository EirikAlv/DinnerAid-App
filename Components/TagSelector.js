import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { View, FlatList, TouchableHighlight, Text } from 'react-native';
import style from '../style';

const TagSelector = ({list, return_selected, selected }, ref) => {

    useEffect(() => {
		if (selected) {
            const index = list.findIndex(x => x === selected);
            set_selected_index(index);
        }

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
        const styles = [style.p_5, style.selectorItem, style.ml_5, style.mb_5];

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
        <View style={ [style.flexRow, style.flexWrap_wrap] }>
            { list.map((item, index) => {
                return renderSection(item, index);
            }) }
        </View>
    );
};
export default forwardRef(TagSelector);
