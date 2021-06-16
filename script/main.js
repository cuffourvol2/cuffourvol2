
<script>
// if viewportWidth width <= 991
if(window.innerWidth <= 991){
  // load mobile script
  loadScriptFile('script/mobile.js');
}
else{ // viewportWidth width > 991
  // load desktop script
  loadScriptFile('script/desktop.js');
}

// loadScriptFile func
function loadScriptFile(src){
  // create element <script>
  const $script = $('<script>');
  // add type attribute
  $script.attr('type', 'text/javascript');
  // add src attribute
  $script.attr('src', src);
  // append the <script> element to <head>
  $script.appendTo('head');
}
</script>