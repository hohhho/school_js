import { ControllerMain } from "./_controllerMain.js";
import { MemberDAO} from "./_memberDAO.js";

MemberDAO.start();
ControllerMain.start();