import { useState, useContext } from "react";
import {
    Text, 
    View, 
    Button,
    StyleSheet,
    TextInput
} from "react-native";
import {db} from '../firebaseConfig';
import {
    addDoc, 
  collection, 
  getDocs,
  doc,
  updateDoc,
  deleteDoc,  
  where,
  query } from "firebase/firestore"; 
import { async } from "@firebase/util";
import { MyStore } from "../App"

const styles = StyleSheet.create({
    //전체 배경 화면
    mainView : {
        backgroundColor: '#FFEAD0',
        paddingHorizontal: 30,
        flex: 1,
    },
    //각종 UI가 들어가는 화면
    SubView : {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        marginVertical: 30,
        flex: 1,
    },

    ButtonView : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor : 'white'
    },
    //타이틀 텍스트
    titleText:{
        fontSize: 50,
        fontWeight: "bold",
        alignItems : 'center',
        justifyContent : 'center',
    },
    //라벨 텍스트
    Text:{
        fontSize:30,
        fontWeight: "bold",
        alignItems : 'flex-start',
        justifyContent : 'flex-start',
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
    //로그인 회원가입 버튼
    SignButton : {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

const StuLogin = (props) => {
    // App.js에서 보내져온 전역변수 값을 받아올 변수 선언
    const { stuid, changeID } = useContext(MyStore);

    const titleText = useState("LoginPage");
    const nameLabel = useState("Input Your Name:");
    const stuNumLabel = useState("Input Your Student Number:");
    const classNumberLabel = useState("Input Your ClassNumber:");


    // 학생이 입력한 이름, 반, 번호가 저장되는 useState
    const [addName, setAddName] = useState('');
    const [addstuNum, setAddStuNum] = useState('');
    const [addclsNum, setAddClsNum] = useState('');
    // DB의 컬렉션 불러와 멤버 불러오기 위한 useState
    const [students, setStudents] = useState();

    // 학생이 입력한 정보와 DB의 정보를 비교해 일치하면
    // 문제풀이 화면으로 넘어갈 수 있는 함수
    const readfromDB = async ()=>{
        try{
            const data = await getDocs(collection(db, "student" ))
            setStudents(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            {students?.map((row) => {
                // 학생이 입력한 이름, 반, 번호가 DB의 정보와 일치하면 1번 문제 화면으로 이동
                if(addName == row.addName && addstuNum == row.addstuNum && addclsNum == row.addclsNum){
                    // 학생이 입력한 이름을 changeID 함수에 넣어 stuid에 대입
                    changeID(addName);
                    console.log(stuid)
                    props.navigation.navigate("Question1")
                }
            })}
        }catch(error){
            console.log(error.message)
        }
    }
    

    return (
        // 배경 화면 뷰
        <View style = {styles.mainView}>

            {/* 타이틀 텍스트 useState */}
            <Text style = {styles.titleText}>

            {/* 로그인 메인화면 글 */}
            {titleText}
            </Text>     

            {/* UI가 들어갈 뷰 */}
        <View style = {styles.SubView}>
            
            <Text style = {styles.Text}>
                {nameLabel}
            </Text>

            {/* 이름 텍스트 input창 */}
            <TextInput
                style = {styles.textInput}
                value = {addName}
                onChangeText={setAddName}
                placeholder="Your name">
            </TextInput>

            {/* 학번 텍스트 라벨 창 */}
            <Text style = {styles.Text}>
                {stuNumLabel}
            </Text>

            {/* 학번 텍스트 input 창 */}
            <TextInput
                style = {styles.textInput}
                value = {addstuNum}
                onChangeText={setAddStuNum}
                placeholder="Your Student Number"></TextInput>

            {/* 반 텍스트 라벨 창 */}
            <Text style = {styles.Text}>
                {classNumberLabel}
            </Text>

             {/* 반 텍스트 input 창 */}
            <TextInput
                style = {styles.textInput}
                value = {addclsNum}
                onChangeText={setAddClsNum}
                placeholder="Your Class Number"></TextInput>
            
            <View style = {styles.ButtonView}>
             {/*버튼 설정*/}
             <Button 
            style = {styles.SignButton}
            //로그인 성공시 질문1 스크린으로 이동
            onPress={readfromDB} //버튼 클릭시 함수 호출
                title = "Login" //버튼 이름 설정
                color = '#191970'
            >
            </Button>

            {/* 버튼 설정 */}
            <Button
            style = {styles.SignButton}
            title = "SignUp" //버튼 이름 설정
            color = '#191970'
            //버튼 클릭시 회원가입창 이동
            onPress={() => {
                props.navigation.navigate("SignUp")
            }}
            >
            </Button>
            </View>
        </View> 
    </View>
    );
}

export default StuLogin;