import {ControllerMain} from "../controller/controllerMain.js"

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

        tag += 
        `
            <table>
                <tr>
                    <td><button id="btn-mainPage">메인화면</button></td>
                    <td><button id="btn-memberJoinPage">회원가입</button></td>
                    <td><button id="btn-memberLoginPage">로그인</button></td>
                </tr>
            </table>
        `;

        $header.innerHTML = tag;

    }
}