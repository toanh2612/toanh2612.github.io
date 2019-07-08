let matrix = null;
let matrix_search = null;
let matrix_way = null; 
let pStart = {x:null,y:null};
let pEnd = {x:null,y:null};
let pDelta = {x:null,y:null};
var dx = [0,0,1,0,-1];
var dy = [0,-1,0,1,0];
var d = 0;
// var a = [[0,0,0,0,0,1],[0,0,1,0,1,0],[0,0,0,0,1,0],[1,0,0,0,0,1],[0,0,0,0,0,0],[1,0,0,0,0,0]];
// var c = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
// var e = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
//var inpx = 1,inpy = 1,outx = 3, outy = 1;
//var col = 6, row =6;

function check(i,j){
    let row = document.getElementById("inputRowMaze").value;
    let col = document.getElementById("inputColMaze").value;
    if(i < 0 || i >= row || j < 0 || j>=col){
        return 0;
    }
    if(matrix[i][j] != 0 || matrix_search[i][j] !=0){
        return 0;
    }
    return 1;
}
function prepare(matrix_search,inpx,inpy,row,col){
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            matrix_search[i][j] = 0;
        }
    }
    matrix_search[inpx][inpy] = -1;
}
function dfs(inpx,inpy){
    if(inpx==pEnd.x && inpy==pEnd.y){
        d=1;
    }
    else{
        var k;
        for(k=1;k<=4;++k){
            if(check(inpx + dx[k],inpy+dy[k])){
                matrix_search[inpx+dx[k]][inpy+dy[k]] = k;
                dfs(inpx+dx[k],inpy+dy[k]);
            }
        }
    }
}

 
let createWay = () =>{
    let currentCell={x:null,y:null};
    currentCell.x = pEnd.x;
    currentCell.y = pEnd.y;
    console.log(currentCell);
    while(matrix_search[currentCell.x][currentCell.y] != -1){
        console.log("BIA EM EI");
        if (matrix_search[currentCell.x][currentCell.y]==1){
            currentCell.y++;
            matrix_way[currentCell.x][currentCell.y]=1;
        }else if(matrix_search[currentCell.x][currentCell.y]==2){
            currentCell.x--;
            matrix_way[currentCell.x][currentCell.y]=1;
        }else if(matrix_search[currentCell.x][currentCell.y]==3){
            currentCell.y--;
            matrix_way[currentCell.x][currentCell.y]=1;
        }else if(matrix_search[currentCell.x][currentCell.y]==4){
            currentCell.x++;
            matrix_way[currentCell.x][currentCell.y]=1;
        }
    }
    let row = document.getElementById('inputRowMaze').value;
    let col = document.getElementById('inputColMaze').value;
    for (let i = 0 ; i < row ; i++){
        for (let j = 0 ; j < col ; j++){
            if (matrix_way[i][j]==1){
                let cell = document.getElementById(`row${i}col${j}`);
                cell.style.backgroundColor = 'yellow';
            }
        }
    }
}
 
 



// ---------------------------



let createMaze = (row,col) =>{
	let innerHTMLString = "";
    for (let i = 0 ; i< row ; i++){
        innerHTMLString +="<tr>";    
        for(let j = 0 ; j < col ; j++){
            innerHTMLString +=`<td class="cell-maze" id="row${i}col${j}" onclick="getPointDelta(${i},${j})"></td>`;    
        }
        innerHTMLString +="</tr>";    
    }
    let newInnerHTML = `<table id="table">${innerHTMLString}</table>`;
    //var maze = document.getElementById('maze');
    var maze = document.getElementById('maze');
    maze.innerHTML = newInnerHTML;
    $("#btnStartMaze").show();
    $("#btnEndMaze").show();
}
let randomBinary = ()=> {
    let weightRandom = 1-document.getElementById("weightRandom").value;
    if (Math.random() > weightRandom){
        return 1;
    }else{
        return 0;
    }
}
let colorCell = (value) =>{
    if (value){
        return 'black';
    }else{
        return 'whitesmoke'; 
    }
}

let createMatrix = (row,col) =>{
    rowMatrix = new Array(); 
    for (let i = 0 ; i < row ; i++ ){
        let colMatrix = new Array();
        for(let j = 0 ; j < col ; j++){
            colMatrix.push(randomBinary());
        }
        rowMatrix.push(colMatrix);
    }
    return rowMatrix;
}

let createMatrix0 = (row,col) =>{
    rowMatrix = new Array(); 
    for (let i = 0 ; i < row ; i++ ){
        let colMatrix = new Array();
        for(let j = 0 ; j < col ; j++){
            colMatrix.push(0);
        }
        rowMatrix.push(colMatrix);
    }
    return rowMatrix;
}

let inputValueToMaze = (row,col) =>{
    for(let i = 0; i< row ; i++){
        for(let j = 0; j < col ; j++){
            try{
                let cell = document.getElementById(`row${i}col${j}`);
                if (cell){
                    cell.style.backgroundColor = colorCell(matrix[i][j]);
                    cell.value = matrix[i][j];
                }

            }catch(e){
                console.log(e);
            }
        }
    }
}
let getPointDelta = (x,y) =>{
    if (matrix[x][y]==1){
        alert(`Can't choose it (${x},${y})`);
    }else{
        pDelta.x=x;
        pDelta.y=y;
    }

}


let searchWay = () =>{
    if (pStart.x != null && pEnd.x != null){
        let row = document.getElementById("inputRowMaze").value;
        let col = document.getElementById("inputColMaze").value;
        prepare(matrix_search,pStart.x,pStart.y,row,col);
        dfs(pStart.x,pStart.y);

        if(d==0){
            alert("KHÔNG THẤY ĐƯỜNG VỀ");
        }else{
            createWay();
        }

    }
}
$(document).ready(function () {
    $("#btnStartMaze").hide();
    $("#btnEndMaze").hide();
    $("#btnCreateMaze").click(()=>{
        let row = $("#inputRowMaze").val();
        let col = $("#inputColMaze").val();
        createMaze(row,col);
        matrix=createMatrix(row,col);
        matrix_search=createMatrix0(row,col);
        matrix_way=createMatrix0(row,col);
        inputValueToMaze(row,col);
        
         pStart = {x:null,y:null};
         pEnd = {x:null,y:null};
         pDelta = {x:null,y:null};
         d=0;

        
    });    


    $("#btnStartMaze").click(()=>{
        if (pDelta.x != null && pDelta.y != null ){
            if (pStart.x != null){
                let startCurrentCell = document.getElementById(`row${pStart.x}col${pStart.y}`);
                startCurrentCell.style.backgroundColor = 'whitesmoke';
            }

            pStart.x = pDelta.x;
            pStart.y = pDelta.y;
            $("#btnStartMaze").text(`Start (x:${pDelta.x},y:${pDelta.y})`);
            let cell = document.getElementById(`row${pDelta.x}col${pDelta.y}`);
            cell.style.backgroundColor = 'yellow';
        }else{
            $("#btnStartMaze").text(`Start`);
        }
        pDelta.x = null;
        pDelta.y = null;
        searchWay();
    });


    $("#btnEndMaze").click(()=>{
        if (pDelta.x != null && pDelta.y != null ){
            if (pEnd.x != null){
                let endCurrentCell = document.getElementById(`row${pEnd.x}col${pEnd.y}`);
                endCurrentCell.style.backgroundColor = 'whitesmoke';
            }

            pEnd.x = pDelta.x;
            pEnd.y = pDelta.y;
            $("#btnEndMaze").text(`End (x:${pEnd.x},y:${pEnd.y})`);
            let cell = document.getElementById(`row${pEnd.x}col${pEnd.y}`);
            cell.style.backgroundColor = 'yellow';
        }else{
            $("#btnEndMaze").text(`End`);
        }
        pDelta.x = null;
        pDelta.y = null;
        searchWay();
    });
});
