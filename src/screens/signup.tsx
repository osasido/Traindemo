import React, { FC } from 'react'
import InputButton from '../components/input'
import { colors } from '../constants'
import { 
    View, 
    Text,
    StyleSheet
} from 'react-native'

const App : FC = () => {
    return(
        <View style={styles.container}>
            <Text> this is sign up page</Text>
        </View>
    )
}

export default App
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    
    },
})