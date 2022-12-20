import React, { useState } from 'react';
import { Dimensions, Image, View, } from 'react-native';
import { STYLE,PALETTE,FONT} from './stylevalue';
import InstaJaneRewardIcon from '../components/Icons/instaJaneRewardIcon';
import InstaJaneRewardIconActive from '../components/Icons/instaJaneRewardIconActive';
import Offerstab from '../components/Icons/Offers';
import * as RNFS from 'react-native-fs';
let nArray :any=[];

export const Feature = {
  isGeofence : false,
  isOneLocation : false,
  isSameBackground : false,
  isReregistration : false,
}

export const Background = {
  pageBackground : require("../potcoAssets/images/background1.png"),
}

export const SigninPage = {
  
  signInBackground : require("../potcoAssets/images/background.png"),
  signinTittlePosition :[1,'signinTittlePosition'],
  signinTittle : 'Log In',
  signinTittleColor : PALETTE.WHITE,
  signinTittlefontFamily : FONT.AileronRegular,

  signinLogoPagePosition :[2,'signinLogoPagePosition'],
  signInLogo : require("../potcoAssets/images/logo.png"),
  LogoPos : STYLE.MIDDLE,
  signInLogoposition : STYLE.CENTER,
  

  signDiscriptionPosition :[3,'signDiscriptionPosition'],
  signDiscription : 'Enter your phone number',
  signDiscriptionColor : PALETTE.WHITE,
  signDiscriptionFontfamily : FONT.AileronBold,

  signininputBoxPosition : [4,'signininputBoxPosition'],
  signTextinputBorderColor : PALETTE.POTCO_GREEN,
  signTextinputBackgroundColor : PALETTE.WHITE,
  signTextinputTextColor:PALETTE.BLACK,
  signinTextinputFontFamilty: FONT.AileronBold,

  signinButtonPosition : [5,'signinButtonPosition'],
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
  pinEntryLogoposition : STYLE.CENTER,

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

export const ShopsPage = {
  Shopspagebackgroud: require("../potcoAssets/images/background.png"),
  RegisterTitle:'Select your state program',
  registerTittleTextcolor:PALETTE.WHITE,
  registerTittleTextfontfamily:FONT.AileronBold,
  NonRegisterTitle :'Click below to register for one of the following state programs',
  NonRegisterTitleTextcolor:PALETTE.WHITE,
  NonRegisterTitleTextfontfamily:FONT.AileronBold,
  WrapbackgroundColor:PALETTE.POTCO_GREEN,
  WrapBorderColor : PALETTE.WHITE,
  WrapbackgroundColorActive : PALETTE.TRANSPARENT,
  WrapNameTextcolor: PALETTE.WHITE,
  WrapNameTextcolorfontfamily:FONT.AileronBold,
  WrapNameTextcolorActive : PALETTE.RED,
  WrapNameTextcolorfontfamilyActive:FONT.AileronBold,
};

export const Rewards = {
  MainStackBackground : require("../potcoAssets/images/background.png"),
  rewardTab : <InstaJaneRewardIcon />,
  RewardsActive : <InstaJaneRewardIconActive />,
  RewardsTittle : 'Rewards',
}

export const Offers = {
  MainStackBackground : require("../potcoAssets/images/background2.png"),
  Offerstab : <Offerstab />,
  OffersTittle : 'Offers',

}

export const Profile = {
  MainStackBackground : require("../potcoAssets/images/background1.png"),
  ProfileTittle : 'Profile',
}

export const Shop = {
  MainStackBackground : require("../potcoAssets/images/background.png"),
  ShopTittle : 'Shop Online',

}

export const Messages = {
  MainStackBackground : require("../potcoAssets/images/background2.png"),
  MessagesTittle : 'Messages',

}

export const RegistrationForm = {
  MainStackBackground : require("../potcoAssets/images/background2.png"),
  RegistrationFormTittle : 'Registration Form',
  Signup :'Sign up'

}


export const Logout = {
  Image : require("../potcoAssets/images/logo.png"),
}