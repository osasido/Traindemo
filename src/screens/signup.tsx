import React, { FC } from 'react'
import { Input } from '../components'
import { colors } from '../constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {
    View,
    Text,
    StyleSheet,
    Button, 
    Dimensions,
    SafeAreaView
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
const { height, width } = Dimensions.get("screen");
const App: FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contain}>
                <View style={styles.containIn}>
                    <Text
                        style=
                        {{
                            fontSize: 36,
                            color: colors.deepcurrent,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            opacity: 0.9
                        }}
                    >
                        StudyCarePro
                    </Text>
                </View>
                <View style={styles.containIn}>
                    <Text
                        style=
                        {{
                            fontSize: 21,
                            color: colors.gray,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginBottom: 4
                        }}
                    >
                        Sign Up
                    </Text>
                </View>
                <View style={styles.iconView}>
                    <Text style=
                        {{
                            fontSize: 14,
                            color: colors.current,
                            fontWeight: 'bold',
                            marginBottom: 10,
                            marginTop: 10
                        }}
                    >Name</Text>
                    <EvilIcons style={styles.icons} name='user' color={colors.deepcurrent} size={30} />
                    <Input

                        onChangeText={(text) => console.log(text)}
                    />
                </View>

                <View style={styles.iconView}>
                    <Text style=
                        {{
                            fontSize: 14,
                            color: colors.current,
                            fontWeight: 'bold',
                            marginBottom: 10,
                            marginTop: 10
                        }}>Email Address</Text>
                    <Icon style={styles.icons} name='email-outline' color={colors.deepcurrent} size={30} />
                    <Input

                        onChangeText={(text) => console.log(text)}
                    />
                </View>
                <View style={styles.iconView}>
                    <Text
                        style=
                        {{
                            fontSize: 14,
                            color: colors.current,
                            fontWeight: 'bold',
                            marginBottom: 10,
                            marginTop: 10
                        }}>Password</Text>
                    <Icon style={styles.icons} name='lock-outline' color={colors.deepcurrent} size={30} />
                    <Input
                        onChangeText={(text) => console.log(text)}
                    />
                </View>
                <View style={styles.iconView}>
                    <Text
                        style=
                        {{
                            fontSize: 14,
                            color: colors.current,
                            fontWeight: 'bold',
                            marginBottom: 10,
                            marginTop: 10
                        }}>Confirm Password</Text>
                    <Icon style={styles.icons} name='lock-outline' color={colors.deepcurrent} size={30} />
                    <Input
                        onChangeText={(text) => console.log(text)}
                    />
                </View>
                <SafeAreaView style={styles.ButtonView}>
                        <Button
                       
                        title='sign up'
                        color={colors.current}
                        />  
                </SafeAreaView>

            </View>
        </SafeAreaView>
    )
}

export default App
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',

    },
    contain: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containIn: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    },
    iconView: {
        justifyContent: 'center',

    },
    icons: {
        left: 8,
        position: 'absolute',
        paddingTop: 40,


    },
    ButtonView:{
        textAlign: 'center',
        justifyContent: 'center',
        width: width/1.2,
        height: 55,
        borderRadius: 10,
        activeOpacity: 0.8,
    }
})