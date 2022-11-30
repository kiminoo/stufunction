import { useState } from "react";
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
        // fontWeight: "bold",
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
        fontWeight: "bold",
        borderWidth: 1
    },
});

const SignUp = (props) => {
    
    const titleText = useState("SignUpPage");
    const nameLabel = useState("Input Your Name:");
    const stuNumLabel = useState("Input Your Student Number:");
    const classNumberLabel = useState("Input Your ClassNumber:");

    // 학생이 입력한 이름, 반, 번호가 저장되는 useState
    const [addName, setAddName] = useState('');
    const [addstuNum, setAddStuNum] = useState('');
    const [addclsNum, setAddClsNum] = useState('');


    // 학생이 입력한 정보를 읽어 DB에 저장시키는 함수
    const addtoDB = async ()=> {
        try{
            // student 컬렉션 생성 후 학생이 입력한 이름, 반, 번호 받아와
            // 컬렉션에 가입날짜 포함해 저장
            await addDoc(collection(db, "student" ), {
                addName: addName,
                addstuNum: addstuNum,
                addclsNum: addclsNum,
                createdAt: new Date(),
            });
            alert("Joined!!, Please the Cancel button to login")
            // Sign Up 버튼 누르면 TextInput창 비우기
            setAddName("")
            setAddStuNum("")
            setAddClsNum("")
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
                <Text style = {styles.mainText}></Text>

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
                <Text style = {styles.mainText}></Text>
            
            <View style = {styles.ButtonView}>
             {/*버튼 설정*/}
             <Button 
            style = {styles.SignButton}
            title = 'Cancel' //버튼 이름 설정
            color = '#191970'
            //로그인시 로그인 스크린으로 이동
            onPress={() => {
                props.navigation.navigate("StuLogin") //버튼 클릭시 질문1창으로 이동
            }}
            ></Button>

            {/* 버튼 설정 */}
            <Button
            style = {styles.ButtonView}
            title = 'Sign Up' //버튼 이름 설정
            color = '#191970'
            //버튼 클릭시 DB에 학생 정보 저장하는 함수 실행
            onPress={addtoDB}
            ></Button>
            </View>
        </View> 
    </View>
    );
}


export default SignUp;