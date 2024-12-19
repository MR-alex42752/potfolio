$(document).ready(function () {
  // Scroll down sticky navbar script start
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    // Scroll down sticky navbar script end

    // Scroll up Button script start
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
    // Scroll up Button script end

 
  });

  // Scroll up Button script start
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });
  // Scroll up Button script end

  // animation Script for display
  const animationScript = ["Front End Developer", "React.js Developer", "Next.js Developer"];

  // Typing animation script start
  if ($(".typing").length) {
    new Typed(".typing", {
        strings: animationScript,
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
} else {
    console.warn("Element with class 'typing' not found.");
}

if ($(".typing2").length) {
    new Typed(".typing2", {
        strings: animationScript,
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
} else {
    console.warn("Element with class 'typing2' not found.");
}
  
 

  // owl carousel script start
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      3000: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
  // owl carousel script end
});

// Get the current year
const currentYear = new Date().getFullYear();
// Set the current year in the span with id "year"
document.getElementById('year').textContent = currentYear;