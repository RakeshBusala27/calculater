let result=document.getElementById("result");
function getResult(value){
    if (value==="="){
        result.value=eval(result.value);
    }
    else{
        result.value+=value;
    }
}
function clearResult(){
    result.value="";
}
function deleteBack(){
    let del = document.getElementById("result");
    let value = del.value;
    del.value=value.slice(0,-1)
}