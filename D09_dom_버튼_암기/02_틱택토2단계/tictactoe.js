let size = 3;
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
    document.querySelector("#center").append($table);

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

    drawFooter();
}

function removeEvent() {
    for(let i=0; i<size; i++) {
        for(let j=0; j<size; j++) {
            $tdList[i][j].removeEventListener("click", clickEvent);
            $tdList[i][j].style.cursor = "auto";
        }
    }
}

function drawFooter() {
    let $footer = document.querySelector("#footer");
    let $msg = document.createElement("h6");
    if(win == 1 || win == 2 || win == 3) {
        if(win == 1) {
            $msg.innerHTML = "Player <span class='winner'>O</span> 승리!";
        }
        if(win == 2) {
            $msg.innerHTML = "Player <span class='winner'>X</span> 승리!";
        }
        if(win == 3) {
            $msg.innerHTML = "Player <span class='winner'>무승부</span>";
        }
        $footer.append($msg);

        // 클릭 막기
        removeEvent();

        // replay 버튼 그리기
        let $replayBtn = document.createElement("button");
        $replayBtn.id = "replay";
        $replayBtn.innerText = "재시작";
        $replayBtn.addEventListener("click", replay);

        $footer.append($replayBtn);
    }
}

function replay() {
    location.href = "index.html";
}


//----------------------------------------

init();