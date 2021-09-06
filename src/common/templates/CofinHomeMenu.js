import React from "react"
import styled from "styled-components";

const CofinHome = () => (
<>  
    <LoginDiv id="testForm">
        <LoginForm>       
            <label for="user-id"/>아이디
            <Idinput type="text" id="user-id"/>
         
            <label for="pwd1"/> 비밀번호 
            <Pwinput type="password" id="pwd"/>&nbsp;
            
            <input type="submit" value="로그인"/>
        </LoginForm>
    </LoginDiv>

    <Body>
        <Ul id='navi' type='none'>
            <Li class='group'>
                <LogDiv class='title'><label>홈</label></LogDiv>
                <Ultyp type='none' class="sub">
                    <Lisub><A href="/home">홈</A></Lisub>
                </Ultyp>
            </Li>
            <Li class='group'>
                <LogDiv class='title'><label>유저 서비스</label></LogDiv>
                <Ultyp type='none' class="sub">
                    <Lisub><A href="#">로그인</A></Lisub>
                    <Lisub><A href="#">회원가입</A></Lisub>
                    <Lisub><A href="/message-page">수신 문자함</A></Lisub>
                </Ultyp>
            </Li>
            <Li class='group'>
                <MapDiv class="title">지도</MapDiv>
                <Ultyp type='none' class="sub">
                    <Lisub><A href="/cofin-map">국내지도</A></Lisub>
                    <Lisub><A href="/cofin-world-map">세계지도</A></Lisub>
                </Ultyp>
            </Li>
            <Li class='group'>
                <NewsDiv class="title">뉴스</NewsDiv>
                <Ultyp type='none' class="sub">
                    <Lisub><A href="#">코로나 국내 현황</A></Lisub>
                    <Lisub><A href="#">코로나 해외 현황</A></Lisub>
                </Ultyp>
            </Li>
            <Li class='group'>
                <VacDiv class="title">백신</VacDiv>
                <Ultyp type='none' class="sub">
                    <Lisub><A href="#">백신 종류</A></Lisub>
                    <Lisub><A href="#">바이러스 변이 종류</A></Lisub>
                </Ultyp>
            </Li>
            <Li class='group'>
                <BrdDiv class="title">게시판</BrdDiv>
                <Ultyp type='none' class="sub">
                    <Lisub><A href="/free-board">자유게시판</A></Lisub>
                    <Lisub><A href="/write">글 쓰기</A></Lisub>
                    <Lisub><A href="#">신고게시판</A></Lisub>
                </Ultyp>
            </Li>
            <Li class='group'>
                <OpDiv class="title">설정</OpDiv>
                <Ultyp type='none' class="sub">
                    <Lisub><A href="#">알림</A></Lisub>
                    <Lisub><A href="#">탈퇴</A></Lisub>
                    <Lisub><A href="#">마이페이지</A></Lisub>
                </Ultyp>
            </Li>
        </Ul>
    </Body>
</> 
)


export default CofinHome

const LoginDiv = styled.div`
`

const Idinput = styled.input`
width: 60px;
margin: 5px;
`
const Pwinput = styled.input`
width: 100px;
margin: 5px;
`

const LoginForm = styled.div`
    display = flex;
`

const LogDiv = styled.div`
    margin-bottom: 2px;
    height:35px;
    line-height:35px;
    color: #fff;
    background-color: LightSkyBlue;
`
const MapDiv = styled.div`
    margin-bottom: 2px;
    height:35px;
    line-height:35px;
    color: #fff;
    background-color: SkyBlue;
`
const VacDiv = styled.div`
    margin-bottom: 2px;
    height:35px;
    line-height:35px;
    color: #fff;
    background-color: RoyalBlue;
`
const NewsDiv = styled.div`
    margin-bottom: 2px;
    height:35px;
    line-height:35px;
    color: #fff;
    background-color: CornflowerBlue;
`
const BrdDiv = styled.div`
    margin-bottom: 2px;
    height:35px;
    line-height:35px;
    color: #fff;
    background-color: DodgerBlue;
`
const OpDiv = styled.div`
    margin-bottom: 2px;
    height:35px;
    line-height:35px;
    color: #fff;
    background-color: blue;
`

const Body = styled.div`
    float: right;
    margin:20px auto;
    padding: 0;
    font-family:"맑은 고딕";
    font-size:0.9em;
`

const Ul = styled.ul`
    width: 200px;
    text-indent: 10px;
`

const Ultyp = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
`

const Li = styled.li `
    margin=bottom:3px
`

const Lisub = styled.li`
    margin-bottom: 2px;
    height:35px;
    line-height:35px;
    background-color: #f4f4f4;
`

const A = styled.a`
    display: block;
    width: 100%;
    height:100%;
    text-decoration:none;
    color:#000;
`





