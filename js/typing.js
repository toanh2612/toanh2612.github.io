var d=0;
var dd=0
var wordinput="";
function updatep(){
	var p1=document.getElementById("content").value;
	var p2=document.getElementById("content").textContent;
	document.getElementById("content").innerHTML=p1;
	p1=p2;
	d=0;
	dd=0;
	wordinput="";
	document.getElementById("oneword").innerHTML="Updated. Typing to start !!!";
}
function getunicode(event) {
    var x = event.which || event.keyCode;
    var content=document.getElementById("content").textContent;
    var charinput=String.fromCharCode(x);
    if(x !=32){
    	wordinput+=charinput;
	}
    var word=content.split(" ");
    document.getElementById("oneword").innerHTML =word[d];	
    if (x==32){
		if (word[d]==wordinput){
			 dd++;
		}
	if (d !=word.length-1){
		d++;
	}
	document.getElementById("oneword").innerHTML =word[d];	
	if (word[d]==""){
		document.getElementById("oneword").innerHTML="Key [Space]";
	}
    if (dd==word.length){
    	document.getElementById("oneword").innerHTML="Completed ! Click Update Or Key [Enter]";
    	
    }
	wordinput="";			    	
	document.getElementById("form_reset").reset();

    }

    document.getElementById("keycode").innerHTML ="The Unicode value is: " + x;  
    document.getElementById("result").innerHTML= "True word: "+dd+"/"+word.length;
}