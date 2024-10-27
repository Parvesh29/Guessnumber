var A=Math.floor(Math.random()*10)+1;
var input=document.getElementById("inp1");
var buttn=document.getElementById("btn");
var p1=document.getElementById("text");
var score=10;
var p2=document.getElementById("score");
function check(){
    var num=input.value
    if(A==num){
        console.log("Right")
        p1.textContent="Right"
        alert("You Won")
    }
    else{
        score=score-1
        p2.textContent="Score:"+score;
        if(score==0){
            alert("You Lost...")
        }
        console.log("Wrong")
        p1.textContent="Wrong"
    }


}
