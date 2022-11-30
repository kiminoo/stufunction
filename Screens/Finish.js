import { useState } from "react";
import {
    Text, 
    View, 
    Button,
    StyleSheet,
    Image
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

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
        justifyContent: "center",
        alignItems: "center",
        
    },

    //로그인 회원가입 버튼
    SignButton : {
        width: 150,
        backgroundColor : 'skyblue',
        fontSize : 30,
        padding : 3, //텍스트 상자와 글자간의 간격
        margin: 3, //텍스트와 텍스트끼리의 간격
    },

    //로고 사진 설정
    Logo : {
        width : "80%",
        height : "30%",
        alignItems:'center',
        
    }
});

const Finish = (props) => {

    // const Start1 = useState("Are you student")
    // const Start2 = useState("OR");
    // const Start3 = useState("A teacher?");
    
    return (
        // 배경 화면 뷰
        <View style = {styles.mainView}>
            
            {/* 타이틀 이미지 */}
            {/* <View style = {styles.ImageView}> */}
            <Image style = {styles.Logo}
            source = {require('../assets/Finish.png')}
             
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
            <TouchableOpacity style = {styles.SignButton}
            onPress={ () => {
                alert("Done")
            }}>
            <Text style = {styles.SignButton}>You Did It!</Text>
            </TouchableOpacity>
            </View>
        </View> 
    </View>
    );
}
export default Finish;