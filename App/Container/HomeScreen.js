import React, {Component} from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import styles from './Styles/HomeScreenStyle'

class HomeScreen extends Component {
  render () {
    return (
      <View style={styles.homeContainer}>
        <Text>This is my home Screen!</Text>
        <TouchableOpacity style={{
          backgroundColor: 'orange',
          height: 100,
          width: 100
        }}>
          <Text>
              Go to the next Screen!
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default HomeScreen
