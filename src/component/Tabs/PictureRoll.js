
import React, { Component } from 'react';
import { 
  View, 
  Text,
  CameraRoll,
  StatusBar,
  ListView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { NavBar } from '../../common';

import { connect } from 'react-redux';

const { height, width } = Dimensions.get('window');


class PictureRoll extends Component {
  state = {
    imageContent: false,
    images: [],
    singleImage: null,
  }

  componentWillMount() {
    const paremFirst = {
      first: 100,
    }
    CameraRoll.getPhotos(paremFirst)
      .then((data) => {
        console.log(data)
        this.setState({images: data.edges, imageContent: true, singleImage: data.edges[0]})
      })
      .catch((err) => {
        console.log(err)
      })
  }

  selected(data) {
    const { singleImage , images } = this.state
    if(data) {
      this.setState({singleImage: data})
    }
    return (
      <Image style={{width: width, height: height * 0.4}} source={{uri: singleImage.node.image.uri}} />
    )
  }

  renderContent() {

    const { images } = this.state

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.dataSource = ds.cloneWithRows(images)
    return (
      <ListView
        contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}
        dataSource={this.dataSource}
        renderRow={ (data) => {
          return (
            <TouchableOpacity 
              style={styles.imageContainer} 
              onPress={() => this.selected(data) }
            >
              <View>
                <Image style={styles.imageStyle} source={{ uri: data.node.image.uri}} />
              </View>
            </TouchableOpacity>
          )
        }}
      />
    )
  }

  render() {
    const { container, navStyle, selectedPicContainer, renderPic, errorContainer, errorTextStyle } = styles
    if(!this.state.imageContent) {
      return(
        <View style={container}>
          <StatusBar hidden={true} />
          <View>
            <NavBar 
              onPress={() => Actions.pop()}
              text={<Icon name={'times'} size={18} color={'black'} />}
              addContainerStyle={navStyle}
            />
          </View>
          <View style={errorContainer}>
            <Icon name={'frown-o'} size={60} style={{marginBottom: 10}} />
            <Text style={errorTextStyle}>Error!!!</Text>
            <Text style={errorTextStyle}>Please allow access albums</Text>
          </View>
        </View>
      )
    }

    return (
      <View style={container}>
        <StatusBar hidden={true} />
          <NavBar 
            onPress={() => Actions.pop()}
            text={<Icon name={'times'} size={18} color={'black'} />}
            addContainerStyle={navStyle}
          />
          <View style={selectedPicContainer}>
            {this.selected()}
          </View>
          {this.renderContent()}
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
  },
  selectedPicContainer: {
    width: width,
    height: height * 0.4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  renderPic: {
  },
  selectedImage: {
    margin: 1,
  },
  imageContainer: {
    width: width * 0.33,
    height: height * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navStyle: {
    alignItems: 'center'
  },
  imageStyle: {
    width: width * 0.3,
    height: height * 0.2,
  },
  errorContainer: {
    marginTop: height * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorTextStyle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  }
}

export { PictureRoll };