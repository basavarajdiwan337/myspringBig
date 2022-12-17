import React, { useState } from "react";
import { ImageBackground } from "react-native";
import { Text, View, TouchableWithoutFeedback, Image } from 'react-native';
import globalStyle from '../../Configuration/SytleSheet';
import { PAGES } from '../../Configuration/allpages';
import Signin from "../../Screens/Signin";
import { useNavigation } from '@react-navigation/native';
import PinEntry from "../../Screens/PinEntry";
import { TouchableOpacity } from "react-native";
type Props = {
    name : String;

}
const ShopPreview = (props: Props) => {
    const { name } = props;
      
    const navigation = useNavigation();
    function onPressHandler() {
        navigation.navigate('Messages');
    }
    function onPressOut() {
        setPressed(false);
    }

    function onPressIn() {
        setPressed(true);
    }
    const [isPressed, setPressed] = useState<boolean>(false);

    let wrap: any;
    {
        (wrap =
            <View style={isPressed ? [globalStyle.Wrap, globalStyle.WrapActive] : globalStyle.Wrap}>
                <Image
                    style={globalStyle.shopsmerchantimage}
                    source={PAGES.SigninPage.signInLogo} />
                <Text style={isPressed ? [globalStyle.name, globalStyle.nameActive] : globalStyle.name}>
                    
                    {name}
                </Text>
            </View>
        )
    }
   
    return (
        <TouchableOpacity
            onPress={onPressHandler}
            // @ts-ignore
            activeOpacity={6}
            onPressOut={onPressOut}
            onPressIn={onPressIn}>
            {wrap}
            
        </TouchableOpacity>
    )

};

export default ShopPreview;

