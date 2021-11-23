//## 앱 제작 주요 순서
//1)react navigation, asyncstorage라이브러리 설치
//2)intro 화면 컴포넌트 제작 [Intro.js]
//3) Login 관련 화면 컴포넌트와 navigator 제작
//4) 앱의 주요 기능 및 서버기능 관련 작업
// 4.1) 앱의 주요기능 화면 컴포넌트와 Navigator제작
// 4.2) 앱의 서브기능(커뮤니티 등) 화면 컴포넌트들과 Navigator제작 

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Intro from './Intro';
import LoginNav from './navigators/LoginNav';
import MainDrawerNav from './navigators/MainDrawerNav';

//최상위 Navigator에 의해 전환될 스크린(컴포넌트) or Navigator
//기존 로그인 여부를 체크하는 화면 컴포넌트

//앱 전체 화면들을 전환할 때 사용할  Navigator 객체 생성
const RootStack= createStackNavigator();

//NavigationContainer을 가진 최상위 root 컴포넌트 - 앱의 시작점

export default class Main extends Component{
    render(){
        return(
            <NavigationContainer>
                    <RootStack.Navigator screenOptions={{headerShown:false}}>
                    <RootStack.Screen name="Intro" component={Intro}></RootStack.Screen>       
                    <RootStack.Screen name="LoginNav" component={LoginNav}></RootStack.Screen>
                    <RootStack.Screen  name="MainDrawerNav" component={MainDrawerNav}></RootStack.Screen>
                    </RootStack.Navigator>
            </NavigationContainer>
        );
    }
}
