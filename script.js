window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
      
function toStart(e) {
window.location.href="#start";
e.preventDefault();
e.stopPropagation(); 
}
function toBlog(e) {
window.location.href="#back";
e.preventDefault();
e.stopPropagation(); 
}

      