import React, {Component} from 'react'
import {
    View
} from 'react-native'

class RootContainer extends Component {
    render () {
        return(
            <View>
                <ReduxNavigation />
            </View>
        )
    }
}

export default RootContainer