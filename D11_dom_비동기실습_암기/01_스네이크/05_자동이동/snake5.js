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

    setItem();
}

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

function setCount() {
    
    if(count >= 0) {
        document.querySelector("#msg").innerHTML = "Game Over<br>" + count;
    } else {
        clearInterval(myTimeout);
        location.href = "snake5.html";
    }

    myTimeout = setTimeout(setCount, 1000);
    count -= 1;

}

function moveSnake() {

    // 게임 종료
    if(gameOver) {
        console.log("Game Over");
        setCount();

        clearInterval(myInterval);
    }

    let $table = document.querySelector("#snake");

    // 스네이크 이동
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
   
    if(size <= tempY || tempY < 0) {
        gameOver = true;
        return;
    }
    if(size <= tempX || tempX < 0) {
        gameOver = true;
        return;
    }
    if(data[tempY][tempX] != 0 && data[tempY][tempX] != item) {
        gameOver = true;
        return;
    }

    // 기존 위치 초기화
    for(let i=0; i<snakeSize; i++) {
        $table.children[[yList[i]]].children[xList[i]].setAttribute("class", "");
        data[yList[i]][xList[i]] = 0;
    }
    $table.children[yList[snakeSize - 1]].children[xList[snakeSize - 1]].setAttribute("class", "");

    // 아이템을 먹으면
    if(data[tempY][tempX] == item) {
        yList.unshift(tempY);
        xList.unshift(tempX);

        snakeSize += 1;
      
        itemCount += 1;
        document.querySelector("#scoreTd").innerText = itemCount;

        setItem();
    }

    // 스네이크 이동
    for(let i=1; i<snakeSize; i++) {
        yList[i - 1] = yList[i];
        xList[i - 1] = xList[i];
    }
    yList[snakeSize - 1] = tempY;
    xList[snakeSize - 1] = tempX;
    
    // 스네이크 표시
    for(let i=0; i<snakeSize; i++) {
        $table.children[[yList[i]]].children[xList[i]].setAttribute("class", "snakeBody");
        data[yList[i]][xList[i]] = i + 1;
    }
    $table.children[yList[snakeSize - 1]].children[xList[snakeSize - 1]].setAttribute("class", "snakeHead");

   
}

function gameStart() {
    myInterval = setInterval(moveSnake, 100);

    document.querySelector("#playBtn").setAttribute("disabled", true);
    document.querySelector("#playBtn").style.background = "lightgray";
}

window.addEventListener("keydown", (e) => {
    let key = e.code;
    // 북(0) 동(1) 남(2) 서(3)

    if(key == "ArrowLeft") {
        dir = 3;
    } else if(key == "ArrowRight") {
        dir = 1;
    } else if(key == "ArrowUp") {
        dir = 0;
    } else if(key == "ArrowDown") {
        dir = 2;
    }
});

getTable();
init();




