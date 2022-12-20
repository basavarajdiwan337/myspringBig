import React from "react";
import { ImageBackground } from "react-native";
import {Text,View,TouchableWithoutFeedback} from 'react-native';
import NonShopPreview from "../../components/NonShopPreview";
import ShopPreview from "../../components/ShopPreview";


const NonRegister = () => {
    var nArray =['PotCo Location #4','PotCo Location #5','PotCo Location #6'];
        return(
            nArray.map((item,index) => (
                <View style={{ width: '100%', marginTop: '10%' }} key={index}>
                <NonShopPreview name={item}/>
              </View>
            ))
               
           
        )

};

export default NonRegister;

