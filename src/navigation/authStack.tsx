import React, { FC } from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {signup, login} from '../screens'

const Stack = createStackNavigator()

const AuthStack: FC = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen
            
            name='SignUp'
            component={signup}
            />
             <Stack.Screen
            name='Log In'
            component={login}
            />
        </Stack.Navigator>
    )
}

export default AuthStack