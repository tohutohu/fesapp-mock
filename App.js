import React, { Component } from 'react';
import { StyleProvider, Root, Container, Header, Content, Button, Text } from 'native-base'
import {createDrawerNavigator, createStackNavigator} from 'react-navigation'
import {StatusBar, Platform} from 'react-native'
import Expo from 'expo'
import Home from './src/screens/home/'
import SideBar from './src/screens/sidebar/'
import getTheme from './native-base-theme/components'
import variables from './native-base-theme/variables/commonColor'
import Detail from './src/screens/detail/'
import Tinder from './src/screens/tinder/'

const Drawer = createDrawerNavigator(
  {
    Home: Home,
    Detail: Detail,
    Tinder: Tinder
  },
  {
    initialRouteName: "Home",
    contentComponent: props => <SideBar {...props}/>
  },
)

const AppNavigator = createStackNavigator(
  {
    Drawer: Drawer,
    Home: Home,
    Detail: Detail,
    Tinder: Tinder
  },
  {
    headerMode: "none",
    cardStyle: {
      //paddingTop: (Platform.OS === 'ios')?0:StatusBar.currentHeight
    }
  }
)



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {loading: true}
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />
    }
    return (
      <StyleProvider style={getTheme(variables)}>
        <Root>
          <AppNavigator style={{paddingTop: StatusBar.currentHeight}} />
        </Root>
      </StyleProvider>
    );
  }

  async componentWillMount() {
    await this.loadFonts();
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({loading: false})
  }
}
