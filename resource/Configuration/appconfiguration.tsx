import React from 'react';
import { Dimensions, Image, } from 'react-native';
import { STYLE,PALETTE,FONT} from './stylevalue';
export const SigninPage = {
  signInBackground : require("../potcoAssets/images/background.png"),
  signinTittle : 'Log in',
  signinTittleColor : PALETTE.WHITE,
  signinTittlefontFamily : FONT.AileronBold,
  signInLogo : require("../potcoAssets/images/logo.png"),
  signInLogoposition : STYLE.center,
  signDiscription : 'Enter your phone number',
  signDiscriptionColor : PALETTE.WHITE,
  signDiscriptionFontfamily : FONT.AileronBold,
  signTextinputBorderColor : PALETTE.POTCO_GREEN,
  signTextinputBackgroundColor : PALETTE.WHITE,
  signTextinputTextColor:PALETTE.BLACK,
  signinTextinputFontFamilty: FONT.AileronBold,
  signinButtonColor : PALETTE.POTCO_GREEN,
  signinButtonText : 'Continue',
  signinButtonTextColor : PALETTE.WHITE,
  signinButtonFontfamily : FONT.AileronBold,
  
};

export const PinEntryPage = {
  pinpagebackgroud: require("../potcoAssets/images/background1.png"),
  pinpageTittle : 'Log In',
  pinpageTittleColor :PALETTE.WHITE,
  pinTitlefontFamily : FONT.AileronBold,
  pinEntryLogo : require("../potcoAssets/images/logo.png"),
  pinEntryLogoposition : STYLE.center,
  pinEntryDescription : 'A temporary pin has been sent to your phone and email (if applicable) - please enter it below to proceed',
  enterpintext : 'Enter Pin',
  pinEntryDescriptionfontFamily : FONT.AileronRegular,
  pinEntryDescriptionColor :PALETTE.WHITE,
  pinEntryInputboxposition: STYLE.center,
  pinEntryInputboxbordercolor:PALETTE.POTCO_GREEN,
  pinEntryInputboxbackgroudbcolor:PALETTE.WHITE,
  signinTextinputFontFamily: FONT.AileronRegular,
  pinentrycancelbuttoncolor:PALETTE.POTCO_GREEN,
  pinEntryInputboxTextcolor:PALETTE.BLACK,
  pinEntryButtonText : 'Login',
  pinEntryButtonTextColor : PALETTE.WHITE,
  pinEntryButtonFontfamily : FONT.AileronBold,
};
