import { PageHeader } from "./pageHeader.js";
import { PageIndex } from "./pageIndex.js";
import { PageMemberJoin } from "./pageMemberJoin.js";
import { PageMemberList } from "./pageMemberList.js";
import { PageMemberLogin } from "./pageMemberLogin.js";

// Controller 클래스는 싱글톤
export class ControllerMain {

    static instance = new ControllerMain()
    static getInstance(){ return ControllerMain.instance; }

    start() {
        this.log = null;

        this.pageList = {};
        this.setPageList();

        this.changePage("page-header", null);
        this.changePage("page-index", null);
    }

    setPageList() {
        this.pageList["page-header"] = new PageHeader();
        this.pageList["page-index"] = new PageIndex();
        this.pageList["page-memberJoin"] = new PageMemberJoin();
        this.pageList["page-memberList"] = new PageMemberList();
        this.pageList["page-memberLogin"] = new PageMemberLogin();
    }

    changePage(pageName, data) {
        this.pageList[pageName].execute(data);
    }

}

