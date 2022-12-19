import { useNavigation } from '@react-navigation/native';
import React, { memo } from 'react';
import { View,Image, TouchableOpacity } from 'react-native';
import { PAGES } from '../../Configuration/allpages';
import globalStyle from '../../Configuration/SytleSheet';

const LogoutButton = () => {
    const Navigation = useNavigation();
    const onPressLogout = () => {
        Navigation.navigate('Shops');
    }
    return(
        <View style={{justifyContent:'center'}}>
        <TouchableOpacity onPress={onPressLogout}>
        <Image
            style={globalStyle.logoutLogo}
            source={PAGES.SigninPage.signInLogo} />
        </TouchableOpacity>
    </View>
    );
};

export default memo(LogoutButton);