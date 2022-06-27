import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { TextInput } from 'react-native-paper';
import Welcome from './Welcome';


export default function Login({navigation}){

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [valid, setValid] = useState(true)



 
    const handlePress = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if(reg.test(email) === false || pass === "")
            setValid(false)
        else{
            navigation.navigate('Dashboard')
            setValid(true)
        }
    }

    return(
        <View style = {{flex: 1, justifyContent: "center", flexDirection: 'column', backgroundColor : "white"}}>
        <View style = {{paddingLeft: 10, paddingRight: 10}}>
            <View style = {{paddingBottom: 500}}>
                <Welcome/>
            </View>
            <TextInput
                    label="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    mode='outlined'
            />
        </View>
        <View style = {{paddingBottom: 100}}>
        <View style = {{paddingLeft: 10, paddingRight: 10}}>
            <TextInput
                    label="Password"
                    value={pass}
                    onChangeText={(text) => setPass(text)}
                    mode='outlined'
            />
        </View>
        <View style = {{paddingLeft: 50, paddingRight: 50, paddingTop: 10}}>
            <Button title = "Login" onPress = {handlePress}/>        
        </View>
        <View>
            {valid === false ? <Text style = {{fontSize:22,
                     marginLeft:120,
                     color:"red",
                     fontWeight:"bold"}}>Invalid Inputs</Text> : <Text></Text>} 
        </View>
        </View>
    </View>
    )
}

