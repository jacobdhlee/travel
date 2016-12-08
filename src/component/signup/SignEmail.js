import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { Input, Button } from '../../common';
import { emailCreate } from '../../actions';

const { height, width } = Dimensions.get('window');

class SignEmail extends Component {

  onEmailCreate(text) {
    this.props.emailCreate(text)
  }

  render() {
    const { container, textStyle, buttonContainer, inputConatiner, addStyle, inputStyle } = styles
    const { email } = this.props
    return (
      <View style={container}>
        <Input 
          text={'Enter your email'}
          textStyle={textStyle}
          placeholder={'Put Email here!'} 
          secureTextEntry={false}
          keyboardType={'email-address'}
          onChangeText={this.onEmailCreate.bind(this)}
          addStyle={inputStyle}
          value={email}
        />
        <View style={buttonContainer}>
          <Button 
            onPress={() => Actions.password()}
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
  const { email } = signup
  return {
    email
  }
}

export default connect(mapStateToProps , { emailCreate} )( SignEmail ) 