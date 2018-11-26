
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
   
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <link rel="manifest" href="manifest.json">
<!-- Compiled and minified CSS -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

  <title>Nongoma Coders</title>
  
  <script>
// Check that service workers are registered
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js');
  });
}
</script>
    <!-- Compiled and minified JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  <script src="./js/main.js"></script>
</head>

<body>
<nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">ZLC</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">        
        <li> <a href="./lessons">Lessons</a></li>        
        <li><a href="./students">Students</a>   </li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">   
    <li> <a href="./lessons">Lessons</a></li>
    <li><a href="./students">Students</a>   </li>
   
  </ul>
 
  
 
 <?php
  include 'getposts.php'
 ?>
 <a id="create-post" class="btn" href="new-post.html">+ Create Post</a>
</body>

</html>