import { useState, useContext } from "react";
import {
    Text, 
    View, 
    Button,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { MyStore } from "../App"
import  {db}  from '../firebaseConfig';
import { 
  addDoc, 
  collection, 
  getDocs,
  doc,
  updateDoc,
  deleteDoc,  
  where,
  query } from "firebase/firestore";

const styles = StyleSheet.create({

    //전체 배경 화면
    mainView : {
        backgroundColor: '#FFEAD0',
        paddingHorizontal: 30,
        flex: 1,
        // backgroundColor : 'green',
    },

    //타이틀 텍스트
    labelTitle:{
        fontSize: 40,
        fontWeight: "bold",
        // backgroundColor : 'yellow',
        alignItems : 'center',
        justifyContent : 'center',
    },

    //답변 텍스트
    AnswerText:{
        fontSize:50,
        // backgroundColor : 'yellow',
        padding : 20, //텍스트 상자와 글자간의 간격
        margin: 30 //텍스트와 텍스트끼리의 간격
    },

     //질문 텍스트
     QuestionText:{
        fontSize:25,
        fontWeight: "bold",
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : 'white',
        padding : 20, //텍스트 상자와 글자간의 간격
        margin: 10 //텍스트와 텍스트끼리의 간격
    },

    //인풋 텍스트
    textInput: {
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 10,
        height: 40,
        width : '100%',
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1
    },

    //답 확인 버튼
    CheckButton : {
         fontSize:20,
        backgroundColor: "#DDDDDD",
        // padding : 20, //텍스트 상자와 글자간의 간격
        // margin: 10, //텍스트와 텍스트끼리의 간격
        alignItems : 'center',
        justifyContent : 'center',
    },
});

const Q8StrategyA4 = (props) => {

    const A4 = useState("Strategy A Prompt 4\n")

    const Answer4 = useState("Ok, if that’s true,\nthen how much fencing would he use all together to make his rectangular garden fence?\nwork!")


    // 학생이 로그인할 때 입력한 이름을 저장하기 위한 변수 선언
    const { stuid, changeID } = useContext(MyStore)
    // 학생이 입력한 답변을 저장하는 useState
    const [Answer, setAnswer] = useState('');

    // 학생이 제출한 답변이 정답인지 판별하는 함수
    const submitBtn = () => {
        // 학생이 입력한 답변을 저장하는 변수
        var string = Answer;
        // 해당 strategy 정답의 핵심 키워드를 저장하는 변수들
        var keyword1 = '2[x]+50';
        var keyword2 = 'If value is 80, go to confirmation';
        var keyword3 = 'Otherwise';
        var keyword4 = 'return to Strategy A Prompt 2';
        // 학생이 입력한 답변과 strategy 정답과 일치하는 정도를 나타내는 변수
        var a = 0;
    
        // 학생이 입력한 답변을 읽고 일치하는 핵심 키워드가 있으면 일치하는 정도의 퍼센트를 더함
        if(checkBoolean(string.includes(keyword1))){
          a += 25;
        }
        if(checkBoolean(string.includes(keyword2))){
            a += 25;
          }
          if(checkBoolean(string.includes(keyword3))){
            a += 25;
          }
          if(checkBoolean(string.includes(keyword4))){
            a += 25;
          }
        // 학생이 입력한 답변이 100% 일치하면 다음 strategy 화면으로 넘어가도록 함
        if(a == 100){
          updateDB()
            props.navigation.navigate("Q8StrategyAConfirmation")
            setAnswer("")
          a = 0;
        // 일치하지않을 시에는 정답률과 몇%가 일치한 답변이었는지 힌트를 줌
        }else{
          updateDB()
            alert(a)
          a = 0;
        }
        
        // 함수에 들어온 값이 비교 대상 값과 일치하는지 판별하는 함수
        function checkBoolean(value){
          if(value){
            return true;
          }else {
            return false;
          }
        }
      }


      // 학생이 문제에 대한 답변을 제출하면 해당 학생의 DB에 답변내용을 저장하는 함수
      const updateDB = async ()=>{
        try{
          const q = await query(collection(db, "student" ), where('addName',"==",stuid)) // 학생이 로그인할 때 입력했던 이름과 같은 DB를 찾는 쿼리문
          const singleDoc = await getDocs(q);
          let docID = ''
          singleDoc.forEach((doc) => {
            docID = doc.id;
          });
          const docRef = doc(db, "student", docID);
          await updateDoc(docRef, {
            "8-1-4": Answer
          });
        }catch(error){
          console.log(error.message)
        }
      }


    return (
        <View style ={styles.mainView}>

            {/* Q8 S-A4번 문제 라벨 */}
            <Text style = {styles.labelTitle}>
            {A4}
            </Text>
            
            {/* 메인 질문 텍스트 */}
            <Text style = {styles.QuestionText}>
                {Answer4}
            </Text>

                {/* 메인 질문 텍스트 인풋 */}
                <View style = {styles.AnswerText}>
                    <TextInput style = {styles.textInput}
                    value = {Answer}
                    onChangeText={setAnswer}
                    placeholder="Answer"></TextInput>

                    {/* 답 입력 */}
                    <Button
                    style = {styles.CheckButton}
                    title = "Input"
                    onPress={submitBtn}
                    >
                    </Button>    
                </View>
                {/* 전략1 선택 화면 */}
            <Button
            style = {styles.CheckButton}
            title = "Next"
            color = '#191970'
            onPress={()=>
            props.navigation.navigate("Q8StrategyAConfirmation")
            }
            >
            </Button>
        </View>
        );
}
export default Q8StrategyA4;