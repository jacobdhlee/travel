import React, { Component } from 'react';
import { 
  View, 
  Text,
} from 'react-native';
import Cameras from 'react-native-camera';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

class Camera extends Component {
  modal() {
    Actions.nested()
  }
  render() {
    console.log('action is >>>???>>> ', Actions)
    const { container, textStyle, buttonStyle } = styles
    return(
      <View style={container}>
        {this.modal()}
      </View>
    )
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
  buttonStyle : {
    flex: 3,
    // justifyContent: 'center',
    marginTop: 20,
  }
}

export { Camera };