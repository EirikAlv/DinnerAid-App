import React, { useState, useRef, useMemo } from 'react';
import { Text, View } from 'react-native';
import GroceryInputs from './GroceryInputs';
import { get_sections, get_uoms } from '../Store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { editGrocery, get_groceries } from '../Helpers/api';
import { setGroceries } from '../Store/storeSlice';

const EditGrocery = ({ item}) => {

    const dispatch = useDispatch();

    const sections = useSelector(get_sections);
    const uoms = useSelector(get_uoms);

    const [grocery_name, set_grocery_name] = useState(item.norwegian);
    const [section, set_section] = useState(item.section);
    const [standard_quantity, set_standard_quantity] = useState(item.standard_quantity);
    const [unit_of_mesure, set_unit_of_mesure] = useState(item.uom);

    const can_save = useMemo(() => {
        return grocery_name.length > 0
            && section.length > 0
            && unit_of_mesure.length > 0;
    }, [grocery_name, section, unit_of_mesure]);

    const save_grocery = async () => {
        const edited = {
            norwegian: grocery_name,
            section: section,
            standard_quantity: standard_quantity,
            uom: unit_of_mesure,
        };

        const res = await editGrocery({ original: item, edited: edited });
        await reload_groceries();
    };

    const reload_groceries = async () => {
        const grocery_list = await get_groceries();
        dispatch(setGroceries(grocery_list));
    };

    return (
        <View>
            <GroceryInputs
                disable_name={ true }
                grocery_name={ grocery_name }
                set_grocery_name={ set_grocery_name }
                section={ section }
                section_ref={ null }
                sections={ sections }
                set_section={ set_section }
                standard_quantity={ standard_quantity }
                set_standard_quantity={ set_standard_quantity }
                uom={ unit_of_mesure }
                uom_ref={ null }
                uoms={ uoms }
                set_unit_of_mesure={ set_unit_of_mesure }
                can_save={ can_save }
                save_function={ save_grocery }
            />
        </View>
    );
};
export default EditGrocery;
