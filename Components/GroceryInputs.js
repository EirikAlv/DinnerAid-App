import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import style from '../style';
import theme from '../theme';
import TagSelector from './TagSelector';

const GroceryInputs = ({
    disable_name,
    grocery_name,
    set_grocery_name,
    section,
    section_ref,
    sections,
    set_section,
    standard_quantity,
    set_standard_quantity,
    uom,
    uom_ref,
    uoms,
    set_unit_of_mesure,
    can_save,
    save_function,
}) => {
    return (
        <View>
            <Text style={[style.text_align_center, style.text_size_20, style.mt_5]}>
                { 'Name: ' }
            </Text>
            <TextInput
                editable={ !disable_name }
                value={ grocery_name }
                onChangeText={ set_grocery_name }
                style={ [style.genericTextInput, style.m_10] } />
            <Text style={[style.text_align_center, style.text_size_20, style.mb_5]}>
                { 'Section: ' }
            </Text>
            <TagSelector
                ref={ section_ref }
                list={ sections }
                return_selected={ set_section }
                selected={ section } />
            <Text style={[style.text_align_center, style.text_size_20, style.mt_5]}>
                { 'Standard quantity: ' }
            </Text>
            <TextInput
                value={ standard_quantity.toString() }
                keyboardType="numeric"
                onChangeText={ set_standard_quantity }
                style={ [style.genericTextInput, style.m_10] } />
            <Text style={[style.text_align_center, style.text_size_20, style.mb_5]}>
                { 'Unit of mesure: ' }
            </Text>
            <TagSelector
                ref={ uom_ref }
                list={ uoms }
                return_selected={ set_unit_of_mesure } 
                selected={ uom } />
            <View style={[style.align_center]}>
                <Pressable
                    disabled={ !can_save }
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? theme.BUTTON_PRESSED_COLOR : theme.BACKGROUND_COLOR,
                        },
                        style.genericButton,
                        style.b_rad_30,
                        !can_save ? { backgroundColor: theme.BUTTON_DISABLED_COLOR, borderWidth: 0} : null,
                    ]}
                    onPress={() => {
                        save_function();
                    }}>
                        <Text style={[style.text_size_20, style.p_10]}>
                            { 'Save' }
                        </Text>
                </Pressable>
            </View>
        </View>
    );
};
export default GroceryInputs;
