function insertLife(){
    $(this).addClass("alive")
}

function toggleTime(){
    if(!clock){
        clock = setInterval(lifeDeath, 2000)
    }
    else{
        clearInterval(clock)
        clock = 0
    }
}

function examineSurroundings(cell){
    if (!cell.attr("id")){
        return 0
    }
    var x = parseInt(cell.attr("id").split("_")[0])
    var y = parseInt(cell.attr("id").split("_")[1])
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
    for(var i = 0; i < surroundings.length; i++){
        if (surroundings[i].hasClass("alive")){
            count++
        }
    }
    return count
}

function lifeDeath(){
    var current_table = $("#planet")
    var parallel_rows = 30
    var parallel_col = 30
    var $parallel_table = $("<table>")
    for(var parallel_row = 0; parallel_row < parallel_rows; parallel_row++){
        var $parallel_row = $("<tr>")
        $parallel_table.append($parallel_row)
        for(var parallel_cell = 0; parallel_cell < parallel_col; parallel_cell++) {
            var $parallel_cell = $("<td>")
            $parallel_row.append($parallel_cell)
            $parallel_cell.attr("id", parallel_row + "_" + parallel_cell)
            var eco = examineSurroundings($('#'+parallel_row + "_" + parallel_cell))
            console.log(eco)
            $parallel_cell.click(insertLife)
            if (eco == 3 ||(eco == 2 && $('#'+parallel_row + "_" + parallel_cell).hasClass("alive"))){
                $parallel_cell.addClass("alive")
            }
        }
    }
    $("#world").empty()
    $("#world").append($parallel_table)
}


var clock = false
$("#drawButton").click(lifeDeath)
$("#timeButton").click(toggleTime)
