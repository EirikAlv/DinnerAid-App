
import React, { useMemo, useRef, useState  } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import style from '../style';
import { get_sections, get_uoms } from '../Store/selectors';
import TagSelector from '../Components/TagSelector';
import Toast from 'react-native-toast-message';
import { get_groceries, saveGrocery } from '../Helpers/api';
import { setGroceries } from '../Store/storeSlice';

const CreateGrocery = () => {

    const section_ref = useRef();
    const uom_ref = useRef();

    const dispatch = useDispatch();

    const sections = useSelector(get_sections);
    const uoms = useSelector(get_uoms);

    const [grocery_name, set_grocery_name] = useState('');
    const [section, set_section] = useState('');
    const [standard_quantity, set_standard_quantity] = useState(1);
    const [unit_of_mesure, set_unit_of_mesure] = useState('');

    const can_save = useMemo(() => {
        return grocery_name.length > 0
            && section.length > 0
            && unit_of_mesure.length > 0;
    }, [grocery_name, section, unit_of_mesure]);

    const save_grocery = async () => {
        const grocery = {
            norwegian: grocery_name,
            english: '',
            section: section,
            uom: unit_of_mesure,
            standard_quantity: standard_quantity,
        };

        const res = await saveGrocery(grocery);

        Toast.show({
            type: 'success',
            text1: res,
        });

        reset_grocery();
        await reload_groceries();
    };

    const reload_groceries = async () => {
        const grocery_list = await get_groceries();
        dispatch(setGroceries(grocery_list));
    };

    const reset_grocery = () => {
        set_grocery_name('');
        uom_ref.current.reset();
        section_ref.current.reset();
        set_standard_quantity(1);
        set_unit_of_mesure('');
    };

    return (
        <View>
            <Text>Name: </Text>
            <TextInput
                value={ grocery_name }
                onChangeText={ set_grocery_name }
                style={ [style.genericTextInput, style.m_10] } />
            <Text>Section: </Text>
            <TagSelector ref={section_ref} list={ sections } return_selected={ set_section }/>
            <Text>Standard quantity: </Text>
            <TextInput
                value={ standard_quantity.toString() }
                keyboardType="numeric"
                onChangeText={ set_standard_quantity }
                style={ [style.genericTextInput, style.m_10] } />
            <Text>Unit of mesure: </Text>
            <TagSelector ref={ uom_ref } list={ uoms } return_selected={ set_unit_of_mesure }/>
            <Button
                disabled={ !can_save }
                onPress={() => {
                    save_grocery();
                }}
                title={'Save'}
            />
        </View>
    );
};

export default CreateGrocery;
