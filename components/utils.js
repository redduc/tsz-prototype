
export function reveal(targetContainer, activeClass) {
  var reveals = document.getElementsByClassName(targetContainer);

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add(activeClass);
    } else {
      reveals[i].classList.remove(activeClass);
    }
  }
}