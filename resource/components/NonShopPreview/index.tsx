import React, { useState } from "react";
import { ImageBackground, StyleProp ,Image, TouchableOpacity} from "react-native";
import {Text,View,TouchableWithoutFeedback} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyle from '../../Configuration/SytleSheet';
import { PAGES } from '../../Configuration/allpages';
type Props= {
    name : string;
}
const NonShopPreview = (props :Props) => {
      const [isPressed, setPressed] = useState<boolean>(false);
      const navigation = useNavigation();
    const{name,} = props;

        function onPressHandler() {
           navigation.navigate('RegistrationForm');
          }
    
        function onPressOut() {
            setPressed(false);
          }
        
          function onPressIn() {
            setPressed(true);
          }

        let wrap :any;
        {( wrap = <View style={isPressed ? [globalStyle.Wrap, globalStyle.WrapActive] : globalStyle.Wrap}>
          <Image
              style={globalStyle.shopsmerchantimage}
              source={PAGES.SigninPage.signInLogo} />
          <Text style={isPressed ? [globalStyle.name, globalStyle.nameActive] : globalStyle.name}>
              {name}
          </Text>
      </View>

        )}
        return(
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

export default NonShopPreview;

