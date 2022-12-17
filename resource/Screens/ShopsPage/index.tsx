import React from "react";
import { Text, View, ImageBackground, ScrollView } from 'react-native';
import globalStyle from '../../Configuration/SytleSheet';
import { PAGES } from '../../Configuration/allpages';
import Button from "../../components/Button";
import Register from "../Register";
import NonRegister from "../NonRegister";
import { deviceWidth } from "../Signin";

const Shops = ({ navigation }: any) => {
    const topinEntryPage = () => {
        navigation.navigate('PinEntry');
    }
    const signinEntryPage = () => {
        navigation.navigate('Signin');
    }


    return (
        <ImageBackground source={PAGES.ShopsPage.Shopspagebackgroud} style={globalStyle.Shopspagebackgroud}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <Text style={globalStyle.registerTittleText}>{PAGES.ShopsPage.RegisterTitle}</Text>
            </View>
            <View >
                <Register/>
            </View>


            <View >
                <Text style={globalStyle.NonregisterTittleText}>{PAGES.ShopsPage.NonRegisterTitle}</Text>
            </View>
            <View >
                <NonRegister/>
            </View>


            </ScrollView>

        </ImageBackground>
    );

};

export default Shops;