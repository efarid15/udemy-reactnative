import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Card, FAB } from 'react-native-paper';

const Home=()=> {
    const data = [
        {id: 1, nama: 'Enal Farid', role: 'Lead Developer'},
        {id: 2, nama: 'Ilham Sabar', role: 'Backend Developer'},
        {id: 3, nama: 'Gustang', role: 'FrontEnd Developer'},
        {id: 4, nama: 'Sultan', role: 'Mobile Apps Developer'},
        {id: 5, nama: 'Bob', role: 'Network'},
        {id: 6, nama: 'Redeka', role: 'UI/UX Designer'},
        {id: 7, nama: 'Didot', role: 'UI Designer'},
        {id: 8, nama: 'Fadli', role: 'API Developer'},
        {id: 9, nama: 'Bob', role: 'Network'},
        {id: 10, nama: 'Redeka', role: 'UI/UX Designer'},
        {id: 11, nama: 'Didot', role: 'UI Designer'},
        {id: 12, nama: 'Fadli', role: 'API Developer'},
    ]

    const renderList = ((item)=>{
        return(
        <Card style={styles.mycard}>
            <View style={styles.cardview}>
                <Image 
                style={{width:60, height:60, borderRadius:30}}
                source={{uri:"https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80"}}
                />
                <View style={{marginLeft:10}}>
                    <Text style={styles.text}>{item.nama}</Text>
                    <Text style={styles.text}>{item.role}</Text>
                </View>
                
            </View>
            
        </Card>
        )
    })
    return(
        <View>
            <FlatList 
                data={data}
                renderItem={({item})=>{
                    return renderList(item)
                }}
                keyExtractor={item=>`${item.id}`}
            />
            <FAB
                style={styles.fab}
                small={false}
                icon="plus"
                theme={{colors:{accent:"#006aff"}}}
                onPress={() => console.log('Pressed')}
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    mycard: {
        margin: 5,
        
    },
    cardview: {
        flexDirection: "row",
        padding: 5,
    },
    text: {
        fontSize: 18,
        
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
})

export default Home