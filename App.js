import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home'
import CreateEmployee from './screens/CreateEmployee';

export default function app() {
   return(
     <View style={styles.container}> 

        {/*<Home />*/}
        <CreateEmployee />
     </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebebeb",
    //alignItems: 'center',
    //justifyContent: 'center',

  },
});
