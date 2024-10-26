/*var guessnumber=document.getElementById("num")
        var result=document.getElementById("result")
        var randomNumber=Math.floor(Math.random()*10)+1
        function check(){
            var enterednum=guessnumber.value
            if(randomNumber==enterednum){
                console.log("Right")
                result.textContent="Right"
                alert("You Won")
            }
            else{
                console.log("Wrong")
                result.textContent="Wrong"
            }
        }*/
/*function Name(){
    document.getElementById("mysubmit")
    let username=document.getElementById("myinput").value
    //to check: console.log("username") and
    document.getElementById("myh1").textContent=`Hello ${username}`

}*/
/*let A=document.getElementById("num1");
let B=document.getElementById("num2");
let C=document.getElementById("result");
function Total(){
    let total=Number(A.value)+Number(B.value);
    console.log(total);
    C.textContent="Result: "+total;

}*/
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
