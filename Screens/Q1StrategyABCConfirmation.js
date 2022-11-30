import { useState } from "react";
import {
    Text, 
    View, 
    Button,
    StyleSheet,
    // TouchableOpacity
} from "react-native";

const styles = StyleSheet.create({

    //전체 배경 화면
    mainView : {
        backgroundColor: '#FFEAD0',
        paddingHorizontal: 20,
        flex: 1,
        // backgroundColor : 'green',
    },

    //선택 텍스트
    SelectText:{
        fontSize:30,
        fontWeight: "bold",
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : 'white',
        padding : 20, //텍스트 상자와 글자간의 간격
        margin: 10 //텍스트와 텍스트끼리의 간격
    },

    //답변 텍스트뷰
    AnswerText:{
        fontSize:20,
        justifyContent : 'center',
        backgroundColor : 'yellow',
        padding : 20, //텍스트 상자와 글자간의 간격
        margin: 10 //텍스트와 텍스트끼리의 간격
    },

    AnswerView:{
        // alignItems : 'baseline',
        flexDirection:'row'
    },
    
    Answerbutton :{
        fontSize:20,
        backgroundColor: "#DDDDDD",
        padding : 20, //텍스트 상자와 글자간의 간격
        margin: 10, //텍스트와 텍스트끼리의 간격
    },

    AnswerButtonFont:{ //대답 버튼 폰트
        fontSize : 40,
        fontWeight: "bold",
    },

    AnswerTextFont:{ //대답 텍스트 폰트
        fontSize : 50,
        alignItems : 'center',
        justifyContent : 'center',
    },
    //타이틀 텍스트
    labelTitle:{
        fontSize: 40,
        fontWeight: "bold",
        // backgroundColor : 'yellow',
        padding : 30,
        alignItems : 'center',
        justifyContent : 'center',
    },

});

const Q1StrategyABConfirmation = (props) => {

    const Q1StrategyAConfirmation = useState("Q1\nStrategy Confirmation")
    const Confirmation = useState("Ok! If you’re right,\nthen Todd bought\n11 pictures.")
    return (
    <View style ={styles.mainView}>
            {/* 1번 문제 라벨 */}
            <Text style = {styles.labelTitle}>
            {Q1StrategyAConfirmation}
            </Text>
            
            {/* 메인 질문 텍스트 */}
            <Text style = {styles.SelectText}>
                {Confirmation}
            </Text>

        {/* 2번 문제 이동 버튼 */}
        <View>
            <Button style = {styles.AnswerText}
                    title = "OK"
                    color= '#191970'
                    onPress = { () => {
                    props.navigation.navigate("Select1") //클릭시 페이지로 이동
                }}
            >
            </Button>
        </View>
        {/* 버튼 뷰 */}
    </View> //메인 뷰
    );
}
export default Q1StrategyABConfirmation;