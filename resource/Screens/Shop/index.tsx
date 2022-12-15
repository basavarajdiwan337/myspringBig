import React from 'react';
import { ImageBackground, View, Text, Dimensions } from 'react-native';
import Tabs from '../../components/TabNavigation/index';
import { PAGES } from '../../Configuration/allpages';
import globalStyle from '../../Configuration/SytleSheet';

const device = Dimensions.get('window');
export const deviceWidth = device.width;
export const deviceHeight = device.height;
const Shops = () =>{
    return (
<ImageBackground style={globalStyle.ImageBackgroundStyle} source={PAGES.Shop.MainStackBackground} >
    <View>
        <Text>
            Hi,well come to Shops!!!
        </Text>
        </View>
        <View style={{bottom:0,position: 'absolute',}}>
    <Tabs/>
    </View>
 
</ImageBackground>
    );
};
export default Shops;