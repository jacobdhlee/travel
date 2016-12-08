import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Love extends Component {
  render() {
    const { container, textStyle } = styles
    return(
      <View style={container}>
        <Text style={textStyle}>Love Section</Text>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 15,
    fontWeight: '700'
  }
}

export { Love };