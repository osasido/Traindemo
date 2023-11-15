import React, { FC, useState } from 'react'
import { Input } from '../components'
import { colors } from '../constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/Ionicons';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Pressable,
    Alert
} from 'react-native'
import { Button } from '../components';
import { NavigationProp } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';



interface props {
    navigation: NavigationProp<any>;
}

const App: FC<props> = ({ navigation }: props) => {
    const [name, setName] = useState<string | null>(null)
    const [email, setEmail] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)
    const [showpass, setShowpass] = useState<boolean>(false)
    const signup = async () => {
        if (name && email && password) {
            try {
                const user = await auth()
                    .createUserWithEmailAndPassword(email!, password!)
                    if (user) {
                        await firestore()
                            .collection('users')
                            .doc(user.user.uid)
                            .set({
                                name: name,
                                email: email,
                                password: password
                            })
                        Alert.alert('User account created & signed in!');
                     
                    }
            } catch (error) {
                console.log(error)
            }

        } else {
            Alert.alert('Please fill all the fields')
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contain}>
                {/* <View style={styles.containIn}>
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
                </View> */}
                <View style={styles.containIn}>
                    <Text
                        style=
                        {{
                            fontSize: 26,
                            color: colors.current,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginBottom: 4,
                            opacity: 0.9
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
                    <EvilIcons style={styles.icons} name='person-outline' color={colors.deepcurrent} size={24} />
                    <Input
                        placeholder='Name'
                        onChangeText={(text) => setName(text)}
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
                    <Icon style={styles.icons} name='email-outline' color={colors.deepcurrent} size={24} />
                    <Input
                        placeholder='Email Address'
                        keyboardType='email-address'
                        onChangeText={(text) => setEmail(text)}
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
                    <Icon style={styles.icons} name='lock-outline' color={colors.deepcurrent} size={24} />
                    <Input
                        placeholder='Password'
                        secureTextEntry={!showpass}
                        onChangeText={(text) => setPassword(text)}
                    />

                    <Icon style={styles.iconspass}
                        name={showpass ? 'eye-outline' : 'eye-off-outline'}
                        color={colors.deepcurrent} size={24} onPress={() => setShowpass(!showpass)} />
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
                    <Icon style={styles.icons} name='lock-outline' color={colors.deepcurrent} size={24} />
                    <Input
                        placeholder='Confirm Password'
                        secureTextEntry={!showpass}
                        onChangeText={(text) => setPassword(text)}
                    />

                    <Icon style={styles.iconspass}
                        name={showpass ? 'eye-outline' : 'eye-off-outline'}
                        color={colors.deepcurrent} size={24} onPress={() => setShowpass(!showpass)} />
                </View>
                <SafeAreaView style={styles.ButtonView}>
                    <Button
                        title='sign up'
                        onPress={signup}
                    />

                </SafeAreaView>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 10,
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}
                >
                    <Text
                        style={{ fontWeight: 'bold', color: colors.gray }}>
                        Already have an account?
                    </Text>
                    <Pressable
                        onPress={() => navigation.navigate('LogIn')}
                    >
                        <Text
                            style={{ fontWeight: 'bold', fontSize: 14, marginLeft: 5, color: colors.current }}
                        >
                            Sign In
                        </Text>
                    </Pressable>
                </View>


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
    ButtonView: {
        textAlign: 'center',
        justifyContent: 'center',
        height: 100,


    },
    iconspass: {
        right: 10,
        position: 'absolute',
        paddingTop: 40,

    },
})