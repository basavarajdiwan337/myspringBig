import { Dimensions, Platform } from 'react-native';
export const PLATFORM = Platform.OS;
export const ISIOS = PLATFORM === 'ios';
const device = Dimensions.get('window');
export const deviceWidth = device.width;
export const deviceHeight = device.height;
export const SCREEN = Dimensions.get('screen');
export const Error_TEXT = 'Ops, something wrong.';

export const GLOBAL_CONSTANTS = {
  APP_NAME: 'Terrapay Bank in a Box',
  PASS_REGEX: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/,
  EMAIL_REGEX : /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
};

export const LABELS = {
  WELCOME_LABEL: `Welcome to \n${GLOBAL_CONSTANTS.APP_NAME}`,
  WELCOME_KCB: `Welcome to KCB`,
  WELCOME_KCB_UK: `Welcome to KCB UK`,
  WELCOME_KCB_SINGAPORE: `Welcome to KCB Singapore`,
  SINGAPORE : 'Singapore',
  DASHBOARD : 'DASHBOARD',
  MY_PROFILE : 'MY PROFILE',
  KYC_UPLOAD : 'KYC UPLOAD',
  KYC_DETAILS : 'KYC DETAILS',
  KYC_PROOF : 'KYC DETAILS - PROOF',
  KYC_ADDRESS : 'KYC DETAILS - ADDRESS',
  KYC_ID : 'KYC DETAILS - ID',
  KYC_ORG : 'KYC DETAILS - ORG',
  KYC_VERIFICATION : 'KYC DETAILS - VERIFICATION',
  PRODUCTS : 'PRODUCTS',
  TRANSFERFUNDS : 'Transfer Funds',
  KYC_APPROVED : 'Your KYC details has been approved',
  E_WALLET_ACTIVE_TEXT : 'Your e-Wallet is now Active',
  IBAN_ACTIVE_TEXT : 'Your IBAN/Virtual \n Account is now Active',
  EMAIL_ADDRESS: 'Email Address',
  FIRST_NAME : 'First Name',
  LAST_NAME : 'Last Name',
  DOB : 'DOB',
  ACTIVATION_MESSAGE:
    'We will send activation Link to your registered email address',
  FILL_EMAIL: 'Email is required',
  FILL_PASSWORD: 'Password is required',
  NOT_VALID_EMAIL: 'Not valid Email',
  EMAIL_NOT_REGISTERED: "You do not have account in ",
  NOT_ACTIVE: 'Email is not active',

  NOT_VALID_PASSWORD: 'Not valid Password',
  ASTERISK: '*',
  ERROR_PASSWORD_MESSAGE: 'Please fill password',
  SUBMIT_BUTTON: 'SUBMIT',
  CANCEL_BUTTON: 'CANCLE',
  ENTER_PASSWORD: 'Enter Password',
  RESIDENCE_LABLE : 'Select Your Country Of Residence',
};

export const MESSAGE = {
  NO_BUTTON : 'NO',
  YES_BUTTON : 'YES',
  ADD_CARD_CANCEL_BUTTON : 'CANCEL',
  ADD_CARD_SUBMIT_BUTTON : 'SUBMIT',
  WLECOME_TEXT: 'Welcome to\nTerrapay Bank in a Box',
  DASHBOARD : 'DashBoard',
  EMAIL_ADDRESS: 'Email Address',
  PASSWORD : 'Password',
  OTP : 'OTP',
  BACKSPACE_KEY: 'Backspace',
  FORGET_PASSWORD: 'forget password',
  SUBMIT_BUTTON: 'SUBMIT',
  CLEAR_BUTTON: 'CLEAR',
  RETAKE_BUTTON: 'RETAKE',
  NEXT_BUTTON: 'NEXT',
  VIEW_PRODUCT : 'VIEW PRODUCTS',
  SET_PIN : 'SET PIN',
  SET_MPIN : 'SET MPIN',
  ADD_BENEFICIARY : 'ADD BENEFICIARY',

  CANCLE_BUTTON: 'CANCLE',
  HOME : 'HOME',
  DONE_BUTTON: 'DONE',
  EMPTY_TEXT : '',
  OK_BUTTON : 'OK',
  ENTER_OTP_TITLE: 'Enter OTP',
  ENTER_OTP_DESCRIPTION: 'Enter the verification code that we just sent to you',
  RESIDENCE_FRONT_ERROR_MESSAGE : "Please upload Your front resident image",
  RESIDENCE_BACK_ERROR_MESSAGE : "Please upload Your back resident image",
  ENTER_OTP_MODAL_OK_BUTTON: 'OK',
  ENTER_OTP_MODAL_CARD_ACTIVATED_TEXT: 'Card Activated Successfully',
  ENTER_OTP_ERROR_TEXT: 'Wrong OTP',
  EXPIRE_OTP_ERROR_TEXT: 'OTP is expired',
  EMPTY_OTP_ERROR_TEXT: 'Please Enter OTP',


};

export const OSTYPE = {
  IOS: 'ios',
  ANDROID: 'android',
};

export const STATUS_BAR_TYPE = {
  DARK_CONTENT: 'dark-content',
  LIGHT_CONTENT: 'light-content',
  DEFAULT: 'dark-content',
};

