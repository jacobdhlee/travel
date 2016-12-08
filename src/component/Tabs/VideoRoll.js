import React, { Component } from 'react';
import { 
  View, 
  Text,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Cameras from 'react-native-camera';
import { NavBar } from '../../common';
import { Actions } from 'react-native-router-flux';

class VideoRoll extends Component {
  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
  render() {
    const { container, textStyle, cameraStyle, buttonStyle, navBarContainerStyle } = styles
    return(
      <View style={{ flex: 1}}>
        <View>
          <NavBar 
            onPress={() => Actions.pop()}
            text={"Cancel"}
            title={"Video"}
            addContainerStyle={navBarContainerStyle}
          />
        </View>

        <View style={container}>
          <StatusBar hidden={true} />

          <Cameras
            ref={(cam) => {
              this.camera = cam;
            }}
            aspect={Cameras.constants.Aspect.fill}
            style={cameraStyle}
          >
          </Cameras>
          <View style={buttonStyle}>
            <Icon name="circle-o" size={70} color="#b2b4b7" />
          </View>
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1
  },
  textStyle: {
    fontSize: 15,
    fontWeight: '700'
  },
  cameraStyle: {
    flex: 10,
    alignSelf: 'stretch'
  },
  buttonStyle : {
    alignItems: 'center',
    flex: 3,
    marginTop: 20,
  },
  navBarContainerStyle: {
    alignItems: 'center'
  }
}

export { VideoRoll };