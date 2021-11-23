import React, { Component } from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import BigCatalog from './BigCatalog';


export default class BigCatalogList extends Component{

    state={
        movies: [],
    }

    render(){
        return(
            <View style={style.container}>
            <FlatList 
                pagingEnabled={true}
                horizontal={true}
                data={this.state.movies}
                renderItem={(obj)=>{
                    return <BigCatalog movie={obj.item}></BigCatalog>
                }}>
                
            </FlatList>
            </View>



        );

    }

    //render()실행 후 발동하는 라이프사이클 콜백 메소드 - 안드로이드에서의 onResume과 동일
    componentDidMount(){
        if(this.props.url) this.loadData()
    }
    //영화정보 받아오는 메소드
    loadData=()=>{
                //전달 받은 URL을 통해 json으로 인기 영화정보를 읽어오기
        fetch(this.props.url)
        .then(response=>response.json())
        .then(json => this.setState({movies:json.data.movies}))
    }
}

const style= StyleSheet.create({
    container:{
        height:300, marginBottom:8
    }
});
