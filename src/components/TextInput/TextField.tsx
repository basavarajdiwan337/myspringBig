import React from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import {STYLES, VARIABLES} from '../../globalConstants';
import { PALETTE } from '../../globalConstants/globalStyles';
import globalStyle from '../../globalConstants/SytleSheet';

interface props {
  term: any;
  placeholder: string;
  onTermChange: any;
  errorText: string;
  underlineColor: any;
  inputFieldLabel: string;
  mandatoryField: boolean;
  testID?: string;
  testIDLabel?: string;
  testIDError?: string;
  error: boolean;
  secureTextEntry?: boolean;
  keyboard?: string; 
  edit?:boolean;
  textStyle?: any;
  maxLength? : any
  textInputStyle?: any;
}

const EmailTextField = ({
  term,
  onTermChange,
  errorText,
  inputFieldLabel,
  mandatoryField = false,
  testID,
  testIDLabel,
  testIDError,
  error,
  secureTextEntry = false,
  keyboard,
  edit = true,
  maxLength,
  textInputStyle

}: props) => {

  return (
    <View style={globalStyle.baseView}>
      {inputFieldLabel !== VARIABLES.MESSAGE.EMPTY_TEXT ? (
        <Text testID={testIDLabel} style={globalStyle.inputFieldLabel}>
          {inputFieldLabel}
          {mandatoryField === true ? (
            <Text style={globalStyle.inputFieldAsterisk}>
              {VARIABLES.LABELS.ASTERISK}
            </Text>
          ) : (
            VARIABLES.MESSAGE.EMPTY_TEXT
          )}
        </Text>
      ) : (
        VARIABLES.MESSAGE.EMPTY_TEXT
      )}
      <TextInput
        style={textInputStyle ? textInputStyle : globalStyle.inputFieldStyle}
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        keyboardType={keyboard ? keyboard : 'default'}
        activeUnderlineColor={STYLES.PALETTE.DARK_BLUE}
        testID={testID}
        error={error}
        secureTextEntry={secureTextEntry}
        editable={edit}
        theme={{colors: {text: PALETTE.LIGHT_GREEN }}}
        maxLength={maxLength}
   
      />
      {errorText !== VARIABLES.MESSAGE.EMPTY_TEXT ? (
        <Text testID={testIDError} style={globalStyle.errorMessage}>
          {errorText}
        </Text>
      ) : (
        VARIABLES.MESSAGE.EMPTY_TEXT
      )}
    </View>
  );
};

export default EmailTextField;
