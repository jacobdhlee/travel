import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Input } from '../common';

class AddTravel extends Component {
  render() {
    return (
      <View>
        <View>
          <Text>Flight</Text>
          <Input 
            placeholder="Depature City"
          />
          <Input 
            placeholder="Destination City"
          />
        </View>

        <View>
          <Text>Hotel</Text>
          <Input 
            placeholder="City"
          />
        </View>

        <View>
          <Text>Car</Text>
          <Input 
            placeholder="PickUp"
          />
          <Input 
            placeholder="Drop off"
          />
        </View>
      </View>
    )
  }
}

const styles = {
  contianer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
}

export default AddTravel;