var status=1;
function submit() {
    document.getElementById("txt_submit").innerHTML = "";
    alert("Sorry\nThis function is still unavaliable")
}

function sort() {
    if(status==1){
    document.getElementById("sort_link").style.display = "block";
    status=0;
    } else {
        document.getElementById("sort_link").style.display = "none";
        status=1;
    }
}