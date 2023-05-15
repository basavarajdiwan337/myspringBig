import { Dimensions, StyleSheet } from 'react-native';
import { VARIABLES } from '../../globalConstants';
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  baseView: {
    width: windowWidth,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  topView: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.5,
  },

  backLogoView: {
    width: '70%',
    justifyContent: 'center',
    zIndex: 10,
    marginBottom: -10
  },
  backLogoTouchableOpacity: {
    width: '20%',
    alignSelf: 'center',
    zIndex: 20,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '8%',
    // marginTop:-10
  },
  backLogo: {
    width: 20,
    height: 14,
    alignSelf: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
  },

  terrapayLogoView: {
    width: '100%',
    height: 70,
    marginTop: '2%'
  },
  terrapayLogo: {
    width: 150,
    height: 29,
    resizeMode: 'cover',
  },
  inputFieldLabel: {
    color: '#0000',
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: '9%'
  },
  poweredByView: {
    flexDirection: 'row',
    width: VARIABLES.deviceWidth,
    justifyContent: 'center'
  },
  terraPayLogoStyle: {
    width: 50,
    height: 18,
    resizeMode: 'contain'
  }
});
