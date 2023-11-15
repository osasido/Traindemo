import React, { FC } from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {signup, login} from '../screens'
type RootStackParamList = {
    SignUp: undefined;
    LogIn: undefined;
    navigate?: any;
  };

const Stack = createStackNavigator<RootStackParamList>()

const AuthStack: FC = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen
            
            name='SignUp'
            component={signup}
            />
             <Stack.Screen
            name='LogIn'
            component={login}
            />
        </Stack.Navigator>
    )
}

export default AuthStack