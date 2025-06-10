let size = 15;  // 전체 가로 세로 사이즈
let snakeSize = 4;  // 초기 뱀 사이즈

let data = []; // 각 그리드 칸마다 1:1로 대응하는 데이터
let item = 9; // data 배열에 아이템은 9로 저장
let itemCount = 0; // 아이템 획득 횟수
let dir = 1;    // 북(0), 동(1), 남(2), 서(3)

// 현재 snake 위치
let yList = [0,0,0,0];
let xList = [0,1,2,3];


// 그리드 생성
function getTable(){
    let $myGame = document.querySelector("#myGame");

    let $table = document.createElement("table");
    $table.id = "snake";

    for(let i=0; i<size; i++){
        let $tr = document.createElement("tr");

        for(let j=0; j<size; j++){
            let $td = document.createElement("td");
            $tr.append($td);
        }
        $table.append($tr);
    }
    $myGame.append($table);

    return $table;
}

// 초기화
function init(){

    // data 배열에 0 채움
    for(let i=0; i<size; i++){
        let temp = [];
        for(let j=0; j<size; j++){
            temp.push(0);
        }
        data.push(temp);
    }

    let $table = document.querySelector("#snake");
    for(let i=0; i<snakeSize; i++){
        data[yList[i]][xList[i]] = i + 1;
        $table.children[yList[i]].children[xList[i]].setAttribute("class","snakeBody"); // 몸통 칠하기
    }
    $table.children[yList[snakeSize-1]].children[xList[snakeSize-1]].setAttribute("class","snakeHead"); // 머리 칠하기
}


// 아이템 생성
function setItem(){
    while(true){
        let y = Math.floor(Math.random() * size);
        let x = Math.floor(Math.random() * size);
        
        if(data[y][x] == 0){
            data[y][x] = item;
            
            let $table = document.querySelector("#snake");
            $table.children[y].children[x].setAttribute("class","item");

            break;
        }
    }
}


// 실행 
getTable();
init();
setItem();