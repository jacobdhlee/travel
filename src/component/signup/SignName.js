import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';

import { Input, Button } from '../../common';
import { nameCreate, signUpUser } from '../../actions';

const { height, width } = Dimensions.get('window');

class SignName extends Component {

  onNameCreate(text) {
    this.props.nameCreate(text)
  }

  onButtonPress() {
    const { email, password, name } = this.props
    console.log('fucking props >>', email, password, name);
    this.props.signUpUser({email, password, name})
  }

  render() {
    const { container, textStyle, buttonContainer, inputConatiner, addStyle, inputStyle } = styles
    const { name, email, password } = this.props
    return (
      <View style={container}>
        <Input 
          text={'Create Username!'}
          textStyle={textStyle}
          placeholder={'Put username you want here!'} 
          secureTextEntry={false}
          onChangeText={this.onNameCreate.bind(this)}
          addStyle={inputStyle}
          value={name}
        />
        <View style={buttonContainer}>
          <Button 
            onPress={ () => this.onButtonPress() }
            text={'Done!'}
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
  const { name, email, password } = signup
  console.log('sign up is ???', signup)
  return {
    name,
    email,
    password
  }
}

export default connect(mapStateToProps , { nameCreate, signUpUser } )( SignName ) 