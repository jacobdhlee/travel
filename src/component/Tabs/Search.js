import React, { Component } from 'react';
import { 
  View, 
  Text, 
  Dimensions,
  TextInput 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { height, width } = Dimensions.get('window');

class Search extends Component {
  render() {
    const { container, textStyle, inputStyle, iconView } = styles
    const placeholder = <Icon name='search' size={13} />
    return(
      <View style={container}>
        <TextInput 
          style={inputStyle} 
          placeholder={' search'} 
          autoFocus={false}
        />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    
  },
  textStyle: {
    fontSize: 15,
    fontWeight: '700'
  },
  inputStyle: {
    backgroundColor: '#cccecd',
    marginTop: 25,
    borderRadius: 5,
    height: height * 0.05,
    width: width * 0.92,
  }
}

export { Search };