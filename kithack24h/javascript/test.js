var dx = [0,0,1,0,-1];
var dy = [0,-1,0,1,0];
var d = 0;
var a = [[0,0,0,0,0,1],[0,0,1,0,1,0],[0,0,0,0,1,0],[1,0,0,0,0,1],[0,0,0,0,0,0],[1,0,0,0,0,0]];
var c = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
var e = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
var inpx = 1,inpy = 1,outx = 3, outy = 1;
var col = 6, row =6;
function check(i,j){
    if(i < 0 || i >= row || j < 0 || j>=col){
        return 0;
    }
    if(a[i][j] != 0 || c[i][j] !=0){
        return 0;
    }
    return 1;
}
function prepare(){
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            c[i][j] = 0;
        }
    }
    c[inpx-1][inpy-1] = -1;
}
function dfs(i,j){
    if(i==outx-1 && j==outy-1){
        d=1;
    }
    else{
        var k;
        for(k=1;k<=4;++k){
            if(check(i + dx[k],j+dy[k])){
                c[i+dx[k]][j+dy[k]] = k;
                dfs(i+dx[k],j+dy[k]);
            }
        }
    }
}
function inchotoang(i,j){
    for(let i=0;i<row;i++){
        let str="";
        for(let j=0;j<col;j++){
            str+=` ${c[i][j]} `
            //console.log(c[i][j]);
        }
        console.log(str);
    }
}

let createLine = (inp_x,inp_y,out_x,out_y) =>{
    --out_x;
    --out_y;
    --inp_x;
    --inp_y;
    let currentCell={x:null,y:null};
    currentCell.x = out_x;
    currentCell.y = out_y;
    console.log(c[currentCell.x][currentCell.y]);
    e[inp_x][inp_y]=1;
    e[out_x][out_y]=1;
    while(c[currentCell.x][currentCell.y] != -1){
        if (c[currentCell.x][currentCell.y]==1){
            currentCell.y--;
            e[currentCell.x][currentCell.y]=1;
           
        }else if(c[currentCell.x][currentCell.y]==2){
            currentCell.x--;
            e[currentCell.x][currentCell.y]=1;
            
        }else if(c[currentCell.x][currentCell.y]==3){
            currentCell.y++;
            e[currentCell.x][currentCell.y]=1;
            
        }else if(c[currentCell.x][currentCell.y]==4){
            currentCell.x++;
            e[currentCell.x][currentCell.y]=1;
            
        }
    }
}

let printLine =(row,col)=>{
    for (let i = 0; i < row;i++){
        let str = "";
        for(let j = 0; j < col;j++){
            str+= ` ${e[i][j]} `;
        }
        console.log(str);
    }
}

prepare();
dfs(inpx-1,inpy-1);
inchotoang(6,6);
createLine(1,1,3,1);
printLine(6,6);
// d = 0 => deo co duong

