
export let MemberDAO = {
   
    memberList : [],
    
    printMemberList(){
        console.log("------[전체멤버]------");
        for(let i = 0; i < this.memberList.length; i++){
            console.log(this.memberList[i]);
        }

    },
    insertMemberList(member){
        this.memberList.push(member);
    },

    deleteMemberList(number){
        for(let i = 0; i < this.memberList.length; i++){
            if(this.memberList[i].number == number){
                this.memberList.splice(i , 1);
                break;
            }
        }
    },
    updateMemberList(number, changedName){
        for(let i = 0; i < this.memberList.length; i++){
            if(this.memberList[i].number == number){
                this.memberList[i].name = changedName;
                break;
            }
        }
    },
    selectMemberList(number){
        console.log("------[선택멤버]------");
        for(let i = 0; i < this.memberList.length; i++){
            if(this.memberList[i].number == number){
                console.log(this.memberList[i]);
                break;
            }
        }
    }  
};