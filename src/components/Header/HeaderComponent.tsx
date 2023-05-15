import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import style from '../Header/HeaderStyleSheet';
import { deviceWidth } from '../../screens/FieldsScreen';

type Props = {
  onPress?: () => void;
  hideIcon: boolean;
  Drawer?: boolean;
};

const Header = (props: Props) => {
  const {
    onPress = () => { },
    hideIcon,
    Drawer = false
  } = props;

  return (
    <View style={[style.baseView, { width: Drawer === true ? deviceWidth * 0.80 : deviceWidth }]}>
      <View style={style.topView}>
        <View style={style.terrapayLogoView}>
          <Image source={require("../../assets/terrapayLogo.png")} style={{
            width: '50%',
            height: 70, resizeMode: 'contain',
           alignSelf:'center'
          }} />
        </View>
        {hideIcon === false ?
          <View style={style.backLogoView}>
            <TouchableOpacity style={style.backLogoTouchableOpacity} onPress={() => { onPress(); }}>
              <Text style={{ color: 'black', fontWeight: 'bold' }}>{"<-"}</Text>
            </TouchableOpacity>
          </View>
          : Drawer === true ?
            <View style={style.backLogoView}>
              <TouchableOpacity style={style.backLogoTouchableOpacity} onPress={() => { onPress(); }}>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>{"X"}</Text>
              </TouchableOpacity>
            </View> : null}
      </View>

    </View>
  );
};

export default Header;
