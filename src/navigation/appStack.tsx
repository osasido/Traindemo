import React, { FC } from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {home, dashboard} from '../screens'
type RootStackParamList = {
    Home: undefined;
    DashBoard: undefined;
    navigate?: any;
  };
const Stack = createStackNavigator<RootStackParamList>()

const AppStack: FC = () => {
    return(
        <Stack.Navigator  screenOptions={{headerShown:false}}>
            <Stack.Screen
            name='Home'
            component={home}
            />
             <Stack.Screen
            name='DashBoard'
            component={dashboard}
            />
        </Stack.Navigator>
    )
}

export default AppStack