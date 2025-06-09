import {ControllerMain} from "./_controllerMain.js";

export let PageHeader = {

    execute(data){
        let $header = document.querySelector("#header");

        let tag = "";

        tag += `
        <style>
            table, tr, td  {
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


        // 로그아웃 상태
        if(ControllerMain.log == null){
            tag += 
            `
            <table id="header-menu">
                <tr>
                    <td>
                        <button id="btn-indexPage">메인화면</button>
                    </td>
                    <td>
                        <button id="btn-memberJoinPage">회원가입</button>
                    </td>
                    <td>
                        <button id="btn-memberLoginPage">로그인</button>
                    </td>
                </tr>
            </table>
            `;
        }else{
            tag += 
            `
            <table id="header-menu">
                <tr>
                    <td>
                        <button id="btn-indexPage">메인화면</button>
                    </td>
                    <td>
                        <button id="btn-memberListPage">회원 전체목록</button>
                    </td>
                    <td>
                        <button id="btn-memberLogoutPro">로그아웃</button>
                    </td>
                    <td>
                        <button id="btn-boardListPage">게시판</button>
                    </td>
                </tr>
            </table>
            `;
        }

        $header.innerHTML = tag;

        if(ControllerMain.log == null){
            document.querySelector("#btn-indexPage").addEventListener("click", (e) => {this.goIndexPage();});
            document.querySelector("#btn-memberJoinPage").addEventListener("click", (e)=>{this.goJoinPage();});
            document.querySelector("#btn-memberLoginPage").addEventListener("click", (e)=>{this.goLoginPage();});
        }else{
            document.querySelector("#btn-indexPage").addEventListener("click", (e) => {this.goIndexPage();});
            document.querySelector("#btn-memberListPage").addEventListener("click", (e) => {this.goMemberListPage();});
            document.querySelector("#btn-memberLogoutPro").addEventListener("click",(e)=>{this.goLogoutPro();});
            document.querySelector("#btn-boardListPage").addEventListener("click",(e)=>{this.goBoardListPage();});
        }
    },

    goIndexPage(){
        ControllerMain.changePage("page-index",null);
    },

    goJoinPage(){
        ControllerMain.changePage("page-memberJoin",null);
    },

    goLoginPage(){
        ControllerMain.changePage("page-memberLogin",null);
    },

    goMemberListPage(){
        ControllerMain.changePage("page-memberList",null);
    },

    goLogoutPro(){
        alert("로그아웃 되었습니다");
        ControllerMain.log = null;
        ControllerMain.changePage("page-header",null);
        ControllerMain.changePage("page-index",null);
    },

    goBoardListPage(){
        alert("게시판 기능 미구현");
    }
}