
export let MemberDAO = {
   
    memberList : [],
    
    start() {
        this.setSampleData();  
    },

    setSampleData(){

        this.memberList = [
            { 
                "memberId": "qwer1234", 
                "memberPw": "Qwer1234!"
            },
            { 
                "memberId": "abcd1234", 
                "memberPw": "Awer1234!"
            },
            { 
                "memberId": "asdf1234", 
                "memberPw": "Asdf1234!"
            },
        ];
    },

    memberLogin(memberId, memberPw) {
        let check = false;
        for(let i=0; i<this.memberList.length; i++) {
            if(this.memberList[i].memberId == memberId
                && this.memberList[i].memberPw == memberPw) {
                    check = true;
                    break;
                }
        }
        return check;
    }
};