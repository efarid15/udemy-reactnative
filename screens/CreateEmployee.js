import React,{useState} from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const CreateEmployee = ()=>{
    const [Name, setName]= useState("")
    const [Phone, setPhone]= useState("")
    const [Email, setEmail]= useState("")
    const [Salary, setSalary]= useState("")
    const [picture, setPicture]= useState("")
    const [modal, setModal]= useState(false)
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
            <Button
                style={styles.inputStyle}
                theme={theme}
                icon="upload" 
                mode="contained" 
                onPress={() => setModal(true)}
            >
                Upload Image
            </Button>

            <Button
                style={styles.inputStyle}
                theme={theme}
                icon="content-save" 
                mode="contained" 
                onPress={() => console.log('simpan')}
            >
                Simpan
            </Button>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modal}
                onRequestClose={()=>{
                    setModal(false)
                }}
            >
                <View style={styles.modalView}>
                    <View style={styles.modalButtonView}>
                        <Button
                            theme={theme} 
                            icon="camera" 
                            mode="contained" 
                            onPress={() => 
                            console.log("pressed camera")}
                        >
                            Camera
                        </Button>

                        <Button 
                            theme={theme}
                            icon="image-area" 
                            mode="contained" 
                            onPress={() => console.log("pressed gallery")}
                        >
                            Gallery
                        </Button>
                    </View>
                    
                        <Button
                            theme={theme}
                            onPress={() => setModal(false)}
                        >
                            Cancel
                        </Button>
                </View>
                            
            </Modal>
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
    modalView: {
        position: "absolute",
        bottom: 2,
        width: "100%",
        backgroundColor: "white"
    },
    modalButtonView:{
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
    },
})

export default CreateEmployee