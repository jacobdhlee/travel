import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';

import { Input, Button } from '../../common';
import { nameCreate } from '../../actions';

const { height, width } = Dimensions.get('window');

class SignName extends Component {

  onNameCreate(text) {
    this.props.nameCreate(text)
  }

  render() {
    const { container, textStyle, buttonContainer, inputConatiner, addStyle, inputStyle } = styles
    const { name, email, password } = this.props
    return (
      <View style={container}>
        <Input 
          text={'What is your name?'}
          textStyle={textStyle}
          placeholder={'Put Name here!'} 
          secureTextEntry={false}
          onChangeText={this.onNameCreate.bind(this)}
          addStyle={inputStyle}
          value={name}
        />
        <View style={buttonContainer}>
          <Button 
            onPress={ () => Actions.tabbar({type: 'reset'}) }
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
  const { name } = signup
  console.log('sign up is ???', signup)
  return {
    name
  }
}

export default connect(mapStateToProps , { nameCreate } )( SignName ) 