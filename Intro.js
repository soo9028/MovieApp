import React, { Component } from 'react';
import {View, Text, StyleSheet, ActivityIndicator, Button} from 'react-native';




export default Intro=(props)=>{
    return(
        <View style={style.root}>
            <ActivityIndicator size="large" color="indigo"></ActivityIndicator>
            <Button title="GO" onPress={()=>{props.navigation.replace('LoginNav')}}></Button>
        </View>
    );
}

// export default Intro= (props)=>{
//     return(
//         <View style={style.root}>
//         <ActivityIndicator size="large" color="indigo">  </ActivityIndicator>
//             <Button title="Go" onPress={()=>{props.navigation.replace('LoginNav')}}></Button>
//     </View>
//     );
// }

const style = StyleSheet.create({
    root:{flex:1, jusifyContent:'center', alignItems: 'center',},
});