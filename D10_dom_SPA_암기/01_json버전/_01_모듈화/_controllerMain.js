import { MemberDAO } from "./_memberDAO.js";

export let ControllerMain = {
    start(){
        let member1 = {number : 1001, name : "김철수",};
        let member2 = {number : 1002, name : "이만수",};
        let member3 = {number : 1003, name : "조영수",};

        MemberDAO.insertMemberList(member1);
        MemberDAO.insertMemberList(member2);
        MemberDAO.insertMemberList(member3);

        MemberDAO.printMemberList();

        MemberDAO.deleteMemberList(1002);

        MemberDAO.printMemberList();

        MemberDAO.updateMemberList(1001, "홍길동");

        MemberDAO.printMemberList();

        MemberDAO.selectMemberList(1003);
    }
};