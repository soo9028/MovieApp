import { useFocusEffect } from '@react-navigation/core';
import React, { Component } from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';

export default class SubCatalogList extends Component{

    state={
        movies:[],
    }

    render(){
        return(
        <View style={style.container}>
            <View style={style.titleContainer}>
                <Text style={style.title}>{this.props.title}</Text>
            </View>

            <FlatList
                horizontal={true}
                data={this.state.movies}
                renderItem={({item,index})=>{
                    return(
                        <TouchableOpacity
                            activeOpacity={0.9}>
                            <Image 
                                source={{uri:item.large_cover_image}} 
                                style={{width:140, height:200 }}>

                            </Image>
                        </TouchableOpacity>
                        
                    );
                }}
                >
                
            </FlatList>
        </View>
        )}//render

        //render()실행 후 자동으로 발동하는 콜백 라이프사이클 메소드
        componentDidMount(){
        if(this.props.url) this.loadData();
        }

        //영화정보를 json으로 파싱하는 기능메소드
        loadData=()=>{
        fetch(this.props.url)
        .then(response=>response.json())
        .then(json=> this.setState({movies:json.data.movies}))
        }
}//class


const style=StyleSheet.create({
    container:{marginTop:8, marginBottom:8,},
    titleContainer:{padding:8},
    title:{fontSize:16, fontWeight:'bold', color:'#292929' }
});

