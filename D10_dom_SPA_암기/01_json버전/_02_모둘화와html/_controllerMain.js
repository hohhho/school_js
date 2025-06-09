import { PageHeader } from "./pageHeader.js";
import { PageIndex } from "./pageIndex.js";
import { PageMemberLogin } from "./pageMemberLogin.js";

export let ControllerMain = {
    pageList : {
        "page-header" : PageHeader,
        "page-index" : PageIndex,
        "page-memberLogin" : PageMemberLogin,

    } , 
    start() {
        this.changePage("page-header");
        this.changePage("page-index");
    } ,
    changePage(pageName) {
        this.pageList[pageName].execute();
    } ,
};