import {ControllerMain} from "../controller/controllerMain.js";

export let PageHeader = {

    execute(data){
        let $header = document.querySelector("#header");
        
        let tag = "";

        tag += 
        `
        <style>
            table, tr, td {
                border-collapse: collapse;
                border: 1px solid black;
            }
            #header-menu {
                margin: 0 auto;
                text-align: center;
                width: 500px;
                height: 100px;
            }
        </style>
        `;

        if(ControllerMain.log == null){
            tag += 
            `
            <table id="header-menu">
                <tr>
                    <td><button id="btn-mainPage">메인화면</button></td>
                    <td><button id="btn-memberJoinPage">회원가입</button></td>
                    <td><button id="btn-memberLoginPage">로그인</button></td>
                </tr>
            </table>
            `;
        }else{
            tag += 
            `
            <table id="header-menu">
                <tr>
                    <td><button id="btn-mainPage">메인화면</button></td>
                    <td><button id="btn-memberListPage">회원전체목록</button></td>
                    <td><button id="btn-memberLogoutPro">로그아웃</button></td>
                    <td><button id="btn-boardPage">게시판</button></td>
                    <td><button id="btn-boardPagingPage">게시판페이징</button></td>
                </tr>
            </table>
            `;
        }

        $header.innerHTML = tag;

        if(ControllerMain.log == null){
            document.querySelector("#btn-mainPage").addEventListener("click",(e)=>{this.goMainPage();});
            document.querySelector("#btn-memberJoinPage").addEventListener("click",(e)=>{this.goMemberJoinPage();});
            document.querySelector("#btn-memberLoginPage").addEventListener("click",(e)=>{this.goMemberLoginPage();});
        }else{
            document.querySelector("#btn-mainPage").addEventListener("click",(e)=>{this.goMainPage();});
            document.querySelector("#btn-memberListPage").addEventListener("click",(e)=>{this.goMemberListPage();});
            document.querySelector("#btn-memberLogoutPro").addEventListener("click",(e)=>{this.goMemberLogoutPro();});
            document.querySelector("#btn-boardPage").addEventListener("click",(e)=>{this.goBoardPage();});
            document.querySelector("#btn-boardPagingPage").addEventListener("click",(e)=>{this.goBoardPagingPage();});
        }
    },

    goMainPage(){
        ControllerMain.changePage("page-main",null);
    },
    goMemberJoinPage(){
        ControllerMain.changePage("page-memberJoin",null);
    },
    goMemberLoginPage(){
        ControllerMain.changePage("page-memberLogin",null);
    },
    goMemberListPage(){
        ControllerMain.changePage("page-memberList",null);
    },
    goMemberLogoutPro(){
        alert("로그아웃 완료");
        ControllerMain.log = null;
        ControllerMain.changePage("page-main",null);
    },
    goBoardPage(){
        ControllerMain.changePage("page-board",null);
    },
    goBoardPagingPage(){
        ControllerMain.changePage("page-boardPaging",null);
    },
    
}