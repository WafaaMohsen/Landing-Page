/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
 const scrollButton = document.getElementById('myBtn');
 const sections = document.querySelectorAll('section');
 const navbarBuild = document.getElementById('navbar__list');
 
 let navList = '';
 /**
  * End Global Variables
  * Start Helper Functions
  
  *
  */
 // Generate navbar from sections 
 function gernerateNavbar() {
   sections.forEach((section) => {
     // add html tags for list items
     navList += `<li> <a class="nav__link menu__link" href="#${section.id}" id="navli">
           ${section.dataset.nav}</a></li>`;
   });
   // add the tags to the inner htmls
   navbarBuild.innerHTML = navList;
 }
  // build the nav
 gernerateNavbar();

 //resizeing the landing page
window.addEventListener("resize", () => {
  positionNavLine(navbar__list[0].offsetLeft, navbar__list[0].offsetWidth);
  });
 
 // Add class 'active' to section when near top of viewport (Eye level )
 
 function addActiveClass(section) {
   // get the id from the section
   const id = section.getAttribute('id');
 
   // add the active class to the section
   document.querySelector(`#${id}`).classList.add('your-active-class');
 }
 
 //Removing the active class from the section
 function removeActiveClass(section) {
   const id = section.getAttribute('id');
   document.querySelector(`#${id}`).classList.remove('your-active-class');
 }
 
 // calcualting when the section is active
 function makeActiveSection() {
   sectionsElements.forEach((section) => {
//using getBoundingClientRect
     let elementOffset = section.getBoundingClientRect();
     if (elementOffset.top <= 150 && elementOffset.bottom >= 150) {
       addActiveClass(section);
     } else {
       removeActiveClass(section);
     }
   });
 }
 // event listener for scrolling
 document.addEventListener('scroll', makeActiveSection);
 
 // get a button to scroll back to top of the page
 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function () {
   scrollFunction();
 };
 
 function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = 'block';
   } else {
    scrollButton.style.display = 'none';
   }
 }
  // Scroll to anchor ID using scrollTO event
  var scrolling_to = document.getElementById('id');
  scrolling_to.scrollIntoView();
 
  // Set sections as active
 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
   document.documentElement.scrollTop = 0; 
 }

 
 mybutton.addEventListener('click', topFunction);
 
 let navbar = document.getElementById('navbar').querySelectorAll('li');
 
 // itrate in li items list
 navbar.forEach((item) => {
   item.addEventListener('click', function (e) {
     navbar.forEach((item) => {
       // remove every navbarclick class added befoe in any list item
       item.classList.remove('navbarclick');
     });
     // add the class on the button
     item.classList.add('navbarclick');
   });
 });

 // Scroll to section on link click
document.querySelector(this.getAttribute('href')).scrollIntoView({
  behavior: 'smooth'
});
 
 
