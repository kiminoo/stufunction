import { useState } from "react";
import {
    Text, 
    View, 
    Button,
    StyleSheet,
    Image
} from "react-native";

const styles = StyleSheet.create({

    //전체 배경 화면
    mainView : {
        backgroundColor: '#FFFFF',
        paddingHorizontal: 30,
        flex: 1,
        backgroundColor : 'white',
        //justifyContent: "center",
        alignItems: "center"
    },
    //이미지 뷰
    ImageView : {
        heigth : 10,
        flex: 1,
    },
    //각종 UI가 들어가는 화면

    SubView : {
        width:"100%",
        marginVertical: 10,
        backgroundColor : 'white',
    },

    //버튼 위치 설정
    ButtonView : {
       // width:"50%",
       // heigth:50,
        flexDirection: 'row',
        justifyContent: 'space-between',
       
    },

    //타이틀 텍스트
    // titleText:{
    //     fontSize: 80,
    //     fontWeight: "bold",
    //     alignItems : 'center',
    //     justifyContent : 'center',
    //     backgroundColor : 'red'
    // },

    //라벨 텍스트
    // Text:{
    //     fontSize:80,
    //     fontWeight: "bold",
    //     alignItems : 'center',
    //     justifyContent : 'center',
    // },

    // //인풋 텍스트
    // textInput: {
    //     marginTop: 20,
    //     marginBottom: 10,
    //     paddingHorizontal: 10,
    //     height: 40,
    //     width : '100%',
    //     borderRadius: 10,
    //     borderColor: 'gray',
    //     borderWidth: 1
    // },

    //로그인 회원가입 버튼
    SignButton : {
        width:50,
    },

    //로고 사진 설정
    Logo : {
        width : 500,
        height : 500,
        alignItems:'center',
        
    }
});

const Select = (props) => {

    // const Start1 = useState("Are you student")
    // const Start2 = useState("OR");
    // const Start3 = useState("A teacher?");
    
    return (
        // 배경 화면 뷰
        <View style = {styles.mainView}>
            
            {/* 타이틀 이미지 */}
            {/* <View style = {styles.ImageView}> */}
            <Image style = {styles.Logo}
            source = {require('../assets/icon2.png')}
             
            ></Image>    
            {/* </View> */}
            {/* UI가 들어갈 뷰 */}
        <View style = {styles.SubView}>
            {/* <Text style = {styles.Text}>
                {Start1}
                {"\n"}
                {"\t"}{Start2}
                {"\n"}
                {Start3}
            </Text> */}

            <View style = {styles.ButtonView}>
             {/*버튼 설정*/}
             <Button 
            style = {styles.SignButton}
            title = 'Teacher' //버튼 이름 설정
            color= '#191970'
            //누를시 회원가입 스크린으로 이동
            onPress={() => {
                props.navigation.navigate("TeachLogin") //버튼 클릭시 선생님 창으로 이동
            }}
            ></Button>

            {/* 버튼 설정 */}
            <Button
            style = {styles.SignButton}
            title = 'Student' //버튼 이름 설정
            color= '#191970'

            //버튼 클릭시 로그인창 이동
            onPress={() => {
                props.navigation.navigate("StuLogin")
            }}
            ></Button>
            </View>
        </View> 
    </View>
    );
}
export default Select;