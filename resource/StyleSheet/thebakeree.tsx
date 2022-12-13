import { Dimensions, StyleSheet } from "react-native";
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
  backgroundColor: 'gray',
  justifyContent: 'center'
},












  
});