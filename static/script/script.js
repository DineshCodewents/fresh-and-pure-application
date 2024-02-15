document.addEventListener("DOMContentLoaded", function () {
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  function handleIntersection(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }
  var observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
  var section2 = document.getElementById("section-2");
  var section4 = document.getElementById("section-4");

  if (section2) {
    observer.observe(section2);
  }

  if (section4) {
    observer.observe(section4);
  }
});
document.addEventListener("DOMContentLoaded", function () {
  function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  var navbar = document.querySelector(".navbar-nav");

  if (navbar) {
    navbar.addEventListener("click", function (event) {
      event.preventDefault();
      if (event.target.tagName === "A") {
        var targetSectionId = event.target.getAttribute("data-section-id");
        scrollToSection(targetSectionId);
      }
    });
  }
  var carouselItems = document.querySelectorAll(".navbar-icons");
  carouselItems.forEach(function (carouselItem) {
    carouselItem.addEventListener("click", function (event) {
      event.preventDefault();
      if (event.target.tagName === "BUTTON") {
        var targetSectionId = event.target.getAttribute("data-section-id");
        scrollToSection(targetSectionId);
      }
    });
  });
});
