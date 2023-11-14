import React, { FC } from 'react'
import { 
    View, 
    Text,
    StyleSheet
} from 'react-native'

const App : FC = () => {
    return(
        <View style={styles.container}>
            <Text> this is the login page</Text>
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