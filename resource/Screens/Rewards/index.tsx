import React from 'react';
import { ImageBackground, View, Text, Dimensions } from 'react-native';
import Tabs from '../../components/TabNavigation/index';
import { PAGES } from '../../Configuration/allpages';
import globalStyle from '../../Configuration/SytleSheet';
const device = Dimensions.get('window');
export const deviceWidth = device.width;
export const deviceHeight = device.height;
const Rewards = () =>{
    return (
<ImageBackground style={globalStyle.ImageBackgroundStyle} source={PAGES.Rewards.MainStackBackground} >
    <View>
        <Text>
            Hi,well come to Rewards!!!
        </Text>
    </View>
        <View style={{bottom:0,position: 'absolute',}}>
    <Tabs/>
    </View>
  
</ImageBackground>
    );
};
export default Rewards;