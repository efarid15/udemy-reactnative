import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

const CreateEmployee = ()=>{
    const [Name, setName]= useState("")
    const [Phone, setPhone]= useState("")
    const [Email, setEmail]= useState("")
    const [Salary, setSalary]= useState("")
    const [Picture, setPicture]= useState("")
    const [Modal, setModal]= useState(false)
    return(

        <View style={styles.root}>
            <TextInput
                label='Name'
                style={styles.inputStyle}
                value={Name}
                theme={theme}
                mode="outlined"
                onChangeText={text => setName(text)}
            />

            <TextInput
                label='Email'
                style={styles.inputStyle}
                value={Email}
                theme={theme}
                mode="outlined"
                onChangeText={text => setEmail(text)}
            />

            <TextInput
                label='Phone'
                style={styles.inputStyle}
                value={Phone}
                theme={theme}
                keyboardType="number-pad"
                mode="outlined"
                onChangeText={text => setPhone(text)}
            />

            <TextInput
                label='Email'
                style={styles.inputStyle}
                value={Email}
                theme={theme}
                mode="outlined"
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                label='Salary'
                style={styles.inputStyle}
                value={Salary}
                theme={theme}
                mode="outlined"
                onChangeText={text => setSalary(text)}
            />
        </View>

    )
}

const theme = {
    colors: {
        primary : "#006aff",
    }
}

const styles = StyleSheet.create({
    root: {
        flex:1,
    },
    inputStyle: {
        margin: 5,
    },
})

export default CreateEmployee