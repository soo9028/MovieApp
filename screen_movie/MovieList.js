import React, { Component } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, Alert} from 'react-native';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import BigCatalogList from '../components_movie/BigCatalogList';
import SubCatalogList from '../components_movie/SubCatalogList';


export default class MovieList extends Component{
    render(){

         //인기 영화 정보 불러오는 url [get방식]
        const bigUrl="https://yts.lt/api/v2/list_movies.json?sort_by=like_count&order_by=desc&limit=5";

        // 최신등록순 영화 정보 불러오는 url 
         const recentUrl="https://yts.lt/api/v2/list_movies.json?sort_by=date_added&order_by=desc&limit=10";
 
        // 평점순 영화 정보 불러오는 url 
         const ratingtUrl="https://yts.lt/api/v2/list_movies.json?sort_by=rating&order_by=desc&limit=10";
 
        // 다운로드순 영화 정보 불러오는 url 
        const downloadUrl="https://yts.lt/api/v2/list_movies.json?sort_by=download_count&order_by=desc&limit=10";
        


        return (
            <ScrollView style={{flex:1, backgroundColor: '#FEFFFF',}}>
                {/* //가장 큰 이미지로 인기가 높은 영화리스트를 가로 스크롤 */}
                {/* 별도의 컴포넌트로 분리 제작 */}
                <BigCatalogList url={bigUrl}></BigCatalogList>

                {/* 최신 등록순, 평점순, 다운로드순으로 영화목록 보여주는 작은 사이즈의 가로 스크롤 */}
                {/* 같은 UI에 내용만 다르기에 별도의 컴포넌트로 제작하여 재사용하기 */}
                <SubCatalogList title="최신등록순" url={recentUrl}></SubCatalogList>

                <SubCatalogList title="평점순" url={ratingtUrl}></SubCatalogList>
                
                <SubCatalogList title="다운로드순" url={downloadUrl}></SubCatalogList>

            </ScrollView>
        )
    }
        //render() 실행 후에 자동으로 실행되는 라이프사이클메소드
    //헤더영역을 수정
    componentDidMount(){
        this.props.navigation.setOptions({
            headerTitleAlign:'center',
            headerRight:()=>{
                return (
                    <TouchableOpacity style={{marginRight:16}} onPress={()=>{this.props.navigation.openDrawer()}}>
                        <Image source={require('../images/ic_menu.png')}></Image>
                    </TouchableOpacity>
                )
            },

            headerLeft:()=>(
                <TouchableOpacity style={{flexDirection:'row', marginLeft:16, }} onPress={async()=>{
                    //원래는 서버 작업이 필요하지만, 주어진 시간 상 만들 수 없으니, AsyncStorage에 저장된 내용을 지울 것임.
                    Alert.alert()
                    await AsyncStorage.removeItem('email')
                    this.props.navigation.replace('Intro')
                }}>
                    <Image source={require('../images/Tabs/ic_profile.png')}></Image>
                    <Text style={{marginLeft:4}}>로그아웃</Text>
                </TouchableOpacity>
            )
        
        });
    }

}