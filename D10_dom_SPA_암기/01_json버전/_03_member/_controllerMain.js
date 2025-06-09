import { PageHeader } from "./pageHeader.js";
import { PageIndex } from "./pageIndex.js";
import { PageMemberJoin } from "./pageMemberJoin.js";
import { PageMemberList } from "./pageMemberList.js";
import { PageMemberLogin } from "./pageMemberLogin.js";

export let ControllerMain = {
    // 세션같은 역할
    log : null,
    pageList : {},
    start() {

        this.setPageList();
        this.changePage("page-header", null);
        this.changePage("page-index", null);
    },

    setPageList() {
        this.pageList["page-header"] = PageHeader;
        this.pageList["page-index"] = PageIndex;
        this.pageList["page-memberJoin"] = PageMemberJoin;
        this.pageList["page-memberList"] = PageMemberList;
        this.pageList["page-memberLogin"] = PageMemberLogin;
    },

    changePage(pageName, data) {
        this.pageList[pageName].execute(data);
    }

}

