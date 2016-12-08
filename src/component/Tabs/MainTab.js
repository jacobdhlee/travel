import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class MainTab extends Component {
  render() {
    const { container, textStyle } = styles
    return(
      <View style={container}>
        <Icon name="suitcase" size={50} style={{marginBottom: 30}}/>
        <Text style={textStyle}>No Travel Plan Yet!!</Text>
        <Text style={textStyle}>Please add the Travel Plan</Text>
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

export { MainTab };