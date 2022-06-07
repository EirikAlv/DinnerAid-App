
import React, { useState  } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import CreateGroceryFooter from '../Components/CreateGroceryFooter';
import NameInput from '../Components/NameInput';
import SelectSingleListItem from '../Components/SelectSingleListItem';
import { NAME, SECTION, UOM } from '../Helpers/constants';
import style from '../style';
import { get_sections, get_uoms } from '../Store/selectors';
import TagSelector from '../Components/TagSelector';


const CreateGrocery = () => {

    const sections = useSelector(get_sections);
    const uoms = useSelector(get_uoms);

    const [state, set_state] = useState(SECTION);
    const [section, set_section] = useState('');
    const [grocery_name, set_grocery_name] = useState('');
    const [unit_of_mesure, set_unit_of_mesure] = useState('');

    const next_state = () => {
        switch (state) {
            case SECTION:
                set_state(NAME);
                break;
            case NAME:
                set_state(UOM);
                break;
            default:
                break;
        }
    };

    const render_selected_section = () => {
        switch (state) {
            case SECTION:
                return (
                    <TagSelector list={ sections } return_selected={ set_section }/>
                );
            case NAME:
                return (
                    <NameInput return_name={ set_grocery_name }/>
                );
            case UOM:
                return (
                    <SelectSingleListItem list={ uoms } return_selected={ set_unit_of_mesure }/>
                );
            default:
                break;
        }
    };

    return (
        <View style={[style.flexOne]}>
            { render_selected_section() }
            <View style={[style.footer]}>
                <CreateGroceryFooter button_tittle={ 'click me' } press_button={next_state}/>
            </View>
        </View>
    );
};

export default CreateGrocery;
