var status=1;
function submit() {
    document.getElementById("txt_submit").innerHTML = "*Thanks for the feedback.*";
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