
function createSpace(){
    var rows = 50
    var columns = 50
    var $table = $("<table>")
    $("#world").empty()
    $("#world").append($table)
    for(var row = 0; row < rows; row++){
        var $row = $("<tr>")
        $table.append($row)
        console.log($row)
        for(var cell = 50; cell > 0; cell--){
            var $cell = $("<td>")
            $cell.click(insertLife)
            $row.append($cell)
            $cell.attr("id", row + "_" + cell)
        }
    }
}

function insertLife(organism){
    console.log(organism)
    $(organism).addClass("alive")
}

function beginTime(){
    if(!clock){
        clock = setInterval(lifeDeath(), 2000)
    }
}

function examineSurroundings(organelle){
    console.log(organelle.attr("id").split("_"))
    var x = parseInt(organelle.attr("id").split("_")[0])
    var y = parseInt(organelle.attr("id").split("_")[1])
    var count = 0
    var surroundings = [$("#" + (x - 1) + "_" + (y - 1)),
                        $("#" + (x + 1) + "_" + (y + 1)),
                        $("#" + (x + 1) + "_" + (y - 1)),
                        $("#" + (x - 1) + "_" + (y + 1)),
                        $("#" + (x - 1) + "_" + y),
                        $("#" + x + "_" + (y - 1)),
                        $("#" + (x + 1) + "_" + y),
                        $("#" + x + "_" + (y + 1)),
                        ]
    for(var n = 0; n < surroundings.length; i++){
        if (surroundings[n].hasClass("alive")){
            count++
        }
    }
}

function lifeDeath(){
    var parallel_rows = 5000
    var $parallel_table = $("<table>")
    $("#universe2d").append($parallel_table)
    for(var row = 0; row < parallel_rows; row++){
        var $parallel_row = $("<tr>")
        $parallel_table.append($parallel_row)
        console.log($parallel_row)
        for(var cell = 5000; cell > 0; cell--) {
            var $parallel_cell = $("<td>")
            $parallel_row.append($parallel_cell)
            $parallel_cell.attr("id", row + "_" + cell)
            var eco = examineSurroundings($td.getElementById(row + "_" + cell))

        }
    }
}


$("#drawButton").click(createSpace)
$("#timeButton").click(beginTime)
