import { useState } from "react";
import {
    Text, 
    View, 
    Button,
    StyleSheet,
} from "react-native";

const styles = StyleSheet.create({

   //전체 배경 화면
   mainView : {
    backgroundColor: '#FFEAD0',
    // paddingHorizontal: 30,
    flex: 1,
},

//질문 텍스트
QuestionText:{
    fontSize:20,
    // fontWeight: "bold",
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : 'white',
    padding : 30, //텍스트 상자와 글자간의 간격
    margin: 20 //텍스트와 텍스트끼리의 간격
},

//대답 버튼 텍스트
AnswerText:{
    fontSize:20,
    alignItems : 'center',
    justifyContent : 'center',
    padding : 20, //텍스트 상자와 글자간의 간격
    margin: 10 //텍스트와 텍스트끼리의 간격
},

//타이틀 텍스트
labelTitle:{
    fontSize: 70,
    fontWeight: "bold",
    // backgroundColor : 'skyblue',
    // alignItems : 'center',
    // justifyContent : 'center',
},
    
});


const Question6 = (props) => {

    const Q6 = useState("Q6")

    const MainQuestion = useState("A rectangle has a length that is unknown but is 12 inches longer than its width.\n"
    +"The perimeter of the rectangle is 104 inches. What is the width of the rectangle?")

    return (
    <View style ={styles.mainView}>
        {/* Question6 라벨 */}
        <Text style = {styles.labelTitle}>
        {Q6}
        </Text> 
        
        {/* 메인 질문 텍스트 */}
        <Text style = {styles.QuestionText}>
            {MainQuestion}
        </Text>

        {/* 질문 답변 버튼 텍스트 클릭시 답변 텍스트 이동 */}
        <View style = {styles.AnswerText}>
        
            <Button style = {styles.AnswerText}
            title = "What do you think the problem is asking you to do?"
            color = '#191970'
                onPress = { () => {
                    props.navigation.navigate("Select6") //클릭시 페이지로 이동
             }}
            >
            </Button>
        </View>
    </View>
    );
}

export default Question6;