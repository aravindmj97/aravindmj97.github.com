// utilities
var get = function (selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelector(selector);
};

var getAll = function (selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelectorAll(selector);
};

// setup typewriter effect in the terminal demo
if (document.getElementsByClassName('aboutme').length > 0) {
  var i = 0;
  var txt = `
            About Me
            
              - I'm From God's Own Country Kerala 🌴
              - I'm working at SAP Labs India for 4 years
              - Completed M.Tech in Software Engineering from BITS Pilani 🏫
              - Studied B.Tech CSE from Cochin University of Science and Technology 🏫

            Interests

              - Photography and Videography
              - Watch Tech reviews 📱
              - Like to read about new Gadgets
              - Watch Movies 
              - Play Games 🎮
              - Hangout with friends
              - Travelling 🧳
              - Learning Digital Art
              - Like Cooking 👩‍🍳

            Professional Journey

              I started off as a Scholar@SAP back in 2019. Completed my MTech in Jan 2021.
              During the Scholar period, I have worked in multiple teams both technical and non-technical.
              I was able to experience various domains and work with different colleagues on interesting and challenging topics.

              I got converted as an Associate Developer in Jan 2021 and I'm continuing to work in the PLM Discrete BOM which is the team
              I joined during my 2nd scholar practical phase.

              Now, I'm working as a Developer in the PLM Discrete BOM.

              We develop maintenance and utility applications for the Bills Of Material in the S/4HANA suite of applications.
              
            `;
  var speed = 40;

  function typeItOut () {
    if (i < txt.length) {
      document.getElementsByClassName('aboutme')[0].innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeItOut, speed);
    }
  }

  setTimeout(typeItOut, 1800);
}

// toggle tabs on codeblock
window.addEventListener("load", function() {
  // get all tab_containers in the document
  var tabContainers = getAll(".tab__container");

  // bind click event to each tab container
  for (var i = 0; i < tabContainers.length; i++) {
    get('.tab__menu', tabContainers[i]).addEventListener("click", tabClick);
  }

  // each click event is scoped to the tab_container
  function tabClick (event) {
    var scope = event.currentTarget.parentNode;
    var clickedTab = event.target;
    var tabs = getAll('.tab', scope);
    var panes = getAll('.tab__pane', scope);
    var activePane = get(`.${clickedTab.getAttribute('data-tab')}`, scope);

    // remove all active tab classes
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
    }

    // remove all active pane classes
    for (var i = 0; i < panes.length; i++) {
      panes[i].classList.remove('active');
    }

    // apply active classes on desired tab and pane
    clickedTab.classList.add('active');
    activePane.classList.add('active');
  }
});

//in page scrolling for documentaiton page
var btns = getAll('.js-btn');
var sections = getAll('.js-section');

function setActiveLink(event) {
  // remove all active tab classes
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.remove('selected');
  }

  event.target.classList.add('selected');
}

function smoothScrollTo(i, event) {
  var element = sections[i];
  setActiveLink(event);

  window.scrollTo({
    'behavior': 'smooth',
    'top': element.offsetTop - 20,
    'left': 0
  });
}

if (btns.length && sections.length > 0) {
  for (var i = 0; i<btns.length; i++) {
    btns[i].addEventListener('click', smoothScrollTo.bind(this,i));
  }
}

// fix menu to page-top once user starts scrolling
window.addEventListener('scroll', function () {
  var docNav = get('.doc__nav > ul');

  if( docNav) {
    if (window.pageYOffset > 63) {
      docNav.classList.add('fixed');
    } else {
      docNav.classList.remove('fixed');
    }
  }
});

// responsive navigation
var topNav = get('.menu');
var icon = get('.toggle');

window.addEventListener('load', function(){
  function showNav() {
    if (topNav.className === 'menu') {
      topNav.className += ' responsive';
      icon.className += ' open';
    } else {
      topNav.className = 'menu';
      icon.classList.remove('open');
    }
  }
  icon.addEventListener('click', showNav);
});

