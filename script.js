window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
      
function toStart(e) {
window.location.href="#start";
e.preventDefault();
e.stopPropagation(); 
}

      