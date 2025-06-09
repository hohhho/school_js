import { PageHeader } from "./pageHeader.js";
import { PageIndex } from "./pageIndex.js";
import { PageFooter } from "./pageFooter.js";
import { PageItemInfo } from "./pageItemInfo.js";
import { PageItemList } from "./pageItemList.js";
import { PageLogin } from "./pageLogin.js";
import { PageCartInfo } from "./pageCartInfo.js";

export class ControllerMain {
    
    static log = null;
    static pageList = {};

    static start() {
       
        this.setPageList();

        this.changePage("page-header", null);
        this.changePage("page-index", null);
        this.changePage("page-footer", null);
    }

    static setPageList() {
        this.pageList["page-header"] = new PageHeader();
        this.pageList["page-index"] = new PageIndex();
        this.pageList["page-footer"] = new PageFooter();
        this.pageList["page-itemInfo"] = new PageItemInfo();
        this.pageList["page-itemList"] = new PageItemList();
        this.pageList["page-login"] = new PageLogin();
        this.pageList["page-cartInfo"] = new PageCartInfo();
    }

    static changePage(pageName, data) {
        this.pageList[pageName].execute(data);
    }

}