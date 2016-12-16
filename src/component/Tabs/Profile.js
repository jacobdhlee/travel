import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class Profile extends Component {
  render() {
    const { 
      container, 
      textStyle, 
      profileContainer, 
      pictureContainer, 
      profilePicBox, 
      folloBox,
      folloBoxDetail 
    } = styles
    return(
      <View style={container}>

        <View style={profileContainer}>

          <View style={profilePicBox}>
            <Text style={textStyle}>Profile Pics</Text>
          </View>

          <View style={folloBox}>
            
          <View style={[folloBoxDetail ,{flex: 1}]}> 
            <Text>UserName</Text>
          </View>

          <View style={[folloBoxDetail ,{flex: 2, flexDirection: 'row'}]}>
            <View style={[folloBoxDetail, { flex: 1}]}>
              <Text>post</Text>
            </View>

            <View style={[folloBoxDetail, { flex: 1}]}>
              <Text>followers</Text>
            </View>

            <View style={[folloBoxDetail, { flex: 1}]}>
              <Text>following</Text>
            </View>
          </View>

          <View style={[folloBoxDetail ,{flex: 1}]}>
            <Text>Edit Profile</Text>
          </View>

          </View>

        </View>

        <View style={pictureContainer}>
          {Actions.nestedProfile()}
        </View>

      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: 64
  },
  profileContainer:{
    flex: 2,
    borderWidth: 1,
    flexDirection: 'row',
  },
  profilePicBox: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1
  },
  folloBox: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  folloBoxDetail: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pictureContainer: {
    flex: 3,
    alignItems: 'center',
    marginTop: 60
  },

  textStyle: {
    fontSize: 15,
    fontWeight: '700'
  }
}

export { Profile };