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
        backgroundColor: '#FFEAD0',
        paddingHorizontal: 30,
        flex: 1,
        backgroundColor : 'green',
    },
    //이미지 뷰
    ImageView : {
        heigth : 10,
        flex: 1,
    },
    //각종 UI가 들어가는 화면
    SubView : {
        paddingHorizontal: 20,
        marginVertical: 30,
        flex: 1,
        backgroundColor : 'yellow',
        justifyContent: "center",
        alignItems: "center"
    },

    //버튼 위치 설정
    ButtonView : {
        // flex:1,
        width:"50%",
        heigth:50,
        flexDirection: 'row',
        // alignItems:'flex-end',
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
        fontSize:50,
        fontWeight: "bold",
        alignItems : 'center',
        justifyContent : 'center',
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
        width:40,
    },

    //로고 사진 설정
    Logo : {
        width : 150,
        height : 150
    }
});

const Select = (props) => {

    const Start1 = useState("Are you student")
    const Start2 = useState("OR");
    const Start3 = useState("A teacher?");
    
    return (
        // 배경 화면 뷰
        <View style = {styles.mainView}>

            {/* 타이틀 이미지 */}
            {/* <View style = {styles.ImageView}> */}
            <Image style = {styles.Logo}
            source = {require('../assets/Start.png')}
            ></Image>    
            {/* </View> */}
            {/* UI가 들어갈 뷰 */}
        <View style = {styles.SubView}>
            <Text style = {styles.Text}>
                {Start1}
                {"\n"}
                {"\t"}{Start2}
                {"\n"}
                {Start3}
            </Text>

            <View style = {styles.ButtonView}>
             {/*버튼 설정*/}
             <Button 
            style = {styles.SignButton}
            title = 'Teacher' //버튼 이름 설정
            //누를시 회원가입 스크린으로 이동
            onPress={() => {
                props.navigation.navigate("TeachLogin") //버튼 클릭시 선생님 창으로 이동
            }}
            ></Button>

            {/* 버튼 설정 */}
            <Button
            style = {styles.SignButton}
            title = 'Student' //버튼 이름 설정
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