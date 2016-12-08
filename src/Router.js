import React from 'react';
import { Text, View } from 'react-native';
import { Router, Scene, Actions, Modal, ActionConst } from 'react-native-router-flux';

import MainContainer from './component/MainContainer';
import Login from './component/Login';
import SignEmail from './component/signup/SignEmail';
import SignPassword from './component/signup/SignPassword';
import SignName from './component/signup/SignName';
import AddTravel from './component/AddTravel';
import CameraRoll from './component/Tabs/CameraRoll'
import Capture from './component/Capture';
import { MainTab, Search, Love, Profile, Camera, PictureRoll, VideoRoll } from './component/Tabs';


import Icon from 'react-native-vector-icons/FontAwesome';

const TabIcon = ({ selected ,title }) => { 
  const color = selected ? '#900' : '#898e89'
  return (
    <Icon name={title} size={23} color={color} />
  );
}

const NestedTabIcon = ({ selected ,title }) => { 
  const color = selected ? '#900' : '#898e89'
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}



const cameraButton = <Icon name={'camera'} size={20} color={'black'}/>
const plusCircle = <Icon name={'plus-circle'} size={23} color={'black'} />


const Routers = () => {
  return (
    <Router>
      <Scene key="main" component={MainContainer} title="MainContainer" hideNavBar={true}/>
      <Scene key="login"  component={Login} title="Log In" />
      <Scene key="signup">
        <Scene key="email" component={SignEmail} title="Email" />
        <Scene key="password" component={SignPassword} title="Password"/>
        <Scene key="name" component={SignName} title="Name"/>
      </Scene>


      <Scene key="tabbar" tabs={true} tabBarStyle={{ backgroundColor: '#ffffff', borderTopWidth: 0.5, }} initial={true}>
        <Scene 
          key="mainTab" 
          component={MainTab} 
          title="home" 
          icon={TabIcon} 
        />
        <Scene key="Search" component={Search} title="search" icon={TabIcon} hideNavBar={true}/>        
        <Scene 
          key="modal" 
          title="camera"  
          onPress={()=> { Actions.nested() }} 
          schema="modal" 
          icon={TabIcon} 
          hideTabBar={true}
        >


        </Scene>
        <Scene key="Love" component={Love} title="heart" icon={TabIcon} hideNavBar={true}/>
        <Scene key="Profile" component={Profile} title="user" icon={TabIcon}/>
      </Scene>
      <Scene key="add" component={AddTravel} title="Add your Travel" />

      <Scene key="nested" tabs={true} direction='vertical' tabBarStyle={{ backgroundColor: '#ffffff', borderTopWidth: 0.5 }}>

        <Scene key="PictureRoll" title="Library" component={PictureRoll} hideNavBar={true} icon={NestedTabIcon} />
        <Scene key="CameraRoll" title="Photo" component={CameraRoll} hideNavBar={true} icon={NestedTabIcon} />
        <Scene key="VideoRoll" title="Video" component={VideoRoll} hideNavBar={true} icon={NestedTabIcon} />
            
      </Scene>

      <Scene key="Capture" title="Captured Picture" component={Capture} />

    </Router>
  )
}

export default Routers