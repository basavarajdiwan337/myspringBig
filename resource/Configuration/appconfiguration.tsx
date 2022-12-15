import React from 'react';
import { Dimensions, Image, } from 'react-native';
import { STYLE,PALETTE,FONT} from './stylevalue';
import Rewardstab from '../components/Icons/Rewards';
import Offerstab from '../components/Icons/Offers';


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
  pinEntryDescriptionfontFamily : FONT.AileronRegular,
  pinEntryDescriptionColor :PALETTE.WHITE,

  enterpintext : 'Enter Pin',
  
  pinEntryInputboxbordercolor:PALETTE.POTCO_GREEN,
  pinEntryInputboxbackgroudbcolor:PALETTE.WHITE,
  pinEntryInputboxTextcolor:PALETTE.BLACK,
  signinTextinputFontFamily: FONT.AileronRegular,
 
  pinEntryButtonText : 'Login',
  pinEntryButtonTextColor : PALETTE.BLACK,
  pinEntryButtonFontfamily : FONT.AileronRegular,
  pinEntryButtonColor : PALETTE.RED,
  pinentrycancelbuttoncolor:PALETTE.WHITE,
};

export const Rewards = {
  MainStackBackground : require("../potcoAssets/images/background.png"),
  rewardTab : <Rewardstab />
}

export const Offers = {
  MainStackBackground : require("../potcoAssets/images/background2.png"),
  Offerstab : <Offerstab />
}

export const Profile = {
  MainStackBackground : require("../potcoAssets/images/background1.png"),
}

export const Shop = {
  MainStackBackground : require("../potcoAssets/images/background.png"),
}

export const Messages = {
  MainStackBackground : require("../potcoAssets/images/background2.png"),
}