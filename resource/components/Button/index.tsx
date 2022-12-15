import React, { memo } from "react";
import { StyleProp, TouchableOpacity } from "react-native";
import {View,Text} from 'react-native';
import globalStyle from '../../Configuration/SytleSheet'

type Props = {
text : string;
onPress?: () => void;
customStyleButton?: StyleProp<any>;
cusomStyleText?: StyleProp<any>;
}

const Button = (props: Props) => {
const{text, onPress =()=>{},customStyleButton = null,cusomStyleText = null}=props;
    return (
        <View style={globalStyle.buttonView}>
            <TouchableOpacity onPress={onPress} style={customStyleButton}>
                <Text style={cusomStyleText}>
                 {text}
                </Text>
            </TouchableOpacity>

        </View>
    );
}
export default memo(Button);