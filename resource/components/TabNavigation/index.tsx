import { useNavigation } from '@react-navigation/native';
import React, { memo } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import globalStyle, { deviceWidth } from '../../Configuration/SytleSheet';
import Rewards from '../../components/Icons/Rewards';
import { PAGES } from '../../Configuration/allpages';

const TabNavigation = () => {
    const Navigation = useNavigation();
    return (
        <View style={{ flexDirection: 'row', width: deviceWidth }}>
            <TouchableOpacity style={globalStyle.tabbarStyle} onPress={() => {
                Navigation.navigate('Rewards');
            }}>
                <View style={{marginTop:'20%',}}>
                    {PAGES.Rewards.rewardTab}
                </View>
                <Text>
                    Rewards
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[globalStyle.tabbarStyle, { backgroundColor: 'red' }]} onPress={() => {
                Navigation.navigate('Offers');
            }}>
                 <View>
                    {PAGES.Offers.Offerstab}
                </View>
                <Text>
                    Offers
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[globalStyle.tabbarStyle, { backgroundColor: 'orange' }]} onPress={() => {
                Navigation.navigate('Profile');
            }}>
                 <View style={{marginTop:'20%'}}>
                    <Rewards />
                </View>
                <Text>
                    Profile
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[globalStyle.tabbarStyle, { backgroundColor: 'pink' }]} onPress={() => {
                Navigation.navigate('Shop');
            }}>
                 <View style={{marginTop:'20%'}}>
                    <Rewards />
                </View>
                <Text>
                    Shops
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[globalStyle.tabbarStyle, { backgroundColor: 'green' }]} onPress={() => {
                Navigation.navigate('Messages');
            }}>
                 <View style={{marginTop:'20%'}}>
                    <Rewards />
                </View>
                <Text>
                    Messages
                </Text>
            </TouchableOpacity>

        </View>
    );
}
export default memo(TabNavigation);