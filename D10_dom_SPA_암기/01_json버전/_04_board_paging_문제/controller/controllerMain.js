import {PageHeader} from "../pages/pageHeader.js";
import {PageMain} from "../pages/pageMain.js";

export let ControllerMain = {
    log : null,
    pageList : {},

    start(){
        this.setPageList();
        this.changePage("page-header",null);
        this.changePage("page-main",null);
    },

    setPageList(){
        this.pageList["page-header"] = PageHeader;
        this.pageList["page-main"] = PageMain;

    },

    changePage(pageName, data){
        this.pageList[pageName].execute(data);
    }

}