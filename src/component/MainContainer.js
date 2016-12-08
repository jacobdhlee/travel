import React, { Component } from 'react';
import { 
  View,
  TouchableOpacity, 
  Text, 
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Button } from '../common';
import ImageBackground from '../../image/manhattan.jpg';

class MainContainer extends Component {
  render() {
    console.log('action is ', Actions)
    const { container, pictureContainer, buttonContainer, textStyle, textContainer, picture } = styles
    return (
      <View style={container}>  
        <Image source={ImageBackground} style={picture}>
          <View style={pictureContainer}>
            <Text style={textStyle}></Text>
          </View>

          <View style={buttonContainer}>
            <Button backgroundColor={'#0870FF'} text={'Continue with facebook'} textColor={'white'} />
            <Button backgroundColor={'#A52317'} text={'Sign up with email'} textColor={'white'} onPress={() => Actions.signup()} />
            <Button backgroundColor={'#D4D2B1'} text={'Log in'} textColor={'black'} onPress={()=> Actions.login()}/>
          </View>
        </Image>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
  },
  picture:{
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'rgba(0,0,0,0)',
    alignSelf: 'stretch'
  },
  pictureContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 50
  },
  buttonContainer: {
    flex: 1,
  },
  textStyle: {
    fontFamily: 'Cochin-BoldItalic',
    fontSize: 30,
    fontWeight: '900',
    color: 'black',
  },
}

export default MainContainer;