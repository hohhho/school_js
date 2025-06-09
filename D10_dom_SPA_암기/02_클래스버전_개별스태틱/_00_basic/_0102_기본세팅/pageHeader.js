import { ControllerMain } from "./_controllerMain.js";

export class PageHeader {

    execute() {
        let $header = document.querySelector("#header");
        let tag = "";
        tag += 
        `
        <style>
            #header-header {
                margin: 0 auto;
                border: 1px solid black;
            }
        </style>
        `;

        tag +=
        `
        <table id="header-header">
            <tr>
                <td><button id="button-memberJoinPage">회원가입</button></td>
                <td><button id="button-memberLoginPage">로그인</button></td>
            </tr>
        </table>        
        `;

        $header.innerHTML = tag;



        let $buttonMemberJoinPage = document.querySelector("#button-memberJoinPage");
        let $buttonMemberLoginPage = document.querySelector("#button-memberLoginPage");
        
        $buttonMemberJoinPage.addEventListener("click", this.buttonMemberJoinPageClick);
        $buttonMemberLoginPage.addEventListener("click", this.buttonMemberLoginPageClick);


    }

    buttonMemberJoinPageClick = (event) => { 
    }
    buttonMemberLoginPageClick = (event) => {  
        ControllerMain.changePage("page-memberLogin");
    }

}