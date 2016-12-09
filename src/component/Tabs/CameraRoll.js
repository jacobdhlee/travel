import React, { Component } from 'react';
import { 
  View, 
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Cameras from 'react-native-camera';
import { NavBar } from '../../common';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { takingPhotos } from '../../actions';

class CameraRoll extends Component {

  takePicture() {
    this.camera.capture()
      .then((data) => this.props.takingPhotos(data) )
      .catch(err => console.error(err))
  }

  render() {
    const { container, textStyle, cameraStyle, buttonStyle, navBarContainerStyle } = styles
    return(
      <View style={{ flex: 1}}>
        <View>
          <NavBar 
            onPress={() => Actions.pop()}
            text={"Cancel"}
            title={"Camera"}
            addContainerStyle={navBarContainerStyle}
            rightText={"Next"} 
            onRightPress={() => Actions.Capture()}
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
          <TouchableOpacity style={buttonStyle} onPress={() => this.takePicture()}>
            <Icon name="circle-o" size={70} color="#b2b4b7" />
          </TouchableOpacity>
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

const mapStateToProps = ({picture}) => {
  const { taking_image } = picture
  return {
    taking_image
  }
}

export default connect(mapStateToProps , { takingPhotos} )(  CameraRoll  ) 