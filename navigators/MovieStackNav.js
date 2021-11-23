import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MovieList from '../screen_movie/MovieList';

const Stack= createStackNavigator();

//단순 Navigator이기에 함수형 컴포넌트로 제작
const MovieStackNav= ()=>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="MovieList" component={MovieList}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default MovieStackNav