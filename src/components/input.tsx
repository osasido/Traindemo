import React,{FC} from "react";
import { TextInput, StyleSheet, View, Dimensions } from "react-native";
import { colors } from "../constants";
interface InputProps {
    placeholder: string;
    // value: string;
    keyboardType?: any;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
}
const { height,width } = Dimensions.get("screen");

const Input : FC <InputProps> = (props) => {
    return(
        <View style={styles.constainer}>
        <TextInput
            style={styles.input}
            placeholder={props.placeholder}
            // // value={props.value}
            keyboardType={props.keyboardType}
            onChangeText={props.onChangeText}
            secureTextEntry={props.secureTextEntry}
            underlineColorAndroid='transparent'
       
        />
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    constainer:{
        width: '90%',
        flexDirection: 'row',
        allignItems: 'center',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: colors.current,
        paddingHorizontal: 10,
      
    },
    input:{
        marginHorizontal: 30,
         flex: 1,
        color: colors.black,
        
    }

})