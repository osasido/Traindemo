import React,{FC} from "react";
import { TextInput, StyleSheet, View, Dimensions } from "react-native";
import { colors } from "../constants";
interface InputProps {
    // placeholder: string;
    // value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
}
const { height,width } = Dimensions.get("screen");

const Input : FC <InputProps> = (props) => {
    return(
        <View style={styles.constainer}>
        <TextInput
            style={styles.input}
            // placeholder={props.placeholder}
            // // value={props.value}
            onChangeText={props.onChangeText}
            secureTextEntry={props.secureTextEntry}
       
        />
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    constainer:{
        width: width/1.2,
        alignSelf: 'center',
        borderRadius:5,
        margin: 2,
        
        
    },
    input:{
        paddingLeft:45,
        height: 50,
        borderBottomWidth: 1,
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    }

})