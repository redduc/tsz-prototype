  // Create a new intersection observer instance
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Check if the target element is intersecting with the viewport
      if (entry.isIntersecting) {
        // Call your function when the element becomes visible
        elementIsVisible(entry.target);
      }
    }, {
        // dont use the property, it will case a look between if and else if.
        threshold: 0.5 // Fire when element is 50% in view
    });
  });

  // Select the target elements
  const animatedElements = document.querySelectorAll('.animeo');
  // Start observing the target element
  animatedElements.forEach(element => {
    observer.observe(element);
  });

  // Function to be triggered when the element is visible
  function elementIsVisible(target) {
    const animationType = target.dataset.animation.toLowerCase();
    const animationDelay = target.dataset.delay || 0;
    const animationDuration = target.dataset.duration || 1000;

    switch(animationType) {
        case "opacityshow": animateOpacityShow(target,animationDuration, animationDelay); break;
        case "pulse": animatePulse(target,animationDuration, animationDelay); break;
    }

  }

  function animateOpacityShow(target, duration, delay) {
    anime({
        targets: target,
        opacity: 1,
        easing: "linear",
        duration: duration,
        delay: delay,
        autoplay: true
      });
  }
  function animatePulse(target, duration, delay) {
    // Initialize the timeline object (optionally with default parameters).
    const tl = anime.timeline({ duration: duration, loop: false });

    // first animation step
    tl.add({
        targets: target,
        scale: 1.05,
        duration: duration / 2, // duration of the animation step in ms
        easing: 'easeInOutQuart',
    });
    // second animation step
    tl.add({
        targets: target,
        scale: 1,
        duration: duration / 2, // duration of the animation step in ms
        easing: 'easeInOutQuart',
    });
  }
