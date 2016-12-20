import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class PictureTaken extends Component {
  render() {
    const { container, textStyle } = styles
    return (
      <View style={container}>
        <Icon name="user-circle-o" size={120} style={{marginBottom: 20}} />
        <Text style={textStyle}> No Post Yet! </Text>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 15,
    fontWeight: '700'
  },
}
export default PictureTaken
