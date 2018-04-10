import React, { Component } from 'react'
import {
  Text,
  View,
  Platform
} from 'react-native'

// Importing Local Libraries
import DebugConfig from '../Config/DebugConfig'

type Props = {};
class App extends Component<Props> {
  render () {
    return (
      <View style={{
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 20 : 0
      }}>
        <Text>
          Welcome to React Native!
        </Text>
        <Text>
          To get started, edit App.js
        </Text>
        <Text>
          Hello App!
        </Text>
      </View>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
