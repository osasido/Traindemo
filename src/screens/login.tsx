import React, { FC, useState } from 'react'
import { 
    View, 
    Text,
    Dimensions,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Touchable,
    TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../constants'
import { Button } from '../components'
import {Input} from '../components'
import { NavigationProp } from '@react-navigation/native'
import  auth from '@react-native-firebase/auth'
interface props {
    navigation: NavigationProp<any>;
   
}

const App : FC<props> = ({navigation}: props) => {
    const [showpass, setShowpass] = useState<boolean>(false)
    const[email, setEmail] = useState<string | null>(null)
    const[password, setPassword] = useState<string | null>(null)
   
    auth()
    .createUserWithEmailAndPassword(email!, password!)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      // ...
    })


    return(
        <View style={styles.container}>
           <View style={styles.contain}>
             <View style={styles.containIn}>
                    <Text
                        style=
                        {{
                            fontSize: 30,
                            color: colors.deepcurrent,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            opacity: 0.9
                        }}
                    >
                        Welcome Back!
                    </Text>
                </View>
                <View style={styles.containIn}>
                    <Text
                        style=
                        {{
                            fontSize: 26,
                            color: colors.black,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginBottom: 4,
                            opacity: 0.9
                        }}
                    >
                        Sign In To continue
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
                        }}>Email Address</Text>
                    <Icon style={styles.icons} name='email-outline' color={colors.deepcurrent} size={24}  />
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
                name={showpass ?'eye-outline': 'eye-off-outline'} 
                color={colors.deepcurrent} size={24}  onPress={()=> setShowpass(!showpass)}/>
               
                    
                </View>
                <View style={{alignSelf:'flex-end', paddingRight:30, marginTop:5}}>
{/***************** FORGOT PASSWORD BUTTON *****************/}
<Pressable
  onPress={() =>
    navigation.navigate('Home', {
      userId: 'X0001',
    })
  }
>
  <Text  
  style={{fontWeight: 'bold', fontSize: 14, marginLeft:5, color:colors.current}}
  >
    Forgot Password?
    </Text>
</Pressable>
</View>

                <SafeAreaView style={styles.ButtonView}>
                        <Button
                        title='sign In'
                        onPress={() => console.log('sign up')}
                        />  
                         
                </SafeAreaView>
                
         

           </View>
           
        </View>
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
        left: 10,
        position: 'absolute',
        paddingTop: 40,


    },
    iconspass: {
        right: 10,
        position: 'absolute',
        paddingTop: 40,
        
    },
    ButtonView:{
        textAlign: 'center',
        justifyContent: 'center',
        height:100,
        
 
      
    }
})