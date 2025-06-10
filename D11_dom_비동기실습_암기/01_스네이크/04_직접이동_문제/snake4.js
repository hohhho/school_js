let size = 15;  // 전체 가로 세로 사이즈
let snakeSize = 4;  // 초기 뱀 사이즈

let data = []; // 각 그리드 칸마다 1:1로 대응하는 데이터
let item = 99; // data 배열에 아이템은 99로 저장
let itemCount = 0; // 아이템 획득 횟수
let dir = 1;    // 북(0), 동(1), 남(2), 서(3)

// 현재 snake 위치
let yList = [0,0,0,0];
let xList = [0,1,2,3];

let gameOver = false;
let count = 3;

let myInterval = null;
let myTimeout = null;


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

// 뱀 움직이기
function moveSnake(dir){
    
    let $table = document.querySelector("#snake");

    // 다음 위치 temp에 저장
    let tempY = yList[snakeSize-1];
    let tempX = xList[snakeSize-1];

    if(dir == 0){
        tempY -= 1;
    }else if(dir == 1){
        tempX += 1;
    }else if(dir == 2){
        tempY += 1;
    }else{
        tempX -= 1;
    }

    // 위 아래 체크
    if(tempY >= size || tempY < 0){
        gameOver = true;
        return;
    }

    // 좌우 체크
    if(tempX >= size || tempX < 0){
        gameOver = true;
        return;
    }

    // 자기 자신에 부딪혔는지 체크(아이템에 부딪힌 건 체크하지 않음)
    if(data[tempY][tempX] != 0 && data[tempY][tempX] != item){
        gameOver = true;
        return;
    }


    // 모든 조건을 만족했다면,

    // 1. 기존의 뱀을 지움
    for(let i=0; i<snakeSize; i++){
        data[yList[i]][xList[i]] = 0;
        $table.children[yList[i]].children[xList[i]].setAttribute("class","");
    }
    $table.children[yList[snakeSize-1]].children[xList[snakeSize-1]].setAttribute("class","");

    // 2. 아이템을 먹었는지 체크
    if(data[tempY][tempX] == item){
        yList.unshift(tempY);
        xList.unshift(tempX);

        snakeSize += 1;

        itemCount += 1;
        document.querySelector("#scoreTd").innerText = itemCount;

        setItem();
    }

    // 3. 다음 위치로 이동
    // 뱀 몸통을 한 칸씩 당겨 꼬리 좌표 소멸시킴
    for(let i=1; i<snakeSize; i++){
        yList[i-1] = yList[i];
        xList[i-1] = xList[i];
    }
    // 뱀 머리에 다음 좌표 추가
    yList[snakeSize-1] = tempY;
    xList[snakeSize-1] = tempX;
    
    // 4. 새로운 위치에서 뱀 생성
    for(let i=0; i<snakeSize; i++){
        data[yList[i]][xList[i]] = i+1;
        $table.children[yList[i]].children[xList[i]].setAttribute("class", "snakeBody");
    }
    $table.children[yList[snakeSize-1]].children[xList[snakeSize-1]].setAttribute("class", "snakeHead");
}

// 키 설정
window.addEventListener("keydown", (e)=>{
    // 북(0), 동(1), 남(2), 서(3)
    let key = e.code;
    
    if(key == "ArrowLeft"){
        dir = 3;
        moveSnake(dir);
    }else if(key == "ArrowRight"){
        dir = 1;
        moveSnake(dir);
    }else if(key == "ArrowUp"){
        dir = 0;
        moveSnake(dir);
    }else if(key == "ArrowDown"){
        dir = 2;
        moveSnake(dir);
    }
});


// 실행 
getTable();
init();
setItem();