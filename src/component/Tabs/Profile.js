import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import PictureTaken from '../profileTabs/PictureTaken'
import BlogContain from '../profileTabs/BlogContain'


import { renderProfile } from '../../actions'

class Profile extends Component {
  state = {
    key: 'blog'
  }

  renderContent() {
    if(this.state.key === 'blog') {
      return (
        <BlogContain />
      )
    } 
    if(this.state.key === 'pics') {
      return (
        <PictureTaken />
      )
    }
  }
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

          <View style={{flex: 1, flexDirection: 'row', borderWidth: 1}}>
            <TouchableOpacity
              onPress={() => this.setState({key: 'blog'})} 
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            >
              <Icon name={'th-list'} size={20} color={'black'}/>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() => this.setState({key: 'pics'})}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              >
              <Icon name={'file-image-o'} size={20} color={'black'}/>
            </TouchableOpacity>
          </View>

          <View style={{flex: 10}}> 
          {
            this.renderContent()
          }
          </View>
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
    flex: 1,
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
  },

  textStyle: {
    fontSize: 15,
    fontWeight: '700'
  }
}

export default connect(null, { 
   renderProfile
})(Profile)