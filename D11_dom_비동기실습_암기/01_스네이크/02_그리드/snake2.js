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




getTable();