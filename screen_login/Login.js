import React,{Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import InputComponent from '../components/InputComponent';

export default class Login extends Component{
    render(){
        return (
            <View style={style.root}>
                {/* 크게 2개영역으로 구성 : 로그인 콘텐츠영역, 아래쪽의 회사이름 or 앱이름 표시영역 */}
                {/* 1. 로그인 콘텐츠 영역 */}
                <View style={style.content}>
                    {/* 1.1 로그글씨 */}
                    <Text style={style.logo}>MOVIE App</Text>

                    {/* 1.2 이메일/패스워드 입력박스 */}
                    {/* TextInput은 로그인,회원가입,비밀번호리셋 화면에 모두 사용되므로 사용빈도 높음. 스타일링된 별도 컴포넌트를 만들어 재사용하기!! */}
                    <InputComponent onChageText={(value)=>{}} secureTextEntry={false} placeholder="이메일"></InputComponent>
                    <InputComponent onChageText={(value)=>{}} secureTextEntry={true} placeholder="비밀번호"></InputComponent>
                    
                    {/* 1.3 비밀번호 재설정 */}
                    <Text style={style.resetPW}>비밀번호 재설정</Text>

                    {/* 1.4 로그인 버튼 */}
                    <View style={{width:'100%', marginBottom:24}}>
                    <Button title="로그인" color="#3796EF"></Button>
                    </View>

                    {/* 1.5 회원가입 */}
                    <Text>
                        계정이 없으신가요? <Text>가입하기</Text>
                    </Text>


                </View>

                {/* 2. footer영역 */}
                <View style={style.footer}>
                    <Text style={style.footerCopyright}>MovieApp by Soojung</Text>
                </View>
                              
            </View>
        );
    }
}

const style= StyleSheet.create({
    root:{flex:1, backgroundColor:'#FEFFFF'},
    content:{
        flex:1, 
        justifyContent:'center',
        alignItems:'center',
        padding:32,
    },
    footer:{
        borderTopWidth:1,
        borderTopColor:'#D3D3D3',
        padding:8,
    },
    footerCopyright:{
        color:'#929292',
        textAlign:'center',
    },
    logo:{
        color:'#292929',
        fontSize:40,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:32,
    },

    resetPW:{
        width:'100%',
        textAlign: 'right',
        color: '#3796EF',
        marginTop: 8,
        marginBottom: 16,
        marginRight:8
    },

    signup:{
        color:"#929292",
        textAlign:'center'
    },

    signuplink:{
        color:'#3796EF'
    }


});