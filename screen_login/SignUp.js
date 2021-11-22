import React, { Component } from 'react';
import {View, Text, StyleSheet, Button, TextInputComponent} from 'react-native';
import TabComponent from '../components/TabComponents';
import InputComponent from '../components/InputComponent'


export default class SignUp extends Component{

    state={
        tabs:['전화번호', '이메일'],
        tabIndex:0, //현재 선택된 탭 번호
    }

    //탭 버튼을 눌렀을 때 실행시키려는 함수
    setTabIndex=(index)=>{
        this.setState({tabIndex:index});
    }

    render(){
        return(
            <View style={style.root}>
                {/* 크게 2개 영역 */}
                {/* 1. 회원가입 콘텐츠 영역 */}
                 <View style={style.content}>

                     {/* 1.1 전화번호/이메일 중 원하는 정보로 회원가입이 되도록 탭으로 구성 */}
                     {/* 탭 컴포넌트를 여러곳에서 사용하도록 별도의 component로 설계 */}
                     <View style={{flexDirection:'row', marginBottom:16}}>
                        {
                            this.state.tabs.map((value, index)=>{
                                return <TabComponent onPress={()=>{this.setTabIndex(index)}} selected={index==this.state.tabIndex} label={value}></TabComponent>
                            })
                        }
                     </View>

                     {/* 1.2 정보 입력 영역 */}
                        <InputComponent placeholder={this.state.tabs[this.state.tabIndex]}></InputComponent>

                     {/* 1.3 이메일 탭일 때만 보이는 비밀번호 입력창 */}
                      {
                          //if 문법 사용 불가
                          //&&연산자를 통해 앞의 조건이 true일때 &&의 다음 코드가 실행되도록...
                          this.state.tabIndex==1 && <InputComponent placeholder="비밀번호" secureTextEntry={true}></InputComponent>
                      }

                      {/* 1.4 전화번호 탭일 때는 [다음버튼]*/}
                      {
                        this.state.tabIndex==0 && <View style={{width:'100%', margin:16}}><Button title="다음" onPress={()=>{this.setTabIndex(1)}}></Button></View>
                      }
                      {/* 1.4.2 이메일 탭일 때는 [다음버튼]*/}
                      {
                        this.state.tabIndex==1 && <View style={{width:'100%', margin:16}}><Button title="완료" onPress={()=>this.props.navigation.goBack()}></Button></View>
                      }
                      {/* 1.5 전화번호일 때만 보여주는 안내메시지 */}
                      {
                        this.state.tabIndex==0 && <Text style={style.telMessage}>Movie App의 업데이트 내용을 SMS로 수신할 수 있으며, {'\n'}언제든지 수신을 취소할 수 있습니다.</Text>
                      }



                </View>   
                {/* 2. footer 영역 */}
                <View style={style.footer}>
                    <Text style={style.footerMsg}>
                    이미 계정이 있으신가요?
                    <Text onPress={()=>{this.props.navigation.goBack()}} style={style.goBack}> 로그인 </Text>
                    </Text> 
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({

    root:{
        flex:1,
        backgroundColor:'#FEFFFF'
    },

    content:{
        flex:1,
        width: '100%',
        alignItems: 'center',
        padding: 32,

    },

    footer:{
        borderTopWidth: 1,
        borderTopColor:'#D3D3D3',
        padding:8
    },
    footerMsg:{
        color:'#929292',
        textAlign:'center'
    },
    goBack:{
        color:'#3796EF'
    },

    telMessage:{
        textAlign:'center',
        fontSize:12,
        color:"#929292",
        marginLeft:8,
        marginRight:8
    }



});