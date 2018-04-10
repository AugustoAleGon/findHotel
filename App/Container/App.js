import React, { Component } from 'react'
import {
  View,
  Platform
} from 'react-native'

// Importing Local Libraries
import DebugConfig from '../Config/DebugConfig'
import RootContainer from './RootContainer'

type Props = {};
class App extends Component<Props> {
  render () {
    return (
      <View style={{
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 20 : 0
      }}>
        <RootContainer />
      </View>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
