function handleColor(bg){
    var bg=document.getElementById("data").value
    document.getElementById("bg").style.backgroundColor=bg;
}
function handleRemove(){
    var bg=document.getElementById('data').value
    document.getElementById("bg").style.backgroundColor="";
}
 function handleClear(){
    document.getElementById("data").value="";
}