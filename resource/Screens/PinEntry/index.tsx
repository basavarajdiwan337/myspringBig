import React from 'react';
import { View, Text, SafeAreaView, Dimensions, Button } from 'react-native';
const device = Dimensions.get('window');
export const deviceWidth = device.width;
export const deviceHeight = device.height;
import { PAGES } from '../../Configuration/allpages';

const PinEntry = ({ navigation }:any) => {
const onPressButton = () =>{
    navigation.navigate('Signin');
}
    return (
        <SafeAreaView style={{ width: deviceWidth,
            alignSelf: 'center',
            alignContent: 'center',
            alignItems: 'center',
            flex: 1,
            backgroundColor: 'gray',
            justifyContent:'center'}}>
            <View>
                <Text>
                   {PAGES.PinEntryPage.pinEntryTittle}
                </Text>
                <Button
        title="Previous Page"
        color="#f194ff"
        onPress={onPressButton}
      />
            </View>
        </SafeAreaView>
    );
};

export default PinEntry;