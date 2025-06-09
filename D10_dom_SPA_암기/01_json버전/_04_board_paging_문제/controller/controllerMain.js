import {PageHeader} from "../pages/pageHeader.js";
import {PageMain} from "../pages/pageMain.js";

export let ControllerMain = {
    log : null,
    pageList : {},

    start(){

    },

    setPageList(){
        this.pageList["page-header"] = PageHeader;
        this.pageList["page-main"] = PageMain;

    },

    changePage(){
        
    }

}