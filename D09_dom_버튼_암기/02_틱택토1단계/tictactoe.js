let size = 3;
let $body = document.body;
let $table = document.createElement("table");
let $tdList = [];
let dataList = [];  // player1(1), player2(2)
let turn = true;    // player1(true), player2(false)
let win = 0;        // player1(1), player2(2)

function init() {

    for(let i=0; i<size; i++) {
        let temp = [0, 0, 0];
        dataList.push(temp);
        // dataList.push([0, 0, 0]);
    }

    for(let i=0; i<size; i++) {
        let $tr = document.createElement("tr");
        let $temp = [];
        for(let j=0; j<size; j++) {
            let $td = document.createElement("td");
            $td.addEventListener("click", clickEvent);
            $temp.push($td);
            $tr.append($td);
        }
        $tdList.push($temp);
        $table.append($tr);
    } 
    $body.append($table);

    console.log($tdList);
}

function clickEvent() {
    for(let i=0; i<size; i++) {
        for(let j=0; j<size; j++) {
            if(this == $tdList[i][j]) {
                if(this.innerText == "") {
                    if(turn) {
                        this.innerText = "O";
                        dataList[i][j] = 1;
                    } else {
                        this.innerText = "X";
                        dataList[i][j] = 2;
                    }
                    turn = !turn;
                }
            }
        }
    }

    console.log(dataList);

    winCheck();
}

function winCheck() {
    // 가로 검사 3줄
    for(let i=0; i<size; i++) {
        if(dataList[i][0] == 1 && 
            dataList[i][1] == 1 &&
            dataList[i][2] == 1) {
                win = 1;
        } 
        if(dataList[i][0] == 2 && 
            dataList[i][1] == 2 &&
            dataList[i][2] == 2) {
            win = 2;
        } 
    }

    // 세로 검사 3줄
    for(let i=0; i<size; i++) {
        if(dataList[0][i] == 1 && 
            dataList[1][i] == 1 &&
            dataList[2][i] == 1) {
                win = 1;
        } 
        if(dataList[0][i] == 2 && 
            dataList[1][i] == 2 &&
            dataList[2][i] == 2) {
                win = 2;
        } 
    }

    // 대각선 \
    if(dataList[0][0] == 1 && dataList[1][1] == 1 && dataList[2][2] == 1) {
        win = 1;
    }
    if(dataList[0][0] == 2 && dataList[1][1] == 2 && dataList[2][2] == 2) {
        win = 2;
    }

    // 대각선 /
    if(dataList[0][2] == 1 && dataList[1][1] == 1 && dataList[2][0] == 1) {
        win = 1;
    }
    if(dataList[0][2] == 2 && dataList[1][1] == 2 && dataList[2][0] == 2) {
        win = 2;
    }

    // 무승부
    let result = false;
    for(let i=0; i<size; i++) {
        for(let j=0; j<size; j++) {
            if(dataList[i][j] == 0) {
                result = true;
                break;
            }
        }
    }
    if(result == false) {
        win = 3;
    }

    console.log("win = " + win);
}

//------------------------------

init();