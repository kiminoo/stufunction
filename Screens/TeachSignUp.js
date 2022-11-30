import { useState } from "react";
import {
    Text, 
    View, 
    Button,
    StyleSheet,
    TextInput
} from "react-native";

const styles = StyleSheet.create({
    //전체 배경 화면
    mainView : {
        backgroundColor: '#FFEAD0',
        paddingHorizontal: 30,
        flex: 1,
        backgroundColor : 'green',
    },
    //각종 UI가 들어가는 화면
    SubView : {
        backgroundColor: '#FDF5DC',
        paddingHorizontal: 20,
        marginVertical: 30,
        flex: 1,
        backgroundColor : 'yellow',
    },

    ButtonView : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor : 'white'
    },
    //타이틀 텍스트
    titleText:{
        fontSize: 80,
        fontWeight: "bold",
        alignItems : 'center',
        justifyContent : 'center',
    },
    //라벨 텍스트
    Text:{
        fontSize:30,
        // fontWeight: "bold",
        alignItems : 'left',
        justifyContent : 'left',
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
        // flexDirection: 'row',
        // justifyContent: 'space-between',
    },
});

const TeachSignUp = (props) => {
    
    const titleText = useState("SignUpPage");

    const nameLabel = useState("Input Your Name:");
    const CompanyNumber = useState("Input Your Company Number:");
    const ClassNumber = useState("Input Your Class Number:");
    const ClassPassword = useState("Input Your Class Password:");

    

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

            {/* 이름 라벨창 */}
            <Text style = {styles.Text}>
                {nameLabel}
            </Text>

            {/* 이름 텍스트 input창 */}
            <TextInput
                style = {styles.textInput}
                onChangeText={(text) => {this.setState({inputText: text})}}
                placeholder="Your name">
            </TextInput>

             {/* 사번 텍스트 라벨 창 */}
            <Text style = {styles.Text}>
                {CompanyNumber}
            </Text>

            {/* 사번 텍스트 input 창 */}
            <TextInput
                style = {styles.textInput}
                onChangeText={(text) => {this.setState({inputText: text})}}
                placeholder="Your Student Number"></TextInput>
                <Text style = {styles.mainText}></Text>

            {/* 반 텍스트 라벨 창 */}
            <Text style = {styles.Text}>
                {ClassNumber}
            </Text>

             {/* 반 텍스트 input 창 */}
            <TextInput
                style = {styles.textInput}
                onChangeText={(text) => {this.setState({inputText: text})}}
                placeholder="Your Class Number"></TextInput>
                <Text style = {styles.mainText}></Text>
            
            {/* 비밀번호 텍스트 라벨 창 */}
            <Text style = {styles.Text}>
                {ClassPassword}
            </Text>

             {/* 비밀번호 텍스트 input 창 */}
            <TextInput
                style = {styles.textInput}
                onChangeText={(text) => {this.setState({inputText: text})}}
                placeholder="Your Class Password"></TextInput>
                <Text style = {styles.mainText}></Text>
            
            <View style = {styles.ButtonView}>
             {/*버튼 설정*/}
             <Button 
            style = {styles.SignButton}
            title = 'Cancel' //버튼 이름 설정
            //로그인시 로그인 스크린으로 이동
            onPress={() => {
                props.navigation.navigate("TeachLogin") //버튼 클릭시 선택 창으로 이동
            }}
            ></Button>

            {/* 버튼 설정 */}
            <Button
            style = {styles.ButtonView}
            title = 'Sign Up' //버튼 이름 설정
            //버튼 클릭시 로그인 이동
            onPress={() => {
                props.navigation.navigate("TeachSignUp")
            }}
            ></Button>
            </View>
        </View> 
    </View>
    );
}


export default TeachSignUp;