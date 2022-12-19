import React from 'react'
import { View, Text, SafeAreaView, Button, Dimensions, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import globalStyle from '../../Configuration/SytleSheet';
import { PAGES } from '../../Configuration/allpages';
import ComponentButton from '../../components/Button';
import { ImageBackground } from 'react-native';
import { TextInput } from 'react-native';
const device = Dimensions.get('window');
export const deviceWidth = device.width;
export const deviceHeight = device.height;
const Signin = ({ navigation }: any) => {

    const topinEntryPage = () => {
        navigation.navigate('PinEntry');
    }
    const route = useRoute();
    console.log("route=======>", route.name,);

    return (
        <ImageBackground source={PAGES.Feature.isSameBackground === true ?  PAGES.Background.pageBackground : PAGES.SigninPage.signInBackground } style={globalStyle.signinBackground}>

            <View style={globalStyle.signincontainer}>
                <Text style={globalStyle.siginTittleText}>
                    {PAGES.SigninPage.signinTittle}
                </Text>
                <View style={globalStyle.signinLogoView}>
                    <Image
                        style={globalStyle.signinPageLogo}
                        source={PAGES.SigninPage.signInLogo} />
                </View>

                

                <TextInput
                    style={globalStyle.textinputStyle}

                />
                <View style={globalStyle.continueButtonView}>
                    <ComponentButton
                        text={PAGES.SigninPage.signinButtonText}
                        onPress={() => {
                            topinEntryPage();
                        }}
                        customStyleButton={globalStyle.buttonTouchView}
                        cusomStyleText={globalStyle.buttonFont}
                    />
                </View>
                
            </View>
        </ImageBackground>
    );
};

export default Signin;