import {PageHeader} from "./pageHeader.js";
import {PageIndex} from "./pageIndex.js";
import {PageMemberJoin} from "./pageMemberJoin.js";
import { PageMemberList } from "./pageMemberList.js";
import { PageMemberLogin } from "./pageMemberLogin.js";

export let ControllerMain = {

    log : null,
    pageList : {},

    start(){
        this.setPageList();

        this.changePage("page-header",null);
        this.changePage("page-index",null);
    },

    setPageList(){
        this.pageList["page-header"] = PageHeader;
        this.pageList["page-index"] = PageIndex;
        this.pageList["page-memberJoin"] = PageMemberJoin;
        this.pageList["page-memberLogin"] = PageMemberLogin;
        this.pageList["page-memberList"] = PageMemberList;
    },

    changePage(pageName, data){
        this.pageList[pageName].execute(data);
    }
}