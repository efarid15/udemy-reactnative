import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Profile = ()=>{

    return (
        <View style={styles.root}>
            <LinearGradient
                colors={["#0033ff", "#6bc1ff"]}
                style={{height:"20%"}}
            />
            <View style={{alignItems:"center"}}>
                <Image
                    style={{width:140, height:140, borderRadius:140/2, marginTop:-50}}
                    source={{uri: "https://images.unsplash.com/photo-1575076169941-cf4c390ae240?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=777&q=80"}}
                />
            </View>
            
        </View>
    )

}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
})

export default Profile