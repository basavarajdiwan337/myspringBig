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
    height:deviceHeight*0.27,
    marginTop:'5%',
    // backgroundColor:'red'
  },

  signinPageLogo: {
    width:PAGES.SigninPage.LogoPos[0],
    height:PAGES.SigninPage.LogoPos[1],
    resizeMode: 'contain',
    alignSelf: PAGES.SigninPage.signInLogoposition as FlexAlignType,
    // backgroundColor:'blue',
    marginTop:PAGES.SigninPage.LogoPos[2],
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

  //Shopspage
  Shopspagebackgroud: {
    width: deviceWidth,
    height:deviceHeight,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  registerTittleText:{
    textAlign: 'center',
    color: PAGES.ShopsPage.registerTittleTextcolor,
    fontFamily: PAGES.ShopsPage.registerTittleTextfontfamily,
    fontSize: 15,
    marginTop:'10%',
    marginBottom:'10%'
  },
  NonregisterTittleText:{
    width: deviceWidth*0.70,
    textAlign: 'center',
    color: PAGES.ShopsPage.NonRegisterTitleTextcolor,
    fontFamily: PAGES.ShopsPage.NonRegisterTitleTextfontfamily,
    fontSize: 15,
    marginTop:'10%',
    marginBottom:'10%'
  },
  Wrap:{
    paddingVertical: '5%',
    paddingHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:PAGES.ShopsPage.WrapbackgroundColor,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor:PAGES.ShopsPage.WrapBorderColor,
    width: deviceWidth*0.80,
    height:deviceHeight*0.10,
    alignSelf: 'center',
    // marginTop:'0%'
  },
  WrapActive:{
    backgroundColor: PAGES.ShopsPage.WrapbackgroundColorActive,
  },
  name: {
    fontSize: 18,
    color:PAGES.ShopsPage.WrapNameTextcolor,
    textAlign:'center',
    fontFamily:  PAGES.ShopsPage.WrapNameTextcolorfontfamily, 
    alignSelf:'center'
  },
  nameActive: {
    color:PAGES.ShopsPage.WrapNameTextcolorActive,
    fontFamily:  PAGES.ShopsPage.WrapNameTextcolorfontfamilyActive,
  },
  shopsmerchantimage: {
    height: deviceHeight*0.15,
    resizeMode: 'contain',
    width: deviceWidth*0.15,
    marginLeft: '5%',
    marginRight: '5%',
  },

  //Rewards Page
  RewardPageLogoView : {
    width:deviceWidth * 0.40,
    height:deviceHeight*0.20,
    marginTop:'0%',
  },

  rewardPageContainer: {
    width: deviceWidth,
    height:deviceHeight,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop:'-15%',
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
 
  },
  
  //logoutButton 
  logoutLogo: {
    width:deviceWidth *0.22,
    height:deviceHeight*0.08,
    resizeMode: 'contain',
    alignSelf: PAGES.SigninPage.signInLogoposition as FlexAlignType,
  },
});
