import { useState } from "react";
import {
    Text, 
    View, 
    Button,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";

const styles = StyleSheet.create({
    //전체 배경 화면
   mainView : {
        backgroundColor : 'white',
        paddingHorizontal: 1,
        flex: 1,
        alignItems : 'center',
    },
    //각종 UI가 들어가는 화면
    SubView : {
        backgroundColor : 'white',
        height: 500,
        width : 500,
        paddingHorizontal: 20,
        marginVertical: 30,
        flex: 1,
    },

    ButtonView : {
      
        width: '83%',
        height: 45,
        alignItems: 'center',
        marginTop:11,
        marginBottom: 11,
        backgroundColor: '#6381db',
        alignSelf: 'center',
        justifyContent: 'center'
        
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
        alignItems : 'flex-start',
        justifyContent : 'flex-start',
        borderColor: 'gray',
        
    },
    //인풋 텍스트
    textInput: {
        backgroundColor: '#FFFFFF',

        paddingLeft: 15,
        borderRadius: 5,
        alignSelf: 'center',

        height: 48,
        width : '83%',
        marginTop: 10,
        marginBottom: 5,
        paddingHorizontal: 10,
    
        borderRadius: 10,
        borderColor: 'gray',//테두리컬러
        color:'gray',
        borderWidth: 1
    },
   
    //로그인 회원가입 버튼
    SignButton : {
       
        padding:5,
        alignItems:'center',
        borderColor: 'gray',
        borderRadius:'100'
 
    },
    LoginTextColor:{
        color:'white',
        fontWeight: "bold",
    },
    SignTextColor:{
        color:'gray',
        fontWeight: "bold",
    },
    signInTextContainer: {
        marginTop: '10',
        marginLeft: '9%'
    },
    signInText: {
        fontSize: 30,
        fontWeight: '500',
        color: 'black',
        lineHeight: 29.3,
        marginBottom: 10,
    },
    signInTextS: {
        fontSize: 12,
        fontWeight: '300',
        color: '#FFFFFF',
        marginTop: 5,
        marginBottom: 50,
        color: '#EEEEEE'
    }
});


const HorizonLine = ({ text }) => {
    return (
      <div
        style={{
          width: "100%",
          //textAlign: "center",
          borderBottom: "1px solid #aaa",
          lineHeight: "0.1em",
          margin: "10px 0 20px",
        }}
      >
        <span style={{ background: "#fff", padding: "0 10px" }}>{text}</span>
      </div>
    );
  };
  const button =({onPress})=>{
    <Button style={styles.ButtonView}></Button>,
    <Text style={styles.SignButton}>{title='sign'}</Text>
  }


const TeachLogin = (props) => {
    
    //const titleText = useState("LoginPage");
   const [teacherName, setteacherName] = useState('');
   const [teacherNumber, setteacherNumber] = useState('');
   const [classNumber, setclassNumber] = useState('');
   const [classPassword, setclassPassword] = useState('');
   // const nameLabel = useState("Input Your Name:");
    //const stuNumLabel = useState("Input Your Student Number:");
    //const classNumberLabel = useState("Input Your ClassNumber:");
    
  
    return (
        // 배경 화면 뷰

        <View style = {styles.mainView}>
           

            {/* 타이틀 텍스트 useState */}
            {/* <Text style = {styles.titleText}> */}

            {/* 로그인 메인화면 글 */}
            {/* {titleText} */}
            {/* </Text>      */}

            {/* UI가 들어갈 뷰 */}
        <View style = {styles.SubView}>
            {/* <Text style = {styles.Text}>
                {nameLabel}
            </Text> */}
            <View style={styles.signInTextContainer}>
           <Text style={styles.signInText}>Login</Text>
            <Text style={styles.signInText}></Text>
           
        </View>
            {/* 이름 텍스트 input창 */}
            <TextInput
                style = {styles.textInput}
                onChangeText={(teacherName) => setteacherName(teacherName)}
                placeholder="name">
            </TextInput>

            {/* 학번 텍스트 라벨 창 */}
            {/* <Text style = {styles.Text}>
                {stuNumLabel}
            </Text> */}

            {/* 학번 텍스트 input 창 */}
            <TextInput
                style = {styles.textInput}
                onChangeText={(teacherNumber) => setteacherNumber(teacherNumber)}
                placeholder="Teacher Number"></TextInput>
                {/* <Text style = {styles.mainText}></Text> */}

            {/* 반 텍스트 라벨 창 */}
            {/* <Text style = {styles.Text}>
                {classNumberLabel}
            </Text> */}

             {/* 반 텍스트 input 창 */}
            <TextInput
                style = {styles.textInput}
                onChangeText={(classNumber) => setclassNumber(classNumber)}
                placeholder="Class Number"></TextInput>
                {/* <Text style = {styles.mainText}></Text> */}
            
            <TextInput
                style = {styles.textInput}
                onChangeText={(classPassword) => setclassPassword(classPassword)}
                placeholder="Class Password"></TextInput>
               
            <View style = {styles.ButtonView} >
             {/* 버튼 설정 */}
            
                <TouchableOpacity 
             
                style = {styles.SignButton}
                color= '#6381db'
               
                
               
                //onMouseOver={()=>{ styles.buttonhover() }}
                //로그인 성공시 질문1 스크린으로 이동
                onPress={() => {
                    props.navigation.navigate("") //버튼 클릭시 질문1창으로 이동
                }}
            > <Text style={styles.LoginTextColor}>Login</Text></TouchableOpacity>
           
           
           
            </View>
            <HorizonLine />
            
             {/* 버튼 설정 */}

             <TouchableOpacity 
             
             style = {styles.SignButton}
             color= 'red'

             //onMouseOver={()=>{ styles.buttonhover() }}
             //로그인 성공시 질문1 스크린으로 이동
             onPress={() => {
                 props.navigation.navigate("SignUp") //버튼 클릭시 질문1창으로 이동
             }}
         > <Text style={styles.SignBttTextColor}>Sign</Text></TouchableOpacity>
        
        </View> 
      
           
    </View>
    
    );
}

export default TeachLogin;