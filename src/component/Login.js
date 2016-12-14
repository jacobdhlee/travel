import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Input, Button } from '../common';
import { emailChange, passwordChange } from '../actions';
import { Actions } from 'react-native-router-flux';

const { height, width } = Dimensions.get('window');

class Login extends Component {

  onEmailChange(text) {
    this.props.emailChange(text);
  }

  onPasswordChange(text) {
    this.props.passwordChange(text);
  }

  onLoginPress() {
    const { email, password } = this.props
    console.log('email and password ', email, " and ",password  )
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then( () => {
        Actions.tabbar({type: 'reset'})
      })
      .catch( err => console.error(err) )
  }

  render() {
    const { container, buttonContianer, textBox, textStyle } = styles
    const { email, password } = this.props

    return (
      <View style={container}>
        <Input 
          placeholder={'Enter the email'} 
          text={'Email'} 
          keyboardType={'email-address'} 
          onChangeText={this.onEmailChange.bind(this)}
          value={email}
        />
        <Input 
          placeholder={'Enter the password'} 
          text={'Password'} 
          secureTextEntry={true}
          onChangeText={this.onPasswordChange.bind(this)}
          value={password}
        />
        <View style={buttonContianer}>
          <Button text={'Log in'} backgroundColor={'#E5EBD4'} textColor={'black'} onPress={this.onLoginPress.bind(this)}/>
        </View>
        <TouchableOpacity style={textBox}>
          <Text style={textStyle}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContianer: {
    width: width,
    marginTop: 20,
  },
  textStyle: {
    fontSize: 13,
  },
  textBox: {
    marginTop: 15,
    width: width,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const mapStateToProp = ({auth}) => {
  const { email, password } = auth
  return {
    email,
    password,
  }
}

export default connect(mapStateToProp, { 
  emailChange, passwordChange  
})(Login)
