import { PageHeader } from "./pageHedaer.js";
import { PageContent } from "./pageContent.js";
import { PageWrite } from "./pageWrite.js";
import { PageInfo } from "./pageInfo.js"

export class ControllerMain {
    
    static dayList = ["일", "월", "화", "수", "목", "금", "토"];
    static pageList = {};
    static start() {
        
        this.setPageList();

        this.chagePage("page-header", null);
        this.chagePage("page-content", null);
    }

    static setPageList() {
        this.pageList["page-header"] = new PageHeader();
        this.pageList["page-content"] = new PageContent();
        this.pageList["page-write"] = new PageWrite();
        this.pageList["page-info"] = new PageInfo();
    }

    static chagePage(pageName, data) {
        this.pageList[pageName].execute(data);
    }

}