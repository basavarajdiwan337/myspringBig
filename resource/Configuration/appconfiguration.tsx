import React from 'react';
import { Dimensions, Image, } from 'react-native';
import { STYLES} from './allpages';
export const SigninPage = {
  signInLogo : require("../Assets/images/flowerPotImg.png"),
  signInLogoposition : STYLES.STYLE.center,
  signinTittle : 'Sign in',
  signinTittleColor :STYLES.PALETTE.BLACK,
  fontFamily : STYLES.FONT.AileronBold
};

export const PinEntryPage = {
  pinEntryLogo : require("../Assets/images/flowerPotImg.png"),
  pinEntryLogoposition : STYLES.STYLE.center,
  pinEntryTittle : 'well come to pinEntry page',
  pinEntryTittleColor :STYLES.PALETTE.BLUE,
  fontFamily : STYLES.FONT.AileronRegular
};
