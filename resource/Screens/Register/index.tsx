import React from "react";
import { ImageBackground } from "react-native";
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import ShopPreview from "../../components/ShopPreview";


const Register = () => {
    var nArray =['PotCo Location #1','PotCo Location #2','PotCo Location #3'];
    return (
        nArray.map((item) => (
            <View style={{ width: '100%', marginTop: '10%' }}>
                <ShopPreview name={item} />
            </View>
        ))

    );

};

export default Register;

