let size = 15;
let snakeSize = 4;

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

getTable();