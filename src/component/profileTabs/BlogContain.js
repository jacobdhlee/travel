import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { Input } from '../../common';
const { height, width } = Dimensions.get('window');

class BlogContain extends Component {
  state = {
    add: false
  }
  addBlog() {
    if(!this.state.add) {
      return (
        <TouchableOpacity 
          style={styles.subContainer}
          onPress={() => this.setState({add: true})}
        >
          <Text>+</Text> 
        </TouchableOpacity>
      )
    }
    return (
      <View>
        <TouchableOpacity 
          onPress={() => this.setState({ add: false})}
        >
          <Text>x</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.subContainer}
          onPress={() => console.log('blog coming up to here')}
        >
          <Text>Which City?</Text>
          <Input />
        </TouchableOpacity>
      </View>
    )
  }
  render() {
    const { container, subContainer } = styles
    return (
      <View style={container}>
        {this.addBlog()}
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
  },
  subContainer: {
    height: height * 0.20,
    width: width * 0.30,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
}

export default BlogContain;