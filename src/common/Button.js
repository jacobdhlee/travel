import React from 'react';
import { 
  Text, 
  TouchableOpacity,
} from 'react-native';

const Button = ({onPress, text, backgroundColor, textColor}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[ styles.container,{backgroundColor: backgroundColor}]}>
      <Text style={[styles.textStyle, {color: textColor} ]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = {
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    marginBottom: 7,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '700',
  }
}

export { Button }
