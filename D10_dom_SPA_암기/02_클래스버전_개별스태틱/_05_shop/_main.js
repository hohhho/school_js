import { ControllerMain } from "./_controllerMain.js";
import { MemberDAO } from "./_memberDAO.js";
import { ItemDAO } from "./_itemDAO.js";
import { CartDAO } from "./_cartDAO.js";

ItemDAO.start();
MemberDAO.start();
CartDAO.start();

ControllerMain.start();