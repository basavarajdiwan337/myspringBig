import { Dimensions, StyleSheet } from "react-native";
import {PAGES} from '../Configuration/allpages';
const device = Dimensions.get('window');
export const deviceWidth = device.width;
export const deviceHeight = device.height;

export default StyleSheet.create({
  signincontainer : {
    width: deviceWidth,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: PAGES.SigninPage.signinTittleColor,
    justifyContent: 'center'
  },
  signinPageLogo:{
    height:deviceHeight*0.16,
    width:deviceHeight*0.16,
    resizeMode:'contain',
    alignSelf:PAGES.SigninPage.signInLogoposition
  },
  siginTittleText : { 
    textAlign: 'center',
    color:'black' ,
    fontFamily:PAGES.SigninPage.fontFamily
  }
});
