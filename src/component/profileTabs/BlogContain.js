import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { Input } from '../../common';
import firebase from 'firebase';

const { height, width } = Dimensions.get('window');

class BlogContain extends Component {
  state = {
    add: false
  }
  addBlog() {
    if(!this.state.add) {
      return (
        <TouchableOpacity 
          style={styles.createBlog}
          onPress={() => this.setState({add: true})}
        >
          <Text style={{fontSize: 15}}>Create blog</Text> 
        </TouchableOpacity>
      )
    }
    return (
      <View style={styles.subContainer}>

        <View style={{flex: 1}}>
          <Icon name={'user-o'} size={25} />
        </View>

        <TextInput 
          style={{flex: 9, paddingLeft: 10}} 
          placeholder={'City'} 
          autoFocus={true}
        />

        <TouchableOpacity 
          onPress={() => console.log('fuck added')}
          style={{flex: 1, marginRight: 10}}
        >
          <Icon name={'check'} size={25} color={'green'} />
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => this.setState({ add: false})}
          style={{flex: 1, marginRight: 10}}
        >
          <Icon name={'trash'} size={25} />
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
  createBlog: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  subContainer: {
    flexDirection: 'row',
    height: height * 0.1,
    width: width,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10
  },
}

export default BlogContain;