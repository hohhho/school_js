let row      = 22;   // 세로 길이
let col      = 12;   // 가로 길이
let dataList = [];   // 테트리스의 숫자구성
let colorList = ["white", "green", "red", "purple", "orange", "blue", "yellow", "skyblue", "gray", "black"];

// 자주 사용하는 값을 상수화
const WHITE = 0;
const GRAY = 8;
const BLACK = 9;

// 초기화
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

}

init();