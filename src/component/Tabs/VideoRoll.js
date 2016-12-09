import React, { Component } from 'react';
import { 
  View, 
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Cameras from 'react-native-camera';
import { NavBar } from '../../common';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { recordingVideo } from '../../actions';

class VideoRoll extends Component {

  captureVideo() {
    this.camera.capture({ 
      captureMode: Cameras.constants.CaptureMode.video,
      captureAudio: true,
      captureTarget: Cameras.constants.CaptureTarget.cameraRoll
    })
      .then( (data) => this.props.recordingVideo(data))
      .catch(err => console.error(err));
  }

  videoStart() {
    setTimeout(this.captureVideo.bind(this), 100);
  }

  videoEnd() {
    this.camera.stopCapture()
  }

  render() {
    const { container, textStyle, cameraStyle, buttonStyle, navBarContainerStyle } = styles
    return(
      <View style={{ flex: 1 }}>
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
          <TouchableOpacity 
            style={buttonStyle}
            onPressIn={() => this.videoStart()}
            onPressOut={() => this.videoEnd()}
          >
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
  const { recording_video } = picture
  return {
    recording_video
  }
}

export default connect(mapStateToProps , { recordingVideo } )(  VideoRoll  ) 