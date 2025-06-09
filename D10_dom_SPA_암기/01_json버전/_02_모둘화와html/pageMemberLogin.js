import { MemberDAO } from "./_memberDAO.js";

export let PageMemberLogin = {
    
    $inputMemberId : null,
    $inputMemberPw : null,
    $buttonMemberLoginPro : null,

    execute() {
        let $content = document.querySelector("#content");

        let tag = "";
        tag +=
        `
        <style>
            #content-memberLogin {
                margin: 0 auto;
                border: 1px solid black;
            }
        </style>
        `;

        tag +=
        `
        <table id="content-memberLogin">
            <tr>
                <td>아이디</td>
                <td><input type="text" id="input-memberId"></td>
            </tr>
            <tr>
                <td>비밀번호</td>
                <td><input type="text" id="input-memberPw"></td>
            </tr>
            <tr>
                <td colspan="2">
                    <button id="button-memberLoginPro">로그인</button>
                </td>
            </tr>
        </table>
        `;

        $content.innerHTML = tag;

        this.$inputMemberId = document.querySelector("#input-memberId");
        this.$inputMemberPw = document.querySelector("#input-memberPw");
        this.$buttonMemberLoginPro = document.querySelector("#button-memberLoginPro");
        this.$buttonMemberLoginPro.addEventListener("click", (e) => { this.buttonMemberLoginProClick(e)} );
    },
    
    buttonMemberLoginProClick(event) {
        let memberId = this.$inputMemberId.value;
        let memberPw = this.$inputMemberPw.value;

        let check = MemberDAO.memberLogin(memberId, memberPw);
        if(check) {
            alert("로그인 성공");
        } else {
            alert("로그인 실패");
        }
    }
    

}