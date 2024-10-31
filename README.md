# Project-6-Static-Node-Express

/*
  Made The Following Custom Style Changes
*/

/* 1. Updated color scheme for boyd, .sidebar, btn-link */
body {
  color: #1a1a1a; /* Darker text color */
}
.sidebar {
  background: #222; /* Dark grey sidebar background */
}
btn-link {
  background-color: #007acc; /* Bright blue for button background */
  color: #ffffff; /* White text color */
}

/* 2. Then I Added a hover effect for buttons */

a.btn-link:hover {
  background-color: #005f99;  /* Darken blue on hover */
  color: #ffffff;  /* Keep white text */
  transition: background-color 0.3s ease;  /* Smooth transition effect */
}