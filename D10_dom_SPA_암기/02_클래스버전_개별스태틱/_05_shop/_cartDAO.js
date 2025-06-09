import { ControllerMain } from "./_controllerMain.js";
import { ItemDAO } from "./_itemDAO.js";
import { MemberDAO } from "./_memberDAO.js";

export class CartDAO {

    static cartList = [];

    static start() {
        this.setCartSampleData();
    }

    static setCartSampleData() {
        this.cartList = [
            {
                cartNo: 1,
                cartMemberNo: 3,
                cartItemNo: 3,
                cartItemCount: 2
            },
            {
                cartNo: 2,
                cartMemberNo: 1,
                cartItemNo: 11,
                cartItemCount: 1
            },
            {
                cartNo: 3,
                cartMemberNo: 2,
                cartItemNo: 5,
                cartItemCount: 3
            },
            {
                cartNo: 4,
                cartMemberNo: 3,
                cartItemNo: 7,
                cartItemCount: 5
            },
            {
                cartNo: 5,
                cartMemberNo: 2,
                cartItemNo: 1,
                cartItemCount: 21
            },
            {
                cartNo: 6,
                cartMemberNo: 3,
                cartItemNo: 21,
                cartItemCount: 5
            },
            {
                cartNo: 7,
                cartMemberNo: 3,
                cartItemNo: 29,
                cartItemCount: 1
            },
        ];
    }

    /* 내 장바구니 */
    static getCartList() {
        let id = ControllerMain.log;
        let no = MemberDAO.getMemberNo(id);

        let myCartList = [];
        for(let i=0; i<this.cartList.length; i++) {
            let cart = this.cartList[i];

            let index = ItemDAO.getItemIndex(cart.cartItemNo);
            let item = ItemDAO.getItem(index);
            let temp = {
                itemCartNo: cart.cartNo,
                itemImage: item.itemImage,
                itemName: item.itemName,
                itemCount: cart.cartItemCount,
                itemPrice: item.itemPrice,
                itemDiscount: item.itemDiscount
            };
            if(cart.cartMemberNo == no) {
                myCartList.push(temp);
            }
        }

        return myCartList;
    }

    /* 장바구니 마지막 번호 */
    static getLastCartNum() {
        return this.cartList[this.cartList.length - 1].cartNo;
    }

    /* 장바구니 담기 */
    static addCart(cartData) {
        this.cartList.push(cartData);
        console.log(this.cartList);
    }

    /* 상품 한 개 삭제 */
    static deleteItem(itemCartNo) {
        let index = 0;
        for(let i=0; i<this.cartList.length; i++) {
            if(itemCartNo == this.cartList[i].cartNo) {
                index = i;
                break;
            }
        }

        this.cartList.splice(index, 1);
        console.log(this.cartList);
    }

}
