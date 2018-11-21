function showEnglish(){
    var elsZulu=document.getElementsByClassName("isizulu");
    for (let index = 0; index < elsZulu.length; index++) {
        elsZulu[index].style.display="none";        
    }
    var elsEnglish=document.getElementsByClassName("english");
    for (let index = 0; index < elsEnglish.length; index++) {
        elsEnglish[index].style.display="block";        
    }
}
function showZulu(){
    var elsZulu=document.getElementsByClassName("isizulu");
    for (let index = 0; index < elsZulu.length; index++) {
        elsZulu[index].style.display="block";        
    }
    var elsEnglish=document.getElementsByClassName("english");
    for (let index = 0; index < elsEnglish.length; index++) {
        elsEnglish[index].style.display="none";        
    }
}
function submitForm() {
    var form = document.getElementById('post-form');
    var formdata = new FormData(form);
    fetch('https://www.zululandcoders.co.za/addpost.php', {
            method: 'POST',
            body: formdata
        })
        .then(response => response.json())
        .then(json => {
            console.log(json['success']);
            if (json['success']) {
                document.location.assign("index.php")
            } else {
                showErrorModal("username does not exist")
            }
        })
}

function showErrorModal(msg) {
    var x = document.getElementById("snackbar");
    x.innerText=msg;
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function getLessonComments(lessonName){
    fetch('https://www.zululandcoders.co.za/getlessoncomments.php', {
        method: 'POST',
        body: {lesson:lessonName}
    })
    .then(response => response.json())
    .then(json => {
        console.log(json['success']);
        if (json['success']) {
            document.location.assign("index.php")
        } else {
            showErrorModal("username does not exist")
        }
    })
}