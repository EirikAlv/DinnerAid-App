import React, { useState  } from 'react';
import { Text, View, TouchableHighlight, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { get_sections } from '../Store/selectors';
import style from '../style';

const SelectSingleListItem = ({list, return_selected }) => {

    // const sections = useSelector(get_sections);

    const [selected_index, set_selected_index] = useState(-1);

    const click_section = (section, index) => {
        return_selected(section);
        set_selected_index(index);
    };

    const renderSection = (item, index) => {
        const styles = [style.p_20, style.genericTextInput];

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
        <View>
            <FlatList
                data={list}
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
export default SelectSingleListItem;
