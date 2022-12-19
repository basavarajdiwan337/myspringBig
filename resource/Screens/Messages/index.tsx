import React from 'react';
import { ImageBackground, View, Text, Dimensions, Image } from 'react-native';
import Tabs from '../../components/TabNavigation/index';
import { PAGES } from '../../Configuration/allpages';
import globalStyle from '../../Configuration/SytleSheet';
import LogoutButton from '../../components/LogoutButton';

const device = Dimensions.get('window');
export const deviceWidth = device.width;
export const deviceHeight = device.height;
const Messages = () => {
    return (
        <ImageBackground style={globalStyle.ImageBackgroundStyle} source={PAGES.Feature.isSameBackground === true ? PAGES.Background.pageBackground : PAGES.Messages.MainStackBackground} >
             <View style={{ alignSelf: 'flex-end' }}>
                <LogoutButton />
            </View>
            <View style={globalStyle.rewardPageContainer}>
            <View style={globalStyle.RewardPageLogoView}>
                         <Image
                            style={globalStyle.signinPageLogo}
                            source={PAGES.SigninPage.signInLogo} />
                     
            </View>
            <Text style={globalStyle.siginTittleText}>
                              {PAGES.Messages.MessagesTittle}
                          </Text>
            </View>
            <View style={{ bottom: 0, position: 'absolute', }}>
                <Tabs />
            </View>
        </ImageBackground>
    );
};
export default Messages;