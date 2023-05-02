//////////////////////////////
// Navigation Functionality //
const dropdown = document.querySelector(".dropdown");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  dropdown.classList.toggle("show");
});

//////////////////////////////
// Slideshow Functionality //

// Get all tab elements
const tabs = document.querySelectorAll(".tab");

// Get all tab pane elements
const tabPanes = document.querySelectorAll(".tab-pane");

// Add click event listeners to each tab
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove the 'active' class from all tabs and tab panes
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    tabPanes.forEach((tabPane) => {
      tabPane.classList.remove("active");
    });

    // Add the 'active' class to the clicked tab and tab pane
    const tabId = tab.getAttribute("data-tab");
    const tabPane = document.getElementById(tabId);

    tab.classList.add("active");
    tabPane.classList.add("active");
  });
});

// Accordion Functionality
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    header.classList.toggle("active");

    const accordionContent = header.nextElementSibling;
    const accordionSVG = header.querySelector(".my-svg");
    if (accordionContent.style.display === "block") {
      accordionContent.style.display = "none";
      accordionSVG.setAttribute("stroke", "#5267DF");
      accordionSVG.setAttribute("d", "M 1 1 l 8 8 8-8");
    } else {
      accordionContent.style.display = "block";
      accordionSVG.setAttribute("stroke", "#fa5959");
      accordionSVG.setAttribute("d", "M 1 9 l 8 -8 l 8 8");
    }
  });
});

// Error message for email validation
const emailInput = document.getElementById("email-input");
const iconWrapper = document.querySelector(".icon-wrapper");
const formA = document.querySelector(".email-form");

emailInput.addEventListener("invalid", (event) => {
  event.preventDefault();
  emailInput.setCustomValidity("Please enter a valid email address.");
  emailInput.style.border = "2px solid #fa5959";
  iconWrapper.style.display = "block";
});

emailInput.addEventListener("input", () => {
  emailInput.setCustomValidity("");
  iconWrapper.style.display = "none";
});

formA.addEventListener("submit", (event) => {
  if (emailInput.checkValidity()) {
    emailInput.value = "";
  } else {
    event.preventDefault();
  }
});
