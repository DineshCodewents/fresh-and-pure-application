document.addEventListener("DOMContentLoaded", function () {
  // Function to check if an element is in the viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to handle intersection observer events
  function handleIntersection(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }

  // Set up an Intersection Observer to trigger animations when the section comes into view
  var observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

  // Targeting section-2 and section-4
  var section2 = document.getElementById("section-2");
  var section4 = document.getElementById("section-4");

  if (section2) {
    observer.observe(section2);
  }

  if (section4) {
    observer.observe(section4);
  }

  // Attach slid.bs.carousel event listener after DOMContentLoaded
 
});
