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

getTable();
init();
setItem();