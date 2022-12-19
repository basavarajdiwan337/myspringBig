import React from 'react';
import { View, Text, SafeAreaView, Dimensions, Button, ImageBackground, Image, TextInput } from 'react-native';
const device = Dimensions.get('window');
export const deviceWidth = device.width;
export const deviceHeight = device.height;
import globalStyle from '../../Configuration/SytleSheet';
import { PAGES } from '../../Configuration/allpages';
import ComponentButton from '../../components/Button';


const PinEntry = ({ navigation }: any) => {
    const toMerchantListPage = () => {
        navigation.navigate('Shops');
    }
    const tosigninPage = () => {
        navigation.navigate('Signin');
    }
    return (
        <ImageBackground source={PAGES.Feature.isSameBackground === true ?  PAGES.Background.pageBackground : PAGES.PinEntryPage.pinpagebackgroud} style={globalStyle.pinpagebackgroud}>
            <View style={globalStyle.pinpagecontainer}>
                <Text style={globalStyle.pinpageTittle}>
                    {PAGES.PinEntryPage.pinpageTittle}
                </Text>
                <View style={globalStyle.pinpageLogoView}>

                    <Image style={globalStyle.pinPageLogo} source={PAGES.PinEntryPage.pinEntryLogo} />
                </View>
                <View style={globalStyle.pinpageDescriptionview}>
                    <Text style={globalStyle.pinpageDescription}>
                        {PAGES.PinEntryPage.pinEntryDescription}
                    </Text>
                </View>
                <Text style={globalStyle.enterpintext}>{PAGES.PinEntryPage.enterpintext}</Text>
                <TextInput
                    style={globalStyle.pinentryinputBox}
                />
                <View style={globalStyle.continueButtonView}>
                    <ComponentButton
                        text={PAGES.PinEntryPage.pinEntryButtonText}
                        onPress={() => {
                            toMerchantListPage();
                        }}
                        customStyleButton={globalStyle.pinbuttonTouchView}
                        cusomStyleText={globalStyle.pinbuttonFont}
                    />
                </View>
                <Text style={globalStyle.pinentrycancelbuttoncolor} onPress={tosigninPage}>cancel</Text>
            </View>
        </ImageBackground>


    );
};

export default PinEntry;