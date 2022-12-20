import React from 'react';
import { ImageBackground, View, Text, Dimensions, Image } from 'react-native';
import Button from '../../components/Button';
import LogoutButton from '../../components/LogoutButton';
import { PAGES } from '../../Configuration/allpages';
import globalStyle from '../../Configuration/SytleSheet';

const device = Dimensions.get('window');
export const deviceWidth = device.width;
export const deviceHeight = device.height;
const RegistrationForm = ({navigation}:any) => {
    const SigninUp =()=>{
        if(PAGES.Feature.isOneLocation === true){
            navigation.navigate("Messages");
        }else{
            navigation.navigate("Shops");
        }
    }
    return (
        <ImageBackground style={globalStyle.ImageBackgroundStyle} source={PAGES.Feature.isSameBackground === true ? PAGES.Background.pageBackground : PAGES.Profile.MainStackBackground}>
            <View style={{marginTop:'20%'}}>          
              <View style={globalStyle.rewardPageContainer}>
            <View style={globalStyle.RewardPageLogoView}>
                         <Image
                            style={globalStyle.signinPageLogo}
                            source={PAGES.SigninPage.signInLogo} />
                     
            </View>
            <Text style={globalStyle.siginTittleText}>
                              {PAGES.RegistrationForm.RegistrationFormTittle}
                          </Text>
                          <View style={globalStyle.continueButtonView}>
                    <Button
                        text={PAGES.RegistrationForm.Signup}
                        onPress={() => {
                            SigninUp()
                        }}
                        customStyleButton={globalStyle.buttonTouchView}
                        cusomStyleText={globalStyle.buttonFont}
                    />
                </View>
            </View>
            </View>

        </ImageBackground>
    );
};
export default RegistrationForm;