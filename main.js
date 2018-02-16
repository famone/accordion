var accordion = document.getElementsByClassName("accordion-control");

for (i=0; i<accordion.length; i++){
  accordion[i].onclick = function() {
    this.classList.toggle('active');
    var panel = document.getElementsByClassName(".accordion-panel");
    if (panel.style.maxHeight) {
      panel.style.maxHeight= null;
    } else {
      panel.style.maxHeight=panel.scrollHeight+"px";
    }
  }
}
