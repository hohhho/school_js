let size = 3;
let $body = document.body;
let $table = document.createElement("table");
let $tdList = [];
let dataList = [];  // player1(1), player2(2)
let turn = true;    // player1(true), player2(false)
let win = 0;        // player1(1), player2(2)

function init() {

    // 게임판 만들기
    for(let i=0; i<size; i++){
        let temp = [0,0,0];
        dataList.push(temp);
    }

    for(let i=0; i<size; i++){
        let $tr = document.createElement("tr");
        let temp = [];

        for(let j=0; j<size; j++){
            let $td = document.createElement("td");
            $td.addEventListener("click",clickEvent);

            $tr.append($td);
            temp.push($td);
        }
        $table.append($tr);
        $tdList.push(temp);
    }
    $body.append($table);
}

    // 사용자 클릭 처리
    function clickEvent(){
        for(let i=0; i<size; i++){
            for(let j=0; j<size; j++){
                if(this == $tdList[i][j]){
                    if(this.innerText == ""){
                        if(turn){
                            this.innerText = "O";
                            dataList[i][j] = 1;
                            winCheck();
                        }else{
                            this.innerText = "X";
                            dataList[i][j] = 2;
                            winCheck();
                        }
                        turn = !turn;
                    }else{
                        alert("이미 선택된 칸입니다");
                    }
                }
            }
        }
    }

    // 승리 체크
    function winCheck(){
        // 가로 체크
        for(let i=0; i<dataList.length; i++){
            let countO = 0;
            let countX = 0;
            for(let j=0; j<dataList[i].length; j++){
                if(dataList[i][j] != 0){
                    if(dataList[i][j] == 1){
                        countO++;
                        countX = 0;
                    }else{
                        countX++;
                        countO = 0;
                    }

                    if(countO == 3){
                        win = 1;
                        break;
                    }

                    if(countX == 3){
                        win = 2;
                        break;
                    }
                }
            }
        }

        // 세로 체크
        for(let i=0; i<dataList[0].length; i++){
            let countO = 0;
            let countX = 0;
            for(let j=0; j<dataList.length; j++){
                if(dataList[j][i] != 0){
                    if(dataList[j][i] == 1){
                        countO++;
                        countX = 0;
                    }else{
                        countX++;
                        countO = 0;
                    }

                    if(countO == 3){
                        win = 1;
                        break;
                    }

                    if(countX == 3){
                        win = 2;
                        break;
                    }
                }
            }
        }

        // 대각선 체크1
        for(let i=0; i<dataList.length; i++){
            let countO = 0;
            let countX = 0;
            if(dataList[i][i] != 0){
                if(dataList[i][i] == 1){
                    countO++;
                    countX = 0;
                }else{
                    countX++;
                    countO = 0;
                }

                if(countO == 3){
                    win=1;
                    break;
                }
                if(countX == 3){
                    win=2;
                    break;
                }

            }
        }

        // 대각선 체크2
        // (2,0) / (1,1) / (0,2)
        for(let i=0; i<dataList.length; i++){
            let j = dataList.length - i;
            let countO = 0;
            let countX = 0;

            if(dataList[i][j] != 0){
                if(dataList[i][j] == 1){
                    countO++;
                    countX = 0;
                }else{
                    countX++;
                    countO = 0;
                }

                if(countO == 3){
                    win=1;
                    break;
                }
                if(countX == 3){
                    win=2;
                    break;
                }
            }
        }

        console.log(win);
        
        if(win != 0){
            let $wintxt = document.createElement("p");
            
            if(win == 1){
                $wintxt.innerText = "player O win!!";
            }else if(win == 2){
                $wintxt.innerText = "player X win!!";
            }else{
                $wintxt.innerText = "error";
            }
            $body.append($wintxt);
            
        }else{
            let count = 0;
            
            for(let i=0; i<dataList.length; i++){
                for(let j=0; j<dataList[i].length; j++){
                    if(dataList[i][j] == 0){
                        count++;
                    }
                }
            }
            
            if(count == 0 && win==0){
                let $wintxt = document.createElement("p");
                $wintxt.innerText = "무승부";
                $body.append($wintxt);
            }
        }
    }



//------------------------------

init();