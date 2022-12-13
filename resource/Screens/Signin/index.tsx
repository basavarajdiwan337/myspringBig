import React from 'react'
import { View, Text, SafeAreaView, Button, Dimensions, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
const device = Dimensions.get('window');
export const deviceWidth = device.width;
export const deviceHeight = device.height;
import globalStyle  from '../../Configuration/SytleSheet';
import { PAGES } from '../../Configuration/allpages';
const Signin = ({ navigation }: any) => {
    const onPressButton = () => {
        navigation.navigate('PinEntry');
    }
 

    const route = useRoute();
    console.log("route=======>", route.name);

    return (
        <SafeAreaView style={globalStyle.signincontainer}>
            <View style={{ backgroundColor: 'blue', flex: 1,width:deviceWidth,justifyContent:'center' }}>
           <Image style={globalStyle.signinPageLogo} source={PAGES.SigninPage.signInLogo}/>
          
            </View>
            <View style={{ flex: 1,backgroundColor:'yellow',width:deviceWidth,justifyContent:'center' }}>
                <Text style={globalStyle.siginTittleText}>
                   {PAGES.SigninPage.signinTittle}
                </Text>
                <Button
                    title="Next Page"
                    color="#f194ff"
                    onPress={onPressButton}
                />
            </View>
            <View style={{ flex: 1,backgroundColor:'green',width:deviceWidth,justifyContent:'center' }}>
                <Text style={{ textAlign: 'center',color:'black' }}>
                    Hi, Well come Signin.
                </Text>
                


            </View>

        </SafeAreaView>
    );
};

export default Signin;