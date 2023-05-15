import {Dimensions, StyleSheet} from 'react-native';
import {PALETTE,SIZES,FONTSIZE} from './globalStyles'
const device = Dimensions.get('window');
export const deviceWidth = device.width;
export const deviceHeight = device.height;
export default StyleSheet.create({
  container: {
    width: deviceWidth,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    height:deviceHeight,
    backgroundColor: PALETTE.WHITE,
  },

  baseView: {
    width: deviceWidth,
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },

  terraPayLogoView: {
    width: deviceWidth,
    height: deviceHeight * 0.1,
    alignSelf: 'center',
    marginTop: '10%',
    marginBottom: '7%',
  },
  terraPayLogoStyle: {
    width: deviceWidth * 0.6,
    height: '100%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },

  welcomeTextView: {
    width: deviceWidth,
    alignSelf: 'center',
    paddingTop:5
  },
  welcomeTextStyle: {
    textAlign: 'center',
    fontSize: FONTSIZE.TWENTY,
    color: PALETTE.MEDIUM_DARK_SHADE_BLUE,
    fontWeight: 'bold',
    padding:5
  },

  hintText: {
    fontSize: FONTSIZE.EMAIL_SENT_MESSAGE,
    color: PALETTE.DARK_GRAY,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  buttonText: {
    textAlign: 'center',
    fontSize: FONTSIZE.BUTTON_TEXT_SIZE,
    textTransform: 'uppercase',
    color: PALETTE.WHITE,
  },
  footerButtonView: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: PALETTE.MEDIUM_DARK_SHADE_BLUE,
  },
  footerButton: {
    width: '100%',
    backgroundColor: PALETTE.LIGHT_GREEN,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 60,
  },
  footerButtonText: {
    textAlign: 'center',
    fontSize: FONTSIZE.FOOTER_BUTTON_TEXT_SIZE,
    textTransform: 'uppercase',
    color: PALETTE.WHITE,
  },

  inputFieldLabel: {
    width: deviceWidth * 0.82,
    color: PALETTE.BLACK,
    fontSize: FONTSIZE.FOURTEEN,
    textAlign: 'left',
    marginTop: '4%',
  },
  inputFieldAsterisk: {
    color: PALETTE.RED,
    fontSize: FONTSIZE.FOURTEEN,
  },
  inputFieldStyle: {
    width: deviceWidth * 0.82,
    color: PALETTE.DARK_GRAY,
    fontSize: FONTSIZE.EIGHTEEN,
    backgroundColor: PALETTE.MEDIUM_GRAY,
    height: 40,
    paddingVertical: 0,
    paddingHorizontal: 10,
  },
  inputFieldPasswordStyle: {
    width: deviceWidth * 0.82,
    color: PALETTE.DARK_GRAY,
    fontSize: FONTSIZE.EIGHTEEN,
    backgroundColor: PALETTE.MEDIUM_GRAY,
    height: 40,
    paddingVertical: 0,
    paddingHorizontal: 1,
  },
  inputFieldNameStyle: {
    width: deviceWidth * 0.82,
    color: PALETTE.DARK_GRAY,
    fontSize: FONTSIZE.EIGHTEEN,
    backgroundColor: PALETTE.MEDIUM_GRAY,
    height: 40,
    paddingVertical: 0,
    paddingHorizontal: 1,
  },
  errorMessage: {
    width: deviceWidth * 0.82,
    color: PALETTE.RED,
    fontSize: FONTSIZE.ERROR_MESSAGE_SIZE,
    marginTop: '0.5%',
    textAlign: 'left',
  },
});
