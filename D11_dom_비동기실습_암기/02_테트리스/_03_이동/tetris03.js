let row = 22;   // 세로 길이
let col = 12;   // 가로 길이
let dataList = [];   // 테트리스의 숫자구성
let colorList = ["white", "green", "red", "purple", "orange", "blue", "yellow", "skyblue", "gray", "black"];

// 자주 사용하는 값을 상수화
const WHITE = 0;
const GRAY = 8;
const BLACK = 9;
const BLOCK = GRAY;

let curY = 0;    // 처음 생성되는 블럭의 시작 y좌표
let curX = 0;    // 처음 생성되는 블럭의 시작 x좌표
let curBlock = null;    // 현재 블럭의 정보 저장

let blockList = [
    {
        name: "s",
        color: 1,
        shape:
            [
                [0, 0, 0],
                [0, 1, 1],
                [1, 1, 0]
            ]
    },
    {
        name: "z",
        color: 2,
        shape:
            [
                [0, 0, 0],
                [1, 1, 0],
                [0, 1, 1]
            ]
    },
    {
        name: "t",
        color: 3,
        shape:
            [
                [0, 0, 0],
                [1, 1, 1],
                [0, 1, 0]
            ]
    },
    {
        name: "l",
        color: 4,
        shape:
            [
                [0, 1, 0],
                [0, 1, 0],
                [0, 1, 1]
            ]
    },
    {
        name: "j",
        color: 5,
        shape:
            [
                [0, 1, 0],
                [0, 1, 0],
                [1, 1, 0]
            ]
    },
    {
        name: "o",
        color: 6,
        shape:
            [
                [1, 1],
                [1, 1]
            ]
    },
    {
        name: "i",
        color: 7,
        shape:
            [
                [0, 0, 0, 0],
                [1, 1, 1, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ]
    }
];

// 초기화 + 이벤트 등록
function init() {

    // 테트리스 표 그리기, dataList 0으로 채우기
    let $tetrisCenter = document.querySelector("#tetrisCenter");
    let $myTetris = document.createElement("table");
    $myTetris.id = "myTetris";
    for(let i=0; i<row; i++) {
        let temp = [];
        let $tr = document.createElement("tr");
        for(let j=0; j<col; j++) {
            let $td = document.createElement("td");
            $tr.append($td);
            temp.push(0);
        }
        dataList.push(temp);
        $myTetris.append($tr);
    }
    $tetrisCenter.append($myTetris);

    // 테트리스 세로 8(gray)으로 채우기 + class이름을 gray로 설정
    for(let i=0; i<row; i++) {
        dataList[i][0] = GRAY;
        dataList[i][col - 1] = GRAY;

        $myTetris.children[i].children[0].className = colorList[GRAY];
        $myTetris.children[i].children[col-1].className = colorList[GRAY];
    }

    // 테트리스 가로 8(gray)으로 채우기 + class이름을 gray로 설정
    for(let i=0; i<col; i++) {
        dataList[0][i] = GRAY;
        dataList[row - 1][i] = GRAY;

        $myTetris.children[0].children[i].className = colorList[GRAY];
        $myTetris.children[row - 1].children[i].className = colorList[GRAY];
    }

    // dataList 화면에 표시하기
    for(let i=0; i<row; i++) {
        for(let j=0; j<col; j++) {
            $myTetris.children[i].children[j].innerText = dataList[i][j];
        }
    }

    // 이벤트 등록
    document.addEventListener("keydown", function(e) {
        if(e.code == "ArrowLeft") {
            // 왼쪽
            left();
        } else if(e.code == "ArrowRight") {
            // 오른쪽
            right();
        } else if(e.code == "ArrowDown") {
            // 아래
            if(down() == false) {
                setNewBlock();
            }
        } else if(e.code == "ArrowUp") {
            // 회전
        } else if(e.code == "Space") {
            // 아래로 한번에 이동
            while(down()) {}

            setNewBlock();
        } 

        draw();
    });

}

// 랜덤으로 블럭 생성 + curBlock 초기화
function setNewBlock() {

    curY = 1;
    curX = 4;

    let r = Math.floor(Math.random() * blockList.length);

    curBlock = blockList[r];
    let shape = curBlock.shape;
    for(let y=0; y<shape.length; y++) {
        for(let x=0; x<shape[y].length; x++) {
            if(shape[y][x] == 1) {
                dataList[curY + y][curX + x] = blockList[r].color;
            }
        }
    }
}

// 화면 새로 색칠하기
function draw() {
    let $myTetris = document.querySelector("#myTetris");

    for(let y=0; y<row; y++) {
        for(let x=0; x<col; x++) {
            let index = dataList[y][x];

            $myTetris.children[y].children[x].className = colorList[index];
            $myTetris.children[y].children[x].innerText = dataList[y][x];
        }
    }
}

// 왼쪽 이동
function left() {
    let nextY = 0;
    let nextX = -1;

    let shape = curBlock.shape;
    let realBlock = getRealBlock(shape);
    let movable = isMovable(realBlock, nextY, nextX);

    if(movable == true) {
        // dataList 값을 전부 WHITE로 변경
        setData(realBlock, 0, 0, WHITE);
        // 이동 후의 위치로 dataList 값 변경
        setData(realBlock, nextY, nextX, curBlock.color);
        
        curX -= 1;
    }
}

// 오른쪽 이동
function right() {
    let nextY = 0;
    let nextX = 1;

    let shape = curBlock.shape;
    let realBlock = getRealBlock(shape);
    let movable = isMovable(realBlock, nextY, nextX);

    if(movable == true) {
        // dataList 값을 전부 WHITE로 변경
        setData(realBlock, 0, 0, WHITE);
        // 이동 후의 위치로 dataList 값 변경
        setData(realBlock, nextY, nextX, curBlock.color);
        
        curX += 1;
    }
}

// 아래로 이동
function down() {
    let nextY = 1;
    let nextX = 0;

    let shape = curBlock.shape;
    let realBlock = getRealBlock(shape);
    let movable = isMovable(realBlock, nextY, nextX);

    if(movable == true) {
        // dataList 값을 전부 WHITE로 변경
        setData(realBlock, 0, 0, WHITE);
        // 이동 후의 위치로 dataList 값 변경
        setData(realBlock, nextY, nextX, curBlock.color);
        
        curY += 1;
    } else if(movable == false) {
        // 블럭이 바닥에 닿으면
        setData(realBlock, 0, 0, BLACK);
    }

    return movable;
}

// block배열에서 숫자1의 값 저장
function getRealBlock(shape) {
    let realBlock = [];
    for(let y=0; y<shape.length; y++) {
        for(let x=0; x<shape[y].length; x++) {
            if(shape[y][x] == 1) {
                realBlock.push([curY + y, curX + x]);
            }
        }
    }
    return realBlock;
}

// 이동가능한지 확인
function isMovable(realBlock, nextY, nextX) {
    for(let i=0; i<realBlock.length; i++) {
        let y = realBlock[i][0];
        let x = realBlock[i][1];

        if(dataList[y + nextY][x + nextX] >= BLOCK) {
            return false;
        }
    }
    return true;
}

// 이동 후 dataList 값 수정
function setData(realBlock, nextY, nextX, color) {
    for(let i=0; i<realBlock.length; i++) {
        let y = realBlock[i][0];
        let x = realBlock[i][1];

        dataList[y + nextY][x + nextX] = color;
    }
}

init();
setNewBlock();
draw();