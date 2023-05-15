import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
type Props = {
  text: string;
  onPress?: () => void;
  buttonView: any;
  testID: any;
  buttonBackground? : any;
};

const BottomButtonComponent = (props: Props) => {
  const {text, onPress = () => {}, buttonView, testID, buttonBackground} = props;

  return (
    <View style={!buttonView ? styles.footerButtonView : buttonView}>
      <TouchableOpacity
        testID={testID}
        style={!buttonBackground ? styles.footerButton : buttonBackground}
        onPress={onPress}>
        <Text style={styles.footerButtonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomButtonComponent;
const styles = StyleSheet.create({
  
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#fff',
  },
  footerButtonView: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#003B4D',
  },
  footerButton: {
    width: '100%',
    backgroundColor: '#003B4D',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 60,
  },
  footerButtonText: {
    textAlign: 'center',
    fontSize: 18,
    textTransform: 'uppercase',
    color: '#fff',
  },
})

