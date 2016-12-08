import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { Input, Button } from '../../common';
import { passwordCreate } from '../../actions';


const { height, width } = Dimensions.get('window');

class SignPassword extends Component {

  onPasswordCreate(text) {
    this.props.passwordCreate(text)
  }

  render() {
    const { container, textStyle, buttonContainer, inputConatiner, addStyle, inputStyle } = styles
    const { password } = this.props
    return (
      <View style={container}>
        <Input 
          text={'Please create password'}
          textStyle={textStyle}
          placeholder={'Please put password here!'} 
          secureTextEntry={true}
          onChangeText={this.onPasswordCreate.bind(this)}
          addStyle={inputStyle}
          value={password}
        />
        <View style={buttonContainer}>
          <Button
            onPress={() => Actions.name()} 
            text={'Next'}
            backgroundColor={'#86b3f9'}
            textColor={'white'}
          />
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: 150,
    alignItems: 'center',
  },
  inputConatiner: {
    marginLeft: 20,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '700',
  },
  buttonContainer: {
    width: width,
    marginTop: 40,
  },
}

const mapStateToProps = ({signup}) => {
  const { password } = signup
  return {
    password
  }
}

export default connect(mapStateToProps , { passwordCreate } )( SignPassword ) 