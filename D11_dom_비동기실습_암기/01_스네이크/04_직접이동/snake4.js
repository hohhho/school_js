let size = 15;
let snakeSize = 4;

let data = [];
let yList = [0, 0, 0, 0];
let xList = [0, 1, 2, 3];
let item = 9;
let itemCount = 0;
let dir = 1;    // 북(0) 동(1) 남(2) 서(3)

let gameOver = false;
let count = 3;

let myInterval = null;
let myTimeout = null;

function getTable() {
    $myGame = document.querySelector("#myGame");

    $table = document.createElement("table");
    $table.id = "snake";

    for(let i=0; i<size; i++) {
        $tr = document.createElement("tr");
        for(let j=0; j<size; j++) {
            $td = document.createElement("td");
            $tr.append($td);
        }
        $table.append($tr);
    }

    $myGame.append($table);

    return $table;
}


function init() {
    for(let i=0; i<size; i++) {
        let temp = [];
        for(let j=0; j<size; j++) {
            temp.push(0);
        }
        data.push(temp);
    }

    let $table = document.querySelector("#snake");
    for(let i=0; i<snakeSize; i++) {
        data[yList[i]][xList[i]] = i + 1;
        $table.children[[yList[i]]].children[xList[i]].setAttribute("class", "snakeBody");
    }
    $table.children[yList[snakeSize - 1]].children[xList[snakeSize - 1]].setAttribute("class", "snakeHead");

    
}

function setItem() {
    while(true) {
        let y = Math.floor(Math.random() * size);
        let x = Math.floor(Math.random() * size);
        
        if(data[y][x] == 0) {
            data[y][x] = item;
            let $table = document.querySelector("#snake");
            $table.children[y].children[x].setAttribute("class", "item");

            break;
        } 
    }
}


function moveSnake(dir) {

    let $table = document.querySelector("#snake");

    // 스네이크 이동이 아니고 다음 위치 저장하기
    let tempY = yList[snakeSize - 1];
    let tempX = xList[snakeSize - 1];
    if(dir == 0) {
        tempY -= 1;
    } else if(dir == 1) {
        tempX += 1;
    } else if(dir == 2) {
        tempY += 1;
    } else if(dir == 3) {
        tempX -= 1;
    }
    
    // 위 아래 체크
    if(size <= tempY || tempY < 0) {
        gameOver = true;
        return;
    }

    // 좌우 체크
    if(size <= tempX || tempX < 0) {
        gameOver = true;
        return;
    }

    // 아이템이 아니고, 자기 몸에 부딪혔을 때
    if(data[tempY][tempX] != 0 && data[tempY][tempX] != item) {
        gameOver = true;
        return;
    }

    // 기존 위치 초기화
    // 현재 위치를 0으로 만들고 회색으로 칠함
    for(let i=0; i<snakeSize; i++) {
        // 회색으로 칠함
        $table.children[[yList[i]]].children[xList[i]].setAttribute("class", "");
        // 데이터는 0으로 바꿈
        data[yList[i]][xList[i]] = 0;
    }
    // 머리도 0으로 바꿈
    $table.children[yList[snakeSize - 1]].children[xList[snakeSize - 1]].setAttribute("class", "");

    // 아이템을 먹으면
    if(data[tempY][tempX] == item) {
        // 꼬리를 늘려야 함 => unshift로 배열의 앞에 저장
        yList.unshift(tempY);
        xList.unshift(tempX);

        snakeSize += 1;
      
        itemCount += 1;
        document.querySelector("#scoreTd").innerText = itemCount;

        setItem();
    }

    // 스네이크 이동
    // 다음 위치로 이동
    for(let i=1; i<snakeSize; i++) {
        yList[i - 1] = yList[i];
        xList[i - 1] = xList[i];
    }
    yList[snakeSize - 1] = tempY;
    xList[snakeSize - 1] = tempX;
    
    // 스네이크 표시
    for(let i=0; i<snakeSize; i++) {
        // 몸통 그리기
        $table.children[[yList[i]]].children[xList[i]].setAttribute("class", "snakeBody");
        data[yList[i]][xList[i]] = i + 1;
    }
    // 머리 그리기
    $table.children[yList[snakeSize - 1]].children[xList[snakeSize - 1]].setAttribute("class", "snakeHead");

}

window.addEventListener("keydown", (e) => {
    let key = e.code;
    // 북(0) 동(1) 남(2) 서(3)
    console.log(key);
    
    if(key == "ArrowLeft") {
        dir = 3;
        moveSnake(dir);
    } else if(key == "ArrowRight") {
        dir = 1;
        moveSnake(dir);
    } else if(key == "ArrowUp") {
        dir = 0;
        moveSnake(dir);
    } else if(key == "ArrowDown") {
        dir = 2;
        moveSnake(dir);
    }
});


getTable();
init();
setItem();