import React, { memo } from "react";
import { TouchableOpacity } from "react-native";
import {View,Text} from 'react-native';
import globalStyle from '../../Configuration/SytleSheet'

type Props = {
text : string;
onPress?: () => void;
}

const Button = (props: Props) => {
const{text, onPress =()=>{}}=props;
    return (
        <View style={globalStyle.buttonView}>
            <TouchableOpacity onPress={onPress} style={globalStyle.buttonTouchView}>
                <Text style={globalStyle.buttonFont}>
                 {text}
                </Text>
            </TouchableOpacity>

        </View>
    );
}
export default Button;