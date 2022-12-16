import { useNavigation, useRoute } from '@react-navigation/native';
import React, { memo } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import globalStyle, { deviceHeight, deviceWidth } from '../../Configuration/SytleSheet';
import Rewards from '../../components/Icons/Rewards';
import { PAGES } from '../../Configuration/allpages';

const TabNavigation = () => {
    const Navigation = useNavigation();
    let route = useRoute();
    return (
        <View style={{ flexDirection: 'row', width: deviceWidth,flex:1 }}>
            <TouchableOpacity style={globalStyle.tabbarStyle} onPress={() => {
                Navigation.navigate('Rewards');
            }}>
                <View style={{height:deviceHeight*0.047}}>
                    { route.name === 'Rewards' ? PAGES.Rewards.RewardsActive : PAGES.Rewards.rewardTab}
                </View>
                <View style={{height:deviceHeight*0.025}}>
                <Text>
                    Rewards
                </Text>
                </View>
                
            </TouchableOpacity>
            <TouchableOpacity style={[globalStyle.tabbarStyle, { backgroundColor: 'red' }]} onPress={() => {
                Navigation.navigate('Offers');
            }}>
                 <View style={{height:deviceHeight*0.047}}>
                    {PAGES.Offers.Offerstab}
                </View>
                <View style={{height:deviceHeight*0.025}}>
                <Text>
                    Offers
                </Text>
                </View>
               
            </TouchableOpacity>
            <TouchableOpacity style={[globalStyle.tabbarStyle, { backgroundColor: 'orange' }]} onPress={() => {
                Navigation.navigate('Profile');
            }}>
                 <View style={{height:deviceHeight*0.047}}>
                    <Rewards />
                </View>
                <View style={{height:deviceHeight*0.025}}>
                <Text>
                    Profile
                </Text>
                </View>
              
            </TouchableOpacity>
            <TouchableOpacity style={[globalStyle.tabbarStyle, { backgroundColor: 'pink' }]} onPress={() => {
                Navigation.navigate('Shop');
            }}>
                 <View style={{height:deviceHeight*0.047}}>
                    <Rewards />
                </View>
                <View style={{height:deviceHeight*0.025}}>
                <Text>
                    Shops
                </Text>
                </View>
               
            </TouchableOpacity>
            <TouchableOpacity style={[globalStyle.tabbarStyle, { backgroundColor: 'green' }]} onPress={() => {
                Navigation.navigate('Messages');
            }}>
                 <View style={{height:deviceHeight*0.047}}>
                    <Rewards />
                </View>
                <View style={{height:deviceHeight*0.025}}>
                <Text>
                    Messages
                </Text>
                </View>
                
            </TouchableOpacity>

        </View>
    );
}
export default memo(TabNavigation);