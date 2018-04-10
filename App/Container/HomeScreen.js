import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'

class HomeScreen extends Component {
    render () {
        return(
            <View style={styles.homeContainer}>
                <Text>This is my home Screen!</Text>
                <TouchableOpacity style={{
                    backgroundColor: 'orange'
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