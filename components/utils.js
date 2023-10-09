
export function reveal(targetContainer, activeClass, elementVisible) {
  if (!elementVisible) { elementVisible = 150; }
  var reveals = document.getElementsByClassName(targetContainer);

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add(activeClass);
    } else {
      reveals[i].classList.remove(activeClass);
    }
  }
}

export function showNavOnScroll() {
  const scrollHeight = 200;
  const navBars = document.getElementsByClassName("navhide");

  if (navBars.length > 0) {
    if (document.body.scrollTop > scrollHeight || document.documentElement.scrollTop > scrollHeight) {
      navBars[0].classList.add("navshow");
    } else {
      navBars[0].classList.remove("navshow");
    }
  }
}