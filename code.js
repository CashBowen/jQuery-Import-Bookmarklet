window.jQuery_import = function() {
  if (window.jQuery) {  
    alert('jQuery Already Loaded'); 
} else {
    var importjquery = document.createElement('script');
var jqueryv = '3.6.0';
importjquery.src = "//ajax.googleapis.com/ajax/libs/jquery/"+jqueryv+"/jquery.min.js";
document.head.appendChild(importjquery);
  alert('jQuery Imported');
}
}
