var postid;
var server=`//localhost/zululandcoders/src/` //var server=`https://www.zululandcoders.co.za/`
document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.sidenav');
	var instances = M.Sidenav.init(elems, {
		edge: 'left'
	});
});

function showEnglish() {
	var elsZulu = document.getElementsByClassName('isizulu');
	for (var index = 0; index < elsZulu.length; index++) {
		elsZulu[index].style.display = 'none';
	}
	var elsEnglish = document.getElementsByClassName('english');
	for (let index = 0; index < elsEnglish.length; index++) {
		elsEnglish[index].style.display = 'block';
	}
}

function showZulu() {
	var elsZulu = document.getElementsByClassName('isizulu');
	for (var index = 0; index < elsZulu.length; index++) {
		elsZulu[index].style.display = 'block';
	}
	var elsEnglish = document.getElementsByClassName('english');
	for (var index = 0; index < elsEnglish.length; index++) {
		elsEnglish[index].style.display = 'none';
	}
}

function submitAddPost() {
	var form = document.getElementById('post-form');
	var formdata = new FormData(form);
	fetch(`${server}addpost.php`, {
			method: 'POST',
			body: formdata
		})
		.then(response => response.json())
		.then(json => {
			console.log(json['success']);
			if (json['success']) {
				document.location.assign('index.html');
			} else {
				showErrorModal('username does not exist');
			}
		});
}

function showErrorModal(msg) {
	var x = document.getElementById('snackbar');
	x.innerText = msg;
	x.className = 'show';
	setTimeout(function () {
		x.className = x.className.replace('show', '');
	}, 3000);
}

function getLessonComments(lessonName) {
	fetch(`${server}getlessoncomments.php`, {
			method: 'POST',
			body: {
				lesson: lessonName
			}
		})
		.then(response => response.json())
		.then(json => {
			console.log(json['success']);
			if (json['success']) {
				document.location.assign('index.php');
			} else {
				showErrorModal('username does not exist');
			}
		});
}

function showPosts(posttype) {

	fetch(`${server}getposts.php`,{
		method: 'POST',
		body: {}
	})
		.then(response => response.json())
		.then(json => {
			createPosts(json);
		});
}

function createPosts(obj){
	
	
	ElPosts=document.getElementById("posts");
	let EL="";
	for (let index = 0; index < obj.length; index++) {
		console.log(obj[index]);
		EL+=`
		<div class="card blue-grey darken-1">
		<span class="white-text badge deep-orange ">${obj[index].posttype}</span>
        <div class="card-content white-text">
          <span class="card-title">${obj[index].posttitle}</span>
          <p>${obj[index].postbody}</p>        
	<hr>
	<span class=" grey-text badge ">${obj[index].postdate.substr(0,10)}</span>
		 <span class=" white-text badge green " style="float:left">${obj[index].username}</span>
		 <br>
		 <hr>
		 <button class='btn'>Comment</button>
		 <button class='btn-flat'>Show</button>
		 <button class='btn-flat'>Hide</button>
        
		 </div>
      </div>
		`;	
		
	}
		
    ElPosts.innerHTML=EL;	
}