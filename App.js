import { 
  StyleSheet, 
  View,
} from 'react-native'; 
import { createContext, useState } from 'react';
import React from 'react';

//스크린 폴더
import Start from './Screens/Start'//시작화면
import Select from './Screens/Select' //선택화면

import TeachLogin from './Screens/TeachLogin' //선생님 페이지
import TeachSignUp from './Screens/TeachSignUp'
import StuLogin from './Screens/StuLogin'; //학생 로그인 페이지
import SignUp from './Screens/SignUp';

import Question1 from './Screens/Question1';//질문 1
import Select1 from './Screens/Select1' //질문1 선택창
import Q1StrategyA from './Screens/Q1StrategyA' //답변A 창1
import Q1StrategyA2 from './Screens/Q1StrategyA2' //답변A 창2
import Q1StrategyB from './Screens/Q1StrategyB' //답변B 창1
import Q1StrategyC from './Screens/Q1StrategyC' //답변 C 창1
import Q1StrategyABCConfirmation from './Screens/Q1StrategyABCConfirmation' //문제1,2 끝


import Question2 from './Screens/Question2';//질문 2
import Select2 from './Screens/Select2' //질문2 선택창
import Q2StrategyA from './Screens/Q2StrategyA' //답변A 창1
import Q2StrategyA2 from './Screens/Q2StrategyA2' //답변A 창2
import Q2StrategyB from './Screens/Q2StrategyB' //답변B 창1
import Q2StrategyB2 from './Screens/Q2StrategyB2' //답변B 창2
import Q2StrategyC from './Screens/Q2StrategyC' //답변C 창1
import Q2StrategyAConfirmation from './Screens/Q2StrategyAConfirmation' //문제1 끝
import Q2StrategyBCConfirmation from './Screens/Q2StrategyBCConfirmation' //문제23 끝

import Question3 from './Screens/Question3';//질문 3
import Select3 from './Screens/Select3' //질문2 선택창
import Q3StrategyA from './Screens/Q3StrategyA' //답변A 창1
import Q3StrategyA2 from './Screens/Q3StrategyA2' //답변A 창2
import Q3StrategyB from './Screens/Q3StrategyB' //답변B 창1
import Q3StrategyB2 from './Screens/Q3StrategyB2' //답변B 창2
import Q3StrategyC from './Screens/Q3StrategyC' //답변C 창1
import Q3StrategyC2 from './Screens/Q3StrategyC2' //답변C 창2
import Q3StrategyC3 from './Screens/Q3StrategyC3' //답변C 창3
import Q3StrategyABCConfirmation from './Screens/Q3StrategyABCConfirmation' //문제 123끝

import Question4 from './Screens/Question4';//질문 4
import Select4 from './Screens/Select4' //질문4 선택창
import Q4StrategyA from './Screens/Q4StrategyA' //답변A 창1
import Q4StrategyA2 from './Screens/Q4StrategyA2' //답변A 창2
import Q4StrategyA3 from './Screens/Q4StrategyA3' //답변A 창3
import Q4StrategyA4 from './Screens/Q4StrategyA4' //답변A 창4
import Q4StrategyB from './Screens/Q4StrategyB' //답변B 창1
import Q4StrategyB2 from './Screens/Q4StrategyB2' //답변B 창2
import Q4StrategyB3 from './Screens/Q4StrategyB3' //답변B 창3
import Q4StrategyB4 from './Screens/Q4StrategyB4' //답변B 창4
import Q4StrategyC from './Screens/Q4StrategyC' //답변C 창1
import Q4StrategyC2 from './Screens/Q4StrategyC2' //답변C 창2
import Q4StrategyC3 from './Screens/Q4StrategyC3' //답변C 창3
import Q4StrategyC4 from './Screens/Q4StrategyC4' //답변C 창4
import Q4StrategyABCConfirmation from './Screens/Q4StrategyABCConfirmation' //문제 123끝

import Question5 from './Screens/Question5';//질문 5
import Select5 from './Screens/Select5' //질문5 선택창
import Q5StrategyA from './Screens/Q5StrategyA' //답변A 창1
import Q5StrategyA2 from './Screens/Q5StrategyA2' //답변A 창2
import Q5StrategyB from './Screens/Q5StrategyB' //답변B 창1
import Q5StrategyB2 from './Screens/Q5StrategyB2' //답변B 창2
import Q5StrategyC from './Screens/Q5StrategyC' //답변C 창1
import Q5StrategyC2 from './Screens/Q5StrategyC2' //답변C 창2
import Q5StrategyABCConfirmation from './Screens/Q5StrategyABCConfirmation' //문제 123끝

import Question6 from './Screens/Question6';//질문 6
import Select6 from './Screens/Select6' //질문6 선택창
import Q6StrategyA from './Screens/Q6StrategyA' //답변A 창1
import Q6StrategyA2 from './Screens/Q6StrategyA2' //답변A 창2
import Q6StrategyB from './Screens/Q6StrategyB' //답변B 창1
import Q6StrategyB2 from './Screens/Q6StrategyB2' //답변B 창2
import Q6StrategyB3 from './Screens/Q6StrategyB3' //답변B 창3
import Q6StrategyB4 from './Screens/Q6StrategyB4' //답변B 창4
import Q6StrategyC from './Screens/Q6StrategyC' //답변C 창1
import Q6StrategyC2 from './Screens/Q6StrategyC2' //답변C 창2
import Q6StrategyABConfirmation from './Screens/Q6StrategyABConfirmation' //문제 12끝
import Q6StrategyCConfirmation from './Screens/Q6StrategyCConfirmation' //문제 3끝

import Question7 from './Screens/Question7';//질문 7
import Select7 from './Screens/Select7' //질문7 선택창
import Q7StrategyA from './Screens/Q7StrategyA' //답변A 창1
import Q7StrategyA2 from './Screens/Q7StrategyA2' //답변A 창2
import Q7StrategyA3 from './Screens/Q7StrategyA3' //답변A 창3
import Q7StrategyB from './Screens/Q7StrategyB' //답변B 창1
import Q7StrategyB2 from './Screens/Q7StrategyB2' //답변B 창2
import Q7StrategyB3 from './Screens/Q7StrategyB3' //답변B 창3
import Q7StrategyC from './Screens/Q7StrategyC' //답변C 창1
import Q7StrategyC2 from './Screens/Q7StrategyC2' //답변C 창2
import Q7StrategyABCConfirmation from './Screens/Q7StrategyABCConfirmation' //문제 123끝

import Question8 from './Screens/Question8';//질문 8
import Select8 from './Screens/Select8' //질문8 선택창
import Q8StrategyA from './Screens/Q8StrategyA' //답변A 창1
import Q8StrategyA2 from './Screens/Q8StrategyA2' //답변A 창2
import Q8StrategyA3 from './Screens/Q8StrategyA3' //답변A 창3
import Q8StrategyA4 from './Screens/Q8StrategyA4' //답변A 창4
import Q8StrategyB from './Screens/Q8StrategyB' //답변B 창1
import Q8StrategyB2 from './Screens/Q8StrategyB2' //답변B 창2
import Q8StrategyB3 from './Screens/Q8StrategyB3' //답변B 창3
import Q8StrategyC from './Screens/Q8StrategyC' //답변C 창1
import Q8StrategyC2 from './Screens/Q8StrategyC2' //답변C 창2
import Q8StrategyC3 from './Screens/Q8StrategyC3' //답변C 창3
import Q8StrategyAConfirmation from './Screens/Q8StrategyAConfirmation' //문제 1끝
import Q8StrategyBCConfirmation from './Screens/Q8StrategyBCConfirmation' //문제 23끝

import Finish from './Screens/Finish' // 문제 끝

//컴포넌트 폴더
import { NavigationContainer } from '@react-navigation/native'; //네비게이터 이미지 전환
import { createStackNavigator } from '@react-navigation/stack'; //네비게이터 생성

// contextAPI 사용 위해 선언
export const MyStore = React.createContext('');

const Stack = createStackNavigator();//네비게이터 스택 생성
export default function App() {
  // 다른 스크린에서 사용할 수 있는 변수 전송을 위한 전역변수 선언(useState)
  const [stuid, setStuid] = useState("id");
  // 로그인 화면에서 학생이 입력한 학생 이름이 들어오면 그 이름을 전역변수 값에 적용하는 함수
  const changeID = (id)=> {
    setStuid(id)
  };

  return (
    // App.js 전체를 감싸 내부의 스크린들이 모두 사용할 수 있는 전역변수 값 전송
    <MyStore.Provider value={{stuid,changeID}}>
    <NavigationContainer>

      {/* 초기화면 */}
      <Stack.Navigator initialRouteName='Start'>
      {/* --------------------------------------------------------------------------------------------- */} 
        <Stack.Screen
         name = "Start" component={Start} //시작화면
        />
        <Stack.Screen
         name = "Select" component={Select} //선택화면
        />
      {/* --------------------------------------------------------------------------------------------- */}
        <Stack.Screen
         name = "TeachLogin" component={TeachLogin} //선생님 로그인 화면
        />
        <Stack.Screen
         name = "TeachSignUp" component={TeachSignUp} //선생님 회원가입 화면
        />
        <Stack.Screen
         name = "StuLogin" component={StuLogin} //로그인 화면
        />
        <Stack.Screen
          name = "SignUp" component = {SignUp} //회원가입
        />
      {/* --------------------------------------------------------------------------------------------- */}
        <Stack.Screen
         name = "Question1" component={Question1} //문제1
        />
        <Stack.Screen
         name = "Select1" component={Select1} //문제1 선택창
        />
        <Stack.Screen
         name = "Q1StrategyA" component={Q1StrategyA} //전략A답변1 
        />
        <Stack.Screen
         name = "Q1StrategyA2" component={Q1StrategyA2} //전략A.답변2
        />
        <Stack.Screen
         name = "Q1StrategyB" component={Q1StrategyB} //전략 B 답변1
        />
        <Stack.Screen
         name = "Q1StrategyC" component={Q1StrategyC} //전략C 답변1
        />
        <Stack.Screen
         name = "Q1StrategyABCConfirmation" component={Q1StrategyABCConfirmation} //문제 클리어
        />
      {/* --------------------------------------------------------------------------------------------- */}
        <Stack.Screen
         name = "Question2" component={Question2} //문제2
        />
        <Stack.Screen
         name = "Select2" component={Select2} //문제2 선택창
        />
        <Stack.Screen
         name = "Q2StrategyA" component={Q2StrategyA} //전략A답변1 
        />
        <Stack.Screen
         name = "Q2StrategyA2" component={Q2StrategyA2} //전략A.답변2
        />
        <Stack.Screen
         name = "Q2StrategyB" component={Q2StrategyB} //전략B.답변1
        />
        <Stack.Screen
         name = "Q2StrategyB2" component={Q2StrategyB2} //전략B.답변2
        />
        <Stack.Screen
         name = "Q2StrategyC" component={Q2StrategyC} //전략C.답변1
        />
        <Stack.Screen
         name = "Q2StrategyAConfirmation" component={Q2StrategyAConfirmation} //문제1 모두 정답
        />
        <Stack.Screen
         name = "Q2StrategyBCConfirmation" component={Q2StrategyBCConfirmation} //문제23 모두 정답
        />
      {/* --------------------------------------------------------------------------------------------- */}
        <Stack.Screen
         name = "Question3" component={Question3} //문제3
        />
        <Stack.Screen
         name = "Select3" component={Select3} //문제3 선택창
        />
        <Stack.Screen
         name = "Q3StrategyA" component={Q3StrategyA} //전략A답변1 
        />
        <Stack.Screen
         name = "Q3StrategyA2" component={Q3StrategyA2} //전략A답변2
        />
        <Stack.Screen
         name = "Q3StrategyB" component={Q3StrategyB} //전략B답변1
        />
        <Stack.Screen
         name = "Q3StrategyB2" component={Q3StrategyB2} //전략B답변2
        />
        <Stack.Screen
         name = "Q3StrategyC" component={Q3StrategyC} //전략C답변1
        />
        <Stack.Screen
         name = "Q3StrategyC2" component={Q3StrategyC2} //전략C답변2
        />
        <Stack.Screen
         name = "Q3StrategyC3" component={Q3StrategyC3} //전략C답변3
        />
        <Stack.Screen
         name = "Q3StrategyABCConfirmation" component={Q3StrategyABCConfirmation} //문제123 클리어
        />
      {/* --------------------------------------------------------------------------------------------- */}
        <Stack.Screen
         name = "Question4" component={Question4} //문제4
        />
        <Stack.Screen
         name = "Select4" component={Select4} //문제4 선택창
        />
        <Stack.Screen
         name = "Q4StrategyA" component={Q4StrategyA} //전략A답변1 
        />
        <Stack.Screen
         name = "Q4StrategyA2" component={Q4StrategyA2} //전략A답변2
        />
        <Stack.Screen
         name = "Q4StrategyA3" component={Q4StrategyA3} //전략A답변3
        />
        <Stack.Screen
         name = "Q4StrategyA4" component={Q4StrategyA4} //전략A답변4
        />
        <Stack.Screen
         name = "Q4StrategyB" component={Q4StrategyB} //전략B답변1 
        />
        <Stack.Screen
         name = "Q4StrategyB2" component={Q4StrategyB2} //전략B답변2
        />
        <Stack.Screen
         name = "Q4StrategyB3" component={Q4StrategyB3} //전략B답변3
        />
        <Stack.Screen
         name = "Q4StrategyB4" component={Q4StrategyB4} //전략B답변4
        />
        <Stack.Screen
         name = "Q4StrategyC" component={Q4StrategyC} //전략C답변1 
        />
        <Stack.Screen
         name = "Q4StrategyC2" component={Q4StrategyC2} //전략C답변2
        />
        <Stack.Screen
         name = "Q4StrategyC3" component={Q4StrategyC3} //전략C답변3
        />
        <Stack.Screen
         name = "Q4StrategyC4" component={Q4StrategyC4} //전략C답변4
        />
        <Stack.Screen
         name = "Q4StrategyABCConfirmation" component={Q4StrategyABCConfirmation} //문제123 클리어
        />
      {/* --------------------------------------------------------------------------------------------- */}
      <Stack.Screen
         name = "Question5" component={Question5} //문제5
        />
        <Stack.Screen
         name = "Select5" component={Select5} //문제5 선택창
        />
        <Stack.Screen
         name = "Q5StrategyA" component={Q5StrategyA} //전략A답변1 
        />
        <Stack.Screen
         name = "Q5StrategyA2" component={Q5StrategyA2} //전략A답변2
        />
        <Stack.Screen
         name = "Q5StrategyB" component={Q5StrategyB} //전략B답변1 
        />
        <Stack.Screen
         name = "Q5StrategyB2" component={Q5StrategyB2} //전략B답변2
        />
        <Stack.Screen
         name = "Q5StrategyC" component={Q5StrategyC} //전략C답변1 
        />
        <Stack.Screen
         name = "Q5StrategyC2" component={Q5StrategyC2} //전략C답변2
        />
        <Stack.Screen
         name = "Q5StrategyABCConfirmation" component={Q5StrategyABCConfirmation} //문제123 클리어
        />
      {/* --------------------------------------------------------------------------------------------- */}
      <Stack.Screen
         name = "Question6" component={Question6} //문제6
        />
        <Stack.Screen
         name = "Select6" component={Select6} //문제6 선택창
        />
        <Stack.Screen
         name = "Q6StrategyA" component={Q6StrategyA} //전략A답변1 
        />
        <Stack.Screen
         name = "Q6StrategyA2" component={Q6StrategyA2} //전략A답변2
        />
        <Stack.Screen
         name = "Q6StrategyB" component={Q6StrategyB} //전략B답변1 
        />
        <Stack.Screen
         name = "Q6StrategyB2" component={Q6StrategyB2} //전략B답변2
        />
        <Stack.Screen
         name = "Q6StrategyB3" component={Q6StrategyB3} //전략B답변3
        />
        <Stack.Screen
         name = "Q6StrategyB4" component={Q6StrategyB4} //전략B답변4
        />
        <Stack.Screen
         name = "Q6StrategyC" component={Q6StrategyC} //전략C답변1 
        />
        <Stack.Screen
         name = "Q6StrategyC2" component={Q6StrategyC2} //전략C답변2
        />
        <Stack.Screen
         name = "Q6StrategyABConfirmation" component={Q6StrategyABConfirmation} //문제12 클리어
        />
        <Stack.Screen
         name = "Q6StrategyCConfirmation" component={Q6StrategyCConfirmation} //문제3 클리어
        />
      {/* --------------------------------------------------------------------------------------------- */}
      <Stack.Screen
         name = "Question7" component={Question7} //문제7
        />
        <Stack.Screen
         name = "Select7" component={Select7} //문제7 선택창
        />
        <Stack.Screen
         name = "Q7StrategyA" component={Q7StrategyA} //전략A답변1 
        />
        <Stack.Screen
         name = "Q7StrategyA2" component={Q7StrategyA2} //전략A답변2
        />
        <Stack.Screen
         name = "Q7StrategyA3" component={Q7StrategyA3} //전략A답변3
        />
        <Stack.Screen
         name = "Q7StrategyB" component={Q7StrategyB} //전략B답변1 
        />
        <Stack.Screen
         name = "Q7StrategyB2" component={Q7StrategyB2} //전략B답변2
        />
        <Stack.Screen
         name = "Q7StrategyB3" component={Q7StrategyB3} //전략B답변3
        />
        <Stack.Screen
         name = "Q7StrategyC" component={Q7StrategyC} //전략C답변1 
        />
        <Stack.Screen
         name = "Q7StrategyC2" component={Q7StrategyC2} //전략C답변2
        />
        <Stack.Screen
         name = "Q7StrategyABCConfirmation" component={Q7StrategyABCConfirmation} //문제123 클리어
        />
      {/* --------------------------------------------------------------------------------------------- */}
      <Stack.Screen
         name = "Question8" component={Question8} //문제8
        />
        <Stack.Screen
         name = "Select8" component={Select8} //문제8 선택창
        />
        <Stack.Screen
         name = "Q8StrategyA" component={Q8StrategyA} //전략A답변1 
        />
        <Stack.Screen
         name = "Q8StrategyA2" component={Q8StrategyA2} //전략A답변2
        />
        <Stack.Screen
         name = "Q8StrategyA3" component={Q8StrategyA3} //전략A답변3
        />
        <Stack.Screen
         name = "Q8StrategyA4" component={Q8StrategyA4} //전략A답변4
        />
        <Stack.Screen
         name = "Q8StrategyB" component={Q8StrategyB} //전략B답변1 
        />
        <Stack.Screen
         name = "Q8StrategyB2" component={Q8StrategyB2} //전략B답변2
        />
        <Stack.Screen
         name = "Q8StrategyB3" component={Q8StrategyB3} //전략B답변3
        />
        <Stack.Screen
         name = "Q8StrategyC" component={Q8StrategyC} //전략C답변1 
        />
        <Stack.Screen
         name = "Q8StrategyC2" component={Q8StrategyC2} //전략C답변2
        />
        <Stack.Screen
         name = "Q8StrategyC3" component={Q8StrategyC3} //전략C답변3
        />
        <Stack.Screen
         name = "Q8StrategyAConfirmation" component={Q8StrategyAConfirmation} //문제1 클리어
        />
        <Stack.Screen
         name = "Q8StrategyBCConfirmation" component={Q8StrategyBCConfirmation} //문제23 클리어
        />
      {/* --------------------------------------------------------------------------------------------- */}
      <Stack.Screen
         name = "Finish" component={Finish} //문제 완전 완료
        />
      </Stack.Navigator>
    </NavigationContainer>
    </MyStore.Provider>
  );
}