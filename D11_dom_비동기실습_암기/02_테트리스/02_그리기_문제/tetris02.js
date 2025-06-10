let rows = 22;  // 세로 길이
let cols = 12;  // 가로 길이
let dataList = [];  // 테트리스 숫자 구성
let colorList = ["white", "green", "red", "purple", "orange", "blue", "yellow", "skyblue", "gray", "black"];

// 자주 사용하는 값을 상수화
const WHITE = 0;
const GRAY = 8;
const BLACK = 9;

let curY = 0;   // 처음 생성되는 블럭의 시작 y 좌표
let curX = 0;   // 처음 생성되는 블럭의 시작 x 좌표
let curBlock = null;    // 현재 블록의 정보 저장

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


// 초기화
function init(){

    let $tetrisCenter = document.querySelector("#tetrisCenter");

    // 1. 테트리스 표 그리기, dataList 0으로 채우기
    let $myTetris = document.createElement("table");
    $myTetris.id = "myTetris";
    
    for(let i=0; i<rows; i++){
        let $tr = document.createElement("tr");
        let temp = [];

        for(let j=0; j<cols; j++){
            let $td = document.createElement("td");
            $tr.append($td);

            temp.push(0);
        }

        $myTetris.append($tr);
        dataList.push(temp);
    }

    $tetrisCenter.append($myTetris);

    // 2. 테트리스 표 가장자리의 세로를 GRAY로 채우기, class를 gray로 변경
    for(let i=0; i<rows; i++){
        dataList[i][0] = GRAY;
        dataList[i][cols - 1] = GRAY;

        $myTetris.children[i].children[0].setAttribute("class", "gray");
        $myTetris.children[i].children[cols - 1].setAttribute("class", "gray");
    }

    // 3. 테트리스 표 가장자리 가로를 GRAY로 채우기, class를 gray로 변경
    for(let i=0; i<cols; i++){
        dataList[0][i] = GRAY;
        dataList[rows - 1][i] = GRAY;

        $myTetris.children[0].children[i].setAttribute("class","gray");
        $myTetris.children[rows-1].children[i].setAttribute("class", "gray");
    }

    // 4. 테트리스 표 안에 숫자 표시
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            $myTetris.children[i].children[j].innerText = dataList[i][j];
        }
    }

    
}


// 랜덤으로 블럭 생성
function setNewBlock(){
    curY = 1;
    curX = 4;

    let r = Math.floor(Math.random() * blockList.length);
    curBlock = blockList[r];

    let $myTetris = document.querySelector("#myTetris");
    let shape = curBlock.shape;

    for(let y=0; y<shape.length; y++){
        for(let x=0; x<shape[0].length; x++){
            if(shape[y][x] == 1){
                dataList[curY + y][curX + x] = curBlock.color;
                $myTetris.children[curY + y].children[curX + x].setAttribute("class", colorList[curBlock.color]);
                $myTetris.children[curY + y].children[curX + x].innerText = curBlock.color;
            }
        }
    }
}

// 실행
init();
setNewBlock();