import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

//단순히 스타일링이 된 Tab 모양의 컴포넌트이기에 함수형 컴포넌트로 제작
const TabComponent= (props)=>{

    const color= props.selected ? "#292929" : "#929292";
    containerStyle.borderBottomColor = color;

    return(
        //탭 터치가 되어야하기 때문에
        <TouchableOpacity style={containerStyle} onPress={props.onPress}>
            <Text style={{color: color}}>{props.label}</Text>
        </TouchableOpacity>
    );
}


  let containerStyle={
        flex:1,
        borderBottomWidth: 1,
        borderBottomColor: '#929292',
        paddingBottom: 8,
        alignItems:'center',
        justifyContent: 'center',
    }

export default TabComponent;