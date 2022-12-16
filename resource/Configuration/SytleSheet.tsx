import { Dimensions, FlexAlignType, StyleSheet } from "react-native";
import { PAGES } from '../Configuration/allpages';
import { FONT, PALETTE } from "./stylevalue";
const device = Dimensions.get('window');
export const deviceWidth = device.width;
export const deviceHeight = device.height;

export default StyleSheet.create({
  //signin page
  signinBackground: {
    width: deviceWidth,
    height: deviceHeight,
  },
  signincontainer: {
    width: deviceWidth,
    height:deviceHeight,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  signinLogoView : {
    width:deviceWidth,
    height:deviceHeight*0.20,
    marginTop:'5%',
  },

  signinPageLogo: {
    width:deviceWidth *0.35,
    height:deviceHeight*0.20,
    resizeMode: 'contain',
    alignSelf: PAGES.SigninPage.signInLogoposition as FlexAlignType,
  },
  siginTittleText: {
    textAlign: 'center',
    color: PAGES.SigninPage.signinTittleColor,
    fontFamily: PAGES.SigninPage.signinTittlefontFamily,
    fontSize: 25,
    marginTop:'5%'
  },
  siginDescription: {
    textAlign: 'center',
    color: PAGES.SigninPage.signDiscriptionColor,
    fontFamily: PAGES.SigninPage.signDiscriptionFontfamily,
    fontSize: 20,
    marginTop:'6%'
  },
  textinputStyle:{
      height: deviceHeight*0.06,
      borderWidth: 1,
      borderColor:PAGES.SigninPage.signTextinputBorderColor,
      width:deviceWidth*0.70,
      marginTop:'10%',
      borderRadius:5,
      backgroundColor:PAGES.SigninPage.signTextinputBackgroundColor,
      color:PAGES.SigninPage.signTextinputTextColor,
      fontFamily:PAGES.SigninPage.signinTextinputFontFamilty,
      fontSize:18
  },
  continueButtonView:{
       marginTop:'8%',
       
  },
  
   //PinEntry Page Styles
   pinpagecontainer : {
    width:deviceWidth,
    alignContent:'center',
    alignSelf:'center',
    alignItems:'center',
    flex:1,
  },
  pinpagebackgroud:{
    height:deviceHeight,
    width:deviceWidth,
  },
  pinpageTittle:{
    textAlign: 'center',
    color: PAGES.PinEntryPage.pinpageTittleColor,
    fontFamily: PAGES.PinEntryPage.pinTitlefontFamily,
    fontSize: 25,
    marginTop:'5%'
   
  },
  pinpageLogoView:{
    justifyContent:'center',
    alignSelf:'center',
    width:deviceWidth,
    height:deviceHeight*0.20,
    marginTop:'5%'
  },
  pinPageLogo:{
    width:'100%',
    height:'100%',
    resizeMode: 'contain',

  },
  pinpageDescriptionview:{
    width:deviceWidth*0.80,
    justifyContent:'center',
    alignSelf:'center',
    marginTop:'15%',
  },

  pinpageDescription:{
    textAlign: 'center',
    fontFamily: PAGES.PinEntryPage.pinEntryDescriptionfontFamily,
    color:  PAGES.PinEntryPage.pinEntryDescriptionColor,
    fontSize: 16,
  },
  pinentryinputBox:{
  height: deviceHeight*0.06,
      borderWidth: 1,
      borderColor:PAGES.PinEntryPage.pinEntryInputboxbordercolor,
      width:deviceWidth*0.70,
      marginTop:'2%',
      borderRadius:5,
      backgroundColor:PAGES.PinEntryPage.pinEntryInputboxbackgroudbcolor,
      color:PAGES.PinEntryPage.pinEntryInputboxTextcolor,
      fontFamily:PAGES.PinEntryPage.signinTextinputFontFamily,
      fontSize:18
    },
  enterpintext:{
    textAlign: 'center',
    color: PAGES.PinEntryPage.pinEntryDescriptionColor,
    fontFamily: PAGES.PinEntryPage.pinEntryDescriptionfontFamily,
    fontSize: 20,
    marginTop:'6%'
  },
  pinentrycancelbuttoncolor:{
    marginTop:'5%',
    color:  PAGES.PinEntryPage.pinentrycancelbuttoncolor,
  },

  // Button style
  buttonView: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonTouchView: {
    backgroundColor: PAGES.SigninPage.signinButtonColor,
    height: deviceHeight * 0.05,
    width: deviceWidth * 0.40,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinbuttonTouchView: {
    backgroundColor: PAGES.PinEntryPage.pinEntryButtonColor,
    height: deviceHeight * 0.05,
    width: deviceWidth * 0.40,
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonFont: {
    fontFamily: PAGES.SigninPage.signinButtonFontfamily,
    fontSize: 18,
    color: PAGES.SigninPage.signinButtonTextColor
  },
  pinbuttonFont: {
    fontFamily: PAGES.PinEntryPage.pinEntryButtonFontfamily,
    fontSize: 18,
    color: PAGES.PinEntryPage.pinEntryButtonTextColor
  },

  //Tabbar
   tabbarStyle :{ 
    width: deviceWidth * 0.20,
    backgroundColor: 'blue',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: deviceHeight * 0.072,
    shadowColor: 'blue',
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  },

  //ImageBackground style
  ImageBackgroundStyle : {
    height:deviceHeight,
    width:deviceWidth,
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'center',
    alignContent:'center'
  },
});
