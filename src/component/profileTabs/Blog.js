import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Blog extends Component {
  render() {
    const { container, textStyle } = styles
    return {
      <View style={container}>
        <Text style={textStyle}>This is Blog area</Text>
      </View>
    }
  }
}

const styles = {
  container: {
    flex: 1,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: '700'
  },
}

export default Blog;