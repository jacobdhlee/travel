import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions 
} from 'react-native';

const { height, width } = Dimensions.get('window');

const NavBar = ({ onPress, text, addTextStyle, addContainerStyle, title, rightText, onRightPress }) => {
  const { container, textStyle, sectionStyle } = styles; 
  return (
    <View style={[container, addContainerStyle]}>
      <TouchableOpacity onPress={onPress} style={sectionStyle}> 
        <Text style={[textStyle, addTextStyle]}> {text} </Text> 
      </TouchableOpacity>

      <View style={{flex: 3, alignItems: 'center'}}> 
        <Text style={[textStyle, addTextStyle]}> {title} </Text> 
      </View>

      <TouchableOpacity onPress={onRightPress} style={sectionStyle}> 
        <Text style={[textStyle, addTextStyle]}> {rightText} </Text> 
      </TouchableOpacity>

    </View>
  )
}

const styles = {
  container: {
    height: height * 0.07,
    borderBottomWidth: 1,
    flexDirection: 'row'
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '500',
  }, 
  sectionStyle: {
    flex: 1
  }
}

export { NavBar }