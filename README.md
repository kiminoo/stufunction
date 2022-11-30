## 팀프로젝트 2.0입니다.

### 현재 완료된것

학생 UI 및 문제집 완성

<hr>

### 해야할것 UI

<hr>

### 수정사항
2022-11-20  

학생 회원가입 스크린에 뒤로가기 버튼 추가  
선생님 로그인 비밀번호 입력 ooo으로 표시됨  
<hr>

문제집 만들기<P>
Q1번 1-A 문제 추가  입력 1번 2번 분할

Q1번 1-B 문제 추가  

Q1번 1-C 문제 추가  
  
주석 설명 관련 추가  

계행 재정리  

2022-11-21  

문제 클리어시 화면 추가 및 스크린 경로 변경

2022-11-22  

모바일 연동시 에러코드 500 뜨면서 안될시 babel.config.js에  
plugins: [
      'react-native-reanimated/plugin', // This line.
    ], 붙여넣어주세요

StuLogin.js에 style인 Text에 alignItems : 'flex-start', justifyContent : 'flex-start', 로 오류수정 팅김 현상 수정완료  

2022-11-24  
start 화면 아이콘 교체
teachlogin.js 화면 UI 스타일 교체, 스크린 이름 오류 수정  

2022-11-26  
[모바일] 버튼 클릭시 뻥나는 오류 수정  
1.onPress 버튼은 useState로 String을 줄시 오류생기니 title에 반드시 title = "String"으로 useState사용 하지마세요  
  
모든 UI 색변경 위치 변경  
  
2022-11-27  
학생 UI 완성
<hr>

### 문제점  

문제 4의 A 1번문제 엑셀에 문제 지문이 없음

