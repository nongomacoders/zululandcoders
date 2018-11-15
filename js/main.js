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