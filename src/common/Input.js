import React from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions 
} from 'react-native';

const { height, width } = Dimensions.get('window');

const Input = ({text, placeholder, keyboardType, onChangeText, value, secureTextEntry, textStyle, addStyle }) => {
  const { container, inputStyle } = styles; 
  return (
    <View style={container}>
      <Text style={textStyle}>{text}</Text>
      <TextInput 
        style={[inputStyle, addStyle]} 
        placeholder={placeholder} 
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        value={value}
        autoFocus={true}
      />
    </View>
  )
}

const styles = {
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  inputStyle: {
    margin: 10,
    height: 40,
    width: width * 0.9,
  }
}

export { Input }