import React, { Component } from 'react';
import { 
  View, 
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Cameras from 'react-native-camera';
import { NavBar } from '../../common';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { recordingVideo } from '../../actions';

class VideoRoll extends Component {

  state = {
    isFinished: false
  }

  captureVideo() {
    this.camera.capture({ 
      captureMode: Cameras.constants.CaptureMode.video,
      captureAudio: true,
      captureTarget: Cameras.constants.CaptureTarget.cameraRoll
    })
      .then( (data) => {
        console.log(data)
        this.props.recordingVideo(data)
      })
      .catch(err => console.error(err));
  }

  videoStart() {
    setTimeout(this.captureVideo.bind(this), 100);
  }

  videoEnd() {
    this.camera.stopCapture()
  }

  renderContents() {

    if(this.state.isFinished) {
      return (
        <Image source={{uri: this.props.recording_video.path}} />
      )
    }
    return (
      <Cameras
        ref={(cam) => {
          this.camera = cam;
        }}
        aspect={Cameras.constants.Aspect.fill}
        // style={styles.cameraStyle}
      >
      </Cameras>
    )
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
            rightText={'Next'}
          />
        </View>

        <View style={container}>
          <StatusBar hidden={true} />
          <View style={cameraStyle}>
            {this.renderContents()}
          </View>

          <View style={buttonStyle}>
            <TouchableOpacity 
              onPressIn={() => {
                // this.setState({isFinished : true})
                this.videoStart()
              }}
              onPressOut={() => {
                this.videoEnd()
                this.setState({isFinished: false})
              }}
            >
              <Icon name="circle-o" size={70} color="#b2b4b7" />
            </TouchableOpacity>
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

const mapStateToProps = ({picture}) => {
  const { recording_video } = picture
  return {
    recording_video
  }
}

export default connect(mapStateToProps , { recordingVideo } )(  VideoRoll  ) 