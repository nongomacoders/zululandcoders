var postid,server="//localhost/zululandcoders/src/";function showEnglish(){for(var e=document.getElementsByClassName("isizulu"),s=0;s<e.length;s++)e[s].style.display="none";var t=document.getElementsByClassName("english");for(let e=0;e<t.length;e++)t[e].style.display="block"}function showZulu(){for(var e=document.getElementsByClassName("isizulu"),s=0;s<e.length;s++)e[s].style.display="block";var t=document.getElementsByClassName("english");for(s=0;s<t.length;s++)t[s].style.display="none"}function submitAddPost(){var e=document.getElementById("post-form"),s=new FormData(e);fetch(`${server}addpost.php`,{method:"POST",body:s}).then(e=>e.json()).then(e=>{console.log(e.success),e.success?document.location.assign("index.html"):showErrorModal("username does not exist")})}function showErrorModal(e){var s=document.getElementById("snackbar");s.innerText=e,s.className="show",setTimeout(function(){s.className=s.className.replace("show","")},3e3)}function getLessonComments(e){fetch(`${server}getlessoncomments.php`,{method:"POST",body:{lesson:e}}).then(e=>e.json()).then(e=>{console.log(e.success),e.success?document.location.assign("index.php"):showErrorModal("username does not exist")})}function showPosts(e){fetch(`${server}getposts.php`,{method:"POST",body:{}}).then(e=>e.json()).then(e=>{createPosts(e)})}function createPosts(e){ElPosts=document.getElementById("posts");let s="";for(let t=0;t<e.length;t++)console.log(e[t]),s+=`\n\t\t<div class="card blue-grey darken-1">\n\t\t<span class="white-text badge deep-orange ">${e[t].posttype}</span>\n        <div class="card-content white-text">\n          <span class="card-title">${e[t].posttitle}</span>\n          <p>${e[t].postbody}</p>        \n\t<hr>\n\t<span class=" grey-text badge ">${e[t].postdate.substr(0,10)}</span>\n         <span class=" white-text badge green " style="float:left">${e[t].username}</span>\n         \n        \n\t\t </div>\n      </div>\n\t\t`;ElPosts.innerHTML=s}document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".sidenav");M.Sidenav.init(e,{edge:"left"})});