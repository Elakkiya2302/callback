function countdown(num,callback){
    var countdownele = document.getElementById("countdown");
    countdownele.innerHTML = num;
    if (num>0){
        setTimeout(()=>{
            countdown(num-1,callback);
        },1000)
    }else{
        callback();
    }

}
function displayMessage(){
    document.getElementById("message").innerHTML= "Happy Independence Day";
}

var res = countdown(10,displayMessage)
document.body.append(res);