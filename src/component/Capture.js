import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import { getState } from 'redux-thunk'
import { fetchPhoto } from '../actions';

const { height, width } = Dimensions.get('window');

class Capture extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
          <Image style={{ flex: 1, width: width, height: height * 0.5 }} source={{uri: this.props.taking_image.path}}/>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text> This is captured Picture </Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({picture}) => {
  const { taking_image } = picture
  return {
    taking_image
  }
}

export default connect(mapStateToProps , { fetchPhoto } )(  Capture  ) 
