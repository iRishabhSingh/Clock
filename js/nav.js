function activeNav(activeLinkId) {
  // Get all the navigation links
  const navLinks = document.querySelectorAll(".header__nav-link");

  // Remove the 'header__nav-link--selected' class from all links
  navLinks.forEach(function (link) {
    link.classList.remove("header__nav-link--selected");
  });

  // Add the 'header__nav-link--selected' class to the clicked link
  document
    .getElementById(activeLinkId)
    .classList.add("header__nav-link--selected");

  // Hide all clock sections
  document.getElementById("analogClockSection").style.display = "none";
  document.getElementById("digitalClockSection").style.display = "none";

  // Show the respective clock section based on the selected link
  if (activeLinkId === "analogNavLink") {
    document.getElementById("analogClockSection").style.display = "block";
  } else if (activeLinkId === "digitalNavLink") {
    document.getElementById("digitalClockSection").style.display = "block";
  }
}
