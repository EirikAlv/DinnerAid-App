import React from 'react';
import { TouchableHighlight, View, Text, Button } from 'react-native';
import { NAME, SECTION, STANDARD_QUANTITY, UOM } from '../Helpers/constants';
import style from '../style';

const CreateGroceryFooter = ({button_tittle, press_button}) => {

    return (
        <View>
            <Button
                onPress={() => {
                    press_button();
                }}
                title={button_tittle}
            />
        </View>
    );
};
export default CreateGroceryFooter;
